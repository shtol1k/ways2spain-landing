import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import {
  getAuthorBySlug,
  getPostsByAuthor,
} from "@/api/blog";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { SmartImage } from "@/components/SmartImage";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { getCanonicalUrl } from "@/lib/utils";

export const revalidate = 60;

const POSTS_PER_PAGE = 9;

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);
  if (!author) {
    return { title: "Автора не знайдено" };
  }
  return {
    title: `${author.name} - Блог | Digital Nomad Visa Іспанія`,
    description:
      author.bio ||
      `Статті автора ${author.name}. Корисна інформація про Digital Nomad Visa та релокацію в Іспанію.`,
    openGraph: {
      title: `${author.name} - Блог | Digital Nomad Visa Іспанія`,
      description: author.bio || `Статті автора ${author.name}.`,
      url: getCanonicalUrl(`blog/author/${slug}`),
      type: 'website',
      images: [
        {
          url: '/opengraph.png',
          width: 1200,
          height: 630,
          alt: `${author.name} - Ways 2 Spain`,
        },
      ],
    },
    alternates: { canonical: getCanonicalUrl(`blog/author/${slug}`) },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} - Блог | Digital Nomad Visa Іспанія`,
      description: author.bio || `Статті автора ${author.name}.`,
      images: ['/opengraph.png'],
      site: '@ways2spain',
    },
  };
}

export async function generateStaticParams() {
  const { getAuthors } = await import("@/api/blog");
  const authors = await getAuthors();
  return authors.map((a) => ({ slug: a.slug ?? '' })).filter((a) => a.slug);
}

export default async function AuthorPage({
  params,
  searchParams,
}: AuthorPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const page = Math.max(
    1,
    parseInt(resolvedSearchParams?.page ?? "1", 10) || 1
  );

  const author = await getAuthorBySlug(slug);
  if (!author) notFound();

  const { docs: posts, totalPages, page: currentPage, totalDocs } =
    await getPostsByAuthor(slug, page, POSTS_PER_PAGE);

  const breadcrumbItems = [
    { label: "Головна", href: "/" },
    { label: "Блог", href: "/blog" },
    { label: author.name ?? "Автор" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto mb-6">
          <BlogBreadcrumbs items={breadcrumbItems} />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <aside className="lg:col-span-1">
            <AuthorCard
              author={{
                id: author.id,
                name: author.name ?? "",
                slug: author.slug ?? null,
                role: author.role ?? null,
                bio: author.bio ?? null,
                photo: author.photo ?? null,
                socialLinks: author.socialLinks ?? null,
              }}
              variant="full"
            />
          </aside>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">
              Статті автора
              {totalDocs > 0 && (
                <span className="text-muted-foreground font-normal text-lg ml-2">
                  ({totalDocs})
                </span>
              )}
            </h2>

            {posts.length === 0 ? (
              <p className="text-muted-foreground">
                У цього автора поки немає опублікованих статей.
              </p>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-8">
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
                            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-3">
                              {post.category.name}
                            </span>
                          )}
                        <Link href={`/blog/${post.slug}`} className="block">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-smooth line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
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
                        <Link href={`/blog/${post.slug}`} className="mt-4">
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
                  basePath={`/blog/author/${slug}`}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
