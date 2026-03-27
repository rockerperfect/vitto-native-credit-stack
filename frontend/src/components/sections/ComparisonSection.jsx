import React from 'react';
import { Check, X, ShieldAlert, Zap, Cpu, Server, Workflow, FileText } from 'lucide-react';

const ComparisonSection = () => {
  const dimensions = [
    { dimension: "System Design", retrofit: "Layered on legacy", native: "Built around decisioning", icon: <Server size={18} /> },
    { dimension: "Data Access", retrofit: "Fragmented across systems", native: "Unified data layer", icon: <Cpu size={18} /> },
    { dimension: "Decision Speed", retrofit: "Batch / delayed", native: "Real-time", icon: <Zap size={18} /> },
    { dimension: "Explainability", retrofit: "Limited", native: "Built-in", icon: <FileText size={18} /> },
    { dimension: "Integration", retrofit: "Complex", native: "Native", icon: <Workflow size={18} /> },
    { dimension: "Compliance", retrofit: "Reactive", native: "Designed-in", icon: <ShieldAlert size={18} /> }
  ];

  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tighter">
            Architectural <span className="text-accent underline decoration-accent decoration-2 underline-offset-8 italic font-light font-medium italic">Comparison</span>
          </h2>
          <p className="text-textSecondary font-light italic">
            A dimension-by-dimension breakdown of structural differences.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-border shadow-3xl bg-primary">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-surface/50">
                <th className="p-8 text-xs font-bold uppercase tracking-widest text-textSecondary italic">Dimension</th>
                <th className="p-8 text-xs font-bold uppercase tracking-widest text-textSecondary italic">Retrofit AI</th>
                <th className="p-8 text-xs font-bold uppercase tracking-widest text-accent italic">AI-Native Infrastructure</th>
              </tr>
            </thead>
            <tbody>
              {dimensions.map((dim, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-surface/30 transition-colors group">
                  <td className="p-8 flex items-center gap-4 text-white font-bold text-sm tracking-tight border-r border-border/50">
                    <span className="opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all animate-in fade-in zoom-in">{dim.icon}</span>
                    {dim.dimension}
                  </td>
                  <td className="p-8 text-textSecondary text-sm italic font-medium opacity-60 border-r border-border/50">
                    <div className="flex items-center gap-2">
                       <X size={14} className="text-red-500/50" /> {dim.retrofit}
                    </div>
                  </td>
                  <td className="p-8 text-white text-sm font-bold border-accent/20">
                    <div className="flex items-center gap-3">
                       <Check size={16} className="text-accent" /> {dim.native}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
