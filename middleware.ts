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
  
  // КРОК 1: Пропускаємо статичні файли та index.html
  // Це має бути ДО будь-яких інших перевірок
  if (
    pathname === '/index.html' ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_next/') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff|woff2|ttf|eot|json|webp|gif)$/i)
  ) {
    return new Response(null, { status: 200 });
  }
  
  // КРОК 2: Перевіряємо енвайронмент
  const isMainDomain = hostname === 'ways2spain.com' || hostname === 'www.ways2spain.com';
  
  if (isMainDomain) {
    return new Response(null, { status: 200 });
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
    return new Response(null, { status: 200 });
  }

  // КРОК 3: Пропускаємо API routes
  if (pathname.startsWith('/api/')) {
    return new Response(null, { status: 200 });
  }

  // КРОК 4: Для всіх інших маршрутів - дозволяємо завантажити index.html
  // Перевірку авторизації та редірект робить React на клієнті
  // (через Layout.tsx та use-auth hook)
  // 
  // НЕ робимо редірект в middleware, бо це блокує завантаження статичних файлів
  // Замість цього React сам перевірить авторизацію і зробить редірект на /login
  
  return new Response(null, { status: 200 });
}

/**
 * Конфігурація middleware
 * Перехоплює всі запити крім статичних файлів
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - assets (static files)
     * - _next (Next.js internal, якщо використовується)
     * - files with extensions (static files)
     * - index.html (SPA entry point)
     */
    '/((?!api|_next|assets|favicon\\.ico|index\\.html|.*\\.[a-z0-9]+$).*)',
  ],
};

