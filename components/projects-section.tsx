"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {Github, Star, GitFork, ExternalLink, Loader2, AlertCircle, Globe} from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
  created_at: string
  homepage: string | null
}

export function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch("https://api.github.com/users/Fynn-Sprick/repos?sort=updated&per_page=6")

        if (!response.ok) {
          throw new Error(`GitHub API Error: ${response.status}`)
        }

        const data: GitHubRepo[] = await response.json()

        // Filter out forks and sort by stars and recent activity
        const filteredRepos = data
          .filter((repo) => !repo.name.includes("fork"))
          .sort((a, b) => {
            // Prioritize repos with more stars, then by recent updates
            if (a.stargazers_count !== b.stargazers_count) {
              return b.stargazers_count - a.stargazers_count
            }
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          })
          .slice(0, 6)

        setRepos(filteredRepos)
      } catch (err) {
        console.error("Error fetching GitHub repos:", err)
        setError("Fehler beim Laden der GitHub-Projekte")
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
      TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      Python: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      Java: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
      "C++": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      HTML: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
      CSS: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
      Shell: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
    }
    return colors[language || ""] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meine Projekte</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eine Auswahl meiner aktuellen GitHub-Projekte und Entwicklungsarbeiten
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary mr-3" />
              <span className="text-muted-foreground">Lade GitHub-Projekte...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex items-center justify-center py-12">
              <Card className="max-w-md mx-auto">
                <CardContent className="p-6 text-center">
                  <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Fehler beim Laden</h3>
                  <p className="text-muted-foreground mb-4">{error}</p>
                  <Button
                    onClick={() => window.open("https://github.com/Fynn-Sprick", "_blank")}
                    variant="outline"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub direkt besuchen
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {repos.map((repo) => (
                  <Card
                    key={repo.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {repo.name}
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => window.open(repo.html_url, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>

                      {repo.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{repo.description}</p>
                      )}
                    </CardHeader>

                    <CardContent className="pt-0 flex-1 flex flex-col">
                      {/* Topics */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge key={topic} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                          {repo.topics.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{repo.topics.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}

                      {/* Language and Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          {repo.language && (
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-full bg-primary"></div>
                              <Badge className={getLanguageColor(repo.language)}>{repo.language}</Badge>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Updated Date */}
                      <div className="text-xs text-muted-foreground mb-4">
                        Aktualisiert: {formatDate(repo.updated_at)}
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          className="px-8 py-3 bg-transparent w-full"
                          onClick={() => window.open(repo.html_url, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Auf GitHub ansehen
                        </Button>
                          {repo.homepage && (
                              <Button
                                  variant="outline"
                                  className="px-8 py-3 bg-transparent w-full"
                                  onClick={() => window.open(repo.homepage, "_blank")}
                              >
                                  <Globe className="mr-2 h-4 w-4" />
                                  Website anzeigen
                              </Button>
                          )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* View All Projects Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 bg-transparent"
                  onClick={() => window.open("https://github.com/Fynn-Sprick", "_blank")}
                >
                  <Github className="mr-2 h-5 w-5" />
                  Alle Projekte auf GitHub ansehen
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
