# Next.js + Payload CMS Migration Plan

## 📋 Overview

This document outlines the complete migration strategy from the current Vite + React + Express + Strapi architecture to Next.js + Payload CMS.

### Current Architecture
```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Vite      │     │   Express    │     │   Strapi    │
│  (Frontend) │────▶│  (Backend)   │────▶│    (CMS)    │
│  :8080      │     │   :3001      │     │   :1337     │
└─────────────┘     └──────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Supabase   │
                    │  (Database) │
                    └─────────────┘
```

### Target Architecture
```
┌─────────────────────────────────────────────────────┐
│              Next.js + Payload CMS                 │
│                   (Single Server)                  │
│                      :3000                         │
│                                                     │
│  ┌────────────┐  ┌────────────┐  ┌─────────────┐  │
│  │   Pages    │  │     API    │  │   Payload   │  │
│  │  (App Dir) │  │  (Routes)  │  │    Admin    │  │
│  └────────────┘  └────────────┘  └─────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Supabase   │
                    │ (Production)│
                    └─────────────┘
                    ┌─────────────┐
                    │   Local     │
                    │ PostgreSQL  │
                    └─────────────┘
```

## 🎯 Migration Goals

1. **Single Server**: Run everything with one `npm run dev` command
2. **Single Deployment**: Deploy to one Vercel project instead of three separate deployments
3. **Better SEO**: Implement SSR/SSG for all pages
4. **Simpler Auth**: Replace custom Express auth with Payload's built-in access control
5. **Better Migrations**: Replace Strapi's problematic auto-sync with Payload's migration system
6. **Cost Efficiency**: Keep everything on free tiers (Vercel, Supabase)
7. **Local Development**: Use local PostgreSQL for development
8. **Multilingual Support**: Architecture should support Ukrainian (primary) and English languages from day one. Frontend language toggle UI will be added in future iterations.

## 🛠 Technology Stack

### Frontend
- **Next.js 15** with App Router
- **React 18** with Server Components
- **TypeScript**
- **TailwindCSS** (existing configuration)
- **shadcn/ui** components (existing)
- **next-intl** or custom i18n solution for multilingual support (uk, en)

### Backend/CMS
- **Payload CMS 3** (latest)
- **Next.js Route Handlers** (replace Express)

### i18n (Internationalization)
- **Supported Languages**: Ukrainian (uk) - primary, English (en)
- **Implementation**: Payload collections have i18n enabled for content
- **Frontend**: Architecture will support both languages from day one
- **Language Toggle**: UI component will be added in future iterations
- **URL Structure**: 
  - Ukrainian: `/` (default, no prefix)
  - English: `/en/*` (future implementation)

### Database
- **Local**: PostgreSQL for development
- **Production**: Supabase PostgreSQL

### Storage
- **Cloudflare R2** for media files

### Deployment
- **Vercel** (single project)
- **GitHub** (git flow with feature branches)

## 📦 Content Types (from Strapi)

1. **Testimonials** (already exists)
   - Name, Title, Photo, Testimonial text
   - Social links (Telegram, Facebook, Instagram, LinkedIn)
   - Date
   - i18n enabled (uk, en)

2. **Articles** (future, for blog)
   - Title, Content, Featured Image
   - Published Date
   - i18n enabled

## 🚀 Migration Phases

### Phase 0: Preparation & Planning
**Time**: 0.5 day
**Goal**: Setup environment and create migration branch

- [ ] Create git branch `migration/nextjs-payload`
- [ ] Backup current working state
- [ ] Review all environment variables
- [ ] Document current API endpoints
- [ ] Setup local PostgreSQL for Payload

**Deliverables**: Clean git branch, documentation of current state

---

### Phase 1: Payload Access Control & Maintenance Mode Planning
**Time**: 0.5 day
**Goal**: Plan Payload Access Control implementation

**Decision**: Use Payload Access Control with SiteSettings collection

