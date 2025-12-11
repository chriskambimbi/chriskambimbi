"use client"

import { Book, FileText, ExternalLink, Newspaper, GraduationCap, FlaskConical, Lightbulb, Users } from "lucide-react"

type ReadingType = "book" | "paper" | "blog"
type BlogCategory = "ai-safety" | "ml-research" | "engineering" | "thinking" | "industry"

interface BlogItem {
  title: string
  author: string
  url: string
  category: BlogCategory
  description?: string
}

interface BookItem {
  title: string
  author: string
  url?: string
  date?: string
  notes?: string
}

interface PaperItem {
  title: string
  authors: string
  url: string
  date?: string
  notes?: string
}

// Blogs organized by category
const blogs: Record<BlogCategory, BlogItem[]> = {
  "ai-safety": [
    { title: "Alignment Forum", author: "Community", url: "https://alignment.openai.com/", description: "OpenAI's alignment research" },
    { title: "Anthropic Alignment", author: "Anthropic", url: "https://alignment.anthropic.com/", description: "Anthropic's alignment science" },
    { title: "Anthropic Red Team", author: "Anthropic", url: "https://red.anthropic.com/", description: "AI red teaming research" },
    { title: "AI Alignment", author: "Paul Christiano", url: "https://ai-alignment.com/", description: "Alignment research and ideas" },
    { title: "Jan Leike", author: "Jan Leike", url: "https://jan.leike.name/", description: "Alignment research lead" },
    { title: "LessWrong", author: "Community", url: "https://www.lesswrong.com/", description: "Rationality and AI safety community" },
    { title: "Dario Amodei", author: "Dario Amodei", url: "https://www.darioamodei.com/", description: "Anthropic CEO's writings" },
  ],
  "ml-research": [
    { title: "Colah's Blog", author: "Chris Olah", url: "https://colah.github.io/", description: "Neural network visualizations" },
    { title: "Distill", author: "Various", url: "https://distill.pub/", description: "Clear ML explanations" },
    { title: "Jay Alammar", author: "Jay Alammar", url: "https://jalammar.github.io/", description: "Illustrated ML concepts" },
    { title: "Lil'Log", author: "Lilian Weng", url: "https://lilianweng.github.io/", description: "ML research summaries" },
    { title: "Sebastian Ruder", author: "Sebastian Ruder", url: "https://www.ruder.io/", description: "NLP research" },
    { title: "BAIR Blog", author: "Berkeley AI", url: "https://bair.berkeley.edu/blog/", description: "Berkeley AI research" },
    { title: "DeepMind Blog", author: "DeepMind", url: "https://deepmind.google/blog/", description: "DeepMind research updates" },
    { title: "The Gradient", author: "Various", url: "https://thegradient.pub/", description: "ML perspectives and research" },
    { title: "Sander Dieleman", author: "Sander Dieleman", url: "https://sander.ai/posts/", description: "Generative models research" },
    { title: "Sergey Levine", author: "Sergey Levine", url: "https://substack.com/@sergeylevine", description: "RL and robotics research" },
    { title: "Neel Nanda", author: "Neel Nanda", url: "https://www.neelnanda.io/", description: "Mechanistic interpretability" },
    { title: "Beren Millidge", author: "Beren Millidge", url: "https://www.beren.io/", description: "ML theory and research" },
    { title: "ML Theory Seminar", author: "Boaz Barak", url: "https://boazbk.github.io/mltheoryseminar/", description: "ML theory lectures" },
    { title: "Deep Representation Learning", author: "Ma Lab Berkeley", url: "https://ma-lab-berkeley.github.io/deep-representation-learning-book/index.html", description: "Representation learning book" },
    { title: "Illustrated DeepSeek R1", author: "Language Models", url: "https://newsletter.languagemodels.co/p/the-illustrated-deepseek-r1", description: "DeepSeek R1 explained" },
    { title: "Scaling Book", author: "JAX ML", url: "https://jax-ml.github.io/scaling-book/", description: "Scaling ML systems" },
  ],
  "engineering": [
    { title: "Andrej Karpathy", author: "Andrej Karpathy", url: "https://karpathy.ai/", description: "AI/ML engineering insights" },
    { title: "Chip Huyen", author: "Chip Huyen", url: "https://huyenchip.com/blog/", description: "ML systems and engineering" },
    { title: "Eugene Yan", author: "Eugene Yan", url: "https://eugeneyan.com/writing/", description: "ML in production" },
    { title: "Hamel Husain", author: "Hamel Husain", url: "https://hamel.dev/", description: "ML engineering and tools" },
    { title: "Simon Willison", author: "Simon Willison", url: "https://simonwillison.net/", description: "LLMs and web development" },
    { title: "Philipp Schmid", author: "Philipp Schmid", url: "https://www.philschmid.de/", description: "HuggingFace and ML deployment" },
    { title: "Sebastian Raschka", author: "Sebastian Raschka", url: "https://sebastianraschka.com/", description: "ML fundamentals and practice" },
    { title: "Fast.ai", author: "Jeremy Howard", url: "https://www.fast.ai/", description: "Practical deep learning" },
    { title: "AIE Book", author: "Chip Huyen", url: "https://github.com/chiphuyen/aie-book", description: "AI engineering book" },
    { title: "Deep Learning with Python", author: "François Chollet", url: "https://deeplearningwithpython.io/", description: "Keras creator's book" },
    { title: "XLe Robot", author: "Various", url: "https://xlerobot.readthedocs.io/en/latest/#", description: "Robot learning framework" },
    { title: "Awesome Tips", author: "Jia-Bin Huang", url: "https://github.com/jbhuang0604/awesome-tips", description: "Research tips collection" },
    { title: "Search Engine Blog", author: "Wilson Lin", url: "https://blog.wilsonl.in/search-engine/", description: "Building search systems" },
  ],
  "thinking": [
    { title: "Paul Graham", author: "Paul Graham", url: "https://paulgraham.com/", description: "Essays on startups and thinking" },
    { title: "Naval", author: "Naval Ravikant", url: "https://nav.al/", description: "Wealth and wisdom" },
    { title: "You and Your Research", author: "Richard Hamming", url: "https://www.cs.virginia.edu/~robins/YouAndYourResearch.html", description: "Classic research advice" },
    { title: "Principles of Effective Research", author: "Michael Nielsen", url: "https://michaelnielsen.org/blog/principles-of-effective-research/", description: "Research methodology" },
    { title: "John Schulman", author: "John Schulman", url: "http://joschu.net/index.html", description: "RL pioneer's writings" },
    { title: "Michael Notebook", author: "Michael Nielsen", url: "https://michaelnotebook.com/", description: "Tools for thought" },
    { title: "Boz", author: "Andrew Bosworth", url: "https://boz.com/", description: "Meta CTO's writings" },
    { title: "Demis Hassabis", author: "Demis Hassabis", url: "https://blog.google/authors/demis-hassabis/", description: "DeepMind CEO's posts" },
    { title: "Peniel Salekwa", author: "Peniel Salekwa", url: "https://penielsalekwa.substack.com/", description: "Tech and society" },
  ],
  "industry": [
    { title: "Thinking Machines", author: "Various", url: "https://thinkingmachines.ai/blog/", description: "AI consulting insights" },
    { title: "Mechanize", author: "Various", url: "https://www.mechanize.work/", description: "AI automation" },
    { title: "Nathan Lambert", author: "Nathan Lambert", url: "https://natolambert.com/", description: "RLHF and AI policy" },
    { title: "Normal Tech", author: "Various", url: "https://www.normaltech.ai/", description: "AI technology analysis" },
    { title: "Algorithmic Bridge", author: "Alberto Romero", url: "https://www.thealgorithmicbridge.com/", description: "AI news and analysis" },
    { title: "Denny Britz", author: "Denny Britz", url: "https://dennybritz.com/", description: "ML engineering career" },
    { title: "KDnuggets", author: "Various", url: "https://www.kdnuggets.com/", description: "Data science news" },
    { title: "Exponential View", author: "Azeem Azhar", url: "https://www.exponentialview.co/", description: "Tech trends analysis" },
  ],
}

