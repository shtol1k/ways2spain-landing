'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'section'
}

export interface TocItem {
  id: string
  text: string
  level: number
}

export interface TableOfContentsProps {
  /** CSS selector for the content container that has h2/h3 */
  selector: string
  className?: string
}

export function TableOfContents({ selector, className }: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([])

  useEffect(() => {
    const el = document.querySelector(selector)
    if (!el) return

    const headings = el.querySelectorAll('h2, h3')
    const list: TocItem[] = []
    headings.forEach((heading) => {
      const text = heading.textContent ?? ''
      const id = slugify(text)
      heading.id = id
      list.push({
        id,
        text,
        level: heading.tagName === 'H2' ? 2 : 3,
      })
    })
    setItems(list)
  }, [selector])

  if (items.length === 0) return null

  return (
    <nav
      aria-label="Зміст статті"
      className={cn('space-y-2', className)}
    >
      <h4 className="text-sm font-semibold text-foreground mb-3">Зміст</h4>
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(
              item.level === 3 && 'pl-4'
            )}
          >
            <a
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
