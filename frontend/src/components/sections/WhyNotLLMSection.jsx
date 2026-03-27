import React from 'react';
import { XCircle, ShieldCheck, AlertTriangle, FileSearch } from 'lucide-react';

const WhyNotLLMSection = () => {
  const points = [
    {
      title: "No Policy Awareness",
      desc: "Base LLMs are trained on general internet data and cannot access internal credit policy documents or institutional rules without heavy fine-tuning.",
      icon: <FileSearch className="text-secondary" />
    },
    {
      title: "Hallucination Risk",
      desc: "Generic models are designed for creativity. In lending, probabilistic generation leads to high risk and non-compliant decision justification.",
      icon: <AlertTriangle className="text-secondary" />
    },
    {
      title: "No Audit Trail",
      desc: "Black-box architectures make it impossible to trace exactly which part of a policy document influenced a specific agent response or decision.",
      icon: <XCircle className="text-secondary" />
    }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
              The Problem with <br />
              <span className="text-textSecondary italic italic underline decoration-accent underline-offset-8">Generic LLMs</span>
            </h2>
            <p className="text-xl text-textSecondary mb-12 leading-relaxed font-light font-medium italic">
              Public LLMs are designed for broad creativity. Vitto agents are designed for **BFSI precision.**
            </p>
            <div className="space-y-6">
              {points.map((p, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl border border-border bg-primary/40 group hover:border-accent/40 transition-colors">
                  <div className="shrink-0 group-hover:scale-110 transition-transform">{p.icon}</div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-sm text-textSecondary">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative group">
             <div className="absolute -inset-4 bg-accent/5 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <div className="p-10 rounded-3xl border border-accent/20 bg-primary shadow-2xl relative overflow-hidden text-center italic border-dashed">
                <p className="text-xl text-textSecondary mb-8 leading-relaxed">
                  "Lending isn't about creativity. It's about **policy integrity.**"
                </p>
                <div className="flex justify-center gap-2 items-center text-accent font-bold uppercase tracking-widest text-xs">
                   <ShieldCheck size={16} /> Vitto Agentic Architecture
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNotLLMSection;
