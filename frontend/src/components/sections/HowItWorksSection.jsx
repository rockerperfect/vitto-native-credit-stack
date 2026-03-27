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
           <div className="hidden lg:block absolute top-10 left-10 right-10 h-0.5 bg-border -z-10 group-hover:bg-accent/20 transition-colors"></div>

           <div className="grid lg:grid-cols-5 gap-8">
             {steps.map((step, idx) => (
               <div key={idx} className="flex flex-col items-center text-center group/step">
                 <div className="w-20 h-20 rounded-full border-2 border-border bg-surface flex items-center justify-center shadow-xl group-hover/step:border-accent/40 group-hover/step:bg-primary z-10 transition-all transform hover:scale-110 mb-8 relative">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center border border-border group-hover:border-accent group-hover:text-accent">
                       {step.icon}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="lg:hidden absolute bottom-[-32px] left-1/2 -translate-x-1/2 text-border"><ArrowRight size={24} className="rotate-90" /></div>
                    )}
                 </div>
                 <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest">{step.title}</h3>
                 <p className="text-xs text-textSecondary leading-relaxed max-w-[200px]">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
