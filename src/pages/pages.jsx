import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from '../app/router'
import { countMenus, demoReferences, describeAnswer, generationSteps, nextStableId, nextReferenceId, referenceCategories } from '../app/planning-data'
import { buildPlanningFiles, previewTree } from '../lib/planning-content'
import { analyzeProject } from '../lib/ai-client'
import { downloadPlanningZip } from '../lib/zip'
import { ConfirmDialog, EmptyState, Icon, PageHeader, PlanningTree, ReferenceUploadCard, StatusBadge, StepActions } from '../components/ui'

export function DashboardPage() {
  const flowCards = [
    ['01', 'Kumpulkan konteks', 'Reference lokal atau data contoh. Mendukung PDF, image, dan ZIP.'],
    ['02', 'Pisahkan temuan', 'Fact, inference, dan unknown; AI optional bila dikonfigurasi.'],
    ['03', 'Lengkapi slot', 'Pertanyaan pilihan ganda, essay, dan Lainnya.'],
    ['04', 'Susun struktur', 'Module dan menu dengan ID stabil.'],
    ['05', 'Review planning', 'Preview tree dan test matrix.'],
    ['06', 'Generate paket', 'ZIP valid, dibuat di browser.'],
  ]
  return (
    <div className="dashboard-content">
      <section className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">Developer planning workspace</p>
          <h1>Planning project,<br /><span>lebih terstruktur.</span></h1>
          <p>Bangun module, menu, standar, dan test plan sebelum coding dimulai. Upload PRD, design, dan project source; kerja tetap bisa berjalan tanpa AI.</p>
          <div className="hero-actions">
            <Link className="button primary large" to="/planning/references">Mulai planning <Icon name="arrow" /></Link>
            <a className="button ghost large" href="#workflow">Lihat workflow</a>
          </div>
        </motion.div>
        <motion.article className="recent-project-card" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 }}>
          <div className="recent-card-top"><div><p className="eyebrow">Project terakhir</p><h2>Planning baru</h2></div><StatusBadge tone="blue">Draft</StatusBadge></div>
          <div className="recent-progress"><div><span>Progress</span><strong>0 / 7 langkah</strong></div><div className="progress-track"><span style={{ width: '8%' }} /></div></div>
          <dl className="recent-meta"><div><dt>Output</dt><dd>ZIP archive</dd></div><div><dt>Mode</dt><dd>Browser local</dd></div><div><dt>Update</dt><dd>Belum dimulai</dd></div></dl>
          <Link className="text-link" to="/planning/references">Buka project <Icon name="arrow" size={15} /></Link>
        </motion.article>
      </section>

      <section id="workflow" className="dashboard-section">
        <div className="section-heading"><div><p className="eyebrow">Alur kerja</p><h2>Dari referensi ke paket planning</h2></div><p>Enam checkpoint ringkas. Drag-and-drop, multi-file, dan mode gelap tersedia.</p></div>
        <div className="flow-grid">{flowCards.map(([number, title, description]) => <article key={number} className="flow-card"><span className="mono">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="standards-panel">
        <div><p className="eyebrow">Standar aktif</p><h2>Baseline engineering ikut terbentuk.</h2><p>Setiap menu membawa kontrak minimal agar handoff ke developer dan QA tetap konsisten.</p></div>
        <div className="standard-list">
          {['Menu standard', 'Form & validation', 'Table state', 'Accessibility', 'Test plan'].map((item) => <span key={item}><Icon name="check" size={15} />{item}</span>)}
        </div>
      </section>
    </div>
  )
}

