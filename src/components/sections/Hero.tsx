"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({ phase }: { phase: number }) => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-[#F8FAFC]">
      {/* Background Grid - Minimal Vercel Style */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="container mx-auto relative z-10 text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-slate-200 mb-12 shadow-sm"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            H-One WebZen <span className="text-slate-300 mx-2">|</span> Website Design & Development Company in India
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl md:text-7xl font-black font-outfit text-[#0F172A] tracking-tighter leading-[0.95] mb-10"
        >
          Website Design & <br /> Development <br /> Company in India – <span className="text-indigo-600 italic">H-One WebZen</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-16 leading-relaxed font-medium"
        >
          H-One WebZen is a professional website design and development company in India, delivering high-performance digital solutions for startups, businesses, and growing brands. We specialize in responsive website design, e-commerce development, dashboards, AI-powered systems, and SEO-optimized platforms built for speed, scalability, and long-term growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <Link href="#contact" className="px-12 py-6 bg-[#6366F1] text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center">
            Start Your Website Project Today
          </Link>
          <Link href="#services" className="px-12 py-6 bg-white text-[#0F172A] border border-[#CBD5E1] rounded-2xl font-bold text-lg shadow-sm hover:bg-slate-50 hover:shadow-md transition-all duration-300 flex items-center justify-center">
            Explore Our Solutions
          </Link>
        </motion.div>
      </div>

      {/* Subtle bottom gradient transition trigger area */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-100 to-transparent opacity-50" />
    </section>
  );
};

export default Hero;
