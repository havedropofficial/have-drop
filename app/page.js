'use client'

import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import { useState } from "react";

export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return (
<div className="min-h-screen bg-gray-50">
      <Header toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen}  setMobileMenuOpen={setMobileMenuOpen}/>
        <main>
          <Hero />
          <About />
          <Process/>
          <CaseStudy/>
          <Skills/>
          <Contact/>
              </main>
      <Footer/>
    </div>
  );
}
