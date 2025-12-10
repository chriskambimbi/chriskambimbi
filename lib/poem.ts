export interface Poem {
  id: string
  title: string
  author: string
  content: string
  year?: number
  date?: string
  coverImage?: string
  tags: string[]
}
