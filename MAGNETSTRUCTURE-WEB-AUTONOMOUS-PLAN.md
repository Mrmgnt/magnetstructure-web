# Prompt Autonomous — Magnetstructure Web

> Salin seluruh isi dokumen ini ke chat baru. Jalankan pekerjaan sampai selesai secara autonomous. Jangan berhenti untuk meminta konfirmasi kecuali ada risiko keamanan, akses GitHub gagal, atau keputusan yang tidak dapat diturunkan dari spesifikasi ini.

## 0. Goal wajib

Buat web app frontend bernama **Magnetstructure Web** di:

```text
D:\project\magnetstructureweb
```

Tujuan utama:

1. Buat `docs/planning/` yang lengkap memakai skill `$magnetstructure` sebelum membuat source code.
2. Bangun UI web app React + Vite + JavaScript berdasarkan referensi UI Google Stitch dan `design.md` di workspace.
3. Implementasikan alur frontend yang bisa didemokan end-to-end: referensi → discovery → pertanyaan adaptif → struktur module/menu → preview planning → progress generate → download ZIP demo.
4. Validasi build, lint jika tersedia, dan skenario utama secara manual.
5. Buat atau gunakan repository GitHub public `Mrmgnt/magnetstructure-web`, commit ke branch `main`, lalu push.
6. Hasil akhir harus siap dideploy ke Vercel.

### Definition of Done

Pekerjaan selesai hanya jika seluruh kondisi ini terpenuhi:

- Source app berada di `D:\project\magnetstructureweb`.
- `design.md` yang sudah ada dipertahankan dan tidak ditimpa.
- `docs/planning/` ada, berbahasa Indonesia, dan memuat planning per modul/menu serta test plan per modul/menu/scenario.
- App memakai React, Vite, JavaScript, dan `framer-motion`.
- Tidak ada backend, database, autentikasi, API AI nyata, secret, atau source code dari project internal.
- Semua route inti dapat dinavigasi dan state demo dapat berjalan dengan local state; gunakan `localStorage` hanya bila berguna.
- Tombol download menghasilkan ZIP demo dari browser. Jika valid ZIP sulit tanpa dependency kecil, gunakan `jszip`; jangan membuat file `.zip` palsu.
- `npm run build` sukses.
- `npm run lint` sukses bila script lint tersedia pada scaffold.
- Deep link route SPA dapat dibuka setelah deploy Vercel.
- Repository GitHub public sudah memiliki commit final dan `git status` bersih.
- Laporan akhir mencantumkan path, URL repository, commit, hasil verifikasi, serta batasan frontend-only.

---

## 1. Jalankan sebagai goal autonomous

Buat goal baru dengan objective ini sebelum mulai kerja:

```text
Build Magnetstructure Web in D:\project\magnetstructureweb from design.md and Stitch reference. First generate docs/planning with $magnetstructure, then implement a React + Vite + JavaScript + Framer Motion frontend, verify it, and push public repository Mrmgnt/magnetstructure-web to GitHub.
```

Bekerja dengan urutan BMAD:

```text
Brief  : tulis ringkasan task sangat singkat.
Map    : periksa workspace, AGENTS.md, design.md, status Git, dan skill terkait.
Act    : buat planning dulu, lalu source app minimal namun utuh.
Demonstrate: jalankan build/lint dan verifikasi alur utama.
```

Aturan autonomy:

- Jangan menunggu jawaban untuk pertanyaan produk yang sudah dijawab dokumen ini.
- Untuk detail yang belum tersedia, pakai `Unknown`, `Needs confirmation`, atau placeholder. Jangan mengarang aturan bisnis.
- Jangan mengubah source project lain.
- Jangan mengirim private/internal artifact, nama project internal, schema, test data, habit, token, atau referensi project internal ke repository.
- Jangan push jika build atau validasi inti gagal.
- Jangan buat Pull Request. Push langsung ke `main` untuk repository baru ini.

---

## 2. Context dan reference wajib

### Workspace

```text
D:\project\magnetstructureweb
```

File awal yang harus dibaca:

```text
D:\project\magnetstructureweb\design.md
```

`design.md` adalah output/reference desain. Baca sebelum coding. Gunakan sebagai sumber visual; jangan salin HTML Tailwind CDN mentah ke aplikasi production.

### Referensi Google Stitch

Gunakan sebagai referensi visual dan struktur layar. Jika akses Stitch tersedia, inspeksi screen ini. Jika tidak tersedia, gunakan `design.md` sebagai source of truth lokal.

