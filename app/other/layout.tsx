import type { Metadata } from "next"
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Other",
  description:
    "Presentations, documents, and resources by Chris Kambimbi on AI safety, adversarial attacks, and the evaluation of large language models in medicine.",
  alternates: { canonical: "/other" },
  openGraph: {
    title: "Other | Chris Kambimbi",
    description:
      "Presentations, documents, and resources on AI safety and large language model evaluation.",
    url: absoluteUrl("/other"),
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Chris Kambimbi" }],
  },
}

export default function OtherLayout({ children }: { children: React.ReactNode }) {
  return children
}
