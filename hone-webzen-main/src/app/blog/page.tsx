import { Metadata } from "next";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog | H-One WebZen - Insights on Web Development & SEO India",
  description: "Read expert insights from H-One WebZen on modern website design, high-performance development, AI tools, and SEO optimization for Indian businesses.",
};

export default function BlogPage() {
  return (
    <main className="bg-[#050816] min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24 px-6 container mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
          H-One WebZen Blog
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Expert insights on website design, development, and SEO optimization in India.
        </p>
      </section>
      <Footer />
    </main>
  );
}
