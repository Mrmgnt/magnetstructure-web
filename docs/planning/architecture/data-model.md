# Data Model

```js
{
  outputMode: 'zip',
  references: [
    {
      id: 'REF-001',
      category: 'prd|design|api|project',
      name, type, size,
      status: 'ready|error',
      sensitiveWarning,
      warningMessage,
      extractedText,
      imageData: [],
      archive: { entryCount, ignoredEntries, includedEntries } | null,
      rawFile: File
    }
  ],
  discovery: { facts: [], inferences: [], unknowns: [] },
  questions: [
    {
      id, group, prompt,
      type: 'choice|essay',
      options: [],
      allowOther: boolean,
      answer, otherAnswer,
      source, status
    }
  ],
  modules: [{ id, name, menus: [{ id, name, type }] }],
  aiMode: 'unknown|local|ai',
  aiWarnings: [],
  generationStatus, generationSteps, generatedAt
}
```

ID stabil: `MOD-001`, `MENU-001`, `REF-001`, `SCN-MENU-XXX-001`.
