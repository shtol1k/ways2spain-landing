import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Set default values for existing media records
  // folder_id remains NULL (optional relationship)
  // folder_path gets default value 'media' for non-null records
  await db.execute(sql`
    UPDATE "media" 
    SET "folder_path" = 'media' 
    WHERE "folder_path" IS NULL;
  `);

  console.log('✅ Set default folder_path="media" for existing media records');
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Revert the changes - set folder_path back to NULL for records with 'media'
  await db.execute(sql`
    UPDATE "media" 
    SET "folder_path" = NULL 
    WHERE "folder_path" = 'media';
  `);
}
