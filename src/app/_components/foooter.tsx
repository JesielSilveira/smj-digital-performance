import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export  function Footer() {
  return (
    <footer id="contact" className="bg-blue-900 w-full border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:contato@seudominio.com" className="hover:underline">
                contato@smjdigital.com.br
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="https\wa:+5554996416573" className="hover:underline">
                +55 (54) 99641-6574
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Espumoso, RS - Brasil
            </li>
          </ul>
        </div>

        {/* Links úteis */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="#about" className="hover:underline">Sobre</Link></li>
            <li><Link href="#services" className="hover:underline">Serviços</Link></li>
            <li><Link href={`https://wa.me/+5554996416573?text=Ola tudo bem? Gostaria de mais informações sobre os serviços!`} target="_blank" className="hover:underline">Contato</Link></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="h-5 w-5 hover:text-blue-600 transition" />
            </Link>
            <Link href="https://www.instagram.com/smj_d.performance/" target="_blank">
              <Instagram className="h-5 w-5 hover:text-pink-500 transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/jesielmarques/" target="_blank">
              <Linkedin className="h-5 w-5 hover:text-blue-700 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyrigth */}
      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SMJ Digital Perfomance. Todos os direitos reservados.
      </div>
    </footer>
  )
}