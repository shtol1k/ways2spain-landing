import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
  },
  access: {
    read: () => true, // Public read for displaying on website
    create: ({ req }) => {
      // Debug logging (check Vercel logs)
      console.log('🔍 Media create attempt:')
      console.log('  - Has user:', !!req.user)
      console.log('  - User:', req.user ? {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
      } : 'NO USER')

      const user = req.user
      if (!user) {
        console.log('  ❌ No user found - not authenticated')
        return false
      }

      const hasAccess = user.role === 'admin' || user.role === 'manager'
      console.log('  - Role check:', user.role, '→', hasAccess ? '✅ ALLOWED' : '❌ DENIED')

      return hasAccess
    },
    update: ({ req }) => {
      const user = req.user
      if (!user) return false
      return user.role === 'admin' || user.role === 'manager'
    },
    delete: ({ req }) => {
      // Only admins can delete media
      const user = req.user
      if (!user) return false
      return user.role === 'admin'
    },
  },
  upload: {
    // Local storage directory (for development when not using R2)
    staticDir: 'public/media',
    // Note: staticURL was removed in Payload 3.x, use generateFileURL in s3Storage plugin instead
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 150,
        height: 150,
        fit: 'cover', // Crop to exact size for consistent thumbnails
      },
      {
        name: 'medium',
        width: 600,
        height: 450,
        fit: 'inside', // Fit within bounds, maintain aspect ratio
      },
      {
        name: 'large',
        width: 1200,
        height: 800,
        fit: 'inside',
      },
    ],
  },
  fields: [
    {
      name: 'folder',
      type: 'relationship',
      relationTo: 'mediaFolders',
      hasMany: false,
      admin: {
        description: 'Select a folder to organize this file (optional)',
        position: 'sidebar',
      },
      index: true,
    },
    {
      name: 'folderPath',
      type: 'text',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      admin: {
        description: 'Accessible description of the image',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data }) => {
        // SIMPLIFIED: Always set folderPath to 'media' to diagnose the issue
        // The folder relationship lookup was potentially causing failures
        // TODO: Re-enable folder lookup after confirming basic upload works
        data.folderPath = 'media'
        console.log(`📁 Setting folderPath: media (simplified hook)`)
        return data
      },
    ],
    afterChange: [
      ({ doc }) => {
        if (doc.filename) {
          const isR2 = doc.url?.includes('r2.dev') || doc.url?.includes('cloudflarestorage')
          console.log(`✅ Media uploaded${isR2 ? ' to R2' : ' locally'}: ${doc.filename}`)
          console.log(`🔗 URL: ${doc.url}`)
          console.log(`📁 Folder path: ${doc.folderPath || 'media'}`)

          // Log which sizes were created
          if (doc.sizes) {
            const sizeNames = Object.keys(doc.sizes)
            console.log(`📐 Created sizes (${sizeNames.length}): ${sizeNames.join(', ')}`)

            // Check if thumbnail was created
            if (sizeNames.includes('thumbnail')) {
              console.log(`✅ Thumbnail created: ${doc.sizes.thumbnail.url}`)
            } else {
              console.log(`⚠️  WARNING: Thumbnail was NOT created! Original size might be too small.`)
            }
          } else {
            console.log(`⚠️  WARNING: No sizes created at all!`)
          }
        }
      },
    ],
  },
}
