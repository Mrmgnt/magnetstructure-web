# Security

Tidak ada auth atau persistence server pada phase 1. Warning regex local untuk pola sensitif (`api[_-]?key|token|password|secret|private[_-]?key|credential`) pada nama atau content reference yang dibaca sementara di browser. Value sensitif tidak ditampilkan, dipersist, atau dikirim.

ZIP project/design hanya mengekstrak whitelist teks/code/config dan preview image terbatas. `node_modules`, `.git`, `.env*`, `*.key`, `*.pem`, dan path traversal ditolak. Maksimum: 50 MB per file, 100 MB hasil extract, 2000 entry.

AI: API key hanya di server. Browser tidak melihat `ROUTER9_API_KEY`. Evidence yang dikirim di-cap supaya tetap di bawah batas payload Vercel Functions. Bila AI error, app fallback ke analisis lokal.

ZIP output hanya memakai whitelist dokumen demo.
