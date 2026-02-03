import { notFound } from "next/navigation";
import { getPostBySlug, getRecentPosts } from "@/api/blog";
import BlogPostContent from "./BlogPostContent";
import type { Metadata } from "next";
import { format } from "date-fns";
import { uk } from "date-fns/locale";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Статтю не знайдено",
    };
  }

  return {
    title: post.meta?.metaTitle || `${post.title} - Digital Nomad Visa Іспанія`,
    description: post.meta?.metaDescription || post.excerpt,
    openGraph: {
      title: post.meta?.metaTitle || post.title,
      description: post.meta?.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt || undefined,
      images: post.meta?.metaImage && typeof post.meta.metaImage !== 'number' && post.meta.metaImage.url
        ? [post.meta.metaImage.url]
        : (post.featuredImage && typeof post.featuredImage !== 'number' && post.featuredImage.url ? [post.featuredImage.url] : undefined),
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch related posts (exclude current post)
  // Since we don't have explicit 'relatedPosts' field populated yet in all cases, 
  // or logic to auto-fill, let's fetch recent posts excluding this one.
  let relatedPosts = [];
  if (post.relatedPosts && post.relatedPosts.length > 0) {
    relatedPosts = post.relatedPosts;
  } else {
    relatedPosts = await getRecentPosts(2, post.id);
  }

  // Serialize content to HTML if it's available in the special field
  // or user content_html if lexicalHTML populated it (which we configured)
  const contentHtml = (post as any).content_html || null;

  return <BlogPostContent post={post} contentHtml={contentHtml} relatedPosts={relatedPosts} />;
}
