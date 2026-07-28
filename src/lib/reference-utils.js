export const MAX_FILE_BYTES = 50 * 1024 * 1024
export const MAX_ARCHIVE_UNCOMPRESSED_BYTES = 100 * 1024 * 1024
export const MAX_ARCHIVE_ENTRIES = 2000
export const MAX_AI_PAYLOAD_BYTES = 3.5 * 1024 * 1024
export const MAX_TEXT_BYTES = 1.5 * 1024 * 1024
export const MAX_ARCHIVE_TEXT_BYTES = 2.5 * 1024 * 1024

const secretPattern = /api[_-]?key|access[_-]?token|token|password|secret|private[_-]?key|credential/i
const blockedPathPattern = /(^|\/)(\.git|node_modules|dist|build|coverage)(\/|$)|(^|\/)\.env(?:\.|$)|\.(?:key|pem|p12|pfx)$/i
const textExtensionPattern = /\.(?:md|markdown|txt|json|ya?ml|xml|html?|css|scss|less|js|jsx|ts|tsx|vue|svelte|astro|py|rb|go|java|kt|swift|rs|php|sql|graphql|gql|lock|toml|ini|conf|env\.example)$/i
const imageExtensionPattern = /\.(?:png|jpe?g|webp|gif|svg)$/i

export const ACCEPTED_EXTENSIONS = {
  prd: ['.md', '.markdown', '.txt', '.pdf', '.png', '.jpg', '.jpeg', '.webp'],
  design: ['.md', '.markdown', '.txt', '.pdf', '.png', '.jpg', '.jpeg', '.webp', '.zip', '.rar'],
  api: ['.yaml', '.yml', '.json'],
  project: ['.zip', '.rar'],
}

export function acceptedExtensions(category) { return ACCEPTED_EXTENSIONS[category] || [] }
export function acceptAttribute(category) { return acceptedExtensions(category).join(',') }
export function isAllowedFile(file, category) { return acceptedExtensions(category).some((extension) => file.name.toLowerCase().endsWith(extension)) }
export function formatBytes(size) { if (!size) return '0 B'; if (size < 1024) return `${size} B`; if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`; return `${(size / (1024 * 1024)).toFixed(1)} MB` }
export function hasSensitivePattern(value) { return secretPattern.test(value || '') }
export function isBlockedArchivePath(path) { const normalized = path.replaceAll('\\', '/'); return normalized.startsWith('/') || normalized.split('/').includes('..') || blockedPathPattern.test(normalized) || hasSensitivePattern(normalized) }
export function isTextLikePath(path) { return textExtensionPattern.test(path.toLowerCase()) }
export function isImagePath(path) { return imageExtensionPattern.test(path.toLowerCase()) }
