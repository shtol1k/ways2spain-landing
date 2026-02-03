# Deployment Guide

Цей документ містить інструкцію для деплою проекту Ways2Spain на Vercel.

## 🎯 Deployment Strategy

Ми використовуємо **single Vercel project** для всього додатку:
- ✅ Frontend (Next.js)
- ✅ Backend (API Routes)
- ✅ CMS (Payload Admin)
- ✅ Serverless Functions

**Попередня архітектура (deprecated):**
- 3 separate deployments (Vite frontend, Express backend, Strapi CMS)

**Нова архітектура (current):**
- 1 unified deployment на Vercel

## 📦 Prerequisites

### Обов'язково:

1. **Vercel Account**
   - Зареєструйтесь на https://vercel.com
   - Підключіть GitHub account

2. **GitHub Repository**
   - Проект має бути в GitHub
   - Vercel needs access to repository

3. **Supabase Project**
   - Database в production
   - Отримайте `DATABASE_URL`

4. **Cloudflare R2 Bucket** (опціонально)
   - Для media storage в production
   - Альтернатива: Vercel Blob або інше S3-сумісне сховище

### Домени (Production)

- Домен: `ways2spain.com` (ваш основний домен)
- Або subdomain: `www.ways2spain.com`

## 🚀 Deployment на Vercel

### 1. Підключення проекту до Vercel

#### Через Vercel Dashboard:

1. Відкрийте https://vercel.com/dashboard
2. Клікніть **"Add New..." → "Project"**
3. Виберіть GitHub repository
4. Вкажіть налаштування (див. нижче)

#### Через Vercel CLI (альтернатива):

```bash
# Встановити Vercel CLI
npm i -g vercel

# Логін
vercel login

# Деплой з поточного каталогу
vercel

# Слідуйте інструкціям в терміналі
```

### 2. Налаштування проекту в Vercel

#### Build & Development Settings

```
Framework Preset: Next.js

Build Command: npm run build
Output Directory: (empty for Next.js)
Install Command: npm install
```

#### Environment Variables

Додайте в **Settings → Environment Variables**:

**Required Variables:**

```bash
# Production Database (Supabase)
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT].supabase.co:5432/postgres

# Payload CMS
PAYLOAD_SECRET=[GENERATE-NEW-SECRET-32-CHARS-MINIMUM]
NEXT_PUBLIC_SERVER_URL=https://ways2spain.com

# Environment
NODE_ENV=production
```

**Optional Variables:**

```bash
# Cloudflare R2 (Media Storage)
R2_ACCOUNT_ID=your-account-id
R2_ACCESS_KEY_ID=your-access-key-id
R2_SECRET_ACCESS_KEY=your-secret-access-key
R2_BUCKET_NAME=ways2spain-media
R2_PUBLIC_URL=https://your-bucket.r2.dev

# Contact Form Integrations
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
NOTION_API_KEY=your-notion-api-key
NOTION_DATABASE_ID=your-database-id
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
```

**Environment Selection:**
- ✅ Production - для production deployment
- ✅ Preview - для preview deployments (pull requests)
- ✅ Development - для development branch (optional)

### 3. Production Database Setup

#### Supabase Setup:

1. **Create Supabase Project:**
   - Відкрийте https://supabase.com/dashboard
   - Create new project
   - Wait for database to be provisioned

2. **Get Database URL:**
   - Settings → Database
   - Copy "Connection String" (URI format)
   - Замініть `[YOUR-PASSWORD]` на ваш реальний пароль

3. **Run Migrations:**
   ```bash
   # Встановити Supabase CLI
   npm install -g supabase
   
   # Або через Vercel deployment
   # Міграції запустяться автоматично через postinstall script
   ```

### 4. Cloudflare R2 Setup (Media Storage)

#### Створення R2 Bucket:

1. **Create R2 Bucket:**
   ```bash
   # Через Cloudflare Dashboard:
   # R2 → Create Bucket → "ways2spain-media"
   ```

