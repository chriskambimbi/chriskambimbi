import type React from "react"
import "./globals.css"
import { Roboto, Open_Sans } from "next/font/google"
import Header from "@/components/Header"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata = {
  title: "About Chris KAMBIMBI - Researcher, Writer, Developer",
  description:
    "Learn about Chris KAMBIMBI, a researcher and developer focused on quantum computing, AI, and technology ethics.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${roboto.variable} ${openSans.variable} font-sans bg-white text-gray-900`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  )
}
