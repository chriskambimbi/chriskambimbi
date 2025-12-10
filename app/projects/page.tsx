"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "MedLLM Attack Taxonomy",
    image: "/images/medllm-taxonomy.png",
    description: "Interactive taxonomy exploring adversarial attacks on medical large language models.",
    links: [
      { label: "GitHub", url: "https://github.com/chriskambimbi/MedLLM-Attack-Taxonomy", icon: "github" as const },
      { label: "Live Demo", url: "https://chriskambimbi.github.io/MedLLM-Attack-Taxonomy/", icon: "external" as const },
    ],
  },
  {
    title: "Ellesia",
    image: "/images/ellesia.png",
    description: "Fine-tuned AI assistant using Tinker",
    links: [
      { label: "GitHub", url: "https://github.com/chriskambimbi/Ellesia", icon: "github" as const },
      { label: "Model", url: "https://huggingface.co/Christim/ellesia-gpt-oss-120b", icon: "external" as const },
      { label: "Dataset", url: "https://huggingface.co/datasets/Christim/seventh-day-adventist-conversations", icon: "external" as const },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 font-roboto text-gray-900">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group">
              {/* Image */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-2 font-roboto text-gray-900">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.icon === "github" ? <Github size={16} /> : <ExternalLink size={16} />}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
