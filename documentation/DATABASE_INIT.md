# Database Initialization Guide

## Problem
Payload CMS does not automatically create database tables on Vercel deployment.

## Solution
You need to initialize the database tables BEFORE accessing the admin panel.

---

## Method 1: Local Initialization (RECOMMENDED)

### Step 1: Temporarily update `.env.local`

Replace your local DATABASE_URL with Supabase connection:

```bash
# Comment out local DB
# DATABASE_URL=postgresql://atamanov@localhost:5432/w2s_local

# Use Supabase instead
DATABASE_URL=postgresql://postgres.YOUR_PROJECT_ID:YOUR_PASSWORD@aws-0-YOUR_REGION.pooler.supabase.com:6543/postgres
```

### Step 2: Run initialization script

```bash
npm run db:init
```

This will create all required tables in Supabase:
- `users` (with authentication fields)
- `users_sessions` (for session management)
- `testimonials`
- `media`
- `media_sizes`

### Step 3: Verify in Supabase Dashboard

1. Go to Supabase Dashboard → Table Editor
2. You should see all tables created

### Step 4: Restore local DATABASE_URL

```bash
# Restore local DB
DATABASE_URL=postgresql://atamanov@localhost:5432/w2s_local
```

### Step 5: Access admin panel

Go to `/admin` on your Vercel deployment and create first admin user.

---

## Method 2: Manual SQL (Alternative)

### Step 1: Generate SQL file locally

```bash
npm run migrate:generate
```

This will create a SQL file with all table definitions.

### Step 2: Run SQL in Supabase

1. Copy the generated SQL file
2. Go to Supabase Dashboard → SQL Editor
3. Paste and execute the SQL

---

## Verification

### Check tables exist:

In Supabase Dashboard → SQL Editor:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
```

You should see:
- users
- users_sessions
- testimonials
- media
- media_sizes

### Check admin panel works:

1. Go to `https://your-app.vercel.app/admin`
2. You should see Payload login screen
3. Click "Create First User" to create admin account

---

## Troubleshooting

### Error: "relation users does not exist"
- Database tables were not created
- Run `npm run db:init` locally with Supabase DATABASE_URL

### Error: "connection refused"
- Check DATABASE_URL is correct
- Verify you're using Transaction pooler (port 6543)
- Check Supabase project is active

### Error: "permission denied"
- Verify credentials in DATABASE_URL
- Check user has necessary permissions in Supabase

---

## After Initialization

Once tables are created:

1. ✅ Tables persist in Supabase
2. ✅ You can access `/admin` on Vercel
3. ✅ Create first admin user
4. ✅ Upload media files to R2
5. ✅ Test all CMS features

---

## Security Note

- The `/api/init-db` endpoint is protected with PAYLOAD_SECRET
- For production, remove this endpoint or add additional authentication
- Never expose database initialization in production logs
