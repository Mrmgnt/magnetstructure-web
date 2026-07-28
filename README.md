# Magnetstructure Web

Frontend prototype untuk membentuk paket `docs/planning/` melalui alur reference, discovery, questions, structure, preview, generate, dan download ZIP.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Vercel deployment

- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- SPA deep links: dikonfigurasi melalui `vercel.json`

Phase 1 berjalan sepenuhnya di browser tanpa backend, database, autentikasi, atau API AI nyata.
