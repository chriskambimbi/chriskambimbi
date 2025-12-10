import { Linkedin, Github, Twitter, Mail } from "lucide-react"

const basePath = '/chriskambimbi'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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
              src={`${basePath}/images/chris.png`}
              alt="Photo of Chris KAMBIMBI"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 font-roboto">Chris Kambimbi</h1>
          <p className="text-gray-500 mb-6">AI Safety Researcher & Software Engineer</p>

          <p className="text-gray-700 font-open-sans max-w-2xl mb-8 leading-relaxed">
            Software Engineering student at Fudan University with a focus on AI safety. Currently a student researcher
            at{" "}
            <a
              href="https://www.librai.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
            >
              LibrAI
            </a>
            , investigating vulnerabilities in large language models. I love building, testing, and prototyping new
            ideas.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/chris-kambimbi-83757a176/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/chriskambimbi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/chriskambimbi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:chriskambimbi@gmail.com"
              className="text-gray-500 hover:text-gray-900 transition-colors"
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
    <section className="py-12 px-4 border-t border-gray-100">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-12">
          {/* Education */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Education</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">M.S. in AI & Software Engineering</h3>
                  <p className="text-gray-500 text-sm">Fudan University</p>
                </div>
                <span className="text-gray-400 text-sm">2023–2026</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">B.S. in Electronic Information Engineering</h3>
                  <p className="text-gray-500 text-sm">Tongji University</p>
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
                  <h3 className="font-medium">AI Safety Student Researcher</h3>
                  <p className="text-gray-500 text-sm">LibrAI</p>
                </div>
                <span className="text-gray-400 text-sm">2025–Present</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">AI Safety Researcher</h3>
                  <p className="text-gray-500 text-sm">Fudan University FVL Lab</p>
                </div>
                <span className="text-gray-400 text-sm">2023–Present</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">AI Operations & Community Specialist</h3>
                  <p className="text-gray-500 text-sm">Dazzle AI, CivitAI, ET/Larix</p>
                </div>
                <span className="text-gray-400 text-sm">2021–2023</span>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Research Interests</h2>
            <p className="text-gray-700 text-sm">AI Safety · Medical AI · Robotics</p>
          </div>
        </div>
      </div>
    </section>
  )
}
