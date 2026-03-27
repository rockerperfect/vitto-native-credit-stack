import React, { useState } from 'react';
import { Database, Filter, Brain, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';

const DecisioningArchitecture = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Data Ingestion",
      icon: <Database className="w-5 h-5" />,
      desc: "Aggregates raw data from bureaus, banking APIs, and internal sources into a unified ingestion layer.",
      details: ["Real-time & Batch support", "Automated normalization", "Source verification"]
    },
    {
      id: 1,
      title: "Feature Engine",
      icon: <Filter className="w-5 h-5" />,
      desc: "Transforms raw ingestion into structured features mapping to BFSI logic and behavioral patterns.",
      details: ["Behavioral behavioral signals", "Identity data normalization", "Feature store integration"]
    },
    {
      id: 2,
      title: "ML Model Inference",
      icon: <Brain className="w-5 h-5" />,
      desc: "Executes supervised risk models trained strictly on institution-specific portfolio data.",
      details: ["Supervised risk scoring", "Explainable feature importance", "Versioned model registry"]
    },
    {
      id: 3,
      title: "Rule Execution",
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: "Maps model outcomes against deterministic credit policy and regulatory constraints.",
      details: ["Threshold-based eligibility", "Regulatory compliance checks", "Policy-bound guardrails"]
    },
    {
      id: 4,
      title: "Decision Output",
      icon: <CheckCircle2 className="w-5 h-5" />,
      desc: "Final decision generation (Approve, Reject, or Manual Refer) with full traceability.",
      details: ["Deterministic logic", "Full audit log generation", "Policy justification"]
    },
    {
      id: 5,
      title: "Downstream Action",
      icon: <TrendingUp className="w-5 h-5" />,
      desc: "Triggers actions in core lending systems—from LOS disbursement to LMS servicing.",
      details: ["LOS integration", "LMS ledger updates", "Automated communication"]
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Decisioning Architecture Flow</h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            The Vitto pipeline unifies data and policy into a single, deterministic stream, replacing fragmented transactions with intelligent credit decisions.
          </p>
        </div>

        {/* Pipeline Diagram (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="hidden lg:flex items-center justify-between gap-4 mb-20 relative">
          {/* Connector Line */}
          <div className="absolute top-[26px] left-[5%] right-[5%] h-[2px] bg-border -z-10"></div>
          
          {steps.map((step, idx) => (
            <button 
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className="flex flex-col items-center group relative z-10 w-40 focus:outline-none"
            >
              <div 
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-lg ${
                  activeStep === step.id 
                  ? 'border-accent bg-accent text-white shadow-accent/25 scale-110' 
                  : 'border-border bg-primary text-textSecondary group-hover:border-accent group-hover:text-accent'
                }`}
              >
                {step.icon}
              </div>
              <div 
                className={`mt-4 text-xs font-semibold uppercase tracking-wider text-center transition-colors ${
                  activeStep === step.id ? 'text-accent' : 'text-textSecondary group-hover:text-textPrimary'
                }`}
              >
                {step.title}
              </div>
            </button>
          ))}
        </div>

        {/* Vertical Pipeline for Mobile */}
        <div className="lg:hidden space-y-4 mb-20">
          {steps.map((step, idx) => (
            <button 
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full p-4 rounded-lg flex items-center gap-4 border transition-all ${
                activeStep === step.id 
                ? 'border-accent bg-accent/5 text-textPrimary' 
                : 'border-border bg-primary text-textSecondary'
              }`}
            >
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${
                activeStep === step.id ? 'border-accent text-accent' : 'border-border'
              }`}>
                {step.id + 1}
              </div>
              <span className="font-semibold text-sm">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Detail View Container */}
        <div className="bg-primary/50 rounded-2xl border border-border p-8 md:p-12 min-h-[320px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-12 group transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] -z-10 animate-pulse"></div>
          
          <div className="md:w-1/3">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-border text-accent flex items-center justify-center mb-6 shadow-xl">
              {steps[activeStep].icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              {steps[activeStep].title}
            </h3>
            <div className="h-1 bg-accent/50 w-12 rounded-full mb-6"></div>
            <p className="text-textSecondary text-lg leading-relaxed mb-6">
              {steps[activeStep].desc}
            </p>
          </div>

          <div className="md:w-2/3 md:pt-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">Core Capabilities</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {steps[activeStep].details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface/50 text-textPrimary text-sm font-medium hover:bg-surface hover:border-accent/40 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisioningArchitecture;
