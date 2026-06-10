import type { MetadataRoute } from "next"
import { getAllBlogPosts } from "@/lib/mdx"
import { absoluteUrl } from "@/lib/seo"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/about", "/projects", "/blog", "/reading", "/other"].map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: "monthly" as const,
    priority: route === "/about" ? 1 : 0.7,
  }))

  const blogRoutes = getAllBlogPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }))

  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    ...staticRoutes,
    ...blogRoutes,
  ]
}
