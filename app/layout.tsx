import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Fynn Sprick - IT-Systemintegration & Netzwerkspezialist",
  description:
    "Portfolio von Fynn Sprick - Azubi Fachinformatiker Systemintegration, spezialisiert auf Netzwerktechnik, IT-Sicherheit und Cloud-Infrastruktur.",
  keywords: "Fynn Sprick, IT-Systemintegration, Netzwerktechnik, CCNA, Cloud, IT-Sicherheit, Fachinformatiker",
  authors: [{ name: "Fynn Sprick" }],
  creator: "Fynn Sprick",
  openGraph: {
    title: "Fynn Sprick - IT-Systemintegration & Netzwerkspezialist",
    description:
      "Portfolio von Fynn Sprick - Azubi Fachinformatiker Systemintegration, spezialisiert auf Netzwerktechnik, IT-Sicherheit und Cloud-Infrastruktur.",
    url: "https://fynn.sprick-world.de",
    siteName: "Fynn Sprick Portfolio",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fynn Sprick - IT-Systemintegration & Netzwerkspezialist",
    description:
      "Portfolio von Fynn Sprick - Azubi Fachinformatiker Systemintegration, spezialisiert auf Netzwerktechnik, IT-Sicherheit und Cloud-Infrastruktur.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
