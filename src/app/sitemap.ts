import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/lib/utils";
import {
  getAllPostSlugs,
  getCategories,
  getAuthors,
  getTags,
} from "@/api/blog";
import { getAllGuideSlugs } from "@/api/guides";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getCanonicalUrl("").replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base + "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: getCanonicalUrl("blog"), lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: getCanonicalUrl("guides"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: getCanonicalUrl("about"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: getCanonicalUrl("visa"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: getCanonicalUrl("calculator"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: getCanonicalUrl("consultation"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: getCanonicalUrl("contact"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: getCanonicalUrl("services"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const postSlugs = await getAllPostSlugs();
  const postEntries: MetadataRoute.Sitemap = postSlugs.map(({ slug, updatedAt }) => ({
    url: getCanonicalUrl(`blog/${slug}`),
    lastModified: new Date(updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categories = await getCategories();
  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: getCanonicalUrl(`blog/category/${c.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const authors = await getAuthors();
  const authorEntries: MetadataRoute.Sitemap = authors
    .filter((a) => a.slug)
    .map((a) => ({
      url: getCanonicalUrl(`blog/author/${a.slug}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  const tags = await getTags();
  const tagEntries: MetadataRoute.Sitemap = tags
    .filter((t) => t.slug)
    .map((t) => ({
      url: getCanonicalUrl(`blog/tag/${t.slug}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  const guideSlugs = await getAllGuideSlugs();
  const guideEntries: MetadataRoute.Sitemap = guideSlugs.map(
    ({ category, slug, updatedAt }) => ({
      url: getCanonicalUrl(`guides/${category}/${slug}`),
      lastModified: new Date(updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })
  );

  return [
    ...staticRoutes,
    ...postEntries,
    ...categoryEntries,
    ...authorEntries,
    ...tagEntries,
    ...guideEntries,
  ];
}
