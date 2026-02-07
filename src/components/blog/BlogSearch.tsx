'use client'

import { useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { Post } from '@/payload-types'
import { cn } from '@/lib/utils'

const SEARCH_DEBOUNCE_MS = 200
const MIN_QUERY_LENGTH = 2

export interface BlogSearchProps {
  posts: Post[]
  placeholder?: string
  className?: string
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text
  const q = query.trim()
  const re = new RegExp(`(${escapeRegex(q)})`, 'gi')
  const parts = text.split(re)
  return parts.map((part, i) =>
    part.toLowerCase() === q.toLowerCase() ? (
      <mark key={i} className="bg-primary/20 text-foreground rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

export function BlogSearch({
  posts,
  placeholder = 'Пошук статей...',
  className,
}: BlogSearchProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q.length < MIN_QUERY_LENGTH) return []
    return posts.filter((post) => {
      const title = (post.title ?? '').toLowerCase()
      const excerpt = (post.excerpt ?? '').toLowerCase()
      const content = (post as { content_html?: string }).content_html ?? ''
      const contentLower = (typeof content === 'string' ? content : '').toLowerCase()
      return title.includes(q) || excerpt.includes(q) || contentLower.includes(q)
    })
  }, [posts, query])

  const handleSelect = useCallback(
    (slug: string) => {
      setOpen(false)
      setQuery('')
      router.push(`/blog/${slug}`)
    },
    [router]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'relative flex items-center rounded-lg border border-input bg-background',
            className
          )}
        >
          <Search className="ml-3 h-4 w-4 shrink-0 text-muted-foreground" />
          <Input
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setOpen(true)}
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 pl-2 pr-4 py-2"
            aria-label="Пошук статей"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Command shouldFilter={false}>
          <CommandList>
            <CommandEmpty>
              {query.length < MIN_QUERY_LENGTH
                ? 'Введіть щонайменше 2 символи'
                : 'Нічого не знайдено'}
            </CommandEmpty>
            <CommandGroup heading="Результати">
              {filtered.slice(0, 8).map((post) => (
                <CommandItem
                  key={post.id}
                  value={String(post.id)}
                  onSelect={() => handleSelect(post.slug ?? '')}
                  className="flex flex-col items-start gap-0.5 py-3 cursor-pointer"
                >
                  <span className="font-medium">
                    {highlightMatch(post.title ?? '', query)}
                  </span>
                  {post.category && typeof post.category !== 'number' && (
                    <span className="text-xs text-muted-foreground">
                      {post.category.name}
                    </span>
                  )}
                  {post.excerpt && (
                    <span className="text-xs text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </span>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