2. **Get API Tokens:**
   - Dashboard → R2 → Manage R2 API Tokens
   - Create API token with "Object Read & Write"
   - Збережіть:
     - Access Key ID
     - Secret Access Key
     - Account ID

3. **Configure CORS:**
   ```javascript
   // В R2 bucket settings → CORS policy
   [
     {
       "AllowedOrigins": ["https://ways2spain.com"],
       "AllowedMethods": ["GET", "HEAD", "PUT", "DELETE"],
       "AllowedHeaders": ["*"],
       "MaxAgeSeconds": 3600
     }
   ]
   ```

4. **Set Public Access:**
   - R2 → Ваш bucket → Settings → Public Access
   - Enable: "Allow Access"
   - Отримайте public URL: `https://[YOUR-BUCKET].r2.dev`

### 5. Домени та DNS

#### Налаштування custom domain:

1. **В Vercel:**
   - Settings → Domains
   - Add domain: `ways2spain.com`
   - Vercel покаже DNS records для додавання

2. **В Cloudflare (або ваш DNS provider):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21 (Vercel IPv4)
   
   Type: AAAA
   Name: @
   Value: 2600:1f18:28c7:f600::1 (Vercel IPv6)
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Чекайте DNS propagation:**
   - Зазвичай 5-60 хвилин
   - Перевірте: `dig ways2spain.com`

## 🔄 Deployment Process

### Initial Deployment

```bash
# 1. Push в main branch (або develop)
git checkout main
git merge migration/nextjs-payload
git push origin main

# 2. Vercel автоматично деплоїть
# 3. Чекайте email з "Deployment successful"
# 4. Отримайте URL: https://ways2spain.com або https://your-project.vercel.app
```

### Subsequent Deployments

**Automatic:**
```bash
# Будь-який push в main branch автоматично деплоїться
git push origin main
```

**Manual через Vercel Dashboard:**
1. Відкрийте https://vercel.com/dashboard
2. Виберіть project
3. Deployments → Click "..." → Redeploy

### Preview Deployments

**Для кожного Pull Request:**
```bash
# 1. Create branch
git checkout -b feature/new-feature

# 2. Push changes
git push origin feature/new-feature

# 3. Create Pull Request в GitHub

# 4. Vercel автоматично створює preview deployment
# URL: https://your-project-git-branch.vercel.app
```

## 🔒 Production Best Practices

### 1. Environment Variables

**✅ DO:**
- Використовуйте різні secrets для production/preview/dev
- Generate унікальний `PAYLOAD_SECRET` для production
- Rotate secrets регулярно (кожні 90 днів)
- Never commit secrets в git

**❌ DON'T:**
- Не використовуйте однакові secrets в різних середовищах
- Не діліться secrets через незахищені канали
- Не використовуйте default values

### 2. Database

**Regular Backups:**
- Supabase автоматично бекапить (залежно від плану)
- Export регулярно: `pg_dump` або Supabase Dashboard

**Connection Pooling:**
- Для high-traffic sites розгляньте PgBouncer або Supabase pooler

### 3. Monitoring

**Vercel Analytics:**
- Увімкніть в Vercel Dashboard
- Моніторьте performance, errors

**Error Tracking:**
- Розгляньте Sentry або Vercel Log Drains

**Uptime Monitoring:**
- UptimeRobot, Pingdom, або аналоги
- Alert якщо site вниз

### 4. Security

**HTTPS:**
- Vercel автоматично надає SSL/TLS
- Redirect HTTP → HTTPS

