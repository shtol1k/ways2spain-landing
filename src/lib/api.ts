/**
 * API client for Payload CMS
 * Handles all communication with Payload REST API
 */

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

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
    const response = await fetch(
      `${API_URL}/api/testimonials?where[published][equals]=true&sort=-date&locale=${locale}&depth=1`,
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
    throw error;
  }
}

/**
 * Fetch a single testimonial by ID
 * @param id - Testimonial ID
 * @param locale - Language locale (default: 'uk')
 * @returns Testimonial or null
 */
export async function getTestimonialById(id: string, locale: string = 'uk'): Promise<Testimonial | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/testimonials/${id}?locale=${locale}&depth=1`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonial: ${response.statusText}`);
    }

    const data: Testimonial = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    return null;
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
    return `${API_URL}/api/media/file/${photo.filename}`;
  }
  
  return undefined;
}
