"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink, CheckCircle, Clock, Target } from "lucide-react"

interface Certificate {
  id: string
  title: string
  issuer: string
  description: string
  status: "abgeschlossen" | "in Bearbeitung" | "geplant"
  completedDate?: string
  expectedDate?: string
  credentialUrl?: string
  logo: string
  skills: string[]
  color: string
}

export function CertificatesSection() {
  const certificates: Certificate[] = [
    {
      id: "ccna",
      title: "CCNA (Cisco Certified Network Associate)",
      issuer: "Cisco",
      description: "Umfassende Netzwerktechnik-Zertifizierung für Routing, Switching, und Netzwerksicherheit",
      status: "geplant",
      expectedDate: "2025-09",
      logo: "🌐",
      skills: ["Routing", "Switching", "Network Security", "IPv4/IPv6", "OSPF", "EIGRP"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "abgeschlossen":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in Bearbeitung":
        return <Clock className="h-4 w-4 text-blue-600" />
      case "geplant":
        return <Target className="h-4 w-4 text-orange-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "abgeschlossen":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "in Bearbeitung":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "geplant":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-")
    const monthNames = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    return `${monthNames[Number.parseInt(month) - 1]} ${year}`
  }

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Zertifikate & Weiterbildung</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kontinuierliche Weiterbildung durch offizielle Zertifizierungen und Fachqualifikationen
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-center mb-3">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-2" />
                  <span className="text-3xl font-bold text-green-600">
                    {certificates.filter((cert) => cert.status === "abgeschlossen").length}
                  </span>
                </div>
                <p className="text-muted-foreground">Abgeschlossen</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="h-8 w-8 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-blue-600">
                    {certificates.filter((cert) => cert.status === "in Bearbeitung").length}
                  </span>
                </div>
                <p className="text-muted-foreground">In Bearbeitung</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-center mb-3">
                  <Target className="h-8 w-8 text-orange-600 mr-2" />
                  <span className="text-3xl font-bold text-orange-600">
                    {certificates.filter((cert) => cert.status === "geplant").length}
                  </span>
                </div>
                <p className="text-muted-foreground">Geplant</p>
              </CardContent>
            </Card>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div
                      className={`p-3 rounded-lg ${cert.color} text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {cert.logo}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {cert.title}
                        </CardTitle>
                        {cert.credentialUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => window.open(cert.credentialUrl, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getStatusColor(cert.status)} variant="secondary">
                          <div className="flex items-center gap-1">
                            {getStatusIcon(cert.status)}
                            {cert.status}
                          </div>
                        </Badge>
                        <span className="text-sm text-muted-foreground">• {cert.issuer}</span>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-3 w-3" />
                        {cert.completedDate && <span>Abgeschlossen: {formatDate(cert.completedDate)}</span>}
                        {cert.expectedDate && <span>Geplant: {formatDate(cert.expectedDate)}</span>}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Kompetenzen:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Kontinuierliche Weiterbildung</h3>
                <p className="text-muted-foreground mb-6">
                  Ich investiere kontinuierlich in meine berufliche Entwicklung durch anerkannte Zertifizierungen und
                  praktische Projekte, um mit den neuesten Technologien Schritt zu halten.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    const element = document.querySelector("#contact")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Kontakt aufnehmen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
