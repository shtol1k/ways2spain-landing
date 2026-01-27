// Vercel Serverless Function для обробки контактної форми
import nodemailer from 'nodemailer';
import { Client } from '@notionhq/client';

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

  // Використовуємо Database ID як є (очікуємо формат з дефісами або без)
  const databaseId = process.env.NOTION_DATABASE_ID.trim();
  
  console.log('📝 Notion Configuration:', {
    hasApiKey: !!process.env.NOTION_API_KEY,
    apiKeyPrefix: process.env.NOTION_API_KEY?.substring(0, 10) || 'missing',
    databaseId: databaseId,
    databaseIdLength: databaseId.length,
  });

  // Спочатку отримуємо структуру бази для діагностики
  try {
    const databaseInfo = await notion.databases.retrieve({ database_id: databaseId });
    console.log('📊 Notion Database Info:', {
      id: databaseInfo.id,
      title: databaseInfo.title?.[0]?.plain_text || 'Untitled',
      properties: Object.keys(databaseInfo.properties || {}),
    });
  } catch (dbError) {
    console.error('❌ Cannot retrieve database info:', {
      code: dbError.code,
      status: dbError.status,
      message: dbError.message,
    });
    throw new Error(`Cannot access Notion database: ${dbError.message}. Check if integration has access to the database.`);
  }

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
    'Послуга': data.package && data.package !== 'Не обрано' ? {
      select: {
        name: data.package,
      },
    } : undefined,
    'Кейс': data.situation && data.situation !== 'Не вказано' ? {
      select: {
        name: data.situation,
      },
    } : undefined,
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

  // Фільтруємо undefined властивості
  const cleanedProperties = Object.fromEntries(
    Object.entries(properties).filter(([_, value]) => value !== undefined)
  );

  console.log('📝 Properties to create:', {
    propertyNames: Object.keys(cleanedProperties),
    propertyCount: Object.keys(cleanedProperties).length,
    sampleData: {
      name: data.name,
      email: data.email,
      package: data.package,
      situation: data.situation,
    },
  });

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: cleanedProperties,
    });

    console.log('✅ Notion page created successfully:', {
      pageId: response.id,
      url: response.url,
      createdTime: response.created_time,
    });

    return response;
  } catch (error) {
    // Детальне логування помилок Notion
    console.error('❌ Notion API error:', {
      code: error.code,
      status: error.status,
      message: error.message,
      body: error.body ? JSON.stringify(error.body, null, 2) : 'No body',
      databaseId: databaseId,
      propertiesSent: Object.keys(cleanedProperties),
    });
    
    // Більш зрозумілі повідомлення про помилки
    if (error.code === 'object_not_found') {
      throw new Error(`Database not found. Check NOTION_DATABASE_ID. Make sure the integration has access to the database.`);
    } else if (error.code === 'validation_error') {
      throw new Error(`Property validation error: ${error.message}. Check if property names match your Notion database columns.`);
    } else if (error.status === 401) {
      throw new Error(`Unauthorized. Check NOTION_API_KEY. Make sure it's a valid integration token.`);
    }
    
    throw error;
  }
}

