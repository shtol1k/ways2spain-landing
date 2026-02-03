"use client";

import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { SmartImage } from "@/components/SmartImage";
import { Post } from "@/payload-types";

interface BlogPostContentProps {
  post: Post;
  contentHtml: string | null;
  relatedPosts: any[]; // Use any for now until types are fully synced, or Post[]
}

const BlogPostContent = ({ post, contentHtml, relatedPosts }: BlogPostContentProps) => {
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
          {post.category && typeof post.category !== 'number' && (
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              {post.category.name}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>
                {post.publishedAt ? format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: uk }) : 'TBA'}
              </span>
            </div>
            {post.readTime && (
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} хв читання</span>
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="h-96 md:h-[500px] bg-muted rounded-2xl flex items-center justify-center overflow-hidden relative">
            {post.featuredImage && typeof post.featuredImage !== 'number' && post.featuredImage.url ? (
              <SmartImage
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <span className="text-muted-foreground/40 text-8xl">📄</span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {contentHtml ? (
            <div
              className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-muted-foreground
              prose-img:rounded-xl prose-img:shadow-lg
              prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-4 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              Контент не знайдено або він має неправильний формат.
            </div>
          )}

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
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8">Читайте також</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-card rounded-xl border border-border p-6 hover:shadow-elegant transition-smooth flex flex-col h-full"
                  >
                    {relatedPost.category && typeof relatedPost.category !== 'number' && (
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-3 w-fit">
                        {relatedPost.category.name}
                      </span>
                    )}
                    <h4 className="text-lg font-bold mb-2 hover:text-secondary transition-smooth line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mt-auto">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>
                        {relatedPost.readTime ? `${relatedPost.readTime} хв` : '3 хв'}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPostContent;
