import { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
    slug: 'tags',
    labels: {
        singular: 'Tag',
        plural: 'Tags',
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'slug'],
        group: 'Blog',
    },
    access: {
        // Public read for displaying on website
        read: () => true,
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
            // Only admins can delete tags
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
            label: 'Name',
            admin: {
                description: 'Tag name for website display',
            },
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            label: 'Slug (URL)',
            admin: {
                description: 'URL-friendly identifier (e.g. digital-nomad)',
            },
            validate: (value: string | null | undefined) => {
                if (!value) return 'Slug is required'
                const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
                if (!slugRegex.test(value)) {
                    return 'Slug must contain only lowercase latin letters, numbers and hyphens'
                }
                return true
            },
        },
    ],
    // Default sorting by name
    defaultSort: 'name',
}
