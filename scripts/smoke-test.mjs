import assert from 'node:assert/strict'
import JSZip from 'jszip'
import { ACCEPTED_EXTENSIONS, MAX_AI_PAYLOAD_BYTES, isAllowedFile, isBlockedArchivePath } from '../src/lib/reference-utils.js'
import { buildAiPayload } from '../src/lib/ai-client.js'
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

console.log('smoke: pass')
