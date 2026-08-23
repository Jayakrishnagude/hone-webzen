import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full pt-20 pb-24 px-6 bg-[#F9F9F9] flex flex-col items-start max-w-7xl mx-auto border-b border-[#E5E5E5]">
      
      <div className="w-full mb-12">
        <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-black tracking-tighter leading-[1.05] max-w-4xl">
          Digital Craftsmanship through Architectural Logic
        </h1>
      </div>

      {/* Terminal Mockup */}
      <div className="w-full bg-[#0A0A0A] text-white p-6 md:p-10 text-xs md:text-sm font-mono overflow-x-auto shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
        </div>
        
        <div className="space-y-4">
          <p className="text-white/60">$ heyone --init architecture</p>
          
          <pre className="text-white/90">
{`class ArchitecturalLogic {
  constructor() {
    this.standards = "Uncompromising"
    this.framework = "Built-to-Last"
  }

  async buildArtifact(intent) {
    const discovery = await validate(intent);
    return blueprint.apply(discovery);
  }
}

export default new ArchitecturalLogic();`}
          </pre>
          
          <div className="pt-4 space-y-1 text-white/50">
            <p>Compiling core systems...</p>
            <p>[OK] Layout engine initialized</p>
            <p>[OK] Typography manifest applied</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
