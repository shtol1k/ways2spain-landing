/**
 * API client for Payload CMS
 * Handles all communication with Payload REST API
 */

// Use relative path for runtime requests (browser/server)
// For build time, construct full URL from env or use localhost
function getApiUrl(): string {
  // During build or in server components, use full URL
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_SERVER_URL || process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';
  }
  // In browser, use relative path (current origin)
  return '';
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  testimonial: string;
  date: string;
  photo?: {
    url?: string;
    filename?: string;
    alt?: string;
    sizes?: {
      thumbnail?: string;
      card?: string;
    };
  };
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    telegram?: string;
  };
  published?: boolean;
  locale?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TestimonialsResponse {
  docs: Testimonial[];
  totalDocs: number;
  limit: number;
  page: number;
  totalPages: number;
}

/**
 * Fetch all published testimonials from Payload CMS
 * @param locale - Language locale (default: 'uk')
 * @returns Array of testimonials
 */
export async function getTestimonials(locale: string = 'uk'): Promise<Testimonial[]> {
  try {
    const apiUrl = getApiUrl();
    const response = await fetch(
      `${apiUrl}/api/testimonials?where[published][equals]=true&sort=-date&locale=${locale}&depth=1`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Next.js caching: revalidate every 60 seconds
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials: ${response.statusText}`);
    }

    const data: TestimonialsResponse = await response.json();
    return data.docs;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    // Return empty array instead of throwing to prevent build failures
    return [];
  }
}

/**
 * Get image URL from Payload media object
 * Handles both R2 storage and local storage
 * @param photo - Photo object from Payload
 * @returns Image URL or undefined
 */
export function getImageUrl(photo?: Testimonial['photo']): string | undefined {
  if (!photo) return undefined;

  // If photo has url property, use it
  if (photo.url) return photo.url;

  // If photo has filename, construct URL
  if (photo.filename) {
    const apiUrl = getApiUrl();
    return `${apiUrl}/api/media/file/${photo.filename}`;
  }

  return undefined;
}