**Architecture**:
```
SiteSettings Collection (Payload)
├── maintenanceMode: boolean
├── maintenanceMessage: textarea
└── Global settings

User Roles:
├── admin: Full access to all features and settings
│   - Manage site settings (maintenance mode, etc.)
│   - Create/edit/delete all content
│   - Manage users (create admin/manager accounts)
│   - Access admin panel during maintenance
└── manager: Limited access to content management only
    - Create/edit/delete content (Testimonials, Articles, etc.)
    - No access to site settings
    - No access to user management
    - Cannot access site during maintenance mode

Access Control Flow:
┌─────────────────┐
│ User visits site│
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐
│ Next.js Middleware       │
│ Checks:                  │
│ 1. Is maintenanceMode on?│
│ 2. Is user authenticated?│
│ 3. What is user role?    │
└────────┬────────────────┘
         │
         ├─→ Maintenance ON + NOT Auth → ComingSoon Page
         ├─→ Maintenance ON + Auth(admin) → Full Site
         ├─→ Maintenance ON + Auth(manager) → ComingSoon Page (restricted)
         │
         └─→ Maintenance OFF → Full Site (public access)
```

**Components to Create**:
- SiteSettings collection (Payload)
- Users collection with role-based access control
- Next.js Middleware
- ComingSoon Page
- Login Page (for admin and manager access)

**Deliverables**: Detailed implementation plan for Phase 13

---

### Phase 2: Next.js Base Setup
**Time**: 1 day
**Goal**: Install Next.js and configure basic structure

- [ ] Install Next.js 15 in project root
- [ ] Configure TypeScript for Next.js
- [ ] Setup TailwindCSS for Next.js
- [ ] Create App Router directory structure
- [ ] Migrate Layout component (Navbar + Footer)
- [ ] Configure environment variables
- [ ] Test local development server

**Files to create**:
```
src/app/
├── layout.tsx          # Root layout with Navbar/Footer
├── page.tsx            # Home page placeholder
├── globals.css         # Global styles
└── coming-soon/
    └── page.tsx        # ComingSoon page
```

**Deliverables**: Next.js server running locally with basic layout

---

### Phase 3: Home Page Migration
**Time**: 1 day
**Goal**: Migrate Home page with all components

- [ ] Migrate Hero component
- [ ] Migrate Features component
- [ ] Create placeholder Testimonials (will be dynamic later)
- [ ] Migrate Process section
- [ ] Migrate FAQ section (if exists)
- [ ] Ensure responsive design matches current site
- [ ] Test SEO meta tags

**Files to create**:
```
src/app/page.tsx              # Home page
src/components/
├── Hero.tsx                  # Migrated
├── Features.tsx              # Migrated
└── Process.tsx               # If exists
```

**Deliverables**: Fully functional Home page matching current design

---

### Phase 4: Payload CMS Setup
**Time**: 1 day
**Goal**: Install Payload CMS and create Testimonials collection

- [ ] Install Payload CMS
- [ ] Create Payload config file
- [ ] Configure database connection (local + Supabase)
- [ ] Create Users collection with role-based access control
- [ ] Create Testimonials collection
- [ ] Configure i18n (uk, en locales)
- [ ] Setup Cloudflare R2 for media storage
- [ ] Create admin user
- [ ] Test CRUD operations in admin panel

**Files to create**:
```
payload.config.ts
src/collections/
├── Users.ts                    # Custom Users collection with roles
└── Testimonials.ts
src/app/admin/[[...slug]]/route.ts  # Payload admin route
```

**Users Collection Structure**:
```typescript
// src/collections/Users.ts
{
  fields: [
    // Built-in fields: email, password
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'Admin', value: 'admin' },     // Full access
        { label: 'Manager', value: 'manager' }, // Content management only
      ],
      defaultValue: 'manager',
      admin: {
        description: 'Admin: Full access including settings. Manager: Content management only.',
      },
    },
  ],
  access: {
    read: () => true, // Public read (for authenticated context)
    update: ({ req }) => {
      const user = req.user;
      if (!user) return false;
      // Admins can update any user
      // Managers can only update themselves
      return user.role === 'admin' || user.id === req.user.id;
    },
    delete: ({ req }) => {
      // Only admins can delete users
      const user = req.user;
      if (!user) return false;
      return user.role === 'admin';
    },
  },
}
```

**Deliverables**: Working Payload admin with Testimonials collection and role-based Users

---

### Phase 5: Dynamic Testimonials Component
**Time**: 0.5 day
**Goal**: Connect Home page to Payload Testimonials

- [ ] Create API client for Payload
- [ ] Fetch testimonials from Payload
- [ ] Update Testimonials component to use Payload data
- [ ] Handle loading states
- [ ] Handle error states
- [ ] Test with real data

