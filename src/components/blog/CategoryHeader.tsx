import { Category } from '@/payload-types'

export interface CategoryHeaderProps {
  category: Category
  postCount: number
}

export function CategoryHeader({ category, postCount }: CategoryHeaderProps) {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h1 className="mb-4">{category.name}</h1>
      {category.description && (
        <p className="text-xl text-muted-foreground mb-4">
          {category.description}
        </p>
      )}
      <p className="text-sm text-muted-foreground">
        {postCount === 0
          ? 'Немає статей у цій категорії'
          : postCount === 1
            ? '1 стаття'
            : postCount < 5
              ? `${postCount} статті`
              : `${postCount} статей`}
      </p>
    </div>
  )
}
