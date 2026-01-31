# Next.js + Payload CMS Migration - Detailed Checklist

Use this checklist to track progress during migration. Check off items as you complete them.

## 📊 Migration Progress Dashboard

- **Overall Progress**: 0% complete
- **Current Phase**: Not started
- **Branch**: `migration/nextjs-payload`
- **Start Date**: ___
- **Estimated Completion**: ___

---

## Phase 0: Preparation & Planning (0.5 day)

**Goal**: Setup environment and create migration branch

### Git & Backup
- [✓] Create backup branch: `git checkout -b backup-before-migration`
- [✓] Create migration branch: `git checkout -b migration/nextjs-payload`
- [✓] Test current site functionality (all pages, forms)
- [✓] Document current working state

### Environment Variables
- [✓] Document all `.env` variables
- [✓] Document all `frontend/.env.local` variables
- [✓] Document all `cms/.env` variables
- [✓] Create template `.env.example` for new structure

### Database
- [✓] Test local PostgreSQL connection
- [✓] Document Supabase connection details
- [✓] Backup Supabase database (export data)
- [✕] Export Strapi content (if any important data)

### Documentation
- [✕] Review current API endpoints
- [✕] List all pages and their routes
- [✕] Document current features and functionality
- [✕] Note any custom logic or edge cases
- [✕] Document i18n requirements (uk, en support)

**i18n Requirements**:
- Primary language: Ukrainian (uk)
- Secondary language: English (en)
- Payload collections: i18n enabled for content types
- Frontend: Architecture should support both languages from day one
- Language toggle UI: Will be added in future iterations
- URL structure: 
  - Ukrainian: `/` (default, no prefix)
  - English: `/en/*` (future implementation)

**Phase 0 Complete?** ⬜

**Notes**:
___

---

## Phase 1: Access Control Planning (0.5 day)

**Goal**: Finalize Payload Access Control implementation plan

### Planning
- [✕] Review Payload Access Control documentation
- [✕] Review Next.js Middleware documentation
- [✕] Sketch SiteSettings collection structure
- [✕] Plan middleware logic flow
- [✕] Plan ComingSoon page design

### Architecture Decisions
- [✓] Confirm SiteSettings fields
- [✓] Confirm auth approach (Payload built-in)
- [✓] Confirm user roles (admin, manager)
- [✓] Plan login page flow

### User Roles Specification
- **admin**: Full access
  - Manage site settings (maintenance mode, etc.)
  - Create/edit/delete all content
  - Manage users (create admin/manager accounts)
  - Access site during maintenance mode
- **manager**: Content management only
  - Create/edit/delete content
  - No access to site settings
  - No access to user management
  - Cannot access site during maintenance mode

**Phase 1 Complete?** ⬜

**Notes**:
___

---

## Phase 2: Next.js Base Setup (1 day)

**Goal**: Install Next.js and configure basic structure

### Installation
- [ ] Install Next.js 15: `npx create-next-app@latest . --typescript --tailwind --app`
- [ ] Accept prompt to overwrite (create in project root, not frontend folder)
- [ ] Install required dependencies
- [ ] Remove example files if not needed

### Configuration
- [ ] Configure `next.config.js`
- [ ] Configure `tsconfig.json` for Next.js
- [ ] Configure `tailwind.config.ts`
- [ ] Update `postcss.config.js` if needed

### Directory Structure
- [ ] Create `src/app/` directory structure
- [ ] Move `frontend/src/components/` to `src/components/`
- [ ] Create `src/lib/` directory
- [ ] Create `src/types/` directory

### Layout & Navigation
- [ ] Migrate `Layout` component to `src/app/layout.tsx`
- [ ] Migrate `Navbar` component
- [ ] Migrate `Footer` component
- [ ] Test navigation between pages

### Environment Variables
- [ ] Create `.env.local` for Next.js
- [ ] Configure `NEXT_PUBLIC_*` variables
- [ ] Test environment variable access

### Testing
- [ ] Run `npm run dev` successfully
- [ ] Access site at `http://localhost:3000`
- [ ] Test basic navigation
- [ ] Test responsive design

**Phase 2 Complete?** ⬜

