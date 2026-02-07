"use client";

import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { SmartImage } from "@/components/SmartImage";
import { Post } from "@/payload-types";
import { BlogBreadcrumbs, type BlogBreadcrumbItem } from "@/components/blog/BlogBreadcrumbs";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TableOfContents } from "@/components/blog/TableOfContents";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BlogPostContentProps {
  post: Post;
  contentHtml: string | null;
  relatedPosts: Post[];
  breadcrumbItems?: BlogBreadcrumbItem[];
}

const BlogPostContent = ({ post, contentHtml, relatedPosts, breadcrumbItems }: BlogPostContentProps) => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <ReadingProgress />
      <article className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto mb-8">
          {breadcrumbItems?.length ? <BlogBreadcrumbs items={breadcrumbItems} /> : null}
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

        {/* Content + ToC */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_200px] gap-12">
          <div className="min-w-0">
          {contentHtml ? (
            <div
              className="blog-content prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-24
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

          {/* Author card */}
          {post.author && typeof post.author !== "number" && (
            <div className="mt-12">
              <AuthorCard
                author={{
                  id: post.author.id,
                  name: post.author.name ?? "",
                  slug: post.author.slug ?? null,
                  role: post.author.role ?? null,
                  bio: post.author.bio ?? null,
                  photo: post.author.photo ?? null,
                  socialLinks: post.author.socialLinks ?? null,
                }}
                variant="compact"
              />
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

          {/* Related posts carousel */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8">Читайте також</h3>
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {relatedPosts.map((relatedPost) => (
                    <CarouselItem key={relatedPost.id} className="pl-4 md:basis-1/2">
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="bg-card rounded-xl border border-border p-6 hover:shadow-elegant transition-smooth flex flex-col h-full"
                      >
                        {relatedPost.category && typeof relatedPost.category !== "number" && (
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
                            {relatedPost.readTime ? `${relatedPost.readTime} хв` : "3 хв"}
                          </span>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          )}
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents selector=".blog-content" />
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
};

export default BlogPostContent;
