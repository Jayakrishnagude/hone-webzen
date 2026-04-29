"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import InteractiveStudio from "@/components/sections/InteractiveStudio";
import StudioStats from "@/components/sections/StudioStats";
import SEOContent from "@/components/sections/SEOContent";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  // Build ID: v10.0.1 - Cleanup Complete
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Transform background color based on scroll
  const bgColor = useTransform(
    scrollY,
    [0, 500, 600],
    ["#F8FAFC", "#050816", "#050816"]
  );

  // Phase 0: Hero, Phase 1: Transition, Phase 2: Interactive Studio, Phase 3+: Other sections
  const scrollPhase = useTransform(scrollY, [0, 500, 1000, 1800, 2000], [0, 1, 2, 2, 3]);
  const [phase, setPhase] = useState(0);
  const [activeWord, setActiveWord] = useState("Web Design");

  useEffect(() => {
    return scrollPhase.onChange((v) => {
      setPhase(Math.floor(v));
    });
  }, [scrollPhase]);

  return (
    <motion.main 
      ref={containerRef}
      style={{ backgroundColor: bgColor }}
      data-theme={phase >= 1 ? "dark" : "light"}
      className="relative min-h-screen selection:bg-brand-accent/20 transition-colors duration-300"
    >
      <Navbar />
      
      <div className="relative z-10">
        <Hero phase={phase} />
        
        {/* The Interactive Section - Phase 2 */}
        <InteractiveStudio 
          activeWord={activeWord} 
          onActiveWordChange={setActiveWord} 
        />

        <SEOContent />

        <StudioStats />

        <Contact />
        <Footer />
      </div>

    </motion.main>
  );
}
