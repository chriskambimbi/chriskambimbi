import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  year: number
  coverImage?: string
  tags?: string[]
  content: string
}

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(contentDirectory)

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const filePath = path.join(contentDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)

      return {
        slug,
        title: data.title || '',
        author: data.author || '',
        date: data.date || '',
        year: data.year || new Date().getFullYear(),
        coverImage: data.coverImage,
        tags: data.tags || [],
        content,
      }
    })
    .sort((a, b) => {
      // Sort by year and date, most recent first
      if (a.year !== b.year) {
        return b.year - a.year
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return posts
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title || '',
      author: data.author || '',
      date: data.date || '',
      year: data.year || new Date().getFullYear(),
      coverImage: data.coverImage,
      tags: data.tags || [],
      content,
    }
  } catch (error) {
    return null
  }
}
