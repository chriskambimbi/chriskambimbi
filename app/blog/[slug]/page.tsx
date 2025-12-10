import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/mdx"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx-components'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import BlogPostClient from '@/components/BlogPostClient'
import { extractTocFromMdx } from '@/lib/toc'

export function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Extract references from content
  const lines = post.content.split("\n")
  const refsIndex = lines.findIndex(line => line.trim() === "## References")

  const references: Record<string, string> = {}
  if (refsIndex !== -1) {
    for (let i = refsIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim()
      const match = line.match(/^(\d+)\.\s+(.+)$/)
      if (match) {
        references[match[1]] = match[2]
      }
    }
  }

  // Split content to separate main content from references
  const mainContent = refsIndex !== -1 ? lines.slice(0, refsIndex).join("\n") : post.content

  // Extract table of contents from main content
  const toc = extractTocFromMdx(mainContent)

  return (
    <BlogPostClient
      title={post.title}
      author={post.author}
      date={post.date}
      coverImage={post.coverImage}
      references={references}
      toc={toc}
    >
      <MDXRemote
        source={mainContent}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkMath],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
              rehypeKatex
            ],
          }
        }}
      />
    </BlogPostClient>
  )
}
