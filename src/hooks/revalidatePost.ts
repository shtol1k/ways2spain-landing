import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidatePost: CollectionAfterChangeHook = ({ doc, req: { payload } }) => {
    payload.logger.info(`Revalidating post at path: /blog/${doc.slug}`)

    try {
        revalidatePath(`/blog/${doc.slug}`)
        revalidatePath('/blog')
        revalidatePath('/') // Assuming posts might be displayed on the home page
    } catch (err) {
        payload.logger.error(`Error revalidating post: ${err}`)
    }

    return doc
}
