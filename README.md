# Magnetstructure Web

Frontend planning workspace. Upload PRD, design, dan project source. Hasilkan paket `docs/planning/` sebagai ZIP.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
npm run smoke
```

## Upload categories

- `prd`: text, PDF, image.
- `design`: format PRD plus ZIP (mis. export Figma).
- `api`: OpenAPI/Swagger YAML atau JSON. Optional.
- `project`: ZIP source code untuk membaca struktur folder.

ZIP diproses dengan safe whitelist: `node_modules`, `.git`, `.env*`, `*.key`, `*.pem`, dan path traversal di-skip.

## Optional AI analysis

Aktifkan analisis AI lewat Vercel Environment Variables:

```text
ROUTER9_BASE_URL=
ROUTER9_API_KEY=
ROUTER9_MODEL=
ROUTER9_VISION_MODEL=
AI_ANALYSIS_ENABLED=true
```

`ROUTER9_BASE_URL` dianggap endpoint OpenAI-compatible. API key hanya dibaca server-side oleh `/api/analyze`. Tanpa env ini, workflow tetap berjalan dengan analisis lokal.

## Vercel deployment

- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- SPA deep links: lihat `vercel.json`

## Constraints

Frontend-only. Tidak ada database, auth, atau cloud file storage. Reference mentah tidak meninggalkan browser; hanya evidence ringkas yang dikirim ke AI bila dikonfigurasi.
