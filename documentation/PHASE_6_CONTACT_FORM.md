# Phase 6: Contact Page & Express Replacement - Testing Guide

## ✅ What Was Migrated

### 1. **API Route Handler**
- **File**: `src/app/api/contact/route.ts`
- **Replaces**: `backend-express/api/contact.js`
- **Features**:
  - ✅ Nodemailer integration (Gmail SMTP)
  - ✅ Notion API integration
  - ✅ Telegram error alerts
  - ✅ Form validation
  - ✅ Error handling
  - ✅ TypeScript support

### 2. **Contact Page**
- **File**: `src/app/contact/page.tsx`
- **Replaces**: `frontend/src/pages/Contact.tsx`
- **Changes**:
  - ✅ Migrated to Next.js App Router
  - ✅ Replaced `react-toast` with `sonner`
  - ✅ Next.js native fetch API
  - ✅ `'use client'` directive for client-side interactivity

### 3. **UI Updates**
- ✅ Added `<Toaster />` component to root layout
- ✅ Using `sonner` for toast notifications
- ✅ All components use shadcn/ui

## 🧪 How to Test

### Step 1: Start Development Server

```bash
npm run dev:next
```

Server should start at: http://localhost:3000

### Step 2: Test Contact Form

1. **Navigate to**: http://localhost:3000/contact
2. **Verify page loads correctly**
   - Header section visible
   - Contact form displayed
   - Contact information sidebar
   - Working hours section

3. **Fill out the form**:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Phone**: +34 123 456 789 (optional)
   - **Your Query**: Select any option (optional)
   - **Message**: This is a test message

4. **Submit the form**

### Step 3: Verify Email Sent

**Check your Gmail inbox** (ways2spain@gmail.com):
- ✅ Should receive email with subject: "Нова заявка від Test User - Ways 2 Spain"
- ✅ Email contains all form data
- ✅ Formatted nicely with HTML

**Check terminal console**:
```
✅ Email sent successfully: <message-id>
```

### Step 4: Verify Notion Entry

1. **Go to your Notion database**
2. **Look for new entry** with:
   - ✅ Name: Test User
   - ✅ Email: test@example.com
   - ✅ Phone: +34 123 456 789
   - ✅ Message: This is a test message
   - ✅ Date: Current timestamp

**Check terminal console**:
```
✅ Notion page created successfully: { pageId, url }
```

### Step 5: Test Error Handling

**Test 1: Missing required fields**
1. Submit form with only Name (no Email or Message)
2. **Expected**: Form validation error toast
3. **Expected**: Error message in UI

**Test 2: Invalid email**
1. Submit form with invalid email format
2. **Expected**: Browser validation prevents submission

**Test 3: Service unavailable**
1. Temporarily break Gmail credentials in `.env.local`
2. Submit form
3. **Expected**: Error toast with detailed message
4. **Check**: Telegram alert received

## 🔍 Debugging

### Check Console Logs

**Success scenario**:
```
✅ Email sent successfully: <message-id>
✅ Notion entry created: <page-id>
```

**Error scenario**:
```
❌ Error sending email: { error details }
✅ Telegram alert sent successfully
```

### Common Issues

#### Issue: "Email service not configured"
**Solution**: Check `.env.local` has:
```bash
GMAIL_USER=ways2spain@gmail.com
GMAIL_APP_PASSWORD=ubbd iavz eksd sqjd
```

#### Issue: "Cannot access Notion database"
**Solution**: Check `.env.local` has:
```bash
NOTION_API_KEY=your-api-key
NOTION_DATABASE_ID=your-database-id
```

**Verify Notion Integration**:
1. Go to Notion → Your Database
2. Click "..." → "Add connections"
3. Find your integration and ensure it has access

#### Issue: Form submits but no email received
**Check**:
1. Gmail Spam folder
2. Terminal console for errors
3. Gmail App Password is correct (not regular password)
4. Less secure app access is ON in Google Account settings

#### Issue: Telegram alerts not working
**Solution**: Check `.env.local` has:
```bash
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

## 🎯 Integration Testing Checklist

- [ ] Form submits successfully
- [ ] Email received in Gmail inbox
- [ ] Notion entry created in database
- [ ] Toast notifications appear correctly
- [ ] Form validation works (required fields)
- [ ] Error handling works (invalid credentials)
- [ ] Telegram alerts sent on errors
- [ ] Mobile responsive (test on mobile device)
- [ ] Loading states work during submission

## 📊 Performance Tests

**Test form submission speed**:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Submit form
4. Check `/api/contact` request duration

**Expected**: < 3 seconds (includes Gmail SMTP + Notion API)

## 🔐 Security Notes

### What's Secure:
✅ Gmail App Password used (not regular password)  
✅ Environment variables for sensitive data  
✅ Input validation on server-side  
✅ CORS headers configured  

### Recommendations:
- Consider adding rate limiting (e.g., max 5 submissions per hour per IP)
- Add honeypot field to prevent spam
- Add reCAPTCHA for production
- Implement CSRF protection

## 🚀 Next Steps

### After Testing Complete:

1. **Deploy to Vercel**
   - Add environment variables to Vercel dashboard
   - Deploy and test on preview URL

2. **Compare with Old Frontend**
   - Old: http://localhost:8080/contact
   - New: http://localhost:3000/contact
   - Verify identical functionality

3. **Update Checklist**
   - Mark Phase 6 items as complete in `MIGRATION_CHECKLIST.md`

4. **Clean Up** (after successful testing)
   - Remove old Express backend: `backend-express/` directory
   - Update documentation

## 📝 Files Created/Modified

### Created:
- ✅ `src/app/api/contact/route.ts` - API handler
- ✅ `src/app/contact/page.tsx` - Contact page

### Modified:
- ✅ `src/app/(site)/layout.tsx` - Added Toaster component

### Can Be Removed (after testing):
- `backend-express/api/contact.js` - Old Express handler
- `frontend/src/pages/Contact.tsx` - Old React Router page

## 🎉 Success Criteria

Phase 6 is complete when:
- ✅ Contact form submits successfully
- ✅ Email received with all form data
- ✅ Notion entry created
- ✅ Telegram error alerts work
- ✅ UI matches old design
- ✅ Mobile responsive
- ✅ Error handling works correctly
- ✅ No console errors

---

**Last Updated**: 2026-02-02  
**Status**: Ready for Testing  
**Next Phase**: Phase 7 - About Page Migration
