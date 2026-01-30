# Strapi CMS Deployment Guide

## 📋 Overview

This Strapi project uses a local PostgreSQL for development and Supabase PostgreSQL for production.

## 🏗️ Architecture

```
Local Development              Production (Render)
┌─────────────────┐           ┌──────────────────────┐
│ Strapi Dev      │           │ Strapi Production    │
│ localhost:1337  │           │ (your-app.onrender.com)│
└────────┬────────┘           └──────────┬───────────┘
         │                               │
    Local PostgreSQL              Supabase PostgreSQL
    localhost:5432                (production database)
```

## 🚀 Local Development

### Prerequisites

- PostgreSQL 15 installed via Homebrew (already running)
- Node.js >= 20.0.0

### Setup

1. **Database is already configured:**
   - Database: `strapi`
   - User: `atamanov` (superuser)
   - No password required locally

2. **Environment variables (`.env`):**
   ```bash
   DATABASE_CLIENT=postgres
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=strapi
   DATABASE_USERNAME=atamanov
   DATABASE_PASSWORD=
   DATABASE_SSL=false
   ```

3. **Start development server:**
   ```bash
   npm run develop
   ```

4. **Access admin panel:**
   - URL: http://localhost:1337/admin
   - First time: Create admin user

## 🔄 Workflow for Content Type Changes

### Adding/Modifying Content Types

1. **Make changes locally:**
   - Use admin panel at http://localhost:1337/admin
   - Create/modify content types in Content-Type Builder
   - Changes are automatically synced to local database

2. **Test locally:**
   - Add sample data
   - Verify structure
   - Test API endpoints

3. **Commit changes:**
   ```bash
   git add src/api/
   git commit -m "feat: add new content type"
   git push origin develop
   ```

4. **Deploy to production:**
   - Push to develop branch
   - Render auto-deploys
   - Schema automatically syncs on first start

## 🚢 Production Deployment (Render)

### Environment Variables

Set these in Render Dashboard:

```bash
# Server
HOST=0.0.0.0
PORT=1337
NODE_ENV=production

# Secrets - IMPORTANT: Use secure, unique values!
APP_KEYS=generateWith:npx strapi generate:keys
API_TOKEN_SALT=generate-secure-random-string
ADMIN_JWT_SECRET=generate-secure-random-string
TRANSFER_TOKEN_SALT=generate-secure-random-string
ENCRYPTION_KEY=generate-secure-random-string
JWT_SECRET=generate-secure-random-string

# Database - Supabase Production
DATABASE_CLIENT=postgres
DATABASE_HOST=aws-1-eu-central-1.pooler.supabase.com
DATABASE_PORT=6543
DATABASE_NAME=postgres
DATABASE_USERNAME=postgres.fmnfqcysgwvbdfnxcwdt
DATABASE_PASSWORD=SvNzGvGB430LzAkM
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

### Build & Start Commands

Render automatically uses:
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`

The `postinstall` script will automatically sync the schema.

## ⚠️ Important Notes

### Database Safety

1. **Local and Production use different databases:**
   - Local: PostgreSQL on your machine
   - Production: Supabase
   - This prevents accidental data loss

2. **Schema synchronization:**
   - Strapi v5 syncs schema automatically on startup
   - Data is preserved during schema updates
   - First deployment may recreate all tables (expected behavior)

### Data Migration

If you need to migrate data from local to production:

```bash
# Dump local data
pg_dump -h localhost -U atamanov strapi > local_data.sql

# Restore to production
psql $DATABASE_URL < local_data.sql
```

## 🔧 Troubleshooting

### Schema Issues

If content types don't appear in production:

1. Check Render logs for sync errors
2. Access admin panel to verify schema
3. If needed, manually trigger rebuild in Render

### Database Connection Issues

Local:
```bash
# Check if PostgreSQL is running
brew services list

# Start PostgreSQL
brew services start postgresql@15
```

Production:
- Verify DATABASE_URL in Render environment
- Check Supabase dashboard for connection issues
- Ensure SSL settings match

## 📚 Next Steps

1. ✅ Local PostgreSQL configured
2. ✅ Environment variables set
3. ✅ Schema sync script created
4. ⬜ Test local development
5. ⬜ Configure Render environment
6. ⬜ Deploy to production
7. ⬜ Test production admin panel

## 🆘 Support

If you encounter issues:

1. Check logs: `npm run develop` (local) or Render logs (production)
2. Verify database connection
3. Ensure schema files are committed to git
4. Check Strapi v5 documentation for any breaking changes
