"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] py-16 px-6 border-t border-[#E5E5E5]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#E5E5E5] pb-12 mb-8">
          
          <div className="md:col-span-6">
            <h3 className="text-xl font-bold text-black tracking-tight mb-4">Hey One</h3>
            <p className="text-xs text-black/60 max-w-xs">
              Providing clarity through logic-driven digital design and engineering.
            </p>
          </div>
          
          <div className="md:col-span-6 flex flex-col md:items-end">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4">Contact</h4>
            <ul className="space-y-2 md:text-right">
              <li><a href="mailto:support.honewebzen@gmail.com" className="text-xs font-bold text-black/70 hover:text-black">Email Us</a></li>
              <li><a href="#contact" className="text-xs font-bold text-black/70 hover:text-black">Work With Us</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-black/40">
          <p>© {new Date().getFullYear()} Hey One Webagency. All rights reserved.</p>
          <p>Built with Architectural Logic</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
