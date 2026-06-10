import type { Metadata } from "next"
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Chris Kambimbi, including the MedLLM Attack Taxonomy and Ellesia, spanning AI safety, adversarial machine learning, and applied LLM work.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Chris Kambimbi",
    description:
      "Projects spanning AI safety, adversarial machine learning, and applied LLM work.",
    url: absoluteUrl("/projects"),
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Chris Kambimbi" }],
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