export function ReferencesPage({ project, setProject }) {
  const [message, setMessage] = useState('')
  const [draggingCategory, setDraggingCategory] = useState(null)
  const [busy, setBusy] = useState(false)

  async function ingest(category, fileList) {
    const files = Array.from(fileList || [])
    if (!files.length) return
    setBusy(true)
    setMessage(`Memproses ${files.length} file...`)
    const accepted = []
    const errors = []
    for (const file of files) {
      try {
        const id = nextReferenceId([...project.references, ...accepted])
        const processed = await processReferenceFileSafe(file, category, id)
        accepted.push(processed)
      } catch (error) {
        const id = nextReferenceId([...project.references, ...accepted])
        accepted.push({ id, category, name: file.name, type: file.type || 'Tipe tidak diketahui', size: file.size, status: 'error', source: 'Upload browser', sensitiveWarning: false, warningMessage: error.message, extractedText: '', imageData: [], archive: null, rawFile: file })
        errors.push(`${file.name}: ${error.message}`)
      }
    }
    if (accepted.length) {
      setProject((current) => {
        const merged = [...current.references, ...accepted]
        return { ...current, references: merged }
      })
    }
    setBusy(false)
    if (errors.length) setMessage(`Sebagian file gagal diproses. ${errors.join(' · ')}`)
    else if (accepted.length) setMessage(`${accepted.length} reference ditambahkan pada ${category}. Secret hanya warning, tidak disimpan.`)
  }

  async function processReferenceFileSafe(file, category, id) {
    const { processReferenceFile } = await import('../lib/file-ingestion')
    return processReferenceFile(file, category, id)
  }

  function removeReference(id) {
    setProject((current) => ({ ...current, references: current.references.filter((reference) => reference.id !== id) }))
    setMessage('Reference dihapus.')
  }

  function clearCategory(category) {
    setProject((current) => ({ ...current, references: current.references.filter((reference) => reference.category !== category) }))
    setMessage(`Reference kategori ${category} dibersihkan.`)
  }

  function useDemo() {
    setProject((current) => ({ ...current, references: demoReferences.map((reference) => ({ ...reference })) }))
    setMessage('Data contoh aktif. Tidak ada file server yang dianalisis.')
  }

  const canContinue = project.references.length > 0

  return (
    <>
      <PageHeader eyebrow="Langkah 1 · References" title="Kumpulkan konteks project." description="Drag-and-drop atau pilih file. PRD menerima text, PDF, dan image. Design dan project mendukung ZIP. Semua kategori bersifat optional; minimal satu file atau ZIP untuk lanjut." actions={<button className="button secondary" type="button" onClick={useDemo} disabled={busy}><Icon name="spark" size={16} />Gunakan data contoh</button>} />
      <div className="privacy-banner"><Icon name="alert" size={17} /><div><strong>Private by default</strong><span>Reference diproses di browser. Bila AI aktif, hanya ringkasan teks dan preview image yang dikirim ke /api/analyze.</span></div></div>
      <section className="upload-grid" aria-label="Reference upload">
        {referenceCategories.map((target) => (
          <ReferenceUploadCard
            key={target.id}
            category={target.id}
            label={target.label}
            help={target.help}
            optional={target.optional}
            references={project.references.filter((reference) => reference.category === target.id)}
            dragging={draggingCategory === target.id}
            busy={busy}
            onFiles={(files) => ingest(target.id, files)}
            onRemove={removeReference}
            onRetry={(reference) => reference.rawFile ? ingest(target.id, [reference.rawFile]) : setMessage('Pilih ulang file untuk retry processing.')}
            onClear={() => clearCategory(target.id)}
            onDragStateChange={(active) => setDraggingCategory(active ? target.id : null)}
          />
        ))}
      </section>
      <section className="output-section">
        <div><p className="eyebrow">Output mode</p><h2>Pilih bentuk hasil planning</h2></div>
        <fieldset className="output-options"><legend className="sr-only">Output planning</legend>{[
          ['zip', 'ZIP', 'Default, satu archive valid.'],
          ['folder', 'Folder', 'Struktur folder sebagai preview.'],
          ['both', 'Keduanya', 'ZIP dan representasi folder.'],
          ['template', 'Template saja', 'Baseline tanpa detail project.'],
        ].map(([value, label, help]) => <label key={value} className={`output-option${project.outputMode === value ? ' selected' : ''}`}><input type="radio" name="output-mode" value={value} checked={project.outputMode === value} onChange={() => setProject((current) => ({ ...current, outputMode: value }))} /><span><strong>{label}</strong><small>{help}</small></span></label>)}</fieldset>
      </section>
      <p className="live-message" aria-live="polite">{message}</p>
      {!canContinue && <EmptyState icon="file" title="Belum ada reference" description="Upload minimal satu file atau ZIP, atau aktifkan data contoh untuk melanjutkan." />}
      <StepActions backTo="/" nextTo="/planning/discovery" nextLabel="Lanjut ke discovery" disabled={!canContinue || busy} />
    </>
  )
}

