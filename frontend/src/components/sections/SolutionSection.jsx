import React from 'react';
import { Cpu, Network, FileSearch } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: <Cpu size={20} />,
      title: "Domain-trained Models",
      tag: "BFSI-SLM",
      desc: "SLMs built specifically for BFSI compliance and precision."
    },
    {
      icon: <Network size={20} />,
      title: "Unified Architecture",
      tag: "Core Nexus",
      desc: "One central nexus mapping data across Acquisition, LOS, and LMS."
    },
    {
      icon: <FileSearch size={20} />,
      title: "Explainability",
      tag: "SOC2",
      desc: "Complete deterministic traceability for every credit decision made."
    }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full -translate-x-1/2 -z-10"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-[1.15] text-white relative z-10">
            AI-native decisioning meets <br />
            <span className="text-accent underline decoration-white/10 underline-offset-8">full stack operational automation.</span>
          </h2>
          
          <div className="space-y-8 relative z-10">
            <p className="text-lg text-textSecondary leading-relaxed font-light border-l-2 border-white/5 pl-8">
              Vitto integrates data ingestion, model inference, and rule execution into a single pipeline. Decisions are generated in real time, with full traceability to policy and data inputs.
            </p>
            
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-base text-white/80 italic font-light relative z-10">
                "Traditional LOS systems execute transactions. <span className="text-accent font-semibold">Vitto executes credit decisions.</span>"
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-5">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="group glass-card p-7 flex gap-6 items-start hover:translate-x-2 transition-all duration-500 hover:bg-white/[0.04] relative overflow-hidden"
            >
              {/* Icon: larger with gradient glow pill */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent relative group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(211,47,47,0)] group-hover:shadow-[0_0_20px_rgba(211,47,47,0.3)]">
                {feat.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{feat.title}</h3>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/40 group-hover:text-accent/70 transition-colors">{feat.tag}</div>
                </div>
                <p className="text-textSecondary text-sm leading-relaxed font-light">{feat.desc}</p>
                {/* Stat bar */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-accent/30 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-r" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
