# Payload CMS Migrations for AI Agents

**Category:** Database, CMS, Development Workflow
**Applies to:** Payload CMS 3.x with PostgreSQL
**Skill Type:** Development Pattern

---

## 🎯 Purpose

This skill ensures AI agents **always follow the correct workflow** when making database schema changes in Payload CMS projects. It prevents common mistakes like:
- Forgetting to create migrations
- Applying migrations in wrong order
- Committing incomplete changes
- Breaking production databases

---

## 📋 Quick Checklist (Before ANY Database Change)

**ALWAYS complete these steps in order:**

1. ✅ Modify collection/config file
2. ✅ Create migration: `npm run payload -- migrate:create descriptive-name`
3. ✅ Review migration SQL (check file in `src/migrations/`)
4. ✅ Apply locally: `npm run migrate`
5. ✅ Check status: `npm run payload -- migrate:status` (should show "Ran: Yes")
6. ✅ Test: `npm run dev:next` (verify in admin panel)
7. ✅ Only then commit: migration files + collection changes

**⛔ NEVER skip any step!**

---

## 🔄 Essential Workflow

### Adding a Field to Collection

```bash
# 1. Modify collection file
# src/collections/Media.ts - add new field

# 2. Create migration
npm run payload -- migrate:create add-category-field-to-media

# 3. Review migration
cat src/migrations/YYYYMMDD_HHMMSS_*.ts  # Check SQL is correct

# 4. Apply locally
npm run migrate

# 5. Verify status
npm run payload -- migrate:status  # Should show "Ran: Yes"

# 6. Test
npm run dev:next
# Open admin panel, verify field visible and working

# 7. Commit
git add src/migrations/ src/collections/
git commit -m "feat: add category field to media collection"
```

### Creating New Collection

```bash
# 1. Create collection file
# src/collections/NewCollection.ts

# 2. Import in payload.config.ts
import { NewCollection } from './src/collections/NewCollection'
collections: [Users, NewCollection, Media, ...]

# 3. Create migration
npm run payload -- migrate:create create-new-collection

# 4. Review migration (should CREATE TABLE)
cat src/migrations/YYYYMMDD_HHMMSS_*.ts

# 5. Apply + Test
npm run migrate && npm run dev:next

# 6. Verify collection appears in admin panel

# 7. Commit
git add src/migrations/ src/collections/ payload.config.ts
git commit -m "feat: create new collection for X"
```

---

## 🚨 Critical Rules

### ⛔ NEVER DO:
1. ❌ Modify database directly (use migrations only)
2. ❌ Skip migration creation (even for "small" changes)
3. ❌ Assume `push: true` will handle it (we use `push: false`)
4. ❌ Commit without testing (always run dev server first)
5. ❌ Apply migrations to production without local testing

### ✅ ALWAYS DO:
1. ✅ Create migration immediately after schema changes
2. ✅ Review generated SQL code
3. ✅ Apply migration locally before committing
4. ✅ Test in dev mode after migration
5. ✅ Include migration files in commit
6. ✅ Verify migration status before deploy

---

## 📚 Migration Naming Convention

**Pattern:** `<action>-<target>-<context>`

**Examples:**
```
✅ Good:
- add-category-field-to-media
- create-tags-collection
- add-media-tags-relationship
- modify-user-role-to-enum
- remove-deprecated-field-from-testimonials

❌ Bad:
- migration1
- update
- fix
- changes
- stuff
```

**Actions:** add, create, modify, remove, drop
**Target:** field, collection, index, constraint
**Context:** specific collection/field names

---

## ⚠️ Common Mistakes to Avoid

### Mistake 1: Forgetting Migration
```
❌ Wrong: Modify collection → run dev → commit
✅ Right: Modify collection → create migration → apply → test → commit
```

### Mistake 2: Not Testing After Migration
```
❌ Wrong: Apply migration → commit immediately
✅ Right: Apply migration → run dev → verify in admin → commit
```

### Mistake 3: Committing Without Migration Files
```
❌ Wrong: git add src/collections/ (forget migrations)
✅ Right: git add src/migrations/ src/collections/
```

### Mistake 4: Not Reviewing SQL
```
❌ Wrong: Create migration → apply without checking
✅ Right: Create migration → review SQL → fix if needed → apply
```

---

## 🔍 Troubleshooting

### Error: "column already exists"
**Solution:** Migration already applied. Check status with `npm run payload -- migrate:status`

### Error: "relation does not exist"
**Solution:** Migration not applied. Run `npm run migrate`

### Error: "It looks like you've run Payload in dev mode"
**Solution:** Run cleanup: `node scripts/cleanup-dev-migrations.js` then `npm run migrate`

### Migration SQL looks wrong
**Solution:** Manually edit migration file, fix SQL, save, then apply

### Dev server won't start after migration
**Solution:** Rollback with `npm run payload -- migrate:down`, fix migration, re-apply

---

## 🎯 Pre-Commit Checklist

Before committing, verify:

- [ ] Migration file created in `src/migrations/`
- [ ] Migration SQL reviewed and correct
- [ ] Migration applied locally: `npm run migrate`
- [ ] Status shows "Ran: Yes": `npm run payload -- migrate:status`
- [ ] Dev server runs: `npm run dev:next`
- [ ] Changes visible in admin panel
- [ ] Can create/edit records successfully
- [ ] Migration file included in commit
- [ ] Collection changes included in commit

**Only commit if ALL checked!**

---

## 📖 Quick Reference

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

# Check database tables
psql $DATABASE_URL -c "\dt"

# Describe table structure
psql $DATABASE_URL -c "\d media"
```

---

## 🤖 AI Agent Instructions

**When user asks for database changes:**

1. **Understand the request** - Ask clarifying questions if needed
2. **Explain the plan** - Tell user what migration will be created
3. **Get confirmation** - Show planned changes before proceeding
4. **Execute workflow** - Follow all steps in order
5. **Verify together** - Test changes with user
6. **Commit carefully** - Only after user confirms everything works

**Success criteria:**
- ✅ User confirms changes work correctly
- ✅ No errors in console or server
- ✅ Migration status shows "Ran: Yes"
- ✅ All test records created/edited successfully
- ✅ Clean git commit with descriptive message

**Remember:** It's better to be slow and correct than fast and broken! 🎯

---

**Full documentation:** `docs/MIGRATION_WORKFLOW.md`
**Payload docs:** https://payloadcms.com/docs/database/migrations
