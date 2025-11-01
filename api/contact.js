// Vercel Serverless Function для обробки контактної форми
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Встановлюємо CORS headers для Vercel
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
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
    const { name, email, phone, package: packageValue, situation, message } = req.body;

    // Валідація обов'язкових полів
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Відсутні обов\'язкові поля: ім\'я, email та повідомлення',
      });
    }

    // Перевірка наявності змінних оточення
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('❌ Gmail credentials not configured');
      return res.status(500).json({
        success: false,
        error: 'Email service not configured. Please contact administrator.',
      });
    }

    // Створюємо транспортер для Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true для 465, false для інших портів
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Формуємо HTML лист
    const htmlContent = `
      <h2>Нова заявка з сайту Ways 2 Spain</h2>
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Телефон:</strong> ${phone}</p>` : ''}
        ${packageValue ? `<p><strong>Послуга:</strong> ${packageValue}</p>` : ''}
        ${situation ? `<p><strong>Кейс:</strong> ${situation}</p>` : ''}
        <p><strong>Повідомлення:</strong></p>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Час отримання: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
        </p>
      </div>
    `;

    // Налаштування email
    const mailOptions = {
      from: `"Ways 2 Spain Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
      replyTo: email, // Щоб можна було відповісти напряму клієнту
      subject: `Нова заявка від ${name} - Ways 2 Spain`,
      html: htmlContent,
      text: `
Нова заявка з сайту Ways 2 Spain

Ім'я: ${name}
Email: ${email}
${phone ? `Телефон: ${phone}` : ''}
${packageValue ? `Послуга: ${packageValue}` : ''}
${situation ? `Кейс: ${situation}` : ''}

Повідомлення:
${message}

Час отримання: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
      `.trim(),
    };

    // Відправляємо email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Повідомлення успішно надіслано!',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    });

    // Більш детальні повідомлення про помилки
    let errorMessage = 'Помилка при відправці повідомлення. Спробуйте пізніше.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Помилка автентифікації Gmail. Перевірте налаштування SMTP. Переконайся, що використовуєш App Password (пароль додатка), а не звичайний пароль від Google. Інструкція: перевір GMAIL_SETUP.md';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Помилка підключення до Gmail сервера.';
    } else if (error.responseCode === 535) {
      errorMessage = 'Помилка автентифікації (535). Використовуй App Password, а не звичайний пароль!';
    }

    return res.status(500).json({
      success: false,
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

