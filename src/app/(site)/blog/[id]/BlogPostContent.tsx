"use client";

import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts, blogContent } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";

interface BlogPostContentProps {
  post: BlogPost;
  content: string[];
}

const BlogPostContent = ({ post, content }: BlogPostContentProps) => {
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  const renderContent = (contentArray: string[]) => {
    return contentArray.map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-3xl font-bold mt-12 mb-6">
            {paragraph.replace("## ", "")}
          </h2>
        );
      } else if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="text-2xl font-bold mt-8 mb-4">
            {paragraph.replace("### ", "")}
          </h3>
        );
      } else if (paragraph.startsWith("| ")) {
        // Simple table rendering
        return (
          <div key={index} className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  {paragraph.split("|").filter(cell => cell.trim()).map((cell, i) => (
                    <td key={i} className="border border-border px-4 py-2">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        );
      } else if (paragraph.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 mb-2">
            {paragraph.replace("- ", "")}
          </li>
        );
      } else {
        return (
          <p key={index} className="text-lg leading-relaxed mb-6">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <article className="container mx-auto px-4 lg:px-8">
        {/* Back button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Повернутися до блогу
            </Button>
          </Link>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="h-96 bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
            <span className="text-muted-foreground/40 text-8xl">📄</span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {renderContent(content)}
          </div>

          {/* Share buttons */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Поділитися статтею</h3>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Поділитися
              </Button>
            </div>
          </div>

          {/* Related posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Читайте також</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-elegant transition-smooth"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-3">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-bold mb-2 hover:text-secondary transition-smooth">
                    {relatedPost.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostContent;
