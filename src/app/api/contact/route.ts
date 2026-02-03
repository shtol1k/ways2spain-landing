/**
 * Next.js API Route Handler for Contact Form
 * Replaces Express backend at backend-express/api/contact.js
 * 
 * Integrations:
 * - Nodemailer (Gmail SMTP)
 * - Notion API
 * - Telegram alerts
 */

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Client } from '@notionhq/client';

// ============================================
// Helper Functions
// ============================================

/**
 * Clean Gmail error messages from technical details
 */
function cleanGmailError(errorMessage: string): string {
  return errorMessage
    .split('\n')[0]
    .replace(/For more information, go to/gi, '')
    .replace(/https:\/\/support\.google\.com\/mail\/\?p=\S+/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/-gsmtp/g, '')
    .replace(/\d{16}/g, '')
    .trim();
}

/**
 * Send error alert to Telegram
 */
async function sendTelegramAlert(
  error: any,
  formData: {
    name?: string;
    phone?: string;
    email?: string;
    package?: string;
    situation?: string;
    message?: string;
  }
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.log('⚠️ Telegram alerts not configured (missing TOKEN or CHAT_ID)');
    return;
  }

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
        parse_mode: 'HTML',
      }),
    });
    console.log('✅ Telegram alert sent successfully');
  } catch (tgError) {
    console.error('❌ Failed to send Telegram alert:', tgError);
  }
}

/**
 * Create entry in Notion database
 */
async function createNotionEntry(data: {
  name: string;
  email: string;
  phone: string;
  package: string;
  situation: string;
  message: string;
}) {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const databaseId = process.env.NOTION_DATABASE_ID?.trim();

  if (!databaseId) {
    throw new Error('NOTION_DATABASE_ID is not configured');
  }

  console.log('📝 Notion Configuration:', {
    hasApiKey: !!process.env.NOTION_API_KEY,
    databaseId: databaseId,
  });

  // Verify database access
  try {
    const databaseInfo = await notion.databases.retrieve({
      database_id: databaseId,
    });
    console.log('📊 Notion Database Info:', {
      id: databaseInfo.id,
      title: databaseInfo.title?.[0]?.plain_text || 'Untitled',
      properties: Object.keys(databaseInfo.properties || {}),
    });
  } catch (dbError: any) {
    console.error('❌ Cannot retrieve database info:', dbError);
    throw new Error(
      `Cannot access Notion database: ${dbError.message}. Check if integration has access to the database.`
    );
  }

  // Build properties for Notion
  const properties: Record<string, any> = {
    "Ім'я": {
      title: [
        {
          text: {
            content: data.name,
          },
        },
      ],
    },
    Email: {
      email: data.email,
    },
    Телефон: {
      rich_text: [
        {
          text: {
            content: data.phone,
          },
        },
      ],
    },
    Повідомлення: {
      rich_text: [
        {
          text: {
            content: data.message,
          },
        },
      ],
    },
    Дата: {
      date: {
        start: new Date().toISOString(),
      },
    },
  };

  // Optional fields
  if (data.package && data.package !== 'Не обрано') {
    properties['Послуга'] = {
      select: {
        name: data.package,
      },
    };
  }

  if (data.situation && data.situation !== 'Не вказано') {
    properties['Кейс'] = {
      select: {
        name: data.situation,
      },
    };
  }

  console.log('📝 Creating Notion entry with properties:', Object.keys(properties));

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties,
    });

    console.log('✅ Notion page created successfully:', {
      pageId: response.id,
      url: response.url,
    });

    return response;
  } catch (error: any) {
    console.error('❌ Notion API error:', {
      code: error.code,
      status: error.status,
      message: error.message,
      body: error.body ? JSON.stringify(error.body, null, 2) : 'No body',
    });

    if (error.code === 'object_not_found') {
      throw new Error(
        'Database not found. Check NOTION_DATABASE_ID. Make sure the integration has access to the database.'
      );
    } else if (error.code === 'validation_error') {
      throw new Error(
        `Property validation error: ${error.message}. Check if property names match your Notion database columns.`
      );
    } else if (error.status === 401) {
      throw new Error(
        'Unauthorized. Check NOTION_API_KEY. Make sure it\'s a valid integration token.'
      );
    }

    throw error;
  }
}

// ============================================
// POST Handler
// ============================================

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, status, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Відсутні обов\'язкові поля: ім\'я, email та повідомлення',
        },
        { status: 400 }
      );
    }

    // Check Gmail credentials
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('❌ Gmail credentials not configured');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service not configured. Please contact administrator.',
        },
        { status: 500 }
      );
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Build HTML email
    const htmlContent = `
      <h2>Нова заявка з сайту Ways 2 Spain</h2>
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Телефон:</strong> ${phone}</p>` : ''}
        ${status ? `<p><strong>Запит:</strong> ${status}</p>` : ''}
        <p><strong>Повідомлення:</strong></p>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Час отримання: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
        </p>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"Ways 2 Spain Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `Нова заявка від ${name} - Ways 2 Spain`,
      html: htmlContent,
      text: `
Нова заявка з сайту Ways 2 Spain

Ім'я: ${name}
Email: ${email}
${phone ? `Телефон: ${phone}` : ''}
${status ? `Запит: ${status}` : ''}

Повідомлення:
${message}

Час отримання: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
      `.trim(),
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);

    // Add Notion entry (if configured)
    let notionResult = null;
    if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID) {
      try {
        notionResult = await createNotionEntry({
          name,
          email,
          phone: phone || 'Не вказано',
          package: status || 'Не обрано',
          situation: 'Не вказано', // This field doesn't exist in new form
          message,
        });
        console.log('✅ Notion entry created:', notionResult.id);
      } catch (notionError: any) {
        // Don't block response if Notion fails
        console.error('⚠️ Notion error (non-blocking):', notionError);
      }
    } else {
      console.log('ℹ️ Notion integration not configured (missing API_KEY or DATABASE_ID)');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Повідомлення успішно надіслано!',
        messageId: info.messageId,
        notionEntryId: notionResult?.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Error sending email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    });

    // Parse request body for Telegram alert
    let formData = {};
    try {
      formData = await request.json();
    } catch (e) {
      // Ignore parsing errors
    }

    // Send Telegram alert
    await sendTelegramAlert(error, formData);

    // Detailed error messages
    let errorMessage = 'Помилка при відправці повідомлення. Спробуйте пізніше.';

    if (error.code === 'EAUTH') {
      errorMessage =
        'Помилка автентифікації Gmail. Перевірте налаштування SMTP.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Помилка підключення до Gmail сервера.';
    } else if (error.responseCode === 535) {
      errorMessage = 'Помилка автентифікації (535).';
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// ============================================
// OPTIONS Handler (for CORS preflight)
// ============================================

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
