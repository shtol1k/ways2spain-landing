import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from 'sharp'
import { Users } from './src/collections/Users'
import { Testimonials } from './src/collections/Testimonials'
import { Media } from './src/collections/Media'

export default buildConfig({
  // Rich text editor
  editor: lexicalEditor(),

  // Database configuration
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgresql://atamanov@localhost:5432/w2s_local',
    },
    // Disable push mode - we use migrations for all schema changes
    push: false,
  }),

  // Sharp for image processing
  sharp,

  // Admin panel configuration
  admin: {
    user: Users.slug,
    meta: {
      title: 'Ways2Spain Admin',
      description: 'Content Management System',
    },
  },

  // Cookies and sessions configuration
  cookies: {
    suffix: 'w2s-payload',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    domain: undefined,
  },

  // Collections
  collections: [
    Users,
    Testimonials,
    Media,
  ],

  // Server configuration
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
    'http://localhost:3000',
  ],
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
    'http://localhost:3000',
  ],

  // Security
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-this-in-production',

  // Typescript
  typescript: {
    outputFile: './src/types/payload.ts',
  },

  // Folders feature (beta) - enables folder organization for collections
  folders: {
    browseByFolder: true, // Enable "browse by folder" view in Admin UI
  },

  // Cloudflare R2 Storage Plugin (S3-compatible)
  plugins: process.env.MEDIA_STORAGE === 'local' ? [] : [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
          generateFileURL: ({ filename, prefix }) => {
            // IMPORTANT: Return undefined (not empty string!) when filename is missing
            // Empty string causes React rendering crash in Payload Admin UI
            if (!filename) {
              return undefined as unknown as string
            }
            // Use R2 public URL for production
            if (process.env.R2_PUBLIC_URL) {
              return `${process.env.R2_PUBLIC_URL}/${prefix}/${filename}`
            }
            // For local development without R2
            return `/api/media/file/${filename}`
          },
        },
      },
      bucket: process.env.R2_BUCKET_NAME || 'w2s-media',
      config: {
        endpoint: process.env.R2_REGION
          ? `https://${process.env.R2_ACCOUNT_ID}.${process.env.R2_REGION}.r2.cloudflarestorage.com`
          : `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
        },
        region: 'auto',
        forcePathStyle: true,
      },
    }),
  ],

  // Debug logging
  onInit: async () => {
    const storageMode = process.env.MEDIA_STORAGE
    console.log('🔍 Payload Storage Configuration:')
    console.log(`  - MEDIA_STORAGE: ${storageMode}`)
    console.log(`  - Plugins: ${storageMode === 'local' ? 'NONE (using local staticDir)' : 's3Storage (R2)'}`)
    console.log(`  - R2 URL: ${process.env.R2_PUBLIC_URL}`)

    console.log('🔐 Payload Auth Configuration:')
    console.log(`  - NODE_ENV: ${process.env.NODE_ENV}`)
    console.log(`  - serverURL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')}`)
    console.log(`  - secure cookie: ${process.env.NODE_ENV === 'production'}`)
  },
})
