import { FileText, Presentation, Sheet, File, ExternalLink } from "lucide-react"

type ItemType = "presentation" | "document" | "spreadsheet" | "other"

interface OtherItem {
  title: string
  description: string
  type: ItemType
  url: string
  date?: string
}

const items: OtherItem[] = [
  {
    title: "Grounding Safety Awareness in AI Models Through Internal Reasoning",
    description: "Presentation on embedding safety considerations directly into AI model reasoning processes.",
    type: "presentation",
    url: "/presentations/Grounding Safety Awareness in AI Models Through Internal Reasoning 27-06-2025.pptx",
    date: "Jun 2025"
  },
  {
    title: "DeepSeek V3.2 Adversarial Robustness",
    description: "Preliminary safety evaluation of DeepSeek V3.2 model vulnerabilities and adversarial attacks.",
    type: "document",
    url: "https://docs.google.com/document/d/1b-VkiybgIlWCjTEtKomiO55TfV9226TrFXHfTn3tS3U/edit",
    date: "Dec 2025"
  },
  {
    title: "Medical LLM Attack Taxonomy",
    description: "Comprehensive taxonomy of motivations and methods for attacking medical LLMs in healthcare settings.",
    type: "spreadsheet",
    url: "https://docs.google.com/spreadsheets/d/1KRN9RQe9MSx9yB1CVjHsMk4zniUK2DNPy_dKJ6U-CoU/edit?usp=sharing",
    date: "Dec 2025"
  },
  {
    title: "Adversarial Attacks on Multimodal LLMs in Medical Domain",
    description: "Research presentation on adversarial attack methods targeting multimodal large language models in healthcare.",
    type: "presentation",
    url: "/presentations/Research on Adversarial Attacks on Multimodal Large Language Models in the Medical Domain 24-12-2024.pptx",
    date: "Dec 2024"
  },
  {
    title: "Evaluating Large Language Models in Medicine",
    description: "Presentation on evaluation frameworks and methodologies for assessing LLM performance in medical applications.",
    type: "presentation",
    url: "/presentations/Evaluating Large Language Models Medicine 09-09-2024.pptx",
    date: "Sep 2024"
  },
  {
    title: "Adversarial Attacks & Examples on Medical Imaging",
    description: "Overview of adversarial attack techniques and real-world examples targeting medical imaging AI systems.",
    type: "presentation",
    url: "/presentations/Adversarial attacks & Examples on medical imaging 03-2024.pptx",
    date: "Mar 2024"
  },
]

const typeConfig = {
  presentation: {
    icon: Presentation,
    label: "Presentation",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  document: {
    icon: FileText,
    label: "Document",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  spreadsheet: {
    icon: Sheet,
    label: "Spreadsheet",
    color: "text-green-500",
    bg: "bg-green-50"
  },
  other: {
    icon: File,
    label: "File",
    color: "text-gray-500",
    bg: "bg-gray-50"
  }
}

export default function OtherPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-3 font-roboto">Other</h1>
            <p className="text-gray-500">Presentations, documents, spreadsheets, and other resources.</p>
          </div>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <ItemCard key={index} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-12">No items yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}

function ItemCard({ item }: { item: OtherItem }) {
  const config = typeConfig[item.type]
  const Icon = config.icon

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${config.bg}`}>
          <Icon className={`w-5 h-5 ${config.color}`} />
        </div>
        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
      </div>

      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
        {item.title}
      </h3>

      <p className="text-sm text-gray-500 mb-3 line-clamp-2">
        {item.description}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <span className={config.color}>{config.label}</span>
        {item.date && <span>{item.date}</span>}
      </div>
    </a>
  )
}
