import { About } from "./_components/about"
import { Footer } from "./_components/foooter"
import { FormLeads } from "./_components/form"
import { Hero } from "./_components/hero"
import { Navbar } from "./_components/navbar"
import { OfertaRelampago } from "./_components/ofertafalsh"
import { Services } from "./_components/service"
import { Testimonials } from "./_components/depoimentos"
import { VideoPage } from "./_components/VideoPages"
import { PromoBar } from "./_components/promobar"
 
export default function Home(){
   return(
     <main>
      <Navbar/>
      <PromoBar/>
      <Hero/>
      <VideoPage/>
      <Testimonials/>
      <Services/>
      <OfertaRelampago/>
      <About/>
      <FormLeads/>
      <Footer/>
     </main>
   )
}