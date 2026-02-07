import { getPayload } from 'payload'
import config from '@payload-config'
import { Post, Category, Tag, Author } from '@/payload-types'

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
 * Get all published post slugs (for sitemap)
 */
export async function getAllPostSlugs(): Promise<Array<{ slug: string; updatedAt: string }>> {
    try {
        const payload = await getPayloadClient()
        const result = await payload.find({
            collection: 'posts',
            sort: '-publishedAt',
            limit: 2000,
            depth: 0,
        })
        return (result.docs as Post[])
            .map((p) => ({ 
                slug: p.slug ?? '', 
                updatedAt: p.updatedAt || new Date().toISOString()
            }))
            .filter((p) => p.slug)
    } catch (error) {
        console.error('Error fetching post slugs:', error)
        return []
    }
}

/**
 * Get all published posts with pagination
 */
export async function getPosts(page: number = 1, limit: number = 9): Promise<PostsResponse> {
    try {
        const payload = await getPayloadClient()

        const result = await payload.find({
            collection: 'posts',
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
    } catch (error) {
        console.error('Error fetching posts:', error)
        return {
            docs: [],
            totalDocs: 0,
            totalPages: 0,
            page: 1,
            hasNextPage: false,
            hasPrevPage: false,
        }
    }
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const payload = await getPayloadClient()

        const result = await payload.find({
            collection: 'posts',
            where: {
                slug: {
                    equals: slug,
                },
            },
            depth: 2,
            limit: 1,
        })

        return (result.docs[0] as Post) || null
    } catch (error) {
        console.error(`Error fetching post by slug "${slug}":`, error)
        return null
    }
}

/**
 * Get limited number of recent posts (e.g. for homepage or sidebar)
 */
export async function getRecentPosts(limit: number = 3, excludeId?: number): Promise<Post[]> {
    try {
        const payload = await getPayloadClient()

        const where: { id?: { not_equals: number } } = {}

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
    } catch (error) {
        console.error('Error fetching recent posts:', error)
        return []
    }
}

/**
 * Get all categories
 */
export async function getCategories(): Promise<Category[]> {
    try {
        const payload = await getPayloadClient()

        const result = await payload.find({
            collection: 'categories',
            sort: 'order',
            limit: 100,
        })

        return result.docs as Category[]
    } catch (error) {
        console.error('Error fetching categories:', error)
        return []
    }
}

/**
 * Get category by slug
 */
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
    try {
        const payload = await getPayloadClient()

        const result = await payload.find({
            collection: 'categories',
            where: {
                slug: {
                    equals: slug,
                },
            },
            limit: 1,
        })

        return (result.docs[0] as Category) || null
    } catch (error) {
        console.error(`Error fetching category by slug "${slug}":`, error)
        return null
    }
}

/**
 * Get categories with post count (for filter pills)
 */
export async function getCategoriesWithCount(): Promise<Array<Category & { postCount: number }>> {
    try {
        const payload = await getPayloadClient()
        const categories = await getCategories()

        const withCount = await Promise.all(
            categories.map(async (cat) => {
                try {
                    const result = await payload.find({
                        collection: 'posts',
                        where: {
                            'category.id': { equals: cat.id },
                        },
                        limit: 0,
                    })
                    return { ...cat, postCount: result.totalDocs }
                } catch (error) {
                    console.error(`Error counting posts for category "${cat.slug}":`, error)
                    return { ...cat, postCount: 0 }
                }
            })
        )

        return withCount
    } catch (error) {
        console.error('Error fetching categories with count:', error)
        return []
    }
}

/**
 * Get all authors
 */
export async function getAuthors(): Promise<Author[]> {
    try {
        const payload = await getPayloadClient()
        const result = await payload.find({
            collection: 'authors',
            sort: 'name',
            limit: 100,
        })
        return result.docs as Author[]
    } catch (error) {
        console.error('Error fetching authors:', error)
        return []
    }
}

/**
 * Get author by slug
 */
export async function getAuthorBySlug(slug: string): Promise<Author | null> {
    try {
        const payload = await getPayloadClient()
        const result = await payload.find({
            collection: 'authors',
            where: { slug: { equals: slug } },
            limit: 1,
        })
        return (result.docs[0] as Author) || null
    } catch (error) {
        console.error(`Error fetching author by slug "${slug}":`, error)
        return null
    }
}

/**
 * Get posts by author slug
 */
export async function getPostsByAuthor(slug: string, page: number = 1, limit: number = 9): Promise<PostsResponse> {
    try {
        const payload = await getPayloadClient()
        const authorResult = await payload.find({
            collection: 'authors',
            where: { slug: { equals: slug } },
            limit: 1,
        })
        if (authorResult.docs.length === 0) {
            return {
                docs: [],
                totalDocs: 0,
                totalPages: 0,
                page: 1,
                hasNextPage: false,
                hasPrevPage: false,
            }
        }
        const authorId = authorResult.docs[0].id
        const result = await payload.find({
            collection: 'posts',
            where: { 'author.id': { equals: authorId } },
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
    } catch (error) {
        console.error(`Error fetching posts by author "${slug}":`, error)
        return {
            docs: [],
            totalDocs: 0,
            totalPages: 0,
            page: 1,
            hasNextPage: false,
            hasPrevPage: false,
        }
    }
}

/**
 * Get all tags
 */
export async function getTags(): Promise<Tag[]> {
    try {
        const payload = await getPayloadClient()
        const result = await payload.find({
            collection: 'tags',
            sort: 'name',
            limit: 200,
        })
        return result.docs as Tag[]
    } catch (error) {
        console.error('Error fetching tags:', error)
        return []
    }
}

/**
 * Get tag by slug
 */
export async function getTagBySlug(slug: string): Promise<Tag | null> {
    try {
        const payload = await getPayloadClient()
        const result = await payload.find({
            collection: 'tags',
            where: { slug: { equals: slug } },
            limit: 1,
        })
        return (result.docs[0] as Tag) || null
    } catch (error) {
        console.error(`Error fetching tag by slug "${slug}":`, error)
        return null
    }
}

/**
 * Get posts by tag slug
 */
export async function getPostsByTag(slug: string, page: number = 1, limit: number = 9): Promise<PostsResponse> {
    try {
        const payload = await getPayloadClient()
        const tagResult = await payload.find({
            collection: 'tags',
            where: { slug: { equals: slug } },
            limit: 1,
        })
        if (tagResult.docs.length === 0) {
            return {
                docs: [],
                totalDocs: 0,
                totalPages: 0,
                page: 1,
                hasNextPage: false,
                hasPrevPage: false,
            }
        }
        const tagId = tagResult.docs[0].id
        const result = await payload.find({
            collection: 'posts',
            where: {
                'tags.id': {
                    equals: tagId,
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
    } catch (error) {
        console.error(`Error fetching posts by tag "${slug}":`, error)
        return {
            docs: [],
            totalDocs: 0,
            totalPages: 0,
            page: 1,
            hasNextPage: false,
            hasPrevPage: false,
        }
    }
}

/**
 * Get posts by category slug
 */
export async function getPostsByCategory(slug: string, page: number = 1, limit: number = 9): Promise<PostsResponse> {
    try {
        const payload = await getPayloadClient()

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
    } catch (error) {
        console.error(`Error fetching posts by category "${slug}":`, error)
        return {
            docs: [],
            totalDocs: 0,
            totalPages: 0,
            page: 1,
            hasNextPage: false,
            hasPrevPage: false,
        }
    }
}
