"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation" // Client-side routing

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleQuoteClick = () => {
    if (currentPage === "home") {
      const contactSection = document.getElementById("contact-section")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push("/contact") // Faster navigation
    }
  }

  const NavLinks = [
    { name: "Home", path: "/", key: "home" },
    { name: "About Us", path: "/about", key: "about" },
    { name: "Services", path: "/services", key: "services" },
    { name: "Projects", path: "/projects", key: "projects" },
    { name: "Blog", path: "/blog", key: "blog" },
    { name: "Contact", path: "/contact", key: "contact" },
    { name: "Dashboard", path: "/dashboard", key: "dashboard" },
  ]

  return (
    <header className="bg-black text-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-500" prefetch>
            JB VISION
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <Link
                key={link.key}
                href={link.path}
                prefetch
                className={`transition-colors ${
                  currentPage === link.key
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              className="bg-green-500 hover:bg-green-600 text-white hidden md:block"
              onClick={handleQuoteClick}
            >
              Get Quote
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {NavLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.path}
                  prefetch
                  className={`transition-colors ${
                    currentPage === link.key
                      ? "text-green-400"
                      : "hover:text-green-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="bg-green-500 hover:bg-green-600 text-white w-full"
                onClick={() => {
                  setIsMenuOpen(false)
                  handleQuoteClick()
                }}
              >
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
