export const workflow = [
  { number: '01', label: 'References', short: 'Referensi', route: '/planning/references' },
  { number: '02', label: 'Discovery', short: 'Discovery', route: '/planning/discovery' },
  { number: '03', label: 'Questions', short: 'Pertanyaan', route: '/planning/questions' },
  { number: '04', label: 'Structure', short: 'Struktur', route: '/planning/structure' },
  { number: '05', label: 'Preview', short: 'Preview', route: '/planning/preview' },
  { number: '06', label: 'Generate', short: 'Generate', route: '/planning/generate' },
  { number: '07', label: 'Success', short: 'Selesai', route: '/planning/success' },
]

export const discoveryData = {
  facts: [
    'Produk memandu pembentukan paket docs/planning/ project baru.',
    'Target user: product owner, technical lead, developer, QA, dan AI coding agent.',
    'Phase 1 adalah single-user browser demo; AI bersifat optional enrichment.',
    'Stack: React, Vite, JavaScript, CSS, Framer Motion, JSZip, pdfjs-dist.',
    'Output default adalah ZIP valid yang dibuat di browser.',
  ],
  inferences: [
    'ID deterministik memudahkan review perubahan struktur planning.',
    'Preview sebelum generate mengurangi risiko dokumen tidak relevan.',
  ],
  unknowns: [
    'Provider analisis AI nyata belum dipilih.',
    'Model data persistence belum ditentukan.',
    'Sistem autentikasi dan otorisasi phase berikutnya belum dipilih.',
    'Spesifikasi resmi Hermes belum tersedia.',
  ],
}

export const referenceCategories = [
  {
    id: 'prd',
    label: 'Product requirement',
    help: 'PRD, brief, atau catatan goals. Mendukung text, PDF, dan image.',
    optional: false,
  },
  {
    id: 'design',
    label: 'Design reference',
    help: 'Visual direction, layout, screenshot Figma, atau ZIP export Figma.',
    optional: true,
  },
  {
    id: 'api',
    label: 'API reference',
    help: 'Optional kontrak endpoint backend. OpenAPI/Swagger YAML atau JSON. Lewati bila belum ada backend.',
    optional: true,
  },
  {
    id: 'project',
    label: 'Project source',
    help: 'ZIP source code untuk membaca struktur folder. Aman: node_modules, .git, .env di-skip.',
    optional: true,
  },
]

