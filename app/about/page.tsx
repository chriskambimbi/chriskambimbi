import type { Metadata } from "next"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import { absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo"
import { getBasePath } from "@/lib/basePath"

export const metadata: Metadata = {
  title: "About",
  description:
    "Chris Kambimbi is a Research Engineer at LibrAI, investigating vulnerabilities in large language models.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Chris Kambimbi",
    description:
      "Research Engineer at LibrAI, investigating vulnerabilities in large language models.",
    url: absoluteUrl("/about"),
    type: "profile",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Chris Kambimbi" }],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <IntroductionSection />
      <ResumeSection />
    </div>
  )
}

const IntroductionSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 relative mb-8">
            <img
              src={getBasePath("/images/chris.jpg")}
              alt="Photo of Chris KAMBIMBI"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 font-roboto">Chris Kambimbi</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">AI Safety Researcher & Software Engineer</p>

          <p className="text-gray-700 dark:text-gray-300 font-open-sans max-w-2xl mb-8 leading-relaxed">
            Research Engineer at{" "}
            <a
              href="https://www.librai.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900 dark:hover:text-gray-100"
            >
              LibrAI
            </a>
            .
          </p>

          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/chris-kambimbi-83757a176/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/chriskambimbi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/chriskambimbi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:chriskambimbi@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const ResumeSection = () => {
  return (
    <section className="py-12 px-4 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-12">
          {/* Education */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Education</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">M.S. in AI & Software Engineering</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Fudan University</p>
                </div>
                <span className="text-gray-400 text-sm">2023–2026</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">B.S. in Electronic Information Engineering</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Tongji University</p>
                </div>
                <span className="text-gray-400 text-sm">2019–2023</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Research Engineer</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">LibrAI</p>
                </div>
                <span className="text-gray-400 text-sm">2026–Present</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">AI Safety Student Researcher</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">LibrAI</p>
                </div>
                <span className="text-gray-400 text-sm">2025–2025</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">AI Safety Researcher</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Fudan University FVL Lab</p>
                </div>
                <span className="text-gray-400 text-sm">2023–2026</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">AI Operations & Community Specialist</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Dazzle AI, CivitAI, ET/Larix</p>
                </div>
                <span className="text-gray-400 text-sm">2021–2023</span>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Research Interests</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">AI Safety · Red Teaming · AI Alignment</p>
          </div>
        </div>
      </div>
    </section>
  )
}
