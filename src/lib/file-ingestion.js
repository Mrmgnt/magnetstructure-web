import JSZip from 'jszip'
import { createExtractorFromData } from 'node-unrar-js/esm/index.esm.js'
import rarWasmUrl from 'node-unrar-js/esm/js/unrar.wasm?url'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { MAX_ARCHIVE_ENTRIES, MAX_ARCHIVE_TEXT_BYTES, MAX_ARCHIVE_UNCOMPRESSED_BYTES, MAX_FILE_BYTES, MAX_TEXT_BYTES, formatBytes, hasSensitivePattern, isAllowedFile, isBlockedArchivePath, isImagePath, isTextLikePath } from './reference-utils'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl
function mimeFromPath(path) {
  const lower = path.toLowerCase()
  if (lower.endsWith('.png')) return 'image/png'
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg'
  if (lower.endsWith('.webp')) return 'image/webp'
  if (lower.endsWith('.gif')) return 'image/gif'
  return 'application/octet-stream'
}

function decodeText(bytes) {
  return new TextDecoder('utf-8', { fatal: false }).decode(bytes)
}

async function readText(file, maxBytes = MAX_TEXT_BYTES) {
  const buffer = await file.arrayBuffer()
  return decodeText(new Uint8Array(buffer).slice(0, maxBytes))
}

async function resizeImageBlob(blob, maxDimension = 1600, quality = 0.76) {
  if (typeof document === 'undefined') return null
  const objectUrl = URL.createObjectURL(blob)
  try {
    const image = new Image()
    image.decoding = 'async'
    image.src = objectUrl
    await image.decode()
    const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight))
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale))
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale))
    const context = canvas.getContext('2d', { alpha: false })
    context.drawImage(image, 0, 0, canvas.width, canvas.height)
    return canvas.toDataURL('image/jpeg', quality)
  } finally {
    URL.revokeObjectURL(objectUrl)
  }
}

async function extractPdf(file) {
  const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise
  const textPages = []
  const imageData = []
  const pageLimit = Math.min(pdf.numPages, 8)

  for (let pageNumber = 1; pageNumber <= pageLimit; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber)
    const textContent = await page.getTextContent()
    const pageText = textContent.items.map((item) => item.str || '').join(' ').replace(/\s+/g, ' ').trim()
    if (pageText) textPages.push(`Page ${pageNumber}: ${pageText}`)

    if (!pageText && imageData.length < 2 && typeof document !== 'undefined') {
      const viewport = page.getViewport({ scale: 1.25 })
      const canvas = document.createElement('canvas')
      canvas.width = Math.min(1600, Math.ceil(viewport.width))
      canvas.height = Math.min(2200, Math.ceil(viewport.height))
      const scale = Math.min(canvas.width / viewport.width, canvas.height / viewport.height)
      await page.render({ canvasContext: canvas.getContext('2d'), viewport: page.getViewport({ scale }) }).promise
      imageData.push(canvas.toDataURL('image/jpeg', 0.72))
    }
  }

  return {
    text: textPages.join('\n').slice(0, MAX_TEXT_BYTES),
    pageCount: pdf.numPages,
    imageData,
    scanDetected: textPages.length === 0,
  }
}

async function extractZip(file) {
  const archive = await JSZip.loadAsync(await file.arrayBuffer(), { createFolders: false, checkCRC32: true })
  const entries = Object.values(archive.files)
  if (entries.length > MAX_ARCHIVE_ENTRIES) throw new Error(`ZIP memiliki lebih dari ${MAX_ARCHIVE_ENTRIES} entry.`)

  let uncompressedBytes = 0
  let textBytes = 0
  const includedEntries = []
  const textParts = []
  const imageData = []
  let ignoredEntries = 0

  for (const entry of entries) {
    const path = entry.name.replaceAll('\\', '/')
    const estimatedSize = entry._data?.uncompressedSize || 0
    uncompressedBytes += estimatedSize
    if (uncompressedBytes > MAX_ARCHIVE_UNCOMPRESSED_BYTES) throw new Error('Ukuran hasil extract ZIP melewati batas aman 100 MB.')
    if (entry.dir || isBlockedArchivePath(path)) {
      ignoredEntries += 1
      continue
    }

    if (isTextLikePath(path) && textBytes < MAX_ARCHIVE_TEXT_BYTES) {
      const bytes = await entry.async('uint8array')
      const available = Math.min(bytes.byteLength, MAX_ARCHIVE_TEXT_BYTES - textBytes)
      const text = decodeText(bytes.slice(0, available))
      textBytes += available
      textParts.push(`FILE: ${path}\n${text}`)
      includedEntries.push({ path, kind: 'text', size: bytes.byteLength })
    } else if (isImagePath(path) && imageData.length < 4 && estimatedSize <= 8 * 1024 * 1024) {
      const bytes = await entry.async('uint8array')
      const image = await resizeImageBlob(new Blob([bytes], { type: mimeFromPath(path) }))
      if (image) imageData.push(image)
      includedEntries.push({ path, kind: 'image', size: bytes.byteLength })
    } else {
      ignoredEntries += 1
    }
  }

  return {
    text: textParts.join('\n\n').slice(0, MAX_ARCHIVE_TEXT_BYTES),
    imageData,
    archive: { entryCount: entries.length, uncompressedBytes, ignoredEntries, includedEntries },
  }
}