```text
Project       : projects/2747683647007647622
Design system : assets/16925479222918331676
Primary screen: projects/2747683647007647622/screens/3d9d0bdd754d45b29ae103e677c98c2c
Title         : Mulai Planning Project - Referensi
```

### Visual direction

Produk adalah tool developer/engineering SaaS berbahasa Indonesia. Tampilan terang, tenang, rapi, fokus kerja. Bukan chatbot generik, dashboard keuangan, atau landing page marketing.

Gunakan token awal berikut; bila `design.md` memberi nilai lebih spesifik, prioritaskan `design.md`:

```css
:root {
  --color-background: #faf8ff;
  --color-surface: #ffffff;
  --color-surface-low: #f3f3fe;
  --color-surface-high: #e7e7f3;
  --color-text: #191b23;
  --color-text-muted: #434655;
  --color-primary: #2563eb;
  --color-primary-dark: #004ac6;
  --color-outline: #737686;
  --color-outline-variant: #c3c6d7;
  --radius-sm: 8px;
  --radius-md: 12px;
  --space-unit: 8px;
  --sidebar-width: 260px;
}
```

Aturan visual:

- Font UI: `Inter`.
- Font metadata dan ID: monospace bergaya `Geist` atau fallback sistem.
- Background slate/lilac sangat muda, kartu putih, border low-contrast.
- Radius kecil-menengah, shadow sangat tipis atau tanpa shadow berat.
- Hierarki typography jelas. Jangan memakai gradient besar atau efek glassmorphism.
- Gunakan inline SVG ringan untuk icon. Jangan perlu library icon besar.
- Fokus keyboard terlihat jelas, kontras teks memadai, input memiliki label.

---

## 3. Jawaban discovery yang sudah disetujui

Gunakan bagian ini sebagai jawaban untuk question slots Magnetstructure. Proses minimal 15 slot secara adaptif, catat slot yang `Answered from prompt`, dan jangan tanyakan ulang.

| Slot | Jawaban disetujui | Status |
|---|---|---|
| Project goal | Web app untuk memandu pembentukan paket `docs/planning/` project baru. | Fact |
| Business problem | Membuat struktur planning, standar menu, dan test plan project besar sering lambat dan tidak konsisten. | Fact |
| Target users | Product owner, technical lead, developer, QA, dan AI coding agent. | Fact |
| Roles/permission | Phase 1 single-user browser demo. Tidak ada login, role server, atau enforcement nyata. | Fact |
| In scope | UI workflow planning, input reference demo, discovery, adaptive questions, structure module/menu, preview tree, progress generate, ZIP demo. | Fact |
| Out of scope | Backend, database, auth, billing, upload server, AI/API nyata, kolaborasi multi-user, persistence cloud. | Fact |
| Release boundary | Frontend prototype yang dapat didemokan dan dideploy ke Vercel. | Fact |
| Platform/deployment | Desktop-first, responsive tablet/mobile; Vercel. | Fact |
| Frontend stack | React + Vite + JavaScript + CSS biasa + `framer-motion`. | Fact |
| Backend stack | Tidak ada. | Fact |
| Database/data owner | Tidak ada database. Data demo di local state; `localStorage` optional. | Fact |
| Module grouping | Berdasarkan workflow produk, bukan domain bisnis eksternal. | Fact |
| Menu inventory | Dashboard, References, Discovery, Questions, Structure, Preview, Generate, Success. | Fact |
| Menu types | Dashboard, form/upload, detail/discovery, form/questionnaire, table/tree editor, detail/preview, progress, success/download. | Fact |
| Table habits | Bila ada tabel: search, filter/sort/pagination hanya bila data cukup; state loading/empty/error/retry/permission tetap dicontohkan pada baseline docs. | Fact |
| Form habits | Validasi required, cancel/back, feedback submit, draft local bila sederhana, dan warning perubahan belum tersimpan saat relevan. | Fact |
| Error/loading/empty | Semua layar data atau proses harus punya state loading, empty, error, dan retry demo bila relevan. | Fact |
| API/integration | Tidak ada request API nyata. Upload/reference dianalisis secara mock di browser. | Fact |
| Security/data sensitive | Jangan menyimpan secret. Tampilkan warning jika input demo terlihat seperti secret; jangan kirim data keluar browser. | Fact |
| Test strategy | Test plan per modul/menu; scenario detail untuk alur kompleks/reusable; build/lint plus manual flow check. | Fact |
| Performance | First load ringan, tidak ada media besar, animasi singkat dan menghormati reduced motion. | Fact |
| Environment/deployment | Local `npm run dev`; production Vercel dengan `npm run build` dan output `dist`. | Fact |
| Monitoring/rollback | Phase 1 tanpa service monitoring. Rollback melalui deployment Git commit sebelumnya di Vercel. | Fact |
| Risks/unknowns | Analisis PRD/design dan ZIP generation hanya demo lokal; hasil bukan planning AI nyata. | Fact |

