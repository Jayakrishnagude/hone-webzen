"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-20 px-6 border-t border-white/5 bg-[#050816]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center font-outfit mb-2">
              <span className="text-2xl font-black tracking-tighter text-indigo-400">
                H-One
              </span>
              <span className="text-2xl font-black tracking-tighter text-white ml-1">
                WebZen
              </span>
              <span className="text-indigo-600">.</span>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black">
              support.honewebzen@gmail.com
            </p>
          </div>
          
          <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} H-One WebZen.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
