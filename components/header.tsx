"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Über mich", href: "#about" },
    { name: "Projekte", href: "#projects" },
    { name: "Zertifikate", href: "#certificates" },
    { name: "Kontakt", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-xl font-bold text-primary hover:text-accent transition-colors"
            >
              FS
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9"
            >
              <span className="text-sm rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">☀️</span>
              <span className="absolute text-sm rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">🌙</span>
              <span className="sr-only">Theme umschalten</span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-9 h-9">
                <span className="text-sm">{isMenuOpen ? "✕" : "☰"}</span>
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
