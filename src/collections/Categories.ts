import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
    slug: 'categories',
    labels: {
        singular: 'Category',
        plural: 'Categories',
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'slug', 'order'],
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
            // Only admins can delete categories
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
                description: 'Category name for website display',
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
                description: 'URL-friendly identifier (e.g. instructions, taxes)',
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
            name: 'description',
            type: 'textarea',
            label: 'Description',
            admin: {
                description: 'Category description for SEO and category page',
            },
        },
        {
            name: 'order',
            type: 'number',
            defaultValue: 0,
            label: 'Order',
            admin: {
                description: 'Sorting order (lower number = higher in list)',
            },
        },
    ],
    // Default sorting by order field
    defaultSort: 'order',
}
