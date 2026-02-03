# Local Development Guide

Цей документ містить повну інструкцію для налаштування середовища локальної розробки проекту Ways2Spain.

## 📋 Передумови

### Обов'язкове ПЗ

- **Node.js** 20+ або 22+
  - Перевірити версію: `node --version`
  - Завантажити: https://nodejs.org/
  
- **npm** 10+ або **bun** 1.1+
  - Перевірити версію: `npm --version`
  - npm встановлюється разом з Node.js

- **Git**
  - Перевірити версію: `git --version`
  - Завантажити: https://git-scm.com/

### База даних (Local Development)

#### Опція 1: PostgreSQL (рекомендовано)

**macOS (Homebrew):**
```bash
brew install postgresql@16
brew services start postgresql@16

# Створити користувача та базу даних
psql postgres
CREATE DATABASE ways2spain_local;
CREATE USER atamanov WITH PASSWORD 'your-password';
GRANT ALL PRIVILEGES ON DATABASE ways2spain_local TO atamanov;
\q
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql

# Налаштування
sudo -u postgres psql
CREATE DATABASE ways2spain_local;
CREATE USER atamanov WITH PASSWORD 'your-password';
GRANT ALL PRIVILEGES ON DATABASE ways2spain_local TO atamanov;
\q
```

#### Опція 2: Docker (альтернатива)

```bash
# Запустити PostgreSQL в Docker
docker run --name ways2spain-postgres \
  -e POSTGRES_DB=ways2spain_local \
  -e POSTGRES_USER=atamanov \
  -e POSTGRES_PASSWORD=your-password \
  -p 5432:5432 \
  -d postgres:16-alpine
```

### Додаткові інструменти (опціонально)

- **VS Code** або інший редактор
- **Postman** або **Insomnia** для тестування API
- **pgAdmin** для управління PostgreSQL (GUI)

## 🚀 Початок роботи

### 1. Клонування репозиторію

```bash
# Якщо ви ще не клонували репозиторій
git clone <repository-url>
cd ways2spain-landing

# Або якщо працюєте з існуючим репозиторієм
cd ways2spain-landing
git fetch origin
git checkout develop
```

### 2. Встановлення залежностей

```bash
# Встановлення всіх залежностей
npm install

# Перевірка, що все встановлено коректно
npm run dev -- --version  # перевірити Next.js
npm run payload -- --version  # перевірити Payload
```

**Вимога до залежностей:**
- ✅ Node modules встановлені
- ✅ Package lock files присутні
- ⚠️ Переконайтеся, що немає conficts у залежностях

### 3. Налаштування змінних оточення

Створіть файл `.env.local` в корені проекту:

```bash
# Скопіюйте шаблон (якщо існує)
cp .env.example .env.local

# Або створіть вручну
touch .env.local
```

**Мінімальна конфігурація для локальної розробки:**

```bash
# .env.local

# Database (локальна PostgreSQL)
DATABASE_URL=postgresql://atamanov:your-password@localhost:5432/ways2spain_local

# Payload
PAYLOAD_SECRET=change-this-to-a-random-secret-key-min-32-chars
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Optional: Contact form (для тестування контактної форми)
# GMAIL_USER=your-email@gmail.com
# GMAIL_APP_PASSWORD=your-app-password
# NOTION_API_KEY=your-notion-token
# NOTION_DATABASE_ID=your-database-id
# TELEGRAM_BOT_TOKEN=your-bot-token
# TELEGRAM_CHAT_ID=your-chat-id
```

**⚠️ Важливо:**
- Ніколи не комітьте `.env.local` в git!
- Генеруйте унікальний `PAYLOAD_SECRET` для кожного середовища
- Для production використовуйте інші значення

### 4. Ініціалізація бази даних

```bash
# Створення таблиць та запуск міграцій
npm run db:init

# Або вручну через Payload
npm run migrate
```

**Це створить:**
- ✅ Таблиці в PostgreSQL
- ✅ Початкового користувача admin (якщо налаштовано)
- ✅ Базові дані (якщо є seed data)

