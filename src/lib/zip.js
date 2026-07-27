import JSZip from 'jszip'
import { buildPlanningFiles } from './planning-content'

export async function downloadPlanningZip(project) {
  const zip = new JSZip()
  const files = buildPlanningFiles(project)

  Object.entries(files).forEach(([path, content]) => {
    zip.file(path, content)
  })

  const blob = await zip.generateAsync({ type: 'blob' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'magnetstructure-planning.zip'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)

  return Object.keys(files)
}
