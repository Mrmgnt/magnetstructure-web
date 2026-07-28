import { MAX_AI_PAYLOAD_BYTES } from './reference-utils.js'

export const MAX_AI_TEXT_EVIDENCE_CHARS = 60000
export const MAX_AI_IMAGE_EVIDENCE_COUNT = 2

function utf8Size(value) {
  return new TextEncoder().encode(value).byteLength
}

function compactReference(reference, textLimit) {
  return {
    id: reference.id,
    category: reference.category,
    name: reference.name,
    mimeType: reference.type,
    size: reference.size,
    text: (reference.extractedText || '').slice(0, textLimit),
    imageData: (reference.imageData || []).slice(0, 1),
    archive: reference.archive ? {
      entryCount: reference.archive.entryCount,
      ignoredEntries: reference.archive.ignoredEntries,
      includedEntries: (reference.archive.includedEntries || []).slice(0, 80),
    } : null,
  }
}

function compactReferences(references) {
  let textRemaining = MAX_AI_TEXT_EVIDENCE_CHARS
  let imagesRemaining = MAX_AI_IMAGE_EVIDENCE_COUNT

  return references.map((reference, index) => {
    const referenceCountRemaining = references.length - index
    const textLimit = Math.min(24000, Math.floor(textRemaining / referenceCountRemaining))
    const compact = compactReference(reference, textLimit)
    textRemaining -= compact.text.length
    const imageData = imagesRemaining > 0 ? compact.imageData.slice(0, 1) : []
    imagesRemaining -= imageData.length
    return { ...compact, imageData }
  })
}

export function buildAiPayload(project, kind = 'discovery') {
  let references = compactReferences(project.references)
  let payload = { kind, references, questionSlots: project.questions.map(({ id, group, prompt, type, options, answer, otherAnswer, status }) => ({ id, group, prompt, type, options, answer, otherAnswer, status })) }

  if (utf8Size(JSON.stringify(payload)) > MAX_AI_PAYLOAD_BYTES) {
    references = references.map((reference) => ({ ...reference, imageData: [] }))
    payload = { ...payload, references }
  }
  if (utf8Size(JSON.stringify(payload)) > MAX_AI_PAYLOAD_BYTES) {
    references = references.map((reference) => ({ ...reference, text: reference.text.slice(0, 16000) }))
    payload = { ...payload, references }
  }
  return payload
}

function safeArray(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === 'string').slice(0, 40) : []
}

export function normalizeAiResponse(body) {
  const discovery = body?.discovery || {}
  return {
    facts: safeArray(discovery.facts),
    inferences: safeArray(discovery.inferences),
    unknowns: safeArray(discovery.unknowns),
    questionSuggestions: Array.isArray(body?.questionSuggestions) ? body.questionSuggestions.slice(0, 30) : [],
    warnings: safeArray(body?.warnings),
  }
}

export async function analyzeProject(project, kind = 'discovery') {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(buildAiPayload(project, kind)),
  })
  const body = await response.json().catch(() => ({}))
  if (!response.ok || !body.ok) {
    const error = new Error(body.message || 'Analisis AI gagal.')
    error.code = body.code || `HTTP_${response.status}`
    throw error
  }
  return { ...normalizeAiResponse(body), mode: body.mode || 'ai' }
}
