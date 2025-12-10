import Image from 'next/image'
import { ReactNode } from 'react'
import { Citation } from './Citation'

// Example box component - research paper figure style
const ExampleBox = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="example-box">
    <div className="example-box-title">{title}</div>
    <div className="example-box-content">{children}</div>
  </div>
)

// Section header inside example box
const ExampleSection = ({ children }: { children: ReactNode }) => (
  <div className="example-box-section">{children}</div>
)

// Code block inside example box
const ExampleCode = ({ children }: { children: ReactNode }) => (
  <div className="example-box-code">{children}</div>
)

// Highlighted tag/code inline (for special tags like <think>)
const HighlightTag = ({ children }: { children: ReactNode }) => (
  <span className="highlight-tag">{children}</span>
)

export const mdxComponents = {
  Citation,
  ExampleBox,
  ExampleSection,
  ExampleCode,
  HighlightTag,
  h1: ({ children, ...props }: { children: ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-bold mb-6 font-roboto tracking-tight text-gray-900" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: { children: ReactNode }) => (
    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 font-roboto" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: { children: ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3 font-roboto" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: { children: ReactNode }) => (
    <p className="text-gray-800 text-base leading-relaxed mb-3 font-serif" {...props}>
      {children}
    </p>
  ),
  img: ({ src, alt, ...props }: { src?: string; alt?: string }) => (
    <img
      data-zoomable
      src={src}
      alt={alt || 'Figure'}
      className="w-full max-w-3xl mx-auto medium-zoom-image cursor-zoom-in my-6"
      {...props}
    />
  ),
  ul: ({ children, ...props }: { children: ReactNode }) => (
    <ul className="list-disc list-inside mb-3 text-gray-800 text-base font-serif" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside mb-3 text-gray-800 text-base font-serif" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: { children: ReactNode }) => (
    <li className="mb-2" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: { children: ReactNode }) => (
    <code className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: { children: ReactNode }) => (
    <pre className="bg-gray-100 rounded p-4 overflow-x-auto mb-4 text-sm" {...props}>
      {children}
    </pre>
  ),
  sup: ({ children, ...props }: { children: ReactNode }) => (
    <sup className="citation-number" {...props}>
      {children}
    </sup>
  ),
}