**Files to modify**:
```
src/components/Testimonials.tsx
src/lib/payload.ts  # API client
```

**Deliverables**: Home page showing real testimonials from Payload

---

### Phase 6: Contact Page Migration + Express Replacement
**Time**: 1 day
**Goal**: Migrate Contact page and replace Express backend

- [ ] Migrate Contact page UI
- [ ] Create Next.js Route Handler for `/api/contact`
- [ ] Migrate nodemailer integration
- [ ] Migrate Notion integration
- [ ] Migrate Telegram alerts
- [ ] Test form submission

**Files to create**:
```
src/app/contact/page.tsx          # Contact page
src/app/api/contact/route.ts      # API handler
```

**Files to remove**:
```
backend-express/                  # After migration is complete
```

**Deliverables**: Working contact form with all integrations

---

### Phase 7: About Page Migration
**Time**: 0.5 day
**Goal**: Migrate About page

- [ ] Migrate About page content
- [ ] Ensure responsive design
- [ ] Add SEO meta tags

**Files to create**:
```
src/app/about/page.tsx
```

**Deliverables**: Fully functional About page

---

### Phase 8: Services Pages Migration
**Time**: 1 day
**Goal**: Migrate Services and ServiceDetail pages

- [ ] Migrate Services listing page
- [ ] Migrate ServiceDetail dynamic page
- [ ] Setup dynamic routes: `/services/[id]`
- [ ] Ensure responsive design
- [ ] Add SEO meta tags for each service

**Files to create**:
```
src/app/services/page.tsx
src/app/services/[id]/page.tsx
```

**Deliverables**: Fully functional services pages

---

### Phase 9: Blog & Dynamic Routes
**Time**: 1 day
**Goal**: Migrate Blog pages with dynamic routes

- [ ] Create Articles collection in Payload
- [ ] Migrate Blog listing page
- [ ] Migrate BlogPost dynamic page
- [ ] Setup dynamic routes: `/blog/[id]`
- [ ] Add SEO meta tags for each article
- [ ] Implement article pagination

**Files to create**:
```
src/collections/Articles.ts
src/app/blog/page.tsx
src/app/blog/[id]/page.tsx
```

**Deliverables**: Fully functional blog with dynamic articles

---

### Phase 10: Other Pages Migration
**Time**: 1 day
**Goal**: Migrate remaining pages

- [ ] Migrate Visa page
- [ ] Migrate Calculator page (placeholder)
- [ ] Migrate Consultation page
- [ ] Migrate NotFound page
- [ ] Ensure all pages have proper SEO

**Files to create**:
```
src/app/visa/page.tsx
src/app/calculator/page.tsx
src/app/consultation/page.tsx
src/app/not-found.tsx
```

**Deliverables**: All pages migrated

---

### Phase 11: Cloudflare R2 Integration
**Time**: 0.5 day
**Goal**: Configure media storage

- [ ] Setup Cloudflare R2 bucket
- [ ] Configure Payload to use R2
- [ ] Upload existing media from Strapi
- [ ] Test image uploads
- [ ] Configure CDN for images

**Deliverables**: All media stored in Cloudflare R2

---

### Phase 12: SEO Optimization
**Time**: 1 day
**Goal**: Implement comprehensive SEO

- [ ] Add dynamic meta tags for all pages
- [ ] Implement structured data (JSON-LD)
- [ ] Add sitemap generation
- [ ] Add robots.txt
- [ ] Configure Open Graph images
- [ ] Add canonical URLs
- [ ] Implement breadcrumbs

**Files to create**:
```
src/app/sitemap.ts
src/app/robots.ts
src/lib/seo.ts  # SEO helper functions
```

**Deliverables**: Fully SEO-optimized site

---

### Phase 13: Payload Access Control & Maintenance Mode Implementation
**Time**: 1 day
**Goal**: Implement Payload-based access control with Maintenance Mode

**Step 1: Create SiteSettings Collection**

