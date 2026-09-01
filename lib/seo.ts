// Centralized SEO configuration.
// The site is served from the domain root (repo: chriskambimbi/chriskambimbi.github.io).
export const SITE_URL = "https://chriskambimbi.github.io"

export const SITE_NAME = "Chris Kambimbi"
export const SITE_AUTHOR = "Chris Kambimbi"

export const DEFAULT_TITLE = "Chris Kambimbi — AI Safety Researcher & Software Engineer"
export const DEFAULT_DESCRIPTION =
  "Chris Kambimbi is a Research Engineer at LibrAI, investigating vulnerabilities in large language models. Writing on AI safety, red teaming, and AI alignment."

// Default share image used for Open Graph / Twitter cards.
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/chris.jpg`

// Build an absolute URL for a site-relative path (e.g. "/about", "/images/x.png").
// Always use this for canonical URLs and og:image so the basePath is preserved.
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`
}
