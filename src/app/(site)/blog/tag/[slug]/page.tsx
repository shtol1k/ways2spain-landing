import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { getTagBySlug, getPostsByTag } from "@/api/blog";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { SmartImage } from "@/components/SmartImage";
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { getCanonicalUrl } from "@/lib/utils";

export const revalidate = 60;

const POSTS_PER_PAGE = 9;

interface TagPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);
  if (!tag) {
    return { title: "Тег не знайдено" };
  }
  return {
    title: `${tag.name} - Блог | Digital Nomad Visa Іспанія`,
    description: `Статті за тегом ${tag.name}. Корисна інформація про Digital Nomad Visa та релокацію в Іспанію.`,
    openGraph: {
      title: `${tag.name} - Блог | Digital Nomad Visa Іспанія`,
      description: `Статті за тегом ${tag.name}.`,
      url: getCanonicalUrl(`blog/tag/${slug}`),
      type: 'website',
      images: [
        {
          url: '/opengraph.png',
          width: 1200,
          height: 630,
          alt: `${tag.name} - Ways 2 Spain`,
        },
      ],
    },
    alternates: { canonical: getCanonicalUrl(`blog/tag/${slug}`) },
    twitter: {
      card: "summary_large_image",
      title: `${tag.name} - Блог | Digital Nomad Visa Іспанія`,
      description: `Статті за тегом ${tag.name}.`,
      images: ['/opengraph.png'],
      site: '@ways2spain',
    },
  };
}

export async function generateStaticParams() {
  const { getTags } = await import("@/api/blog");
  const tags = await getTags();
  return tags.map((t) => ({ slug: t.slug ?? '' })).filter((t) => t.slug);
}

export default async function TagPage({
  params,
  searchParams,
}: TagPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const page = Math.max(
    1,
    parseInt(resolvedSearchParams?.page ?? "1", 10) || 1
  );

  const tag = await getTagBySlug(slug);
  if (!tag) notFound();

  const { docs: posts, totalPages, page: currentPage, totalDocs } =
    await getPostsByTag(slug, page, POSTS_PER_PAGE);

  const breadcrumbItems = [
    { label: "Головна", href: "/" },
    { label: "Блог", href: "/blog" },
    { label: tag.name ?? "Тег" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto mb-6">
          <BlogBreadcrumbs items={breadcrumbItems} />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-4">Тег: {tag.name}</h1>
          <p className="text-muted-foreground">
            {totalDocs === 0
              ? "Немає статей з цим тегом"
              : totalDocs === 1
                ? "1 стаття"
                : totalDocs < 5
                  ? `${totalDocs} статті`
                  : `${totalDocs} статей`}
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-muted-foreground mb-6">
              Поки немає опублікованих статей з цим тегом.
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
              basePath={`/blog/tag/${slug}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
