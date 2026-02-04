import { CollectionConfig } from 'payload'
import {
    HTMLConverterFeature,
    lexicalEditor,
    lexicalHTML
} from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
    slug: 'posts',
    labels: {
        singular: 'Стаття',
        plural: 'Статті',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'status', 'category', 'publishedAt'],
        group: 'Блог',
    },
    access: {
        // Public read for published posts
        read: ({ req }) => {
            const user = req.user

            // Admins can read everything
            if (user?.role === 'admin' || user?.role === 'manager') return true

            // Public users can only read published posts
            return {
                status: {
                    equals: 'published',
                },
            }
        },
        // Only admins/managers can create/update/delete
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
            // Only admins can delete posts
            const user = req.user
            if (!user) return false
            return user.role === 'admin'
        },
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Заголовок',
            admin: {
                description: 'Головний заголовок статті',
            },
        },
        {
            name: 'slug',
            type: 'text',
            // Відключаємо required: true, щоб адмінка не блокувала пусте поле,
            // оскільки ми генеруємо його автоматично в beforeValidate
            // required: true, 
            unique: true,
            index: true,
            label: 'Slug (URL)',
            admin: {
                description: 'URL-адреса статті (автоматично генерується з заголовку, якщо пусто)',
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        if (!value && data?.title) {
                            return data.title
                                .toString()
                                .toLowerCase()
                                .trim()
                                .replace(/\s+/g, '-')
                                .replace(/[^\w\-]+/g, '')
                                .replace(/\-\-+/g, '-')
                        }
                        return value
                    },
                ],
            },
            validate: (value) => {
                // Серверна валідація, яка спрацьовує ПІСЛЯ хука beforeValidate.
                // Так ми гарантуємо, що slug точно буде в базі.
                if (!value) {
                    return 'Slug is required (will be auto-generated from Title)'
                }
                return true
            },
        },
        {
            name: 'publishedAt',
            type: 'date',
            label: 'Дата публікації',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'draft',
            label: 'Статус',
            options: [
                { label: 'Чорновик', value: 'draft' },
                { label: 'Опубліковано', value: 'published' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'authors',
            required: true,
            label: 'Автор',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'categories',
            required: true,
            label: 'Категорія',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true,
            label: 'Теги',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'excerpt',
            type: 'textarea',
            required: true,
            label: 'Короткий опис',
            admin: {
                description: 'Текст для прев\'ю статті в списках (SEO description за замовчуванням)',
            },
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Головне зображення',
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            label: 'Контент',
            editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                    ...defaultFeatures,
                    HTMLConverterFeature({}),
                ],
            }),
        },
        {
            name: 'readTime',
            type: 'number',
            label: 'Час читання (хв)',
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'Розраховується автоматично при збереженні',
            },
            hooks: {
                beforeChange: [
                    ({ data }) => {
                        // Simple read time calculation
                        // Assuming 200 words per minute
                        // Note: This is a rough estimation based on raw content
                        if (data?.content) {
                            const text = JSON.stringify(data.content)
                            const wordCount = text.split(/\s+/).length
                            return Math.ceil(wordCount / 200)
                        }
                        return 0
                    },
                ],
            },
        },
        {
            name: 'relatedPosts',
            type: 'relationship',
            relationTo: 'posts',
            hasMany: true,
            label: 'Схожі статті',
            filterOptions: ({ id }) => {
                return {
                    id: {
                        not_equals: id,
                    },
                }
            },
        },
        {
            type: 'group',
            name: 'seo',
            label: 'SEO налаштування',
            fields: [
                {
                    name: 'metaTitle',
                    type: 'text',
                    label: 'Meta Title',
                    admin: {
                        description: 'Залиште пустим, щоб використовувати заголовок статті',
                    },
                },
                {
                    name: 'metaDescription',
                    type: 'textarea',
                    label: 'Meta Description',
                    admin: {
                        description: 'Залиште пустим, щоб використовувати короткий опис',
                    },
                },
                {
                    name: 'metaImage',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'OG Image',
                    admin: {
                        description: 'Залиште пустим, щоб використовувати головне зображення',
                    },
                },
            ],
        },
        lexicalHTML('content', { name: 'content_html' }),
    ],
}
