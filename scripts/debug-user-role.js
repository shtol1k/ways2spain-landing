/**
 * Debug user role and permissions
 * Run this to check user in Supabase
 */

import dotenv from 'dotenv'
import pg from 'pg'

const { Pool } = pg

dotenv.config({ path: '.env.local' })

const debugUser = async () => {
  console.log('🔍 Debugging user role and permissions...')
  console.log('')

  const dbUrl = process.env.DATABASE_URL

  if (!dbUrl) {
    console.error('❌ DATABASE_URL is not set!')
    process.exit(1)
  }

  const pool = new Pool({
    connectionString: dbUrl,
    max: 1,
  })

  try {
    const client = await pool.connect()

    console.log('📋 Checking users table...')
    console.log('')

    // Get all users
    const result = await client.query(`
      SELECT 
        id,
        email,
        name,
        role,
        created_at
      FROM users
      ORDER BY created_at DESC
    `)

    if (result.rows.length === 0) {
      console.log('⚠️  No users found in database')
      console.log('   Create first user via /admin/create-first-user')
    } else {
      console.log(`✅ Found ${result.rows.length} user(s):`)
      console.log('')

      result.rows.forEach((user, index) => {
        console.log(`User #${index + 1}:`)
        console.log(`  ID: ${user.id}`)
        console.log(`  Email: ${user.email}`)
        console.log(`  Name: ${user.name || '(not set)'}`)
        console.log(`  Role: ${user.role || '⚠️  NULL - THIS IS THE PROBLEM!'}`)
        console.log(`  Created: ${user.created_at}`)
        console.log('')

        if (!user.role) {
          console.log('  🔴 PROBLEM: Role is NULL!')
          console.log('  💡 FIX: Run this SQL in Supabase:')
          console.log(`     UPDATE users SET role = 'admin' WHERE email = '${user.email}';`)
          console.log('')
        } else if (user.role !== 'admin' && user.role !== 'manager') {
          console.log(`  ⚠️  WARNING: Invalid role "${user.role}"`)
          console.log('  💡 Valid roles are: admin, manager')
          console.log('')
        } else {
          console.log(`  ✅ Role is valid: ${user.role}`)
          console.log('  ✅ Can upload media: YES')
          console.log('')
        }
      })

      // Check if any user has NULL role
      const usersWithNullRole = result.rows.filter(u => !u.role)

      if (usersWithNullRole.length > 0) {
        console.log('🔴 QUICK FIX FOR ALL USERS:')
        console.log('   Copy this SQL to Supabase Dashboard → SQL Editor:')
        console.log('')
        console.log('   UPDATE users SET role = \'admin\' WHERE role IS NULL;')
        console.log('')
      }
    }

    client.release()
    await pool.end()

    console.log('✨ Debug complete!')
    console.log('')
    console.log('📝 Summary:')
    console.log(`   - Total users: ${result.rows.length}`)
    console.log(`   - Users with NULL role: ${result.rows.filter(u => !u.role).length}`)
    console.log(`   - Users with valid role: ${result.rows.filter(u => u.role).length}`)

  } catch (error) {
    console.error('❌ Error:', error.message)
    await pool.end().catch(() => {})
    process.exit(1)
  }
}

debugUser()
