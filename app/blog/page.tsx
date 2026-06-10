import type { Metadata } from "next"
import { getAllBlogPosts } from "@/lib/mdx"
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays and notes by Chris Kambimbi on AI safety, large language models, machine learning research, and technology.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Chris Kambimbi",
    description:
      "Essays and notes on AI safety, large language models, machine learning research, and technology.",
    url: absoluteUrl("/blog"),
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Chris Kambimbi" }],
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 pt-16">
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex gap-16 py-4 hover:opacity-70 transition-opacity">
                <div className="w-20 flex-shrink-0">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1 font-roboto">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.author}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