**Files Created**:
- [ ] `src/app/layout.tsx`
- [ ] `src/app/page.tsx`
- [ ] `src/app/globals.css`
- [ ] `next.config.js`

**Notes**:
___

---

## Phase 3: Home Page Migration (1 day)

**Goal**: Migrate Home page with all components

### Component Migration
- [ ] Migrate `Hero` component
- [ ] Migrate `Features` component
- [ ] Migrate `Process` section
- [ ] Migrate `FAQ` section (if exists)
- [ ] Create placeholder `Testimonials` (will be dynamic later)

### Page Structure
- [ ] Create `src/app/page.tsx` (Home page)
- [ ] Import and render all components
- [ ] Verify component order and layout

### Styling
- [ ] Verify TailwindCSS classes work correctly
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Check spacing, colors, typography

### Assets
- [ ] Move image assets from `frontend/src/assets` to `public/`
- [ ] Update image import paths
- [ ] Test image loading

### SEO
- [ ] Add page title
- [ ] Add meta description
- [ ] Add Open Graph tags
- [ ] Add structured data (JSON-LD)

### Testing
- [ ] Test page loads correctly
- [ ] Test all links work
- [ ] Test mobile responsiveness
- [ ] Check console for errors

**Phase 3 Complete?** ⬜

**Files Created/Modified**:
- [ ] `src/app/page.tsx`
- [ ] `src/components/Hero.tsx` (migrated)
- [ ] `src/components/Features.tsx` (migrated)
- [ ] `public/` (assets moved)

**Notes**:
___

---

## Phase 4: Payload CMS Setup (1 day)

**Goal**: Install Payload CMS and create Testimonials collection

### Installation
- [ ] Install Payload: `npm install payload`
- [ ] Install PostgreSQL adapter (if needed)
- [ ] Install `dotenv` for environment variables

### Configuration
- [ ] Create `payload.config.ts`
- [ ] Configure database connection (local PostgreSQL)
- [ ] Configure admin panel settings
- [ ] Configure CORS settings

### Testimonials Collection
- [ ] Create `src/collections/Testimonials.ts`
- [ ] Define all fields (Name, Title, Photo, etc.)
- [ ] Configure i18n (uk, en locales)
- [ ] Set up access control (read: public, write: admin)

### Database Setup
- [ ] Create local database: `createdb ways2spain_payload`
- [ ] Test database connection
- [ ] Run initial migration
- [ ] Verify tables created

### Admin Panel
- [ ] Create admin user
- [ ] Access admin panel at `http://localhost:3000/admin`
- [ ] Test login
- [ ] Test create/update/delete testimonials

### Media Setup (Temporary)
- [ ] Configure local media storage
- [ ] Test image upload
- [ ] Verify images display correctly

**Phase 4 Complete?** ⬜

**Files Created**:
- [ ] `payload.config.ts`
- [ ] `src/collections/Testimonials.ts`
- [ ] `src/collections/Users.ts`
- [ ] `src/types/payload.ts` (generated)

**Notes**:
___

---

## Phase 5: Dynamic Testimonials Component (0.5 day)

**Goal**: Connect Home page to Payload Testimonials

### API Client
- [ ] Create `src/lib/payload.ts` (Payload API client)
- [ ] Create `getTestimonials()` function
- [ ] Handle error states
- [ ] Handle loading states

### Component Update
- [ ] Update `Testimonials` component to use Payload data
- [ ] Add loading spinner
- [ ] Add error message
- [ ] Test with real data

### Data Display
- [ ] Verify testimonial cards render correctly
- [ ] Test image loading from Payload
- [ ] Test social links display
- [ ] Test i18n (uk/en) switching

### Testing
- [ ] Test with no testimonials
- [ ] Test with one testimonial
- [ ] Test with multiple testimonials
- [ ] Test pagination (if needed)

**Phase 5 Complete?** ⬜

**Files Modified**:
- [ ] `src/components/Testimonials.tsx`
- [ ] `src/lib/payload.ts`

**Notes**:
___

---

## Phase 6: Contact Page & Express Replacement (1 day)

**Goal**: Migrate Contact page and replace Express backend

