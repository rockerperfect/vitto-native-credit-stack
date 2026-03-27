import React from 'react';
import { Bot } from 'lucide-react';

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
      <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="4s" repeatCount="indefinite" />
    </line>
  </svg>,
  // Collection Intelligence: Priority target
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <rect x="20" y="15" width="40" height="50" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
    <line x1="30" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="2"/>
    <line x1="30" y1="45" x2="50" y2="45" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5"/>
    <line x1="30" y1="55" x2="40" y2="55" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
    <circle cx="65" cy="15" r="5" fill="currentColor" className="animate-pulse"/>
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

const ModulesGrid = () => {
  const modules = [
    {
      icon: ModuleVisuals[0],
      title: "Data-Based Assessment",
      items: [
        "Aggregates bureau, bank statements, device, and behavioral signals",
        "Normalizes into structured feature store",
        "Supports real-time and batch ingestion"
      ]
    },
    {
      icon: ModuleVisuals[1],
      title: "ML Model",
      items: [
        "Supervised learning models for risk scoring",
        "Versioned models with audit trails",
        "Feature importance tracking for explainability"
      ]
    },
    {
      icon: ModuleVisuals[2],
      title: "Rule Engine & Decisioning",
      items: [
        "Deterministic policy execution",
        "Configurable rules (thresholds, eligibility)",
        "Combines model output + policy constraints"
      ]
    },
    {
      icon: ModuleVisuals[3],
      title: "Fraud Intelligence",
      items: [
        "Device fingerprinting",
        "Identity consistency checks",
        "Transaction anomaly detection"
      ]
    },
    {
      icon: ModuleVisuals[4],
      title: "Collection Intelligence",
      items: [
        "Recovery probability scoring",
        "Dynamic prioritization of accounts",
        "Strategy allocation (agent vs automated)"
      ]
    },
    {
      icon: ModuleVisuals[5],
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
