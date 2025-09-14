"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create mailto link with form data
      const subject = encodeURIComponent(`Kontaktanfrage von ${formData.name}`)
      const body = encodeURIComponent(
        `Hallo Fynn,\n\n${formData.message}\n\nBeste Grüße,\n${formData.name}\n${formData.email}`,
      )
      const mailtoLink = `mailto:fynn-marvin@sprick-world.de?subject=${subject}&body=${body}`

      window.location.href = mailtoLink
      setSubmitStatus("success")

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "E-Mail",
      value: "fynn-marvin@sprick-world.de",
      href: "mailto:fynn-marvin@sprick-world.de",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Fynn-Sprick",
      href: "https://github.com/Fynn-Sprick",
      color: "text-gray-600 dark:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Fynn Sprick",
      href: "https://www.linkedin.com/in/fynn-sprick-420364375/",
      color: "text-blue-700 dark:text-blue-300",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Kontakt</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie über mögliche Projekte sprechen? Ich freue mich auf Ihre Nachricht!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Lassen Sie uns sprechen</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Ich bin immer offen für neue Herausforderungen und interessante Projekte. Ob Sie Fragen zu meinen
                  Fähigkeiten haben oder eine Zusammenarbeit besprechen möchten – kontaktieren Sie mich gerne!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <Card key={index} className="group hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-lg bg-muted ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{contact.label}</p>
                            <a
                              href={contact.href}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                              target={contact.href.startsWith("http") ? "_blank" : undefined}
                              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {contact.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Contact Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => (window.location.href = "mailto:fynn.sprick@email.de")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Direkt E-Mail senden
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">Nachricht senden</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ihr vollständiger Name"
                      className="w-full"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-Mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ihre.email@beispiel.de"
                      className="w-full"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Nachricht *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Beschreiben Sie Ihr Anliegen oder Projekt..."
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Nachricht senden
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      E-Mail-Client wurde geöffnet. Vielen Dank für Ihre Nachricht!
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      Es gab ein Problem. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
