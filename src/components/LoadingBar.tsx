'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * LoadingBar - progress indicator for page navigation
 */
export default function LoadingBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setLoading(false)
    setProgress(0)
  }, [pathname, searchParams])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const url = new URL(link.href)
        const isNewPage = url.pathname !== pathname || url.search !== window.location.search
        
        if (isNewPage) {
          setLoading(true)
          setProgress(0)
        }
      }
    }

    const handlePopState = () => {
      setLoading(true)
      setProgress(0)
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [pathname])

  useEffect(() => {
    if (!loading) return

    // Progress animation: 0 -> 50% (fast), 50 -> 80% (medium), 80 -> 95% (slow)
    const intervals: NodeJS.Timeout[] = []

    const fastStart = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 50) {
          clearInterval(fastStart)
          return 50
        }
        return prev + 10
      })
    }, 40)
    intervals.push(fastStart)

    setTimeout(() => {
      const midProgress = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 80) {
            clearInterval(midProgress)
            return 80
          }
          return prev + 5
        })
      }, 80)
      intervals.push(midProgress)
    }, 200)

    setTimeout(() => {
      const slowFinish = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(slowFinish)
            return 95
          }
          return prev + 1
        })
      }, 200)
      intervals.push(slowFinish)
    }, 700)

    return () => {
      intervals.forEach(clearInterval)
    }
  }, [loading])

  if (!loading && progress === 0) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 transition-all duration-300 ease-out"
      style={{
        height: '3px',
        zIndex: 9999,
        width: `${progress}%`,
        opacity: loading ? 1 : 0,
        background: 'linear-gradient(90deg, hsl(40 90% 55%) 0%, hsl(40 85% 60%) 100%)',
        boxShadow: '0 0 15px rgba(245, 200, 66, 0.6), 0 0 5px rgba(245, 200, 66, 0.8)',
      }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label="Завантаження сторінки"
    >
      <div className="h-full w-full bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
    </div>
  )
}