### 5. Перший запуск

```bash
# Запуск dev server
npm run dev
```

**Перевірка:**
1. Відкрийте http://localhost:3000 - головна сторінка
2. Відкрийте http://localhost:3000/admin - адмін панель Payload
3. Якщо все працює - ви готові до розробки! 🎉

## 📝 Повний список змінних оточення

### Required (обов'язкові)

```bash
# Database connection
DATABASE_URL=postgresql://user:password@localhost:5432/database_name

# Payload CMS
PAYLOAD_SECRET=your-secret-key-minimum-32-characters
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Optional (опціональні)

```bash
# Cloudflare R2 (media storage) - якщо не налаштовано, використовується локальне сховище
R2_ACCOUNT_ID=your-account-id
R2_ACCESS_KEY_ID=your-access-key-id
R2_SECRET_ACCESS_KEY=your-secret-access-key
R2_BUCKET_NAME=ways2spain-media
R2_PUBLIC_URL=https://your-bucket.r2.dev

# Gmail SMTP (contact form)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-specific-password

# Notion (contact form integration)
NOTION_API_KEY=secret_your-notion-api-key
NOTION_DATABASE_ID=your-database-id

# Telegram (alerts)
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

## 🔧 Доступні команди

### Development

```bash
npm run dev              # Запуск Next.js dev server (http://localhost:3000)
npm run dev -- --turbo   # Запуск з Turbopack (швидше, експериментально)
```

### Build & Production

```bash
npm run build            # Production build
npm start                # Запуск production server
npm run lint             # ESLint перевірка
```

### Database & Migrations

```bash
npm run db:init          # Ініціалізація бази даних
npm run db:test          # Перевірка з'єднання з БД
npm run migrate          # Запуск міграцій
npm run migrate:refresh  # Перестворити всі міграції (⚠️ delete data!)
npm run migrate:generate # Генерувати нову міграцію
```

### Payload CMS

```bash
npm run payload          # Payload CLI
npx payload generate:types  # Генерувати TypeScript типи
```

### Testing (майбутнє)

```bash
npm run test             # Запуск тестів
npm run test:e2e         # E2E тести
```

## 🗄️ Робота з базою даних

### Перегляд даних

**Через psql CLI:**
```bash
# Підключитись до бази даних
psql postgresql://atamanov@localhost:5432/ways2spain_local

# Корисні команди
\dt                      # Показати всі таблиці
\d users                 # Опис таблиці users
SELECT * FROM users;     # Вибірка даних
\q                       # Вихід
```

**Через pgAdmin (GUI):**
1. Відкрийте pgAdmin
2. Додайте нове з'єднання:
   - Host: `localhost`
   - Port: `5432`
   - Database: `ways2spain_local`
   - Username: `atamanov`
3. Переглядайте та редагуйте дані через інтерфейс

### Migrations

**Створити нову міграцію:**
```bash
npx payload generate:sql
# Це створить файл в src/migrations/
```

**Запустити міграції:**
```bash
npm run migrate
```

**Відкотити міграції:**
```bash
npm run migrate:refresh  # ⚠️ Це видалить всі дані!
```

## 🎨 Робота з Payload Collections

### Створення нової Collection

1. Створіть файл `src/collections/YourCollection.ts`:

```typescript
import { CollectionConfig } from 'payload'

export const YourCollection: CollectionConfig = {
  slug: 'your-collection',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // Додайте інші поля...
  ],
}
```

2. Додайте в `payload.config.ts`:

```typescript
import { YourCollection } from './src/collections/YourCollection'

export default buildConfig({
  collections: [
    // ... інші collections
    YourCollection,
  ],
})
```

3. Згенеруйте міграцію:

```bash
npx payload generate:sql
npm run migrate
```

### Доступ до даних в коді

**Server Component:**
```typescript
import payload from 'payload'

export default async function Page() {
  const testimonials = await payload.find({
    collection: 'testimonials',
    where: {
      locale: { equals: 'uk' },
    },
  })

  return <div>{/* ваш JSX */}</div>
}
```

