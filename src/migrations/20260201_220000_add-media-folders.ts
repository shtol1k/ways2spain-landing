import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Create media_folders table
  await db.execute(sql`
    CREATE TABLE "media_folders" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "parent_id" integer,
      "description" varchar,
      "path" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );
  `);

  // Add unique constraint on name
  await db.execute(sql`
    CREATE UNIQUE INDEX "media_folders_name_idx" ON "media_folders" USING btree ("name");
  `);

  // Add folder fields to media table
  await db.execute(sql`
    ALTER TABLE "media" ADD COLUMN "folder_id" integer;
    ALTER TABLE "media" ADD COLUMN "folder_path" varchar;
  `);

  // Add foreign key constraint
  await db.execute(sql`
    ALTER TABLE "media" ADD CONSTRAINT "media_folder_id_media_folders_id_fk" 
    FOREIGN KEY ("folder_id") REFERENCES "public"."media_folders"("id") 
    ON DELETE set null ON UPDATE no action;
  `);

  // Add index on folder_id
  await db.execute(sql`
    CREATE INDEX "media_folder_idx" ON "media" USING btree ("folder_id");
  `);

  // Add index on parent_id for media_folders
  await db.execute(sql`
    CREATE INDEX "media_folders_parent_idx" ON "media_folders" USING btree ("parent_id");
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Remove foreign key constraint
  await db.execute(sql`
    ALTER TABLE "media" DROP CONSTRAINT "media_folder_id_media_folders_id_fk";
  `);

  // Remove indexes
  await db.execute(sql`DROP INDEX IF EXISTS "media_folder_idx";`);
  await db.execute(sql`DROP INDEX IF EXISTS "media_folders_parent_idx";`);
  await db.execute(sql`DROP INDEX IF EXISTS "media_folders_name_idx";`);

  // Remove columns from media table
  await db.execute(sql`
    ALTER TABLE "media" DROP COLUMN IF EXISTS "folder_id";
    ALTER TABLE "media" DROP COLUMN IF EXISTS "folder_path";
  `);

  // Drop media_folders table
  await db.execute(sql`DROP TABLE IF EXISTS "media_folders" CASCADE;`);
}
