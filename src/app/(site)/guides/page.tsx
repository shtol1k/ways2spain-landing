import type { Metadata } from 'next'
import {
  getGuides,
  getGuidesByCategory,
  getGuideCategories,
} from '@/api/guides'
import { getCanonicalUrl } from '@/lib/utils'
import { GuideCard } from '@/components/guides/GuideCard'
import { GuidesCategoryFilter } from '@/components/guides/GuidesCategoryFilter'

export const metadata: Metadata = {
  title: 'Гайди - Digital Nomad Visa Іспанія',
  description:
    'Покрокові інструкції: віза Digital Nomad, відкриття autónomo, перереєстрація авто, медична картка та інші процедури в Іспанії.',
  alternates: { canonical: getCanonicalUrl('guides') },
  openGraph: {
    title: 'Гайди - Digital Nomad Visa Іспанія',
    description:
      'Покрокові інструкції з отримання візи, оформлення документів та державних процедур в Іспанії.',
    url: getCanonicalUrl('guides'),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Гайди - Digital Nomad Visa Іспанія',
    description:
      'Покрокові інструкції з отримання візи та оформлення документів в Іспанії.',
  },
}

export const revalidate = 60

const GUIDES_PER_PAGE = 12

interface GuidesPageProps {
  searchParams: Promise<{ category?: string; page?: string }>
}

export default async function GuidesPage({ searchParams }: GuidesPageProps) {
  const resolved = await searchParams
  const categorySlug = resolved?.category
  const page = Math.max(1, parseInt(resolved?.page ?? '1', 10) || 1)

  const [guidesResult, categories] = await Promise.all([
    categorySlug
      ? getGuidesByCategory(categorySlug, page, GUIDES_PER_PAGE)
      : getGuides(page, GUIDES_PER_PAGE),
    getGuideCategories(),
  ])

  const { docs: guides, totalPages, page: currentPage } = guidesResult

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="mb-6">Гайди</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Покрокові інструкції щодо отримання візи Digital Nomad, оформлення
            документів та інших складних процедур в Іспанії.
          </p>
          <GuidesCategoryFilter categories={categories} />
        </div>

        {!guides?.length ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Поки що немає опублікованих гайдів. Завітайте пізніше.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        )}

        {totalPages > 1 ? (
          <div className="flex justify-center gap-2 mt-10">
            {currentPage > 1 ? (
              <a
                href={
                  categorySlug
                    ? `/guides?category=${categorySlug}&page=${currentPage - 1}`
                    : `/guides?page=${currentPage - 1}`
                }
                className="text-primary hover:underline"
              >
                Попередня
              </a>
            ) : null}
            <span className="text-muted-foreground">
              Сторінка {currentPage} з {totalPages}
            </span>
            {currentPage < totalPages ? (
              <a
                href={
                  categorySlug
                    ? `/guides?category=${categorySlug}&page=${currentPage + 1}`
                    : `/guides?page=${currentPage + 1}`
                }
                className="text-primary hover:underline"
              >
                Наступна
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

