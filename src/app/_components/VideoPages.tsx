"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const videos = [
  { id: 1, title: "Plano Básico", src: "/videos/plano_basico.mp4" },
  { id: 2, title: "Plano Avançado", src: "/videos/plano_avancado.mp4" },
  { id: 3, title: "Plano Premium", src: "/videos/plano_premium.mp4" },
  { id: 4, title: "Site Institucional", src: "/videos/site_institucional.mp4" },
  { id: 5, title: "Landing Page", src: "/videos/landing_page.mp4" },
  { id: 6, title: "Loja Virtual", src: "/videos/loja_virtual.mp4" },
  { id: 6, title: "Pacote Express Digital", src: "/videos/express_digital.mp4" },
]

export function VideoPage() {
  const [currentVideo, setCurrentVideo] = useState<string>("/videos/videoprincipal.mp4")

  return (
    <section className="container mx-auto py-20 px-6 space-y-12">
      {/* Vídeo Principal */}
      <div className="w-full max-w-4xl mx-auto">
        <video
          id="video-principal"
          src={currentVideo}
          controls
          autoPlay
          muted
          className="w-full rounded-2xl shadow-lg"
        />
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
      
      </div>
    </section>
  )
}
