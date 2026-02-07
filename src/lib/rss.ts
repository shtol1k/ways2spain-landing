/**
 * Utilities for generating RSS 2.0 feed XML
 */

export function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * RFC 822 / RSS date format (e.g. "Mon, 06 Feb 2023 12:00:00 +0000")
 */
export function formatRssDate(date: Date): string {
  return date.toUTCString();
}

export interface RssItem {
  title: string;
  link: string;
  description: string;
  pubDate: Date;
  guid: string;
}

export interface RssChannel {
  title: string;
  link: string;
  description: string;
  language?: string;
  lastBuildDate: Date;
  items: RssItem[];
}

/**
 * Generate RSS 2.0 XML string
 */
export function generateRssXml(channel: RssChannel): string {
  const lastBuild = formatRssDate(channel.lastBuildDate);
  const itemsXml = channel.items
    .map(
      (item) =>
        `  <item>
    <title>${escapeXml(item.title)}</title>
    <link>${escapeXml(item.link)}</link>
    <description>${escapeXml(item.description)}</description>
    <pubDate>${formatRssDate(item.pubDate)}</pubDate>
    <guid isPermaLink="true">${escapeXml(item.guid)}</guid>
  </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channel.title)}</title>
    <link>${escapeXml(channel.link)}</link>
    <description>${escapeXml(channel.description)}</description>
    <language>${channel.language ?? "uk"}</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${escapeXml(channel.link)}" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`;
}
