-- ============================================
-- Payload CMS Folders Feature Schema for Supabase
-- Run this SQL in Supabase SQL Editor
-- ============================================

-- Step 1: Create enum for folder types
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_payload_folders_folder_type') THEN
        CREATE TYPE "enum_payload_folders_folder_type" AS ENUM ('media');
    END IF;
END $$;

-- Step 2: Create payload_folders table
CREATE TABLE IF NOT EXISTS "payload_folders" (
    "id" serial PRIMARY KEY,
    "name" varchar NOT NULL,
    "folder_id" integer,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

-- Step 3: Create indexes for payload_folders
CREATE INDEX IF NOT EXISTS "payload_folders_created_at_idx" ON "payload_folders" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_folders_folder_idx" ON "payload_folders" ("folder_id");
CREATE INDEX IF NOT EXISTS "payload_folders_name_idx" ON "payload_folders" ("name");
CREATE INDEX IF NOT EXISTS "payload_folders_updated_at_idx" ON "payload_folders" ("updated_at");

-- Step 4: Create payload_folders_folder_type table
CREATE TABLE IF NOT EXISTS "payload_folders_folder_type" (
    "id" serial PRIMARY KEY,
    "order" integer NOT NULL,
    "parent_id" integer NOT NULL,
    "value" "enum_payload_folders_folder_type"
);

-- Step 5: Create indexes for payload_folders_folder_type
CREATE INDEX IF NOT EXISTS "payload_folders_folder_type_order_idx" ON "payload_folders_folder_type" ("order");
CREATE INDEX IF NOT EXISTS "payload_folders_folder_type_parent_idx" ON "payload_folders_folder_type" ("parent_id");

-- Step 6: Add folder_id column to media table (if not exists)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'media' AND column_name = 'folder_id'
    ) THEN
        ALTER TABLE "media" ADD COLUMN "folder_id" integer;
    END IF;
END $$;

-- Step 7: Create index on media.folder_id
CREATE INDEX IF NOT EXISTS "media_folder_idx" ON "media" ("folder_id");

-- Step 8: Add payload_folders_id column to payload_locked_documents_rels (if not exists)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'payload_locked_documents_rels' AND column_name = 'payload_folders_id'
    ) THEN
        ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "payload_folders_id" integer;
    END IF;
END $$;

-- Step 9: Create index on payload_locked_documents_rels.payload_folders_id
CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payload_folders_idx" 
ON "payload_locked_documents_rels" ("payload_folders_id");

-- Step 10: Add foreign key constraints (skip if already exist)
DO $$
BEGIN
    -- Self-reference for nested folders
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'payload_folders_folder_id_payload_folders_id_fk'
    ) THEN
        ALTER TABLE "payload_folders" 
        ADD CONSTRAINT "payload_folders_folder_id_payload_folders_id_fk" 
        FOREIGN KEY ("folder_id") REFERENCES "payload_folders"("id") ON DELETE SET NULL;
    END IF;

    -- payload_folders_folder_type -> payload_folders
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'payload_folders_folder_type_parent_fk'
    ) THEN
        ALTER TABLE "payload_folders_folder_type" 
        ADD CONSTRAINT "payload_folders_folder_type_parent_fk" 
        FOREIGN KEY ("parent_id") REFERENCES "payload_folders"("id") ON DELETE CASCADE;
    END IF;

    -- media -> payload_folders
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'media_folder_id_payload_folders_id_fk'
    ) THEN
        ALTER TABLE "media" 
        ADD CONSTRAINT "media_folder_id_payload_folders_id_fk" 
        FOREIGN KEY ("folder_id") REFERENCES "payload_folders"("id") ON DELETE SET NULL;
    END IF;

    -- payload_locked_documents_rels -> payload_folders
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'payload_locked_documents_rels_payload_folders_fk'
    ) THEN
        ALTER TABLE "payload_locked_documents_rels" 
        ADD CONSTRAINT "payload_locked_documents_rels_payload_folders_fk" 
        FOREIGN KEY ("payload_folders_id") REFERENCES "payload_folders"("id") ON DELETE CASCADE;
    END IF;
END $$;

-- Done!
SELECT 'Payload Folders schema created successfully!' as result;
