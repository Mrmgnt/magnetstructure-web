import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import JSZip from 'jszip'
import { ACCEPTED_EXTENSIONS, MAX_AI_PAYLOAD_BYTES, isAllowedFile, isBlockedArchivePath } from '../src/lib/reference-utils.js'
import { buildAiPayload, MAX_AI_IMAGE_EVIDENCE_COUNT, MAX_AI_TEXT_EVIDENCE_CHARS } from '../src/lib/ai-client.js'
import { buildPlanningFiles } from '../src/lib/planning-content.js'
import { createInitialProject } from '../src/app/planning-data.js'
import analyzeHandler from '../api/analyze.js'

const fakeFile = (name) => ({ name })
assert.equal(isAllowedFile(fakeFile('brief.pdf'), 'prd'), true)
assert.equal(isAllowedFile(fakeFile('figma-export.zip'), 'design'), true)
assert.equal(isAllowedFile(fakeFile('figma-export.rar'), 'design'), true)
assert.equal(isAllowedFile(fakeFile('project.zip'), 'project'), true)
assert.equal(isAllowedFile(fakeFile('project.rar'), 'project'), true)
assert.equal(isAllowedFile(fakeFile('brief.rar'), 'prd'), false)
assert.equal(isAllowedFile(fakeFile('project.zip'), 'api'), false)
assert.deepEqual(ACCEPTED_EXTENSIONS.api, ['.yaml', '.yml', '.json'])
assert.equal(isBlockedArchivePath('.env'), true)
assert.equal(isBlockedArchivePath('node_modules/pkg/index.js'), true)
assert.equal(isBlockedArchivePath('../private.txt'), true)
assert.equal(isBlockedArchivePath('src/App.jsx'), false)

const project = createInitialProject()
project.references = [{ id: 'REF-001', category: 'prd', name: 'brief.md', type: 'text/markdown', size: 20, extractedText: 'Planning project baru', imageData: [], archive: null }]
const payload = buildAiPayload(project)
assert.equal(payload.references.length, 1)
assert.ok(new TextEncoder().encode(JSON.stringify(payload)).byteLength <= MAX_AI_PAYLOAD_BYTES)

const zip = new JSZip()
Object.entries(buildPlanningFiles(project)).forEach(([path, content]) => zip.file(path, content))
const buffer = await zip.generateAsync({ type: 'nodebuffer' })
const opened = await JSZip.loadAsync(buffer)
for (const path of ['docs/planning/README.md', 'docs/planning/project/discovery.md', 'generation-report.md']) assert.ok(opened.file(path))

function fakeResponse() {
  return {
    code: 0,
    body: null,
    headers: {},
    status(code) { this.code = code; return this },
    json(body) { this.body = body; return this },
    setHeader(key, value) { this.headers[key] = value },
  }
}

const getResponse = fakeResponse()
await analyzeHandler({ method: 'GET' }, getResponse)
assert.equal(getResponse.code, 405)
assert.equal(getResponse.body.code, 'METHOD_NOT_ALLOWED')

const postResponse = fakeResponse()
const originalEnabled = process.env.AI_ANALYSIS_ENABLED
process.env.AI_ANALYSIS_ENABLED = 'false'
await analyzeHandler({ method: 'POST', body: payload }, postResponse)
assert.equal(postResponse.code, 503)
assert.equal(postResponse.body.code, 'AI_NOT_CONFIGURED')
if (originalEnabled === undefined) delete process.env.AI_ANALYSIS_ENABLED
else process.env.AI_ANALYSIS_ENABLED = originalEnabled


const largeProject = createInitialProject()
largeProject.references = Array.from({ length: 3 }, (_, index) => ({
  id: `REF-${index + 1}`,
  category: 'project',
  name: `project-${index + 1}.zip`,
  type: 'application/zip',
  size: 100,
  extractedText: 'x'.repeat(MAX_AI_TEXT_EVIDENCE_CHARS),
  imageData: ['data:image/jpeg;base64,preview'],
  archive: null,
}))
const compactPayload = buildAiPayload(largeProject)
assert.ok(compactPayload.references.reduce((total, reference) => total + reference.text.length, 0) <= MAX_AI_TEXT_EVIDENCE_CHARS)
assert.ok(compactPayload.references.flatMap((reference) => reference.imageData).length <= MAX_AI_IMAGE_EVIDENCE_COUNT)

const styles = readFileSync(new URL('../src/styles/styles.css', import.meta.url), 'utf8')
assert.match(styles, /\.question-card \.choice-option input \{ flex: 0 0 auto; width: auto;/)

const envKeys = ['AI_ANALYSIS_ENABLED', 'ROUTER9_BASE_URL', 'ROUTER9_API_KEY', 'ROUTER9_MODEL', 'ROUTER9_VISION_MODEL']
const savedEnv = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]))
const savedFetch = globalThis.fetch
const savedConsoleError = console.error
let capturedRequest
Object.assign(process.env, {
  AI_ANALYSIS_ENABLED: 'true',
  ROUTER9_BASE_URL: 'https://api.router9.com',
  ROUTER9_API_KEY: 'test-key',
  ROUTER9_MODEL: 'combos/hermes',
  ROUTER9_VISION_MODEL: '',
})
globalThis.fetch = async (url, init) => {
  capturedRequest = { url, body: JSON.parse(init.body) }
  return {
    ok: true,
    status: 200,
    async text() {
      return JSON.stringify({ choices: [{ message: { content: [{ text: '```json' }, { text: '{"discovery":{"facts":["Fact A"],"inferences":[],"unknowns":[]},"questionSuggestions":[],"warnings":[]}' }, { text: '```' }] } }] })
    },
  }
}
const aiResponse = fakeResponse()
await analyzeHandler({ method: 'POST', body: payload }, aiResponse)
assert.equal(aiResponse.code, 200)
assert.equal(aiResponse.body.discovery.facts[0], 'Fact A')
assert.equal(capturedRequest.url, 'https://api.router9.com/v1/chat/completions')
assert.equal(typeof capturedRequest.body.messages[1].content, 'string')

console.error = () => {}
globalThis.fetch = async () => ({
  ok: false,
  status: 400,
  async text() { return JSON.stringify({ error: { message: 'invalid model' } }) },
})
const rejectedResponse = fakeResponse()
await analyzeHandler({ method: 'POST', body: payload }, rejectedResponse)
assert.equal(rejectedResponse.code, 502)
assert.equal(rejectedResponse.body.code, 'AI_UPSTREAM_ERROR')
assert.match(rejectedResponse.body.message, /HTTP 400/)

globalThis.fetch = savedFetch
console.error = savedConsoleError
for (const key of envKeys) {
  if (savedEnv[key] === undefined) delete process.env[key]
  else process.env[key] = savedEnv[key]
}

console.log('smoke: pass')
