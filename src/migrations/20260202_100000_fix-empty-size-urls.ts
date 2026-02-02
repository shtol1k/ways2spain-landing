import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * This migration fixes the issue where media records have empty string URLs
 * for image sizes that weren't generated (because original image was too small).
 * 
 * Problem: generateFileURL returned '' instead of null, causing React crash
 * in Payload Admin UI when viewing media detail pages.
 * 
 * Solution: Set url to null for sizes where width/height are null
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
    // Get all media records with sizes data
    const result = await db.execute(sql`
    SELECT id, sizes FROM media WHERE sizes IS NOT NULL
  `)

    console.log(`📊 Found ${result.rows.length} media records to check`)

    let fixedCount = 0

    for (const row of result.rows) {
        const id = row.id as number
        const sizes = row.sizes as Record<string, unknown>

        if (!sizes || typeof sizes !== 'object') continue

        let modified = false
        const newSizes = { ...sizes }

        // Check each size (thumbnail, medium, large)
        for (const [sizeName, sizeData] of Object.entries(newSizes)) {
            const size = sizeData as Record<string, unknown>

            // If width is null but url is empty string, set url to null
            if (size && size.width === null && size.url === '') {
                size.url = null
                modified = true
                console.log(`  - Fixed ${sizeName} size for media ID ${id}`)
            }
        }

        if (modified) {
            // Update the record with fixed sizes
            await db.execute(sql`
        UPDATE media 
        SET sizes = ${JSON.stringify(newSizes)}::jsonb
        WHERE id = ${id}
      `)
            fixedCount++
        }
    }

    console.log(`✅ Fixed ${fixedCount} media records with empty size URLs`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    // This is a data fix migration - no need to revert
    // The new generateFileURL function will handle null correctly
    console.log('⏩ Skipping down migration - data fix is not reversible')
}
