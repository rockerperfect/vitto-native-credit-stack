import React from 'react';
import { Target, Search, ShieldAlert, GitBranch } from 'lucide-react';

const PrinciplesSection = () => {
  const principles = [
    { title: "Decision-First Design", icon: <Target className="text-secondary" />, desc: "Architecture optimized for outputting actionable credit decisions, not just storing records." },
    { title: "Explainability", icon: <Search className="text-secondary" />, desc: "Every AI-led action is traceable to its source policy fragment for full transparency." },
    { title: "Policy Alignment", icon: <ShieldAlert className="text-secondary" />, desc: "Deterministic guardrails ensure no decisions are made outside of institutional risk parameters." },
    { title: "System Integration", icon: <GitBranch className="text-secondary" />, desc: "Built to sit atop legacy cores, enhancing them with modern agentic capabilities." }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight underline decoration-accent decoration-2 underline-offset-8">
            Core Principles
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed font-light">
            Our engineering decisions are guided by an obsession with institutional safety and operational speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((pr, idx) => (
            <div key={idx} className="p-10 rounded-2xl border bg-primary shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group">
               <div className="w-16 h-16 rounded-xl bg-surface border-2 border-border flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-accent transition-all">
                  {pr.icon}
               </div>

               <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent transition-colors">
                  {pr.title}
               </h3>
               
               <p className="text-textSecondary leading-relaxed text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity italic">
                  {pr.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