Unknown yang wajib dicatat di `docs/planning/project/discovery.md`:

```text
- Provider analisis AI nyata belum dipilih.
- Model data project persistence belum ditentukan.
- Sistem autentikasi/otorisasi phase berikutnya belum dipilih.
- Spesifikasi resmi Hermes belum tersedia; hanya contract internal Magnetstructure.
```

---

## 4. Planning wajib dibuat lebih dahulu

Gunakan skill `$magnetstructure` sebagai planning stage. Skill ini planning-only; setelah planning selesai, lanjutkan coding sesuai prompt ini.

Mode output yang disetujui oleh prompt ini:

```text
folder
```

Buat langsung:

```text
D:\project\magnetstructureweb\docs\planning\
```

Jangan overwrite file planning existing jika ada. Bila conflict, preserve file existing dan tulis candidate/conflict report di `.magnetstructure-output/`.

Planning minimal wajib memuat:

```text
docs/planning/
├── README.md
├── project/
│   ├── vision.md
│   ├── scope.md
│   ├── glossary.md
│   ├── constraints.md
│   └── discovery.md
├── architecture/
│   ├── system-overview.md
│   ├── module-map.md
│   ├── data-model.md
│   ├── integrations.md
│   └── security.md
├── standards/
│   ├── frontend/
│   │   ├── menu-standard.md
│   │   ├── table-standard.md
│   │   ├── form-standard.md
│   │   ├── validation-standard.md
│   │   └── accessibility-standard.md
│   ├── backend/
│   │   ├── api-standard.md
│   │   ├── pagination-standard.md
│   │   └── error-handling-standard.md
│   └── security/
│       └── permission-standard.md
├── modules/
│   ├── MOD-001-workspace/
│   ├── MOD-002-discovery/
│   ├── MOD-003-structure/
│   └── MOD-004-generation/
├── features/
│   └── _template/
├── testing/
│   ├── test-strategy.md
│   ├── test-catalog.md
│   ├── definition-of-done.md
│   └── baselines/
├── decisions/
│   └── ADR-0001-frontend-only-phase-1.md
├── roadmap/
│   ├── now.md
│   ├── next.md
│   └── later.md
└── archive/
    └── README.md
```

Mapping module/menu minimum:

```text
MOD-001-workspace
  MENU-001-dashboard
  MENU-002-references

MOD-002-discovery
  MENU-003-discovery
  MENU-004-questions

MOD-003-structure
  MENU-005-structure
  MENU-006-preview

MOD-004-generation
  MENU-007-generate
  MENU-008-success
```

Setiap module wajib memiliki `overview.md` dan `test-plan.md`. Setiap menu wajib memiliki `plan.md` dan `test-plan.md`.

Scenario detail wajib dibuat untuk minimal:

```text
SCN-MENU-002-001-upload-reference
SCN-MENU-004-001-adaptive-question-flow
SCN-MENU-005-001-edit-module-menu-structure
SCN-MENU-007-001-generate-planning-demo
SCN-MENU-008-001-download-zip-demo
```

Setiap scenario detail harus memuat stable ID, area, type, priority, precondition, test data, steps, expected result, automation status, execution status, evidence, dan linked defect.

---

## 5. Scope aplikasi yang harus dibangun

### Product flow

```text
Dashboard
→ References
→ Discovery
→ Pertanyaan adaptif
→ Struktur module/menu
→ Preview planning tree
→ Generate progress
→ Success + ZIP download
```

### Route wajib

Gunakan client-side routing dengan route nyata berikut. Konfigurasi Vercel harus mendukung direct/deep link ke route tersebut.

```text
/
/planning/references
/planning/discovery
/planning/questions
/planning/structure
/planning/preview
/planning/generate
/planning/success
```

### Screen specification

#### 1. Dashboard (`/`)

