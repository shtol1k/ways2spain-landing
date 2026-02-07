import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_URL =
  typeof process !== "undefined"
    ? process.env.NEXT_PUBLIC_SITE_URL || "https://ways2spain.com"
    : "https://ways2spain.com";

/**
 * Build canonical URL for a path (no leading slash required).
 */
export function getCanonicalUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${p}`;
}
