import React from 'react';
import { XCircle, ArrowRight } from 'lucide-react';

const CollectionsProblem = () => {
  const problems = [
    { title: "Bucket Allocation", desc: "Static allocation based on days-past-due (DPD) without behavioral or risk context." },
    { title: "No Prioritization", desc: "Agents spend 80% of their effort on 20% of recoverability, with no intelligent case routing." },
    { title: "Fragmented Channels", desc: "Calls, SMS, and WhatsApp operate as siloed communication streams, leading to customer fatigue." },
    { title: "Operational Inefficiency", desc: "High headcount requirements for manual follow-ups with low per-agent recovery rates." }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Legacy Collections: <span className="text-textSecondary italic">The Inefficiency of Static Rules</span>
            </h2>
            <p className="text-lg text-textSecondary mb-8 leading-relaxed font-light">
              Manual recovery efforts are inherently non-scalable. Without predictive scoring, institutions remain reactive to delinquency rather than proactive about recovery.
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
                  "Traditional Collections relies on workforce volume. Vitto Collections relies on **decision precision.**"
                </p>
                <div className="flex justify-center gap-2 items-center text-accent font-bold uppercase tracking-widest text-xs">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                   Vitto Intelligence Paradigm
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsProblem;
