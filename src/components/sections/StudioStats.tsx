"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const stats = [
  { label: "Projects Delivered", value: "22+" },
  { label: "Global Clients", value: "16+" },
  { label: "Success Rate", value: "100%" },
];

const StudioStats = () => {
  return (
    <section className="relative py-20 px-6 bg-[#050816] overflow-hidden" id="studio">
      <div className="container mx-auto">
        {/* Metrics Flow - Arrow Based */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border-y border-white/5 py-20 mb-32">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-black font-outfit text-white tracking-tighter mb-2">
                  {stat.value}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500">
                  {stat.label}
                </p>
              </motion.div>
              
              {/* Arrow Connector (Hidden on last item) */}
              {i < stats.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.3, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="hidden md:block"
                >
                  <ChevronRight className="w-8 h-8 text-white" strokeWidth={1} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Minimal Tech Stack */}
        <div className="mt-20 pt-20 border-t border-white/5 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 mb-12">
            Engineered With
          </p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-40 hover:opacity-80 transition-opacity duration-700">
            {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Framer Motion"].map((tech) => (
              <span key={tech} className="text-xs font-bold text-white uppercase tracking-widest">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioStats;
