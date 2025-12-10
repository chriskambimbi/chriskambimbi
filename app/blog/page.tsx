import { getAllBlogPosts } from "@/lib/mdx"
import Link from "next/link"

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16">
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
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-1 font-roboto">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
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
