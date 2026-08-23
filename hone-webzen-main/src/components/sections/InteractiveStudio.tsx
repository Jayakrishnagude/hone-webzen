"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import RefinedCrescent from "../layout/RefinedCrescent";

const serviceData: Record<string, { title: string; desc: string; bullets: string[] }> = {
  "Web Design": {
    title: "Premium Web Design",
    desc: "We craft bespoke visual identities and high-conversion user experiences designed to communicate authority.",
    bullets: ["User-centric interface design", "Interactive component systems", "Brand-aligned visual strategy", "Conversion rate optimization"]
  },
  "Development": {
    title: "Full-Stack Engineering",
    desc: "High-performance deployment using modern frameworks and strict architectural logic to ensure stability and speed.",
    bullets: ["Next.js & React ecosystems", "Scalable backend architecture", "API design and integration", "Performance-first standards"]
  },
  "E-Commerce": {
    title: "E-Commerce Systems",
    desc: "Seamless shopping environments designed to maximize revenue, improve retention, and handle scaling.",
    bullets: ["Custom headless storefronts", "Secure payment integrations", "Inventory management", "Marketing automation"]
  },
  "Dashboards": {
    title: "Enterprise Dashboards",
    desc: "Complex data visualized into actionable strategy. We build custom platforms that empower your decision-making.",
    bullets: ["Real-time data visualization", "Custom analytics pipelines", "User access management", "Exportable reporting"]
  },
  "AI Tools": {
    title: "AI-Powered Systems",
    desc: "Future-proof your business with custom AI integrations that automate workflows and unlock new insights.",
    bullets: ["LLM integration", "Automated workflows", "Predictive data models", "Custom AI interfaces"]
  },
  "SEO": {
    title: "SEO Optimization",
    desc: "Advanced search optimization built into the core of your systems to ensure high visibility.",
    bullets: ["Technical SEO", "Content strategy", "Core Vital tuning", "Ongoing rank monitoring"]
  },
  "Branding": {
    title: "Digital Branding",
    desc: "Unifying your digital presence with a consistent, authoritative brand voice.",
    bullets: ["Visual identity design", "Typography systems", "Brand messaging", "Multi-platform consistency"]
  },
  "Hosting": {
    title: "Hosting Solutions",
    desc: "Deploy secure, scalable, and high-performance hosting architectures optimized for uptime.",
    bullets: ["Cloud deployment", "CDN optimization", "Server tuning", "Secure infrastructure"]
  },
  "Automation": {
    title: "Process Automation",
    desc: "Smart automation systems that reduce manual overhead and improve business velocity.",
    bullets: ["Workflow mapping", "Third-party integration", "Custom business logic", "Error monitoring"]
  },
  "Performance": {
    title: "Core Vital Tuning",
    desc: "Deep-level performance engineering to achieve lightning-fast load times for global users.",
    bullets: ["Asset delivery", "Browser rendering", "Query optimization", "Edge caching"]
  }
};

interface InteractiveStudioProps {
  activeWord: string;
  onActiveWordChange: (word: string) => void;
}

const InteractiveStudio: React.FC<InteractiveStudioProps> = ({ activeWord, onActiveWordChange }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });
  const current = serviceData[activeWord] || serviceData["Web Design"];

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex flex-col justify-center py-20 px-6 bg-[#F9F9F9] border-b border-[#E5E5E5]" id="interactive-studio">
      
      {/* Title Label (similar to "ABOUT THE STUDIO" in the image) */}
      <div className="container mx-auto max-w-7xl mb-12 flex justify-end">
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-black/40">
          Capabilities Matrix
        </h2>
      </div>

      <RefinedCrescent 
        active={isInView} 
        activeWord={activeWord} 
        onActiveWordChange={onActiveWordChange} 
      />

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row lg:justify-end lg:pr-24">
        
        <div className="w-full lg:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWord}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5] border border-[#E5E5E5]"
            >
              {/* Card 1: Main Title & Desc */}
              <div className="bg-[#F9F9F9] p-8 md:p-12 md:col-span-2 flex flex-col justify-between min-h-[300px]">
                <span className="text-[10px] font-mono text-black/40 mb-6">01 / {activeWord.toUpperCase()}</span>
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-4">{current.title}</h3>
                  <p className="text-sm text-black/70 max-w-md leading-relaxed">{current.desc}</p>
                </div>
              </div>

              {/* Cards for Bullets */}
              {current.bullets.map((bullet, idx) => (
                <div key={idx} className="bg-[#F9F9F9] p-8 flex items-start gap-4">
                  <span className="text-[10px] font-mono text-black/30 mt-1">0{idx + 2}</span>
                  <p className="text-sm font-bold tracking-tight text-black">{bullet}</p>
                </div>
              ))}
              
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InteractiveStudio;
