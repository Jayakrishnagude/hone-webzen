"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const keywords = [
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

interface SlimCrescentProps {
  active: boolean;
  activeWord: string;
  onActiveWordChange: (word: string) => void;
}

const SlimCrescent: React.FC<SlimCrescentProps> = ({ active, activeWord, onActiveWordChange }) => {
  const [mouseY, setMouseY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  // Rotation based on vertical cursor position
  const normalizedY = mouseY / (typeof window !== 'undefined' ? window.innerHeight : 1000);
  const currentRotation = (normalizedY - 0.5) * 30; // Subtle rotation

  // Auto-select based on scroll/mouse position
  const activeIndex = Math.min(
    Math.max(Math.floor(normalizedY * keywords.length), 0),
    keywords.length - 1
  );

  useEffect(() => {
    if (active && !isMobile) {
      onActiveWordChange(keywords[activeIndex]);
    }
  }, [activeIndex, active, isMobile, onActiveWordChange]);

  if (isMobile) {
    return (
      <div className={`fixed bottom-0 left-0 w-full z-50 p-6 transition-all duration-1000 ${active ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {keywords.map((word) => {
            const isActive = activeWord === word;
            return (
              <button
                key={word}
                onClick={() => onActiveWordChange(word)}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 border ${
                  isActive 
                    ? "bg-[#6366F1] text-white border-[#6366F1] shadow-lg shadow-indigo-500/20" 
                    : "bg-white/5 text-slate-400 border-white/10 backdrop-blur-xl"
                }`}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed left-0 top-0 h-screen w-32 z-50 flex items-center transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* The Slim Crescent Selector */}
      <div className="absolute left-[-260px] w-[350px] h-[550px] perspective-[1000px]">
        <motion.div 
          className="absolute inset-0 border-r-[2px] border-white/10 rounded-full"
          style={{
            rotate: currentRotation,
            transition: "rotate 0.3s cubic-bezier(0.23, 1, 0.32, 1)"
          }}
        >
          {/* Decorative Edge Glow */}
          <div className="absolute top-1/4 right-0 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-brand-highlight/30 to-transparent blur-[2px]" />
        </motion.div>

        {/* Floating Keywords attached to the crescent edge */}
        <div className="absolute inset-0">
          {keywords.map((word, index) => {
            const angle = (index / (keywords.length - 1) - 0.5) * 80; 
            const isActive = activeWord === word;
            
            return (
              <motion.div
                key={word}
                className="absolute left-[330px] top-1/2 -translate-y-1/2 origin-[-330px_center]"
                style={{ rotate: angle }}
              >
                <motion.button
                  onClick={() => onActiveWordChange(word)}
                  onMouseEnter={() => onActiveWordChange(word)}
                  animate={{
                    x: isActive ? 12 : 0,
                    opacity: isActive ? 1 : 0.25,
                    scale: isActive ? 1.05 : 0.85,
                    color: isActive ? "#FFFFFF" : "#94A3B8",
                  }}
                  className="text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap interactive pl-6 flex items-center gap-4"
                >
                  <span className={`w-3 h-[1px] transition-all duration-500 ${isActive ? 'bg-brand-highlight w-6' : 'bg-white/10 w-3'}`} />
                  {word}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SlimCrescent;
