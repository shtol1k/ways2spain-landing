export interface Testimonial {
  id: number;
  documentId: string;
  Name: string;
  Title: string;
  Testimonial: string;
  Telegram?: string;
  Facebook?: string;
  Instagram?: string;
  Twitter?: string;
  LinkedIn?: string;
  Date: string;
  Photo?: Array<{
    id: number;
    url: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: {
        url: string;
      };
    };
  }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale?: string;
}

export interface StrapiResponse {
  data: Testimonial[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const baseUrl = import.meta.env.VITE_STRAPI_URL || '';
    const apiToken = import.meta.env.VITE_STRAPI_API_TOKEN;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Add Authorization header if token exists
    if (apiToken) {
      headers['Authorization'] = `Bearer ${apiToken}`;
    }

    const response = await fetch(
      `${baseUrl}/api/testimonials?populate=Photo&sort=Date:desc&publicationState=live&locale=uk-UA`,
      {
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials: ${response.statusText}`);
    }

    const result: StrapiResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
}

export async function getTestimonial(id: string): Promise<Testimonial> {
  try {
    const baseUrl = import.meta.env.VITE_STRAPI_URL || '';
    const apiToken = import.meta.env.VITE_STRAPI_API_TOKEN;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Add Authorization header if token exists
    if (apiToken) {
      headers['Authorization'] = `Bearer ${apiToken}`;
    }

    const response = await fetch(
      `${baseUrl}/api/testimonials/${id}?populate=Photo&publicationState=live&locale=uk-UA`,
      {
        headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonial: ${response.statusText}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    throw error;
  }
}
