import { About } from "./_components/about"
import { Footer } from "./_components/foooter"
import { Hero } from "./_components/hero"
import { Navbar } from "./_components/navbar"
import { Services } from "./_components/service"

export default function Home(){
   return(
     <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Footer/>
     </main>
   )
}