```typescript
// src/collections/SiteSettings.ts
import { CollectionConfig } from 'payload';

export const SiteSettings: CollectionConfig = {
  slug: 'site-settings',
  admin: {
    useAsTitle: 'title',
    group: 'Global',
  },
  access: {
    read: () => true,
    update: ({ req }) => {
      // Only admins can update site settings (not managers)
      const user = req.user;
      if (!user) return false;
      return user.role === 'admin'; // Only admin role, manager cannot update
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Ways2Spain',
    },
    {
      name: 'maintenanceMode',
      type: 'checkbox',
      defaultValue: false,
      label: 'Maintenance Mode',
      admin: {
        description: 'When enabled, only authenticated users can access the site',
      },
    },
    {
      name: 'maintenanceMessage',
      type: 'textarea',
      label: 'Maintenance Message',
      defaultValue: 'Ми працюємо над оновленням сайту. Завітайте пізніше!',
      admin: {
        condition: (data, siblingData) => siblingData.maintenanceMode === true,
      },
    },
    {
      name: 'socialLinks',
      type: 'tabs',
      tabs: [
        {
          label: 'Instagram',
          fields: [
            {
              name: 'instagram',
              type: 'text',
              label: 'Instagram URL',
            },
          ],
        },
        {
          label: 'Facebook',
          fields: [
            {
              name: 'facebook',
              type: 'text',
              label: 'Facebook URL',
            },
          ],
        },
        {
          label: 'Telegram',
          fields: [
            {
              name: 'telegram',
              type: 'text',
              label: 'Telegram URL',
            },
          ],
        },
      ],
    },
  ],
};
```

**Step 2: Create Next.js Middleware**

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for these paths
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/coming-soon') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  try {
    // Fetch site settings from Payload API
    const settingsResponse = await fetch(
      `${request.nextUrl.origin}/api/site-settings`,
      {
        cache: 'no-store', // Always fetch fresh settings
      }
    );

    if (settingsResponse.ok) {
      const settings = await settingsResponse.json();

      // Check if maintenance mode is enabled
      if (settings?.maintenanceMode === true) {
        // Check if user is authenticated
        const token = request.cookies.get('payload-token');

        if (!token) {
          // Redirect to coming-soon page
          const url = request.nextUrl.clone();
          url.pathname = '/coming-soon';
          return NextResponse.redirect(url);
        }
      }
    }
  } catch (error) {
    // If we can't fetch settings, allow access (fail open)
    console.error('Middleware error:', error);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|admin|coming-soon|login|_next|_vercel|.*\\..*).*)'],
};
```

**Step 3: Create ComingSoon Page**

```typescript
// src/app/coming-soon/page.tsx
import React from 'react';
import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🇪🇸 Ways2Spain
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ми працюємо над оновленням сайту
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-gray-500">
              Наша команда зараз працює над покращенням сайту для вас.
              Ми незабаром повернемось з оновленим контентом.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              href="/login"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Admin Login
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-400">
              © 2025 Ways2Spain. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Step 4: Create Login Page**

```typescript
// src/app/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        toast.success('Успішний вхід!');
        router.push('/');
        router.refresh();
      } else {
        const data = await response.json();
        toast.error(data.error || 'Помилка входу');
      }
    } catch (error) {
      toast.error('Помилка з\'єднання');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              🇪🇸 Ways2Spain Admin
            </h1>
            <p className="text-gray-600 mt-2">Увійдіть в адмін-панель</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="admin@ways2spain.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Пароль
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {isLoading ? 'Вхід...' : 'Увійти'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              ← Повернутись на сайт
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Step 5: Create API Route for SiteSettings**

```typescript
// src/app/api/site-settings/route.ts
import { NextResponse } from 'next/server';
import payload from 'payload';

