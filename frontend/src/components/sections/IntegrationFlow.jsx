import React from 'react';
import { Server, Zap, Cpu, Reply, ArrowRight } from 'lucide-react';

const IntegrationFlow = () => {
  const steps = [
    { title: "External System", icon: <Server size={24} className="text-secondary" />, desc: "Your core banking or lending platform." },
    { title: "Vitto Gateway", icon: <Zap size={24} className="text-accent" />, desc: "RESTful API handling authentication & routing." },
    { title: "Decision Engine", icon: <Cpu size={24} className="text-white" />, desc: "Processing logic & institutional policy checks." },
    { title: "Response Payloads", icon: <Reply size={24} className="text-secondary" />, desc: "Structured JSON for immediate execution." }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
            Standardized <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">Integration Flow</span>
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed font-light">
            Vitto provides a synchronous integration pattern designed for high-availability production environments.
          </p>
        </div>

        <div className="relative group p-10 md:p-16 rounded-3xl border border-accent/20 bg-primary/50 shadow-3xl overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10 group-hover:bg-accent/10 transition-colors"></div>
           
           <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center group/item max-w-[200px]">
                    <div className="w-20 h-20 rounded-2xl bg-surface border-2 border-border flex items-center justify-center mb-6 shadow-2xl group-hover/item:border-accent transition-all group-hover:scale-110">
                       {step.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest">{step.title}</h3>
                    <p className="text-xs text-textSecondary italic leading-relaxed font-medium">{step.desc}</p>
                  </div>
                  
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex flex-1 items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                       <ArrowRight size={24} className="text-accent animate-pulse" />
                       <div className="w-full h-0.5 bg-accent/20 lg:w-12"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationFlow;
