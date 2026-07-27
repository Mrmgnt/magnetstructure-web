import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from '../app/router'
import { countMenus, workflow } from '../app/planning-data'

export function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    spark: <><path d="m12 2 1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h5" /></>,
    search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.2-4.2" /></>,
    tree: <><path d="M5 3v18M5 8h5a3 3 0 0 0 3-3V3M5 16h5a3 3 0 0 1 3 3v2" /><circle cx="17" cy="3" r="2" /><circle cx="17" cy="12" r="2" /><circle cx="17" cy="21" r="2" /><path d="M5 12h12" /></>,
    play: <path d="m8 5 11 7-11 7Z" fill="currentColor" stroke="none" />,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    trash: <><path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3" /></>,
    chevron: <path d="m8 10 4 4 4-4" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    alert: <><path d="M12 3 2.8 20h18.4L12 3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    refresh: <><path d="M20 11a8 8 0 1 0 2 5.3" /><path d="M20 4v7h-7" /></>,
    x: <path d="m6 6 12 12M18 6 6 18" />,
  }
  return <svg {...common}>{paths[name] || paths.file}</svg>
}

export function StatusBadge({ children, tone = 'neutral' }) {
  return <span className={`status-badge ${tone}`}>{children}</span>
}

export function TopNav() {
  return (
    <header className="top-nav">
      <Link className="brand" to="/" aria-label="Magnetstructure dashboard">
        <span className="brand-mark"><Icon name="spark" size={17} /></span>
        <span>Magnetstructure</span>
      </Link>
      <nav className="top-nav-links" aria-label="Navigasi utama">
        <Link to="/">Workspace</Link>
        <a href="https://vercel.com/docs" target="_blank" rel="noreferrer">Dokumentasi</a>
      </nav>
      <div className="top-nav-actions">
        <span className="sync-status"><span className="status-dot" />Browser demo</span>
        <button className="avatar" type="button" aria-label="Profil demo">M</button>
      </div>
    </header>
  )
}

