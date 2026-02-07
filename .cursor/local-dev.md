# Local Development Guide

Purpose: Guide for starting the Next.js + Payload CMS development server for ways2spain-landing.

## 1. Environment Setup

Create `.env.local` file with required variables:

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/ways2spain

# Payload CMS
PAYLOAD_SECRET=your-secret-key-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Optional: Cloudflare R2 (for media storage)
R2_ACCOUNT_ID=your-account-id
R2_ACCESS_KEY_ID=your-access-key
R2_SECRET_ACCESS_KEY=your-secret-key
R2_BUCKET_NAME=ways2spain-media
R2_PUBLIC_URL=https://your-r2-domain.r2.dev

# Optional: Contact form integrations
RESEND_API_KEY=your-resend-api-key
FROM_EMAIL=no-reply@ways2spain.com
RECIPIENT_EMAIL=info@ways2spain.com
NOTION_API_KEY=your-notion-token
NOTION_DATABASE_ID=your-database-id
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

## 2. Database Setup

Before first run, initialize the database:

```bash
npm run db:init
```

This will:
- Create database schema
- Run migrations
- Set up initial data

## 3. Start Development Server

```bash
npm run dev
```

This starts Next.js development server at:
- **Frontend:** http://localhost:3000
- **Payload Admin:** http://localhost:3000/admin
- **API Routes:** http://localhost:3000/api/*

## 4. Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run database migrations
npm run migrate

# Test database connection
npm run db:test

# Lint code
npm run lint
```

## 5. Project Structure

```
ways2spain-landing/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (payload)/    # Payload CMS admin & API
│   │   ├── (site)/       # Public website pages
│   │   └── api/          # Custom API routes
│   ├── collections/      # Payload collections
│   ├── components/       # React components
│   └── lib/             # Utilities
├── public/              # Static assets
└── payload.config.ts    # Payload configuration
```

## 6. Troubleshooting

### Port Already in Use
If port 3000 is occupied:
```bash
lsof -i :3000
kill <PID>
```

Or use a different port:
```bash
PORT=3001 npm run dev
```

### Database Connection Issues
Check database is running and credentials are correct:
```bash
npm run db:test
```

### Migration Errors
If migrations fail, you can refresh them:
```bash
npm run migrate:refresh
```

### Build Errors
Clear Next.js cache and rebuild:
```bash
rm -rf .next
npm run build
```

## 7. Development Workflow

1. **Make changes** to code
2. **Hot reload** updates automatically in browser
3. **Payload changes** require revalidation:
   - Posts: Auto-revalidate on save
   - Guides: Auto-revalidate on save
   - Other: Manual browser refresh

## 8. Testing Contact Form

Contact form requires these services configured:
- **Resend** (email) - Required
- **Notion** (CRM) - Optional
- **Telegram** (alerts) - Optional

Without configuration, form will show error. See `.env.local` for required variables.

