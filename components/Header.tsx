"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header id="header" className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div id="site-header" className="site-header max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="navbar-logo">
          <Link href="/about">CHRIS KAMBIMBI</Link>
        </div>

        <div className="nav-group flex items-center gap-6">
          <nav className="top-nav hidden md:flex space-x-6">
            <NavLinks pathname={pathname} />
          </nav>

          <button
            id="menu-toggle"
            className="hamburger md:hidden flex flex-col gap-1.5"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900 transition-transform"></span>
            <span className="w-6 h-0.5 bg-gray-900 transition-transform"></span>
            <span className="w-6 h-0.5 bg-gray-900 transition-transform"></span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu-overlay ${isMenuOpen ? "" : "hidden"} md:hidden bg-white border-t border-gray-100`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="mobile-menu-nav flex flex-col items-center py-4 space-y-4" role="navigation" aria-label="Mobile">
          <NavLinks pathname={pathname} />
        </nav>
      </div>
    </header>
  )
}

const NavLinks = ({ pathname }: { pathname: string }) => (
  <>
    <Link
      href="/about"
      className={`text-gray-600 hover:text-gray-900 hover:underline transition duration-300 ${
        pathname === "/" || pathname === "/about" ? "text-gray-900 underline" : ""
      }`}
    >
      About Me
    </Link>
    <Link
      href="/projects"
      className={`text-gray-600 hover:text-gray-900 hover:underline transition duration-300 ${
        pathname === "/projects" ? "text-gray-900 underline" : ""
      }`}
    >
      Projects
    </Link>
    <Link
      href="/blog"
      className={`text-gray-600 hover:text-gray-900 hover:underline transition duration-300 ${
        pathname.startsWith("/blog") ? "text-gray-900 underline" : ""
      }`}
    >
      Blog
    </Link>
    <Link
      href="/other"
      className={`text-gray-600 hover:text-gray-900 hover:underline transition duration-300 ${
        pathname.startsWith("/other") ? "text-gray-900 underline" : ""
      }`}
    >
      Other
    </Link>
  </>
)

export default Header
