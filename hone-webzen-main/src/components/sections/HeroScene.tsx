"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera, Html, ContactShadows } from "@react-three/drei";

const contentMap: Record<string, { title: string; desc: string; color: string }> = {
  "Web Design": { title: "Premium Design", desc: "User-centric interfaces that blend aesthetics with functionality.", color: "#6366F1" },
  "Development": { title: "Full-Stack Dev", desc: "Clean code and robust architecture built for scale.", color: "#22D3EE" },
  "E-Commerce": { title: "Modern Commerce", desc: "Seamless shopping experiences that drive conversions.", color: "#4F46E5" },
  "AI Tools": { title: "AI Integration", desc: "Leveraging machine learning to automate and enhance.", color: "#06B6D4" },
  "Dashboards": { title: "Data Systems", desc: "Complex data visualized into actionable insights.", color: "#6366F1" },
  "SEO": { title: "Search Mastery", desc: "High-performance optimization for maximum visibility.", color: "#22D3EE" },
  "Branding": { title: "Digital Identity", desc: "Crafting unique visual stories for modern brands.", color: "#4F46E5" },
  "Hosting": { title: "Secure Hosting", desc: "Fast, secure, and scalable solutions built for performance.", color: "#06B6D4" },
  "Automation": { title: "Process Flow", desc: "Streamlining operations through custom digital tools.", color: "#6366F1" },
  "Performance": { title: "Speed Focus", desc: "Optimized for lightning-fast delivery on every device.", color: "#22D3EE" },
};

const FocusPanel = ({ activeWord }: { activeWord: string }) => {
  const content = contentMap[activeWord] || contentMap["Web Design"];
  
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={[1, 0, 0]}>
        <boxGeometry args={[4, 2.5, 0.1]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.1} 
          roughness={0.1} 
          transparent 
          opacity={0.9} 
        />
        <Html transform position={[0, 0, 0.06]} distanceFactor={4}>
          <div className="w-[400px] p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-slate-200/50 flex flex-col gap-4 pointer-events-none select-none">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-brand-accent" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 font-outfit uppercase tracking-tighter">
                {content.title}
              </h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              {content.desc}
            </p>
            <div className="mt-4 flex gap-2">
              <div className="h-1 w-12 rounded-full bg-brand-accent/20" />
              <div className="h-1 w-6 rounded-full bg-brand-accent/10" />
            </div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
};

const HeroScene = ({ active, activeWord }: { active: boolean; activeWord: string }) => {
  return (
    <Canvas dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366F1" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#22D3EE" />
      
      <ContactShadows 
        position={[0, -2.5, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4.5} 
      />

      {active && (
        <FocusPanel activeWord={activeWord} />
      )}
    </Canvas>
  );
};

export default HeroScene;
