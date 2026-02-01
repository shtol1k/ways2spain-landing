# Media Upload Debug Guide

## Problem: "You are not allowed to perform this action" when uploading media

---

## Step 1: Check User Role in Supabase

Go to Supabase Dashboard → Table Editor → `users` table

Check the user you created:
1. What is the `role` value? Should be 'admin' or 'manager'
2. What is the `email`?
3. Is the user active?

**Expected:**
```
role: 'admin'
email: your-email@example.com
```

**If role is NULL or incorrect:**
1. Click on the cell
2. Change to 'admin'
3. Save
4. Try uploading again

---

## Step 2: Check Vercel Deployment Logs

1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on latest deployment
3. Go to "Logs" tab
4. Try uploading a file
5. Check for errors in logs

**Look for:**
- Permission errors
- R2 connection errors
- Authentication errors

---

## Step 3: Verify R2 Configuration

Check these environment variables in Vercel:

```bash
R2_ACCOUNT_ID=your_account_id_here
R2_REGION=eu
R2_ACCESS_KEY_ID=your_access_key_id_here
R2_SECRET_ACCESS_KEY=your_secret_access_key_here
R2_BUCKET_NAME=w2s-media
R2_PUBLIC_URL=https://your-bucket-url.r2.dev
```

**All must be set!**

---

## Step 4: Test R2 Connection Manually

Create a test script to verify R2 access:

```bash
# Add to package.json scripts
"test:r2": "node scripts/test-r2-connection.js"
```

Run: `npm run test:r2`

This will verify:
- R2 credentials are correct
- Bucket exists
- Upload permissions work

---

## Step 5: Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. Try uploading file
4. Look for errors

**Common errors:**
- `403 Forbidden` → R2 permissions issue
- `401 Unauthorized` → User not authenticated
- `500 Server Error` → Check Vercel logs

---

## Solution 1: Update User Role

If role is incorrect, run this in Supabase SQL Editor:

```sql
UPDATE users
SET role = 'admin'
WHERE email = 'your-email@example.com';
```

Replace with your actual email.

---

## Solution 2: Temporarily Disable Access Control

**ONLY FOR TESTING!**

In `src/collections/Media.ts`, temporarily change:

```typescript
create: ({ req }) => {
  // Temporarily allow all authenticated users
  const user = req.user
  return !!user
},
```

**After testing, revert this change!**

---

## Solution 3: Add Debug Logging

Add to `src/collections/Media.ts`:

```typescript
hooks: {
  beforeOperation: [
    ({ operation, req }) => {
      if (operation === 'create') {
        console.log('📤 Media upload attempt:')
        console.log('  - User:', req.user)
        console.log('  - Role:', req.user?.role)
        console.log('  - Authenticated:', !!req.user)
      }
    }
  ]
}
```

Check Vercel logs for output.

---

## Most Common Issues

### Issue 1: User role is NULL
**Fix:** Update role in Supabase directly

### Issue 2: R2 credentials missing in Vercel
**Fix:** Add all R2_* variables to Vercel environment

### Issue 3: User not authenticated
**Fix:** Logout and login again in Payload admin

### Issue 4: CORS error
**Fix:** Check PAYLOAD_PUBLIC_SERVER_URL matches Vercel URL

---

## Quick Checklist

- [ ] User has 'admin' or 'manager' role in Supabase
- [ ] User is logged in to Payload admin
- [ ] All R2_* environment variables set in Vercel
- [ ] PAYLOAD_PUBLIC_SERVER_URL matches Vercel URL
- [ ] No errors in browser console
- [ ] No errors in Vercel logs
- [ ] R2 bucket exists and is accessible

---

## Still Not Working?

1. Check exact error message in browser DevTools
2. Check Vercel function logs
3. Verify R2 bucket permissions
4. Try uploading different file type/size
5. Check if issue happens locally too
