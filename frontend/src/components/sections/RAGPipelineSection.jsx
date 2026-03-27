import React from 'react';
import { Search, FileText, LayoutGrid, Brain, Binary } from 'lucide-react';

const RAGPipelineSection = () => {
  const steps = [
    {
      title: "Query & Trigger",
      icon: <Search size={22} className="text-secondary" />,
      desc: "An initial user query or automated system trigger initiates the decisioning flow."
    },
    {
      title: "Retrieval Layer",
      icon: <FileText size={22} className="text-secondary" />,
      desc: "The system scans credit policy documents, internal underwriting rules, and historical decision logs."
    },
    {
      title: "Context Assembly",
      icon: <LayoutGrid size={22} className="text-secondary" />,
      desc: "Gathers and structures relevant document snippets and rule fragments for targeted model consumption."
    },
    {
      title: "SLM Inference",
      icon: <Brain size={22} className="text-white" />,
      desc: "A domain-trained SLM processes the assembled context to produce a deterministic output."
    },
    {
      title: "Structured Output",
      icon: <Binary size={22} className="text-accent" />,
      desc: "Final machine-readable decision response, with full attribution to original policy documents."
    }
  ];

  return (
    <section className="py-24 bg-primary border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic text-white underline decoration-accent underline-offset-8">RAG-Driven Decisioning</h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto leading-relaxed">
            Vitto utilizes a Retrieval-Augmented Generation (RAG) pipeline to ensure every decision is grounded in institutional policy, not model hallucination.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          {/* Vertical Connector Line */}
          <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-1 bg-border -z-10 group-hover:bg-accent/20 transition-colors duration-500"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex items-start md:items-center gap-8 md:gap-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Visual Icon Node */}
                <div className="w-20 h-20 shrink-0 rounded-full border-2 border-border bg-surface flex items-center justify-center shadow-xl group-hover:border-accent/40 z-10 transition-transform hover:scale-110">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center border border-border">
                    {step.icon}
                  </div>
                </div>

                <div className={`flex-1 p-8 rounded-2xl border border-border bg-surface hover:shadow-2xl transition-all duration-300 relative ${idx % 2 === 0 ? 'text-left' : 'md:text-left'}`}>
                  <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-surface border-l border-t border-border -z-10 ${idx % 2 === 0 ? '-left-2 rotate-45' : 'md:-right-2 md:rotate-[225deg] md:rotate-45 md:left-auto md:-right-2'}`}></div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/5 px-2 py-1 rounded border border-accent/20 italic">Step 0{idx + 1}</span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-textSecondary text-base leading-relaxed">{step.desc}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="text-[10px] font-bold text-textPrimary uppercase tracking-widest border border-border bg-primary px-2 py-1 rounded">Policy Grounded</span>
                    <span className="text-[10px] font-bold text-textPrimary uppercase tracking-widest border border-border bg-primary px-2 py-1 rounded">No Hallucination</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-accent border border-white/20 text-center shadow-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute inset-0 bg-black/10 blur-xl opacity-20"></div>
            <p className="text-white font-bold text-lg italic tracking-tight relative z-10">
              "Vitto enforces a hard retrieval constraint: no output is generated without a verified policy anchor."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RAGPipelineSection;