export function DiscoveryPage({ project, setProject }) {
  const [analyzing, setAnalyzing] = useState(false)
  const [error, setError] = useState('')

  async function runAnalysis() {
    setAnalyzing(true)
    setError('')
    try {
      const result = await analyzeProject(project, 'discovery')
      setProject((current) => ({
        ...current,
        aiMode: result.mode,
        aiWarnings: result.warnings,
        discovery: {
          facts: result.facts.length ? result.facts : current.discovery.facts,
          inferences: result.inferences.length ? result.inferences : current.discovery.inferences,
          unknowns: result.unknowns.length ? result.unknowns : current.discovery.unknowns,
        },
      }))
    } catch (analysisError) {
      setError(analysisError.code === 'AI_NOT_CONFIGURED' ? '' : analysisError.message)
      setProject((current) => ({ ...current, aiMode: 'local', aiWarnings: [] }))
    } finally {
      setAnalyzing(false)
    }
  }

  const columns = [
    ['facts', 'Fact', 'green', 'Informasi disetujui dari prompt atau reference.'],
    ['inferences', 'Inference', 'blue', 'Kesimpulan lokal/AI untuk ditinjau, bukan fakta baru.'],
    ['unknowns', 'Unknown', 'amber', 'Keputusan belum tersedia dan tidak direka.'],
  ]
  const modeBadge = project.aiMode === 'ai' ? { tone: 'green', label: 'Analisis AI' } : project.aiMode === 'local' ? { tone: 'blue', label: 'Analisis lokal' } : { tone: 'neutral', label: 'AI belum dikonfigurasi' }

  return (
    <>
      <PageHeader eyebrow="Langkah 2 · Discovery" title="Pisahkan yang pasti dari yang belum diketahui." description="Buka Analisis AI bila Vercel env sudah diisi. Tanpa konfigurasi AI, gunakan analisis lokal." actions={<StatusBadge tone={modeBadge.tone}>{modeBadge.label}</StatusBadge>} />
      <div className="discovery-actions">
        <button className="button secondary" type="button" onClick={runAnalysis} disabled={analyzing || project.references.length === 0}>
          <Icon name="spark" size={16} />{analyzing ? 'Menganalisis...' : 'Jalankan analisis'}
        </button>
        <span className="discovery-meta">{project.references.length} reference · {project.questions.length} question slot</span>
      </div>
      {error && <p className="live-message error" aria-live="polite">{error}</p>}
      {project.aiWarnings?.length > 0 && <p className="live-message" aria-live="polite">Peringatan AI: {project.aiWarnings.join(' · ')}</p>}
      <section className="discovery-grid">
        {columns.map(([key, label, tone, description]) => <article className={`discovery-column ${tone}`} key={key}><div className="discovery-title"><div><p className="eyebrow">{label}</p><h2>{project.discovery[key].length} temuan</h2></div><StatusBadge tone={tone}>{label}</StatusBadge></div><p>{description}</p><ul>{project.discovery[key].map((item) => <li key={item}><span><Icon name={key === 'unknowns' ? 'alert' : 'check'} size={14} /></span>{item}</li>)}</ul></article>)}
      </section>
      <section className="question-slot-panel">
        <div className="section-heading compact"><div><p className="eyebrow">Question slots</p><h2>{project.questions.length} slot diproses</h2></div><StatusBadge tone="green">{project.questions.filter((question) => describeAnswer(question)).length} answered</StatusBadge></div>
        <div className="table-wrap"><table><thead><tr><th>ID</th><th>Slot</th><th>Source</th><th>Status</th></tr></thead><tbody>{project.questions.map((question) => <tr key={question.id}><td className="mono">{question.id}</td><td>{question.prompt}</td><td>{question.source}</td><td><StatusBadge tone={question.status === 'unknown' ? 'amber' : 'green'}>{describeAnswer(question) ? 'Answered' : 'Needs confirmation'}</StatusBadge></td></tr>)}</tbody></table></div>
      </section>
      <StepActions backTo="/planning/references" nextTo="/planning/questions" nextLabel="Review pertanyaan" />
    </>
  )
}

