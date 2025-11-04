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
            Desenvolvimento de SaaS Sob Medida 🚀
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
            <li>Desenvolvimento completo do seu SaaS do zero</li>
            <li>Estrutura com autenticação, painéis, assinaturas e integrações</li>
            <li>Interface moderna e responsiva (UX/UI profissional)</li>
            <li>Hospedagem e deploy configurados</li>
            <li>Suporte técnico pós-entrega</li>
          </ul>

          <p className="text-2xl font-bold mb-6 text-red-700">
           Faça seu Orçamento!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`https://wa.me/+5554996416573?text=Ola tudo bem? Gostaria de um orçamento para meu Saas!`} target="_blank">
              <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white">
                Saiba Mais!
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
