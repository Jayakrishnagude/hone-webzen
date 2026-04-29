"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkPhase, setIsDarkPhase] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsDarkPhase(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        isScrolled 
          ? "py-4 bg-white/80 dark:bg-[#050816]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center font-outfit">
            <span className={`text-2xl font-black tracking-tighter transition-colors duration-700 ${
              isDarkPhase ? "text-indigo-400" : "text-indigo-600"
            }`}>
              H-One
            </span>
            <span className={`text-2xl font-black tracking-tighter transition-colors duration-700 ml-1 ${
              isDarkPhase ? "text-white" : "text-[#0F172A]"
            }`}>
              WebZen
            </span>
            <span className="text-indigo-600">.</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {[
            { label: "Studio", href: "/" },
            { label: "Founder", href: "#contact" },
            { label: "Contact", href: "#contact" }
          ].map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700 hover:text-indigo-500 ${
                isDarkPhase ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="#contact"
            className={`px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-700 shadow-lg hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center ${
              isDarkPhase 
                ? "bg-indigo-600 text-white shadow-indigo-500/20" 
                : "bg-indigo-600 text-white shadow-indigo-200"
            }`}
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden transition-colors duration-700 ${
          isDarkPhase ? "text-white" : "text-[#0F172A]"
        }`}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
