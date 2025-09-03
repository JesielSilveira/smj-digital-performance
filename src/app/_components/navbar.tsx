import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/logo2.png"
import { Menu } from "lucide-react"
import { Button } from "../../components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="flex h-25 w-full items-center border-b px-6">
      {/* Logo */}
      <div className="flex items-center" data-aos="fade-right">
        <Image
            src={Logo}
            alt="Logo"
            className="w-50 h-50"
        />
      </div>

      {/* Links Desktop */}
      <nav className="ml-auto hidden md:flex gap-6" data-aos="fade-left">
        <a href="#services" className="hover:text-primary">Serviços</a>
        {/*<Link href="#portfolio" className="hover:text-primary">Portfólio</Link>*/}
        <a href="#about" className="hover:text-primary">Sobre</a>
        <a href="#contact" className="hover:text-primary">Contato</a>
      </nav>

      {/* CTA */}
      <div className="ml-6 hidden md:flex " data-aos="zoom-in" data-aos-duration="1000">
        <Link href={`https://wa.me/+5554996416573?text=Ola tudo bem? Gostaria de mais informações sobre os serviços!`} target="_blank"><Button size="sm">WhatsApp</Button></Link>
      </div>

      {/* Mobile Menu */}
      <div className="ml-auto md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-8 w-8" />
            </Button>
          </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <a href="#services">Serviços</a>
                {/*<Link href="#portfolio">Portfólio</Link>*/}
                <a href="#about">Sobre</a>
                <a href="#contact">Contato</a>
                 <Link href={`https://wa.me/+5554996416573?text=Ola tudo bem? Gostaria de mais informações sobre os serviços!`} target="_blank">
                <Button size="sm" className="mt-4">WhatsApp</Button>
                </Link>
              </nav>
            </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}