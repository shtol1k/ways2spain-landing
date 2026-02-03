import { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
    slug: 'authors',
    labels: {
        singular: 'Автор',
        plural: 'Автори',
    },
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role', 'photo'],
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
            admin: {
                description: 'Повне ім\'я автора',
            },
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            admin: {
                description: 'URL-friendly ідентифікатор (наприклад: maria-shevchenko)',
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
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description: 'Фото автора для відображення в блозі',
            },
        },
        {
            name: 'bio',
            type: 'textarea',
            admin: {
                description: 'Коротка біографія автора (2-3 речення)',
            },
        },
        {
            name: 'role',
            type: 'text',
            admin: {
                description: 'Посада або роль (наприклад: CEO, Експерт з імміграції)',
            },
        },
        {
            name: 'socialLinks',
            type: 'group',
            label: 'Соціальні мережі',
            admin: {
                description: 'Посилання на профілі в соціальних мережах',
            },
            fields: [
                {
                    name: 'linkedin',
                    type: 'text',
                    label: 'LinkedIn',
                    admin: {
                        description: 'URL профілю LinkedIn',
                    },
                },
                {
                    name: 'twitter',
                    type: 'text',
                    label: 'Twitter/X',
                    admin: {
                        description: 'URL профілю Twitter/X',
                    },
                },
                {
                    name: 'instagram',
                    type: 'text',
                    label: 'Instagram',
                    admin: {
                        description: 'URL профілю Instagram',
                    },
                },
                {
                    name: 'facebook',
                    type: 'text',
                    label: 'Facebook',
                    admin: {
                        description: 'URL профілю Facebook',
                    },
                },
                {
                    name: 'telegram',
                    type: 'text',
                    label: 'Telegram',
                    admin: {
                        description: 'URL або username в Telegram',
                    },
                },
            ],
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            admin: {
                description: 'Зв\'язок з обліковим записом користувача CMS (опціонально)',
            },
        },
    ],
    // Default sorting by name
    defaultSort: 'name',
}
