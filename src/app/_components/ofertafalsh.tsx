"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function OfertaRelampago() {
  // Estado do timer
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [openVideo, setOpenVideo] = useState(false)

  useEffect(() => {
    const deadline = new Date()
    deadline.setHours(deadline.getHours() + 24)

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = deadline.getTime() - now

      if (distance <= 0) {
        clearInterval(interval)
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        setTimeLeft({ hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="oferta" className="container mx-auto py-20" data-aos="zoom-in">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
        ⚡ Oferta Relâmpago
      </h2>

      <Card className="max-w-2xl mx-auto shadow-2xl border border-red-400 rounded-2xl bg-gradient-to-b from-red-50 to-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-red-700">
            Pacote Digital Express 🚀
          </CardTitle>
          <div className="mt-4 flex justify-center gap-4 text-lg font-mono text-red-600">
            <div className="px-3 py-2 bg-red-100 rounded-lg">
              {timeLeft.hours.toString().padStart(2, "0")}h
            </div>
            <div className="px-3 py-2 bg-red-100 rounded-lg">
              {timeLeft.minutes.toString().padStart(2, "0")}m
            </div>
            <div className="px-3 py-2 bg-red-100 rounded-lg">
              {timeLeft.seconds.toString().padStart(2, "0")}s
            </div>
          </div>
          <p className="text-sm mt-2 text-gray-600">
            Oferta expira em breve! ⏰
          </p>
        </CardHeader>

        <CardContent className="text-center">
          <ul className="text-left text-gray-700 mb-6 list-disc list-inside space-y-2">
            <li>Gestão de Tráfego Básica (Google ou Meta Ads)</li>
            <li>Criação de até 2 campanhas mensais</li>
            <li>Landing Page profissional focada em conversão</li>
            <li>Formulário/WhatsApp integrado</li>
            <li>SEO básico incluso</li>
            <li>Relatório mensal simplificado</li>
          </ul>

          <p className="text-2xl font-bold mb-6 text-red-700">
            De <span className="line-through text-gray-500">R$1.194</span> por{" "}
            <span className="text-3xl text-red-600">R$997</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botão Saiba Mais → abre modal de vídeo */}
            <Button
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => setOpenVideo(true)}
            >
              Saiba Mais
            </Button>

            <Link href="https://pag.ae/815nYPU7G" target="_blank">
              <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white">
                Comprar Agora
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Modal do vídeo */}
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-lg animate-fadeIn">
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black z-50 p-2"
            >
              <X size={28} />
            </button>
            <video
              src="/videos/express_digital.mp4" // coloque o caminho correto do vídeo
              controls
              autoPlay
              className="w-full h-auto rounded-b-xl"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
