"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "Web Design",
  "Development",
  "E-Commerce",
  "AI Tools",
  "Dashboards",
  "SEO",
  "Branding",
  "Hosting",
  "Automation",
  "Performance"
];

const ControlArc = ({ active, onActiveWordChange }: { active: boolean; onActiveWordChange?: (word: string) => void }) => {
  const [mouseY, setMouseY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate rotation based on mouse Y
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;
  const targetRotation = (mouseY / windowHeight) * 90 - 45; // Rotate between -45 and 45 degrees

  useEffect(() => {
    // Find active word based on rotation
    const index = Math.round(((targetRotation + 45) / 90) * (words.length - 1));
    const clampedIndex = Math.max(0, Math.min(words.length - 1, index));
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
      onActiveWordChange?.(words[clampedIndex]);
    }
  }, [targetRotation, activeIndex, onActiveWordChange]);

  return (
    <div className={`fixed left-0 top-0 h-screen w-[300px] pointer-events-none z-50 hidden lg:flex items-center transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div 
        className="relative w-[1200px] h-[1200px] rounded-full border border-brand-accent/5 -translate-x-[90%] flex items-center justify-center"
        animate={{ rotate: -targetRotation }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {words.map((word, index) => {
          const angle = (index / (words.length - 1)) * 90 - 45;
          const isActive = index === activeIndex;
          
          return (
            <div
              key={word}
              className="absolute top-1/2 left-1/2 -translate-y-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(580px)`,
              }}
            >
              <motion.div
                animate={{ 
                  scale: isActive ? 1.2 : 0.8,
                  opacity: isActive ? 1 : 0.3,
                  x: isActive ? -10 : 0
                }}
                style={{ transform: `rotate(${-angle}deg)` }}
                className="flex items-center gap-4"
              >
                <div className={`w-1 h-1 rounded-full ${isActive ? 'bg-brand-accent' : 'bg-brand-muted'}`} />
                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-brand-text' : 'text-brand-muted'}`}>
                  {word}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      
      {/* Decorative vertical line */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-accent/20 to-transparent" />
    </div>
  );
};

export default ControlArc;
