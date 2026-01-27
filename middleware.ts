/**
 * Vercel Edge Middleware для перевірки авторизації
 * Працює тільки в preview та development енвайронментах
 *
 * ВАЖЛИВО: Middleware працює ДО Vercel rewrites.
 * Замість редіректу в middleware, ми дозволяємо завантажити index.html,
 * а перевірку авторизації та редірект робить React на клієнті.
 */
export { config, default } from './middleware/index.js';




