import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог - Digital Nomad Visa Іспанія",
  description: "Корисні статті про Digital Nomad Visa та релокацію в Іспанію",
};

const BlogPage = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

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
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl overflow-hidden shadow-strong">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="text-primary-foreground">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
                  Рекомендуємо
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-primary-foreground/90 text-lg mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-primary-foreground/80 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button variant="secondary" size="lg">
                    Читати далі
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full h-64 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground/40 text-6xl">📄</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-xl border border-border shadow-elegant hover:shadow-strong transition-smooth overflow-hidden group"
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground/40 text-5xl">📝</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
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