export function QuestionsPage({ project, setProject }) {
  const groups = [...new Set(project.questions.map((question) => question.group))]
  const processed = project.questions.filter((question) => describeAnswer(question).trim() || question.status === 'unknown').length
  const progress = Math.round((processed / project.questions.length) * 100)

  function updateQuestion(id, patch) {
    setProject((current) => ({ ...current, questions: current.questions.map((question) => question.id === id ? { ...question, ...patch } : question) }))
  }

  return (
    <>
      <PageHeader eyebrow="Langkah 3 · Questions" title="Pilih atau tulis jawaban." description="Pilihan ganda mempercepat; Lainnya membuka essay. Tidak tahu sekarang mengisi Needs confirmation." />
      <section className="question-progress" aria-label={`${processed} dari ${project.questions.length} slot diproses`}>
        <div><strong>{processed} / {project.questions.length} slot diproses</strong><span>{progress}%</span></div>
        <div className="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={progress}><motion.span initial={{ width: 0 }} animate={{ width: `${progress}%` }} /></div>
      </section>
      <div className="question-groups">
        {groups.map((group, groupIndex) => {
          const questions = project.questions.filter((question) => question.group === group)
          return <details className="question-group" key={group} open={groupIndex === 0 ? true : undefined}><summary><span><strong>{group}</strong><small>{questions.length} slot</small></span><Icon name="chevron" /></summary><div className="question-list">{questions.map((question) => <QuestionCard key={question.id} question={question} onChange={(patch) => updateQuestion(question.id, patch)} />)}</div></details>
        })}
      </div>
      <StepActions backTo="/planning/discovery" nextTo="/planning/structure" nextLabel="Susun struktur" disabled={processed < 15} />
    </>
  )
}

function QuestionCard({ question, onChange }) {
  const inputId = `answer-${question.id}`
  const otherId = `other-${question.id}`
  const tone = question.status === 'unknown' ? 'amber' : question.status === 'manual' || question.status === 'reference' ? 'green' : 'neutral'
  const label = question.status === 'unknown' ? 'Needs confirmation' : question.status === 'manual' ? 'Diedit manual' : question.status === 'reference' ? 'Terjawab dari referensi' : 'Belum dijawab'
  const isOther = question.answer === '__other__'

  return (
    <article className="question-card">
      <div className="question-card-head">
        <div><span className="mono">{question.id}</span><h3>{question.prompt}</h3></div>
        <StatusBadge tone={tone}>{label}</StatusBadge>
      </div>
      {question.type === 'choice' ? (
        <div className="choice-list" role="radiogroup" aria-labelledby={inputId}>
          <span id={inputId} className="sr-only">{question.prompt}</span>
          {question.options.map((option) => (
            <label key={option} className={`choice-option${question.answer === option ? ' selected' : ''}`}>
              <input type="radio" name={inputId} value={option} checked={question.answer === option} onChange={() => onChange({ answer: option, otherAnswer: '', status: 'manual' })} />
              <span>{option}</span>
            </label>
          ))}
          {question.allowOther && (
            <label className={`choice-option${isOther ? ' selected' : ''}`}>
              <input type="radio" name={inputId} value="__other__" checked={isOther} onChange={() => onChange({ answer: '__other__', status: 'manual' })} />
              <span>Lainnya</span>
            </label>
          )}
          {isOther && (
            <div className="choice-other">
              <label htmlFor={otherId} className="sr-only">Jawaban lainnya</label>
              <textarea id={otherId} rows="2" value={question.otherAnswer} onChange={(event) => onChange({ otherAnswer: event.target.value, status: 'manual' })} placeholder="Tulisan singkat" />
            </div>
          )}
        </div>
      ) : (
        <>
          <label htmlFor={inputId}>Jawaban</label>
          <textarea id={inputId} rows="2" value={question.answer} onChange={(event) => onChange({ answer: event.target.value, status: 'manual' })} placeholder="Masukkan jawaban atau gunakan Needs confirmation" />
        </>
      )}
      <div className="question-meta"><span>Source: {question.source}</span><button type="button" className="text-button" onClick={() => onChange({ answer: 'Needs confirmation', otherAnswer: '', status: 'unknown' })}>Tidak tahu sekarang</button></div>
    </article>
  )
}

