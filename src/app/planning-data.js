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
    'Phase 1 adalah single-user browser demo tanpa backend, auth, database, atau API AI.',
    'Stack: React, Vite, JavaScript, CSS, Framer Motion, dan JSZip.',
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

export const initialQuestions = [
  ['Q-001', 'Tujuan & Scope', 'Project goal', 'Web app untuk memandu pembentukan paket docs/planning/ project baru.', 'Prompt'],
  ['Q-002', 'Tujuan & Scope', 'Business problem', 'Struktur planning, standar menu, dan test plan sering lambat dan tidak konsisten.', 'Prompt'],
  ['Q-003', 'Tujuan & Scope', 'In scope', 'Reference, discovery, questions, structure, preview, generate, dan ZIP demo.', 'Prompt'],
  ['Q-004', 'Tujuan & Scope', 'Out of scope', 'Backend, database, auth, billing, API AI, dan persistence cloud.', 'Prompt'],
  ['Q-005', 'Pengguna & Akses', 'Target users', 'Product owner, technical lead, developer, QA, dan AI coding agent.', 'Prompt'],
  ['Q-006', 'Pengguna & Akses', 'Roles and permissions', 'Single-user browser demo tanpa enforcement permission.', 'Prompt'],
  ['Q-007', 'Stack & Data', 'Frontend stack', 'React + Vite + JavaScript + CSS + Framer Motion.', 'design.md'],
  ['Q-008', 'Stack & Data', 'Backend stack', 'Tidak ada pada Phase 1.', 'Prompt'],
  ['Q-009', 'Stack & Data', 'Data owner', 'Local state browser; localStorage tidak diperlukan untuk demo.', 'Prompt'],
  ['Q-010', 'Stack & Data', 'Deployment', 'Vercel, build npm run build, output dist.', 'Prompt'],
  ['Q-011', 'Menu & Standar', 'Module grouping', 'Berdasarkan workflow produk.', 'Prompt'],
  ['Q-012', 'Menu & Standar', 'Menu inventory', 'Dashboard, References, Discovery, Questions, Structure, Preview, Generate, Success.', 'Prompt'],
  ['Q-013', 'Menu & Standar', 'Form habits', 'Label, required validation, back/cancel, feedback submit, dan unknown eksplisit.', 'Prompt'],
  ['Q-014', 'Menu & Standar', 'Table habits', 'Search/filter/sort/pagination hanya bila volume data membutuhkan.', 'Prompt'],
  ['Q-015', 'Testing & Operasional', 'Test strategy', 'Build, lint, manual flow, responsive, reduced motion, dan ZIP verification.', 'Prompt'],
  ['Q-016', 'Testing & Operasional', 'Performance', 'First load ringan dan motion singkat.', 'design.md'],
  ['Q-017', 'Testing & Operasional', 'Monitoring', 'Belum ada service monitoring pada Phase 1.', 'Prompt'],
  ['Q-018', 'Testing & Operasional', 'Rollback', 'Gunakan deployment Git commit sebelumnya di Vercel.', 'Prompt'],
].map(([id, group, prompt, answer, source]) => ({ id, group, prompt, answer, source, status: 'reference' }))

export const initialModules = [
  {
    id: 'MOD-001',
    name: 'Workspace',
    menus: [
      { id: 'MENU-001', name: 'Dashboard', type: 'dashboard' },
      { id: 'MENU-002', name: 'References', type: 'form' },
    ],
  },
  {
    id: 'MOD-002',
    name: 'Discovery',
    menus: [
      { id: 'MENU-003', name: 'Discovery', type: 'detail' },
      { id: 'MENU-004', name: 'Questions', type: 'form' },
    ],
  },
  {
    id: 'MOD-003',
    name: 'Structure',
    menus: [
      { id: 'MENU-005', name: 'Structure', type: 'workflow' },
      { id: 'MENU-006', name: 'Preview', type: 'detail' },
    ],
  },
  {
    id: 'MOD-004',
    name: 'Generation',
    menus: [
      { id: 'MENU-007', name: 'Generate', type: 'workflow' },
      { id: 'MENU-008', name: 'Success', type: 'detail' },
    ],
  },
]

export const demoReferences = [
  { id: 'REF-001', slot: 'prd.md', name: 'prd-demo.md', type: 'text/markdown', size: 4832, status: 'Siap', source: 'Data contoh', sensitiveWarning: false },
  { id: 'REF-002', slot: 'design.md', name: 'design-demo.md', type: 'text/markdown', size: 12480, status: 'Siap', source: 'Data contoh', sensitiveWarning: false },
  { id: 'REF-003', slot: 'api-reference.yaml', name: 'api-reference-demo.yaml', type: 'application/yaml', size: 3210, status: 'Siap', source: 'Data contoh', sensitiveWarning: false },
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
    questions: initialQuestions.map((question) => ({ ...question })),
    modules: initialModules.map((module) => ({ ...module, menus: module.menus.map((menu) => ({ ...menu })) })),
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
