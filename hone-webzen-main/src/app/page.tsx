"use client";

import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import InteractiveStudio from "@/components/sections/InteractiveStudio";
import StudioStats from "@/components/sections/StudioStats";
import SEOContent from "@/components/sections/SEOContent";
import Contact from "@/components/sections/Contact";
import Team from "@/components/sections/Team";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Default initial active word for the interactive studio
  const [activeWord, setActiveWord] = React.useState("Web Design");

  return (
    <main 
      ref={containerRef}
      className="relative min-h-screen selection:bg-black selection:text-white bg-[#F9F9F9] text-black"
    >
      <Navbar />
      
      <div className="relative z-10 pt-[100px]">
        <Hero />
        
        <InteractiveStudio 
          activeWord={activeWord} 
          onActiveWordChange={setActiveWord} 
        />

        <SEOContent />
        <StudioStats />
        <Team />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
