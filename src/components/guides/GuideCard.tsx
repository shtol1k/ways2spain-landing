import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SmartImage } from '@/components/SmartImage'
import { Banknote, Clock, Globe, Calendar } from 'lucide-react'
import type { Guide, GuideCategory } from '@/api/guides'
import { format } from 'date-fns'
import { uk } from 'date-fns/locale'

interface GuideCardProps {
  guide: Guide
}

function getCategorySlug(category: Guide['category']): string {
  if (typeof category === 'object' && category && 'slug' in category) {
    return (category as GuideCategory).slug
  }
  return ''
}

function getImageUrl(
  image: Guide['featuredImage']
): string | null {
  if (!image || typeof image === 'number') return null
  if (typeof image === 'object' && 'url' in image) return image.url ?? null
  return null
}

export function GuideCard({ guide }: GuideCardProps) {
  const categorySlug = getCategorySlug(guide.category)
  const category = typeof guide.category === 'object' ? guide.category : null
  const href = `/guides/${categorySlug}/${guide.slug}`
  const imageUrl = getImageUrl(guide.featuredImage)
  const lastUpdated = guide.summary?.lastUpdated

  return (
    <Link href={href} className="block h-full">
      <Card className="h-full transition-shadow hover:shadow-md">
        <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
          {imageUrl ? (
            <SmartImage
              src={imageUrl}
              alt={guide.title}
              width={400}
              height={225}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground/40 text-6xl">
              📋
            </div>
          )}
        </div>
        <CardContent className="p-4">
          {category ? (
            <Badge
              variant="secondary"
              className="mb-2"
              style={
                category.color
                  ? { backgroundColor: `${category.color}20`, color: category.color }
                  : undefined
              }
            >
              {category.name}
            </Badge>
          ) : null}
          <h3 className="font-semibold text-lg line-clamp-2 mb-2">{guide.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{guide.excerpt}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
            {guide.summary?.totalCost ? (
              <span className="flex items-center gap-1">
                <Banknote className="size-3.5" />
                {guide.summary.totalCost}
              </span>
            ) : null}
            {guide.summary?.estimatedDuration ? (
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {guide.summary.estimatedDuration}
              </span>
            ) : null}
            {guide.summary?.format?.length ? (
              <span className="flex items-center gap-1">
                <Globe className="size-3.5" />
                {guide.summary.format.join(', ')}
              </span>
            ) : null}
          </div>
        </CardContent>
        {lastUpdated ? (
          <CardFooter className="p-4 pt-0 text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="size-3.5" />
            Оновлено {format(new Date(lastUpdated), 'd.MM.yyyy', { locale: uk })}
          </CardFooter>
        ) : null}
      </Card>
    </Link>
  )
}
