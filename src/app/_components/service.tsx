"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface Plan {
  name: string
  price: string
  videoSrc: string
  link: string
  popular?: boolean
  description: string[]
}

interface Service {
  title: string
  icon: string
  plans: Plan[]
}

export function Services() {
  const [openVideo, setOpenVideo] = useState<string | null>(null)

  const services: Service[] = [
    {
      title: "Desenvolvimento Web",
      icon: "💻",
      plans: [
        {
          name: "Site Institucional",
          price: "R$997 (único)",
          videoSrc: "/videos/site_institucional.mp4",
          link: "https://pag.ae/815n_UYB1",
          description: [
            "Site responsivo de até 5 páginas",
            "Design moderno e profissional",
            "SEO básico para Google",
            "Formulário de contato integrado",
            "Entrega rápida em até 7 dias úteis",
            "Suporte via WhatsApp",
          ],
        },
        {
          name: "Landing Page",
          price: "R$697 (único)",
          popular: true,
          videoSrc: "/videos/landing_page.mp4",
          link: "https://pag.ae/815o1fjX8",
          description: [
            "Página de alta conversão para campanhas",
            "Design focado em vendas",
            "Integração com WhatsApp ou formulário",
            "Teste A/B de CTA e layout",
            "Entrega rápida em até 3 dias úteis",
            "Suporte via WhatsApp",
          ],
        },
        {
          name: "Loja Virtual",
          price: "A partir de R$1.997",
          videoSrc: "/videos/loja_virtual.mp4",
          link: "https://pag.ae/815o1JVw1",
          description: [
            "E-commerce completo integrado a pagamentos",
            "Carrinho e checkout funcional",
            "Design responsivo e profissional",
            "SEO básico e integração com Google Analytics",
            "Entrega em até 14 dias úteis",
            "Suporte via WhatsApp",
          ],
        },
      ]
    },
  ]
  return (
    <section id="services" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Serviços</h2>

      <div className="space-y-20">
        {services.map((service, idx) => (
          <div key={idx} data-aos="fade-up">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <span>{service.icon}</span> {service.title}
            </h3>

            <div className="grid gap-8 md:grid-cols-3">
              {service.plans.map((plan, i) => (
                <Card
                  key={i}
                  className={`shadow-lg rounded-2xl border ${plan.popular ? "border-blue-500 bg-blue-50" : ""}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center justify-between">
                      {plan.name}
                      {plan.popular && (
                        <span className="text-sm font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          Mais Popular
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                      {plan.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <p className="font-bold text-lg mb-4">{plan.price}</p>

                    <div className="flex flex-col gap-2">
                      <Button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => setOpenVideo(plan.videoSrc)}
                      >
                        Saiba Mais
                      </Button>

                      <Link href={plan.link} target="_blank">
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                          Comprar
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-lg animate-fadeIn">
            {/* Botão X */}
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute top-3 right-3 text-gray-700 hover:text-black z-50 p-2"
            >
              <X size={28} />
            </button>

            <video
              src={openVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-b-xl"
            />
          </div>
        </div>
      )}

      {/* Animação */}
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
