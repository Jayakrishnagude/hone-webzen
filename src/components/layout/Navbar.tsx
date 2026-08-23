"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = ["Services", "Portfolio", "About"];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#F9F9F9] border-b border-[#E5E5E5]">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center z-50">
          <span className="text-xl font-bold tracking-tight text-black">
            Hey One
          </span>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link 
            href="#contact"
            className="px-6 py-2.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-black/90 transition-colors"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#F9F9F9] border-b border-[#E5E5E5] flex flex-col items-start px-6 py-8 md:hidden shadow-xl"
          >
            {links.map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-black py-4 border-b border-[#E5E5E5] w-full text-left"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 w-full px-6 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest text-center"
            >
              Start Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
