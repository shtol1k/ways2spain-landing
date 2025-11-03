# 🔧 Troubleshooting: Білий екран після деплою

## Проблема

Після деплою на `develop.ways2spain.com`:
- ❌ Білий екран
- ❌ JavaScript/CSS файли не завантажуються в Network
- ✅ Build успішний (файли створюються в `dist/`)
- ✅ API endpoints працюють

## Аналіз

### Build працює правильно:
```
✓ index.html (1.87 kB)
✓ assets/index-CFuo7iud.js (492.33 kB)
✓ assets/index-CdXVhZmr.css (69.53 kB)
```

### Проблема: Middleware блокує завантаження

**Можливі причини:**
1. Middleware перехоплює запити до статичних файлів
2. `develop.ways2spain.com` не розпізнається як preview domain
3. Vercel rewrites не працюють через middleware

## Рішення

### 1. Переконайся що middleware пропускає статичні файли

Middleware має перевіряти статичні файли **ДО** перевірки енвайронменту:

```typescript
// ПРАВИЛЬНО - перевірка на початку
if (pathname === '/index.html' || pathname.startsWith('/assets/') || ...) {
  return new Response(null, { status: 200 });
}

// Потім перевірка енвайронменту
```

### 2. Перевір чи домен розпізнається

Додай в middleware перевірку для `develop.ways2spain.com`:

```typescript
const isPreviewDeployment = 
  hostname.includes('git-') || 
  hostname.includes('preview') ||
  hostname.includes('develop') || // ✅ develop.ways2spain.com
  hostname.includes('staging');
```

### 3. Перевір matcher в config

Matcher має виключати статичні файли:

```typescript
export const config = {
  matcher: [
    '/((?!api|_next|assets|favicon.ico|index.html|.*\\..*).*)',
  ],
};
```

## Перевірка

### Крок 1: Перевір чи middleware працює

1. Відкрий `develop.ways2spain.com` в браузері
2. DevTools → Network tab
3. Онови сторінку
4. Перевір чи завантажуються:
   - `index.html` ✅
   - `assets/index-*.js` ✅
   - `assets/index-*.css` ✅

### Крок 2: Перевір чи middleware не блокує

1. Спробуй відкрити напряму: `develop.ways2spain.com/index.html`
2. Спробуй відкрити напряму: `develop.ways2spain.com/assets/index-*.js`
3. Якщо файли завантажуються - middleware працює правильно ✅

### Крок 3: Перевір Vercel rewrites

1. Vercel Dashboard → Settings → Domains
2. Перевір чи `develop.ways2spain.com` налаштований правильно
3. Перевір чи є redirects які можуть конфліктувати

## Альтернативне рішення

Якщо проблема не вирішується, можна тимчасово вимкнути middleware для перевірки:

1. Перейменуй `middleware.ts` → `middleware.ts.disabled`
2. Зроби redeploy
3. Перевір чи файли завантажуються
4. Якщо так - проблема в middleware логіці
5. Якщо ні - проблема в Vercel конфігурації

## Логи для діагностики

Додай в middleware логування (тільки для debug):

```typescript
console.log('Middleware:', {
  hostname,
  pathname,
  isPreview: isPreviewDeployment,
  isStatic: pathname.match(/\.(js|css|html)$/i),
});
```

Потім перевір Vercel Function Logs:
- Vercel Dashboard → Deployments → [deployment] → Functions → middleware

