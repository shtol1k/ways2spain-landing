# Ways2Spain Landing Page

Монорепозиторій для сайту Ways2Spain з фронтендом на React та Strapi CMS.

## Структура проекту

```
ways2spain-landing/
├── frontend/              # React фронтенд (Vite + TypeScript)
├── cms/                  # Strapi CMS (буде встановлено на наступному кроці)
├── backend-express/       # Попередній Express бекенд (збережено як резерв)
├── shared/               # Спільні типи та утиліти
│   └── types/           # TypeScript типи для API
├── scripts/             # Допоміжні скрипти
├── package.json         # Кореневий package.json з монорепозиторними скриптами
└── vercel.json          # Конфігурація для розгортання на Vercel
```

## Встановлення та запуск

### Передумови

- Node.js (рекомендовано v18+)
- npm або yarn

### Встановлення залежностей

```bash
# Встановлення залежностей для всього проекту
npm install

# Встановлення залежностей для фронтенду
cd frontend && npm install

# Після встановлення Strapi:
cd cms && npm install
```

### Запуск проекту

```bash
# Запуск фронтенду та CMS одночасно
npm run dev

# Запуск тільки фронтенду
npm run dev:frontend

# Запуск тільки CMS
npm run dev:cms

# Запуск старого Express бекенду (якщо потрібно)
npm run dev:express
```

### Збірка проекту

```bash
# Збірка фронтенду та CMS
npm run build

# Збірка тільки фронтенду
npm run build:frontend

# Збірка тільки CMS
npm run build:cms
```

## Встановлення Strapi

Наступним кроком буде встановлення Strapi в папку `cms/`:

```bash
# Створення нового проекту Strapi
npx create-strapi-app@latest cms --quickstart --no-run

# Або з TypeScript
npx create-strapi-app@latest cms --quickstart --typescript --no-run
```

## Розгортання

Проект налаштований для розгортання на Vercel з автоматичною конфігурацією для фронтенду та Strapi.

## Робота з контентом

Після встановлення Strapi:

1. Запустіть CMS: `npm run dev:cms`
2. Відкрийте адмінпанель: http://localhost:1337/admin
3. Створіть контент-типи відповідно до типів в `shared/types/index.ts`
4. Налаштуйте API та права доступу
5. Інтегруйте фронтенд з API Strapi

## Корисні команди

```bash
# Перевірка linting
npm run lint

# Очищення портів перед запуском
npm run dev:clean

# Попередній перегляд фронтенду
npm run preview
```

## Документація

- [Документація Strapi](https://docs.strapi.io/)
- [Документація Vite](https://vitejs.dev/)
- [Документація React Router](https://reactrouter.com/)
