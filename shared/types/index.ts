// Спільні типи для фронтенду та Strapi CMS

// Базові типи для SEO
export interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  structuredData?: Record<string, any>;
}

// Тип для статті блогу
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  author?: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  category?: {
    name: string;
    slug: string;
  };
  tags?: string[];
  publishedAt: string;
  updatedAt: string;
  seo?: SEO;
}

// Тип для послуги
export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  detailedDescription?: string;
  icon?: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  price?: {
    min?: number;
    max?: number;
    currency?: string;
  };
  features?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
  seo?: SEO;
}

// Тип для відгуку
export interface Testimonial {
  id: number;
  name: string;
  position?: string;
  company?: string;
  avatar?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  content: string;
  rating?: number;
  featured?: boolean;
}

// Тип для глобальних налаштувань сайту
export interface GlobalSettings {
  id: number;
  siteName: string;
  siteDescription: string;
  logo?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  favicon?: {
    url: string;
  };
  contactEmail: string;
  contactPhone?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  address?: string;
  seo?: SEO;
}

// Тип для Hero секції
export interface HeroSection {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  primaryButton?: {
    text: string;
    url: string;
  };
  secondaryButton?: {
    text: string;
    url: string;
  };
}

// API відповіді
export interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Типи для запитів до API
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

export interface BlogPostParams extends PaginationParams {
  category?: string;
  tags?: string[];
  featured?: boolean;
}



