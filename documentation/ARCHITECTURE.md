# Architecture Overview

## 🏗️ High-Level Architecture

Ways2Spain використовує **unified architecture** на основі Next.js 16 та Payload CMS 3.

```
┌─────────────────────────────────────────────────────────────────┐
│                    Next.js Application                          │
│                                                                 │
│  ┌────────────────┐  ┌──────────────────┐  ┌─────────────────┐ │
│  │  App Router    │  │  Route Handlers  │  │  Payload Admin  │ │
│  │  (src/app)     │  │  (src/app/api)   │  │  (/admin)       │ │
│  │                │  │                  │  │                 │ │
│  │  - Pages       │  │  - /api/contact  │  │  - CMS UI       │ │
│  │  - Layouts     │  │  - /api/...      │  │  - Collections  │ │
│  │  - Components  │  │  - Payload API   │  │  - Globals      │ │
│  └────────────────┘  └──────────────────┘  └─────────────────┘ │
│         │                     │                      │         │
│         └─────────────────────┴──────────────────────┘         │
│                              │                                 │
│                              ▼                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    Payload CMS                             │ │
│  │  - Collections: Users, Testimonials, Media                │ │
│  │  - Access Control: role-based (admin, manager)            │ │
│  │  - i18n: Ukrainian (primary), English                     │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  PostgreSQL DB   │
                    │  (Supabase)      │
                    │                  │
                    │  - users         │
                    │  - testimonials  │
                    │  - media         │
                    │  - migrations    │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Cloudflare R2   │
                    │  (Media Storage)  │
                    └──────────────────┘
```

## 🎯 Key Design Decisions

### 1. Single Server Architecture

**Why:**
- ✅ **Simplicity**: Один `npm run dev` для запуску всього
- ✅ **Deployment**: Один Vercel проект замість трьох
- ✅ **Performance**: Поділ серверних/клієнтських компонентів
- ✅ **SEO**: Server-side rendering за замовчуванням

**Previous Architecture (deprecated):**
```
Vite Frontend (:8080) + Express Backend (:3001) + Strapi CMS (:1337)
```

**New Architecture (current):**
```
Next.js + Payload CMS (:3000) - everything in one server
```

### 2. Next.js App Router

**Benefits:**
- 🚀 **Server Components** за замовчуванням (краща продуктивність)
- 🎯 **Streaming** для швидкого завантаження
- 🔒 **Built-in SEO** з metadata API
- 📁 **File-based routing** - простота й зручність

### 3. Payload CMS

**Why Payload (not Strapi):**
- ✅ **Better migrations** - контроль над змінами схеми БД
- ✅ **TypeScript-first** - повна типізація
- ✅ **No code-generation** - прямий контроль
- ✅ **Simpler auth** - вбудована система доступу
- ✅ **Next.js native** - розроблена для Next.js

### 4. Route Groups Structure

```
src/app/
├── (payload)/          # Payload admin + API routes
│   ├── admin/
│   ├── api/
│   └── graphql/
│
└── (site)/             # Public site pages
    ├── page.tsx        # Home
    ├── about/
    ├── services/
    └── ...
```

**Why route groups:**
- Separation of concerns (admin vs public)
- Clean URLs (no `(payload)` or `(site)` in URL)
- Independent layouts and middleware

## 📁 Directory Structure

