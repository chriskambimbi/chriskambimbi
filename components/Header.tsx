"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-950 shadow-sm dark:shadow-none dark:border-b dark:border-gray-800 z-50 transition-colors"
    >
      <div id="site-header" className="site-header max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="navbar-logo">
          <Link href="/about">CHRIS KAMBIMBI</Link>
        </div>

        <div className="nav-group flex items-center gap-6">
          <nav className="top-nav hidden md:flex space-x-6">
            <NavLinks pathname={pathname} />
          </nav>

          <ThemeToggle />

          <button
            id="menu-toggle"
            className="hamburger md:hidden flex flex-col gap-1.5"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-transform"></span>
            <span className="w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-transform"></span>
            <span className="w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-transform"></span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu-overlay ${isMenuOpen ? "" : "hidden"} md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="mobile-menu-nav flex flex-col items-center py-4 space-y-4" role="navigation" aria-label="Mobile">
          <NavLinks pathname={pathname} onNavigate={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </header>
  )
}

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Avoid hydration mismatch: the server doesn't know the resolved theme.
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Reserve the same footprint so layout doesn't shift once mounted.
    return <div className="w-9 h-9" aria-hidden="true" />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 flex items-center justify-center rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

const linkClass = (active: boolean) =>
  `text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:underline transition duration-300 ${
    active ? "text-gray-900 dark:text-gray-100 underline" : ""
  }`

const NavLinks = ({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) => (
  <>
    <Link href="/about" onClick={onNavigate} className={linkClass(pathname === "/" || pathname === "/about")}>
      About Me
    </Link>
    <Link href="/projects" onClick={onNavigate} className={linkClass(pathname === "/projects")}>
      Projects
    </Link>
    <Link href="/blog" onClick={onNavigate} className={linkClass(pathname.startsWith("/blog"))}>
      Blog
    </Link>
    <Link href="/reading" onClick={onNavigate} className={linkClass(pathname.startsWith("/reading"))}>
      Reading
    </Link>
    <Link href="/other" onClick={onNavigate} className={linkClass(pathname.startsWith("/other"))}>
      Other
    </Link>
  </>
)

export default Header
