"use client"

import { useState } from "react"

export function HomelabSection() {
    const [activeView, setActiveView] = useState<"network" | "homelab">("network")
    const [activeServerView, setActiveServerView] = useState<"hetzner" | "home" | "backup">("hetzner")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [zoomLevel, setZoomLevel] = useState(1)
    const [modalImage, setModalImage] = useState<string>("")

    const openImageModal = (imageSrc: string) => {
        setModalImage(imageSrc)
        setIsModalOpen(true)
        setZoomLevel(1)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setZoomLevel(1)
    }

    const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 3))
    const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))

    return (
        <>
        <section id="homelab" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Netzwerk & Homelab</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Einblick in meine Netzwerkinfrastruktur und Homelab-Setup
                    </p>

                    {/* Toggle Buttons */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActiveView("network")}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                activeView === "network"
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-background text-foreground hover:bg-muted"
                            }`}
                        >
                            🌐 Netzwerk
                        </button>
                        <button
                            onClick={() => setActiveView("homelab")}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                activeView === "homelab"
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-background text-foreground hover:bg-muted"
                            }`}
                        >
                            🏠 Homelab
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-4xl mx-auto">
                    {activeView === "network" && (
                        <div className="space-y-6">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-semibold mb-2">Netzwerk-Topologie</h3>
                                <p className="text-muted-foreground">Übersicht über meine Netzwerkinfrastruktur und -konfiguration</p>
                            </div>

                            {/* Network Diagram Placeholder */}
                            <div className="bg-background rounded-lg p-8 shadow-lg">
                                <div
                                    className="cursor-pointer hover:opacity-80 transition-opacity relative group"
                                    onClick={() => openImageModal("/Netzwerk.svg")}
                                >
                                    <img src="/Netzwerk.svg" alt="Netzwerkdiagramm" className="w-full h-auto rounded" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded">
                                      <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">
                                        🔍 Klicken zum Vergrößern
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeView === "homelab" && (
                        <div className="space-y-6">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-semibold mb-2">Homelab Setup</h3>
                                <p className="text-muted-foreground">Meine Homelab-Infrastruktur für Experimente und Lernen</p>
                            </div>
                            {/* Toggle Buttons */}
                            <div className="flex justify-center gap-4 mb-8">
                                <button
                                    onClick={() => setActiveServerView("hetzner")}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                        activeServerView === "hetzner"
                                            ? "bg-primary text-primary-foreground shadow-lg"
                                            : "bg-background text-foreground hover:bg-muted"
                                    }`}
                                >
                                    🌐 Hetzner
                                </button>
                                <button
                                    onClick={() => setActiveServerView("home")}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                        activeServerView === "home"
                                            ? "bg-primary text-primary-foreground shadow-lg"
                                            : "bg-background text-foreground hover:bg-muted"
                                    }`}
                                >
                                    🏠 Main
                                </button>
                                <button
                                    onClick={() => setActiveServerView("backup")}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                        activeServerView === "backup"
                                            ? "bg-primary text-primary-foreground shadow-lg"
                                            : "bg-background text-foreground hover:bg-muted"
                                    }`}
                                >
                                    🏠 Backup
                                </button>

                            </div>

                            {activeServerView === "hetzner" && (

                            <div className="bg-background rounded-lg p-8 shadow-lg">
                                <div
                                    className="cursor-pointer hover:opacity-80 transition-opacity relative group"
                                    onClick={() => openImageModal("/Hetzner.svg")}
                                >
                                    <img src="/Hetzner.svg" alt="Hetzner Server Übersicht" className="w-full h-auto rounded" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded">
                                      <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">
                                        🔍 Klicken zum Vergrößern
                                      </span>
                                    </div>
                                </div>
                            </div>
                                )}
                            {activeServerView === "home" && (

                                <div className="bg-background rounded-lg p-8 shadow-lg">
                                    <div
                                        className="cursor-pointer hover:opacity-80 transition-opacity relative group"
                                        onClick={() => openImageModal("/Home.svg")}
                                    >
                                        <img src="/Home.svg" alt="Main Server Übersicht" className="w-full h-auto rounded" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded">
                                      <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">
                                        🔍 Klicken zum Vergrößern
                                      </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeServerView === "backup" && (

                                <div className="bg-background rounded-lg p-8 shadow-lg">
                                    <div
                                        className="cursor-pointer hover:opacity-80 transition-opacity relative group"
                                        onClick={() => openImageModal("/Backup.svg")}
                                    >
                                        <img src="/Backup.svg" alt="Backup Server Übersicht" className="w-full h-auto rounded" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded">
                                      <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">
                                        🔍 Klicken zum Vergrößern
                                      </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-full max-h-full">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold z-10"
                        >
                            ✕ Schließen
                        </button>

                        {/* Zoom controls */}
                        <div className="absolute -top-12 left-0 flex gap-2 z-10">
                            <button onClick={zoomOut} className="text-white hover:text-gray-300 bg-black/50 px-3 py-1 rounded">
                                🔍− Verkleinern
                            </button>
                            <span className="text-white bg-black/50 px-3 py-1 rounded">{Math.round(zoomLevel * 100)}%</span>
                            <button onClick={zoomIn} className="text-white hover:text-gray-300 bg-black/50 px-3 py-1 rounded">
                                🔍+ Vergrößern
                            </button>
                        </div>

                        {/* Image container with zoom */}
                        <div className="overflow-auto max-h-[80vh] max-w-[90vw]">
                            <img
                                src={modalImage || "/placeholder.svg"}
                                alt="Vergrößerte Ansicht"
                                className="transition-transform duration-200"
                                style={{ transform: `scale(${zoomLevel})` }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
