import { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
    slug: 'authors',
    labels: {
        singular: 'Author',
        plural: 'Authors',
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role', 'photo'],
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
            // Only admins can delete authors
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
                description: 'Full author name',
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
                description: 'URL-friendly identifier (e.g. maria-shevchenko)',
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
        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
            label: 'Photo',
            admin: {
                description: 'Author photo for blog display',
            },
        },
        {
            name: 'bio',
            type: 'textarea',
            label: 'Bio',
            admin: {
                description: 'Short biography (2-3 sentences)',
            },
        },
        {
            name: 'role',
            type: 'text',
            label: 'Role',
            admin: {
                description: 'Position or role (e.g. CEO, Immigration Expert)',
            },
        },
        {
            name: 'socialLinks',
            type: 'group',
            label: 'Social Links',
            admin: {
                description: 'Links to social media profiles',
            },
            fields: [
                {
                    name: 'linkedin',
                    type: 'text',
                    label: 'LinkedIn',
                    admin: {
                        description: 'LinkedIn profile URL',
                    },
                },
                {
                    name: 'twitter',
                    type: 'text',
                    label: 'Twitter/X',
                    admin: {
                        description: 'Twitter/X profile URL',
                    },
                },
                {
                    name: 'instagram',
                    type: 'text',
                    label: 'Instagram',
                    admin: {
                        description: 'Instagram profile URL',
                    },
                },
                {
                    name: 'facebook',
                    type: 'text',
                    label: 'Facebook',
                    admin: {
                        description: 'Facebook profile URL',
                    },
                },
                {
                    name: 'telegram',
                    type: 'text',
                    label: 'Telegram',
                    admin: {
                        description: 'Telegram URL or username',
                    },
                },
            ],
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            label: 'User Account',
            admin: {
                description: 'Link to CMS user account (optional)',
            },
        },
    ],
    // Default sorting by name
    defaultSort: 'name',
}
