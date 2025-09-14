import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const skills = [
    {
      title: "Netzwerktechnik",
      description: "CCNA in Arbeit",
      level: "Grundlagen",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      icon: "🌐",
    },
    {
      title: "Windows Server & Active Directory",
      description: "Administration und Konfiguration",
      level: "Grundlagen",
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
      icon: "🖥️",
    },
    {
      title: "Linux & Proxmox",
      description: "Virtualisierung und Systemadministration",
      level: "Experte",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      icon: "🐧",
    },
    {
      title: "Mailserver",
      description: "DNS Konfiguration, DKIM, DMARC, SPF",
      level: "Experte",
      color: "bg-red-500/10 text-red-600 dark:text-red-400",
      icon: "📧",
    },
      {
          title: "IT-Security",
          description: "Firewall, VPN",
          level: "Fortgeschritten",
          color: "bg-red-500/10 text-red-600 dark:text-red-400",
          icon: "🛡️",
      },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Grundlagen":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "Fortgeschritten":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "Experte":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Über mich</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leidenschaftlicher IT-Spezialist mit Fokus auf moderne Technologien und kontinuierliche Weiterbildung
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Info */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div
                  className="w-48 h-48 rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #164e63 0%, #8b5cf6 100%)",
                    minHeight: "192px",
                    minWidth: "192px",
                  }}
                >
                  FS
                </div>
              </div>

              {/* About Text */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📚</span>
                  <h3 className="text-xl font-semibold text-foreground">Mein Werdegang</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Ich habe eine begonnene Ausbildung als Fachinformatiker für Systemintegration und spezialisiere mich
                  auf Netzwerktechnik, Server Konfigurationen und Cloud-Infrastruktur.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Neben meiner Ausbildung bilde ich mich durch offizielle Zertifikate (z. B. CCNA) weiter und
                  dokumentiere meine Projekte auf GitHub. Mein Ziel ist es, ein umfassendes Verständnis moderner
                  IT-Infrastrukturen zu entwickeln und innovative Lösungen zu implementieren.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <Card className="text-center p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-2xl mr-2">🏆</span>
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Zertifikate in Arbeit</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-2xl mr-2">🌐</span>
                        <span className="text-2xl font-bold text-accent">10+</span>
                      </div>
                      <p className="text-sm text-muted-foreground">GitHub Projekte</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🛡️</span>
                <h3 className="text-xl font-semibold text-foreground">Technische Kompetenzen</h3>
              </div>

              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-lg ${skill.color} group-hover:scale-110 transition-transform duration-300 text-2xl`}
                        >
                          {skill.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {skill.title}
                            </h4>
                            <Badge className={getLevelColor(skill.level)}>{skill.level}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
