import type { ReactNode } from "react";

export interface JsonLdProps {
  data: object | object[];
}

/**
 * Renders JSON-LD structured data as a script tag.
 * Pass a single object or array of objects for multiple schemas.
 */
export function JsonLd({ data }: JsonLdProps): ReactNode {
  const json =
    Array.isArray(data) && data.length === 0
      ? null
      : Array.isArray(data)
        ? data.length === 1
          ? data[0]
          : data
        : data;

  if (json === null) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
