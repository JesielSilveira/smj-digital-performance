import Image from "next/image"
import about from '../../../public/about.png'
export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Sobre nós</h2>
          <p className="text-lg text-muted-foreground" data-aos="zoom-in">
           A SMJ Digital Performance nasceu em 2020 com o propósito de impulsionar negócios por meio da tecnologia. Ao longo dos últimos anos, evoluímos de uma agência digital para uma software house especializada no desenvolvimento de sistemas, soluções web e produtos digitais de alta performance.

Combinamos estratégia, inovação e engenharia para entregar soluções que realmente movem o ponteiro: sites de alto impacto, sistemas sob medida, plataformas robustas e ferramentas que automatizam processos e aumentam resultados.

Nosso compromisso sempre foi  e continua sendo  gerar valor real. Atuamos de forma consultiva, entendendo profundamente o negócio de cada cliente para construir soluções eficientes, escaláveis e alinhadas a objetivos estratégicos.

Com mais de 4 anos de experiência e dezenas de projetos entregues, seguimos firmes na missão de sermos mais do que fornecedores:
somos parceiros de crescimento, transformando ideias em produtos digitais que fortalecem marcas, otimizam operações e aceleram resultados.
          </p>
        </div>
        <div className="rounded-2xl flex items-center justify-center" data-aos="flip-left">
            <Image
                src={about}
                alt="trabalho que rende para você"
                className="w-1000 h-auto rounded-md"
                  
            />
        </div>
      </div>
    </section>
  )
}