export function StructurePage({ project, setProject }) {
  const allMenus = project.modules.flatMap((module) => module.menus)

  function addModule() {
    const id = nextStableId(project.modules, 'MOD')
    setProject((current) => ({ ...current, modules: [...current.modules, { id, name: `Module ${current.modules.length + 1}`, menus: [] }] }))
  }
  function updateModule(moduleId, name) {
    setProject((current) => ({ ...current, modules: current.modules.map((module) => module.id === moduleId ? { ...module, name } : module) }))
  }
  function removeModule(moduleId) {
    setProject((current) => ({ ...current, modules: current.modules.filter((module) => module.id !== moduleId) }))
  }
  function addMenu(moduleId) {
    const id = nextStableId(allMenus, 'MENU')
    setProject((current) => ({ ...current, modules: current.modules.map((module) => module.id === moduleId ? { ...module, menus: [...module.menus, { id, name: `Menu ${allMenus.length + 1}`, type: 'form' }] } : module) }))
  }
  function updateMenu(moduleId, menuId, patch) {
    setProject((current) => ({ ...current, modules: current.modules.map((module) => module.id === moduleId ? { ...module, menus: module.menus.map((menu) => menu.id === menuId ? { ...menu, ...patch } : menu) } : module) }))
  }
  function removeMenu(moduleId, menuId) {
    setProject((current) => ({ ...current, modules: current.modules.map((module) => module.id === moduleId ? { ...module, menus: module.menus.filter((menu) => menu.id !== menuId) } : module) }))
  }

  return (
    <>
      <PageHeader eyebrow="Langkah 4 · Structure" title="Bentuk module dan menu dengan ID stabil." description="Tambah, rename, ubah type, atau hapus item. Preview tree di kanan mengikuti perubahan local state." actions={<button className="button primary" type="button" onClick={addModule}><Icon name="plus" size={16} />Tambah module</button>} />
      <div className="structure-layout">
        <section className="module-editor" aria-label="Module editor">
          {project.modules.length === 0 && <EmptyState icon="tree" title="Belum ada module" description="Tambah module untuk mulai membentuk planning." action={<button className="button primary" type="button" onClick={addModule}>Tambah module</button>} />}
          {project.modules.map((module) => <motion.article layout className="module-card" key={module.id}><div className="module-card-head"><span className="id-chip mono">{module.id}</span><label className="grow"><span className="sr-only">Nama {module.id}</span><input value={module.name} onChange={(event) => updateModule(module.id, event.target.value)} /></label><button className="icon-button danger-icon" type="button" onClick={() => removeModule(module.id)} aria-label={`Hapus ${module.name}`}><Icon name="trash" size={17} /></button></div><div className="menu-list">{module.menus.map((menu) => <motion.div layout className="menu-row" key={menu.id}><span className="mono">{menu.id}</span><label><span className="sr-only">Nama {menu.id}</span><input value={menu.name} onChange={(event) => updateMenu(module.id, menu.id, { name: event.target.value })} /></label><label><span className="sr-only">Type {menu.id}</span><select value={menu.type} onChange={(event) => updateMenu(module.id, menu.id, { type: event.target.value })}>{['table', 'form', 'detail', 'dashboard', 'report', 'workflow'].map((type) => <option key={type}>{type}</option>)}</select></label><button className="icon-button" type="button" onClick={() => removeMenu(module.id, menu.id)} aria-label={`Hapus ${menu.name}`}><Icon name="x" size={16} /></button></motion.div>)}</div><button className="add-menu-button" type="button" onClick={() => addMenu(module.id)}><Icon name="plus" size={15} />Tambah menu ke {module.id}</button></motion.article>)}
        </section>
        <aside className="live-tree-panel"><p className="eyebrow">Live structure</p><h2>{project.modules.length} module · {countMenus(project.modules)} menu</h2><div className="live-tree">{project.modules.map((module) => <motion.div layout key={module.id} className="live-tree-module"><div><span className="mono">{module.id}</span><strong>{module.name || 'Tanpa nama'}</strong></div>{module.menus.map((menu) => <motion.div layout key={menu.id} className="live-tree-menu"><span className="mono">{menu.id}</span><span>{menu.name || 'Tanpa nama'}</span><small>{menu.type}</small></motion.div>)}</motion.div>)}</div></aside>
      </div>
      <StepActions backTo="/planning/questions" nextTo="/planning/preview" nextLabel="Preview planning" disabled={project.modules.length === 0} />
    </>
  )
}

