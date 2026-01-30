# Strapi API Token Setup Guide

## 🎯 Problem

Frontend cannot fetch testimonials from Strapi because public API returns `403 Forbidden`.

## ✅ Solution: Create API Token

### Step 1: Create API Token in Strapi Admin

1. **Open Strapi Admin Panel:**
   - Local: http://localhost:1337/admin
   - Production: https://your-strapi-app.onrender.com/admin

2. **Navigate to Settings → API Tokens**

3. **Create new API Token:**
   - **Name:** `frontend-public-token`
   - **Description:** `Token for frontend to read testimonials`
   - **Token duration:** ✅ Unlimited (or set specific duration)
   - **Token type:** `Read-only` ✅

4. **Click "Generate"**

5. **Copy the token** (it looks like: `ProductionToken-xxxxxxxxxx`)

6. **IMPORTANT:** Save this token securely!
   - Add to local `.env.local`
   - Add to Render/Vercel environment variables

### Step 2: Update Environment Variables

#### Local Development (frontend/.env.local):

```bash
VITE_UNDER_CONSTRUCTION_MODE=false
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=your-token-here
```

#### Production (Vercel):

Add to Vercel Environment Variables:
```
VITE_STRAPI_URL=https://your-strapi-app.onrender.com
VITE_STRAPI_API_TOKEN=your-production-token-here
```

### Step 3: Update Frontend Code

The `getTestimonials()` function will automatically use the token.

## 🔐 Alternative: Public API Access (Less Secure)

If you don't want to use tokens, you can configure public role:

1. **Admin Panel → Settings → Users & Permissions plugin → Roles → Public**

2. **Find "Testimonials" section**

3. **Check permissions:**
   - ✅ `find` (Read all)
   - ✅ `findOne` (Read one)

4. **Save**

⚠️ **WARNING:** This makes your API public. Anyone can read testimonials without authentication.
Use API tokens instead for better security.

## 🧪 Test API Access

After setup, test with curl:

```bash
# Without token (should return 403 or 401)
curl http://localhost:1337/api/testimonials

# With token (should return data)
curl -H "Authorization: Bearer YOUR_TOKEN" \
  "http://localhost:1337/api/testimonials?populate=Photo"
```

## 📝 Quick Checklist

- [ ] Created API token in Strapi Admin
- [ ] Added token to `.env.local`
- [ ] Added token to production environment (Vercel/Render)
- [ ] Updated frontend code to use token
- [ ] Tested API access with curl
- [ ] Tested frontend displays testimonials
- [ ] Deployed and tested in production
