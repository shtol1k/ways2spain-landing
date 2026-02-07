import { getPosts } from "@/api/blog";
import { getCanonicalUrl } from "@/lib/utils";
import { generateRssXml } from "@/lib/rss";

export const revalidate = 60;

export async function GET() {
  const { docs: posts } = await getPosts(1, 50);
  const baseUrl = getCanonicalUrl("").replace(/\/$/, "");

  const channel = {
    title: "Блог - Ways2Spain | Digital Nomad Visa Іспанія",
    link: getCanonicalUrl("blog"),
    description:
      "Корисні статті про Digital Nomad Visa та релокацію в Іспанію. Поради, інструкції та досвід.",
    language: "uk",
    lastBuildDate: new Date(),
    items: posts.map((post) => ({
      title: post.title ?? "",
      link: `${baseUrl}/blog/${post.slug ?? ""}`,
      description: post.excerpt ?? "",
      pubDate: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      guid: `${baseUrl}/blog/${post.slug ?? ""}`,
    })),
  };

  const xml = generateRssXml(channel);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
