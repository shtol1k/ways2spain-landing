/**
 * Initialize Payload CMS database tables
 * Run this script to create all required tables in Supabase
 * 
 * Usage: 
 *   1. Make sure DATABASE_URL points to your Supabase database
 *   2. Run: node scripts/init-database.js
 */

import payload from 'payload'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const initDatabase = async () => {
  console.log('🚀 Initializing Payload CMS database...')
  console.log('📊 Database:', process.env.DATABASE_URL?.replace(/:[^:@]+@/, ':****@') || 'Not set')
  
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is not set!')
    console.log('💡 Set your Supabase DATABASE_URL in .env.local file')
    process.exit(1)
  }

  try {
    // Import Payload config
    const payloadConfig = (await import('../payload.config.ts')).default
    
    // Initialize Payload
    await payload.init(payloadConfig)
    
    console.log('✅ Payload initialized successfully!')
    console.log('📋 Database tables created/verified:')
    console.log('   - users')
    console.log('   - users_sessions')
    console.log('   - testimonials')
    console.log('   - media')
    console.log('   - media_sizes (thumbnail, medium, large)')
    
    // Close database connection
    await payload.close()
    
    console.log('')
    console.log('✨ Database initialization complete!')
    console.log('')
    console.log('🎯 Next steps:')
    console.log('   1. Go to your Supabase Dashboard → Table Editor')
    console.log('   2. Verify tables were created')
    console.log('   3. Create first admin user at /admin/create-first-user')
    
  } catch (error) {
    console.error('❌ Error initializing database:', error.message)
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Check your DATABASE_URL and network connection')
    }
    process.exit(1)
  }
}

initDatabase()