**API Route:**
```typescript
import { NextResponse } from 'next/server'
import payload from 'payload'

export async function GET() {
  const data = await payload.find({
    collection: 'testimonials',
    limit: 10,
  })
  
  return NextResponse.json(data)
}
```

## 🐛 Debugging

### Перевірка з'єднання з БД

```bash
npm run db:test
```

### Перевірка Payload API

```bash
# REST API
curl http://localhost:3000/api/testimonials

# GraphQL
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ Testimonials { id title } }"}'
```

### Логи

**Next.js logs:**
- Dev server показує логи в терміналі
- Перевірте console.log() в компонентах

**Database queries:**
- Увімкніть логування в `payload.config.ts`:
```typescript
export default buildConfig({
  // ...
  debug: true,  // <-- увімкнути debug mode
})
```

## 🧪 Тестування Contact Form

Локально тестування інтеграцій (Gmail, Notion, Telegram) вимагає налаштування відповідних змінних оточення.

### 1. Gmail SMTP (Email sending)

```bash
# .env.local
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

**Отримання App Password:**
1. Увійдіть в Google Account
2. Налаштування → Безпека → 2-етапна аутентифікація
3. App passwords → Створити новий
4. Використайте цей пароль в `GMAIL_APP_PASSWORD`

### 2. Notion Integration

```bash
# .env.local
NOTION_API_KEY=secret_your-token
NOTION_DATABASE_ID=your-database-id
```

### 3. Telegram Alerts

```bash
# .env.local
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

## 🔄 Типовий workflow розробки

### Створення нової сторінки

1. Створіть файл в `src/app/(site)/your-page/page.tsx`
2. Додайте контент та компоненти
3. Тестуйте: http://localhost:3000/your-page
4. Commit: `git commit -m "feat: add your page"`

### Створення нового компонента

1. Створіть файл в `src/components/YourComponent.tsx`
2. Використовуйте на сторінках:
```typescript
import YourComponent from '@/components/YourComponent'

export default function Page() {
  return <YourComponent />
}
```

### Робота з медіа-файлами

**Локальне сховище (dev):**
- Файли зберігаються в `public/media/`
- Доступні за URL `/media/filename.jpg`

**Cloudflare R2 (production):**
- Файли завантажуються в R2 bucket
- URL: `https://your-bucket.r2.dev/filename.jpg`

## 🚨 Поширені проблеми

### Problem: Port 3000 already in use

```bash
# Знайти процес
lsof -i :3000

# Вбити процес
kill -9 <PID>

# Або використати інший порт
PORT=3001 npm run dev
```

### Problem: Database connection failed

```bash
# Перевірити, що PostgreSQL запущений
brew services list  # macOS
sudo systemctl status postgresql  # Linux

# Перевірити з'єднання
psql postgresql://atamanov@localhost:5432/ways2spain_local
```

### Problem: Migration errors

```bash
# Скинути міграції (⚠️ видалить дані)
npm run migrate:refresh

# Або вручну очистити таблицю
psql postgresql://atamanov@localhost:5432/ways2spain_local
DROP TABLE payload_migrations;
\q

# Потім запустіть міграції знову
npm run migrate
```

### Problem: Payload admin not accessible

```bash
# Перевірити, що Next.js працює
curl http://localhost:3000/admin

# Перевірити middleware
# Видаліть або тимчасово відключіть src/middleware.ts

# Очистити Next.js cache
rm -rf .next
npm run dev
```

## 📚 Корисні ресурси

### Документація

- [Next.js Docs](https://nextjs.org/docs)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

### Інструменти

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Git Handbook](https://guides.github.com/activities/hello-git/)

## 🆘 Підтримка

Якщо ви зіткнулися з проблемою:

1. Перевірте цей документ
2. Перевірте [ARCHITECTURE.md](ARCHITECTURE.md)
3. Знайдіть схожі issues в GitHub
4. Задайте питання в team chat

---

**Last Updated**: 2025-02-03
**Maintainer**: Ways2Spain Team