```
ways2spain-landing/
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (payload)/                # Payload CMS routes
│   │   │   ├── admin/                # Admin panel
│   │   │   │   └── [[...segments]]/  # Catch-all for Payload
│   │   │   ├── api/                  # Payload REST API
│   │   │   │   └── [...slug]/
│   │   │   ├── graphql/              # Payload GraphQL API
│   │   │   └── layout.tsx            # Payload-specific layout
│   │   │
│   │   ├── (site)/                   # Public site
│   │   │   ├── page.tsx              # Home page
│   │   │   ├── about/                # About page
│   │   │   ├── services/             # Services pages
│   │   │   ├── blog/                 # Blog pages
│   │   │   ├── contact/              # Contact page
│   │   │   ├── visa/                 # Visa page
│   │   │   ├── calculator/           # Calculator page
│   │   │   ├── consultation/         # Consultation page
│   │   │   ├── globals.css           # Global styles
│   │   │   ├── layout.tsx            # Root layout
│   │   │   └── not-found.tsx         # 404 page
│   │   │
│   │   └── api/                      # API route handlers
│   │       └── contact/              # Contact form endpoint
│   │
│   ├── collections/                  # Payload collections
│   │   ├── Users.ts                  # Custom Users collection
│   │   ├── Testimonials.ts          # Testimonials collection
│   │   └── Media.ts                  # Media collection (R2)
│   │
│   ├── components/                   # React components
│   │   ├── ui/                      # shadcn/ui components
│   │   ├── Navbar.tsx               # Navigation
│   │   ├── Footer.tsx               # Footer
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── Features.tsx             # Features section
│   │   ├── Testimonials.tsx         # Testimonials carousel
│   │   └── ...
│   │
│   ├── lib/                         # Utilities
│   │   ├── api.ts                   # API client
│   │   └── utils.ts                 # Helper functions
│   │
│   └── migrations/                  # Database migrations
│       ├── 20260202_120000_*.ts
│       ├── 20260202_120100_*.ts
│       └── ...
│
├── public/                           # Static assets
│   ├── images/
│   ├── icons/
│   └── media/                       # Local media (dev only)
│
├── documentation/                    # Project documentation
│   ├── ARCHITECTURE.md              # This file
│   ├── DEVELOPMENT.md               # Local development guide
│   ├── DEPLOYMENT.md                # Deployment guide
│   └── MIGRATION.md                 # Migration history
│
├── scripts/                         # Helper scripts
│   ├── init-database.js
│   ├── test-db-connection.js
│   └── ...
│
├── payload.config.ts                # Payload configuration
├── next.config.mjs                  # Next.js configuration
├── tailwind.config.ts               # TailwindCSS configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json
```

## 🔐 Authentication & Access Control

### User Roles

Payload CMS використовує custom Users collection з двома ролями:

#### **Admin**
- ✅ Повний доступ до адмін-панелі
- ✅ Керування site settings (maintenance mode, etc.)
- ✅ CRUD для всіх collections
- ✅ Керування користувачами (створення admin/manager)
- ✅ Доступ до сайту під час maintenance mode

#### **Manager**
- ✅ CRUD для контенту (Testimonials, Articles, etc.)
- ❌ Немає доступу до site settings
- ❌ Немає доступу до керування користувачами
- ❌ Не може доступитись до сайту під час maintenance mode

### Access Control Flow

```
User Request
     │
     ▼
┌─────────────────────────┐
│ Next.js Middleware       │
│ (src/middleware.ts)      │
└────────┬────────────────┘
         │
         ├─→ Is maintenance mode ON?
         │       │
         │       ├─→ YES + NOT authenticated → /coming-soon
         │       ├─→ YES + Admin → Allow access
         │       └─→ YES + Manager → /coming-soon
         │
         └─→ NO → Allow access (public)
```

## 🌍 i18n (Internationalization)

### Supported Languages
- **Ukrainian (uk)** - Primary language (no URL prefix)
- **English (en)** - Secondary language (`/en/*` prefix) - future

### Implementation

**Payload Collections:**
- `i18n: true` в конфігурації collection
- `localization: 'uk'` як default locale
- Поля можуть мати різні значення для кожної мови

**Frontend:**
- URL structure:
  - Ukrainian: `/` (default)
  - English: `/en/*` (future implementation)
- Language toggle UI - буде додано в майбутньому

## 🗄️ Database Schema

### Collections

#### **Users**
```typescript
{
  email: string
  password: string (hashed)
  name: string
  role: 'admin' | 'manager'
  createdAt: Date
  updatedAt: Date
}
```

#### **Testimonials**
```typescript
{
  name: string
  title?: string
  content: string
  photo?: Media (R2)
  socialLinks?: {
    linkedIn?: string
    facebook?: string
    telegram?: string
  }
  date: Date
  locale: 'uk' | 'en'
  createdAt: Date
  updatedAt: Date
}
```

#### **Media**
```typescript
{
  filename: string
  mimeType: string
  filesize: number
  width?: number
  height?: number
  url: string (R2 CDN)
  createdAt: Date
  updatedAt: Date
}
```

## 🚀 Performance Optimization

### 1. Server Components
- Усі сторінки - Server Components за замовчуванням
- Client components тільки де потрібна інтерактивність
- Зменшує JavaScript bundle на клієнті

