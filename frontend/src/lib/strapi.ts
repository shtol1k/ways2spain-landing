const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

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
    const response = await fetch(
      `${STRAPI_URL}/api/testimonials?populate=Photo&sort=Date:desc&publicationState=live`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
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
    const response = await fetch(
      `${STRAPI_URL}/api/testimonials/${id}?populate=Photo&publicationState=live`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
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
