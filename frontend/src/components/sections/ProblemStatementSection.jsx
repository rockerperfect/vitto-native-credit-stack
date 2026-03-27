import React from 'react';
import { XCircle, ArrowRight } from 'lucide-react';

const ProblemStatementSection = () => {
  const problems = [
    { title: "Fragmented Ecosystems", desc: "Data is siloed across disparate modules for CRM, LMS, and Underwriting, leading to inconsistent decisioning." },
    { title: "Non-AI Native Cores", desc: "Legacy banking cores were built as transaction ledgers (GLs) in the pre-AI era, making RAG and SLM integration nearly impossible." },
    { title: "Scale Bottlenecks", desc: "Monolithic architectures require heavy manual intervention as loan book sizes grow, increasing operational debt." }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
              The Legacy <br />
              <span className="text-textSecondary italic italic underline decoration-accent underline-offset-8">Infrastructure Debt</span>
            </h2>
            <p className="text-xl text-textSecondary mb-12 leading-relaxed font-light font-medium italic">
              Traditional lending systems are built to record what happened. They are not built to decide what should happen next.
            </p>
            <div className="space-y-6">
              {problems.map((p, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl border border-border bg-primary/40 group hover:border-accent/40 transition-colors">
                  <XCircle className="text-accent shrink-0" size={20} />
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
             <div className="p-10 rounded-3xl border border-accent/20 bg-primary/80 shadow-2xl relative overflow-hidden text-center italic border-dashed">
                <p className="text-xl text-textSecondary mb-8 leading-relaxed">
                  "Banking cores are transaction reactors. Vitto is a **decisioning actor.**"
                </p>
                <div className="flex justify-center gap-2 items-center text-accent font-bold uppercase tracking-widest text-xs">
                   Legacy vs. Vitto Paradigm
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
