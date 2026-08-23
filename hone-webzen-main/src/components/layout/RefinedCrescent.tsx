"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const keywords = [
  "Web Design",
  "Development",
  "E-Commerce",
  "Dashboards",
  "AI Tools",
  "SEO",
  "Branding",
  "Hosting",
  "Automation",
  "Performance"
];

interface RefinedCrescentProps {
  active: boolean;
  activeWord: string;
  onActiveWordChange: (word: string) => void;
}

const RefinedCrescent: React.FC<RefinedCrescentProps> = ({ active, activeWord, onActiveWordChange }) => {
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const normalizedY = mouseY / (typeof window !== 'undefined' ? window.innerHeight : 1000);
  const currentRotation = (normalizedY - 0.5) * 40; // Rotation range for the selector

  return (
    <>
      {/* Desktop Crescent Selector */}
      <div className={`fixed left-0 top-0 h-screen w-40 z-50 hidden lg:flex items-center transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative h-[600px] w-full">
          {/* Visual Arc Lines - Dual Lined 3D System */}
          <motion.div 
            className="absolute left-[-300px] top-1/2 -translate-y-1/2 w-[400px] h-[600px] border-r border-black/5 rounded-[100%]"
            style={{ 
              rotate: currentRotation,
              rotateY: 20,
              transformStyle: "preserve-3d",
              perspective: "1000px",
              transition: "rotate 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
            }}
          />
          <motion.div 
            className="absolute left-[-308px] top-1/2 -translate-y-1/2 w-[400px] h-[600px] border-r border-black/20 rounded-[100%]"
            style={{ 
              rotate: currentRotation,
              rotateY: 20,
              transformStyle: "preserve-3d",
              perspective: "1000px",
              transition: "rotate 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
            }}
          />

          {/* Keywords along the arc */}
          {keywords.map((word, index) => {
            const angle = (index / (keywords.length - 1) - 0.5) * 80;
            const isActive = activeWord === word;
            
            return (
              <motion.div
                key={word}
                className="absolute left-[30px] top-1/2 -translate-y-1/2 origin-[-300px_center]"
                style={{ 
                  rotate: angle,
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.button
                  onClick={() => onActiveWordChange(word)}
                  onMouseEnter={() => onActiveWordChange(word)}
                  animate={{
                    x: isActive ? 20 : 0,
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1.1 : 0.9,
                    color: isActive ? "#000000" : "#666666",
                  }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  style={{ rotate: -angle }} // Keep text horizontal
                  className="text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap pl-4 flex items-center gap-4 group"
                >
                  <span className={`h-[1px] transition-all duration-500 ${isActive ? 'bg-black w-8' : 'bg-black/20 w-4'}`} />
                  {word}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Glass Tabs Selector */}
      <div className={`fixed bottom-0 left-0 w-full z-50 p-6 lg:hidden transition-all duration-1000 ${active ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
          {keywords.map((word) => {
            const isActive = activeWord === word;
            return (
              <button
                key={word}
                onClick={() => onActiveWordChange(word)}
                className={`px-6 py-3 text-[10px] font-bold uppercase tracking-[0.1em] whitespace-nowrap transition-all duration-500 border ${
                  isActive 
                    ? "bg-black text-white border-black" 
                    : "bg-white text-[#666666] border-[#E5E5E5]"
                }`}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RefinedCrescent;
