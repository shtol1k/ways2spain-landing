/**
 * JSON-LD Schema.org structured data generators
 */

import { getCanonicalUrl } from "./utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  const base = getCanonicalUrl("").replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${base}${item.href.startsWith("/") ? item.href : `/${item.href}`}` }),
    })),
  };
}

export function generateArticleSchema(post: {
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  featuredImage?: { url?: string } | number | null;
  category?: { name: string } | number | null;
  author?: { name?: string; slug?: string } | number | null;
}): object {
  const base = getCanonicalUrl("").replace(/\/$/, "");
  const url = getCanonicalUrl(`blog/${post.slug}`);
  const image =
    post.featuredImage && typeof post.featuredImage !== "number" && post.featuredImage?.url
      ? post.featuredImage.url
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt ?? undefined,
    url,
    datePublished: post.publishedAt ?? undefined,
    ...(image && { image: [image] }),
    ...(post.category && typeof post.category !== "number" && {
      articleSection: post.category.name,
    }),
    ...(post.author && typeof post.author !== "number" && post.author.name && {
      author: {
        "@type": "Person",
        name: post.author.name,
        ...(post.author.slug && {
          url: getCanonicalUrl(`blog/author/${post.author.slug}`),
        }),
      },
    }),
    publisher: {
      "@type": "Organization",
      name: "Ways2Spain",
      url: base,
    },
  };
}

export function generatePersonSchema(author: {
  name: string;
  slug?: string | null;
  bio?: string | null;
  photo?: { url?: string } | number | null;
  socialLinks?: {
    linkedin?: string | null;
    twitter?: string | null;
    facebook?: string | null;
    instagram?: string | null;
  } | null;
}): object {
  const base = getCanonicalUrl("").replace(/\/$/, "");
  const sameAs: string[] = [];
  if (author.socialLinks?.linkedin) sameAs.push(author.socialLinks.linkedin);
  if (author.socialLinks?.twitter) sameAs.push(author.socialLinks.twitter);
  if (author.socialLinks?.facebook) sameAs.push(author.socialLinks.facebook);
  if (author.socialLinks?.instagram) sameAs.push(author.socialLinks.instagram);

  const photo =
    author.photo && typeof author.photo !== "number" && author.photo?.url
      ? author.photo.url
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    ...(author.bio && { description: author.bio }),
    ...(author.slug && { url: getCanonicalUrl(`blog/author/${author.slug}`) }),
    ...(photo && { image: photo }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function generateItemListSchema(posts: Array<{ title: string; slug: string }>): object {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: getCanonicalUrl(`blog/${post.slug}`),
      name: post.title,
    })),
  };
}
