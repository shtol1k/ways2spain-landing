/**
 * Script to check current database schema and data
 * Run locally to verify migration status
 */

import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const { Client } = pg;

async function checkDatabase() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://atamanov@localhost:5432/w2s_local',
  });

  try {
    await client.connect();
    console.log('✅ Connected to database\n');

    // Check 1: Tables exist
    console.log('📋 Checking tables...');
    const tables = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('media', 'media_folders', 'payload_migrations')
      ORDER BY table_name;
    `);
    console.log('Tables found:', tables.rows.map(r => r.table_name).join(', '));

    // Check 2: Media table structure
    console.log('\n📊 Media table columns:');
    const mediaColumns = await client.query(`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'media'
      AND column_name IN ('id', 'filename', 'folder_id', 'folder_path', 'url')
      ORDER BY ordinal_position;
    `);
    
    if (mediaColumns.rows && Array.isArray(mediaColumns.rows)) {
      mediaColumns.rows.forEach(col => {
        console.log(`  - ${col.column_name}: ${col.data_type} (nullable: ${col.is_nullable})`);
      });
    }

    // Check 3: Media count
    const mediaCount = await client.query('SELECT COUNT(*) as count FROM media');
    console.log(`\n📈 Total media records: ${mediaCount.rows[0]?.count}`);

    // Check 4: Media with NULL folder_path
    const nullFolders = await client.query(`
      SELECT COUNT(*) as count 
      FROM media 
      WHERE folder_path IS NULL
    `);
    console.log(`📈 Media with NULL folder_path: ${nullFolders.rows[0]?.count}`);

    // Check 5: Media with folder_path = 'media'
    const defaultFolders = await client.query(`
      SELECT COUNT(*) as count 
      FROM media 
      WHERE folder_path = 'media'
    `);
    console.log(`📈 Media with folder_path='media': ${defaultFolders.rows[0]?.count}`);

    // Check 6: Sample media records
    console.log('\n📝 Sample media records:');
    const sampleMedia = await client.query(`
      SELECT id, filename, folder_id, folder_path, url
      FROM media
      LIMIT 3
    `);
    
    if (sampleMedia.rows && Array.isArray(sampleMedia.rows)) {
      sampleMedia.rows.forEach(media => {
        console.log(`  ID ${media.id}: ${media.filename}`);
        console.log(`    folder_id: ${media.folder_id}, folder_path: ${media.folder_path}`);
        console.log(`    url: ${media.url ? 'Yes' : 'No'}`);
      });
    }

    // Check 7: Migrations table
    console.log('\n📋 Migration status:');
    const migrations = await client.query(`
      SELECT name, batch, created_at 
      FROM payload_migrations 
      ORDER BY created_at DESC
    `);
    
    if (migrations.rows && Array.isArray(migrations.rows)) {
      migrations.rows.forEach(mig => {
        const status = mig.batch === '-1' ? '⚠️  Dev mode' : `✅ Batch ${mig.batch}`;
        console.log(`  ${mig.name} - ${status}`);
      });
    }

    // Check 8: Media folders
    const foldersCount = await client.query('SELECT COUNT(*) as count FROM media_folders');
    console.log(`\n📁 Media folders count: ${foldersCount.rows[0].count}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await client.end();
  }
}

checkDatabase();
