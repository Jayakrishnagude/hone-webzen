"use client";

import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "b225873f-b96f-48d6-bc6b-0b26d2cc34d0");
    formData.append("subject", "New Project Inquiry from H-One WebZen!");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error: unknown) {
      console.error("Web3Forms error:", error);
      setStatus("error");
      const err = error as { message?: string };
      if (err?.message?.includes("Failed to fetch") || err?.message?.includes("NetworkError")) {
        setErrorMessage(
          "Network request blocked. If you are using an ad blocker or Brave Shields, please disable it for this site and try again."
        );
      } else {
        setErrorMessage("There was an error sending your message. Please try again.");
      }
    }
  };

  return (
    <section className="relative py-32 px-6 bg-black" id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-12">
          Ready to build something structurally sound?
        </h2>
        
        {status === "success" ? (
          <div className="max-w-2xl mx-auto flex flex-col gap-4 text-center items-center justify-center p-12 border border-white/20 bg-white/5">
            <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Submitted Successfully</h3>
            <p className="text-gray-400">Thank you for reaching out! Our team has received your details and will reply to you within 24 hours.</p>
            <button 
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 px-6 py-3 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto flex flex-col gap-6 text-left"
          >
            {/* Honeypot Spam Protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-white text-xs font-bold uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  required 
                  className="bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white text-xs font-bold uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  required 
                  className="bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white text-xs font-bold uppercase tracking-widest">Project Description</label>
              <textarea 
                name="message" 
                id="message"
                rows={5}
                required 
                className="bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm">{errorMessage || "There was an error sending your message. Please try again."}</p>
            )}

            <button 
              type="submit"
              disabled={status === "submitting"}
              className="mt-4 px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-[#E5E5E5] transition-colors self-start disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {status === "submitting" ? "Sending..." : "Send Details"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