const categoryConfig: Record<BlogCategory, { label: string; icon: typeof FlaskConical; color: string; bg: string }> = {
  "ai-safety": {
    label: "AI Safety & Alignment",
    icon: FlaskConical,
    color: "text-red-500",
    bg: "bg-red-50"
  },
  "ml-research": {
    label: "ML Research",
    icon: GraduationCap,
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  "engineering": {
    label: "Engineering & Practice",
    icon: Lightbulb,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  "thinking": {
    label: "Thinking & Research",
    icon: Book,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  "industry": {
    label: "Industry & News",
    icon: Newspaper,
    color: "text-green-500",
    bg: "bg-green-50"
  },
}

const books: BookItem[] = [
  // Add books here
]

const papers: PaperItem[] = [
  // Add papers here
]

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-3 font-roboto">Reading</h1>
            <p className="text-gray-500">Blogs, books, and papers that have shaped my thinking.</p>
          </div>

          {/* Blogs Section */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-6 font-roboto text-gray-900 border-b pb-2">Blogs</h2>

            <div className="space-y-10">
              {(Object.keys(categoryConfig) as BlogCategory[]).map((category) => (
                <BlogCategorySection
                  key={category}
                  category={category}
                  items={blogs[category]}
                />
              ))}
            </div>
          </div>

          {/* Books Section */}
          {books.length > 0 && (
            <div className="mb-16">
              <h2 className="text-xl font-semibold mb-6 font-roboto text-gray-900 border-b pb-2">Books</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {books.map((book, index) => (
                  <BookCard key={index} item={book} />
                ))}
              </div>
            </div>
          )}

          {/* Papers Section */}
          {papers.length > 0 && (
            <div className="mb-16">
              <h2 className="text-xl font-semibold mb-6 font-roboto text-gray-900 border-b pb-2">Papers</h2>
              <div className="space-y-3">
                {papers.map((paper, index) => (
                  <PaperCard key={index} item={paper} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function BlogCategorySection({ category, items }: { category: BlogCategory; items: BlogItem[] }) {
  const config = categoryConfig[category]
  const Icon = config.icon

  if (!items || items.length === 0) return null

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className={`p-1.5 rounded ${config.bg}`}>
          <Icon className={`w-4 h-4 ${config.color}`} />
        </div>
        <h3 className="text-sm font-medium text-gray-700">{config.label}</h3>
        <span className="text-xs text-gray-400">({items.length})</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item, index) => (
          <BlogCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

function BlogCard({ item }: { item: BlogItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-200"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors truncate">
            {item.title}
          </h4>
          <ExternalLink className="w-3 h-3 text-gray-300 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-xs text-gray-500 mt-0.5">{item.author}</p>
        {item.description && (
          <p className="text-xs text-gray-400 mt-1 line-clamp-1">{item.description}</p>
        )}
      </div>
    </a>
  )
}

function BookCard({ item }: { item: BookItem }) {
  const content = (
    <div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded bg-purple-50 flex-shrink-0">
          <Book className="w-4 h-4 text-purple-500" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{item.author}</p>
          {item.notes && <p className="text-xs text-gray-600 mt-2">{item.notes}</p>}
          {item.date && <p className="text-xs text-gray-400 mt-1">{item.date}</p>}
        </div>
        {item.url && <ExternalLink className="w-3 h-3 text-gray-300 flex-shrink-0" />}
      </div>
    </div>
  )

  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="group">
        {content}
      </a>
    )
  }

  return content
}

function PaperCard({ item }: { item: PaperItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-200"
    >
      <div className="p-1.5 rounded bg-blue-50 flex-shrink-0">
        <FileText className="w-4 h-4 text-blue-500" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
          {item.title}
        </h4>
        <p className="text-xs text-gray-500 mt-0.5">{item.authors}</p>
        {item.notes && <p className="text-xs text-gray-600 mt-1">{item.notes}</p>}
        {item.date && <span className="text-xs text-gray-400">{item.date}</span>}
      </div>
      <ExternalLink className="w-3 h-3 text-gray-300 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}
