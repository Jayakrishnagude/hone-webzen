import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Professional Web Design Services in India | H-One WebZen",
  description: "H-One WebZen offers premium UI/UX and web design services in India. We create high-conversion, responsive websites tailored for business growth.",
  keywords: "web design services India, UI/UX design company, responsive web design, professional website design",
};

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
