import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Roboto, Open_Sans } from "next/font/google"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/theme-provider"
import {
  SITE_URL,
  SITE_NAME,
  SITE_AUTHOR,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
} from "@/lib/seo"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Chris Kambimbi",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,
  keywords: [
    "Chris Kambimbi",
    "AI safety",
    "AI safety researcher",
    "large language models",
    "LLM security",
    "adversarial attacks",
    "medical AI",
    "LibrAI",
    "Fudan University",
    "machine learning",
    "software engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 1200,
        alt: "Chris Kambimbi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: "@chriskambimbi",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
}

// Person structured data — helps search engines associate this site with
// "Chris Kambimbi" and build a knowledge-panel-style result for name searches.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chris Kambimbi",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  jobTitle: "AI Safety Researcher & Software Engineer",
  description: DEFAULT_DESCRIPTION,
  worksFor: [
    { "@type": "Organization", name: "LibrAI", url: "https://www.librai.tech/" },
    { "@type": "Organization", name: "Fudan University", url: "https://www.fudan.edu.cn/en/" },
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Fudan University" },
    { "@type": "CollegeOrUniversity", name: "Tongji University" },
  ],
  knowsAbout: ["AI Safety", "Large Language Models", "Adversarial Machine Learning", "Medical AI", "Robotics"],
  sameAs: [
    "https://www.linkedin.com/in/chris-kambimbi-83757a176/",
    "https://github.com/chriskambimbi",
    "https://x.com/chriskambimbi",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${roboto.variable} ${openSans.variable} font-sans bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            <main className="pt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
