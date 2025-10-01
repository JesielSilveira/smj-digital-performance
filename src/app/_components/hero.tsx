import Image from "next/image"
import Link from "next/link"
import Banner from "../../../public/banner_hero.png"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texto */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-aos="fade-down">
            Aumente suas vendas com a ajuda de uma Agência Digital
          </h1>
          <p className="mt-4 text-lg opacity-90" data-aos="fade-right" >
            Nós criamos soluções que impulsionam o crescimento do seu negócio.
          </p>
            <Link href="#services">
              <Button className="bg-white text-blue-900 hover:bg-gray-200 mt-4">
                Ver Planos
              </Button>
            </Link>
        </div>

        {/* Imagem, |atualizaçao de commim ignore| */}
        <div className="hidden md:block" data-aos="fade-down-left">
          <Image
            src={Banner}
            alt="Imagem PC"
            width={500}
            height={500}
            className="w-[500px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}

    