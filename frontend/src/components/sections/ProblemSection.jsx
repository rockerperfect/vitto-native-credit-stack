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
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Legacy System Bottleneck</h2>
          <p className="text-textSecondary text-lg">
            Traditional infrastructure executes transactions but fails at real-time credit decisioning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, idx) => (
            <div 
              key={idx} 
              className="group p-8 border border-border rounded-xl bg-primary hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface border border-border mb-6 transition-colors text-textSecondary">
                {React.cloneElement(problem.icon, { className: 'group-hover:text-accent transition-colors' })}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-textSecondary leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