export async function GET() {
  try {
    const settings = await payload.findGlobal({
      slug: 'site-settings',
    });

    return NextResponse.json(settings);
  } catch (error) {
    // Return default settings if not found
    return NextResponse.json({
      maintenanceMode: false,
      maintenanceMessage: 'Ми працюємо над оновленням сайту.',
    });
  }
}
```

**Step 6: Update Payload Config**

```typescript
// payload.config.ts
import { buildConfig } from 'payload/config';
import { SiteSettings } from './src/collections/SiteSettings';
import { Testimonials } from './src/collections/Testimonials';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    buildDir: 'dist/admin',
    css: '../src/app/globals.css',
  },
  collections: [
    Testimonials,
    SiteSettings,
  ],
  globals: [
    // Can be used for singletons
  ],
  typescript: {
    outputFile: './src/types/payload.ts',
  },
  plugins: [],
});
```

**Step 7: Testing**

1. Test maintenance mode OFF - public site accessible
2. Test maintenance mode ON - redirected to coming-soon
3. Test login with admin credentials
4. Test authenticated user can access site during maintenance
5. Test admin can toggle maintenance mode
6. Test mobile responsiveness of coming-soon page

**Files to Create**:
```
src/collections/SiteSettings.ts
src/middleware.ts
src/app/coming-soon/page.tsx
src/app/login/page.tsx
src/app/api/site-settings/route.ts
```

**Files to Update**:
```
payload.config.ts
src/types/payload.ts
```

**Deliverables**:
- ✅ Working maintenance mode controlled via Payload admin
- ✅ Public users see coming-soon page when maintenance is ON
- ✅ Authenticated admins can access full site during maintenance
- ✅ Admin login page
- ✅ Middleware for access control

---

### Phase 14: Testing & QA
**Time**: 1 day
**Goal**: Comprehensive testing

- [ ] Test all pages on local environment
- [ ] Test all forms (contact, login)
- [ ] Test admin panel functionality
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test cross-browser compatibility
- [ ] Test SEO (meta tags, structured data)
- [ ] Performance testing (Lighthouse)
- [ ] Accessibility testing

**Deliverables**: Complete test report

---

### Phase 15: Vercel Deployment
**Time**: 0.5 day
**Goal**: Deploy to Vercel preview

- [ ] Configure environment variables on Vercel
- [ ] Setup Supabase production connection
- [ ] Deploy to preview environment
- [ ] Test on preview URL
- [ ] Fix any deployment issues
- [ ] Setup custom domain (preview.ways2spain.com)

**Deliverables**: Working preview deployment

---

### Phase 16: Production Deployment
**Time**: 0.5 day
**Goal**: Deploy to production

- [ ] Final testing on preview
- [ ] Merge to main branch
- [ ] Deploy to production
- [ ] Configure custom domain (ways2spain.com)
- [ ] Test production deployment
- [ ] Monitor for issues

**Deliverables**: Live production site

---

### Phase 17: Cleanup & Documentation
**Time**: 0.5 day
**Goal**: Remove old code and document changes

- [ ] Remove `frontend/` directory (Vite)
- [ ] Remove `backend-express/` directory
- [ ] Remove `cms/` directory (Strapi)
- [ ] Update README
- [ ] Document new architecture
- [ ] Document deployment process
- [ ] Document local development setup
- [ ] Archive old branches

**Deliverables**: Clean repository with updated documentation

---

## ⏱ Total Time Estimate

- **Fast Track** (8 hours/day): 8-10 days
- **Normal Pace** (4 hours/day): 14-18 days
- **Part-time** (2 hours/day): 25-30 days

## ⚠️ Risks & Mitigation Strategies

### Risk 1: Breaking Existing Functionality
**Mitigation**:
- Migrate page by page
- Keep old code until new version is tested
- Use feature flags for gradual rollout
- Comprehensive testing before deleting old code

### Risk 2: SEO Impact During Migration
**Mitigation**:
- Keep all URL paths the same
- Implement proper redirects if paths change
- Maintain meta tags and structured data
- Test with Google Search Console

### Risk 3: Data Loss from Strapi
**Mitigation**:
- Backup Strapi database before migration
- Export all content via Strapi Data Transfer
- Test import to Payload before deletion
- Keep Strapi running until Payload is verified

### Risk 4: Downtime During Deployment
**Mitigation**:
- Deploy to preview environment first
- Use Vercel's zero-downtime deployments
- Have rollback plan ready
- Deploy during low-traffic hours

### Risk 5: Learning Curve Issues
**Mitigation**:
- Start with simple pages
- Reference Next.js documentation
- Use AI assistant for code review
- Test each phase thoroughly

## 🔄 Rollback Plan

If critical issues occur:

1. **Immediate Rollback** (5 minutes):
   ```bash
   git checkout main
   vercel --prod
   ```

2. **Database Rollback** (if needed):
   - Supabase has point-in-time recovery
   - Keep Strapi running as backup

3. **DNS Rollback** (if needed):
   - Change DNS back to old infrastructure
   - TTL set to 300 seconds for quick changes

## 📊 Success Criteria

Migration will be considered successful when:

- [ ] All pages from current site are migrated
- [ ] Design matches current site exactly
- [ ] All forms work correctly
- [ ] Admin panel is functional
- [ ] SEO scores are maintained or improved
- [ ] Site is deployed to production
- [ ] Performance is better or equal to current site
- [ ] No critical bugs remain
- [ ] Local development is simplified (single server)

## 📝 Checklist Before Starting

- [ ] Backup entire repository
- [ ] Document all environment variables
- [ ] Export Strapi content
- [ ] Backup Supabase database
- [ ] Notify stakeholders of upcoming changes
- [ ] Schedule deployment window
- [ ] Prepare rollback plan

## 🔗 Useful Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Next.js Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading)

### Payload CMS
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Payload Getting Started](https://payloadcms.com/docs/getting-started/what-is-payload)
- [Payload Collections](https://payloadcms.com/docs/configuration/collections)
- [Payload Access Control](https://payloadcms.com/docs/access-control/overview)
- [Payload Local API](https://payloadcms.com/docs/local-api/overview)

### Deployment
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)

### Cloudflare R2
- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)
- [Payload R2 Adapter](https://payloadcms.com/docs/admin/overview)

### Tools
- [Supabase PostgreSQL](https://supabase.com/docs/guides/database)
- [Payload Migrations](https://payloadcms.com/docs/admin/overview)

### Video Tutorials
- [Payload CMS Crash Course](https://www.youtube.com/watch?v=example)
- [Next.js 15 Tutorial](https://www.youtube.com/watch?v=example)

---

## 📚 Additional Documentation

### Environment Variables Reference

**Required Environment Variables:**

```bash
# Database (Production - Supabase)
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# Database (Local - PostgreSQL)
DATABASE_URL=postgresql://atamanov@localhost:5432/ways2spain

