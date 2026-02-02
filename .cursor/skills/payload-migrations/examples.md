# Payload CMS Migrations - Real-World Examples

This file contains practical examples of common migration scenarios with complete code and commands.

## Table of Contents

- [Example 1: Add Simple Field](#example-1-add-simple-field-to-media)
- [Example 2: Create New Collection](#example-2-create-new-collection)
- [Example 3: Add Relationship](#example-3-add-relationship-between-collections)
- [Example 4: Modify Field Type](#example-4-modify-field-type)
- [Example 5: Add Index](#example-5-add-index-for-performance)
- [Example 6: Remove Field](#example-6-remove-field-destructive)

---

## Example 1: Add Simple Field to Media

**User Request:** "I need to add an 'alt text' field to the Media collection for accessibility"

### Step 1: Modify Collection File

```typescript
// src/collections/Media.ts
export const Media: CollectionConfig = {
  slug: 'media',
  fields: [
    {
      name: 'alt',  // New field
      type: 'text',
      admin: {
        description: 'Alt text for accessibility and SEO',
      },
    },
    // ... existing fields
  ],
}
```

### Step 2: Create Migration

```bash
npm run payload -- migrate:create add-alt-text-to-media
```

### Step 3: Review Generated Migration

```typescript
// src/migrations/20260201_143022_add-alt-text-to-media.ts
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "media" ADD COLUMN "alt" varchar;
  `);
}
```

### Step 4: Apply and Test

```bash
npm run migrate
# Output: ✅ Migration completed successfully

npm run payload -- migrate:status
# Shows: 20260201_143022 | 1 | Yes

npm run dev:next
```

### Step 5: Verify in Admin Panel

1. Open http://localhost:3000/admin
2. Navigate to Media collection
3. Click "Create New Media"
4. ✅ "Alt" field visible
5. Add media with alt text
6. Save and refresh
7. ✅ Alt text persists

### Step 6: Commit

```bash
git add src/migrations/ src/collections/
git commit -m "feat: add alt text field to media collection

- Add alt text field for accessibility
- Create migration 20260201_143022_add-alt-text-to-media
- Tested: field visible and working in admin panel"
```

---

## Example 2: Create New Collection

**User Request:** "I need a Tags collection to organize content"

### Step 1: Create Collection File

```typescript
// src/collections/Tags.ts
import { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ data, req }) => {
            // Auto-generate slug from name
            if (data.name) {
              return data.name.toLowerCase().replace(/\s+/g, '-')
            }
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
```

### Step 2: Import in Payload Config

```typescript
// payload.config.ts
import { Tags } from './src/collections/Tags'

export default buildConfig({
  collections: [
    Users,
    Tags,  // Add here
    Media,
    Testimonials,
    // ...
  ],
})
```

### Step 3: Create Migration

```bash
npm run payload -- migrate:create create-tags-collection
```

### Step 4: Review Migration

```typescript
// src/migrations/20260201_150145_create-tags-collection.ts
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE "tags" (
      "id" serial PRIMARY KEY,
      "name" varchar NOT NULL UNIQUE,
      "slug" varchar UNIQUE,
      "description" text,
      "createdAt" timestamp DEFAULT NOW(),
      "updatedAt" timestamp DEFAULT NOW()
    );
  `);
}
```

### Step 5: Apply and Test

```bash
npm run migrate
npm run dev:next
```

### Step 6: Verify

1. Open admin panel
2. ✅ "Tags" appears in sidebar
3. Click "Create New Tag"
4. Create tag: "Technology", slug auto-generates to "technology"
5. Save
6. ✅ Tag created successfully
7. Edit tag, add description
8. ✅ Description persists

### Step 7: Commit

```bash
git add src/migrations/ src/collections/ payload.config.ts
git commit -m "feat: create tags collection

- Add Tags collection with name, slug, and description
- Auto-generate slug from name
- Create migration 20260201_150145_create-tags-collection
- Tested: collection visible, CRUD operations working"
```

---

## Example 3: Add Relationship Between Collections

**User Request:** "Media items should be able to have multiple tags"

### Step 1: Modify Media Collection

```typescript
// src/collections/Media.ts
export const Media: CollectionConfig = {
  slug: 'media',
  fields: [
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    // ... existing fields
  ],
}
```

### Step 2: Create Migration

```bash
npm run payload -- migrate:create add-media-tags-relationship
```

### Step 3: Review Migration

```typescript
// src/migrations/20260201_153000_add-media-tags-relationship.ts
export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Create join table for many-to-many relationship
  await db.execute(sql`
    CREATE TABLE "media_tags" (
      "order" integer DEFAULT 0,
      "media_id" integer NOT NULL,
      "tag_id" integer NOT NULL,
      CONSTRAINT "media_tags_media_id_fk"
        FOREIGN KEY ("media_id")
        REFERENCES "media"("id")
        ON DELETE CASCADE,
      CONSTRAINT "media_tags_tag_id_fk"
        FOREIGN KEY ("tag_id")
        REFERENCES "tags"("id")
        ON DELETE CASCADE
    );
  `);

  // Add index for performance
  await db.execute(sql`
    CREATE INDEX "media_tags_media_id_idx" ON "media_tags"("media_id");
    CREATE INDEX "media_tags_tag_id_idx" ON "media_tags"("tag_id");
  `);
}
```

### Step 4: Apply and Test

```bash
npm run migrate
npm run dev:next
```

### Step 5: Verify

1. Create two tags: "Nature" and "Urban"
2. Create new media item
3. ✅ Tags selector visible in sidebar
4. Select both tags
5. Save
6. ✅ Both tags associated with media
7. Click on tag, see related media
8. ✅ Relationship works bidirectionally

### Step 6: Commit

```bash
git add src/migrations/ src/collections/
git commit -m "feat: add many-to-many relationship between media and tags

- Add tags relationship field to Media collection
- Create join table with foreign keys
- Add indexes for query performance
- Tested: can select multiple tags, relationship works both ways"
```

---

## Example 4: Modify Field Type

**User Request:** "User role should be a dropdown, not free text"

### Step 1: Modify User Collection

```typescript
// src/collections/Users.ts
export const Users: CollectionConfig = {
  slug: 'users',
  fields: [
    {
      name: 'role',
      type: 'select',  // Changed from 'text'
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Viewer', value: 'viewer' },
      ],
      defaultValue: 'viewer',
      required: true,
      admin: {
        description: 'User role determines permissions',
      },
    },
    // ... existing fields
  ],
}
```

### Step 2: Create Migration

```bash
npm run payload -- migrate:create modify-user-role-to-select
```

### Step 3: Review Migration

```typescript
// src/migrations/20260201_160000_modify-user-role-to-select.ts
export async function up({ db }: MigrateUpArgs): Promise<void> {
  // ⚠️ ALTER COLUMN can be destructive!
  // Check existing data first

  await db.execute(sql`
    ALTER TABLE "users"
    ALTER COLUMN "role" TYPE varchar
    DEFAULT 'viewer';
  `);
}
```

### Step 4: ⚠️ Check Existing Data

```bash
# Before applying, check what role values exist
psql $DATABASE_URL -c "SELECT DISTINCT role FROM users;"
```

**Output might show:**
```
 role
-------
 admin
 editor
 viewer
 (3 rows)
```

✅ Good - existing values match new options

**If output showed:**
```
 role
-------
 superuser
 moderator
 guest
```
❌ Problem - need data migration!

### Step 5: Apply Migration

```bash
npm run migrate
npm run dev:next
```

### Step 6: Test Thoroughly

1. Create new user
   - ✅ Role dropdown shows options
   - ✅ Default is "viewer"
2. Edit existing admin user
   - ✅ Current role shows correctly
   - ✅ Can change to other roles
3. Check permissions still work
   - ✅ Admin can access everything
   - ✅ Viewer has limited access

### Step 7: Commit

```bash
git add src/migrations/ src/collections/
git commit -m "feat: change user role from text to select dropdown

- Convert role field to select with predefined options
- Set default role to 'viewer'
- Verified existing users have valid roles
- Tested: role switching works, permissions intact"
```

---

## Example 5: Add Index for Performance

**User Request:** "Media queries by filename are slow, can we optimize?"

### Step 1: Add Index to Migration

Since indexes don't change the Payload config, create migration manually:

```typescript
// src/migrations/20260201_170000_add-index-on-media-filename.ts
import { sql } from 'drizzle-orm'
import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE INDEX "media_filename_idx" ON "media"("filename");
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP INDEX "media_filename_idx";
  `);
}
```

### Step 2: Apply Migration

```bash
npm run migrate
npm run dev:next
```

### Step 3: Verify Performance

```bash
# Before: Check query time
psql $DATABASE_URL -c "EXPLAIN ANALYZE SELECT * FROM media WHERE filename = 'photo.jpg';"

# After: Should show index scan instead of sequential scan
```

### Step 4: Commit

```bash
git add src/migrations/
git commit -m "perf: add index on media filename

- Add index on media.filename for faster lookups
- Tested: query performance improved
- Migration includes down() for rollback"
```

---

## Example 6: Remove Field (Destructive)

**User Request:** "Remove the deprecated 'legacyId' field from Media"

⚠️ **WARNING: This will permanently delete data!**

### Step 1: Backup Data First

```bash
# Export media with legacyId values
psql $DATABASE_URL -c "COPY (SELECT id, filename, legacyId FROM media WHERE legacyId IS NOT NULL) TO 'media-legacy-backup.csv' CSV HEADER;"
```

### Step 2: Remove Field from Collection

```typescript
// src/collections/Media.ts
export const Media: CollectionConfig = {
  slug: 'media',
  fields: [
    // ... other fields
    // Removed legacyId field
  ],
}
```

### Step 3: Create Migration

```bash
npm run payload -- migrate:create remove-legacy-id-from-media
```

### Step 4: Review Migration

```typescript
// src/migrations/20260201_180000_remove-legacy-id-from-media.ts
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "media" DROP COLUMN "legacy_id";
  `);
}
```

### Step 5: Double-Check Backup

```bash
# Verify backup file exists and has data
cat media-legacy-backup.csv
head media-legacy-backup.csv
```

### Step 6: Apply Migration

```bash
npm run migrate
npm run dev:next
```

### Step 7: Verify

1. ✅ Dev server starts without errors
2. Open admin panel
3. ✅ LegacyId field not visible
4. Edit existing media
5. ✅ Can save without legacyId
6. Check all existing media still accessible

### Step 8: Commit

```bash
git add src/migrations/ src/collections/
git commit -m "refactor: remove deprecated legacyId field from media

- Remove legacyId field from Media collection
- Backup existing data to media-legacy-backup.csv
- Tested: all media still accessible without field
- Note: Backup file retained for 30 days"
```

---

## Common Patterns Summary

### Adding a Field
1. Modify collection file
2. Create migration
3. Review SQL
4. Apply locally
5. Test in admin panel
6. Commit

### Creating a Collection
1. Create collection file
2. Import in payload.config.ts
3. Create migration
4. Review SQL (should be CREATE TABLE)
5. Apply and test
6. Commit all files

### Adding Relationships
1. Add relationship field to collection
2. Create migration
3. Review SQL (should create join table for many-to-many)
4. Apply and test both directions
5. Commit

### Modifying Fields
1. Change field definition
2. Create migration
3. Review SQL carefully (ALTER COLUMN can be destructive)
4. Check existing data compatibility
5. Test thoroughly with existing data
6. Commit

### Removing Fields
1. **BACKUP DATA FIRST**
2. Remove field from collection
3. Create migration
4. Review SQL (should be DROP COLUMN)
5. Verify backup
6. Apply and test
7. Commit

---

**These examples cover the most common migration scenarios. For complex cases or data migrations, consult the [reference documentation](reference.md).**
