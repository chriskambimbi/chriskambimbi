"use client"

import { useEffect, useState } from "react"
import { ReactNode } from "react"
import type { TocItem } from "@/lib/toc"

const basePath = process.env.NODE_ENV === 'production' ? '/chriskambimbi' : ''

// Parse markdown links [text](url) into HTML anchor tags
function parseMarkdownLinks(text: string): string {
  // Match [link text](url) pattern
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  return text.replace(linkRegex, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
}

interface BlogPostClientProps {
  title: string
  author: string
  date: string
  coverImage?: string
  children: ReactNode
  references: Record<string, string>
  toc: TocItem[]
}

export default function BlogPostClient({
  title,
  author,
  date,
  coverImage,
  children,
  references,
  toc
}: BlogPostClientProps) {
  const [tocVisible, setTocVisible] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("medium-zoom").then((mediumZoom) => {
        const zoom = mediumZoom.default("[data-zoomable]", {
          margin: 48,
          background: "rgba(255, 255, 255, 0.95)",
          scrollOffset: 0,
        })
        return () => {
          zoom.detach()
        }
      })
    }
  }, [])

  // Position references aligned with their citations (with collision detection)
  useEffect(() => {
    if (typeof window === "undefined" || Object.keys(references).length === 0) return

    const positionReferences = () => {
      const articleContent = document.querySelector('.article-content') as HTMLElement
      if (!articleContent) return

      const layoutRect = articleContent.getBoundingClientRect()
      const layoutTop = layoutRect.top + window.scrollY

      // Store positions to detect collisions
      const positions: { num: string; top: number; height: number }[] = []
      const MIN_GAP = 10 // Minimum gap between references in pixels

      // First pass: calculate initial positions
      Object.keys(references).forEach((num) => {
        const citation = document.querySelector(`#cite-${num}`)
        const reference = document.querySelector(`[data-ref-num="${num}"]`) as HTMLElement

        if (citation && reference) {
          const citationRect = citation.getBoundingClientRect()
          const citationTop = citationRect.top + window.scrollY
          const topOffset = citationTop - layoutTop
          const refHeight = reference.offsetHeight || 50

          positions.push({ num, top: topOffset, height: refHeight })
        }
      })

      // Sort by position
      positions.sort((a, b) => a.top - b.top)

      // Second pass: adjust for collisions
      for (let i = 1; i < positions.length; i++) {
        const prev = positions[i - 1]
        const curr = positions[i]
        const minTop = prev.top + prev.height + MIN_GAP

        if (curr.top < minTop) {
          curr.top = minTop
        }
      }

      // Apply final positions
      positions.forEach(({ num, top }) => {
        const reference = document.querySelector(`[data-ref-num="${num}"]`) as HTMLElement
        if (reference) {
          reference.style.top = `${top}px`
        }
      })
    }

    // Position after content loads
    const timer1 = setTimeout(positionReferences, 100)
    const timer2 = setTimeout(positionReferences, 500)
    const timer3 = setTimeout(positionReferences, 1000)

    window.addEventListener('resize', positionReferences)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      window.removeEventListener('resize', positionReferences)
    }
  }, [references])

  return (
    <div className="blog-layout">
      {/* Main Content Area */}
      <main className="main-content">
        {/* Post Header */}
        <header className="post-header">
          <h1 className="post-title">{title}</h1>
          <div className="post-meta">
            {author && <span className="author">{author}</span>}
            <span className="date">{date}</span>
          </div>
        </header>

        {/* Cover Image */}
        {coverImage && (
          <figure className="cover-image">
            <img
              data-zoomable=""
              src={coverImage.startsWith('/') ? `${basePath}${coverImage}` : coverImage}
              loading="lazy"
              alt=""
            />
          </figure>
        )}

        {/* Article Content - serves as positioning anchor for TOC and references */}
        <article className="article-content">
          {/* Left: Table of Contents - positioned absolutely, aligned with first paragraph */}
          {toc && toc.length > 0 && (
            <nav
              className={`toc-sidebar ${tocVisible ? 'toc-visible' : 'toc-hidden'}`}
              aria-label="Table of contents"
            >
              <button
                className="toc-toggle"
                onClick={() => setTocVisible(!tocVisible)}
                aria-expanded={tocVisible}
                aria-label={tocVisible ? "Hide table of contents" : "Show table of contents"}
              >
                <svg
                  className="toc-toggle-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  style={{ transform: tocVisible ? 'rotate(0deg)' : 'rotate(-90deg)' }}
                >
                  <path
                    d="M3 5L7 9L11 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="toc-toggle-label">Contents</span>
              </button>
              <ul className="toc-list">
                {toc.map((item) => (
                  <li key={item.id} className="toc-item">
                    <a href={`#${item.id}`}>{item.title}</a>
                    {item.children && item.children.length > 0 && (
                      <ul className="toc-sublist">
                        {item.children.map((child) => (
                          <li key={child.id} className="toc-subitem">
                            <a href={`#${child.id}`}>{child.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Margin References - positioned absolutely */}
          {Object.keys(references).length > 0 && (
            <div className="margin-references">
              {Object.entries(references).map(([num, text]) => (
                <div
                  key={num}
                  className="margin-note"
                  data-ref-num={num}
                >
                  <sup>{num}</sup>
                  <span dangerouslySetInnerHTML={{ __html: parseMarkdownLinks(text) }} />
                </div>
              ))}
            </div>
          )}

          {children}
        </article>
      </main>
    </div>
  )
}
