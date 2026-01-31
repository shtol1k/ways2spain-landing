import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
  },
  access: {
    read: () => true, // Public read for displaying on website
    create: ({ req }) => {
      const user = req.user
      if (!user) return false
      return user.role === 'admin' || user.role === 'manager'
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
    staticDir: 'public/media',
    staticURL: '/media',
    disableLocalStorage: true,
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
      },
      {
        name: 'medium',
        width: 800,
        height: 600,
      },
      {
        name: 'large',
        width: 1920,
        height: 1080,
      },
    ],
  },
  fields: [
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
}
