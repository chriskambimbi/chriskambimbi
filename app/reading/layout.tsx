import type { Metadata } from "next"
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Reading",
  description:
    "A curated list of blogs, books, and papers on AI safety, machine learning research, and engineering that have shaped Chris Kambimbi's thinking.",
  alternates: { canonical: "/reading" },
  openGraph: {
    title: "Reading | Chris Kambimbi",
    description:
      "Blogs, books, and papers on AI safety, machine learning research, and engineering.",
    url: absoluteUrl("/reading"),
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Chris Kambimbi" }],
  },
}

export default function ReadingLayout({ children }: { children: React.ReactNode }) {
  return children
}
