'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from '@/components/ui/pagination'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const VISIBLE_PAGES = 2 // pages to show on each side of current

export interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  basePath?: string
}

export function BlogPagination({
  currentPage,
  totalPages,
  basePath = '/blog',
}: BlogPaginationProps) {
  if (totalPages <= 1) return null

  const searchParams = (page: number) => {
    if (page <= 1) return basePath
    return `${basePath}?page=${page}`
  }

  const showPrevEllipsis = currentPage > VISIBLE_PAGES + 2
  const showNextEllipsis = currentPage < totalPages - VISIBLE_PAGES - 1

  const startPage = Math.max(1, currentPage - VISIBLE_PAGES)
  const endPage = Math.min(totalPages, currentPage + VISIBLE_PAGES)

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 ? (
            <Link
              href={searchParams(currentPage - 1)}
              aria-label="Попередня сторінка"
              className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'gap-1 pl-2.5')}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Попередня</span>
            </Link>
          ) : (
            <span className="flex h-9 items-center gap-1 rounded-md border border-transparent px-4 py-2 text-muted-foreground cursor-not-allowed">
              Попередня
            </span>
          )}
        </PaginationItem>

        {showPrevEllipsis && (
          <>
            <PaginationItem>
              <Link
                href={searchParams(1)}
                aria-label="Сторінка 1"
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'h-9 w-9'
                )}
              >
                1
              </Link>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(
          (page) => (
            <PaginationItem key={page}>
              <Link
                href={searchParams(page)}
                aria-label={`Сторінка ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                className={cn(
                  buttonVariants({
                    variant: page === currentPage ? 'outline' : 'ghost',
                    size: 'icon',
                  }),
                  'h-9 w-9'
                )}
              >
                {page}
              </Link>
            </PaginationItem>
          )
        )}

        {showNextEllipsis && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <Link
                href={searchParams(totalPages)}
                aria-label={`Сторінка ${totalPages}`}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'h-9 w-9'
                )}
              >
                {totalPages}
              </Link>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          {currentPage < totalPages ? (
            <Link
              href={searchParams(currentPage + 1)}
              aria-label="Наступна сторінка"
              className={cn(buttonVariants({ variant: 'ghost', size: 'default' }), 'gap-1 pr-2.5')}
            >
              <span>Наступна</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <span className="flex h-9 items-center gap-1 rounded-md border border-transparent px-4 py-2 text-muted-foreground cursor-not-allowed">
              Наступна
            </span>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
