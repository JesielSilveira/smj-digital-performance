import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criação e manutenção de sites profissionais e responsivos",
      icon: "💻",
    },
    {
      title: "Gestão de Tráfego",
      description: "Atração de clientes através de campanhas de anúncios",
      icon: "📊",
    },
    {
      title: "Web Design",
      description: "Layouts modernos e profissionais",
      icon: "🎨",
    },
    {
      title: "Otimização de Conversão",
      description: "Melhoria nas taxas de conversão",
      icon: "⚙️",
    },
  ]

  return (
    <section id="services" className="container mx-auto py-20"  >
      <h2 className="text-3xl font-bold text-center mb-12">Serviços</h2>
      <div className="grid gap-8 md:grid-cols-3" >
        {services.map((service, index) => (
          <Card key={index} className="shadow-lg rounded-2xl" data-aos="zoom-in-down">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span>{service.icon}</span> {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Botão WhatsApp */}
              <Link
                href={`https://wa.me/5554996416574?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20${service.title}.`}
                target="_blank"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Falar no WhatsApp
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}