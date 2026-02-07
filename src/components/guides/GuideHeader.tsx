import { Badge } from '@/components/ui/badge'
import type { Guide, GuideCategory } from '@/api/guides'
import { format } from 'date-fns'
import { uk } from 'date-fns/locale'

interface GuideHeaderProps {
  guide: Guide
}

export function GuideHeader({ guide }: GuideHeaderProps) {
  const category =
    typeof guide.category === 'object' ? (guide.category as GuideCategory) : null
  const lastUpdated = guide.summary?.lastUpdated

  return (
    <header className="mb-8">
      {category ? (
        <Badge
          variant="secondary"
          className="mb-4"
          style={
            category.color
              ? { backgroundColor: `${category.color}20`, color: category.color }
              : undefined
          }
        >
          {category.name}
        </Badge>
      ) : null}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
      {lastUpdated ? (
        <p className="text-sm text-muted-foreground">
          Актуально станом на {format(new Date(lastUpdated), 'd MMMM yyyy', { locale: uk })}
        </p>
      ) : null}
    </header>
  )
}
