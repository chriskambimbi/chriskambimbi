import { NextResponse } from 'next/server'
import { getBlogPost } from '@/lib/mdx'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  return NextResponse.json(post)
}
