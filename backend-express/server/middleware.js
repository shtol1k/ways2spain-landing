import crypto from 'crypto';

/**
 * Генерує токен авторизації використовуючи SHA-256
 */
function generateAuthToken(username, password, secret) {
  const data = `${username}:${password}:${secret}`;
  const hash = crypto.createHash('sha256').update(data).digest('base64');
  // Робимо URL-safe
  return hash.replace(/[+/=]/g, (char) => {
    return { '+': '-', '/': '_', '=': '' }[char] || '';
  });
}

/**
 * Middleware для перевірки чи потрібна авторизація для поточного середовища
 */
export function checkAuthRequired(req, res, next) {
  // В production не потрібна авторизація
  if (process.env.NODE_ENV === 'production') {
    return next();
  }

  // Перевіряємо hostname
  const hostname = req.headers.host;
  
  // Production domains - не потрібна авторизація
  const isMainDomain = hostname === 'ways2spain.com' || hostname === 'www.ways2spain.com';
  if (isMainDomain) {
    return next();
  }
  
  // Preview/development domains - потрібна авторизація
  const isPreviewDeployment = 
    hostname.includes('git-') || 
    hostname.includes('preview') ||
    hostname.includes('develop') ||
    hostname.includes('staging') ||
    hostname.includes('dev');
  const isDevelopment = hostname.includes('localhost') || hostname.includes('127.0.0.1');
  
  if (isPreviewDeployment || isDevelopment) {
    // Перевіряємо чи це запит до API
    if (req.path.startsWith('/api/')) {
      console.log(`[Auth] API request: ${req.method} ${req.path}`);
      return next();
    }
    
    // Перевіряємо чи це запит до статичних файлів
    if (req.path.startsWith('/assets/') || req.path.includes('.')) {
      return next();
    }
    
    // Перевіряємо чи це запит до сторінки логіну
    if (req.path.startsWith('/login')) {
      return next();
    }
    
    // Дозволяємо запити до /health без авторизації
    if (req.path === '/health') {
      console.log(`[Auth] Health check request - no auth required`);
      return next();
    }
    
    // Для всіх інших запитів перевіряємо авторизацію
    console.log(`[Auth] Protected request: ${req.method} ${req.path}`);
    return checkAuth(req, res, next);
  }

  return next();
}

/**
 * Middleware для перевірки авторизації
 */
function checkAuth(req, res, next) {
  // Отримуємо токен з cookies
  let authToken = null;
  
  if (req.cookies?.auth_token) {
    authToken = req.cookies.auth_token;
  } else if (req.headers.cookie) {
    const cookies = req.headers.cookie.split(';');
    const cookieMatch = cookies.find((c) => c.trim().startsWith('auth_token='));
    if (cookieMatch) {
      authToken = cookieMatch.split('=')[1]?.trim();
    }
  }

  console.log(`[Auth] Token found: ${!!authToken}`);

  if (!authToken) {
    // Повертаємо HTML сторінку з повідомленням
    console.log(`[Auth] No token, returning auth required page`);
    return res.status(401).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Авторизація потрібна</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            }
            .container {
              text-align: center;
              background: white;
              padding: 2rem;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              max-width: 500px;
            }
            .icon {
              font-size: 3rem;
              margin-bottom: 1rem;
            }
            h1 {
              margin: 0 0 1rem 0;
              color: #333;
            }
            p {
              margin: 0 0 1.5rem 0;
              color: #666;
            }
            a {
              color: #007bff;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="icon">🔒</div>
            <h1>Авторизація потрібна</h1>
            <p>Ця сторінка доступна тільки в preview та development середовищах.</p>
            <p><a href="/login">Увійти</a></p>
          </div>
        </body>
      </html>
    `);
  }

  // Отримуємо credentials з environment variables
  const AUTH_USERNAME = process.env.AUTH_USERNAME;
  const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
  const AUTH_TOKEN = process.env.AUTH_TOKEN;
  const AUTH_SECRET = process.env.AUTH_SECRET || 'default-secret-change-in-production';

  if (!AUTH_USERNAME || !AUTH_PASSWORD) {
    console.log(`[Auth] No credentials configured`);
    return res.status(401).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Сервер не налаштовано</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            }
            .container {
              text-align: center;
              background: white;
              padding: 2rem;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              max-width: 500px;
            }
            .icon {
              font-size: 3rem;
              margin-bottom: 1rem;
            }
            h1 {
              margin: 0 0 1rem 0;
              color: #333;
            }
            p {
              margin: 0 0 1.5rem 0;
              color: #666;
            }
            code {
              background: #f4f4f4;
              padding: 0.2rem 0.4rem;
              border-radius: 4px;
              font-family: monospace;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="icon">⚙️</div>
            <h1>Сервер не налаштовано</h1>
            <p>Будь ласка, налаштуйте змінні оточення:</p>
            <p><code>AUTH_USERNAME</code></p>
            <p><code>AUTH_PASSWORD</code></p>
            <p>або <code>AUTH_TOKEN</code></p>
          </div>
        </body>
      </html>
    `);
  }

  // Генеруємо або використовуємо очікуваний токен
  const expectedToken = AUTH_TOKEN || generateAuthToken(AUTH_USERNAME, AUTH_PASSWORD, AUTH_SECRET);

  // Перевіряємо токен
  const isValid = authToken === expectedToken;

  console.log(`[Auth] Token validation: ${isValid}`);

  if (!isValid) {
    console.log(`[Auth] Invalid token, returning auth required page`);
    return res.status(401).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Невірний токен</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            }
            .container {
              text-align: center;
              background: white;
              padding: 2rem;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              max-width: 500px;
            }
            .icon {
              font-size: 3rem;
              margin-bottom: 1rem;
            }
            h1 {
              margin: 0 0 1rem 0;
              color: #333;
            }
            p {
              margin: 0 0 1.5rem 0;
              color: #666;
            }
            a {
              color: #007bff;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="icon">🔑</div>
            <h1>Невірний токен</h1>
            <p>Токен авторизації невірний або прострочив.</p>
            <p><a href="/login">Увійти знову</a></p>
          </div>
        </body>
      </html>
    `);
  }

  // Якщо все добре - продовжуємо
  console.log(`[Auth] Authentication successful`);
  next();
}
