import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Функція для очищення повідомлень помилок від SMTP технічної інформації
function cleanGmailError(errorMessage) {
  return errorMessage
    .split('\n')[0] // беремо тільки перший рядок
    .replace(/For more information, go to/gi, '') // видаляємо "For more information"
    .replace(/https:\/\/support\.google\.com\/mail\/\?p=\S+/g, '') // видаляємо URL
    .replace(/\s{2,}/g, ' ') // видаляємо подвійні пробіли
    .replace(/-gsmtp/g, '') // видаляємо SMTP постфікси
    .replace(/\d{16}/g, '') // видаляємо довгі числові ID сесій
    .trim();
}

// Функція для відправки сповіщень в Telegram
async function sendTelegramAlert(error, formData = {}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.log('⚠️ Telegram alerts not configured (missing TOKEN or CHAT_ID)');
    return;
  }

  // Очищаємо повідомлення помилки
  const cleanErrorMessage = error.message ? cleanGmailError(error.message) : 'N/A';

  const message = `🚨 <b>Помилка форми email на сайті Ways 2 Spain</b>

<b>Помилка:</b> ${cleanErrorMessage}
<b>Тип:</b> ${error.code || 'N/A'}
<b>Команда:</b> ${error.command || 'N/A'}
<b>Код відповіді:</b> ${error.responseCode || 'N/A'}
<b>Відповідь сервера:</b> ${error.response || 'N/A'}
---
<b>Користувач:</b> ${formData.name || 'N/A'}
<b>Телефон:</b> ${formData.phone || 'Не вказано'}
<b>Email:</b> ${formData.email || 'N/A'}
<b>Послуга:</b> ${formData.package || 'Не обрано'}
<b>Кейс:</b> ${formData.situation || 'Не вказано'}
<b>Повідомлення:</b> ${formData.message || 'N/A'}
⏰ ${new Date().toLocaleString('uk-UA')}
📍 https://ways2spain.com`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });
    console.log('✅ Telegram alert sent successfully');
  } catch (tgError) {
    console.error('❌ Failed to send Telegram alert:', tgError);
  }
}

// Налаштування Nodemailer для Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true для 465, false для інших портів
    auth: {
      user: process.env.GMAIL_USER, // твій Gmail адрес
      pass: process.env.GMAIL_APP_PASSWORD, // пароль додатка (App Password)
    },
  });
};

// POST /api/contact - обробка контактної форми
router.post('/contact', async (req, res) => {
  const { name, email, phone, package: packageValue, situation, message } = req.body;

  try {

    // Валідація обов'язкових полів
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Відсутні обов\'язкові поля: ім\'я, email та повідомлення',
      });
    }

    // Створюємо транспортер
    const transporter = createTransporter();

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
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER, // Куди надсилати (за замовчуванням на себе)
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

    res.json({
      success: true,
      message: 'Повідомлення успішно надіслано!',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);

    // Відправляємо сповіщення в Telegram з даними форми
    await sendTelegramAlert(error, {
      name,
      email,
      phone,
      package: packageValue,
      situation,
      message
    });

    // Більш детальні повідомлення про помилки
    let errorMessage = 'Помилка при відправці повідомлення. Спробуйте пізніше.';

    if (error.code === 'EAUTH') {
      errorMessage = 'Помилка автентифікації Gmail. Перевірте налаштування SMTP.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Помилка підключення до Gmail сервера.';
    }

    res.status(500).json({
      success: false,
      error: errorMessage,
    });
  }
});

export { router as contactRoute };

