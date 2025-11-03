// Vercel Serverless Function для перевірки валідності токену
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
    // Отримуємо токен з cookies
    let authToken = null;
    
    // Спробуємо отримати з req.cookies (якщо використовується cookie-parser)
    if (req.cookies?.auth_token) {
      authToken = req.cookies.auth_token;
    } else if (req.headers.cookie) {
      // Парсимо вручну
      const cookies = req.headers.cookie.split(';');
      const cookieMatch = cookies.find((c) => c.trim().startsWith('auth_token='));
      if (cookieMatch) {
        authToken = cookieMatch.split('=')[1]?.trim();
      }
    }

    if (!authToken) {
      return res.status(401).json({
        success: false,
        authenticated: false,
      });
    }

    // Отримуємо credentials з environment variables
    const AUTH_USERNAME = process.env.AUTH_USERNAME;
    const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
    const AUTH_TOKEN = process.env.AUTH_TOKEN; // Фіксований токен (опціонально)
    const AUTH_SECRET = process.env.AUTH_SECRET || 'default-secret-change-in-production';

    if (!AUTH_USERNAME || !AUTH_PASSWORD) {
      return res.status(401).json({
        success: false,
        authenticated: false,
      });
    }

    // Генеруємо або використовуємо очікуваний токен
    // Якщо AUTH_TOKEN встановлений в ENV - використовуємо його, інакше генеруємо
    const expectedToken = AUTH_TOKEN || generateAuthToken(AUTH_USERNAME, AUTH_PASSWORD, AUTH_SECRET);

    // Перевіряємо токен
    const isValid = authToken === expectedToken;

    return res.status(isValid ? 200 : 401).json({
      success: isValid,
      authenticated: isValid,
    });
  } catch (error) {
    console.error('Error in verify handler:', error);
    return res.status(500).json({
      success: false,
      authenticated: false,
      error: 'Помилка сервера',
    });
  }
}

