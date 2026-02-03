/**
 * Test Supabase database connection
 * Run this to verify DATABASE_URL is correct
 */

import dotenv from 'dotenv'
import pg from 'pg'

const { Pool } = pg

dotenv.config({ path: '.env.local' })

const testConnection = async () => {
  const dbUrl = process.env.DATABASE_URL

  console.log('🔍 Testing Supabase database connection...')
  console.log('📊 Database:', dbUrl?.replace(/:[^:@]+@/, ':****@') || 'Not set')
  console.log('')

  if (!dbUrl) {
    console.error('❌ DATABASE_URL is not set!')
    process.exit(1)
  }

  // Check if it's Supabase
  const isSupabase = dbUrl.includes('supabase.com')
  const isTransactionPooler = dbUrl.includes(':6543')

  console.log('📋 Connection details:')
  console.log('   - Host:', dbUrl.match(/@([^:]+)/)?.[1] || 'Unknown')
  console.log('   - Port:', dbUrl.match(/:(\d+)\//)?.[1] || '5432')
  console.log('   - Database:', dbUrl.match(/\/([^?]+)$/)?.[1] || 'Unknown')
  console.log('   - Is Supabase:', isSupabase ? '✅ Yes' : '❌ No')
  console.log('   - Is Transaction Pooler:', isTransactionPooler ? '✅ Yes (port 6543)' : '⚠️  No (should use port 6543)')
  console.log('')

  const pool = new Pool({
    connectionString: dbUrl,
    max: 1, // Only one connection for testing
    connectionTimeoutMillis: 10000, // 10 seconds timeout
  })

  try {
    console.log('⏳ Connecting to database...')

    const client = await pool.connect()

    console.log('✅ Connected successfully!')
    console.log('')

    // Test query
    console.log('🔎 Running test query...')

    const result = await client.query(`
      SELECT 
        version() as postgres_version,
        now() as current_time,
        inet_server_addr() as server_ip,
        inet_server_port() as server_port
    `)

    console.log('✅ Query executed successfully!')
    console.log('')
    console.log('📊 Server info:')
    console.log('   - PostgreSQL version:', result.rows[0].postgres_version)
    console.log('   - Server time:', result.rows[0].current_time)
    console.log('   - Server IP:', result.rows[0].server_ip)
    console.log('   - Server port:', result.rows[0].server_port)
    console.log('')

    // Check existing tables
    console.log('📋 Checking existing tables...')

    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `)

    if (tablesResult.rows.length === 0) {
      console.log('⚠️  No tables found in database (this is expected for new Supabase)')
      console.log('   Payload will create tables on first run')
    } else {
      console.log(`✅ Found ${tablesResult.rows.length} tables:`)
      tablesResult.rows.forEach(row => {
        console.log(`   - ${row.table_name}`)
      })
    }
    console.log('')

    // Release client
    client.release()

    // Close pool
    await pool.end()

    console.log('✨ Connection test completed successfully!')
    console.log('')
    console.log('🎯 Next steps:')
    if (tablesResult.rows.length === 0) {
      console.log('   1. Run: npm run dev:next (starts Next.js with Supabase)')
      console.log('   2. Wait 30-60 seconds for Payload to initialize')
      console.log('   3. Check Supabase Dashboard → Table Editor')
      console.log('   4. Tables should be auto-created')
    } else {
      console.log('   1. Tables already exist')
      console.log('   2. Go to /admin on your deployment')
      console.log('   3. Access Payload admin panel')
    }
    console.log('')

  } catch (error) {
    console.error('❌ Connection failed!')
    console.error('')
    console.error('Error:', error.message)
    console.error('')

    // Specific error handling
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Troubleshooting:')
      console.log('   - Check DATABASE_URL is correct')
      console.log('   - Check Supabase project is active')
      console.log('   - Check if IP is whitelisted in Supabase')
    } else if (error.code === '3D000') {
      console.log('💡 Database does not exist:')
      console.log('   - Check database name in DATABASE_URL')
      console.log('   - Go to Supabase Dashboard → Settings → Database')
    } else if (error.code === '28P01') {
      console.log('💡 Authentication failed:')
      console.log('   - Check password in DATABASE_URL')
      console.log('   - Go to Supabase Dashboard → Database → Reset password')
    } else if (error.code === '57P02') {
      console.log('💡 Connection pooler issue:')
      console.log('   - Make sure to use Transaction pooler (port 6543)')
      console.log('   - Direct connection (port 5432) may have connection limits')
    }

    await pool.end().catch(() => {})
    process.exit(1)
  }
}

testConnection()
