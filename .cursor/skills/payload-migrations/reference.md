# Payload CMS Migrations - Detailed Reference

This file contains comprehensive information about Payload CMS migrations. Refer to this when you need detailed explanations, troubleshooting steps, or advanced patterns.

## Table of Contents

- [Critical: Understanding Payload Migration System](#critical-understanding-payload-migration-system)
- [Philosophy](#philosophy-migrations-first-development)
- [Complete Workflow](#complete-step-by-step-workflow)
- [Advanced Scenarios](#advanced-scenarios)
- [Testing Strategy](#testing-strategy)
- [Production Deployment](#production-deployment)
- [Emergency Procedures](#emergency-procedures)

---

## Critical: Understanding Payload Migration System

### How Payload Migration Generator Works

When you run `npx payload migrate:create`, Payload does the following:

```
┌─────────────────────────────────────────────────────────────────┐
│                    PAYLOAD MIGRATION GENERATOR                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   [payload.config.ts]          [Last Snapshot JSON]              │
│         ↓                              ↓                         │
│   Current Schema              Previous Schema State              │
│   (Collections,               (Stored in migrations/*.json)      │
│    Fields, etc.)                                                 │
│         ↓                              ↓                         │
│         └──────────┬───────────────────┘                         │
│                    ↓                                             │
│              DIFF ANALYSIS                                       │
│                    ↓                                             │
│         ┌─────────────────────┐                                  │
│         │ Generated Migration │                                  │
│         │  - CREATE TABLE     │                                  │
│         │  - ALTER TABLE      │                                  │
│         │  - System tables    │                                  │
│         └─────────────────────┘                                  │
│                    ↓                                             │
│         ┌─────────────────────┐                                  │
│         │   New Snapshot JSON │ ← Saves current state            │
│         └─────────────────────┘                                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Why Manual Schema Migrations Break Things

**Problem Scenario:**
```
1. You create Categories collection manually:
   → Only CREATE TABLE categories
   → Missing: ALTER TABLE payload_locked_documents_rels ADD COLUMN categories_id
   → No snapshot JSON created

2. Result:
   → Category list works ✓
   → Category edit page is BLANK (Hydration Error) ✗
   → Payload can't lock documents for editing
```

**What Payload expects for EVERY collection:**
```sql
-- 1. Main table
CREATE TABLE categories (...);

-- 2. System table relation (CRITICAL!)
ALTER TABLE payload_locked_documents_rels 
ADD COLUMN categories_id integer REFERENCES categories(id) ON DELETE CASCADE;

-- 3. Index for the relation
CREATE INDEX payload_locked_documents_rels_categories_id_idx 
ON payload_locked_documents_rels(categories_id);
```

### The `payload_locked_documents_rels` Table

This table is used by Payload to:
- Lock documents when being edited (prevent concurrent edits)
- Track which user is editing which document
- Manage document state in admin panel

**Structure:**
```sql
payload_locked_documents_rels (
    id serial PRIMARY KEY,
    order integer,
    parent_id integer NOT NULL,  -- References payload_locked_documents
    path varchar NOT NULL,
    -- One column per collection:
    users_id integer,
    media_id integer,
    testimonials_id integer,
    categories_id integer,       -- ← Must exist for Categories collection!
    tags_id integer,             -- ← Must exist for Tags collection!
    payload_folders_id integer
)
```

**If a collection's column is missing:**
- Edit page renders but has no content (blank)
- Hydration errors in browser console
- Cannot save changes to documents

### Snapshot Files

When `migrate:create` runs, it creates TWO files:
```
src/migrations/
├── 20260203_212300_add-collection.ts   ← The migration SQL
└── 20260203_212300_add-collection.json ← SNAPSHOT of schema state
```

**The JSON snapshot is CRITICAL:**
- Payload uses it to compare "what was" vs "what is"
- If missing, next `migrate:create` generates FULL migration
- Must be committed to git with migration

### When Manual Migrations Are Safe

| Use Case | Safe? | Why |
|----------|-------|-----|
| CREATE TABLE for new collection | ❌ NO | Missing system table updates |
| ALTER TABLE adding column | ❌ NO | No snapshot update |
| INSERT seed data | ✅ YES | Doesn't affect schema |
| UPDATE data migration | ✅ YES | Doesn't affect schema |
| DROP old non-Payload table | ✅ YES | Payload doesn't track it |
| Custom SQL functions | ✅ YES | Payload doesn't track it |

---

## Philosophy: Migrations-First Development

**We DO NOT use `push` mode (dev mode) for database synchronization.**

Instead, we:
1. Modify collections/config in `payload.config.ts`
2. Create a migration using `payload migrate:create`
3. Apply the migration locally with `payload migrate`
4. Test changes in development mode
5. Commit migration files to Git (including .json snapshots!)
6. Deploy to Vercel (migrations run automatically)

This approach is **safer**, **more predictable**, and **essential for AI-assisted development**.

**Why not push mode?**
- ❌ Push mode makes implicit schema changes
- ❌ Hard to track what changed
- ❌ Dangerous in production
- ❌ Unpredictable for AI agents

**Why migrations?**
- ✅ Explicit, version-controlled changes
- ✅ Clear audit trail
- ✅ Testable locally before production
- ✅ Predictable behavior
- ✅ Includes system table updates automatically

---

## Complete Step-by-Step Workflow

### Step 1: Identify What Needs to Change

Ask the user what they want to change, document it:

```
Change: [description]
Collection: [affected collection(s)]
Type: [new field / new collection / modify field / remove field]
```

### Step 2: Modify Payload Configuration

**Example: Adding a field**
```typescript
// src/collections/Media.ts
fields: [
  // ... existing fields
  {
    name: 'category',
    type: 'text',
    required: true,
    admin: {
      description: 'Media category for organization',
    },
  },
],
```

**Example: Creating a collection**
```typescript
// src/collections/Tags.ts
import { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
```

**Then import in payload.config.ts:**
```typescript
import { Tags } from './src/collections/Tags'

export default buildConfig({
  collections: [
    Users,
    Tags,  // Add here
    Media,
    // ...
  ],
})
```

**⚠️ STOP! Do not run dev yet!** First create migration.

### Step 3: Create Migration

```bash
npm run payload -- migrate:create descriptive-migration-name
```

**Naming convention:**
```
✅ Good:
- add-category-field-to-media
- create-tags-collection
- add-media-tags-relationship
- modify-user-role-to-enum

❌ Bad:
- migration1
- update
- fix
- changes
```

**What happens:**
- Payload analyzes current database schema
- Compares with your Payload config
- Generates SQL migration file in `src/migrations/`
- Format: `YYYYMMDD_HHMMSS_descriptive-name.ts`

### Step 4: Review Migration File

**CRITICAL:** Always review the generated SQL!

**Find the migration file:**
```bash
ls -la src/migrations/ | grep YYYYMMDD
```

**Read it:**
```typescript
// src/migrations/20260201_204122_add-category-field.ts
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "media" ADD COLUMN "category" varchar;
  `);
}
```

**Check:**
- ✅ SQL looks correct?
- ✅ All your changes included?
- ✅ No unintended side effects?
- ✅ Proper data types?
- ✅ Constraints added if needed?

**If SQL looks wrong:**
1. Edit the migration file manually
2. Fix the SQL code
3. Save the file

### Step 5: Apply Migration Locally

```bash
npm run migrate
```

**What happens:**
1. Cleanup script runs (removes dev mode artifacts if any)
2. Payload applies pending migrations
3. Database schema updated
4. Migration recorded in `payload_migrations` table

**Expected output:**
```
✅ Deleted X dev mode migration(s): ...
[22:12:42] INFO: Migrating: 20260201_204122
[22:12:42] INFO: Migration completed successfully
```

**⚠️ If you see errors:**
- Check the migration file SQL
- Verify database connection
- See Troubleshooting section below

### Step 6: Verify Migration Status

```bash
npm run payload -- migrate:status
```

**Expected output:**
```
┌─────────────────┬───────┬─────┐
│           Name │ Batch │ Ran │
├─────────────────┼───────┼─────┤
│ 20260201_204122 │    1  │ Yes │
└─────────────────┴───────┴─────┘
```

**Your new migration should show:**
- Batch: 1 (or higher)
- Ran: **Yes** ✅

### Step 7: Test in Development Mode

**Start the dev server:**
```bash
npm run dev:next
```

**Verify in Admin Panel:**
1. Open http://localhost:3000/admin
2. Log in
3. Check the affected collection:
   - ✅ New fields visible in editor?
   - ✅ New collection appears in sidebar?
   - ✅ Can create/edit records?
   - ✅ Data persists correctly?

**Test with actual data:**
1. Create a new record
2. Fill in all fields
3. Save
4. Refresh the page
5. Verify data is still there ✅

**⚠️ If anything doesn't work:**
- Check browser console for errors
- Check terminal for server errors
- Verify migration SQL was correct
- See Troubleshooting section

### Step 8: Commit Changes

**Only after ALL tests pass!**

```bash
git add src/migrations/ src/collections/ payload.config.ts
git status  # Verify what's being committed
```

**Check the diff:**
```bash
git diff --cached
```

**Verify:**
- ✅ Migration file(s) included
- ✅ Collection/config changes included
- ✅ No unintended changes
- ✅ All related files committed

**Commit with descriptive message:**
```bash
git commit -m "feat: add category field to media collection

- Add category text field to Media collection
- Create migration 20260201_204122_add-category-field
- Tested locally - working as expected"
```

### Step 9: Push and Deploy

```bash
git push origin <branch-name>
```

**On Vercel (automatic):**
1. Build triggered
2. Postinstall runs: `npm run migrate`
3. Cleanup runs (removes dev mode artifacts)
4. Migration applied to Supabase
5. Next.js builds with new schema
6. Deploy completes ✅

**Monitor the build:**
- Check Vercel deployment logs
- Look for migration execution
- Verify no errors in Supabase

---

## Advanced Scenarios

### Scenario 1: Add Relationship Between Collections

```bash
# 1. Modify both collections
# src/collections/Media.ts - add relationship field
{
  name: 'tags',
  type: 'relationship',
  relationTo: 'tags',
  hasMany: true,
}

# 2. Create migration
npm run payload -- migrate:create add-media-tags-relationship

# 3. Review migration
# Should add: tags_id column and foreign key

# 4. Apply + Test
npm run migrate && npm run dev:next

# 5. Verify in admin panel:
# - Can select multiple tags for media
# - Relationship works both ways
# - Data persists correctly

# 6. Commit
git add src/migrations/ src/collections/
git commit -m "feat: add many-to-many relationship between media and tags"
```

### Scenario 2: Remove Field (BE CAREFUL!)

```bash
# ⚠️ WARNING: This will DELETE data!

# 1. Remove field from collection
# src/collections/Media.ts - delete field

# 2. Create migration
npm run payload -- migrate:create remove-deprecated-field-from-media

# 3. Review migration CAREFULLY!
# Should be: ALTER TABLE "media" DROP COLUMN "field_name"

# 4. BACKUP DATA FIRST!
# Export existing data if needed
psql $DATABASE_URL -c "COPY (SELECT * FROM media) TO 'media-backup.csv' CSV HEADER"

# 5. Apply migration
npm run migrate

# 6. Test
npm run dev:next
# - Verify field removed from UI
# - Verify no errors in console
# - Check existing records still work

# 7. Commit
git add src/migrations/ src/collections/
git commit -m "refactor: remove deprecated field from media collection"
```

### Scenario 3: Modify Field Properties

```bash
# 1. Modify field definition
# src/collections/Users.ts - change role from text to select
{
  name: 'role',
  type: 'select',  // Changed from 'text'
  options: [
    { label: 'Admin', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Viewer', value: 'viewer' },
  ],
  required: true,
}

# 2. Create migration
npm run payload -- migrate:create modify-user-role-to-select

# 3. Review migration CAREFULLY!
# ALTER COLUMN operations can be DESTRUCTIVE
# Check if data migration is needed

# 4. Apply locally
npm run migrate

# 5. Test THOROUGHLY
npm run dev:next
# - Check existing users still have valid roles
# - Verify new options work
# - Test all role-based functionality

# 6. Commit
git add src/migrations/ src/collections/
git commit -m "feat: change user role from text to select dropdown"
```

---

## Testing Strategy

**Always test:**
1. ✅ Create new record
2. ✅ Edit existing record
3. ✅ Delete record
4. ✅ Relationships work
5. ✅ Validation works
6. ✅ Admin panel renders correctly
7. ✅ API endpoints work
8. ✅ Data persists after refresh

### Data Preservation

**Before destructive migrations:**
1. Export affected data
2. Backup entire database if needed
3. Test migration on copy first
4. Have rollback plan ready

### Performance Considerations

**For large tables:**
- Add indexes before adding foreign keys
- Run migrations during low-traffic periods
- Test migration performance locally first
- Consider using transactions for complex changes

---

## Production Deployment

### What Happens Automatically on Vercel:

1. **Build Triggered:**
   - Code pushed to `migration/nextjs-payload` branch
   - Vercel starts new build

2. **Install Dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Postinstall Hook Runs:**
   ```bash
   npm run postinstall
   ```
   This executes: `npm run migrate`

4. **Migrations Applied:**
   - Cleanup script removes any dev mode artifacts
   - `payload migrate` runs against Supabase
   - Production database schema updated
   - Migration status recorded in `payload_migrations` table

5. **Build Completed:**
   ```bash
   npm run build:next
   ```
   - Next.js builds with updated schema
   - Admin panel includes new collections/fields

### Monitoring

### Check Migration History:

```sql
-- In Supabase SQL Editor
SELECT * FROM payload_migrations ORDER BY created_at DESC;
```

### Check Schema:

```sql
-- List all tables
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;

-- Describe specific table
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'media'
ORDER BY ordinal_position;
```

---

## Emergency Procedures

### If migration breaks production:

1. **STOP!** Don't panic
2. **Identify the migration** that broke things
3. **Rollback:** `npm run payload -- migrate:down`
4. **Investigate:** Check migration SQL
5. **Fix:** Correct the migration file
6. **Test:** Apply locally, verify it works
7. **Re-apply:** `npm run migrate`
8. **Deploy:** Push to Vercel

### If you can't rollback:

1. **Restore from backup** (if available)
2. **Manually fix database** in Supabase SQL editor
3. **Mark migration as ran** to skip it:
   ```sql
   INSERT INTO payload_migrations (name, batch, created_at, updated_at)
   VALUES ('YYYYMMDD_HHMMSS_migration-name', 1, NOW(), NOW());
   ```
4. **Create new migration** to fix the issue
5. **Apply the fix**

---

## Useful Commands

```bash
# List all tables
psql $DATABASE_URL -c "\dt"

# Describe table structure
psql $DATABASE_URL -c "\d media"

# Check migration history
psql $DATABASE_URL -c "SELECT * FROM payload_migrations ORDER BY created_at DESC;"

# Count rows in table
psql $DATABASE_URL -c "SELECT COUNT(*) FROM media;"

# Export table to CSV
psql $DATABASE_URL -c "COPY (SELECT * FROM media) TO 'media.csv' CSV HEADER;"
```

---

## Success Criteria

**Migration is successful when:**

- ✅ Migration status shows "Ran: Yes"
- ✅ No errors in migration output
- ✅ Dev server starts without errors
- ✅ All changes visible in admin panel
- ✅ Can create/edit/delete records
- ✅ Data persists correctly
- ✅ No errors in browser console
- ✅ No errors in server logs
- ✅ All tests pass
- ✅ Committed with descriptive message
- ✅ Ready for deployment

---

**For the concise quick-start guide, see [SKILL.md](SKILL.md)**
