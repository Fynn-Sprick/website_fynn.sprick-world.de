"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["IT-Systemintegration", "Netzwerke", "Cloud", "IT-Sicherheit"]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative network-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div
              className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, #164e63 0%, #8b5cf6 100%)",
                minHeight: "128px",
                minWidth: "128px",
              }}
            >
              FS
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="block">Fynn Sprick</span>
          </h1>

          {/* Subtitle with Typing Animation */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4">
            <span>Azubi Fachinformatiker Systemintegration</span>
          </div>

          <div className="text-lg sm:text-xl lg:text-2xl text-primary mb-8 h-8">
            <span>angehender Spezialist für </span>
            <span className="text-accent font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Spezialisiert auf Netzwerktechnik, IT-Sicherheit und Cloud-Infrastruktur. Kontinuierliche Weiterbildung
            durch offizielle Zertifikate und praktische Projekte.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              onClick={() => window.open("https://github.com/LauchigerLauchYT", "_blank")}
            >
              <span className="mr-2">🔗</span>
              GitHub ansehen
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg bg-transparent"
              onClick={() => {
                const element = document.querySelector("#projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Projekte entdecken
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors text-2xl"
              aria-label="Scroll to about section"
            >
              ↓
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
    </section>
  )
}
