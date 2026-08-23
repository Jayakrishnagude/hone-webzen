"use client";

import React from "react";

const stats = [
  { label: "Projects Delivered", value: "22+" },
  { label: "Global Clients", value: "16+" },
  { label: "Success Rate", value: "100%" },
];

const StudioStats = () => {
  return (
    <section className="relative py-24 px-6 bg-[#F9F9F9]" id="studio">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5] mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#F9F9F9] p-12 text-center flex flex-col justify-center min-h-[200px]">
              <h3 className="text-5xl md:text-6xl font-bold text-black tracking-tighter mb-4">
                {stat.value}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-8">
            Engineered With
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
              <span key={tech} className="text-[10px] font-bold text-black uppercase tracking-widest">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioStats;
