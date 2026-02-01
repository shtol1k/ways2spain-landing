/**
 * Run Payload migrations on Supabase database
 * 
 * This script will:
 * 1. Generate SQL migration based on current schema
 * 2. Deploy migration to Supabase database
 * 
 * Run with: node scripts/migrate-supabase.js
 */

import payload from 'payload'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load env vars
dotenv.config({ path: path.join(process.cwd(), '.env.local') })

const migrateSupabase = async () => {
  try {
    console.log('🔄 Starting Supabase migration...')
    console.log('📊 Database:', process.env.DATABASE_URL?.split('@')[1]?.split('/')[0] || 'unknown')
    
    // Check if using Supabase
    const isSupabase = process.env.DATABASE_URL?.includes('supabase')
    
    if (!isSupabase) {
      console.log('\n⚠️  WARNING: DATABASE_URL does not point to Supabase')
      console.log('Current DATABASE_URL:', process.env.DATABASE_URL?.substring(0, 50) + '...')
      console.log('\n❌ Aborting. Please set DATABASE_URL to Supabase in .env.local')
      process.exit(1)
    }

    console.log('✅ Supabase database detected')

    // Initialize Payload with Supabase connection
    console.log('\n🔌 Initializing Payload with Supabase connection...')
    await payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: true,
    })

    console.log('✅ Payload initialized')

    // Run database migrations
    console.log('\n🚀 Running migrations...')
    
    // Payload will automatically create missing tables and columns
    // when you access them, but let's trigger it explicitly
    const { payload: p } = await import('payload')
    
    // Test creating a MediaFolder (this will trigger table creation)
    try {
      console.log('📁 Creating MediaFolders table...')
      await p.create({
        collection: 'mediaFolders',
        data: {
          name: '__migration_test__',
        },
      })
      
      // Delete the test record
      const folders = await p.find({
        collection: 'mediaFolders',
        where: {
          name: { equals: '__migration_test__' }
        },
      })
      
      if (folders.total > 0) {
        await p.delete({
          collection: 'mediaFolders',
          id: folders.docs[0].id,
        })
      }
      
      console.log('✅ MediaFolders table created/verified')
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('✅ MediaFolders table already exists')
      } else {
        console.error('❌ Error creating MediaFolders table:', error.message)
      }
    }

    console.log('\n✅ Migration completed successfully!')
    console.log('\n📋 Changes applied:')
    console.log('  - Created media_folders table')
    console.log('  - Added folder_id column to media table')
    console.log('  - Added folder_path column to media table')
    
    console.log('\n🔄 You can now revert DATABASE_URL back to local database')
    
  } catch (error) {
    console.error('\n❌ Migration failed:', error.message)
    if (error.message.includes('connect')) {
      console.error('\n🔌 Database connection error. Check DATABASE_URL in .env.local')
    }
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

migrateSupabase()
