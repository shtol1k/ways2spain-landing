import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
    slug: 'categories',
    labels: {
        singular: 'Категорія',
        plural: 'Категорії',
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'slug', 'order'],
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
            admin: {
                description: 'Назва категорії для відображення на сайті',
            },
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            admin: {
                description: 'URL-friendly ідентифікатор (наприклад: instrukcii, podatkyi)',
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
        {
            name: 'description',
            type: 'textarea',
            admin: {
                description: 'Опис категорії для SEO та сторінки категорії',
            },
        },
        {
            name: 'order',
            type: 'number',
            defaultValue: 0,
            admin: {
                description: 'Порядок сортування (менше число = вище в списку)',
            },
        },
    ],
    // Default sorting by order field
    defaultSort: 'order',
}