### Page Migration
- [ ] Migrate Contact page UI to `src/app/contact/page.tsx`
- [ ] Update component imports
- [ ] Verify form layout matches current design

### API Route Handler
- [ ] Create `src/app/api/contact/route.ts`
- [ ] Implement POST handler
- [ ] Add request validation
- [ ] Add error handling

### Integrations
- [ ] Migrate nodemailer integration
- [ ] Migrate Notion integration
- [ ] Migrate Telegram alerts
- [ ] Test all integrations

### Form Functionality
- [ ] Test form submission
- [ ] Test email sending
- [ ] Test Notion update
- [ ] Test Telegram alerts
- [ ] Test error handling

### Cleanup
- [ ] Verify Express backend no longer needed
- [ ] Document Express deprecation

**Phase 6 Complete?** ⬜

**Files Created**:
- [ ] `src/app/contact/page.tsx`
- [ ] `src/app/api/contact/route.ts`

**Notes**:
___

---

## Phase 7: About Page (0.5 day)

**Goal**: Migrate About page

- [ ] Migrate About page content
- [ ] Create `src/app/about/page.tsx`
- [ ] Verify responsive design
- [ ] Add SEO meta tags
- [ ] Test page loads correctly

**Phase 7 Complete?** ⬜

**Notes**:
___

---

## Phase 8: Services Pages (1 day)

**Goal**: Migrate Services and ServiceDetail pages

### Services List
- [ ] Migrate Services listing page
- [ ] Create `src/app/services/page.tsx`
- [ ] Verify card layout

### Service Detail
- [ ] Migrate ServiceDetail page
- [ ] Create `src/app/services/[id]/page.tsx`
- [ ] Setup dynamic routing
- [ ] Test with different service IDs
- [ ] Add SEO meta tags for each service

**Phase 8 Complete?** ⬜

**Notes**:
___

---

## Phase 9: Blog & Dynamic Routes (1 day)

**Goal**: Migrate Blog pages with dynamic routes

### Payload Articles Collection
- [ ] Create `src/collections/Articles.ts`
- [ ] Define fields (title, content, featuredImage, publishedDate)
- [ ] Configure i18n
- [ ] Set up slug generation

### Blog Listing
- [ ] Migrate Blog listing page
- [ ] Create `src/app/blog/page.tsx`
- [ ] Fetch articles from Payload
- [ ] Implement pagination

### Blog Post
- [ ] Migrate BlogPost page
- [ ] Create `src/app/blog/[id]/page.tsx`
- [ ] Setup dynamic routing by slug
- [ ] Render article content
- [ ] Add SEO meta tags

### Testing
- [ ] Test with no articles
- [ ] Test with one article
- [ ] Test with multiple articles
- [ ] Test pagination

**Phase 9 Complete?** ⬜

**Notes**:
___

---

## Phase 10: Other Pages (1 day)

**Goal**: Migrate remaining pages

- [ ] Migrate Visa page → `src/app/visa/page.tsx`
- [ ] Migrate Calculator page → `src/app/calculator/page.tsx`
- [ ] Migrate Consultation page → `src/app/consultation/page.tsx`
- [ ] Create NotFound page → `src/app/not-found.tsx`
- [ ] Ensure all pages have SEO meta tags
- [ ] Test all pages load correctly

**Phase 10 Complete?** ⬜

**Notes**:
___

---

## Phase 11: Cloudflare R2 Integration (0.5 day)

**Goal**: Configure media storage

### Cloudflare Setup
- [ ] Create Cloudflare R2 bucket
- [ ] Generate API tokens
- [ ] Configure CORS on R2 bucket

### Payload Configuration
- [ ] Install R2 adapter
- [ ] Configure Payload to use R2
- [ ] Update media upload settings

### Testing
- [ ] Upload test image
- [ ] Verify image URL
- [ ] Test image display on site
- [ ] Migrate existing media from Strapi

**Phase 11 Complete?** ⬜

**Notes**:
___

---

## Phase 12: SEO Optimization (1 day)

**Goal**: Implement comprehensive SEO

