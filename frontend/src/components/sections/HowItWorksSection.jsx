import React from 'react';
import { Search, FileText, LayoutGrid, Cpu, Binary, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    { title: "Query Input", icon: <Search size={22} className="text-secondary" />, desc: "Initial borrower or agent intent received by the system." },
    { title: "Policy Retrieval", icon: <FileText size={22} className="text-secondary" />, desc: "RAG engine fetches relevant snippets from verified credit policy docs." },
    { title: "Context Assembly", icon: <LayoutGrid size={22} className="text-secondary" />, desc: "Assembles source-grounded context for model consumption." },
    { title: "SLM Inference", icon: <Cpu size={22} className="text-white" />, desc: "Small Language Model processes the intent within the provided context." },
    { title: "Structured Output", icon: <Binary size={22} className="text-accent" />, desc: "Deterministic, auditable response with full attribution to original documents." }
  ];

  return (
    <section className="py-24 bg-primary border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tighter">
            The Deterministic <br />
            <span className="text-textSecondary italic">AI Pipeline</span>
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            Vitto agents don't guess. Every output is the result of a retrieval-augmented chain, ensuring zero hallucinations and 100% policy compliance.
          </p>
        </div>

        <div className="relative group">
           {/* Horizontal Connector Line (Desktop) */}
           <div className="hidden lg:block absolute top-10 left-20 right-20 h-px bg-gradient-to-r from-accent/30 via-white/5 to-accent/30 -z-10" />

           <div className="grid lg:grid-cols-5 gap-8">
             {steps.map((step, idx) => (
               <div key={idx} className="flex flex-col items-center text-center group/step">
                 <div className={`relative w-20 h-20 rounded-full flex items-center justify-center z-10 mb-8 transition-all duration-500 group-hover/step:scale-110 ${idx === steps.length - 1 ? 'bg-accent/10 border-2 border-accent/60 shadow-[0_0_20px_rgba(211,47,47,0.2)]' : 'bg-primary border border-white/10'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${idx === steps.length - 1 ? 'text-accent' : 'text-white/50 group-hover/step:text-accent'} transition-colors`}>
                       {step.icon}
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary border border-white/10 flex items-center justify-center text-[8px] font-black text-white/30">
                      {idx + 1}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="lg:hidden absolute bottom-[-32px] left-1/2 -translate-x-1/2 text-white/10"><ArrowRight size={24} className="rotate-90" /></div>
                    )}
                 </div>
                 <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest group-hover/step:text-accent transition-colors">{step.title}</h3>
                 <p className="text-xs text-textSecondary leading-relaxed max-w-[180px] font-light">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