**Headers:**
```javascript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## 📊 Post-Deployment Checklist

### Перевірка після deployment:

- [ ] **Site Accessibility**
  - [ ] https://ways2spain.com loads
  - [ ] All pages work (Home, About, Services, Contact, etc.)
  - [ ] No 404 errors
  - [ ] Images load correctly

- [ ] **Admin Panel**
  - [ ] https://ways2spain.com/admin loads
  - [ ] Can login with admin credentials
  - [ ] Can create/edit content
  - [ ] Media uploads work (if R2 configured)

- [ ] **Contact Form**
  - [ ] Form submits successfully
  - [ ] Email sends (Gmail SMTP)
  - [ ] Notion integration works
  - [ ] Telegram alerts send

- [ ] **Performance**
  - [ ] Lighthouse score > 90
  - [ ] Core Web Vitals pass
  - [ ] Page load time < 3s

- [ ] **SEO**
  - [ ] Meta tags present on all pages
  - [ ] Open Graph tags work (share on social media)
  - [ ] sitemap.xml accessible
  - [ ] robots.txt accessible

- [ ] **Mobile**
  - [ ] Responsive design works
  - [ ] Touch interactions work
  - [ ] No horizontal scroll

## 🐛 Troubleshooting

### Issue: Build fails

**Перевірте:**
```bash
# Локально переди деплоєм
npm run build

# Якщо build fails локально, виправте помилки перед деплоєм
```

**Common causes:**
- Type errors → виправте TypeScript помилки
- Missing dependencies → `npm install`
- Environment variables missing → додайте в Vercel

### Issue: Database connection fails

**Перевірте:**
- DATABASE_URL правильний в Vercel env vars
- Supabase project активний
- IP whitelist (якщо є) включає Vercel IPs

### Issue: Media uploads fail

**Перевірте:**
- R2 credentials правильні
- CORS налаштований коректно
- Bucket is public (для читання)

### Issue: Preview deployments don't work

**Перевірте:**
- Environment variables для Preview environment
- NEXT_PUBLIC_SERVER_URL правильний для preview

### Issue: Site is slow

**Оптимізація:**
- Enable ISR (Incremental Static Regeneration)
- Optimize images (Next.js Image component)
- Enable caching headers
- Use Vercel Edge Functions for static content

## 📈 Performance Monitoring

### Vercel Analytics

Відкрийте Vercel Dashboard → Analytics:

**Metrics to track:**
- Page Views
- Unique Visitors
- Core Web Vitals (LCP, FID, CLS)
- Routes performance

### Optimization Tips

**1. Enable ISR:**
```typescript
// src/app/page.tsx
export const revalidate = 3600 // 1 hour
```

**2. Optimize Images:**
```typescript
import Image from 'next/image'

<Image
  src="/hero.jpg"
  width={1920}
  height={1080}
  priority // для above-the-fold images
  alt="Hero"
/>
```

**3. Cache API responses:**
```typescript
export const revalidate = 3600 // cache for 1 hour
```

## 🔙 Rollback Plan

### Якщо щось піде не так:

**Варіант 1: Quick Rollback (через Vercel Dashboard)**
1. Vercel Dashboard → Deployments
2. Знайдіть останній успішний deployment
3. Клікніть "..." → Promote to Production

**Варіант 2: Git Rollback**
```bash
# Rollback to previous commit
git revert HEAD
git push origin main

# Vercel автоматично деплоїть
```

**Варіант 3: Emergency DNS Switch**
```bash
# Змініть DNS на попередній сервер (якщо є)
# У Cloudflare: DNS → змініть A record
```

## 📚 Додаткові ресурси

- [Vercel Deployment Docs](https://vercel.com/docs/deployments/overview)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Supabase Docs](https://supabase.com/docs)
- [Cloudflare R2 Docs](https://developers.cloudflare.com/r2/)

## 🆘 Emergency Contacts

Якщо критична проблема в production:

1. **Immediate:** Rollback deployment
2. **Check:** Vercel Status Page
3. **Check:** Supabase Status Page
4. **Notify:** Team в чаті
5. **Document:** Створіть issue в GitHub

---

**Last Updated**: 2025-02-03
**Deployment Version**: 2.0 (Next.js + Payload)
**Status**: Production Ready
