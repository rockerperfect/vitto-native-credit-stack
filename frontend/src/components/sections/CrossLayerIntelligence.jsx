import React from 'react';
import { Database, RefreshCw, Zap, Workflow } from 'lucide-react';

const CrossLayerIntelligence = () => {
  const concepts = [
    {
      icon: <Database className="text-accent" size={24} />,
      title: "Unified Data Layer",
      desc: "No data duplication or siloed state. Every module across all 5 layers reads from and writes to a single source of truth."
    },
    {
      icon: <RefreshCw className="text-accent" size={24} />,
      title: "Closed Feedback Loops",
      desc: "Performance and collection data feeds directly back into underwriting models to refine risk assessment in real-time."
    },
    {
      icon: <Zap className="text-accent" size={24} />,
      title: "Event-Driven Logic",
      desc: "Actions at any stage of the lifecycle trigger immediate, cross-layer automated decisions based on global state."
    }
  ];

  return (
    <section className="py-24 bg-surface border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-block px-3 py-1 mb-6 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit italic">
            <Workflow size={14} /> System Connectivity
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
            Decisions are not isolated. <br />
            <span className="text-textSecondary font-light italic underline decoration-accent underline-offset-8">Every layer connects and consumes.</span>
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed max-w-2xl">
            Vitto moves beyond modularity to unified intelligence. Every interaction—from a customer lead to a collections PTP—contributes to a shared decisioning system across the entire institution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {concepts.map((concept, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-border bg-primary hover:bg-surface hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent transition-all">
                {concept.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors">{concept.title}</h3>
              <p className="text-textSecondary leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity italic">{concept.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrossLayerIntelligence;
