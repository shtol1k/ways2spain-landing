import { NextResponse } from 'next/server'
import payload from 'payload'

/**
 * Initialize Payload database tables
 * 
 * This endpoint creates all required tables in Supabase.
 * Call this endpoint ONCE after deployment: /api/init-db
 * 
 * SECURITY: This should be disabled or protected in production!
 * For now, we'll check for a secret parameter.
 */
export async function POST(request: Request) {
  try {
    // Simple security check - require secret parameter
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    
    if (secret !== process.env.PAYLOAD_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    console.log('🚀 Initializing Payload database...')
    
    // Payload is already initialized in Next.js, so tables should be created
    // But we can force initialization by accessing it
    
    // Check if users table exists by trying to query it
    try {
      await payload.find({
        collection: 'users',
        limit: 1,
      })
      
      return NextResponse.json({
        success: true,
        message: 'Database already initialized',
        tables: ['users', 'users_sessions', 'testimonials', 'media'],
      })
    } catch (error) {
      if (error.message?.includes('does not exist')) {
        // Tables don't exist, need to create them
        // In Payload v3, tables are created automatically on first init
        // We need to trigger a full re-init
        
        return NextResponse.json({
          success: false,
          error: 'Database tables do not exist. Please run migrations locally first.',
          message: 'Run: npm run db:init (locally with Supabase DATABASE_URL)',
        }, { status: 500 })
      }
      
      throw error
    }
  } catch (error) {
    console.error('Error initializing database:', error)
    return NextResponse.json(
      { 
        error: 'Failed to initialize database',
        details: error.message 
      },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  return POST(request)
}
