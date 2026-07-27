import { useCallback, useState } from 'react'
import { Route, Routes } from './router'
import { AppShell, DashboardShell } from '../components/ui'
import { createInitialProject } from './planning-data'
import { DashboardPage, DiscoveryPage, GeneratePage, PreviewPage, QuestionsPage, ReferencesPage, StructurePage, SuccessPage } from '../pages/pages'

export default function App() {
  const [project, setProject] = useState(createInitialProject)
  const resetProject = useCallback(() => setProject(createInitialProject()), [])
  const planningPage = (page) => <AppShell project={project}>{page}</AppShell>

  return (
    <Routes>
      <Route path="/" element={<DashboardShell><DashboardPage /></DashboardShell>} />
      <Route path="/planning/references" element={planningPage(<ReferencesPage project={project} setProject={setProject} />)} />
      <Route path="/planning/discovery" element={planningPage(<DiscoveryPage project={project} />)} />
      <Route path="/planning/questions" element={planningPage(<QuestionsPage project={project} setProject={setProject} />)} />
      <Route path="/planning/structure" element={planningPage(<StructurePage project={project} setProject={setProject} />)} />
      <Route path="/planning/preview" element={planningPage(<PreviewPage project={project} />)} />
      <Route path="/planning/generate" element={planningPage(<GeneratePage project={project} setProject={setProject} />)} />
      <Route path="/planning/success" element={planningPage(<SuccessPage project={project} resetProject={resetProject} />)} />
      <Route path="*" element={<DashboardShell><DashboardPage /></DashboardShell>} />
    </Routes>
  )
}

