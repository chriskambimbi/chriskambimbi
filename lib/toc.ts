export interface TocItem {
  id: string
  title: string
  level: number
  children?: TocItem[]
}

/**
 * Extracts table of contents from MDX content by parsing markdown headings
 * and converting them to a nested structure
 */
export function extractTocFromMdx(content: string): TocItem[] {
  const lines = content.split('\n')
  const toc: TocItem[] = []
  const stack: TocItem[] = []

  for (const line of lines) {
    // Match markdown headings (## or ###)
    const match = line.match(/^(#{2,3})\s+(.+)$/)
    if (!match) continue

    const level = match[1].length // 2 for h2, 3 for h3
    const title = match[2].trim()

    // Generate slug-like ID from title (similar to rehype-slug behavior)
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim()

    const item: TocItem = { id, title, level }

    if (level === 2) {
      // Top-level item
      toc.push(item)
      stack.length = 0
      stack.push(item)
    } else if (level === 3 && stack.length > 0) {
      // Nested item under h2
      const parent = stack[stack.length - 1]
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(item)
    }
  }

  return toc
}

/**
 * Generates HTML structure for the left TOC
 */
export function generateTocHtml(tocItems: TocItem[]): string {
  if (tocItems.length === 0) return ''

  const generateList = (items: TocItem[], level: number = 1): string => {
    const listClass = level === 1 ? 'toc-list' : 'toc-list toc-level-2'

    return `<ul class="${listClass}">${items.map(item => {
      const children = item.children && item.children.length > 0
        ? generateList(item.children, level + 1)
        : ''

      return `<li class="toc-item"><a href="#${item.id}">${item.title}</a>${children}</li>`
    }).join('')}</ul>`
  }

  return generateList(tocItems)
}
