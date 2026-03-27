import React from 'react';
import { Database, BrainCircuit, GitMerge, ShieldAlert, Target, Bot, ArrowRight } from 'lucide-react';

const AILayerSection = () => {
  const modules = [
    {
      icon: <Database size={24} />,
      title: "Data-Based Assessment",
      desc: "Aggregates bureau, banking, and behavioral data into a single, unified risk profile."
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "ML Model Ensemble",
      desc: "Risk scoring using supervised models trained specifically on portfolio-level data."
    },
    {
      icon: <GitMerge size={24} />,
      title: "Rule Engine & Decisioning",
      desc: "Policy execution mapped with deterministic outputs ensuring total regulatory compliance."
    },
    {
      icon: <ShieldAlert size={24} />,
      title: "Fraud Intelligence",
      desc: "Detects anomalies dynamically across identity, device, and transaction layers."
    },
    {
      icon: <Target size={24} />,
      title: "Collection Intelligence",
      desc: "Predicts recovery probability and intelligently prioritizes delinquent accounts."
    },
    {
      icon: <Bot size={24} />,
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
