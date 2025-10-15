import Image from "next/image";
import Link from "next/link";
import Banner from "../../../public/banner_hero.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-blue-900 text-white py-24">
      <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Texto persuasivo */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" data-aos="fade-down">
            Transforme seu negócio em uma máquina de vendas
          </h1>
          <p className="mt-6 text-lg opacity-90" data-aos="fade-right">
            Na SMJ Digital, criamos estratégias que atraem clientes e aumentam seu faturamento.  
            Descubra como podemos multiplicar seus resultados em poucos dias.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {/* Botão principal */}
            <Link href="#video-principal">
              <Button className="bg-white text-blue-900 hover:bg-gray-200 px-6 py-3 font-semibold">
                Assista o Vídeo
              </Button>
            </Link>

            {/* Botão secundário */}
            <Link href="#services">
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 font-semibold">
                Ver Planos
              </Button>
            </Link>
          </div>
        </div>

        {/* Imagem / Banner */}
        <div className="hidden md:block" data-aos="fade-down-left">
          <Image
            src={Banner}
            alt="Crescimento Digital"
            width={500}
            height={500}
            className="w-[500px] h-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}