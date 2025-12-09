import Image from "next/image";
import Link from "next/link";
import Banner from "../../../public/banner_hero.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-blue-900 text-white py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-20">

        {/* Texto */}
        <div className="max-w-lg space-y-6" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Automação e tecnologia para levar sua empresa ao próximo nível
          </h1>

          <p className="text-lg opacity-90" data-aos="fade-right">
            Criamos sistemas inteligentes que reduzem custos, eliminam tarefas manuais 
            e aumentam a produtividade do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2" data-aos="fade-up">
            <Link href="#video-principal">
              <Button className="bg-white text-blue-900 hover:bg-gray-200 px-7 py-3 font-semibold rounded-xl">
                Assista o Vídeo
              </Button>
            </Link>

            <Link href="#services">
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 px-7 py-3 font-semibold rounded-xl">
                Ver Serviços
              </Button>
            </Link>
          </div>
        </div>

        {/* Imagem (maior e deslocada) */}
        <div className="hidden md:block relative" data-aos="fade-down-left">
          <Image
            src={Banner}
            alt="Crescimento Digital"
            priority
            className="
              max-w-[600px]
              rounded-3xl
              drop-shadow-2xl
              opacity-95
              transition
              translate-x-10
            "
          />
        </div>

      </div>
    </section>
  );
}
