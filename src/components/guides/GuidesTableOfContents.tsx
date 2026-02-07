'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import type { GuideStepBlock } from '@/api/guides'

interface GuidesTableOfContentsProps {
  steps: (GuideStepBlock | { blockType: string; title?: string })[] | null | undefined
}

export function GuidesTableOfContents({ steps }: GuidesTableOfContentsProps) {
  const guideSteps = (steps ?? []).filter(
    (s): s is GuideStepBlock => s.blockType === 'guideStep' && 'title' in s
  )
  const [activeId, setActiveId] = useState<string>('step-1')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-step-value')
            if (id) setActiveId(id)
            break
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )
    document.querySelectorAll('[data-step-value]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [guideSteps.length])

  if (guideSteps.length === 0) return null

  return (
    <Card className="sticky top-24 print:hidden">
      <CardHeader className="pb-2">
        <h3 className="text-sm font-semibold">Зміст</h3>
      </CardHeader>
      <CardContent>
        <ScrollArea className="max-h-[300px]">
          <nav className="space-y-1">
            {guideSteps.map((step, index) => {
              const value = `step-${index + 1}`
              const isActive = activeId === value
              return (
                <a
                  key={step.id}
                  href={`#${value}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={cn(
                    'block rounded-md px-2 py-1.5 text-sm transition-colors',
                    isActive
                      ? 'bg-primary/10 font-medium text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <span className="mr-2 font-mono text-xs">{index + 1}.</span>
                  {step.title}
                </a>
              )
            })}
          </nav>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
