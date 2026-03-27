import React from 'react';
import { ArrowRight } from 'lucide-react';

const ModuleVisuals = [

  // Data-Based Assessment: Data stack with ingestion
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <ellipse cx="40" cy="25" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M20 25 V55 C20 59.4183 28.9543 63 40 63 C51.0457 63 60 59.4183 60 55 V25" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 40 C20 44.4183 28.9543 48 40 48 C51.0457 48 60 44.4183 60 40" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    <path d="M40 10 V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 16 L40 20 L44 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
  // ML Model: Neural circuit brain
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <path d="M40 20 C25 20 20 35 20 45 C20 55 30 65 40 65 C50 65 60 55 60 45 C60 35 55 20 40 20Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="40" cy="45" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M40 37 V20 M32 45 H20 M48 45 H60 M40 53 V65" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <circle cx="40" cy="20" r="3" fill="currentColor"/>
    <circle cx="20" cy="45" r="3" fill="currentColor"/>
  </svg>,
  // Rule Engine: Decision flow
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <path d="M40 15 L60 30 L40 45 L20 30 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M40 45 V65" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
    <path d="M20 30 H10 V70 H70 V30 H60" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
    <circle cx="40" cy="65" r="4" fill="currentColor"/>
  </svg>,
  // Fraud Intelligence: Radar shield
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <path d="M40 10 L65 20 V45 C65 60 40 70 40 70 C40 70 15 60 15 45 V20 L40 10Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
    <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"/>
    <line x1="40" y1="40" x2="52" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    </line>
  </svg>,
  // Collection Intelligence: Priority target
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <rect x="20" y="15" width="40" height="50" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
    <line x1="30" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="2"/>
    <line x1="30" y1="45" x2="50" y2="45" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5"/>
    <line x1="30" y1="55" x2="40" y2="55" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
    <circle cx="65" cy="15" r="5" fill="currentColor"/>
  </svg>,
  // Agentic AI: Bot core
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <rect x="20" y="30" width="40" height="30" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="33" cy="45" r="3" fill="currentColor"/>
    <circle cx="47" cy="45" r="3" fill="currentColor"/>
    <path d="M35 15 Q40 5 45 15" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 45 H10 M60 45 H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
  </svg>
];

const AILayerSection = () => {
  const modules = [
    {
      icon: ModuleVisuals[0],
      title: "Data-Based Assessment",
      desc: "Aggregates bureau, banking, and behavioral data into a single, unified risk profile."
    },
    {
      icon: ModuleVisuals[1],
      title: "ML Model Ensemble",
      desc: "Risk scoring using supervised models trained specifically on portfolio-level data."
    },
    {
      icon: ModuleVisuals[2],
      title: "Rule Engine & Decisioning",
      desc: "Policy execution mapped with deterministic outputs ensuring total regulatory compliance."
    },
    {
      icon: ModuleVisuals[3],
      title: "Fraud Intelligence",
      desc: "Detects anomalies dynamically across identity, device, and transaction layers."
    },
    {
      icon: ModuleVisuals[4],
      title: "Collection Intelligence",
      desc: "Predicts recovery probability and intelligently prioritizes delinquent accounts."
    },
    {
      icon: ModuleVisuals[5],
      title: "Agentic AI Layer",
      desc: "Executes complex query resolution and workflow assistance securely via SLMs."
    }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Bespoke Illustration Background Overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.05] grayscale pointer-events-none -z-10">
        <img src="/vitto_ai_matrix_illustration_1774646885387.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24 relative z-10">
          <div className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Core Infrastructure</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient">
            The AI Layer of Vitto
          </h2>
          <p className="text-textSecondary text-xl font-light leading-relaxed max-w-2xl">
            A fully integrated intelligence layer powering every stage of the lending lifecycle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className="group glass-card p-10 hover-lift relative overflow-hidden flex flex-col h-full"
            >
              {/* Module Header */}
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textSecondary group-hover:text-accent group-hover:bg-accent/5 group-hover:border-accent/20 transition-all duration-500">
                  {mod.icon}
                </div>
                <div className="text-[10px] font-bold text-white/10 group-hover:text-accent/30 tracking-widest transition-colors font-header">
                  M.0{idx + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                {mod.title}
              </h3>
              
              <p className="text-textSecondary text-lg leading-relaxed font-light mb-10 flex-1">
                {mod.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-accent/10 transition-colors">
                <a href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-textSecondary group-hover:text-white transition-all">
                  Documentation
                  <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AILayerSection;