### Meta Tags
- [ ] Add dynamic meta tags to all pages
- [ ] Add Open Graph images
- [ ] Add Twitter cards
- [ ] Add canonical URLs

### Structured Data
- [ ] Implement JSON-LD for organization
- [ ] Implement JSON-LD for articles
- [ ] Implement JSON-LD for services
- [ ] Test with Google Rich Results Test

### Sitemap & Robots
- [ ] Create `src/app/sitemap.ts`
- [ ] Create `src/app/robots.ts`
- [ ] Test sitemap at `/sitemap.xml`
- [ ] Test robots.txt

### Performance
- [ ] Run Lighthouse audit
- [ ] Fix performance issues
- [ ] Optimize images
- [ ] Enable caching

**Phase 12 Complete?** ⬜

**Notes**:
___

---

## Phase 13: Access Control Implementation (1 day)

**Goal**: Implement Payload-based maintenance mode

### SiteSettings Collection
- [ ] Create `src/collections/SiteSettings.ts`
- [ ] Add maintenanceMode field
- [ ] Add maintenanceMessage field
- [ ] Configure access control

### Middleware
- [ ] Create `src/middleware.ts`
- [ ] Implement maintenance mode check
- [ ] Implement authentication check
- [ ] Test redirect logic

### ComingSoon Page
- [ ] Create `src/app/coming-soon/page.tsx`
- [ ] Design responsive layout
- [ ] Add social links

### Login Page
- [ ] Create `src/app/login/page.tsx`
- [ ] Create login form
- [ ] Implement authentication
- [ ] Test login flow

### API Route
- [ ] Create `src/app/api/site-settings/route.ts`
- [ ] Test settings retrieval

### Testing
- [ ] Test maintenance mode OFF → public site accessible
- [ ] Test maintenance mode ON → redirected to coming-soon
- [ ] Test admin login
- [ ] Test admin can access site during maintenance
- [ ] Test admin can toggle maintenance mode

**Phase 13 Complete?** ⬜

**Notes**:
___

---

## Phase 14: Testing & QA (1 day)

**Goal**: Comprehensive testing

### Functional Testing
- [ ] Test all pages load correctly
- [ ] Test all forms work
- [ ] Test all links work
- [ ] Test admin panel functionality
- [ ] Test login/logout

### Responsive Testing
- [ ] Test on mobile (320px+)
- [ ] Test on tablet (768px+)
- [ ] Test on desktop (1024px+)
- [ ] Test on ultra-wide (1440px+)

### Browser Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge

### SEO Testing
- [ ] Test meta tags
- [ ] Test structured data
- [ ] Test sitemap
- [ ] Test robots.txt

### Performance Testing
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Check Core Web Vitals
- [ ] Test load time
- [ ] Optimize if needed

### Accessibility Testing
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility
- [ ] Check color contrast
- [ ] Test ARIA labels

**Phase 14 Complete?** ⬜

**Test Report Created?** ⬜

**Notes**:
___

---

## Phase 15: Vercel Deployment (0.5 day)

**Goal**: Deploy to Vercel preview

### Preparation
- [ ] Create `.env.production` template
- [ ] Document all production environment variables
- [ ] Prepare Supabase production connection

### Vercel Setup
- [ ] Connect GitHub repository to Vercel
- [ ] Configure build settings
- [ ] Set root directory to project root
- [ ] Configure environment variables on Vercel

### Preview Deployment
- [ ] Deploy `migration/nextjs-payload` branch
- [ ] Test preview URL
- [ ] Test all functionality on preview
- [ ] Share preview with stakeholders

**Phase 15 Complete?** ⬜

**Preview URL**: ___

**Notes**:
___

---

## Phase 16: Production Deployment (0.5 day)

**Goal**: Deploy to production

### Final Checks
- [ ] All tests pass
- [ ] Preview deployment approved
- [ ] Stakeholder sign-off received
- [ ] DNS settings ready

### Deployment
- [ ] Merge `migration/nextjs-payload` → `main`
- [ ] Automatic Vercel deployment triggers
- [ ] Monitor deployment logs
- [ ] Verify production site works

