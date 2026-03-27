import React from 'react';
import { Database, BrainCircuit, GitMerge, ShieldAlert, Target, Bot } from 'lucide-react';

const AILayerSection = () => {
  const modules = [
    {
      icon: <Database size={24} className="text-accent" />,
      title: "Data-Based Assessment",
      desc: "Aggregates bureau, banking, and behavioral data into a single, unified risk profile."
    },
    {
      icon: <BrainCircuit size={24} className="text-accent" />,
      title: "ML Model",
      desc: "Risk scoring using supervised models trained specifically on portfolio-level data."
    },
    {
      icon: <GitMerge size={24} className="text-accent" />,
      title: "Rule Engine & Decisioning",
      desc: "Policy execution mapped with deterministic outputs ensuring total regulatory compliance."
    },
    {
      icon: <ShieldAlert size={24} className="text-accent" />,
      title: "Fraud Intelligence",
      desc: "Detects anomalies dynamically across identity, device, and transaction layers."
    },
    {
      icon: <Target size={24} className="text-accent" />,
      title: "Collection Intelligence",
      desc: "Predicts recovery probability and intelligently prioritizes delinquent accounts."
    },
    {
      icon: <Bot size={24} className="text-accent" />,
      title: "Agentic AI Layer",
      desc: "Executes complex query resolution and workflow assistance securely via SLMs."
    }
  ];

  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Modules Driving Decisioning</h2>
          <p className="text-textSecondary text-lg">
            A fully integrated intelligence layer powering every stage of the lending lifecycle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className="group p-8 border border-border rounded-xl bg-primary hover:border-accent/50 hover:shadow-[0_0_20px_rgba(211,47,47,0.1)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6 w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {mod.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-textPrimary">{mod.title}</h3>
              <p className="text-textSecondary leading-relaxed flex-1 mb-6">{mod.desc}</p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center text-sm font-medium text-textSecondary group-hover:text-accent transition-colors">
                  Explore Module <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">&rarr;</span>
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
