# Next.js + Payload CMS Migration - Quick Start Guide

## 🚀 Quick Start

This is a condensed version of the full migration plan. Use this for quick reference during implementation.

## ⚡ Pre-Migration Checklist

Before starting Phase 0:

- [ ] Create backup branch: `git checkout -b backup-before-migration`
- [ ] Test current site functionality
- [ ] Document all environment variables
- [ ] Export Strapi content (if needed)
- [ ] Backup Supabase database

## 📋 Migration Phases - Quick Overview

| Phase | Duration | Goal | Status |
|-------|----------|------|--------|
| 0. Preparation | 0.5 day | Setup environment | ⏳ |
| 1. Planning | 0.5 day | Access control plan | ⏳ |
| 2. Next.js Setup | 1 day | Base Next.js app | ⏳ |
| 3. Home Page | 1 day | Migrate Home page | ⏳ |
| 4. Payload Setup | 1 day | Install Payload CMS | ⏳ |
| 5. Testimonials | 0.5 day | Dynamic testimonials | ⏳ |
| 6. Contact Form | 1 day | Replace Express | ⏳ |
| 7-9. Other Pages | 2.5 days | Migrate all pages | ⏳ |
| 10. Cloudflare R2 | 0.5 day | Media storage | ⏳ |
| 11. SEO | 1 day | SEO optimization | ⏳ |
| 12. Access Control | 1 day | Maintenance mode | ⏳ |
| 13. Testing | 1 day | QA & testing | ⏳ |
| 14. Deployment | 1 day | Vercel deploy | ⏳ |
| 15. Cleanup | 0.5 day | Remove old code | ⏳ |

**Total**: 13-15 days (part-time) or 7-10 days (full-time)

## 🔑 Key Commands

### Git Workflow

```bash
# Start migration
git checkout -b migration/nextjs-payload

# After completing each phase
git add .
git commit -m "Phase X: description"
git push origin migration/nextjs-payload

# When ready to deploy to preview
gh pr create --title "Next.js + Payload Migration" --body "Ready for review"

# After successful preview deployment
git checkout main
git merge migration/nextjs-payload
```

### Development

```bash
# Install Next.js
npx create-next-app@latest . --typescript --tailwind --app

# Install Payload
npm install payload

# Run development server
npm run dev

# Build for production
npm run build

# Generate Payload types
npx payload generate:types

# Run migrations
npx payload migrate:refresh
```

### Database

```bash
# Local PostgreSQL (already setup for Strapi)
psql -U atamanov -d strapi

# Create new database for Payload
createdb -U atamanov ways2spain_payload
```

## 🎯 Critical Steps

### Phase 0 - Preparation
1. Create migration branch
2. Document current environment variables
3. Test local PostgreSQL connection

### Phase 2 - Next.js Setup
1. Install Next.js in project root (not in frontend folder)
2. Move components from `frontend/src/components` to `src/components`
3. Configure TailwindCSS
4. Create basic layout with Navbar/Footer

### Phase 4 - Payload Setup
1. Install Payload CMS
2. Create `payload.config.ts`
3. Create Testimonials collection
4. Connect to local PostgreSQL
5. Test admin panel at `/admin`

### Phase 6 - Contact Form
1. Create Next.js Route Handler at `src/app/api/contact/route.ts`
2. Migrate nodemailer logic
3. Migrate Notion integration
4. Migrate Telegram alerts
5. Test form submission

### Phase 13 - Access Control
1. Create SiteSettings collection
2. Implement Next.js middleware
3. Create ComingSoon page
4. Create Login page
5. Test maintenance mode toggle

## ⚠️ Common Pitfalls

### ❌ Don't:
- Delete old code until new version is tested
- Skip testing phases
- Forget to backup database
- Commit sensitive data (API keys)
- Rush through SEO setup

### ✅ Do:
- Test each phase thoroughly
- Keep old code until verified
- Use Git branches properly
- Document your changes
- Test on mobile devices

## 📁 File Structure Key Points

```
Project Root
├── src/                    # Next.js source
│   ├── app/               # App Router pages
│   ├── collections/       # Payload collections
│   ├── components/        # React components
│   └── lib/              # Utilities
├── public/               # Static assets
├── payload.config.ts     # Payload config
└── next.config.js        # Next.js config
```

**DELETE after migration:**
- `frontend/` (Vite app)
- `backend-express/` (Express backend)
- `cms/` (Strapi CMS)

## 🔐 Environment Variables Priority

### Critical (Required for deployment)
- `DATABASE_URL` - Supabase connection
- `PAYLOAD_SECRET` - Payload encryption key
- `NEXT_PUBLIC_SERVER_URL` - Site URL

### Important (For features)
- `GMAIL_USER` / `GMAIL_APP_PASSWORD` - Contact form
- `NOTION_API_KEY` - Contact form integration
- `TELEGRAM_BOT_TOKEN` - Alerts

### Optional (Can add later)
- `R2_*` - Cloudflare R2 (media storage)

## 🚦 Deployment Strategy

### Step 1: Preview Deployment
- Deploy to Vercel preview from `migration/nextjs-payload` branch
- Test all functionality
- Share with stakeholders for review

### Step 2: Production Deployment
- Merge `migration/nextjs-payload` → `main`
- Automatic deployment to production
- Monitor for issues
- Have rollback plan ready

### Step 3: DNS Switch
- Update DNS if needed
- Monitor analytics
- Check SEO rankings

## 🆘 Emergency Rollback

If something goes wrong:

```bash
# Quick rollback to main branch
git checkout main
git push origin main

# Rollback Vercel deployment (via dashboard)
# 1. Go to Vercel dashboard
# 2. Find deployment
# 3. Click "Rollback"
# 4. Choose previous working deployment
```

## 📞 Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Payload Docs](https://payloadcms.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- Full migration plan: `documentation/MIGRATION.md`

## ✅ Success Criteria

Migration is complete when:
- [ ] All pages migrated and working
- [ ] Design matches current site
- [ ] All forms functional
- [ ] Admin panel accessible
- [ ] SEO optimized
- [ ] Deployed to production
- [ ] No critical bugs
- [ ] Performance ≥ current site

---

**Remember**: This is a gradual migration. Test each phase before moving to the next. Quality over speed! 🎯

**Next Step**: Open `documentation/MIGRATION.md` for detailed phase instructions.
