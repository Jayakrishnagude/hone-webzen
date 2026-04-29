import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Custom Web Development Company in India | H-One WebZen",
  description: "Top-tier custom web development services in India. We build scalable, high-performance web applications and systems using modern technology.",
  keywords: "web development company India, custom web application development, full-stack development India, enterprise web solutions",
};

export default function WebDevPage() {
  return (
    <main className="bg-[#050816] min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-6 container mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
          Custom Web Development Company
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          High-performance web development solutions tailored for startups and enterprises in India.
        </p>
      </section>
      <Footer />
    </main>
  );
}
