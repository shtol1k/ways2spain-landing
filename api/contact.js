// Vercel Serverless Function для обробки контактної форми
import nodemailer from 'nodemailer';
import { Client } from '@notionhq/client';

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

    // Додаємо запис в Notion (якщо налаштовано)
    let notionResult = null;
    if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID) {
      try {
        notionResult = await createNotionEntry({
          name,
          email,
          phone: phone || 'Не вказано',
          package: packageValue || 'Не обрано',
          situation: situation || 'Не вказано',
          message,
        });
        console.log('✅ Notion entry created:', notionResult.id);
      } catch (notionError) {
        // Не блокуємо відповідь, якщо Notion не спрацював
        console.error('⚠️ Notion error (non-blocking):', notionError);
        console.error('⚠️ Notion error details:', {
          code: notionError.code,
          status: notionError.status,
          message: notionError.message,
          body: notionError.body,
        });
      }
    } else {
      console.log('ℹ️ Notion integration not configured (missing API_KEY or DATABASE_ID)');
    }

    return res.status(200).json({
      success: true,
      message: 'Повідомлення успішно надіслано!',
      messageId: info.messageId,
      notionEntryId: notionResult?.id,
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

// Функція для створення запису в Notion
async function createNotionEntry(data) {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  // Очищаємо Database ID від зайвих символів (якщо вставлений повний URL)
  let databaseId = process.env.NOTION_DATABASE_ID.trim();
  
  // Якщо це URL, витягуємо тільки ID
  if (databaseId.includes('?')) {
    databaseId = databaseId.split('?')[0];
  }
  
  // Якщо це повний URL, витягуємо ID з кінця
  if (databaseId.includes('notion.so/')) {
    const parts = databaseId.split('/');
    databaseId = parts[parts.length - 1];
  }
  
  // Прибираємо дефіси для перевірки довжини
  const cleanId = databaseId.replace(/-/g, '');
  
  // Перевіряємо формат (має бути 32 hex символи)
  if (cleanId.length !== 32) {
    throw new Error(`Invalid Database ID format. Expected 32 hex characters, got ${cleanId.length}. Clean ID: ${cleanId}`);
  }
  
  // Конвертуємо в формат UUID з дефісами (8-4-4-4-12)
  // Notion API вимагає формат з дефісами
  if (!databaseId.includes('-')) {
    databaseId = `${cleanId.substring(0, 8)}-${cleanId.substring(8, 12)}-${cleanId.substring(12, 16)}-${cleanId.substring(16, 20)}-${cleanId.substring(20, 32)}`;
  }

  console.log('📝 Creating Notion entry in database:', databaseId);

  // Формуємо властивості для Notion
  // Примітка: назви властивостей мають відповідати назвам колонок у твоїй Notion базі
  const properties = {
    'Ім\'я': {
      title: [
        {
          text: {
            content: data.name,
          },
        },
      ],
    },
    'Email': {
      email: data.email,
    },
    'Телефон': {
      rich_text: [
        {
          text: {
            content: data.phone,
          },
        },
      ],
    },
    'Послуга': {
      select: {
        name: data.package,
      },
    },
    'Кейс': {
      select: {
        name: data.situation,
      },
    },
    'Повідомлення': {
      rich_text: [
        {
          text: {
            content: data.message,
          },
        },
      ],
    },
    'Дата': {
      date: {
        start: new Date().toISOString(),
      },
    },
  };

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: properties,
    });

    return response;
  } catch (error) {
    // Детальне логування помилок Notion
    console.error('❌ Notion API error:', {
      code: error.code,
      status: error.status,
      message: error.message,
      body: error.body,
      databaseId: databaseId,
    });
    throw error;
  }
}

