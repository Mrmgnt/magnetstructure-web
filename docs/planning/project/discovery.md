# Discovery

## Facts
- Goal: web app untuk memandu pembentukan paket docs/planning/ project baru.
- Users: product owner, technical lead, developer, QA, dan AI coding agent.
- Stack: React, Vite, JavaScript, CSS, Framer Motion, JSZip, pdfjs-dist.
- Phase 1: single-user browser demo. AI optional, fallback lokal bila belum dikonfigurasi.
- Upload: PRD (text/PDF/image), design (termasuk ZIP), API reference (YAML/JSON), project source ZIP. Drag-and-drop dan multi-file.

## Inferences
- ID deterministik memudahkan review.
- Preview sebelum generate mengurangi output tidak relevan.

## Unknown
- Provider analisis AI nyata belum dipilih (9Router/Hermes dalam pertimbangan).
- Model data persistence belum ditentukan.
- Sistem autentikasi/otorisasi phase berikutnya belum dipilih.
- Spesifikasi resmi Hermes belum tersedia.
