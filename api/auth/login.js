// Vercel Serverless Function для обробки логіну
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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Обробляємо preflight запити
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Дозволяємо тільки POST запити
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.',
    });
  }

  try {
    const { username, password, rememberMe } = req.body;

    // Валідація вхідних даних
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: 'Username та password обов\'язкові',
      });
    }

    // Отримуємо credentials з environment variables
    const AUTH_USERNAME = process.env.AUTH_USERNAME;
    const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
    const AUTH_TOKEN = process.env.AUTH_TOKEN; // Фіксований токен (опціонально)
    const AUTH_SECRET = process.env.AUTH_SECRET || 'default-secret-change-in-production';

    // Перевіряємо чи налаштовані credentials
    if (!AUTH_USERNAME || !AUTH_PASSWORD) {
      console.error('❌ Auth credentials not configured');
      return res.status(500).json({
        success: false,
        error: 'Auth service not configured. Please contact administrator.',
      });
    }

    // Перевіряємо credentials
    if (username !== AUTH_USERNAME || password !== AUTH_PASSWORD) {
      return res.status(401).json({
        success: false,
        error: 'Невірний логін або пароль',
      });
    }

    // Генеруємо або використовуємо токен
    // Якщо AUTH_TOKEN встановлений в ENV - використовуємо його, інакше генеруємо
    const authToken = AUTH_TOKEN || generateAuthToken(username, password, AUTH_SECRET);

    // Визначаємо термін дії cookie
    // "Запам'ятати мене" → 30 днів, інакше → сесія (без expires)
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    };

    if (rememberMe) {
      // 30 днів
      cookieOptions.maxAge = 30 * 24 * 60 * 60; // 30 днів у секундах
    }
    // Якщо rememberMe = false, не встановлюємо maxAge - cookie буде сесійним

    // Формуємо cookie string
    const cookieParts = [`auth_token=${authToken}`];
    
    if (cookieOptions.maxAge) {
      cookieParts.push(`Max-Age=${cookieOptions.maxAge}`);
    }
    
    // HttpOnly, Secure - це флаги без значень
    if (cookieOptions.httpOnly) {
      cookieParts.push('HttpOnly');
    }
    if (cookieOptions.secure) {
      cookieParts.push('Secure');
    }
    
    cookieParts.push(`SameSite=${cookieOptions.sameSite}`);
    cookieParts.push(`Path=${cookieOptions.path}`);
    
    // Встановлюємо cookie
    res.setHeader('Set-Cookie', cookieParts.join('; '));

    return res.status(200).json({
      success: true,
      message: 'Авторизація успішна',
    });
  } catch (error) {
    console.error('Error in login handler:', error);
    return res.status(500).json({
      success: false,
      error: 'Помилка сервера. Спробуйте пізніше.',
    });
  }
}

