import { notFound } from "next/navigation";
import { getBlogPostById, getBlogContentById } from "@/data/blogPosts";
import BlogPostContent from "./BlogPostContent";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { id } = await params;
  const postId = parseInt(id);
  const post = getBlogPostById(postId);

  if (!post) {
    return {
      title: "Статтю не знайдено",
    };
  }

  return {
    title: `${post.title} - Digital Nomad Visa Іспанія`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const postId = parseInt(id);
  const post = getBlogPostById(postId);
  const contentData = getBlogContentById(postId);

  if (!post || !contentData) {
    notFound();
  }

  return <BlogPostContent post={post} content={contentData.content} />;
}
