"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Code, 
  Search, 
  ShoppingBag, 
  Cpu, 
  BarChart3, 
  Globe,
  Settings,
  ChevronRight
} from "lucide-react";

const services = [
  "Website Design & UI/UX Development",
  "Custom Web Application Development",
  "E-Commerce Website Development",
  "SEO Optimization & Technical SEO",
  "AI Integration & Automation Systems",
  "Dashboard & Admin Panel Development",
  "Website Hosting & Performance Optimization"
];

const processSteps = [
  "Requirement Analysis",
  "UI/UX Design",
  "Development & Integration",
  "Performance Optimization",
  "SEO Implementation",
  "Testing & Deployment",
  "Maintenance & Support"
];

const SEOContent = () => {
  return (
    <div className="bg-[#050816]">
      {/* H2: Our Web Design & Development Services */}
      <section className="relative py-20 px-6 border-b border-white/5" id="services">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4">
              Our Web Design & <span className="text-indigo-500">Development Services</span>
            </h2>
            <p className="text-base text-slate-400 font-medium leading-relaxed max-w-xl">
              We provide complete digital development services tailored for modern businesses, ensuring performance, user experience, and SEO optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl bg-white/[0.01] border border-white/5 flex items-center gap-3 group hover:bg-white/[0.03] transition-all"
              >
                <div className="w-6 h-6 rounded-md bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:border-indigo-500/40 transition-all">
                  <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                </div>
                <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-snug">
                  {service}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Why Choose H-One WebZen */}
      <section className="relative py-20 px-6 border-b border-white/5" id="why-choose-us">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-6">
                Why Choose <br />
                <span className="text-indigo-500">H-One WebZen</span>
              </h2>
              <p className="text-base text-slate-400 font-medium leading-relaxed mb-8 max-w-sm">
                We focus on building scalable, high-performance web systems. Our development ensures fast loading, mobile responsiveness, SEO readiness, and long-term reliability.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Fast Loading", icon: Zap },
                  { label: "Mobile First", icon: Smartphone },
                  { label: "SEO Ready", icon: Search },
                  { label: "High Security", icon: Shield }
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-indigo-400" />
                    <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/5 blur-[80px] rounded-full" />
              <div className="p-12 relative z-10 text-center">
                <div className="text-7xl font-black text-white mb-2 tracking-tighter">100%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500/60">Technical Precision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Our Website Development Process */}
      <section className="relative py-20 px-6" id="process">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
              Our High-Performance <br /><span className="text-indigo-500">Development Process</span>
            </h2>
            <p className="text-base text-slate-400 font-medium max-w-xl mx-auto">
              We follow a rigorous, engineering-first approach to ensure every project at H-One WebZen meets global performance and SEO standards.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-y-12">
            {processSteps.map((step, i) => (
              <React.Fragment key={step}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center px-8"
                >
                  <div className="text-4xl font-black text-indigo-500/40 mb-6 group-hover:text-indigo-500 transition-colors">
                    0{i + 1}
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-200 max-w-[120px]">
                    {step}
                  </h3>
                </motion.div>
                
                {/* Connecting Arrow for Desktop */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center pt-4 opacity-10">
                    <ChevronRight className="w-6 h-6 text-white" strokeWidth={1} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

// Re-importing missing icons
const Smartphone = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
const Zap = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const Shield = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

export default SEOContent;
