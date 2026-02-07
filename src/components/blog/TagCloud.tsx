import Link from "next/link";
import { cn } from "@/lib/utils";

export interface TagItem {
  id: number;
  name: string;
  slug: string;
}

export interface TagCloudProps {
  tags: TagItem[];
  basePath?: string;
  className?: string;
}

export function TagCloud({
  tags,
  basePath = "/blog",
  className,
}: TagCloudProps) {
  if (!tags?.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <Link
          key={tag.id}
          href={`${basePath}/tag/${tag.slug}`}
          className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
}
