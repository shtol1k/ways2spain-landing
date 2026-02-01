/**
 * This script deletes dev mode migrations (batch = -1) from the payload_migrations table.
 * This is necessary to prevent the "It looks like you've run Payload in dev mode" prompt in CI/CD.
 * More info: https://github.com/payloadcms/payload/discussions/11980
 */

import pg from 'pg';
import dotenv from 'dotenv';

// Load .env.local for local development
dotenv.config({ path: '.env.local' });

const { Client } = pg;

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  console.error('❌ DATABASE_URL environment variable is not set');
  console.error('💡 Tip: Make sure .env.local file exists with DATABASE_URL');
  process.exit(1);
}

const client = new Client({ connectionString: dbUrl });

try {
  await client.connect();
  console.log('✅ Connected to database');

  // Check if payload_migrations table exists
  const checkTable = await client.query(`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'payload_migrations'
    );
  `);

  if (!checkTable.rows[0].exists) {
    console.log('⚠️  payload_migrations table does not exist yet. No cleanup needed.');
    console.log('💡 This is normal for first-time setup. Proceeding with migrations...');
    process.exit(0);
  }

  // Delete dev mode migrations (batch = -1)
  const result = await client.query(`
    DELETE FROM payload_migrations 
    WHERE batch = -1
    RETURNING id, name;
  `);

  if (result.rowCount > 0) {
    console.log(`✅ Deleted ${result.rowCount} dev mode migration(s):`);
    result.rows.forEach(row => {
      console.log(`   - ${row.name}`);
    });
  } else {
    console.log('✅ No dev mode migrations found. Database is clean.');
  }

} catch (error) {
  console.error('❌ Error cleaning up dev migrations:', error.message);
  process.exit(1);
} finally {
  await client.end();
}
