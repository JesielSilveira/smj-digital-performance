import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      title: "Gestão de Tráfego",
      icon: "📊",
      plans: [
        {
          name: "Plano Básico",
          price: "R$497/mês",
          link: "https://pag.ae/815nZJBjv",
          description: [
            "Gestão de 1 plataforma (Google Ads ou Meta Ads)",
            "Criação de até 2 campanhas mensais",
            "Definição de público-alvo básico",
            "Segmentação por interesses gerais",
            "Relatório mensal simplificado",
            "Suporte via WhatsApp em horário comercial",
          ],
        },
        {
          name: "Plano Avançado",
          price: "R$997/mês",
          popular: true,
          link: "https://pag.ae/815n-oB6a",
          description: [
            "Gestão de 2 plataformas (Google Ads + Meta Ads)",
            "Criação de até 5 campanhas simultâneas",
            "Estratégia de remarketing",
            "Segmentação detalhada (comportamento, interesses específicos)",
            "Anúncios com copywriting persuasivo",
            "Relatórios semanais + insights de melhorias",
            "Ajustes contínuos para aumentar o ROI",
            "Suporte via WhatsApp e e-mail",
          ],
        },
        {
          name: "Plano Premium",
          price: "R$1.497/mês",
          link: "https://pag.ae/815n_dhEv",
          description: [
            "Gestão de múltiplas plataformas (Google, Meta e TikTok/LinkedIn Ads)",
            "Criação ilimitada de campanhas conforme orçamento",
            "Estratégias avançadas de funil de vendas",
            "Segmentação avançada + lookalike audiences",
            "Testes A/B contínuos (criativos, públicos, landing pages)",
            "Relatórios detalhados + reuniões mensais estratégicas",
            "Consultoria exclusiva anúncios + site",
            "Monitoramento diário e ajustes contínuos",
            "Suporte VIP",
          ],
        },
      ],
    },
    {
      title: "Desenvolvimento Web",
      icon: "💻",
      plans: [
        {
          name: "Site Institucional",
          price: "R$997 (único)",
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
      ],
    },
  ]

  return (
    <section id="services" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Serviços</h2>

      <div className="space-y-20">
        {services.map((service, index) => (
          <div key={index} data-aos="fade-up">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <span>{service.icon}</span> {service.title}
            </h3>

            <div className="grid gap-8 md:grid-cols-3">
              {service.plans.map((plan, i) => (
                <Card
                  key={i}
                  className={`shadow-lg rounded-2xl border ${
                    plan.popular ? "border-blue-500 bg-blue-50" : ""
                  }`}
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
                      {/* Botão Saiba Mais */}
                      <Link
                        href={`https://wa.me/5554996416573?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20${plan.name}%20(${service.title}).`}
                        target="_blank"
                      >
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                          Saiba Mais
                        </Button>
                      </Link>

                      {/* Botão Comprar */}
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
    </section>
  )
}
