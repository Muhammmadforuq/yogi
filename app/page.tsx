import { About, Ethics, Faqs, Header, Hero, Gallery, WhatPeopleSay, ContactUs, Footer } from "@/components";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />  
        <About />
        <Ethics />
        <Faqs/>
        <Gallery/>
        <WhatPeopleSay/>
        <ContactUs/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </> 
  );
}