### Post-Deployment
- [ ] Test production URL
- [ ] Test all pages
- [ ] Test all forms
- [ ] Test admin panel
- [ ] Monitor for errors

### DNS Update (if needed)
- [ ] Update DNS records
- [ ] Wait for propagation
- [ ] Test on production domain
- [ ] Monitor SSL certificate

**Phase 16 Complete?** ⬜

**Production URL**: https://ways2spain.com

**Notes**:
___

---

## Phase 17: Cleanup & Documentation (0.5 day)

**Goal**: Remove old code and document changes

### Code Cleanup
- [ ] Remove `frontend/` directory
- [ ] Remove `backend-express/` directory
- [ ] Remove `cms/` directory
- [ ] Remove `.vercel/` old configurations
- [ ] Update `package.json` scripts

### Documentation
- [ ] Update README.md
- [ ] Document new architecture
- [ ] Document deployment process
- [ ] Document local development setup
- [ ] Create CONTRIBUTING.md

### Git Cleanup
- [ ] Delete old branches
- [ ] Archive old pull requests
- [ ] Update repository description
- [ ] Create release notes

### Database Cleanup
- [ ] Remove old Strapi tables (if safe)
- [ ] Remove old Express data (if safe)
- [ ] Backup production database

**Phase 17 Complete?** ⬜

**Notes**:
___

---

## Phase 18: TailwindCSS v4.1 Migration (Optional)

**Goal**: Upgrade to TailwindCSS v4.1 for better performance and modern CSS features

**When**: After successful production deployment (1 day)

**Benefits**:
- CSS-first configuration (no config files needed)
- Better performance and smaller bundle size
- New utilities: text-shadow, mask, colored drop-shadows
- Improved browser compatibility
- Modern CSS features

### Installation
- [ ] Install TailwindCSS v4.1: `npm install tailwindcss@latest @tailwindcss/postcss@latest`
- [ ] Update postcss.config.js for v4 plugin

### CSS Migration
- [ ] Replace `@tailwind` directives with `@import "tailwindcss"`
- [ ] Convert theme config to CSS `@theme` block
- [ ] Update custom animations to CSS keyframes
- [ ] Remove tailwind.config.ts file
- [ ] Update @tailwindcss/typography if needed

### Testing
- [ ] Test all shadcn/ui components
- [ ] Test custom utilities
- [ ] Test responsive design
- [ ] Test dark mode (if implemented)
- [ ] Cross-browser testing
- [ ] Performance testing
- [ ] Production build test

### New Features (Optional to Implement)
- [ ] Text shadows: `text-shadow-md`, `text-shadow-lg`
- [ ] Mask utilities: `mask-b-from-50%`
- [ ] Overflow wrapping: `wrap-break-word`
- [ ] Pointer variants: `pointer-fine:`, `pointer-coarse:`
- [ ] Safe alignment: `justify-center-safe`
- [ ] Form validation: `user-valid:border-green-500`

### Documentation
- [ ] Update README with TailwindCSS v4.1 info
- [ ] Document any breaking changes
- [ ] Update component examples if needed

**Phase 18 Complete?** ⬜

**Notes**:
___

---

## 🎉 Migration Complete!

### Final Verification
- [ ] All pages working
- [ ] All features functional
- [ ] SEO optimized
- [ ] Performance targets met
- [ ] No critical bugs
- [ ] Documentation complete
- [ ] Stakeholders satisfied

### Metrics
- **Total Duration**: ___ days
- **Actual vs Estimated**: ___
- **Issues Encountered**: ___
- **Lessons Learned**: ___

---

## 📝 Quick Reference

### Useful Commands
```bash
# Development
npm run dev

# Build
npm run build
npm start

# Database
npx payload migrate:refresh

# Types
npx payload generate:types
```

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection
- `PAYLOAD_SECRET` - Payload encryption
- `NEXT_PUBLIC_SERVER_URL` - Site URL

### Important URLs
- Local: http://localhost:3000
- Admin: http://localhost:3000/admin
- Preview: [Vercel preview URL]
- Production: https://ways2spain.com

---

**Last Updated**: ___
**Migration Started**: ___
**Migration Completed**: ___
**Total Time**: ___
