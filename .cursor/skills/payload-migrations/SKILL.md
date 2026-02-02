---
name: payload-migrations
description: Manage Payload CMS database migrations for schema changes. Use when adding fields, creating collections, modifying relationships, or any database schema modifications in Payload CMS projects. Ensures migrations are created, tested, and committed correctly.
---

# Payload CMS Migrations

## Quick Workflow

For ANY database schema change, follow these steps in order:

```bash
# 1. Modify collection/config file
# src/collections/YourCollection.ts

# 2. Create migration
npm run payload -- migrate:create descriptive-name

# 3. Review migration SQL
cat src/migrations/YYYYMMDD_HHMMSS_*.ts

# 4. Apply locally
npm run migrate

# 5. Verify status
npm run payload -- migrate:status  # Should show "Ran: Yes"

# 6. Test
npm run dev:next
# Verify in admin panel

# 7. Commit
git add src/migrations/ src/collections/
```

## Critical Rules

**NEVER:**
- Modify database directly (use migrations only)
- Skip migration creation
- Commit without testing
- Apply migrations to production without local testing

**ALWAYS:**
- Create migration immediately after schema changes
- Review generated SQL code
- Apply migration locally before committing
- Test in dev mode
- Include migration files in commit

## Migration Naming

**Pattern:** `<action>-<target>-<context>`

**Examples:**
- ✅ `add-category-field-to-media`
- ✅ `create-tags-collection`
- ✅ `add-media-tags-relationship`
- ✅ `modify-user-role-to-enum`

❌ Avoid: `migration1`, `update`, `fix`, `changes`

## Common Scenarios

### Add Field to Collection

```bash
# 1. Modify src/collections/Media.ts - add field
# 2. npm run payload -- migrate:create add-field-to-media
# 3. Review migration
# 4. npm run migrate
# 5. npm run dev:next
# 6. git add src/migrations/ src/collections/
```

### Create New Collection

```bash
# 1. Create src/collections/NewCollection.ts
# 2. Import in payload.config.ts
# 3. npm run payload -- migrate:create create-new-collection
# 4. Review migration (should CREATE TABLE)
# 5. npm run migrate && npm run dev:next
# 6. git add src/migrations/ src/collections/ payload.config.ts
```

### Modify Field Properties

⚠️ **ALTER COLUMN can be destructive!**

```bash
# 1. Modify field definition
# 2. npm run payload -- migrate:create modify-field-type
# 3. Review migration CAREFULLY
# 4. Test thoroughly with existing data
# 5. npm run migrate && npm run dev:next
```

## Pre-Commit Checklist

- [ ] Migration file created in `src/migrations/`
- [ ] Migration SQL reviewed and correct
- [ ] Migration applied locally
- [ ] Status shows "Ran: Yes"
- [ ] Dev server runs without errors
- [ ] Changes visible in admin panel
- [ ] Can create/edit records successfully
- [ ] Migration file included in commit
- [ ] Collection changes included in commit

**Only commit if ALL checked!**

## Troubleshooting

### "column already exists"
Migration already applied. Check: `npm run payload -- migrate:status`

### "relation does not exist"
Migration not applied. Run: `npm run migrate`

### Dev mode artifacts detected
```bash
node scripts/cleanup-dev-migrations.js
npm run migrate
```

### Migration SQL looks wrong
Manually edit migration file, fix SQL, save, then apply

### Dev server won't start
```bash
npm run payload -- migrate:down  # Rollback
# Fix migration file
npm run migrate
npm run dev:next
```

## Quick Reference

```bash
# Create migration
npm run payload -- migrate:create descriptive-name

# Apply migrations
npm run migrate

# Check status
npm run payload -- migrate:status

# Rollback last migration
npm run payload -- migrate:down

# Start dev server
npm run dev:next
```

## Additional Resources

- For detailed workflows and examples, see [reference.md](reference.md)
- For project-specific migration guide, see `docs/MIGRATION_WORKFLOW.md`
- Payload CMS docs: https://payloadcms.com/docs/database/migrations
