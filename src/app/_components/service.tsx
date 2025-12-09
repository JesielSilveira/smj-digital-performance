"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, Cpu, Bot, MonitorSmartphone, Layers, Sparkles } from "lucide-react"

export function Services() {
  const [openService, setOpenService] = useState(null as any)

  const services = [
    {
      title: "Sistemas Personalizados de Alta Performance",
      icon: <Cpu size={38} />,
      short: "Soluções exclusivas com arquitetura escalável, interfaces premium e performance internacional.",
      details: [
        "Arquitetura escalável e segura",
        "UX e UI profissionais",
        "Dashboards completos e KPIs",
        "Evolução constante + suporte corporativo",
      ],
    },
    {
      title: "Automação Inteligente e Integrações Avançadas",
      icon: <Bot size={38} />,
      short: "Elimine tarefas manuais com automações profissionais totalmente integradas aos sistemas da sua empresa.",
      details: [
        "Integrações corporativas com APIs, ERPs e CRMs",
        "Robôs internos e fluxos inteligentes",
        "Automação de processos repetitivos",
        "Redução real de custos operacionais",
      ],
    },
    {
      title: "Plataformas Web Modernas e Escaláveis",
      icon: <MonitorSmartphone size={38} />,
      short: "Plataformas corporativas completas, rápidas, seguras e desenvolvidas com tecnologias de ponta.",
      details: [
        "SaaS completos e sistemas proprietários",
        "Next.js, React, Node, arquitetura moderna",
        "Alta performance e segurança",
        "Portais gerenciais e ambientes administrativos",
      ],
    },
    {
      title: "Digitalização Completa de Processos",
      icon: <Layers size={38} />,
      short: "Transformamos processos tradicionais em operações 100% digitais, rápidas e inteligentes.",
      details: [
        "Mapeamento profundo de processos",
        "Gargalos eliminados com automação",
        "Modelagem de fluxos inteligentes",
        "Implementação e acompanhamento contínuo",
      ],
    },
    {
      title: "Consultoria Tecnológica Premium",
      icon: <Sparkles size={38} />,
      short: "Direção estratégica para empresas que querem crescer de forma sólida e moderna com tecnologia.",
      details: [
        "Auditoria técnica completa",
        "Roadmap tecnológico profissional",
        "Segurança, escalabilidade e performance",
        "Redução de custos com automação avançada",
      ],
    },
  ]

  return (
    <section id="services" className="relative py-28 px-6 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-[#020617]" />

      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full" />

      <div className="relative z-10 container mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Soluções Tecnológicas Premium
        </h2>

        <p className="text-center text-lg text-gray-300 max-w-2xl mx-auto mb-20">
          Desenvolvimento, automação e consultoria de alto padrão para empresas que buscam
          eficiência, modernidade e resultados concretos.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="
                bg-white/5 
                backdrop-blur-xl 
                border border-white/10 
                rounded-2xl shadow-lg 
                hover:border-blue-500/30
                hover:shadow-blue-500/10 
                hover:translate-y-[-6px]
                transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-4 text-xl font-semibold">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/20 shadow-inner shadow-blue-500/20 text-blue-400">
                    {service.icon}
                  </div>
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.short}
                </p>

                <Button
                  className="w-full bg-blue-700 hover:bg-blue-600 text-white flex items-center justify-center gap-2 py-5 rounded-xl text-base"
                  onClick={() => setOpenService(service)}
                >
                  Ver Detalhes <ArrowRight size={18} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {openService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative max-w-xl w-full bg-black/80 border border-white/10 rounded-2xl p-10 shadow-2xl animate-fadeIn">
              <button
                onClick={() => setOpenService(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
              >
                <X size={28} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  {openService.icon}
                </div>

                <h3 className="text-3xl font-bold">{openService.title}</h3>
              </div>

              <ul className="list-disc list-inside space-y-3 mb-10 text-gray-300 text-base">
                {openService.details.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-xl text-lg font-semibold"
                onClick={() => window.open("https://wa.me/+5554996416573", "_blank")}
              >
                Falar com um Consultor
              </Button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