export function WorkflowSidebar() {
  return (
    <aside className="workflow-sidebar">
      <p className="eyebrow">Workflow planning</p>
      <nav aria-label="Tahapan planning">
        <ol className="workflow-list">
          {workflow.map((step) => (
            <li key={step.route}>
              <NavLink to={step.route} className={({ isActive }) => `workflow-link${isActive ? ' active' : ''}`}>
                <span className="workflow-number">{step.number}</span>
                <span>{step.short}</span>
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
      <div className="sidebar-note">
        <Icon name="alert" size={16} />
        <p>Analisis berjalan lokal. Tidak ada reference yang dikirim keluar browser.</p>
      </div>
    </aside>
  )
}

export function ProjectSummaryPanel({ project }) {
  const menus = countMenus(project.modules)
  return (
    <aside className="summary-panel" aria-label="Ringkasan project">
      <div className="summary-heading">
        <div>
          <p className="eyebrow">Project draft</p>
          <h2>Planning baru</h2>
        </div>
        <StatusBadge tone="blue">Draft</StatusBadge>
      </div>
      <dl className="summary-stats">
        <div><dt>Reference</dt><dd>{project.references.length}</dd></div>
        <div><dt>Module</dt><dd>{project.modules.length}</dd></div>
        <div><dt>Menu</dt><dd>{menus}</dd></div>
        <div><dt>Unknown</dt><dd>{project.discovery.unknowns.length}</dd></div>
      </dl>
      <div className="summary-output">
        <span>Output dipilih</span>
        <strong>{project.outputMode === 'zip' ? 'ZIP archive' : project.outputMode}</strong>
      </div>
      <div className="summary-tree" aria-label="Rangka project">
        <p className="eyebrow">Struktur aktif</p>
        {project.modules.map((module) => (
          <div className="summary-module" key={module.id}>
            <span className="mono">{module.id}</span>
            <strong>{module.name}</strong>
            <small>{module.menus.length} menu</small>
          </div>
        ))}
      </div>
    </aside>
  )
}

export function AppShell({ project, children }) {
  const location = useLocation()
  const current = workflow.find((step) => step.route === location.pathname)
  return (
    <div className="app-frame">
      <TopNav />
      <div className="planning-layout">
        <WorkflowSidebar />
        <main className="page-main">
          <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }}>
            <div className="page-context"><span className="mono">{current?.number || '00'}</span><span>{current?.label || 'Planning'}</span></div>
            {children}
          </motion.div></AnimatePresence>
        </main>
        <ProjectSummaryPanel project={project} />
      </div>
    </div>
  )
}

export function DashboardShell({ children }) {
  return <div className="app-frame dashboard-frame"><TopNav /><main className="dashboard-main">{children}</main></div>
}

export function PageHeader({ eyebrow, title, description, actions }) {
  return <header className="page-header">
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </div>
    {actions && <div className="page-header-actions">{actions}</div>}
  </header>
}

export function StepActions({ backTo, nextTo, nextLabel = 'Lanjut', disabled = false }) {
  return (
    <div className="step-actions">
      {backTo ? <Link className="button secondary" to={backTo}>Kembali</Link> : <span />}
      {nextTo && <Link className={`button primary${disabled ? ' disabled' : ''}`} to={disabled ? '#' : nextTo} aria-disabled={disabled} onClick={(event) => disabled && event.preventDefault()}>{nextLabel}<Icon name="arrow" size={16} /></Link>}
    </div>
  )
}

export function FileUploadCard({ slot, label, help, reference, onFiles }) {
  const inputId = `upload-${slot.replace(/[^a-z0-9]/gi, '-')}`
  return (
    <article className="upload-card">
      <div className="upload-card-head">
        <div className="file-symbol"><Icon name="file" /></div>
        <div><h2>{label}</h2><p>{help}</p></div>
        {reference && <StatusBadge tone={reference.sensitiveWarning ? 'amber' : 'green'}>{reference.sensitiveWarning ? 'Periksa' : reference.status}</StatusBadge>}
      </div>
      {reference ? (
        <div className="file-metadata">
          <strong>{reference.name}</strong>
          <span>{reference.type || 'Tipe tidak diketahui'} · {formatBytes(reference.size)} · {reference.source}</span>
          {reference.sensitiveWarning && <span className="warning-text"><Icon name="alert" size={14} /> Indikasi secret terdeteksi. Value tidak disimpan.</span>}
        </div>
      ) : <p className="empty-inline">Belum ada file. Gunakan upload atau data contoh.</p>}
      <label className="button secondary upload-button" htmlFor={inputId}><Icon name="plus" size={16} />Pilih file</label>
      <input id={inputId} className="sr-only" type="file" accept=".md,.markdown,.txt,.json,.yaml,.yml" onChange={(event) => onFiles(slot, event.target.files)} />
    </article>
  )
}

function formatBytes(size) {
  if (!size) return '0 B'
  if (size < 1024) return `${size} B`
  return `${(size / 1024).toFixed(1)} KB`
}

export function ConfirmDialog({ title, description, confirmLabel, onConfirm, onCancel }) {
  useEffect(() => {
    function closeOnEscape(event) { if (event.key === 'Escape') onCancel() }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [onCancel])
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onCancel}>
      <section className="confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="confirm-title" onMouseDown={(event) => event.stopPropagation()}>
        <h2 id="confirm-title">{title}</h2>
        <p>{description}</p>
        <div className="dialog-actions"><button type="button" className="button secondary" onClick={onCancel}>Batal</button><button type="button" className="button danger" onClick={onConfirm}>{confirmLabel}</button></div>
      </section>
    </div>
  )
}

export function EmptyState({ icon = 'file', title, description, action }) {
  return <div className="empty-state"><span className="empty-icon"><Icon name={icon} size={22} /></span><h2>{title}</h2><p>{description}</p>{action}</div>
}

export function PlanningTree({ nodes, selected, onSelect }) {
  return <div className="planning-tree" role="tree" aria-label="Planning file tree">{nodes.map((node) => <TreeNode key={node.path || node.label} node={node} selected={selected} onSelect={onSelect} />)}</div>
}

function TreeNode({ node, selected, onSelect }) {
  const [open, setOpen] = useState(true)
  if (node.children) {
    return <motion.div layout className="tree-folder"><button type="button" className="tree-folder-button" onClick={() => setOpen((value) => !value)} aria-expanded={open}><span className={`tree-chevron${open ? ' open' : ''}`}><Icon name="chevron" size={15} /></span><Icon name="tree" size={15} />{node.label}</button>{open && <div className="tree-children">{node.children.map((child) => <TreeNode key={child.path || child.label} node={child} selected={selected} onSelect={onSelect} />)}</div>}</motion.div>
  }
  return <button type="button" role="treeitem" aria-selected={selected === node.path} className={`tree-file${selected === node.path ? ' selected' : ''}`} onClick={() => onSelect(node.path)}><Icon name="file" size={15} />{node.label}</button>
}



