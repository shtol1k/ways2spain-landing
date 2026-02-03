# 🚨 SECURITY ALERT: Telegram Token Leak Fix

## Problem
Your Telegram Bot Token was found in git history by GitHub security scanner.

**Leaked Token:** `8178765591:AAH_28VBgbCAGoKXjXeTipt4WGKP0i3hVvA`

This token is now compromised and must be revoked immediately!

---

## Step 1: Revoke the Leaked Token

### Option A: Via BotFather (Recommended)

1. Open Telegram and search for **@BotFather**
2. Send command: `/mybots`
3. Select your bot from the list
4. Click **"API Token"** → **"Revoke Token"**
5. Confirm revocation
6. Copy the **new token**

### Option B: Via BotFather Commands

1. Open chat with **@BotFather**
2. Send: `/revoke`
3. Select your bot
4. Confirm revocation
5. Copy the new token

---

## Step 2: Update Environment Variables

### Local Development:
```bash
# In .env.local
TELEGRAM_BOT_TOKEN=YOUR_NEW_TOKEN_HERE
TELEGRAM_CHAT_ID=-5130329115
```

### Vercel:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Find `TELEGRAM_BOT_TOKEN`
3. Update with new token value
4. Trigger redeployment

---

## Step 3: Clean Git History

### Option A: Remove from entire history (RECOMMENDED)

Use BFG Repo-Cleaner or git filter-branch:

```bash
# Backup your repository first!
git clone --mirror https://github.com/shtol1k/ways2spain-landing.git ways2spain-landing-backup

# Install BFG Repo-Cleaner (faster)
brew install bfg
# Or download from: https://rtyley.github.io/bfg-repo-cleaner/

# Clean the token from history
bfg --replace-text passwords.txt ways2spain-landing.git

# Create passwords.txt with:
TELEGRAM_BOT_TOKEN=8178765591:AAH_28VBgbCAGoKXjXeTipt4WGKP0i3hVvA==>REMOVED

# Then garbage collect
cd ways2spain-landing.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push
git push origin --force --all
```

### Option B: Using git filter-branch (Slower)

```bash
# Backup first!
git remote add backup https://github.com/shtol1k/ways2spain-landing-backup.git
git push backup main

# Remove token from history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env.local" \
  --prune-empty --tag-name-filter cat -- --all

# Clean up
git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (WARNING: This rewrites history!)
git push origin --force --all
```

---

## Step 4: Verify Token is Removed

After cleaning history, verify:

```bash
# Search for old token in git history
git log -S "8178765591:AAH_28VBgbCAGoKXjXeTipt4WGKP0i3hVvA" --all

# Should return: "fatal: bad default revision '8178765591..."
# Or empty result
```

---

## Step 5: Test New Token

### Update .env.local:
```bash
TELEGRAM_BOT_TOKEN=YOUR_NEW_BOT_TOKEN
```

### Test sending message:
```javascript
// Test script
const token = process.env.TELEGRAM_BOT_TOKEN
const chatId = process.env.TELEGRAM_CHAT_ID

fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chat_id: chatId,
    text: '✅ New Telegram token is working!'
  })
})
```

---

## Prevention: Never Commit Secrets

### Add to .gitignore:
```gitignore
# Environment variables
.env
.env.local
.env.production
.env.*.local

# Secrets
credentials.json
secrets.json
```

### Use Git-secrets (Optional):
```bash
# Install git-secrets
brew install git-secrets

# Configure to block secrets
git secrets --install
git secrets --register-aws
git secrets --add 'TELEGRAM_BOT_TOKEN.*'
git secrets --add 'GMAIL_APP_PASSWORD.*'
```

---

## After Fixing

1. ✅ Old token revoked
2. ✅ New token generated
3. ✅ Updated in .env.local
4. ✅ Updated in Vercel
5. ✅ Git history cleaned
6. ✅ Contact form working with new token
7. ✅ No secrets in git history

---

## Important Notes

- All team members must update their local `.env.local` with new token
- If you shared the old token anywhere else, change it there too
- Consider rotating other secrets if they were in the same commits
- Monitor your bot for suspicious activity
- GitHub will automatically rescan after the fix

---

## Verification Checklist

- [ ] Old token revoked via BotFather
- [ ] New token generated
- [ ] .env.local updated locally
- [ ] Vercel environment variables updated
- [ ] Git history cleaned
- [ ] Tested sending Telegram message
- [ ] No secrets found in: `git log -S "TOKEN" --all`
- [ ] Contact form working on Vercel
- [ ] GitHub security alert resolved
