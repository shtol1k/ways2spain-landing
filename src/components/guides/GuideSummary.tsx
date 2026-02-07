import {
  Banknote,
  Clock,
  FileCheck,
  Globe,
  Calendar,
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { GuideSummary as GuideSummaryType } from '@/api/guides'
import { format } from 'date-fns'
import { uk } from 'date-fns/locale'

interface GuideSummaryProps {
  summary: GuideSummaryType
}

const formatLabels: Record<string, string> = {
  online: 'Онлайн',
  hybrid: 'Онлайн + офлайн',
  offline: 'Офлайн',
}

export function GuideSummary({ summary }: GuideSummaryProps) {
  const {
    totalCost,
    estimatedDuration,
    format: formatList,
    requirements,
    lastUpdated,
  } = summary

  return (
    <Card className="print:shadow-none print:border">
      <CardHeader className="pb-2">
        <h2 className="text-lg font-semibold">Коротко про процедуру</h2>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        {totalCost ? (
          <div className="flex items-start gap-3">
            <Banknote className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Вартість</p>
              <p className="font-medium">{totalCost}</p>
            </div>
          </div>
        ) : null}
        {estimatedDuration ? (
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Тривалість</p>
              <p className="font-medium">{estimatedDuration}</p>
            </div>
          </div>
        ) : null}
        {formatList?.length ? (
          <div className="flex items-start gap-3 sm:col-span-2">
            <Globe className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Формат</p>
              <div className="flex flex-wrap gap-1">
                {formatList.map((f) => (
                  <Badge key={f} variant="secondary" className="font-normal">
                    {formatLabels[f] ?? f}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        {requirements?.length ? (
          <div className="flex items-start gap-3 sm:col-span-2">
            <FileCheck className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Вимоги</p>
              <div className="flex flex-wrap gap-1">
                {requirements.map((r, i) => (
                  <Badge key={i} variant="outline" className="font-normal">
                    {r.requirement}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        {lastUpdated ? (
          <div className="flex items-start gap-3 sm:col-span-2">
            <Calendar className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Актуальність</p>
              <p className="font-medium">
                Станом на {format(new Date(lastUpdated), 'd MMMM yyyy', { locale: uk })}
              </p>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
