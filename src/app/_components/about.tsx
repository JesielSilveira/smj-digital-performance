import Image from "next/image"
import about from '../../../public/about.png'
export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Sobre nós</h2>
          <p className="text-lg text-muted-foreground" data-aos="zoom-in">
            A SMJ Digital Performance nasceu em 2020 com o propósito de ajudar empresas a se destacarem no ambiente digital. Desde então, temos atuado no desenvolvimento e manutenção de sistemas, web design e gestão de tráfego, sempre focados em gerar resultados reais para nossos clientes.
            Nosso diferencial está em unir estratégia, criatividade e tecnologia, oferecendo soluções digitais completas que vão desde a construção de sites até a otimização de campanhas para atrair mais clientes.
            Com mais de 4 anos de experiência, seguimos firmes no compromisso de sermos mais do que uma agência digital: queremos ser seu parceiro estratégico, transformando ideias em projetos de sucesso que impulsionam o crescimento do seu negócio.
          </p>
        </div>
        <div className="bg-gray-200 rounded-2xl p-20 shadow-inner flex items-center justify-center" data-aos="flip-left">
            <Image
                src={about}
                alt="trabalho que rende para você"
                  
            />
        </div>
      </div>
    </section>
  )
}