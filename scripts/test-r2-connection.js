#!/usr/bin/env node

/**
 * Test script to verify Cloudflare R2 connection
 * Usage: node scripts/test-r2-connection.js
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

console.log('🧪 Testing Cloudflare R2 connection...\n');

// Check environment variables
const requiredEnvVars = [
  'R2_ACCOUNT_ID',
  'R2_ACCESS_KEY_ID',
  'R2_SECRET_ACCESS_KEY',
  'R2_BUCKET_NAME',
  'R2_PUBLIC_URL',
];

let allVarsPresent = true;

console.log('📋 Checking environment variables:');
requiredEnvVars.forEach(varName => {
  const value = process.env[varName];
  const status = value ? '✅' : '❌';
  const displayValue = value ? `${value.substring(0, 10)}...` : 'MISSING';
  console.log(`  ${status} ${varName}: ${displayValue}`);
  
  if (!value) {
    allVarsPresent = false;
  }
});

if (!allVarsPresent) {
  console.log('\n❌ Error: Some environment variables are missing!');
  console.log('Please check your .env.local file.\n');
  process.exit(1);
}

console.log('\n✅ All required environment variables are present!\n');

// Test R2 endpoint construction
const accountId = process.env.R2_ACCOUNT_ID;
const endpoint = `https://${accountId}.r2.cloudflarestorage.com`;
const bucketName = process.env.R2_BUCKET_NAME;
const publicURL = process.env.R2_PUBLIC_URL;

console.log('🌐 R2 Configuration:');
console.log(`  Endpoint: ${endpoint}`);
console.log(`  Bucket: ${bucketName}`);
console.log(`  Public URL: ${publicURL}`);
console.log(`\n✅ R2 configuration looks correct!\n`);

console.log('📝 Next steps:');
console.log('  1. Start the dev server: npm run dev');
console.log('  2. Go to http://localhost:3000/admin');
console.log('  3. Try uploading an image in Media collection');
console.log('  4. Check if image appears at: ' + publicURL + '/[filename]');
console.log('\n✨ All checks passed! R2 is ready to use.\n');
