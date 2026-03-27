import React from 'react';
import { Database, BrainCircuit, GitMerge, ShieldAlert, Target, Bot } from 'lucide-react';

const ModulesGrid = () => {
  const modules = [
    {
      icon: <Database size={24} className="text-accent" />,
      title: "Data-Based Assessment",
      items: [
        "Aggregates bureau, bank statements, device, and behavioral signals",
        "Normalizes into structured feature store",
        "Supports real-time and batch ingestion"
      ]
    },
    {
      icon: <BrainCircuit size={24} className="text-accent" />,
      title: "ML Model",
      items: [
        "Supervised learning models for risk scoring",
        "Versioned models with audit trails",
        "Feature importance tracking for explainability"
      ]
    },
    {
      icon: <GitMerge size={24} className="text-accent" />,
      title: "Rule Engine & Decisioning",
      items: [
        "Deterministic policy execution",
        "Configurable rules (thresholds, eligibility)",
        "Combines model output + policy constraints"
      ]
    },
    {
      icon: <ShieldAlert size={24} className="text-accent" />,
      title: "Fraud Intelligence",
      items: [
        "Device fingerprinting",
        "Identity consistency checks",
        "Transaction anomaly detection"
      ]
    },
    {
      icon: <Target size={24} className="text-accent" />,
      title: "Collection Intelligence",
      items: [
        "Recovery probability scoring",
        "Dynamic prioritization of accounts",
        "Strategy allocation (agent vs automated)"
      ]
    },
    {
      icon: <Bot size={24} className="text-accent" />,
      title: "Agentic AI Layer",
      items: [
        "Executes query handling and workflow support",
        "Operates on internal knowledge + policy",
        "Policy-bound inference flows"
      ]
    }
  ];

  return (
    <section className="py-24 bg-primary border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">Modular Intelligence Layer</h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            Vitto consists of core modules that integrate into one seamless pipeline, covering the entire BFSI operational lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className="p-8 border border-border rounded-xl bg-surface hover:border-accent/40 hover:shadow-[0_0_30px_rgba(211,47,47,0.08)] transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {mod.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent transition-colors underline decoration-border group-hover:decoration-accent underline-offset-8">
                {mod.title}
              </h3>
              <ul className="space-y-4 flex-1">
                {mod.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-textSecondary leading-relaxed selection:bg-accent/40">
                    <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-10 px-5 py-2.5 rounded-lg border border-border text-xs font-semibold uppercase tracking-widest text-textSecondary hover:text-white hover:border-accent transition-all flex items-center justify-center gap-2 group-hover:bg-accent/5">
                Technical Docs <Bot size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
