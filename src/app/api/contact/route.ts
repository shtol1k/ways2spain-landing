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
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// ============================================
// Validation Schema
// ============================================

/**
 * Contact form validation schema using Zod
 * Provides strong type safety and comprehensive validation
 */
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Ім\'я має містити мінімум 2 символи')
    .max(100, 'Ім\'я занадто довге (максимум 100 символів)')
    .trim(),
  email: z
    .string()
    .email('Невірний формат email')
    .max(255, 'Email занадто довгий')
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .max(20, 'Телефон занадто довгий')
    .optional()
    .or(z.literal('')),
  status: z
    .string()
    .max(100, 'Статус занадто довгий')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Повідомлення має містити мінімум 10 символів')
    .max(5000, 'Повідомлення занадто довге (максимум 5000 символів)')
    .trim(),
});

// TypeScript type derived from Zod schema
type ContactFormData = z.infer<typeof contactFormSchema>;

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
  const recentTimestamps = timestamps.filter(t => now - t < 60000);
  
  if (recentTimestamps.length >= 5) {
    return false;
  }
  
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
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }
  
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
  error: Error,
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
    return;
  }

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
  } catch (tgError) {
    // Telegram alerts are non-critical - fail silently
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

  const properties: Record<string, {
    title?: Array<{ text: { content: string } }>;
    email?: string;
    rich_text?: Array<{ text: { content: string } }>;
    date?: { start: string };
    select?: { name: string };
  }> = {
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

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties,
    });

    return response;
  } catch (error) {
    const err = error as { code?: string; status?: number; message: string };
    
    if (err.code === 'object_not_found') {
      throw new Error(
        'Database not found. Check NOTION_DATABASE_ID. Make sure the integration has access to the database.'
      );
    } else if (err.code === 'validation_error') {
      throw new Error(
        `Property validation error: ${err.message}. Check if property names match your Notion database columns.`
      );
    } else if (err.status === 401) {
      throw new Error(
        'Unauthorized. Check NOTION_API_KEY. Make sure it\'s a valid integration token.'
      );
    }

    throw error;
  }
}

// ============================================
// Email Generation
// ============================================

/**
 * Generate HTML email content
 */
function generateHtmlEmail(data: ContactFormData): string {
  const { name, email, phone, status, message } = data;
  
  return `
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
}

/**
 * Generate plain text email content
 */
function generateTextEmail(data: ContactFormData): string {
  const { name, email, phone, status, message } = data;
  
  return `
Нова заявка з сайту Ways 2 Spain

Ім'я: ${name}
Email: ${email}
${phone ? `Телефон: ${phone}` : ''}
${status ? `Запит: ${status}` : ''}

Повідомлення:
${message}

Час отримання: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
  `.trim();
}

/**
 * Send contact form email via Resend
 */
async function sendContactEmail(data: ContactFormData): Promise<string | undefined> {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Email service not configured. Please contact administrator.');
  }

  const { name, email } = data;

  const { data: emailData, error: emailError } = await resend.emails.send({
    from: `Ways 2 Spain Website <${process.env.FROM_EMAIL || 'no-reply@ways2spain.com'}>`,
    to: [process.env.RECIPIENT_EMAIL || 'info@ways2spain.com'],
    replyTo: email,
    subject: `Нова заявка від ${name} - Ways 2 Spain`,
    html: generateHtmlEmail(data),
    text: generateTextEmail(data),
  });

  if (emailError) {
    throw new Error(`Resend Error: ${emailError.message}`);
  }

  return emailData?.id;
}

/**
 * Save form data to Notion (optional, non-critical)
 */
async function saveToNotion(data: ContactFormData): Promise<string | null> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    return null;
  }

  try {
    const result = await createNotionEntry({
      name: data.name,
      email: data.email,
      phone: data.phone || 'Не вказано',
      package: data.status || 'Не обрано',
      situation: 'Не вказано',
      message: data.message,
    });
    
    return result?.id || null;
  } catch (notionError) {
    // Notion is non-critical - continue on error
    return null;
  }
}

/**
 * Validate request body against schema
 */
function validateContactForm(body: unknown): ContactFormData {
  const validationResult = contactFormSchema.safeParse(body);
  
  if (!validationResult.success) {
    const errors = validationResult.error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    
    const error = new Error('Validation failed') as Error & { 
      statusCode: number; 
      details: typeof errors;
    };
    error.statusCode = 400;
    error.details = errors;
    throw error;
  }

  return validationResult.data;
}

// ============================================
// POST Handler
// ============================================

export async function POST(request: Request) {
  let body: Partial<ContactFormData> = {};

  try {
    // Rate limiting check
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

    // Parse and validate request body
    body = await request.json();
    const validatedData = validateContactForm(body);

    // Send email (critical operation)
    const messageId = await sendContactEmail(validatedData);

    // Save to Notion (optional operation)
    const notionEntryId = await saveToNotion(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Повідомлення успішно надіслано!',
        messageId,
        notionEntryId,
      },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error & { statusCode?: number; details?: unknown };
    
    // Handle validation errors
    if (err.statusCode === 400) {
      return NextResponse.json(
        {
          success: false,
          error: 'Помилка валідації даних',
          details: err.details,
        },
        { status: 400 }
      );
    }

    // Log and alert for unexpected errors
    console.error('Contact form error:', err);
    await sendTelegramAlert(err, body);

    return NextResponse.json(
      {
        success: false,
        error: 'Помилка при відправці повідомлення. Спробуйте пізніше.',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined,
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
