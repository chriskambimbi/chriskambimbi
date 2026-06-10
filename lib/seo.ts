// Centralized SEO configuration.
// SITE_URL includes the GitHub Pages basePath because the site is served from
// https://chriskambimbi.github.io/chriskambimbi (repo: chriskambimbi/chriskambimbi).
export const SITE_URL = "https://chriskambimbi.github.io/chriskambimbi"

export const SITE_NAME = "Chris Kambimbi"
export const SITE_AUTHOR = "Chris Kambimbi"

export const DEFAULT_TITLE = "Chris Kambimbi — AI Safety Researcher & Software Engineer"
export const DEFAULT_DESCRIPTION =
  "Chris Kambimbi is an AI safety researcher and software engineer at LibrAI and Fudan University, investigating vulnerabilities in large language models. Writing on AI safety, medical AI, and robotics."

// Default share image used for Open Graph / Twitter cards.
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/chris.png`

// Build an absolute URL for a site-relative path (e.g. "/about", "/images/x.png").
// Always use this for canonical URLs and og:image so the basePath is preserved.
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`
}
