"use client"

import { Book, FileText, ExternalLink } from "lucide-react"

type ReadingType = "book" | "blog"

interface ReadingItem {
  title: string
  author: string
  type: ReadingType
  url?: string
  date?: string
  notes?: string
}

const readings: ReadingItem[] = [
  // Add your readings here
  // Example:
  // {
  //   title: "The Alignment Problem",
  //   author: "Brian Christian",
  //   type: "book",
  //   date: "2024",
  //   notes: "Great overview of AI alignment challenges"
  // },
  // {
  //   title: "Constitutional AI: Harmlessness from AI Feedback",
  //   author: "Anthropic",
  //   type: "blog",
  //   url: "https://arxiv.org/abs/2212.08073",
  //   date: "Dec 2024"
  // },
]

const typeConfig = {
  book: {
    icon: Book,
    label: "Book",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  blog: {
    icon: FileText,
    label: "Blog/Paper",
    color: "text-blue-500",
    bg: "bg-blue-50"
  }
}

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-3 font-roboto">Reading</h1>
            <p className="text-gray-500">Books and blogs I've read.</p>
          </div>

          {readings.length > 0 ? (
            <div className="space-y-4">
              {readings.map((item, index) => (
                <ReadingCard key={index} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-12">No readings added yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}

function ReadingCard({ item }: { item: ReadingItem }) {
  const config = typeConfig[item.type]
  const Icon = config.icon

  const content = (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
      <div className={`p-2 rounded-lg ${config.bg} flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${config.color}`} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>
          {item.url && (
            <ExternalLink className="w-4 h-4 text-gray-300 flex-shrink-0" />
          )}
        </div>

        <p className="text-sm text-gray-500 mt-1">{item.author}</p>

        {item.notes && (
          <p className="text-sm text-gray-600 mt-2">{item.notes}</p>
        )}

        <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
          <span className={config.color}>{config.label}</span>
          {item.date && <span>{item.date}</span>}
        </div>
      </div>
    </div>
  )

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        {content}
      </a>
    )
  }

  return content
}
