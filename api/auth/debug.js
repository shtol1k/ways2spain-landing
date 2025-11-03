// Діагностичний endpoint для перевірки налаштування авторизації
// Використання: GET /api/auth/debug

export default async function handler(req, res) {
  // Встановлюємо CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Обробляємо preflight запити
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Дозволяємо тільки GET запити
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use GET.',
    });
  }

  try {
    const results = {
      timestamp: new Date().toISOString(),
      environment: {
        nodeEnv: process.env.NODE_ENV,
        vercelEnv: process.env.VERCEL_ENV,
        vercelUrl: process.env.VERCEL_URL,
        vercel: process.env.VERCEL,
      },
      authConfig: {
        hasUsername: !!process.env.AUTH_USERNAME,
        hasPassword: !!process.env.AUTH_PASSWORD,
        hasToken: !!process.env.AUTH_TOKEN,
        hasSecret: !!process.env.AUTH_SECRET,
        usernamePrefix: process.env.AUTH_USERNAME?.substring(0, 3) + '...' || 'missing',
        tokenPrefix: process.env.AUTH_TOKEN?.substring(0, 10) + '...' || 'missing',
      },
      cookies: {
        cookieHeader: req.headers.cookie || 'no cookies',
        authToken: req.cookies?.auth_token || 
          (req.headers.cookie?.split(';').find(c => c.trim().startsWith('auth_token='))?.split('=')[1]?.trim() || 'not found'),
      },
      request: {
        url: req.url,
        method: req.method,
        headers: {
          host: req.headers.host,
          origin: req.headers.origin,
          referer: req.headers.referer,
        },
      },
    };

    return res.status(200).json({
      success: true,
      debug: results,
    });
  } catch (error) {
    console.error('Error in debug handler:', error);
    return res.status(500).json({
      success: false,
      error: 'Помилка сервера',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
}

