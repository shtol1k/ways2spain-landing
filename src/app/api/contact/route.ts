/**
 * Next.js API Route Handler for Contact Form
 * Replaces Express backend at backend-express/api/contact.js
 * 
 * Integrations:
 * - Resend (Email Service)
 * - Notion API
 * - Telegram alerts
 */

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Client } from '@notionhq/client';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ============================================
// Rate Limiting
// ============================================

/**
 * Simple IP-based rate limiter
 * Limits: 5 requests per IP per 60 seconds
 * 
 * Note: This is a basic implementation suitable for low-traffic sites.
 * For production sites with high traffic, consider migrating to @upstash/ratelimit
 * which provides persistent rate limiting across serverless invocations.
 */
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Remove timestamps older than 60 seconds
  const recentTimestamps = timestamps.filter(t => now - t < 60000);
  
  // Check if rate limit exceeded (5 requests per minute)
  if (recentTimestamps.length >= 5) {
    return false;
  }
  
  // Add current timestamp
  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  
  // Clean up old entries periodically (prevent memory leak)
  if (rateLimitMap.size > 1000) {
    const cutoff = now - 120000; // 2 minutes
    for (const [key, values] of rateLimitMap.entries()) {
      if (values.every(v => v < cutoff)) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  return true;
}

function getClientIp(request: Request): string {
  // Try to get real IP from headers (Vercel sets x-forwarded-for)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }
  
  // Fallback to a default (should rarely happen on Vercel)
  return 'unknown';
}

// ============================================
// Helper Functions
// ============================================

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
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

  // Escape user data for HTML parse mode to prevent injection
  const message = `🚨 <b>Помилка форми email на сайті Ways 2 Spain</b>

<b>Помилка:</b> ${escapeHtml(error.message || 'Unknown error')}
<b>Тип:</b> ${escapeHtml(error.name || 'Error')}
---
<b>Користувач:</b> ${escapeHtml(formData.name || 'N/A')}
<b>Телефон:</b> ${escapeHtml(formData.phone || 'Не вказано')}
<b>Email:</b> ${escapeHtml(formData.email || 'N/A')}
<b>Послуга:</b> ${escapeHtml(formData.package || 'Не обрано')}
<b>Кейс:</b> ${escapeHtml(formData.situation || 'Не вказано')}
<b>Повідомлення:</b> ${escapeHtml(formData.message || 'N/A')}
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
    // Optimization: Skip full database retrieval in production to save API calls
    // unless we need to debug schema
    /*
    const databaseInfo = await notion.databases.retrieve({
      database_id: databaseId,
    });
    */
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
  let body: any = {};

  try {
    // Check rate limit first (before processing request body)
    const clientIp = getClientIp(request);
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Забагато запитів. Будь ласка, спробуйте через хвилину.',
        },
        { 
          status: 429,
          headers: {
            'Retry-After': '60',
          }
        }
      );
    }

    body = await request.json();
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

    // Check Resend API Key
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not configured');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service not configured. Please contact administrator.',
        },
        { status: 500 }
      );
    }

    // Build HTML email with escaped user input to prevent XSS
    const htmlContent = `
      <h2>Нова заявка з сайту Ways 2 Spain</h2>
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p><strong>Ім'я:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${status ? `<p><strong>Запит:</strong> ${escapeHtml(status)}</p>` : ''}
        <p><strong>Повідомлення:</strong></p>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Час отримання: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
        </p>
      </div>
    `;

    // Send email via Resend
    // Important: 'from' address must be the verified domain
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: `Ways 2 Spain Website <${process.env.FROM_EMAIL || 'no-reply@ways2spain.com'}>`,
      to: [process.env.RECIPIENT_EMAIL || 'info@ways2spain.com'], // Where the contact form submission goes
      replyTo: email, // Reply directly to the user
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
    });

    if (emailError) {
      console.error('❌ Resend API Error:', emailError);
      throw new Error(`Resend Error: ${emailError.message}`);
    }

    console.log('✅ Email sent successfully:', emailData?.id);

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
        messageId: emailData?.id,
        notionEntryId: notionResult?.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Error processing contact form:', error);

    // Send Telegram alert
    await sendTelegramAlert(error, body);

    return NextResponse.json(
      {
        success: false,
        error: 'Помилка при відправці повідомлення. Спробуйте пізніше.',
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
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_SERVER_URL || 'https://ways2spain.com',
    'https://ways2spain.com',
    'https://www.ways2spain.com',
    'https://dev.ways2spain.com', // Pre-production testing environment
  ];

  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigins[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400', // Cache preflight for 24 hours
    },
  });
}
