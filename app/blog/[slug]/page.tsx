import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts, getExcerpt } from "@/lib/mdx"
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_AUTHOR } from "@/lib/seo"
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return { title: "Post not found" }
  }

  const description = post.description || getExcerpt(post.content)
  const url = absoluteUrl(`/blog/${slug}`)
  const ogImage = post.coverImage ? absoluteUrl(post.coverImage) : DEFAULT_OG_IMAGE

  return {
    title: post.title,
    description,
    keywords: post.tags,
    authors: [{ name: post.author || SITE_AUTHOR }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url,
      publishedTime: `${post.date} ${post.year}`,
      authors: [post.author || SITE_AUTHOR],
      tags: post.tags,
      images: [{ url: ogImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
    },
  }
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || getExcerpt(post.content),
    image: post.coverImage ? absoluteUrl(post.coverImage) : DEFAULT_OG_IMAGE,
    datePublished: `${post.date} ${post.year}`,
    keywords: post.tags?.join(", "),
    author: { "@type": "Person", name: post.author || SITE_AUTHOR, url: absoluteUrl("/about") },
    publisher: { "@type": "Person", name: SITE_AUTHOR },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/blog/${slug}`) },
  }

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
    />
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
    </>
  )
}