### 2. Image Optimization
- Next.js Image component для всіх зображень
- Automatic WebP/AVIF conversion
- Lazy loading за замовчуванням
- Responsive images з srcset

### 3. Caching Strategy
- ISR (Incremental Static Regeneration) для сторінок
- Payload API з cache headers
- CDN для статичних assets (Vercel Edge)

### 4. Code Splitting
- Automatic з App Router
- Динамічні imports для важких компонентів
- Route-based splitting

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────┐
│                   Browser Request                   │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│              Next.js App Router                     │
│  ┌─────────────────────────────────────────────┐   │
│  │  Server Component (page.tsx)                │   │
│  │  - Fetch data from Payload                 │   │
│  │  - Server-side rendering                   │   │
│  │  - SEO metadata generation                 │   │
│  └─────────────────────────────────────────────┘   │
│                       │                             │
│                       ▼                             │
│  ┌─────────────────────────────────────────────┐   │
│  │  Payload Local API                          │   │
│  │  - Query collections                        │   │
│  │  - Apply access control                    │   │
│  │  - Return typed data                       │   │
│  └─────────────────────────────────────────────┘   │
│                       │                             │
│                       ▼                             │
│  ┌─────────────────────────────────────────────┐   │
│  │  PostgreSQL (Supabase)                      │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│              HTML Response to Client                │
│  - Rendered markup                                  │
│  - SEO metadata                                     │
│  - Minimal JavaScript                              │
└─────────────────────────────────────────────────────┘
```

## 🔒 Security

### 1. Authentication
- Payload built-in auth (JWT tokens)
- HTTP-only cookies
- Password hashing з bcrypt

### 2. Access Control
- Role-based access control (RBAC)
- Middleware для route protection
- Collection-level permissions

### 3. Environment Variables
- Never commit `.env*` files
- Different configs for local/production
- Secrets в Vercel Environment Variables

### 4. CORS
- Configured в Next.js config
- Whitelisted origins only
- Credentials support

## 📦 Deployment Architecture

### Vercel Deployment
```
GitHub Repository
       │
       ▼ (push to main)
┌──────────────┐
│   Vercel     │
│  (CI/CD)     │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│  Build Process                   │
│  - npm install                   │
│  - npm run build                 │
│  - Generate Payload types        │
└──────────────┬───────────────────┘
               │
               ▼
┌──────────────────────────────────┐
│  Deployment                     │
│  - Next.js serverless functions  │
│  - Edge Network caching          │
│  - Automatic HTTPS               │
└──────────────────────────────────┘
```

### Infrastructure
- **Compute**: Vercel Serverless Functions
- **Database**: Supabase PostgreSQL (managed)
- **Storage**: Cloudflare R2 (S3-compatible)
- **CDN**: Vercel Edge Network
- **DNS**: Cloudflare (optional)

## 🧪 Testing Strategy

### Unit Tests (future)
- Component testing з React Testing Library
- Utility function tests
- Payload collection hooks

### Integration Tests (future)
- API route handlers
- Database operations
- Form submissions

### E2E Tests (future)
- Critical user flows
- Cross-browser testing
- Mobile responsiveness

## 📝 Development Workflow

```
1. Create branch: git checkout -b feature/feature-name
2. Make changes
3. Test locally: npm run dev
4. Run migrations: npm run migrate
5. Commit: git commit -m "feat: description"
6. Push: git push origin feature/feature-name
7. Create PR
8. Review & merge
9. Auto-deploy to Vercel
```

## 🔮 Future Enhancements

### Phase 1 (Near-term)
- [ ] Access Control implementation (maintenance mode)
- [ ] SEO Optimization (sitemap, robots.txt)
- [ ] Blog functionality (Articles collection)

### Phase 2 (Mid-term)
- [ ] English language support (/en/*)
- [ ] Search functionality
- [ ] Advanced analytics

### Phase 3 (Long-term)
- [ ] TailwindCSS v4.1 migration
- [ ] A/B testing framework
- [ ] Progressive Web App (PWA)

---

**Last Updated**: 2025-02-03
**Architecture Version**: 2.0 (Next.js + Payload)
**Previous Architecture**: Vite + Express + Strapi (deprecated)
