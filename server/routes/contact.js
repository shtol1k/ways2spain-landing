import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

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
  try {
    const { name, email, phone, package: packageValue, situation, message } = req.body;

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

