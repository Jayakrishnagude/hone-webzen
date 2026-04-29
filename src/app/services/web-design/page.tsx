import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WebDesignPage() {
  return (
    <main className="bg-[#050816] min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-6 container mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
          Premium Web Design Services
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          H-One WebZen provides high-performance web design services in India, focusing on UI/UX, conversion, and digital brand authority.
        </p>
      </section>
      <Footer />
    </main>
  );
}
