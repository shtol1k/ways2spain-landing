// Vercel Serverless Function для виходу з системи

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
    // Видаляємо cookie, встановлюючи його з минулим терміном дії
    res.setHeader(
      'Set-Cookie',
      'auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Lax'
    );

    return res.status(200).json({
      success: true,
      message: 'Вихід успішний',
    });
  } catch (error) {
    console.error('Error in logout handler:', error);
    return res.status(500).json({
      success: false,
      error: 'Помилка сервера. Спробуйте пізніше.',
    });
  }
}

