import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // 1. Skip internal Next.js paths, static files, and API routes
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/admin') ||
        pathname.startsWith('/static') ||
        pathname.includes('.') // Skip files (images, favicon.ico, etc.)
    ) {
        return NextResponse.next()
    }

    try {
        // 2. Fetch maintenance settings
        // Use request.nextUrl.origin to ensure we hit the same server
        const response = await fetch(`${request.nextUrl.origin}/api/globals/site-settings?depth=0`, {
            next: { revalidate: 60 }, // Cache check for 60 seconds
        })

        if (response.ok) {
            const settings = await response.json()
            const maintenanceEnabled = settings?.maintenance?.enabled

            // 3. Handle Maintenance Mode
            if (maintenanceEnabled) {
                // Build the return URL to allow continuing later (optional, currently just checking cookie)
                const payloadToken = request.cookies.get('payload-token')

                // If not authenticated and not already on the coming-soon page
                if (!payloadToken && pathname !== '/coming-soon') {
                    return NextResponse.redirect(new URL('/coming-soon', request.url))
                }
            } else {
                // Maintenance is OFF
                // If user is on coming-soon page, redirect them to home
                if (pathname === '/coming-soon') {
                    return NextResponse.redirect(new URL('/', request.url))
                }
            }
        }
    } catch (error) {
        // If we can't fetch settings/db is down, we usually shouldn't block the site
        // unless we want to be safe. Failing open (allowing access) is usually better.
        console.error('Middleware maintenance check failed:', error)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        // Match all request paths except for the ones starting with:
        // - api (API routes)
        // - _next/static (static files)
        // - _next/image (image optimization files)
        // - favicon.ico (favicon file)
        // - admin (admin panel)
        '/((?!api|_next/static|_next/image|admin|favicon.ico).*)',
    ],
}
