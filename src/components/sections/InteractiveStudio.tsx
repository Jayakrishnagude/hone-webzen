"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import RefinedCrescent from "../layout/RefinedCrescent";
import { 
  Palette, 
  Code2, 
  ShoppingBag, 
  LayoutDashboard, 
  Cpu, 
  Search, 
  Zap, 
  Server, 
  Settings, 
  Activity 
} from "lucide-react";

const keywords = [
  "Web Design", "Development", "E-Commerce", "Dashboards", 
  "AI Tools", "SEO", "Branding", "Hosting", 
  "Automation", "Performance"
];

const serviceData: Record<string, { title: string; desc: string; bullets: string[] }> = {
  "Web Design": {
    title: "Premium Web Design",
    desc: "We craft bespoke visual identities and high-conversion user experiences designed to communicate authority.",
    bullets: ["User-centric interface design", "Interactive component systems", "Brand-aligned visual strategy", "Conversion rate optimization"]
  },
  "Development": {
    title: "Full-Stack Development",
    desc: "Robust, scalable architectures built with modern frameworks for ultimate speed and reliability.",
    bullets: ["Next.js & React ecosystems", "Scalable backend architecture", "API design and integration", "Performance-first code standards"]
  },
  "E-Commerce": {
    title: "E-Commerce Systems",
    desc: "Seamless shopping environments designed to maximize revenue, improve retention, and handle high-traffic scaling.",
    bullets: ["Custom headless storefronts", "Secure payment integrations", "Inventory management logic", "Marketing automation flows"]
  },
  "Dashboards": {
    title: "Enterprise Dashboards",
    desc: "Complex data visualized into actionable strategy. We build custom platforms that empower your decision-making.",
    bullets: ["Real-time data visualization", "Custom analytics pipelines", "User access & role management", "Exportable reporting systems"]
  },
  "AI Tools": {
    title: "AI-Powered Systems",
    desc: "Future-proof your business with custom AI integrations that automate manual workflows and unlock new insights.",
    bullets: ["LLM and GPT integration", "Automated customer workflows", "Predictive data models", "Custom AI user interfaces"]
  },
  "SEO": {
    title: "SEO Optimization",
    desc: "Advanced search optimization built into the core of your systems to ensure high visibility and organic growth.",
    bullets: ["Technical SEO architecture", "Content strategy mapping", "Speed & Core Vital tuning", "Ongoing rank monitoring"]
  },
  "Branding": {
    title: "Digital Branding",
    desc: "Unifying your digital presence with a consistent, authoritative brand voice that resonates with high-value clients.",
    bullets: ["Visual identity design", "Typography and color systems", "Brand messaging strategy", "Multi-platform consistency"]
  },
  "Hosting": {
    title: "Hosting Solutions",
    desc: "Deploy secure, scalable, and high-performance hosting architectures optimized for speed and uptime.",
    bullets: ["Cloud deployment pipelines", "CDN optimization", "Server performance tuning", "Secure infrastructure setup"]
  },
  "Automation": {
    title: "Process Automation",
    desc: "Smart automation systems that reduce manual overhead and improve business velocity across all departments.",
    bullets: ["Workflow mapping and logic", "Third-party tool integration", "Custom business logic scripts", "Error and status monitoring"]
  },
  "Performance": {
    title: "Core Vital Tuning",
    desc: "Deep-level performance engineering to achieve perfect scores and lightning-fast load times for global users.",
    bullets: ["Asset delivery optimization", "Browser rendering efficiency", "Database query optimization", "Edge caching strategies"]
  }
};

interface InteractiveStudioProps {
  activeWord: string;
  onActiveWordChange: (word: string) => void;
}

const InteractiveStudio: React.FC<InteractiveStudioProps> = ({ activeWord, onActiveWordChange }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 }); // Only active when 30% of the section is visible
  const current = serviceData[activeWord] || serviceData["Web Design"];

  return (
    <section ref={sectionRef} className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-[#050816]" id="interactive-studio">
      {/* Immersive Dark Ambience - Linear only, no circles */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5" />
      </div>

      {/* The Slim Left Selector */}
      <RefinedCrescent 
        active={isInView} 
        activeWord={activeWord} 
        onActiveWordChange={onActiveWordChange} 
      />

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-end lg:pr-24">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWord}
              initial={{ opacity: 0, x: 30, scale: 0.98, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, x: -30, scale: 0.98, rotateY: -15 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="p-10 md:p-16 relative overflow-hidden"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              {/* Clean UI Structure - No AI Look */}
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-10"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 block mb-4">
                    Technical Solution
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                    {current.title}
                  </h2>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium mb-12"
                >
                  {current.desc}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  {current.bullets.map((bullet, i) => (
                    <div key={bullet} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-3xl -z-10" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InteractiveStudio;
