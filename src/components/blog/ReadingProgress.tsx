'use client'

import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

export interface ReadingProgressProps {
  className?: string
  /** Optional: element selector to measure progress against (default: document scroll) */
  targetSelector?: string
}

/**
 * Shows reading progress as a thin bar at the top of the viewport.
 * Progress is based on scroll position within the main content.
 */
export function ReadingProgress({ className, targetSelector }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = targetSelector ? document.querySelector(targetSelector) : document.documentElement

    const updateProgress = () => {
      if (!el) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight <= 0 ? 0 : Math.min(100, (scrollTop / docHeight) * 100))
        return
      }
      const target = el as HTMLElement
      const rect = target.getBoundingClientRect()
      const scrollTop = window.scrollY
      const start = scrollTop + rect.top - window.innerHeight
      const end = start + target.offsetHeight
      const viewportEnd = scrollTop + window.innerHeight
      if (viewportEnd <= start) {
        setProgress(0)
      } else if (viewportEnd >= end) {
        setProgress(100)
      } else {
        const visible = viewportEnd - start
        setProgress(Math.min(100, (visible / target.offsetHeight) * 100))
      }
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [targetSelector])

  if (progress <= 0) return null

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-1 bg-muted',
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Прогрес читання"
    >
      <Progress value={progress} className="h-full rounded-none" />
    </div>
  )
}
