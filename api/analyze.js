/* global process, Buffer */
const MAX_BODY_BYTES = 4.5 * 1024 * 1024
const AI_TIMEOUT_MS = 25000

function send(res, status, body) {
  res.status(status).json(body)
}

function asText(content) {
  if (typeof content === 'string') return content
  if (!Array.isArray(content)) return ''
  return content.map((part) => {
    if (typeof part === 'string') return part
    return typeof part?.text === 'string' ? part.text : ''
  }).join('\n')
}

function parseJson(content) {
  const cleaned = asText(content).replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim()
  const start = cleaned.indexOf('{')
  const end = cleaned.lastIndexOf('}')
  return JSON.parse(start >= 0 && end > start ? cleaned.slice(start, end + 1) : cleaned)
}

function strings(value, limit = 40) {
  return Array.isArray(value) ? value.filter((item) => typeof item === 'string' && item.trim()).map((item) => item.trim()).slice(0, limit) : []
}

function normalizeModelResult(value) {
  const discovery = value?.discovery || {}
  return {
    ok: true,
    mode: 'ai',
    discovery: {
      facts: strings(discovery.facts),
      inferences: strings(discovery.inferences),
      unknowns: strings(discovery.unknowns),
    },
    questionSuggestions: Array.isArray(value?.questionSuggestions) ? value.questionSuggestions.slice(0, 30) : [],
    warnings: strings(value?.warnings),
  }
}

function config() {
  return {
    enabled: process.env.AI_ANALYSIS_ENABLED === 'true',
    baseUrl: process.env.ROUTER9_BASE_URL?.replace(/\/+$/, ''),
    apiKey: process.env.ROUTER9_API_KEY,
    textModel: process.env.ROUTER9_MODEL,
    visionModel: process.env.ROUTER9_VISION_MODEL,
  }
}

function completionEndpoint(baseUrl) {
  if (/\/chat\/completions$/i.test(baseUrl)) return baseUrl
  if (/\/(?:api\/)?v\d+(?:\.\d+)?$/i.test(baseUrl)) return `${baseUrl}/chat/completions`
  return `${baseUrl}/v1/chat/completions`
}

function hasVisionReference(references) {
  return references.some((reference) => Array.isArray(reference.imageData) && reference.imageData.length > 0)
}

function buildMessages(payload) {
  const images = (payload.references || []).flatMap((reference) => (reference.imageData || []).map((url) => ({ id: reference.id, url }))).slice(0, 2)
  const safePayload = {
    ...payload,
    references: (payload.references || []).map((reference) => ({
      ...reference,
      imageData: (reference.imageData || []).map(() => '[image attachment]'),
    })),
  }
  const text = `Analisis reference berikut untuk ${payload.kind || 'discovery'}:\n${JSON.stringify(safePayload)}`
  const content = images.length ? [
    { type: 'text', text },
    ...images.map((image) => ({ type: 'image_url', image_url: { url: image.url } })),
  ] : text

  return [
    {
      role: 'system',
      content: 'Anda adalah analyst planning software. Balas JSON valid saja. Jangan mengarang fakta. Bedakan facts (terdukung reference), inferences (kesimpulan), unknowns (perlu konfirmasi). Format wajib: {"discovery":{"facts":[],"inferences":[],"unknowns":[]},"questionSuggestions":[],"warnings":[]}. Jangan pernah menampilkan secret atau credential.',
    },
    { role: 'user', content },
  ]
}

function providerErrorText(body) {
  const value = body?.error?.message || body?.error || body?.message
  return typeof value === 'string' ? value.slice(0, 500) : 'No provider error detail.'
}

function modelContent(body) {
  const choice = body?.choices?.[0]
  return choice?.message?.content ?? choice?.text ?? ''
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return send(res, 405, { ok: false, code: 'METHOD_NOT_ALLOWED', message: 'Gunakan POST.' })
  }

  const body = req.body || {}
  if (Buffer.byteLength(JSON.stringify(body), 'utf8') > MAX_BODY_BYTES) {
    return send(res, 413, { ok: false, code: 'PAYLOAD_TOO_LARGE', message: 'Evidence melebihi batas payload Vercel.' })
  }

  const current = config()
  if (!current.enabled || !current.baseUrl || !current.apiKey || !current.textModel) {
    return send(res, 503, { ok: false, code: 'AI_NOT_CONFIGURED', message: 'AI belum dikonfigurasi. Gunakan analisis lokal atau isi environment variables di Vercel.' })
  }

  const needsVision = hasVisionReference(body.references || [])
  if (needsVision && !current.visionModel) {
    return send(res, 422, { ok: false, code: 'VISION_MODEL_NOT_CONFIGURED', message: 'Reference image/PDF scan tersedia, tetapi ROUTER9_VISION_MODEL belum diisi.' })
  }

  try {
    const upstream = await fetch(completionEndpoint(current.baseUrl), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${current.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: needsVision ? current.visionModel : current.textModel,
        messages: buildMessages(body),
        temperature: 0.2,
        stream: false,
      }),
      signal: AbortSignal.timeout(AI_TIMEOUT_MS),
    })
    const upstreamText = await upstream.text()
    const upstreamBody = (() => { try { return JSON.parse(upstreamText) } catch { return {} } })()
    if (!upstream.ok) {
      console.error('AI provider rejected request', { status: upstream.status, detail: providerErrorText(upstreamBody) })
      return send(res, 502, { ok: false, code: 'AI_UPSTREAM_ERROR', message: `Provider AI menolak analisis (HTTP ${upstream.status}). Periksa ROUTER9_BASE_URL (/v1), ROUTER9_MODEL, dan API key di Vercel.` })
    }
    const content = modelContent(upstreamBody)
    if (!asText(content)) return send(res, 502, { ok: false, code: 'AI_INVALID_RESPONSE', message: 'Provider AI tidak mengembalikan hasil yang dapat dibaca.' })
    try {
      return send(res, 200, normalizeModelResult(parseJson(content)))
    } catch (error) {
      console.error('AI response was not valid JSON', error)
      return send(res, 502, { ok: false, code: 'AI_INVALID_RESPONSE', message: 'Provider AI mengembalikan format JSON yang tidak valid. Coba lagi atau gunakan analisis lokal.' })
    }
  } catch (error) {
    console.error('AI request failed', error)
    return send(res, 502, { ok: false, code: 'AI_REQUEST_FAILED', message: error instanceof Error ? error.message : 'Analisis AI gagal.' })
  }
}
