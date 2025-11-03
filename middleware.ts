/**
 * Vercel Edge Middleware для перевірки авторизації
 * Працює тільки в preview та development енвайронментах
 * 
 * Примітка: Для Vercel Edge Functions використовується стандартний Web API
 */
export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const hostname = url.hostname;
  const pathname = url.pathname;
  
  // ВАЖЛИВО: Спочатку пропускаємо статичні файли та index.html
  // Це має бути ДО перевірки енвайронменту
  if (
    pathname === '/index.html' ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_next/') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff|woff2|ttf|eot|json|webp|gif)$/i)
  ) {
    return new Response(null, { status: 200 });
  }
  
  // Перевіряємо енвайронмент через hostname та VERCEL_ENV (якщо доступний)
  // Vercel production domains: твій-домен.com або твій-проєкт.vercel.app
  // Vercel preview domains: твій-проєкт-git-гілка-хеш.vercel.app
  // Кастомні preview domains: develop.ways2spain.com (треба перевіряти через VERCEL_ENV)
  // Vercel development: localhost
  
  // Якщо це production domain (основний домен без preview)
  // Перевіряємо через hostname та VERCEL_ENV (якщо доступний)
  const isMainDomain = hostname === 'ways2spain.com' || hostname === 'www.ways2spain.com';
  
  if (isMainDomain) {
    return new Response(null, { status: 200 });
  }

  // Перевіряємо чи це preview або development
  // Vercel автоматично встановлює VERCEL_ENV для preview deployments
  // Але в Edge Middleware ми не маємо прямого доступу до env, тому перевіряємо через hostname
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

  // Пропускаємо API routes (вони мають свою логіку)
  if (pathname.startsWith('/api/')) {
    return new Response(null, { status: 200 });
  }

  // Отримуємо cookies з запиту
  const cookies = request.headers.get('cookie') || '';
  const authToken = getCookie(cookies, 'auth_token');

  // Якщо користувач на сторінці логіну - пропускаємо (дозволяємо завантажити SPA)
  if (pathname === '/login' || pathname.startsWith('/login')) {
    // Але якщо вже авторизований - редіректимо на головну
    // Для перевірки токену використаємо API endpoint
    if (authToken) {
      // Перевіримо токен через API (асинхронно, але для простоти пропускаємо)
      // У middleware ми не можемо легко викликати інші API, тому просто перевіряємо наявність
      // Детальна перевірка буде в API route
    }
    // Важливо: пропускаємо щоб дозволити завантажити index.html та JS файли
    return new Response(null, { status: 200 });
  }

  // Якщо токену немає - редіректимо на логін
  // Детальна перевірка валідності токену відбувається в API route
  if (!authToken) {
    const loginUrl = new URL('/login', url);
    // Зберігаємо URL для редіректу після логіну
    if (pathname !== '/' && pathname !== '/index.html') {
      loginUrl.searchParams.set('redirect', pathname);
    }
    return Response.redirect(loginUrl);
  }

  // Токен є - пропускаємо запит
  // Детальна перевірка буде в клієнтському коді через API /api/auth/verify
  return new Response(null, { status: 200 });
}

/**
 * Допоміжна функція для отримання cookie
 */
function getCookie(cookieString: string, name: string): string | null {
  if (!cookieString) return null;
  const match = cookieString.match(new RegExp('(^|;\\s*)' + name + '=([^;]+)'));
  return match ? match[2].trim() : null;
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
    '/((?!api|_next|assets|favicon.ico|index.html|.*\\..*).*)',
  ],
};