- Judul ringkas: `Planning project, lebih terstruktur.`
- Card project terakhir/demo.
- Ringkasan workflow 6 langkah.
- CTA utama: `Mulai planning` menuju References.
- Panel `Standar aktif` untuk memberi konteks menu/table/form/test plan.

#### 2. References (`/planning/references`)

- Shell sesuai Stitch: top navigation fixed, sidebar kiri sekitar 260px, content utama, dan panel ringkasan/tree di kanan pada desktop.
- Upload cards untuk `prd.md`, `design.md`, dan `api-reference.yaml`.
- Input file menerima `.md`, `.markdown`, `.txt`, `.json`, `.yaml`, `.yml`.
- Gunakan file metadata yang benar dari browser: nama, tipe, ukuran, status.
- State default boleh berisi reference demo; jangan klaim file sudah dianalisis server.
- Toggle output: `ZIP` default, `Folder`, `Keduanya`, `Template saja`.
- Tombol lanjut valid bila minimal ada satu reference atau user memilih demo reference.

#### 3. Discovery (`/planning/discovery`)

- Tampilkan ringkasan `Fact`, `Inference`, `Unknown` secara terpisah.
- Tampilkan tabel question slot yang answered/skipped beserta source `Prompt`, `design.md`, atau `User upload`.
- Jangan menampilkan hasil seolah AI nyata. Gunakan label `Analisis demo lokal`.
- CTA: lanjut ke pertanyaan.

#### 4. Questions (`/planning/questions`)

- Kelompok pertanyaan: Tujuan & Scope, Pengguna & Akses, Stack & Data, Menu & Standar, Testing & Operasional.
- Minimal 15 slots terlihat atau tercatat sebagai processed. Slot yang sudah dijawab dari prompt/reference diberi badge `Terjawab dari referensi` dan bisa dibuka.
- Sisanya dapat diedit melalui input/textarea/select sederhana.
- Indicator progress jumlah slot diproses.
- Fitur `Tidak tahu sekarang` memasukkan `Needs confirmation`, bukan data rekaan.
- Navigasi Back/Next, validasi field bila user ingin menyimpan jawaban manual.

#### 5. Structure (`/planning/structure`)

- Editor untuk module dan menu.
- Mulai dari mapping 4 module/8 menu pada planning di atas.
- User dapat tambah/hapus/rename module dan menu secara local state.
- Menu type select: `table`, `form`, `detail`, `dashboard`, `report`, `workflow`.
- IDs ditampilkan monospace dan stabil. ID baru increment deterministik.
- Right panel atau inline tree menampilkan perubahan dengan `layout` animation.

#### 6. Preview (`/planning/preview`)

- Tree `docs/planning/` yang expandable.
- Preview konten Markdown ringkas pada file yang dipilih.
- Tampilkan warning/unknown/assumption jika ada.
- Tampilkan matrix test plan: module, menu, baseline, scenario kompleks.
- CTA menuju Generate.

#### 7. Generate (`/planning/generate`)

- Simulasi progress multi-step deterministic, bukan network request.
- Step contoh: `Membaca referensi`, `Menyusun discovery`, `Membuat standar`, `Membuat test plan`, `Memvalidasi link`, `Menyiapkan ZIP`.
- Bisa menggunakan timer pendek; jangan lama. Jika user reduced motion, hilangkan transform motion dan tetap tampilkan perubahan status.
- Setelah selesai arahkan ke Success.

#### 8. Success (`/planning/success`)

- Status sukses jelas.
- Ringkasan jumlah module, menu, test plan, scenario, unknown.
- Tombol utama `Download magnetstructure-planning.zip`.
- ZIP dibuat di browser. Isi minimum ZIP:

```text
docs/planning/README.md
docs/planning/project/discovery.md
docs/planning/architecture/module-map.md
docs/planning/standards/frontend/menu-standard.md
docs/planning/testing/test-strategy.md
generation-report.md
```

- Beri feedback download sukses/gagal yang accessible.
- Tombol `Mulai project baru` mereset demo state dengan confirmation ringan.

---

## 6. Technical constraints

### Stack dan dependency

Wajib:

```text
React
Vite
JavaScript
framer-motion
CSS biasa / CSS Modules sesuai pola yang paling kecil dan rapi
```

Diizinkan bila diperlukan:

```text
react-router-dom  # route browser nyata
jszip             # ZIP browser yang valid
```

Tidak gunakan:

```text
TypeScript
Tailwind CDN
backend framework
ORM/database
authentication SDK
state-management library besar
UI component library besar
fake file .zip yang tidak dapat diekstrak
```

