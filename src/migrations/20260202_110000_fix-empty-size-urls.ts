import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * This migration fixes the issue where media records have empty string URLs
 * for image sizes that weren't generated (because original image was too small).
 * 
 * Problem: generateFileURL returned '' instead of null, causing React crash
 * in Payload Admin UI when viewing media detail pages.
 * 
 * Solution: Set url to NULL for sizes where the size wasn't generated
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
    // Fix medium size URLs: set to NULL where url is empty string
    await db.execute(sql`
    UPDATE media 
    SET sizes_medium_url = NULL 
    WHERE sizes_medium_url = '';
  `)

    // Fix large size URLs: set to NULL where url is empty string
    await db.execute(sql`
    UPDATE media 
    SET sizes_large_url = NULL 
    WHERE sizes_large_url = '';
  `)

    // Also fix thumbnail if needed
    await db.execute(sql`
    UPDATE media 
    SET sizes_thumbnail_url = NULL 
    WHERE sizes_thumbnail_url = '';
  `)

    console.log('✅ Fixed empty size URLs in media records')
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    // This is a data fix migration - no need to revert
    console.log('⏩ Skipping down migration - data fix is not reversible')
}
