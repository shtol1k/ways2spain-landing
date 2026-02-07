import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type { GuideResource } from '@/api/guides'
import { ExternalLink, FileText, Globe, Video, FileInput } from 'lucide-react'

interface GuideResourcesProps {
  resources: GuideResource[] | null | undefined
}

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  website: Globe,
  pdf: FileText,
  video: Video,
  form: FileInput,
}

function getFaviconUrl(url: string): string {
  try {
    const host = new URL(url).hostname
    return `https://www.google.com/s2/favicons?domain=${host}&sz=32`
  } catch {
    return ''
  }
}

export function GuideResources({ resources }: GuideResourcesProps) {
  if (!resources?.length) return null

  return (
    <Card className="sticky top-24 print:hidden">
      <CardHeader className="pb-2">
        <h3 className="text-sm font-semibold">Ресурси та посилання</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        {resources.map((r) => {
          const Icon = typeIcons[r.type ?? 'website'] ?? Globe
          const faviconUrl = getFaviconUrl(r.url)
          return (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-muted/50"
            >
              {faviconUrl ? (
                <img
                  src={faviconUrl}
                  alt=""
                  className="size-5 shrink-0 rounded"
                  width={20}
                  height={20}
                />
              ) : (
                <Icon className="size-5 shrink-0 text-muted-foreground" />
              )}
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm truncate">{r.title}</p>
                {r.description ? (
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                    {r.description}
                  </p>
                ) : null}
              </div>
              <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
            </a>
          )
        })}
      </CardContent>
    </Card>
  )
}