export const initialQuestions = [
  {
    id: 'Q-001', group: 'Tujuan & Scope', prompt: 'Apa tujuan utama project?',
    type: 'choice',
    options: ['Web app', 'Mobile app', 'API/service', 'Internal tool', 'Dashboard/analytics'],
    allowOther: true,
    answer: 'Web app', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-002', group: 'Tujuan & Scope', prompt: 'Business problem utama yang dipecahkan?',
    type: 'essay',
    options: [], allowOther: false,
    answer: 'Membangun struktur planning, standar menu, dan test plan yang konsisten sebelum coding dimulai.',
    otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-003', group: 'Tujuan & Scope', prompt: 'Apa yang termasuk in scope?',
    type: 'choice',
    options: ['UI workflow lengkap', 'Upload reference', 'Discovery analysis', 'Generate planning', 'Download ZIP'],
    allowOther: true,
    answer: 'UI workflow lengkap', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-004', group: 'Tujuan & Scope', prompt: 'Apa yang termasuk out of scope?',
    type: 'choice',
    options: ['Backend API', 'Database', 'Authentication', 'Billing', 'Multi-user collaboration'],
    allowOther: true,
    answer: 'Backend API', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-005', group: 'Pengguna & Akses', prompt: 'Siapa target user utama?',
    type: 'choice',
    options: ['Product owner', 'Tech lead', 'Developer', 'QA engineer', 'AI coding agent'],
    allowOther: true,
    answer: 'Product owner', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-006', group: 'Pengguna & Akses', prompt: 'Bagaimana roles dan permissions?',
    type: 'choice',
    options: ['Single user', 'Multi user', 'RBAC', 'SSO/enterprise'],
    allowOther: true,
    answer: 'Single user', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-007', group: 'Stack & Data', prompt: 'Frontend stack yang dipakai?',
    type: 'choice',
    options: ['React', 'Vue', 'Svelte', 'Solid', 'Vanilla JS'],
    allowOther: true,
    answer: 'React', otherAnswer: '', source: 'design.md', status: 'reference',
  },
  {
    id: 'Q-008', group: 'Stack & Data', prompt: 'Backend stack yang dipakai?',
    type: 'choice',
    options: ['Tidak ada', 'Node.js', 'Python', 'Go', 'Rust'],
    allowOther: true,
    answer: 'Tidak ada', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-009', group: 'Stack & Data', prompt: 'Data owner dan persistence?',
    type: 'choice',
    options: ['Browser local only', 'localStorage draft', 'Cloud database', 'Hybrid'],
    allowOther: true,
    answer: 'Browser local only', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-010', group: 'Stack & Data', prompt: 'Target deployment?',
    type: 'choice',
    options: ['Vercel', 'Netlify', 'Cloudflare Pages', 'Self-hosted'],
    allowOther: true,
    answer: 'Vercel', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-011', group: 'Menu & Standar', prompt: 'Bagaimana module grouping?',
    type: 'choice',
    options: ['Berdasarkan workflow', 'Berdasarkan domain', 'Berdasarkan team', 'Berdasarkan entity'],
    allowOther: true,
    answer: 'Berdasarkan workflow', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-012', group: 'Menu & Standar', prompt: 'Menu inventory awal?',
    type: 'essay',
    options: [], allowOther: false,
    answer: 'Dashboard, References, Discovery, Questions, Structure, Preview, Generate, Success.',
    otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-013', group: 'Menu & Standar', prompt: 'Form habits yang dipilih?',
    type: 'choice',
    options: ['Inline validation', 'Draft otomatis', 'Cancel confirmation', 'Accessible label'],
    allowOther: true,
    answer: 'Accessible label', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-014', group: 'Menu & Standar', prompt: 'Table habits yang dipilih?',
    type: 'choice',
    options: ['Search', 'Filter', 'Sort', 'Pagination'],
    allowOther: true,
    answer: 'Search', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-015', group: 'Testing & Operasional', prompt: 'Test strategy utama?',
    type: 'choice',
    options: ['Build + lint', 'Manual flow', 'Responsive', 'Reduced motion', 'ZIP verification'],
    allowOther: true,
    answer: 'Build + lint', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-016', group: 'Testing & Operasional', prompt: 'Performance budget?',
    type: 'choice',
    options: ['Ringan', 'Media-rich', 'Heavy animation'],
    allowOther: true,
    answer: 'Ringan', otherAnswer: '', source: 'design.md', status: 'reference',
  },
  {
    id: 'Q-017', group: 'Testing & Operasional', prompt: 'Monitoring dan observability?',
    type: 'choice',
    options: ['Belum ada', 'Vercel Analytics', 'Sentry', 'Datadog'],
    allowOther: true,
    answer: 'Belum ada', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
  {
    id: 'Q-018', group: 'Testing & Operasional', prompt: 'Rollback strategy?',
    type: 'choice',
    options: ['Git commit sebelumnya', 'Database snapshot', 'Blue/green', 'Canary'],
    allowOther: true,
    answer: 'Git commit sebelumnya', otherAnswer: '', source: 'Prompt', status: 'reference',
  },
]

export const initialModules = [
  {
    id: 'MOD-001', name: 'Workspace',
    menus: [
      { id: 'MENU-001', name: 'Dashboard', type: 'dashboard' },
      { id: 'MENU-002', name: 'References', type: 'form' },
    ],
  },
  {
    id: 'MOD-002', name: 'Discovery',
    menus: [
      { id: 'MENU-003', name: 'Discovery', type: 'detail' },
      { id: 'MENU-004', name: 'Questions', type: 'form' },
    ],
  },
  {
    id: 'MOD-003', name: 'Structure',
    menus: [
      { id: 'MENU-005', name: 'Structure', type: 'workflow' },
      { id: 'MENU-006', name: 'Preview', type: 'detail' },
    ],
  },
  {
    id: 'MOD-004', name: 'Generation',
    menus: [
      { id: 'MENU-007', name: 'Generate', type: 'workflow' },
      { id: 'MENU-008', name: 'Success', type: 'detail' },
    ],
  },
]

export const demoReferences = [
  {
    id: 'REF-001', category: 'prd', slot: 'prd.md', name: 'prd-demo.md', type: 'text/markdown', size: 4832,
    status: 'ready', source: 'Data contoh', sensitiveWarning: false, warningMessage: '',
    extractedText: 'Tujuan: web app planning. Target: developer, QA, AI agent. Output: ZIP planning.',
    imageData: [], archive: null,
  },
  {
    id: 'REF-002', category: 'design', slot: 'design.md', name: 'design-demo.md', type: 'text/markdown', size: 12480,
    status: 'ready', source: 'Data contoh', sensitiveWarning: false, warningMessage: '',
    extractedText: 'Design direction: terang, tenang, fokus kerja. Font Inter. Warna primary biru.',
    imageData: [], archive: null,
  },
  {
    id: 'REF-003', category: 'api', slot: 'api-reference.yaml', name: 'api-reference-demo.yaml', type: 'application/yaml', size: 3210,
    status: 'ready', source: 'Data contoh', sensitiveWarning: false, warningMessage: '',
    extractedText: 'openapi: 3.0.0\npaths:\n  /health:\n    get:\n      responses: { "200": { description: ok } }',
    imageData: [], archive: null,
  },
]

export const generationSteps = [
  'Membaca referensi',
  'Menyusun discovery',
  'Membuat standar',
  'Membuat test plan',
  'Memvalidasi link',
  'Menyiapkan ZIP',
]

export function createInitialProject() {
  return {
    outputMode: 'zip',
    references: [],
    discovery: discoveryData,
    questions: initialQuestions.map((question) => ({ ...question, options: [...question.options] })),
    modules: initialModules.map((module) => ({ ...module, menus: module.menus.map((menu) => ({ ...menu })) })),
    aiMode: 'unknown',
    aiWarnings: [],
    generationStatus: 'idle',
    generationSteps: generationSteps.map((label) => ({ label, status: 'pending' })),
    generatedAt: null,
  }
}

export function nextStableId(items, prefix) {
  const max = items.reduce((value, item) => {
    const numeric = Number(item.id.replace(`${prefix}-`, ''))
    return Number.isFinite(numeric) ? Math.max(value, numeric) : value
  }, 0)
  return `${prefix}-${String(max + 1).padStart(3, '0')}`
}

export function countMenus(modules) {
  return modules.reduce((count, module) => count + module.menus.length, 0)
}

export function nextReferenceId(references) {
  const max = references.reduce((value, reference) => {
    const numeric = Number(reference.id.replace('REF-', ''))
    return Number.isFinite(numeric) ? Math.max(value, numeric) : value
  }, 0)
  return `REF-${String(max + 1).padStart(3, '0')}`
}

export function describeAnswer(question) {
  if (question.status === 'unknown') return 'Needs confirmation'
  if (!question.answer) return ''
  if (question.answer === '__other__') return question.otherAnswer || ''
  return question.answer
}
