# Integrations

Phase 1: Browser File API untuk metadata; pdfjs-dist untuk PDF text/preview; JSZip untuk archive; Vercel serverless `/api/analyze` sebagai proxy AI opsional.

AI provider diharapkan kompatibel OpenAI. Endpoint: `${ROUTER9_BASE_URL}/chat/completions`. API key hanya dibaca oleh serverless function dari environment variables.

Future API harus tervalidasi, versioned, dan tidak menyimpan secret dari reference di log.
