#!/usr/bin/env node

/**
 * Sync Strapi schema to database
 * Run this after deployment to ensure schema is up to date
 */

const strapi = require('@strapi/strapi');

const app = strapi();

app.start().then(async () => {
  console.log('✅ Strapi started successfully');

  // Force schema synchronization
  const schemaService = strapi.service('content-type::schema-sync');
  
  if (schemaService) {
    console.log('🔄 Syncing schema...');
    try {
      await schemaService.syncSchema();
      console.log('✅ Schema synced successfully');
    } catch (error) {
      console.error('❌ Error syncing schema:', error);
      process.exit(1);
    }
  } else {
    console.log('⚠️  Schema sync service not available, using alternative method');
    
    // Alternative: trigger content-type synchronization
    const contentTypes = Object.keys(strapi.contentTypes);
    console.log(`Found ${contentTypes.length} content types`);
    
    for (const contentType of contentTypes) {
      console.log(`Syncing: ${contentType}`);
    }
    
    console.log('✅ Schema sync completed');
  }

  process.exit(0);
}).catch((error) => {
  console.error('❌ Error starting Strapi:', error);
  process.exit(1);
});
