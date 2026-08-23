"use client";

import React from "react";

const services = [
  "Website Design & UI/UX",
  "Custom Web Applications",
  "E-Commerce Systems",
  "Technical SEO",
  "AI Integration",
  "Dashboard Development",
  "Performance Hosting"
];

const processSteps = [
  "Analysis",
  "Architecture",
  "Development",
  "Optimization",
  "Deployment"
];

const SEOContent = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <section className="relative py-24 px-6 border-b border-[#E5E5E5]" id="services">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Development Capabilities
            </h2>
            <p className="text-sm text-black/60 max-w-xl">
              Engineered for performance, user experience, and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
            {services.map((service, i) => (
              <div
                key={service}
                className="bg-[#F9F9F9] p-8 flex flex-col justify-between min-h-[160px]"
              >
                <span className="text-[10px] font-mono text-black/30 mb-4">0{i + 1}</span>
                <h3 className="text-xs font-bold text-black uppercase tracking-widest leading-snug">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 border-b border-[#E5E5E5]" id="process">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4">
                Systematic Process
              </h2>
              <p className="text-sm text-black/60 max-w-xl">
                A rigorous, engineering-first approach to project lifecycle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
            {processSteps.map((step, i) => (
              <div
                key={step}
                className="bg-[#F9F9F9] p-8"
              >
                <div className="text-2xl font-bold text-black/20 mb-6">
                  0{i + 1}
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOContent;
