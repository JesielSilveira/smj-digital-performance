"use client"

export function EmpresasParceiras() {
  const logos = [
    "/logos/vertex.svg",
    "/logos/novatech.svg",
    "/logos/primewave.svg",
    "/logos/bluecore.svg",
    "/logos/alphagroup.svg",
  ]

  // duplicamos várias vezes para criar um loop perfeito e longo
  const infiniteLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="bg-blue-900 text-white py-20" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10">
        Empresas que Confiam em Nosso Trabalho
      </h2>

      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-20 pl-20 animate-scroll">
          {infiniteLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Logo empresa"
              className="h-14 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .animate-scroll {
          width: max-content;
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  )
}
