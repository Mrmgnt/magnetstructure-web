/* global process, Buffer */
const MAX_BODY_BYTES = 4.5 * 1024 * 1024

function send(res, status, body) {
  res.status(status).json(body)
}

function parseJson(content) {
  if (typeof content !== 'string') return content
  const cleaned = content.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim()
  return JSON.parse(cleaned)
}

function strings(value, limit = 40) {
  return Array.isArray(value) ? value.filter((item) => typeof item === 'string').slice(0, limit) : []
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
    baseUrl: process.env.ROUTER9_BASE_URL?.replace(/\/$/, ''),
    apiKey: process.env.ROUTER9_API_KEY,
    textModel: process.env.ROUTER9_MODEL,
    visionModel: process.env.ROUTER9_VISION_MODEL,
  }
}

function hasVisionReference(references) {
  return references.some((reference) => Array.isArray(reference.imageData) && reference.imageData.length > 0)
}

function buildMessages(payload) {
  const images = (payload.references || []).flatMap((reference) => (reference.imageData || []).map((url) => ({ id: reference.id, url }))).slice(0, 4)
  const safePayload = {
    ...payload,
    references: (payload.references || []).map((reference) => ({
      ...reference,
      imageData: (reference.imageData || []).map(() => '[image attachment]'),
    })),
  }
  const content = [
    { type: 'text', text: `Analisis reference berikut untuk ${payload.kind || 'discovery'}:\n${JSON.stringify(safePayload)}` },
    ...images.map((image) => ({ type: 'image_url', image_url: { url: image.url } })),
  ]
  return [
    {
      role: 'system',
      content: 'Anda adalah analyst planning software. Balas JSON valid saja. Jangan mengarang fakta. Bedakan facts (terdukung reference), inferences (kesimpulan), unknowns (perlu konfirmasi). Format wajib: {"discovery":{"facts":[],"inferences":[],"unknowns":[]},"questionSuggestions":[],"warnings":[]}. Jangan pernah menampilkan secret atau credential.',
    },
    { role: 'user', content },
  ]
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
    const upstream = await fetch(`${current.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${current.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: needsVision ? current.visionModel : current.textModel,
        messages: buildMessages(body),
        temperature: 0.2,
      }),
      signal: AbortSignal.timeout(25000),
    })
    const upstreamBody = await upstream.json().catch(() => ({}))
    if (!upstream.ok) return send(res, 502, { ok: false, code: 'AI_UPSTREAM_ERROR', message: 'Provider AI menolak analisis. Coba lagi atau gunakan analisis lokal.' })
    const content = upstreamBody?.choices?.[0]?.message?.content
    if (!content) return send(res, 502, { ok: false, code: 'AI_INVALID_RESPONSE', message: 'Provider AI tidak mengembalikan hasil yang dapat dibaca.' })
    return send(res, 200, normalizeModelResult(parseJson(content)))
  } catch (error) {
    return send(res, 502, { ok: false, code: 'AI_REQUEST_FAILED', message: error instanceof Error ? error.message : 'Analisis AI gagal.' })
  }
}
