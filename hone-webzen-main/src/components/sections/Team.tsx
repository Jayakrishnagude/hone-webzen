"use client";

import React from "react";

const teamMembers = [
  {
    name: "G Jayakrishna",
    role: "Founder & CEO",
    description: "Directly overseeing technical architecture and high-performance engineering."
  },
  {
    name: "Eswarasai k",
    role: "Co-Founder",
    description: "Strategizing growth and expanding the digital footprint of Hey One Webagency."
  }
];

const Team = () => {
  return (
    <section className="relative py-24 px-6 border-b border-[#E5E5E5] bg-[#F9F9F9]" id="team">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Leadership
            </h2>
            <p className="text-sm text-black/60 max-w-xl">
              The engineering and strategy minds behind Hey One.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="mailto:support.honewebzen@gmail.com" className="text-[10px] font-bold uppercase tracking-widest text-black hover:text-black/60 transition-colors border-b border-black pb-1">
              support.honewebzen@gmail.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-[#F9F9F9] p-12">
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                  {member.role}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-black tracking-tight mb-4">
                {member.name}
              </h3>
              <p className="text-sm text-black/60 max-w-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
