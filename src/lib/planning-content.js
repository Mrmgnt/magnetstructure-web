export function buildPlanningFiles(project) {
  const moduleRows = project.modules
    .map((module) => `| ${module.id} | ${module.name} | ${module.menus.map((menu) => `${menu.id} ${menu.name}`).join(', ') || 'Belum ada menu'} |`)
    .join('\n')

  return {
    'docs/planning/README.md': `# Magnetstructure Planning\n\nPaket planning browser demo.\n\n- Module: ${project.modules.length}\n- Menu: ${project.modules.reduce((sum, module) => sum + module.menus.length, 0)}\n- Output: ${project.outputMode}\n`,
    'docs/planning/project/discovery.md': `# Discovery\n\n## Facts\n${project.discovery.facts.map((item) => `- ${item}`).join('\n')}\n\n## Inferences\n${project.discovery.inferences.map((item) => `- ${item}`).join('\n')}\n\n## Unknowns\n${project.discovery.unknowns.map((item) => `- ${item}`).join('\n')}\n`,
    'docs/planning/architecture/module-map.md': `# Module Map\n\n| Module | Nama | Menus |\n|---|---|---|\n${moduleRows}\n`,
    'docs/planning/standards/frontend/menu-standard.md': '# Menu Standard\n\nSetiap menu memiliki route, tujuan, state, primary action, dan test plan. ID harus stabil dan terlihat saat planning.\n',
    'docs/planning/testing/test-strategy.md': '# Test Strategy\n\n1. Build dan lint.\n2. Manual flow semua route.\n3. Responsive dan keyboard.\n4. Reduced motion.\n5. Buka ZIP dan verifikasi whitelist.\n',
    'generation-report.md': `# Generation Report\n\nGenerated locally: ${project.generatedAt || new Date().toISOString()}\n\nTidak ada request server atau analisis AI nyata.\n`,
  }
}

export const previewTree = [
  { path: 'docs/planning/README.md', label: 'README.md' },
  {
    label: 'project',
    children: [{ path: 'docs/planning/project/discovery.md', label: 'discovery.md' }],
  },
  {
    label: 'architecture',
    children: [{ path: 'docs/planning/architecture/module-map.md', label: 'module-map.md' }],
  },
  {
    label: 'standards/frontend',
    children: [{ path: 'docs/planning/standards/frontend/menu-standard.md', label: 'menu-standard.md' }],
  },
  {
    label: 'testing',
    children: [{ path: 'docs/planning/testing/test-strategy.md', label: 'test-strategy.md' }],
  },
]
