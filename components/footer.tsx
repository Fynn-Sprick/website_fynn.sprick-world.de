"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Fynn-Sprick",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fynn-sprick-420364375/",
      icon: Linkedin,
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold text-primary hover:text-accent transition-colors"
              >
                Fynn Sprick
              </button>
              <p className="text-muted-foreground leading-relaxed">
                Azubi Fachinformatiker Systemintegration mit Fokus auf Netzwerktechnik, IT-Sicherheit und
                Cloud-Infrastruktur.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
              <nav className="flex flex-col space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Über mich", href: "#about" },
                  { name: "Projekte", href: "#projects" },
                  { name: "Zertifikate", href: "#certificates" },
                  { name: "Kontakt", href: "#contact" },
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Kontakt</h3>
              <div className="space-y-3">
                <a
                  href="mailto:fynn-marvin@sprick-world.de"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  fynn-marvin@sprick-world.de
                </a>

                {/* Social Links */}
                <div className="flex gap-4 pt-2">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={social.name}
                      >
                        <IconComponent className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Fynn Sprick</span>
              </div>

              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>Erstellt mit</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>und modernen Web-Technologien</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
