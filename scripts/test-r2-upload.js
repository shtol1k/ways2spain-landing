/**
 * Test R2 upload functionality
 * This will test if R2 credentials are correct and upload works
 */

import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const testR2Upload = async () => {
  console.log('🧪 Testing R2 upload functionality...')
  console.log('')

  // Check required environment variables
  const requiredVars = [
    'R2_ACCOUNT_ID',
    'R2_ACCESS_KEY_ID',
    'R2_SECRET_ACCESS_KEY',
    'R2_BUCKET_NAME',
    'R2_REGION',
    'R2_PUBLIC_URL'
  ]

  const missingVars = requiredVars.filter(varName => !process.env[varName])

  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:')
    missingVars.forEach(varName => {
      console.log(`   - ${varName}`)
    })
    console.log('')
    console.log('💡 Set these in .env.local (local) or Vercel (production)')
    process.exit(1)
  }

  console.log('✅ All required variables are set')
  console.log('')
  console.log('📋 Configuration:')
  console.log(`   Account ID: ${process.env.R2_ACCOUNT_ID}`)
  console.log(`   Region: ${process.env.R2_REGION}`)
  console.log(`   Bucket: ${process.env.R2_BUCKET_NAME}`)
  console.log(`   Public URL: ${process.env.R2_PUBLIC_URL}`)
  console.log(`   Access Key: ${process.env.R2_ACCESS_KEY_ID?.substring(0, 10)}...`)
  console.log('')

  // Determine endpoint
  const endpoint = process.env.R2_REGION
    ? `https://${process.env.R2_ACCOUNT_ID}.${process.env.R2_REGION}.r2.cloudflarestorage.com`
    : `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`

  console.log(`🔗 Endpoint: ${endpoint}`)
  console.log('')

  // Create S3 client (R2-compatible)
  const client = new S3Client({
    region: 'auto',
    endpoint,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
    forcePathStyle: true, // Required for R2
  })

  try {
    console.log('⏳ Testing connection...')

    // Test 1: List objects in bucket
    console.log('📦 Listing objects in bucket...')
    try {
      const listCommand = new ListObjectsV2Command({
        Bucket: process.env.R2_BUCKET_NAME,
        MaxKeys: 5,
      })

      const response = await client.send(listCommand)

      console.log('✅ Connection successful!')
      console.log(`   Found ${response.Contents?.length || 0} objects in bucket`)

      if (response.Contents?.length > 0) {
        console.log('   Recent files:')
        response.Contents.slice(0, 3).forEach(obj => {
          console.log(`     - ${obj.Key} (${obj.Size} bytes)`)
        })
      }
    } catch (error) {
      if (error.name === 'NoSuchBucket') {
        console.error('❌ Bucket does not exist!')
        console.log(`   Bucket name: ${process.env.R2_BUCKET_NAME}`)
        console.log('💡 Create the bucket in Cloudflare R2 Dashboard')
      } else if (error.name === 'AccessDenied') {
        console.error('❌ Access denied!')
        console.log('💡 Check your R2 API token has write permissions')
      } else {
        console.error('❌ Error listing objects:', error.message)
      }
      throw error
    }

    console.log('')

    // Test 2: Upload a test file
    console.log('📤 Uploading test file...')

    const testKey = 'test/test-file.txt'
    const testContent = 'R2 upload test at ' + new Date().toISOString()

    const putCommand = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: testKey,
      Body: testContent,
      ContentType: 'text/plain',
    })

    await client.send(putCommand)

    console.log('✅ Test file uploaded successfully!')
    console.log(`   Key: ${testKey}`)
    console.log(`   Public URL: ${process.env.R2_PUBLIC_URL}/${testKey}`)
    console.log('')

    // Verify upload
    console.log('🔍 Verifying upload...')
    const verifyCommand = new ListObjectsV2Command({
      Bucket: process.env.R2_BUCKET_NAME,
      Prefix: 'test/',
    })

    const verifyResponse = await client.send(verifyCommand)

    if (verifyResponse.Contents?.some(obj => obj.Key === testKey)) {
      console.log('✅ Upload verified!')
    } else {
      console.log('⚠️  Warning: Test file not found in listing')
    }

    console.log('')
    console.log('✨ All tests passed!')
    console.log('')
    console.log('🎯 R2 is configured correctly!')
    console.log('   If Payload still cannot upload, check:')
    console.log('   1. Vercel environment variables (all R2_* vars set)')
    console.log('   2. Vercel function logs for errors')
    console.log('   3. Payload admin error messages')

  } catch (error) {
    console.error('')
    console.error('❌ Test failed!')
    console.error('Error:', error.message)
    console.error('')

    if (error.name === 'InvalidAccessKeyId') {
      console.log('💌 Invalid Access Key ID')
      console.log('   Check R2_ACCESS_KEY_ID in Vercel')
    } else if (error.name === 'SignatureDoesNotMatch') {
      console.log('💌 Invalid Secret Access Key')
      console.log('   Check R2_SECRET_ACCESS_KEY in Vercel')
    } else if (error.name === 'AccessDenied') {
      console.log('💌 Access Denied')
      console.log('   Check API token permissions in Cloudflare')
    } else {
      console.log('Error details:', error)
    }

    process.exit(1)
  }
}

testR2Upload()
