import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { getPosts } from "@/api/blog";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { Media } from "@/payload-types";
import { SmartImage } from "@/components/SmartImage";

export const metadata: Metadata = {
  title: "Блог - Digital Nomad Visa Іспанія",
  description: "Корисні статті про Digital Nomad Visa та релокацію в Іспанію",
};

// Helper to get image URL safely
const getImageUrl = (image: Media | number | null | undefined): string | null => {
  if (!image || typeof image === 'number') return null;
  return image.url || null;
}

const BlogPage = async () => {
  // Fetch posts from Payload CMS
  const { docs: posts } = await getPosts(1, 10);

  // Need at least one post to show anything useful
  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="mb-6">Блог</h1>
          <p className="text-xl text-muted-foreground mb-8">
            На жаль, поки що немає опублікованих статей. Завітайте згодом!
          </p>
          <Link href="/">
            <Button variant="secondary">На головну</Button>
          </Link>
        </div>
      </div>
    );
  }

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">Блог</h1>
          <p className="text-xl text-muted-foreground">
            Корисні статті про Digital Nomad Visa та релокацію в Іспанію
          </p>
        </div>

        {/* Featured Post */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl overflow-hidden shadow-strong min-h-[400px]">
            <div className="grid lg:grid-cols-2 h-full">
              <div className="p-8 lg:p-12 flex flex-col justify-center text-primary-foreground">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                    Рекомендуємо
                  </span>
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:opacity-90 transition-opacity">
                    <h2 className="text-3xl font-bold mb-4">
                      {featuredPost.title}
                    </h2>
                  </Link>
                  <p className="text-primary-foreground/90 text-lg mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-primary-foreground/80 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        {featuredPost.publishedAt ? format(new Date(featuredPost.publishedAt), 'd MMMM yyyy', { locale: uk }) : 'TBA'}
                      </span>
                    </div>
                    {featuredPost.readTime && (
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{featuredPost.readTime} хв читання</span>
                      </div>
                    )}
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button variant="secondary" size="lg">
                      Читати далі
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative min-h-[300px] lg:min-h-full bg-muted/20">
                {featuredPost.featuredImage && typeof featuredPost.featuredImage !== 'number' && featuredPost.featuredImage.url ? (
                  <SmartImage
                    src={featuredPost.featuredImage.url}
                    alt={featuredPost.featuredImage.alt || featuredPost.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary-foreground/10">
                    <span className="text-primary-foreground/40 text-6xl">📄</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {otherPosts.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-xl border border-border shadow-elegant hover:shadow-strong transition-smooth overflow-hidden group flex flex-col h-full"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-48 bg-muted relative overflow-hidden">
                    {post.featuredImage && typeof post.featuredImage !== 'number' && post.featuredImage.url ? (
                      <SmartImage
                        src={post.featuredImage.sizes?.medium?.url || post.featuredImage.url}
                        alt={post.featuredImage.alt || post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted-foreground/40 text-5xl">📝</span>
                      </div>
                    )}
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    {post.category && typeof post.category !== 'number' && (
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-3">
                          {post.category.name}
                        </span>
                      </div>
                    )}
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-smooth line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {post.publishedAt ? format(new Date(post.publishedAt), 'd MMM yyyy', { locale: uk }) : ''}
                        </span>
                      </div>
                      {post.readTime && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} хв</span>
                        </div>
                      )}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="mt-auto">
                      <Button variant="ghost" size="sm" className="w-full group-hover:bg-muted">
                        Читати далі
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border shadow-elegant">
            <h3 className="text-2xl font-bold mb-4">
              Отримуйте нові статті на email
            </h3>
            <p className="text-muted-foreground mb-8">
              Підпишіться на розсилку, щоб не пропустити корисну інформацію про релокацію в Іспанію
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button variant="hero" size="lg">
                Підписатися
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