export function PreviewPage({ project }) {
  const files = useMemo(() => buildPlanningFiles(project), [project])
  const [selected, setSelected] = useState('docs/planning/README.md')
  return (
    <>
      <PageHeader eyebrow="Langkah 5 · Preview" title="Periksa paket planning sebelum generate." description="Buka tree, pilih file, dan review matrix. Konten ini dihasilkan dari local state." />
      <div className="preview-layout">
        <section className="tree-panel"><div className="panel-heading"><div><p className="eyebrow">File tree</p><h2>docs/planning/</h2></div><StatusBadge tone="blue">6 file ZIP</StatusBadge></div><PlanningTree nodes={previewTree} selected={selected} onSelect={setSelected} /></section>
        <section className="markdown-panel"><div className="markdown-toolbar"><span className="mono">{selected}</span><StatusBadge tone="green">Preview</StatusBadge></div><pre className="markdown-preview">{files[selected] || '# Preview belum tersedia\n\nFile ini menjadi bagian struktur lengkap planning repository.'}</pre></section>
      </div>
      <section className="review-notes"><article><StatusBadge tone="amber">Unknown</StatusBadge><p>{project.discovery.unknowns.length} keputusan future phase tetap ditandai sebagai Unknown.</p></article><article><StatusBadge tone="blue">Assumption</StatusBadge><p>Discovery dan generation memakai AI optional; workflow tetap berjalan tanpa AI.</p></article></section>
      <section className="test-matrix-panel"><div className="section-heading compact"><div><p className="eyebrow">Test matrix</p><h2>Cakupan planning</h2></div><span>{project.modules.length} module · {countMenus(project.modules)} menu · 5 complex scenario</span></div><div className="table-wrap"><table><thead><tr><th>Area</th><th>Module plan</th><th>Menu plan</th><th>Baseline</th><th>Complex scenario</th></tr></thead><tbody><tr><td>Planning workflow</td><td>{project.modules.length}</td><td>{countMenus(project.modules)}</td><td>4</td><td>5</td></tr></tbody></table></div></section>
      <StepActions backTo="/planning/structure" nextTo="/planning/generate" nextLabel="Generate planning" />
    </>
  )
}

