import { getPayload } from 'payload'
import config from '@payload-config'
import { Post, Category, Tag } from '@/payload-types'

// Initialize payload
const getPayloadClient = async () => {
    return await getPayload({ config })
}

export type PostsResponse = {
    docs: Post[]
    totalDocs: number
    totalPages: number
    page: number
    hasNextPage: boolean
    hasPrevPage: boolean
}

/**
 * Get all published posts with pagination
 */
export async function getPosts(page: number = 1, limit: number = 9): Promise<PostsResponse> {
    const payload = await getPayloadClient()

    const result = await payload.find({
        collection: 'posts',
        where: {
            status: {
                equals: 'published',
            },
            // Ensure we don't show future posts
            publishedAt: {
                less_than_equal: new Date().toISOString(),
            },
        },
        sort: '-publishedAt',
        depth: 2, // Populate relationships (author, category, tags)
        page,
        limit,
    })

    return {
        docs: result.docs as Post[],
        totalDocs: result.totalDocs,
        totalPages: result.totalPages,
        page: result.page || 1,
        hasNextPage: result.hasNextPage,
        hasPrevPage: result.hasPrevPage,
    }
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
    const payload = await getPayloadClient()

    const result = await payload.find({
        collection: 'posts',
        where: {
            slug: {
                equals: slug,
            },
            status: {
                equals: 'published',
            },
        },
        depth: 2,
        limit: 1,
    })

    return (result.docs[0] as Post) || null
}

/**
 * Get featured post (most recent featured or just most recent)
 */
export async function getFeaturedPost(): Promise<Post | null> {
    const payload = await getPayloadClient()

    // First try to find explicit featured post
    // Note: We haven't added 'isFeatured' to schema yet based on previous steps, 
    // but we can query by latest for now or add the field later.
    // For now, let's just get the latest post.

    const result = await payload.find({
        collection: 'posts',
        where: {
            status: {
                equals: 'published',
            },
        },
        sort: '-publishedAt',
        depth: 2,
        limit: 1,
    })

    return (result.docs[0] as Post) || null
}

/**
 * Get limited number of recent posts (e.g. for homepage or sidebar)
 */
export async function getRecentPosts(limit: number = 3, excludeId?: number): Promise<Post[]> {
    const payload = await getPayloadClient()

    const where: any = {
        status: {
            equals: 'published',
        },
    }

    if (excludeId) {
        where.id = {
            not_equals: excludeId,
        }
    }

    const result = await payload.find({
        collection: 'posts',
        where,
        sort: '-publishedAt',
        depth: 1,
        limit,
    })

    return result.docs as Post[]
}

/**
 * Get all categories
 */
export async function getCategories(): Promise<Category[]> {
    const payload = await getPayloadClient()

    const result = await payload.find({
        collection: 'categories',
        sort: 'order',
        limit: 100,
    })

    return result.docs as Category[]
}

/**
 * Get posts by category slug
 */
export async function getPostsByCategory(slug: string, page: number = 1, limit: number = 9): Promise<PostsResponse> {
    const payload = await getPayloadClient()

    // First find category ID
    const categoryResult = await payload.find({
        collection: 'categories',
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    if (categoryResult.docs.length === 0) {
        return {
            docs: [],
            totalDocs: 0,
            totalPages: 0,
            page: 1,
            hasNextPage: false,
            hasPrevPage: false,
        }
    }

    const categoryId = categoryResult.docs[0].id

    const result = await payload.find({
        collection: 'posts',
        where: {
            'category.id': {
                equals: categoryId,
            },
            status: {
                equals: 'published',
            },
        },
        sort: '-publishedAt',
        depth: 2,
        page,
        limit,
    })

    return {
        docs: result.docs as Post[],
        totalDocs: result.totalDocs,
        totalPages: result.totalPages,
        page: result.page || 1,
        hasNextPage: result.hasNextPage,
        hasPrevPage: result.hasPrevPage,
    }
}
