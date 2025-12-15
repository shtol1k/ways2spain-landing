/**
 * Vercel Edge Middleware для перевірки авторизації
 * Працює тільки в preview та development енвайронментах
 *
 * ВАЖЛИВО: Middleware працює ДО Vercel rewrites.
 * Замість редіректу в middleware, ми дозволяємо завантажити index.html,
 * а перевірку авторизації та редірект робить React на клієнті.
 */
export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const hostname = url.hostname;
  const pathname = url.pathname;

  // КРОК 1: Пропускаємо статичні файли, index.html та головні маршрути для SPA
  // Це має бути ДО будь-яких інших перевірок
  // ВАЖЛИВО: `/` та `/login` мають бути пропущені щоб rewrites могли перенаправити на /index.html
  if (
    pathname === '/' ||
    pathname === '/login' ||
    pathname === '/index.html' ||
    pathname.startsWith('/admin/') ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_next/') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff|woff2|ttf|eot|json|webp|gif)$/i)
  ) {
    // Дозволяємо виконання наступних обробників (rewrites/statics)
    return;
  }

  // КРОК 2: Перевіряємо енвайронмент
  const isMainDomain = hostname === 'ways2spain.com' || hostname === 'www.ways2spain.com';

  if (isMainDomain) {
    return;
  }

  // Перевіряємо чи це preview або development
  const isPreviewDeployment =
    hostname.includes('git-') ||
    hostname.includes('preview') ||
    hostname.includes('develop') || // develop.ways2spain.com
    hostname.includes('staging') ||
    hostname.includes('dev');
  const isDevelopment = hostname.includes('localhost') || hostname.includes('127.0.0.1');

  // Якщо це не preview/development - пропускаємо (production)
  if (!isPreviewDeployment && !isDevelopment) {
    return;
  }

  // КРОК 3: Пропускаємо API routes
  if (pathname.startsWith('/api/')) {
    return;
  }

  // КРОК 4: Для всіх інших маршрутів - дозволяємо завантажити index.html
  // Перевірку авторизації та редірект робить React на клієнті
  //
  // НЕ робимо редірект в middleware, бо це блокує завантаження статичних файлів
  // Замість цього React сам перевірить авторизацію і зробить редірект на /login

  return;
}

/**
 * Конфігурація middleware
 * Перехоплює всі запити крім статичних файлів та головних маршрутів
 *
 * ВАЖЛИВО: Виключаємо `/` та `/login` щоб rewrites могли обробити їх
 * і перенаправити на /index.html для SPA роутингу
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - / (root) - виключено: не має символів після `/`
     * - /login (login page) - виключено в negative lookahead
     * - /admin (admin panel) - виключено в negative lookahead
     * - api routes
     * - assets (static files)
     * - _next (Next.js internal)
     * - files with extensions (static files)
     * - index.html (SPA entry point)
     *
     * ВАЖЛИВО: `/`, `/login` та `/admin` НЕ включені в matcher,
     * тому middleware не викликається для них
     * і rewrites можуть обробити їх правильно
     *
     * Pattern: `/...` де `...` - хоча б один символ, і не `/login`, не `/admin`, не `/api`, тощо
     */
    '/((?!login$|admin$|api|_next|assets|favicon\\.ico|index\\.html|.*\\.[a-z0-9]+$).+)',
  ],
};
