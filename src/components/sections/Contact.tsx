"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [gmailLink, setGmailLink] = useState("");

  // Dynamically update the Gmail Compose link as the user types
  useEffect(() => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nRequirements:\n${formData.message}`);
    // Universal Gmail Compose URL
    setGmailLink(`https://mail.google.com/mail/?view=cm&fs=1&to=support.honewebzen@gmail.com&su=${subject}&body=${body}`);
  }, [formData]);

  return (
    <section className="relative py-24 px-6 bg-[#050816]" id="contact">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Leadership Team */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-12 lg:sticky lg:top-32"
          >
            {/* G Jayakrishna Profile */}
            <div className="flex flex-col items-start text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">
                <span className="text-xl font-black text-indigo-500 font-outfit">G</span>
              </div>
              
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500 mb-2">
                Founder & CEO
              </h3>
              
              <h2 className="text-3xl font-black font-outfit text-white tracking-tighter mb-4">
                G Jayakrishna
              </h2>
              
              <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-xs">
                Directly overseeing technical architecture and high-performance engineering.
              </p>
            </div>

            {/* Eswarasai k Profile */}
            <div className="flex flex-col items-start text-left pt-8 border-t border-white/5">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">
                <span className="text-lg font-black text-cyan-500 font-outfit">E</span>
              </div>
              
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500 mb-2">
                Co-Founder
              </h3>
              
              <h2 className="text-2xl font-black font-outfit text-white tracking-tighter mb-4">
                Eswarasai k
              </h2>
              
              <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-xs">
                Strategizing growth and expanding the digital footprint of H-One WebZen.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/30 transition-all">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <p className="text-slate-300 font-bold text-xs uppercase tracking-widest">support.honewebzen@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card p-10 md:p-16 border-white/5 bg-white/[0.01]"
          >
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-4">
                Let's Engineer Your Future.
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                Describe your technical requirements and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Work Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Your Requirements</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="What are we building?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all resize-none"
                />
              </div>

              <a 
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-12 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-indigo-500/20 text-center"
              >
                Send Inquiry
                <Send className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
