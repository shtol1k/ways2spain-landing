'use client'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Callout } from '@/components/ui/callout'
import type { GuideStepBlock } from '@/api/guides'
import { Clock, FileText } from 'lucide-react'

interface GuideStepProps {
  step: GuideStepBlock
  stepNumber: number
}

const difficultyLabels: Record<string, string> = {
  easy: 'Легко',
  medium: 'Середньо',
  hard: 'Складно',
}

function getCalloutText(content: unknown): string {
  if (typeof content === 'string') return content
  if (content && typeof content === 'object' && 'root' in content) {
    const root = (content as { root?: { children?: Array<{ text?: string }> } }).root
    return root?.children?.map((n) => n.text ?? '').join('') ?? ''
  }
  return ''
}

export function GuideStep({ step, stepNumber }: GuideStepProps) {
  const {
    title,
    content_html,
    estimatedTime,
    difficulty,
    requiredDocuments,
    callouts,
  } = step

  const value = `step-${stepNumber}`

  return (
    <AccordionItem
      id={value}
      value={value}
      data-step-value={value}
      className="border rounded-lg px-4 mb-4"
    >
      <AccordionTrigger className="hover:no-underline py-4">
        <div className="flex items-center gap-3 text-left">
          <Badge
            variant="secondary"
            className="text-base font-semibold h-8 w-8 p-0 flex items-center justify-center shrink-0"
          >
            {stepNumber}
          </Badge>
          <span className="font-semibold">{title}</span>
          {estimatedTime ? (
            <span className="flex items-center gap-1 text-muted-foreground text-sm font-normal">
              <Clock className="size-4" />
              {estimatedTime}
            </span>
          ) : null}
          {difficulty ? (
            <Badge variant="outline" className="text-xs font-normal shrink-0">
              {difficultyLabels[difficulty] ?? difficulty}
            </Badge>
          ) : null}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="prose prose-neutral dark:prose-invert max-w-none pb-4">
          {content_html ? (
            <div dangerouslySetInnerHTML={{ __html: content_html }} />
          ) : null}
        </div>
        {callouts?.length
          ? callouts.map((c) => (
              <Callout
                key={c.id}
                variant={c.type}
                title={c.title ?? undefined}
                className="my-4"
              >
                {getCalloutText(c.content)}
              </Callout>
            ))
          : null}
        {requiredDocuments?.length ? (
          <div className="mt-4">
            <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <FileText className="size-4" />
              Потрібні документи
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {requiredDocuments.map((rd, i) => (
                <li key={i}>{rd.document}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </AccordionContent>
    </AccordionItem>
  )
}
