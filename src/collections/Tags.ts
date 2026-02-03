import { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
    slug: 'tags',
    labels: {
        singular: 'Тег',
        plural: 'Теги',
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'slug'],
        group: 'Блог',
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
            admin: {
                description: 'Назва тега для відображення на сайті',
            },
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            admin: {
                description: 'URL-friendly ідентифікатор (наприклад: digital-nomad, vie-legal)',
            },
            validate: (value: string | null | undefined) => {
                if (!value) return 'Slug є обов\'язковим'
                const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
                if (!slugRegex.test(value)) {
                    return 'Slug має містити тільки малі латинські літери, цифри та дефіси'
                }
                return true
            },
        },
    ],
    // Default sorting by name
    defaultSort: 'name',
}
