import React from 'react';
import { ArrowRight } from 'lucide-react';

const StepVisuals = [

  // Query Input: Search nodes
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <circle cx="35" cy="35" r="15" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <line x1="46" y1="46" x2="65" y2="65" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M20 30 H50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
  </svg>,
  // Policy Retrieval: Shielded document
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <path d="M25 10 H55 L65 20 V65 H25 V10Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
    <path d="M40 30 V50 M32 40 H48" stroke="currentColor" strokeWidth="2"/>
    <circle cx="45" cy="55" r="15" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.3"/>
  </svg>,
  // Context Assembly: Grid module
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:rotate-90 transition-transform duration-700">
    <rect x="20" y="20" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    <rect x="45" y="20" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="20" y="45" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="45" y="45" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
  </svg>,
  // SLM Inference: Neural core
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white group-hover:scale-110 transition-transform">
    <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M40 10 V20 M40 60 V70 M10 40 H20 M60 70 H70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
    <circle cx="40" cy="40" r="4" fill="currentColor" className="animate-pulse"/>
  </svg>,
  // Structured Output: Code block with check
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent">
    <path d="M15 25 L25 40 L15 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="35" y="35" width="30" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="65" cy="15" r="5" fill="currentColor"/>
  </svg>
];

const HowItWorksSection = () => {
  const steps = [
    { title: "Query Input", icon: StepVisuals[0], desc: "Initial borrower or agent intent received by the system." },
    { title: "Policy Retrieval", icon: StepVisuals[1], desc: "RAG engine fetches snippets from verified credit policy docs." },
    { title: "Context Assembly", icon: StepVisuals[2], desc: "Assembles source-grounded context for model consumption." },
    { title: "SLM Inference", icon: StepVisuals[3], desc: "Small Language Model processes the intent within the provided context." },
    { title: "Structured Output", icon: StepVisuals[4], desc: "Deterministic response with full attribution to original documents." }
  ];

  return (
    <section className="py-20 sm:py-24 bg-primary border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tighter">
            The Deterministic <br />
            <span className="text-textSecondary italic">AI Pipeline</span>
          </h2>
          <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
            Vitto agents don't guess. Every output is the result of a retrieval-augmented chain, ensuring zero hallucinations and 100% policy compliance.
          </p>
        </div>

        <div className="relative group">
           {/* Horizontal Connector Line (Desktop) */}
           <div className="hidden lg:block absolute top-10 left-20 right-20 h-px bg-gradient-to-r from-accent/30 via-white/5 to-accent/30 -z-10" />

           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
             {steps.map((step, idx) => (
               <div key={idx} className="flex flex-col items-center text-center group/step">
                 <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center z-10 mb-6 sm:mb-8 transition-all duration-500 group-hover/step:scale-110 ${idx === steps.length - 1 ? 'bg-accent/10 border-2 border-accent/60 shadow-[0_0_20px_rgba(211,47,47,0.2)]' : 'bg-primary border border-white/10'}`}>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${idx === steps.length - 1 ? 'text-accent' : 'text-white/50 group-hover/step:text-accent'} transition-colors`}>
                       {step.icon}
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary border border-white/10 flex items-center justify-center text-[8px] font-black text-white/30">
                      {idx + 1}
                    </div>
                 </div>
                 <h3 className="text-xs sm:text-sm font-bold text-white mb-2 uppercase tracking-widest group-hover/step:text-accent transition-colors">{step.title}</h3>
                 <p className="text-xs text-textSecondary leading-relaxed max-w-[160px] font-light">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