# Payload
PAYLOAD_SECRET=your-secret-key-here
NEXT_PUBLIC_SERVER_URL=https://ways2spain.com

# Cloudflare R2
R2_ACCOUNT_ID=your-account-id
R2_ACCESS_KEY_ID=your-access-key
R2_SECRET_ACCESS_KEY=your-secret-key
R2_BUCKET_NAME=ways2spain-media
R2_PUBLIC_URL=https://your-r2-domain.r2.dev

# Notion (for contact form)
NOTION_API_KEY=your-notion-token
NOTION_DATABASE_ID=your-database-id

# Gmail (for contact form)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Telegram (for alerts)
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

### File Structure Reference

**Final Project Structure:**

```
ways2spain-landing/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── page.tsx              # Home
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── visa/
│   │   │   │   └── page.tsx
│   │   │   ├── calculator/
│   │   │   │   └── page.tsx
│   │   │   └── consultation/
│   │   │       └── page.tsx
│   │   ├── admin/
│   │   │   └── [[...slug]]/
│   │   │       └── route.ts         # Payload admin
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   ├── site-settings/
│   │   │   │   └── route.ts
│   │   │   └── users/
│   │   │       └── login/
│   │   │           └── route.ts
│   │   ├── coming-soon/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Redirects to home
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── collections/
│   │   ├── Testimonials.ts
│   │   ├── Articles.ts
│   │   ├── SiteSettings.ts
│   │   └── Users.ts
│   ├── components/
│   │   ├── ui/                      # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── Testimonials.tsx
│   ├── lib/
│   │   ├── payload.ts               # Payload client
│   │   └── utils.ts
│   └── types/
│       └── payload.ts               # Generated types
├── public/                           # Static assets
├── payload.config.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Common Commands

**Development:**
```bash
npm run dev                    # Start Next.js dev server (port 3000)
```

**Build:**
```bash
npm run build                  # Build for production
npm start                      # Start production server
```

**Database:**
```bash
npx payload migrate:refresh    # Reset and recreate migrations
npx payload migrate:status     # Check migration status
```

**Admin:**
```bash
npx payload generate:types     # Generate TypeScript types
npx payload generate:sql       # Generate SQL for migrations
```

---

**Last Updated**: 2025-01-30
**Status**: Ready for Implementation
**Decision**: Payload Access Control with Maintenance Mode
**Next Step**: Begin Phase 0 - Create migration branch and prepare environment
