'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// ============================================
// Constants
// ============================================

const PROGRESS_CONFIG = {
  // Progress thresholds
  FAST_THRESHOLD: 50,
  MID_THRESHOLD: 80,
  SLOW_THRESHOLD: 95,
  
  // Increment sizes
  FAST_INCREMENT: 10,
  MID_INCREMENT: 5,
  SLOW_INCREMENT: 1,
  
  // Timing intervals (ms)
  FAST_INTERVAL: 40,
  MID_INTERVAL: 80,
  SLOW_INTERVAL: 200,
  
  // Delay before starting each phase (ms)
  MID_START_DELAY: 200,
  SLOW_START_DELAY: 700,
} as const;

// ============================================
// Custom Hook: Progress Animation
// ============================================

/**
 * Custom hook for managing loading progress animation
 * Implements three-phase progress: fast (0-50%), medium (50-80%), slow (80-95%)
 */
function useProgressAnimation(isActive: boolean) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const intervals: NodeJS.Timeout[] = [];

    // Phase 1: Fast start (0 -> 50%)
    const fastStart = setInterval(() => {
      setProgress((prev) => {
        if (prev >= PROGRESS_CONFIG.FAST_THRESHOLD) {
          clearInterval(fastStart);
          return PROGRESS_CONFIG.FAST_THRESHOLD;
        }
        return prev + PROGRESS_CONFIG.FAST_INCREMENT;
      });
    }, PROGRESS_CONFIG.FAST_INTERVAL);
    intervals.push(fastStart);

    // Phase 2: Medium progress (50 -> 80%)
    setTimeout(() => {
      const midProgress = setInterval(() => {
        setProgress((prev) => {
          if (prev >= PROGRESS_CONFIG.MID_THRESHOLD) {
            clearInterval(midProgress);
            return PROGRESS_CONFIG.MID_THRESHOLD;
          }
          return prev + PROGRESS_CONFIG.MID_INCREMENT;
        });
      }, PROGRESS_CONFIG.MID_INTERVAL);
      intervals.push(midProgress);
    }, PROGRESS_CONFIG.MID_START_DELAY);

    // Phase 3: Slow finish (80 -> 95%)
    setTimeout(() => {
      const slowFinish = setInterval(() => {
        setProgress((prev) => {
          if (prev >= PROGRESS_CONFIG.SLOW_THRESHOLD) {
            clearInterval(slowFinish);
            return PROGRESS_CONFIG.SLOW_THRESHOLD;
          }
          return prev + PROGRESS_CONFIG.SLOW_INCREMENT;
        });
      }, PROGRESS_CONFIG.SLOW_INTERVAL);
      intervals.push(slowFinish);
    }, PROGRESS_CONFIG.SLOW_START_DELAY);

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [isActive]);

  return progress;
}

// ============================================
// Component: LoadingBar
// ============================================

/**
 * LoadingBar - progress indicator for page navigation
 * Shows visual feedback during client-side navigation
 */
export default function LoadingBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const progress = useProgressAnimation(loading);

  // Reset on navigation complete
  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  // Track navigation clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const url = new URL(link.href);
        const isNewPage = url.pathname !== pathname || url.search !== window.location.search;
        
        if (isNewPage) {
          setLoading(true);
        }
      }
    };

    const handlePopState = () => {
      setLoading(true);
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

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
  );
}
