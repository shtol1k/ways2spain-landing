import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  access: {
    read: ({ req }) => {
      // Users can read themselves, admins can read everyone
      const user = req.user
      if (!user) return false
      if (user.role === 'admin') return true
      return {
        id: {
          equals: user.id,
        },
      }
    },
    create: () => false, // Only admins can create users via admin panel
    update: ({ req }) => {
      const user = req.user
      if (!user) return false
      // Admins can update any user
      // Managers can only update themselves
      return user.role === 'admin' || user.id === req.user.id
    },
    delete: ({ req }) => {
      // Only admins can delete users
      const user = req.user
      if (!user) return false
      return user.role === 'admin'
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'manager',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Manager',
          value: 'manager',
        },
      ],
      admin: {
        description: 'Admin: Full access including settings. Manager: Content management only.',
      },
    },
  ],
}