Pakai versi dependency yang sesuai scaffold dan dokumentasi saat implementasi. Baca dokumentasi resmi/current melalui Context7 untuk Vite, React, Framer Motion, React Router bila dipakai, JSZip bila dipakai, dan Vercel sebelum konfigurasi final.

### Motion

Gunakan animasi halus, singkat, dan hanya saat membantu orientasi:

- Page entry/exit dengan `AnimatePresence`.
- `layout` untuk tree dan editor module/menu.
- Feedback upload, badge status, toast, progress, expand/collapse.
- Root app wajib membungkus UI dengan:

```jsx
<MotionConfig reducedMotion="user">
  <App />
</MotionConfig>
```

Jangan gunakan motion berlebihan, parallax, auto-loop mencolok, atau animasi yang menyulitkan navigasi keyboard.

### Routing dan Vercel

- Gunakan browser route, bukan hash route.
- Tambahkan `vercel.json` rewrite SPA agar path route langsung tetap membuka `index.html`.
- Build command: `npm run build`.
- Output directory Vite default: `dist`.
- Jangan set konfigurasi Vercel yang tidak diperlukan.

### Suggested source tree

Struktur boleh disesuaikan, tetapi pertahankan pemisahan sederhana:

```text
src/
├── app/
│   ├── App.jsx
│   ├── routes.jsx
│   └── planning-data.js
├── components/
│   ├── AppShell.jsx
│   ├── TopNav.jsx
│   ├── WorkflowSidebar.jsx
│   ├── ProjectSummaryPanel.jsx
│   ├── StepActions.jsx
│   ├── StatusBadge.jsx
│   ├── FileUploadCard.jsx
│   ├── PlanningTree.jsx
│   ├── EmptyState.jsx
│   └── Icon.jsx
├── pages/
│   ├── DashboardPage.jsx
│   ├── ReferencesPage.jsx
│   ├── DiscoveryPage.jsx
│   ├── QuestionsPage.jsx
│   ├── StructurePage.jsx
│   ├── PreviewPage.jsx
│   ├── GeneratePage.jsx
│   └── SuccessPage.jsx
├── hooks/
│   └── usePlanningProject.js
├── lib/
│   ├── ids.js
│   ├── planning-content.js
│   └── zip.js
├── styles/
│   ├── tokens.css
│   ├── global.css
│   ├── layout.css
│   └── components.css
└── main.jsx
```

Jangan pecah file kecil secara berlebihan. Gabungkan code yang hanya dipakai satu layar bila membuat struktur lebih mudah dibaca.

---

## 7. Data demo dan behaviour

Gunakan state demo yang deterministic. Tidak ada API call nyata.

Minimum data model browser:

```js
{
  outputMode: 'zip',
  references: [],
  discovery: { facts: [], inferences: [], unknowns: [] },
  questions: [],
  modules: [],
  generationStatus: 'idle',
  generationSteps: [],
  generatedAt: null
}
```

Rules:

- ID module: `MOD-001`, `MOD-002`, dan seterusnya.
- ID menu: `MENU-001`, `MENU-002`, dan seterusnya.
- ID scenario: `SCN-MENU-XXX-001` sesuai menu terkait.
- Jangan memakai nama bisnis fiktif yang mengesankan project pelanggan nyata.
- Jika tidak ada input file, use case demo tetap dapat berjalan melalui `Gunakan data contoh`.
- `localStorage` optional untuk menyimpan draft di browser. Jika dipakai, sertakan tombol reset dan versi key yang jelas.
- Deteksi sederhana secret pada nama atau isi reference demo dapat memakai regex ringan untuk `api_key`, `token`, `password`, `secret`; hanya tampilkan warning, jangan simpan atau tampilkan value sensitif.

---

## 8. Accessibility, responsive, dan quality bar

Wajib:

- Semua action memakai `button` atau link semantik.
- Label form terhubung dengan input.
- Error dan toast memakai `aria-live` bila sesuai.
- Focus ring jelas.
- Tidak mengandalkan warna saja untuk status.
- Modal/confirmation kecil dapat ditutup keyboard.
- Sidebar kanan disembunyikan atau menjadi drawer pada tablet/mobile.
- Sidebar workflow berubah menjadi horizontal/compact navigation pada mobile.
- Layout tetap layak di lebar 1440px, 1024px, dan 375px.
- Tidak ada horizontal overflow yang tidak disengaja.
- Gunakan empty/loading/error/retry state saat screen membutuhkan data/proses.

