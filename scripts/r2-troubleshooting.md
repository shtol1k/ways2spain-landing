# R2 Upload Troubleshooting Guide

## Problem: Files not uploading to R2

---

## Step 1: Test R2 Connection Locally

Run the test script:

```bash
npm run test:r2
```

This will verify:
- ✅ Credentials are correct
- ✅ Bucket exists and is accessible
- ✅ Upload permissions work
- ✅ Public URL is configured correctly

**Expected output:**
```
✅ All required variables are set
✅ Connection successful!
✅ Test file uploaded successfully!
✨ All tests passed!
```

---

## Step 2: Check Vercel Environment Variables

Go to **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

### Required Variables (ALL must be set):

```bash
R2_ACCOUNT_ID=your_account_id
R2_REGION=eu
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
R2_BUCKET_NAME=w2s-media
R2_PUBLIC_URL=https://your-bucket.r2.dev
MEDIA_STORAGE=r2
```

### Common Mistakes:

❌ **Missing R2_SECRET_ACCESS_KEY** → Add it
❌ **Wrong bucket name** → Check exactly in Cloudflare
❌ **Missing MEDIA_STORAGE** → Add `MEDIA_STORAGE=r2`
❌ **Typo in variable name** → Must match exactly

---

## Step 3: Check Vercel Function Logs

1. Go to Vercel Dashboard → Deployments
2. Click on latest deployment
3. Go to **Logs** tab
4. Try uploading a file in Payload admin
5. Check for errors in logs

### Common Errors:

#### Error 1: "CredentialsError"
```
CredentialsError: Missing credentials in config
```
**Fix:** Add R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY to Vercel

#### Error 2: "NoSuchBucket"
```
NoSuchBucket: The specified bucket does not exist
```
**Fix:** Check R2_BUCKET_NAME matches exactly (case-sensitive!)

#### Error 3: "AccessDenied"
```
AccessDenied: Access Denied
```
**Fix:**
1. Go to Cloudflare Dashboard → R2 → Manage R2 API Tokens
2. Check token has "Object Read & Write" permissions
3. Regenerate token if needed

#### Error 4: "SignatureDoesNotMatch"
```
SignatureDoesNotMatch: The request signature we calculated does not match
```
**Fix:** Secret key is wrong. Regenerate R2 API token.

---

## Step 4: Verify Payload Configuration

Check `payload.config.ts`:

```typescript
disableLocalStorage: (() => {
  if (process.env.MEDIA_STORAGE === 'local') {
    return false
  }
  if (process.env.MEDIA_STORAGE === 'r2') {
    return true  // ← This should execute
  }
  return !!process.env.R2_BUCKET_NAME
})(),
```

**Debug:** Add console.log to see which path executes:

```typescript
disableLocalStorage: (() => {
  console.log('🔍 MEDIA_STORAGE:', process.env.MEDIA_STORAGE)
  console.log('🔍 R2_BUCKET_NAME:', process.env.R2_BUCKET_NAME)

  if (process.env.MEDIA_STORAGE === 'local') {
    console.log('📁 Using LOCAL storage')
    return false
  }
  if (process.env.MEDIA_STORAGE === 'r2') {
    console.log('☁️  Using R2 storage')
    return true
  }
  const autoDetect = !!process.env.R2_BUCKET_NAME
  console.log('🤖 Auto-detect:', autoDetect ? 'R2' : 'local')
  return autoDetect
})(),
```

Check Vercel logs for the output.

---

## Step 5: Test with Different Configurations

### Test 1: Force R2

Add to Vercel:
```bash
MEDIA_STORAGE=r2
R2_BUCKET_NAME=w2s-media
```

### Test 2: Disable local storage explicitly

In `payload.config.ts` temporarily:
```typescript
disableLocalStorage: true,  // Force R2
```

**After testing, revert this change!**

---

## Step 6: Check Payload Upload Hook

Add debug logging to Media collection:

```typescript
// src/collections/Media.ts

hooks: {
  beforeOperation: [
    ({ operation, req }) => {
      if (operation === 'create') {
        console.log('📤 Media upload attempt:')
        console.log('  - User:', req.user?.email)
        console.log('  - Role:', req.user?.role)
        console.log('  - Storage config:', {
          disableLocalStorage: req.payload.config.storage?.disableLocalStorage,
          hasR2: !!process.env.R2_BUCKET_NAME,
          mediaStorage: process.env.MEDIA_STORAGE,
        })
      }
    }
  ],
  afterError: [
    ({ error }) => {
      console.error('❌ Media upload error:', error)
    }
  ]
}
```

Check Vercel logs for output.

---

## Step 7: Verify R2 Bucket Settings

### In Cloudflare Dashboard:

1. **R2** → **Your Bucket** → **Settings**
2. Check **Public Access** is enabled (if using R2_PUBLIC_URL)
3. Check **CORS** if needed:
   ```json
   [
     {
       "AllowedOrigins": ["https://your-domain.vercel.app"],
       "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
       "AllowedHeaders": ["*"]
     }
   ]
   ```

---

## Step 8: Try Direct Upload Test

Create test endpoint in `src/app/api/test-upload/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export async function POST() {
  const client = new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.${process.env.R2_REGION}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
  })

  try {
    await client.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: 'test/from-api.txt',
      Body: 'Test upload from API',
    }))

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
```

Test with:
```bash
curl -X POST https://your-app.vercel.app/api/test-upload
```

---

## Common Solutions

### Solution 1: Regenerate R2 Token

1. Cloudflare Dashboard → R2 → Manage R2 API Tokens
2. Delete old token
3. Create new token with "Object Read & Write" permissions
4. Update Vercel environment variables
5. Redeploy

### Solution 2: Check Vercel Environment

Variables must be set in:
- **Settings** → **Environment Variables** → **Production** (or Preview)
- NOT in `.env.local` (that's local only!)

### Solution 3: Clear Payload Cache

Add to Vercel build command:
```bash
npm run build:next && rm -rf .next/cache
```

### Solution 4: Check Media Collection Permissions

```typescript
// src/collections/Media.ts
access: {
  create: ({ req }) => {
    const user = req.user
    if (!user) return false  // ← Must be authenticated
    return user.role === 'admin' || user.role === 'manager'
  },
}
```

---

## Quick Checklist

- [ ] Run `npm run test:r2` locally → passes
- [ ] All R2_* variables in Vercel → set
- [ ] MEDIA_STORAGE=r2 in Vercel → set
- [ ] No errors in Vercel logs → clean
- [ ] User is authenticated in Payload admin → logged in
- [ ] User has 'admin' or 'manager' role → correct
- [ ] R2 bucket exists → verified
- [ ] R2 token has write permissions → verified
- [ ] No "You are not allowed" error in browser → permissions OK

---

## Still Not Working?

1. Check exact error message in browser DevTools Console (F12)
2. Check Vercel Function Logs (real-time)
3. Run `npm run test:r2` with R2 credentials from Vercel
4. Try uploading a tiny file (1KB)
5. Check if file appears in Supabase `media` table
6. Check Cloudflare R2 Analytics for upload attempts

---

## Last Resort: Disable R2 Temporarily

```bash
# In Vercel, remove these:
MEDIA_STORAGE=r2
R2_BUCKET_NAME=w2s-media

# Or set:
MEDIA_STORAGE=local
```

Files will be stored locally (not ideal for production).
Use only for testing other functionality!
