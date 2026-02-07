import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import {
  getCategoryBySlug,
  getPostsByCategory,
} from "@/api/blog";
import { getCanonicalUrl } from "@/lib/utils";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { SmartImage } from "@/components/SmartImage";
import { CategoryHeader } from "@/components/blog/CategoryHeader";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs";

export const revalidate = 60;

const POSTS_PER_PAGE = 9;

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return { title: "Категорію не знайдено" };
  }
  return {
    title: `${category.name} - Блог | Digital Nomad Visa Іспанія`,
    description:
      category.description ||
      `Статті за категорією ${category.name}. Корисна інформація про Digital Nomad Visa та релокацію в Іспанію.`,
    openGraph: {
      title: `${category.name} - Блог | Digital Nomad Visa Іспанія`,
      description: category.description || `Статті за категорією ${category.name}.`,
      url: getCanonicalUrl(`blog/category/${slug}`),
      type: 'website',
      images: [
        {
          url: '/opengraph.png',
          width: 1200,
          height: 630,
          alt: `${category.name} - Ways 2 Spain`,
        },
      ],
    },
    alternates: { canonical: getCanonicalUrl(`blog/category/${slug}`) },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} - Блог | Digital Nomad Visa Іспанія`,
      description:
        category.description ||
        `Статті за категорією ${category.name}.`,
      images: ['/opengraph.png'],
      site: '@ways2spain',
    },
  };
}

export async function generateStaticParams() {
  const { getCategories } = await import("@/api/blog");
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const page = Math.max(
    1,
    parseInt(resolvedSearchParams?.page ?? "1", 10) || 1
  );

  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const { docs: posts, totalPages, page: currentPage, totalDocs } =
    await getPostsByCategory(slug, page, POSTS_PER_PAGE);

  const breadcrumbItems = [
    { label: "Головна", href: "/" },
    { label: "Блог", href: "/blog" },
    { label: category.name },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto mb-6">
          <BlogBreadcrumbs items={breadcrumbItems} />
        </div>
        <CategoryHeader
          category={category}
          postCount={totalDocs}
        />

        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-muted-foreground mb-6">
              У цій категорії поки немає опублікованих статей.
            </p>
            <Link href="/blog">
              <Button variant="secondary">Усі статті</Button>
            </Link>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-xl border border-border shadow-elegant hover:shadow-strong transition-smooth overflow-hidden group flex flex-col h-full"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-48 bg-muted relative overflow-hidden"
                  >
                    {post.featuredImage &&
                    typeof post.featuredImage !== "number" &&
                    post.featuredImage.url ? (
                      <SmartImage
                        src={
                          post.featuredImage.sizes?.medium?.url ||
                          post.featuredImage.url
                        }
                        alt={post.featuredImage.alt || post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted-foreground/40 text-5xl">
                          📝
                        </span>
                      </div>
                    )}
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    {post.category &&
                      typeof post.category !== "number" && (
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
                          {post.publishedAt
                            ? format(
                                new Date(post.publishedAt),
                                "d MMM yyyy",
                                { locale: uk }
                              )
                            : ""}
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
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group-hover:bg-muted"
                      >
                        Читати далі
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={`/blog/category/${slug}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
