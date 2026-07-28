import { MAX_AI_PAYLOAD_BYTES } from './reference-utils.js'

function utf8Size(value) {
  return new TextEncoder().encode(value).byteLength
}

function compactReference(reference, textLimit = 180000) {
  return {
    id: reference.id,
    category: reference.category,
    name: reference.name,
    mimeType: reference.type,
    size: reference.size,
    text: (reference.extractedText || '').slice(0, textLimit),
    imageData: (reference.imageData || []).slice(0, 2),
    archive: reference.archive ? {
      entryCount: reference.archive.entryCount,
      ignoredEntries: reference.archive.ignoredEntries,
      includedEntries: reference.archive.includedEntries.slice(0, 80),
    } : null,
  }
}

export function buildAiPayload(project, kind = 'discovery') {
  let references = project.references.map((reference) => compactReference(reference))
  let payload = { kind, references, questionSlots: project.questions.map(({ id, group, prompt, type, options, answer, otherAnswer, status }) => ({ id, group, prompt, type, options, answer, otherAnswer, status })) }

  if (utf8Size(JSON.stringify(payload)) > MAX_AI_PAYLOAD_BYTES) {
    references = project.references.map((reference) => compactReference(reference, 50000))
    payload = { ...payload, references }
  }
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
