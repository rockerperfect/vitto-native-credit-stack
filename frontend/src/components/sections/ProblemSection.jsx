import React from 'react';
import { Layers, ZapOff, AlertCircle, FileLock } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <Layers size={24} className="text-textSecondary" />,
      title: "Fragmented Systems",
      description: "LOS, LMS, and CRM operate in silos with no shared data layer, leading to operational friction and disjointed insights."
    },
    {
      icon: <ZapOff size={24} className="text-textSecondary" />,
      title: "Non-AI Native Vendors",
      description: "AI is layered on top of legacy systems without integration into core decision flows, limiting actual intelligence."
    },
    {
      icon: <AlertCircle size={24} className="text-textSecondary" />,
      title: "Reactive Collections",
      description: "Collections rely on manual prioritization with no predictive intelligence or early warning signals."
    },
    {
      icon: <FileLock size={24} className="text-textSecondary" />,
      title: "Static Rule Engines",
      description: "Rules are fixed, manually updated, and do not intelligently adapt to evolving portfolio risk behavior."
    }
  ];

  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic tracking-tight underline decoration-accent decoration-2 underline-offset-8">
            The Reality of Today's Lending Technology
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto italic font-light">
            Traditional infrastructure executes transactions but fails at real-time credit decisioning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, idx) => (
            <div 
              key={idx} 
              className="group p-8 border border-border rounded-xl bg-primary hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface border border-border transition-colors text-textSecondary">
                  {React.cloneElement(problem.icon, { className: 'group-hover:text-accent transition-colors' })}
                </div>
                <span className="text-4xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors uppercase tracking-tight italic">{problem.title}</h3>
              <p className="text-textSecondary leading-relaxed italic font-light">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
