import Link from "next/link"
import { cn } from "@/lib/utils"

export interface CategoryWithCount {
  id: number
  name: string
  slug: string
  postCount: number
}

export interface CategoryFilterProps {
  categories: CategoryWithCount[]
  currentSlug?: string | null
  basePath?: string
}

export function CategoryFilter({
  categories,
  currentSlug = null,
  basePath = "/blog",
}: CategoryFilterProps) {
  if (!categories?.length) return null

  return (
    <nav
      aria-label="Фільтр за категоріями"
      className="flex flex-wrap gap-2 justify-center"
    >
      <Link
        href={basePath}
        className={cn(
          "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
          !currentSlug
            ? "bg-primary text-primary-foreground"
            : "bg-secondary/10 text-secondary hover:bg-secondary/20"
        )}
      >
        Усі
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`${basePath}/category/${cat.slug}`}
          className={cn(
            "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
            currentSlug === cat.slug
              ? "bg-primary text-primary-foreground"
              : "bg-secondary/10 text-secondary hover:bg-secondary/20"
          )}
        >
          {cat.name}
          <span className="ml-1.5 text-xs opacity-80">({cat.postCount})</span>
        </Link>
      ))}
    </nav>
  )
}
