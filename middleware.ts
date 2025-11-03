/**
 * Vercel Edge Middleware для перевірки авторизації
 * Працює тільки в preview та development енвайронментах
 * 
 * Примітка: Для Vercel Edge Functions використовується стандартний Web API
 */
export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const hostname = url.hostname;
  
  // Перевіряємо енвайронмент через hostname
  // Vercel production domains: твій-домен.com або твій-проєкт.vercel.app
  // Vercel preview domains: твій-проєкт-git-гілка-хеш.vercel.app
  // Vercel development: localhost
  
  // Якщо це production domain (не vercel.app або основний vercel.app домен)
  const isProduction = 
    !hostname.includes('vercel.app') || // кастомний домен
    hostname.match(/^[a-z0-9-]+\.vercel\.app$/); // основний домен проєкту (без git-)
  
  if (isProduction) {
    return new Response(null, { status: 200 });
  }

  // Перевіряємо чи це preview або development
  const isPreviewDeployment = hostname.includes('git-') || hostname.includes('preview');
  const isDevelopment = hostname.includes('localhost') || hostname.includes('127.0.0.1');
  
  // Якщо це не preview/development - пропускаємо
  if (!isPreviewDeployment && !isDevelopment) {
    return new Response(null, { status: 200 });
  }

  // Дозволяємо доступ до API routes та статичних файлів
  const { pathname } = url;
  
  // Пропускаємо API routes (вони мають свою логіку)
  if (pathname.startsWith('/api/')) {
    return new Response(null, { status: 200 });
  }

  // Пропускаємо статичні файли
  if (
    pathname.startsWith('/assets/') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return new Response(null, { status: 200 });
  }

  // Отримуємо cookies з запиту
  const cookies = request.headers.get('cookie') || '';
  const authToken = getCookie(cookies, 'auth_token');

  // Якщо користувач на сторінці логіну - пропускаємо
  if (pathname === '/login') {
    // Але якщо вже авторизований - редіректимо на головну
    // Для перевірки токену використаємо API endpoint
    if (authToken) {
      // Перевіримо токен через API (асинхронно, але для простоти пропускаємо)
      // У middleware ми не можемо легко викликати інші API, тому просто перевіряємо наявність
      // Детальна перевірка буде в API route
    }
    return new Response(null, { status: 200 });
  }

  // Якщо токену немає - редіректимо на логін
  // Детальна перевірка валідності токену відбувається в API route
  if (!authToken) {
    const loginUrl = new URL('/login', url);
    // Зберігаємо URL для редіректу після логіну
    if (pathname !== '/') {
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
     * - assets (static files)
     * - favicon.ico (favicon file)
     * - files with extensions
     * - API routes
     */
    '/((?!api|assets|favicon.ico|.*\\..*).*)',
  ],
};

