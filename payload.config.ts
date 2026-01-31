import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
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
    secure: false, // Set to true in production with HTTPS
    domain: undefined, // Let browser handle domain automatically
  },

  // Collections
  collections: [
    Users,
    Testimonials,
    Media,
  ],

  // Server configuration
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
    'http://localhost:3000',
  ],
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
    'http://localhost:3000',
  ],

  // Security
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-this-in-production',

  // Typescript
  typescript: {
    outputFile: './src/types/payload.ts',
  },

  // Media configuration (local storage for now)
  // Cloudflare R2 will be configured later
  plugins: [],
})
