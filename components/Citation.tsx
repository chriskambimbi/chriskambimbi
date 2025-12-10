import { ReactNode } from 'react'

interface CitationProps {
  num: number
  children?: ReactNode
}

export function Citation({ num }: CitationProps) {
  return (
    <sup id={`cite-${num}`} className="citation-marker">
      {num}
    </sup>
  )
}