let rarWasmBinaryPromise

function loadRarWasmBinary() {
  if (!rarWasmBinaryPromise) {
    rarWasmBinaryPromise = fetch(rarWasmUrl).then(async (response) => {
      if (!response.ok) throw new Error('WASM RAR tidak dapat dimuat.')
      return response.arrayBuffer()
    })
  }
  return rarWasmBinaryPromise
}

async function extractRar(file) {
  const extractor = await createExtractorFromData({
    data: await file.arrayBuffer(),
    wasmBinary: await loadRarWasmBinary(),
  })
  const entries = [...extractor.getFileList().fileHeaders]
  if (entries.length > MAX_ARCHIVE_ENTRIES) throw new Error(`RAR memiliki lebih dari ${MAX_ARCHIVE_ENTRIES} entry.`)

  let uncompressedBytes = 0
  for (const entry of entries) {
    uncompressedBytes += Number(entry.unpSize) || 0
    if (uncompressedBytes > MAX_ARCHIVE_UNCOMPRESSED_BYTES) throw new Error('Ukuran hasil extract RAR melewati batas aman 100 MB.')
  }

  let textBytes = 0
  const includedEntries = []
  const textParts = []
  const imageData = []
  const safePaths = []
  const seenPaths = new Set()
  let ignoredEntries = 0

  for (const entry of entries) {
    const path = entry.name.replaceAll('\\', '/')
    const isDuplicate = seenPaths.has(path)
    seenPaths.add(path)
    const isSafe = !entry.flags.directory && !entry.flags.encrypted && !isBlockedArchivePath(path) && !isDuplicate
    const isUsableImage = isImagePath(path) && (Number(entry.unpSize) || 0) <= 8 * 1024 * 1024
    if (!isSafe || (!isTextLikePath(path) && !isUsableImage)) {
      ignoredEntries += 1
      continue
    }
    safePaths.push(entry.name)
  }

  const extracted = [...extractor.extract({ files: safePaths }).files]
  for (const entry of extracted) {
    const path = entry.fileHeader.name.replaceAll('\\', '/')
    const bytes = entry.extraction || new Uint8Array()

    if (isTextLikePath(path) && textBytes < MAX_ARCHIVE_TEXT_BYTES) {
      const available = Math.min(bytes.byteLength, MAX_ARCHIVE_TEXT_BYTES - textBytes)
      const text = decodeText(bytes.slice(0, available))
      textBytes += available
      textParts.push(`FILE: ${path}\n${text}`)
      includedEntries.push({ path, kind: 'text', size: bytes.byteLength })
    } else if (isImagePath(path) && imageData.length < 4) {
      const image = await resizeImageBlob(new Blob([bytes], { type: mimeFromPath(path) }))
      if (image) imageData.push(image)
      includedEntries.push({ path, kind: 'image', size: bytes.byteLength })
    } else {
      ignoredEntries += 1
    }
  }

  return {
    text: textParts.join('\n\n').slice(0, MAX_ARCHIVE_TEXT_BYTES),
    imageData,
    archive: { entryCount: entries.length, uncompressedBytes, ignoredEntries, includedEntries },
  }
}

export async function processReferenceFile(file, category, id) {
  if (file.size > MAX_FILE_BYTES) throw new Error(`${file.name} melebihi batas ${formatBytes(MAX_FILE_BYTES)}.`)
  if (!isAllowedFile(file, category)) throw new Error(`Format ${file.name} tidak sesuai kategori ${category}.`)

  const lowerName = file.name.toLowerCase()
  const result = {
    id,
    category,
    name: file.name,
    type: file.type || 'Tipe tidak diketahui',
    size: file.size,
    status: 'ready',
    source: 'Upload browser',
    sensitiveWarning: hasSensitivePattern(file.name),
    warningMessage: '',
    extractedText: '',
    imageData: [],
    archive: null,
    rawFile: file,
  }

  if (lowerName.endsWith('.zip')) {
    const extracted = await extractZip(file)
    Object.assign(result, { ...extracted, warningMessage: extracted.archive.ignoredEntries ? `${extracted.archive.ignoredEntries} entry di-skip oleh safe whitelist.` : '' })
  } else if (lowerName.endsWith('.rar')) {
    const extracted = await extractRar(file)
    Object.assign(result, { ...extracted, warningMessage: extracted.archive.ignoredEntries ? `${extracted.archive.ignoredEntries} entry di-skip oleh safe whitelist.` : '' })
  } else if (lowerName.endsWith('.pdf')) {
    const extracted = await extractPdf(file)
    Object.assign(result, { extractedText: extracted.text, imageData: extracted.imageData, warningMessage: extracted.scanDetected ? 'PDF tidak memiliki text layer; preview vision disiapkan.' : '' })
  } else if (file.type.startsWith('image/') || isImagePath(lowerName)) {
    const imageData = await resizeImageBlob(file)
    Object.assign(result, { imageData: imageData ? [imageData] : [], warningMessage: imageData ? '' : 'Preview image tidak dapat dibuat di browser.' })
  } else {
    result.extractedText = await readText(file)
  }

  if (!result.sensitiveWarning && hasSensitivePattern(result.extractedText)) result.sensitiveWarning = true
  if (result.sensitiveWarning) result.warningMessage = 'Indikasi secret terdeteksi; value tidak disimpan atau dikirim.'
  return result
}
