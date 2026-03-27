import React from 'react';
import { Cpu, Network, FileSearch } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: <Cpu size={20} className="text-accent" />,
      title: "Domain-trained Models",
      desc: "SLMs built specifically for BFSI compliance and precision."
    },
    {
      icon: <Network size={20} className="text-accent" />,
      title: "Unified Architecture",
      desc: "One central nexus mapping data across Acquisition, LOS, and LMS."
    },
    {
      icon: <FileSearch size={20} className="text-accent" />,
      title: "Explainability",
      desc: "Complete deterministic traceability for every credit decision made."
    }
  ];

  return (
    <section className="py-24 bg-primary text-textPrimary">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            AI-native decisioning meets <span className="text-accent">full stack operational automation.</span>
          </h2>
          <p className="text-lg text-textSecondary mb-8 leading-relaxed">
            Vitto integrates data ingestion, model inference, and rule execution into a single pipeline. Decisions are generated in real time, with full traceability to policy and data inputs, removing the gap between data science and operations.
          </p>
          <div className="border-l border-border pl-6 space-y-4">
            <p className="text-base text-textSecondary italic">
              "Traditional LOS systems execute transactions. Vitto executes credit decisions."
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          {features.map((feat, idx) => (
            <div key={idx} className="flex gap-5 p-6 rounded-xl border border-border bg-surface hover:translate-x-2 transition-transform duration-300">
              <div className="mt-1 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  {feat.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feat.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
