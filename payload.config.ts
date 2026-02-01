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
    // Custom branding will be added later
  },

  // Cookies and sessions configuration
  cookies: {
    suffix: 'w2s-payload', // Unique suffix to avoid cookie conflicts
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production', // true for production (HTTPS)
    domain: undefined, // Let browser handle domain automatically
  },

  // Collections
  collections: [
    Users,
    Testimonials,
    Media,
  ],

  // Server configuration
  // Auto-detect server URL from Vercel or use explicit env var
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

  // Cloudflare R2 Storage Plugin (S3-compatible)
  // In production, files are stored in Cloudflare R2
  // In development, files are stored locally
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media', // Store media files in /media folder
          generateFileURL: ({ filename, prefix }) => {
            // If filename is null/undefined (e.g., for image sizes that weren't generated),
            // return empty string as URL is not available
            if (!filename) {
              return ''
            }
            // Use R2 public URL for production, local for development
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
        // Cloudflare R2 endpoint format with region support (e.g., 'eu' for EU region)
        endpoint: process.env.R2_REGION
          ? `https://${process.env.R2_ACCOUNT_ID}.${process.env.R2_REGION}.r2.cloudflarestorage.com`
          : `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
        },
        region: 'auto', // R2 uses 'auto' for region
        forcePathStyle: true, // Required for R2 compatibility
      },
      // Disable local storage when R2 is configured
      // Check if MEDIA_STORAGE is explicitly set to 'r2'
      // Or if running in production with R2 credentials
      disableLocalStorage: (() => {
        // Debug logging (check Vercel logs)
        if (process.env.NODE_ENV !== 'production') {
          console.log('🔍 Storage Configuration Debug:')
          console.log('  - MEDIA_STORAGE:', process.env.MEDIA_STORAGE)
          console.log('  - R2_BUCKET_NAME:', process.env.R2_BUCKET_NAME)
          console.log('  - R2_ACCESS_KEY_ID:', process.env.R2_ACCESS_KEY_ID ? 'set' : 'NOT SET')
          console.log('  - R2_PUBLIC_URL:', process.env.R2_PUBLIC_URL || 'NOT SET')
          console.log('  - NODE_ENV:', process.env.NODE_ENV)
        }

        // Explicit local storage setting
        if (process.env.MEDIA_STORAGE === 'local') {
          console.log('📁 Using LOCAL storage (explicit)')
          return false
        }
        // Explicit R2 storage setting
        if (process.env.MEDIA_STORAGE === 'r2') {
          console.log('☁️  Using R2 storage (explicit)')
          return true
        }
        // Auto-detect: if R2_BUCKET_NAME is set, assume R2
        const autoDetect = !!process.env.R2_BUCKET_NAME
        console.log('🤖 Auto-detect:', autoDetect ? 'R2' : 'local')
        return autoDetect
      })(),
    }),
  ],
})
