import payload from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const init = async () => {
  console.log('🚀 Initializing Payload CMS...')
  
  try {
    // Initialize Payload with config inline
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-this-in-production',
      local: true,
      database: postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URL || 'postgresql://atamanov@localhost:5432/w2s_local',
        },
      }),
      admin: {
        user: 'users',
      },
      collections: [
        {
          slug: 'users',
          auth: true,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'role',
              type: 'select',
              defaultValue: 'manager',
              options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Manager', value: 'manager' },
              ],
            },
          ],
        },
        {
          slug: 'testimonials',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'testimonial', type: 'textarea', required: true },
            { name: 'date', type: 'date', required: true },
          ],
        },
      ],
      serverURL: 'http://localhost:3000',
      cors: ['http://localhost:3000'],
      csrf: ['http://localhost:3000'],
    })
    
    console.log('✅ Payload initialized successfully!')
    console.log('📊 Database:', process.env.DATABASE_URL)
    console.log('')
    console.log('🎯 Collections:', ['users', 'testimonials'])
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error initializing Payload:', error)
    process.exit(1)
  }
}

init()
