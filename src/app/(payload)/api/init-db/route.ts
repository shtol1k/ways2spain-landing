import { NextResponse } from 'next/server'
import payload from 'payload'

/**
 * API endpoint to initialize database tables
 * 
 * POST /api/init-db
 * 
 * This will create all necessary tables for Payload CMS:
 * - users, media, media_folders, testimonials
 * 
 * Call this once after schema changes to update production DB
 */
export async function POST() {
  try {
    console.log('🔄 Initializing database tables...')
    
    // Initialize Payload
    await payload.init({
      secret: process.env.PAYLOAD_SECRET!,
      local: false,
    })

    console.log('✅ Payload initialized')

    // Trigger table creation by accessing each collection
    const collections = ['users', 'media', 'mediaFolders', 'testimonials']
    const results: Record<string, string> = {}

    for (const collection of collections) {
      try {
        console.log(`📋 Checking collection: ${collection}`)
        
        // Try to find (this will trigger table creation if needed)
        await payload.find({
          collection: collection as any,
          limit: 1,
        })
        
        results[collection] = '✅ OK'
        console.log(`✅ ${collection} - OK`)
      } catch (error: any) {
        results[collection] = `❌ ${error.message}`
        console.error(`❌ ${collection} - ERROR:`, error.message)
      }
    }

    // Check if media collection has new fields
    try {
      console.log('📋 Checking media collection schema...')
      const media = await payload.find({
        collection: 'media',
        limit: 0,
        depth: 0,
      })
      
      // Check if folderPath field exists
      const hasFolderPath = 'folderPath' in media
      results['media_fields'] = hasFolderPath ? '✅ folderPath exists' : '⚠️ folderPath missing'
    } catch (error: any) {
      results['media_fields'] = `❌ ${error.message}`
    }

    console.log('\n✅ Database initialization completed')
    console.log('Results:', results)

    return NextResponse.json({
      success: true,
      message: 'Database tables initialized',
      results,
    })

  } catch (error: any) {
    console.error('❌ Database initialization failed:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 })
  }
}

// Also support GET for easy browser access
export async function GET() {
  return POST()
}
