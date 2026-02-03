# 🚀 Vercel Deployment - Environment Variables

## Overview

This project is configured to work with Vercel automatically, with minimal environment variable configuration needed.

## Auto-Configured Variables

The following are **automatically handled** by the application:

| Variable | How it's handled |
|----------|------------------|
| `VERCEL_URL` | Auto-set by Vercel on each deployment |
| `serverURL` | Derived from `VERCEL_URL` or defaults to `localhost:3000` |
| `CORS/CSRF` | Pre-configured for `ways2spain.com`, `dev.ways2spain.com`, and Vercel preview URLs |

## Required Environment Variables

Add these in **Vercel Dashboard → Settings → Environment Variables**:

```bash
# ========================================
# DATABASE (Required)
# ========================================
DATABASE_URL=postgresql://postgres.YOUR_PROJECT:PASSWORD@aws-0-YOUR_REGION.pooler.supabase.com:6543/postgres

# ========================================
# PAYLOAD CMS (Required)
# ========================================
PAYLOAD_SECRET=generate-a-secure-random-string-min-32-characters

# ========================================
# MEDIA STORAGE (Required for production)
# ========================================
MEDIA_STORAGE=r2
R2_ACCOUNT_ID=your_account_id
R2_REGION=eu
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
R2_BUCKET_NAME=w2s-media
R2_PUBLIC_URL=https://your-bucket.r2.dev

# ========================================
# CONTACT FORM (Optional)
# ========================================
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

## Domains Configuration

The application is pre-configured to work with:

- 🌐 **Production**: `https://ways2spain.com`
- 🔧 **Development**: `https://dev.ways2spain.com`
- 🔍 **Preview**: Auto-generated Vercel URLs (`*.vercel.app`)
- 💻 **Local**: `http://localhost:3000`

## What You DON'T Need to Configure

These variables are **NOT needed** anymore:

- ~~`PAYLOAD_PUBLIC_SERVER_URL`~~ - auto-derived from `VERCEL_URL`
- ~~`NEXT_PUBLIC_SERVER_URL`~~ - uses relative paths now

## Troubleshooting

### Testimonials not loading

1. Check browser console for errors
2. Verify `DATABASE_URL` is correct in Vercel
3. Test API directly: `curl https://your-domain/api/testimonials`

### Images not loading

1. Verify R2 environment variables are set
2. Check if `MEDIA_STORAGE=r2` is set for production
3. Verify R2 bucket is public

### CORS errors

If you're using a custom domain not listed above, add it to `payload.config.ts`:

```typescript
cors: [
  'https://ways2spain.com',
  'https://dev.ways2spain.com',
  'https://your-new-domain.com', // Add your domain here
  // ...
],
```

---

**Last Updated**: 2026-02-02
**Status**: Simplified configuration - no URL variables needed
