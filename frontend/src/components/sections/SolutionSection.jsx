import React from 'react';
import { Network, FileSearch } from 'lucide-react';


const SolutionVisuals = [
  // Domain-trained Models: Silicon wafer/brain nodes
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent shadow-accent/20">
    <rect x="15" y="15" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
    <path d="M40 25 V55 M25 40 H55" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    <circle cx="40" cy="40" r="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M40 32 L44 40 L40 48 L36 40 Z" fill="currentColor"/>
    <rect x="10" y="35" width="5" height="10" fill="currentColor" fillOpacity="0.4"/>
    <rect x="65" y="35" width="5" height="10" fill="currentColor" fillOpacity="0.4"/>
    <rect x="35" y="10" width="10" height="5" fill="currentColor" fillOpacity="0.4"/>
    <rect x="35" y="65" width="10" height="5" fill="currentColor" fillOpacity="0.4"/>
  </svg>,
  // Unified Architecture: Central hub
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent">
    <circle cx="40" cy="40" r="6" fill="currentColor"/>
    <path d="M40 40 L65 15 M40 40 L65 65 M40 40 L15 15 M40 40 L15 65" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.3"/>
    <circle cx="65" cy="15" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="65" cy="65" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="15" cy="15" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="15" cy="65" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M30 40 H50" stroke="currentColor" strokeWidth="1"/>
    <path d="M40 30 V50" stroke="currentColor" strokeWidth="1"/>
  </svg>,
  // Explainability: Traced audit trail
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent">
    <path d="M20 60 V20 H60 V60" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.3"/>
    <path d="M20 40 H40 L50 30 H60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="20" cy="40" r="3" fill="currentColor"/>
    <circle cx="60" cy="30" r="3" fill="currentColor"/>
    <rect x="35" y="35" width="10" height="10" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1"/>
  </svg>
];

const SolutionSection = () => {
  const features = [
    {
      icon: SolutionVisuals[0],
      title: "Domain-trained Models",
      tag: "BFSI-SLM",
      desc: "SLMs built specifically for BFSI compliance and precision."
    },
    {
      icon: SolutionVisuals[1],
      title: "Unified Architecture",
      tag: "Core Nexus",
      desc: "One central nexus mapping data across Acquisition, LOS, and LMS."
    },
    {
      icon: SolutionVisuals[2],
      title: "Explainability",
      tag: "SOC2",
      desc: "Complete deterministic traceability for every credit decision made."
    }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full -translate-x-1/2 -z-10"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-[1.15] text-white relative z-10">
            AI-native decisioning meets <br />
            <span className="text-accent underline decoration-white/10 underline-offset-8">full stack operational automation.</span>
          </h2>
          
          <div className="space-y-8 relative z-10">
            <p className="text-lg text-textSecondary leading-relaxed font-light border-l-2 border-white/5 pl-8">
              Vitto integrates data ingestion, model inference, and rule execution into a single pipeline. Decisions are generated in real time, with full traceability to policy and data inputs.
            </p>
            
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-base text-white/80 italic font-light relative z-10">
                "Traditional LOS systems execute transactions. <span className="text-accent font-semibold">Vitto executes credit decisions.</span>"
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-5">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="group glass-card p-7 flex gap-6 items-start hover:translate-x-2 transition-all duration-500 hover:bg-white/[0.04] relative overflow-hidden"
            >
              {/* Icon: larger with gradient glow pill */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent relative group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(211,47,47,0)] group-hover:shadow-[0_0_20px_rgba(211,47,47,0.3)]">
                {feat.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{feat.title}</h3>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/40 group-hover:text-accent/70 transition-colors">{feat.tag}</div>
                </div>
                <p className="text-textSecondary text-sm leading-relaxed font-light">{feat.desc}</p>
                {/* Stat bar */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-accent/30 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-r" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