export function GeneratePage({ project, setProject }) {
  const navigate = useNavigate()
  const started = useRef(false)

  useEffect(() => {
    if (project.generationStatus === 'success') return
    if (started.current) return
    started.current = true
    setProject((current) => ({ ...current, generationStatus: 'running', generationSteps: generationSteps.map((label) => ({ label, status: 'pending' })) }))
    const timers = generationSteps.map((_, index) => setTimeout(() => {
      setProject((current) => {
        const complete = index === generationSteps.length - 1
        return {
          ...current,
          generationStatus: complete ? 'success' : 'running',
          generatedAt: complete ? new Date().toISOString() : current.generatedAt,
          generationSteps: current.generationSteps.map((step, stepIndex) => ({ ...step, status: stepIndex <= index ? 'done' : stepIndex === index + 1 ? 'active' : 'pending' })),
        }
      })
      if (index === generationSteps.length - 1) setTimeout(() => navigate('/planning/success'), 450)
    }, 420 * (index + 1)))
    return () => timers.forEach(clearTimeout)
  }, [navigate, project.generationStatus, setProject])

  const completed = project.generationSteps.filter((step) => step.status === 'done').length
  const progress = Math.round((completed / generationSteps.length) * 100)
  return (
    <>
      <PageHeader eyebrow="Langkah 6 · Generate" title="Menyusun paket planning di browser." description="Progress deterministic. Bila AI aktif, analisis reference sudah dilakukan di Discovery." actions={<StatusBadge tone={project.generationStatus === 'success' ? 'green' : 'blue'}>{project.generationStatus === 'success' ? 'Selesai' : 'Memproses lokal'}</StatusBadge>} />
      <section className="generation-card">
        <div className="generation-visual"><motion.div className="generation-ring" animate={{ rotate: project.generationStatus === 'success' ? 0 : 360 }} transition={{ duration: 1.8, repeat: project.generationStatus === 'success' ? 0 : Infinity, ease: 'linear' }}><Icon name={project.generationStatus === 'success' ? 'check' : 'spark'} size={30} /></motion.div><div><strong>{progress}%</strong><span>{completed} dari {generationSteps.length} step</span></div></div>
        <div className="progress-track large"><motion.span animate={{ width: `${progress}%` }} /></div>
        <ol className="generation-steps">{project.generationSteps.map((step, index) => <li key={step.label} className={step.status}><span className="step-state">{step.status === 'done' ? <Icon name="check" size={15} /> : index + 1}</span><div><strong>{step.label}</strong><small>{step.status === 'done' ? 'Selesai' : step.status === 'active' ? 'Sedang diproses' : 'Menunggu'}</small></div></li>)}</ol>
      </section>
      <div className="generation-note"><Icon name="alert" size={16} />Reduced-motion tetap menampilkan perubahan status tanpa bergantung pada transform.</div>
      <StepActions backTo="/planning/preview" />
    </>
  )
}

export function SuccessPage({ project, resetProject }) {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)
  const menus = countMenus(project.modules)
  const testPlans = project.modules.length + menus + 5

  async function download() {
    setMessage('Menyiapkan archive...')
    try {
      const paths = await downloadPlanningZip(project)
      setMessage(`Download berhasil. ${paths.length} file masuk archive valid.`)
    } catch (error) {
      setMessage(`Download gagal: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  function reset() {
    resetProject()
    setConfirmReset(false)
    navigate('/planning/references')
  }

  if (project.generationStatus !== 'success') {
    return <><PageHeader eyebrow="Langkah 7 · Success" title="Generation belum dijalankan." description="Direct route tetap aman. Jalankan simulasi generate sebelum download." /><EmptyState icon="play" title="Belum ada output" description="Buka Generate untuk menyusun paket planning lokal." action={<Link className="button primary" to="/planning/generate">Buka Generate</Link>} /></>
  }

  return (
    <>
      <section className="success-hero"><motion.div className="success-mark" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}><Icon name="check" size={34} /></motion.div><p className="eyebrow">Generation complete</p><h1>Paket planning siap.</h1><p>Semua file dibuat di browser berdasarkan local state. Reference mentah tidak ikut diarchive.</p></section>
      <section className="success-summary"><div><span>Module</span><strong>{project.modules.length}</strong></div><div><span>Menu</span><strong>{menus}</strong></div><div><span>Test plan</span><strong>{testPlans}</strong></div><div><span>Scenario</span><strong>5</strong></div><div><span>Unknown</span><strong>{project.discovery.unknowns.length}</strong></div></section>
      <section className="download-card"><div><span className="download-icon"><Icon name="download" size={25} /></span><div><h2>magnetstructure-planning.zip</h2><p>Valid ZIP · 6 whitelist file · tanpa reference mentah</p></div></div><button className="button primary large" type="button" onClick={download}><Icon name="download" />Download ZIP</button></section>
      <p className="live-message success-message" aria-live="polite">{message}</p>
      <div className="success-actions"><Link className="button secondary" to="/planning/preview">Review preview</Link><button className="button ghost" type="button" onClick={() => setConfirmReset(true)}><Icon name="refresh" size={16} />Mulai project baru</button></div>
      {confirmReset && <ConfirmDialog title="Mulai project baru?" description="Local state demo saat ini akan direset. File yang sudah diunduh tidak terpengaruh." confirmLabel="Reset project" onConfirm={reset} onCancel={() => setConfirmReset(false)} />}
    </>
  )
}