---

## 9. Verification wajib

### Static checks

Jalankan dari root app:

```powershell
npm install
npm run build
npm run lint
```

Jika scaffold tidak memiliki `lint`, catat dengan jelas dan lakukan pemeriksaan statis minimal yang tersedia. Jangan klaim lint dijalankan bila script tidak ada.

### Manual flow check

Verifikasi minimal:

1. Dashboard CTA membuka `/planning/references`.
2. Upload/demo reference menampilkan metadata tanpa error.
3. Discovery membedakan Fact, Inference, Unknown.
4. Questions menunjukkan sedikitnya 15 slots processed.
5. Structure dapat menambah module/menu dan ID baru konsisten.
6. Preview tree dapat expand/collapse dan memilih file.
7. Generate selesai sampai Success tanpa request server.
8. Download menghasilkan archive ZIP yang dapat dibuka dan berisi whitelist file minimum.
9. Refresh/deep link contoh `/planning/preview` tidak 404 pada local preview dan siap rewrite Vercel.
10. Reduced-motion preference tidak memaksa transform/layout animation.
11. Desktop dan mobile layout tidak rusak.

Jika tooling browser tersedia, lakukan visual check local pada ukuran desktop dan mobile. Jika tidak tersedia, lakukan build + pemeriksaan code terarah dan catat keterbatasannya.

### Repository checks

Sebelum push:

```powershell
git status
git diff --check
git log -1 --oneline
```

Pastikan `.gitignore` mengecualikan minimal:

```text
node_modules/
dist/
.env
.env.*
!.env.example
```

Jangan pernah commit `.env` berisi nilai nyata, token, ZIP build artifact besar, atau referensi internal.

---

## 10. GitHub workflow

Target repository:

```text
Owner      : Mrmgnt
Repository : magnetstructure-web
Visibility : public
Branch     : main
```

Workflow:

1. Periksa `git remote -v` dan status repository dulu.
2. Jika repo lokal belum ada, `git init -b main`.
3. Jika remote GitHub belum ada, buat repository public dengan GitHub CLI:

```powershell
gh repo create Mrmgnt/magnetstructure-web --public --source . --remote origin
```

4. Set identity Git lokal hanya bila belum tersedia.
5. Commit terstruktur, minimal:

```text
chore: scaffold magnetstructure web
feat: add planning workflow interface
docs: add project planning package
```

Boleh satu commit final jika scope kecil; jangan membuat commit kosong.

6. Push hanya setelah verification sukses:

```powershell
git push -u origin main
```

7. Verifikasi remote dan branch setelah push.

Jika `gh` memberi `HTTP 401 Bad credentials`, hilangkan environment override token sementara lalu ulangi auth check sesuai environment. Jangan menaruh token di source atau log akhir.

---

## 11. Output akhir yang wajib dilaporkan

Jangan menulis laporan panjang. Gunakan format ini:

```md
## Selesai

- Goal: complete / blocked
- Workspace: `D:\project\magnetstructureweb`
- Planning: daftar singkat `docs/planning/` yang dibuat
- UI: daftar route/screen yang selesai
- Stack: React, Vite, JavaScript, Framer Motion, dependency tambahan bila ada
- Validation:
  - `npm run build`: PASS/FAIL
  - `npm run lint`: PASS/NOT AVAILABLE/FAIL
  - ZIP demo: PASS/FAIL
  - Manual flow: PASS/partial + alasan
- Git:
  - Repository: URL
  - Branch: `main`
  - Commit: hash + message
- Vercel: build `npm run build`, output `dist`, SPA rewrite tersedia
- Limitasi phase 1: frontend-only, mock discovery/generation, tanpa backend/AI/auth/database
```

Jika ada kegagalan yang memblokir, jangan push. Laporkan error exact, file terkait, tindakan yang sudah dicoba, dan langkah paling kecil berikutnya.

---

## 12. Larangan final

- Jangan menambah backend hanya untuk membuat demo terlihat nyata.
- Jangan memakai data internal atau artefak project internal sebagai content UI/repository.
- Jangan memalsukan hasil test, ZIP valid, GitHub push, atau deployment.
- Jangan menghapus `design.md`.
- Jangan mengganti keseluruhan desain dengan template dashboard generik.
- Jangan berhenti setelah membuat static page; alur 8 layar dan interaction utama harus berjalan.
- Jangan push sebelum build/validasi inti lulus.

