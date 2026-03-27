import React from 'react';
import { ArrowRight, FileText, UserCheck, CheckCircle, Database, Cpu, Settings, PlayCircle, Zap } from 'lucide-react';

const WorkflowComparison = () => {
  const traditional = [
    { label: "Application", icon: <FileText size={18} /> },
    { label: "Manual Check", icon: <UserCheck size={18} /> },
    { label: "Decision", icon: <CheckCircle size={18} /> },
    { label: "Update", icon: <PlayCircle size={18} /> }
  ];

  const vitto = [
    { label: "Data", icon: <Database size={18} /> },
    { label: "Model", icon: <Cpu size={18} /> },
    { label: "Rule Engine", icon: <Settings size={18} /> },
    { label: "Decision", icon: <CheckCircle size={18} /> },
    { label: "Action", icon: <Zap size={18} /> }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white uppercase tracking-tighter italic">
            Transitioning to <span className="text-accent underline decoration-accent decoration-1 underline-offset-8">Decision-First</span> Architecture
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Traditional LOS */}
          <div className="p-8 rounded-3xl border border-border bg-primary/30 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="text-4xl font-bold uppercase tracking-widest text-textSecondary italic">Legacy</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              {traditional.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center gap-3 w-32">
                    <div className="w-12 h-12 rounded-xl bg-primary border border-border flex items-center justify-center text-textSecondary opacity-60">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-textSecondary italic text-center leading-tight">
                      {step.label}
                    </span>
                  </div>
                  {idx < traditional.length - 1 && (
                    <div className="md:block hidden">
                      <ArrowRight className="text-border" size={20} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
             <div className="w-px h-12 bg-gradient-to-b from-border via-accent/40 to-border"></div>
          </div>

          {/* Vitto Flow */}
          <div className="p-8 rounded-3xl border border-accent/40 bg-primary shadow-[0_0_50px_rgba(211,47,47,0.1)] relative group overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="absolute top-0 right-0 p-4 text-accent opacity-20">
               <span className="text-4xl font-bold uppercase tracking-widest italic">Vitto</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              {vitto.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center gap-3 w-32 group/step">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover/step:scale-110 group-hover/step:rotate-12 transition-all shadow-[0_0_20px_rgba(211,47,47,0.1)]">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white italic text-center leading-tight">
                      {step.label}
                    </span>
                  </div>
                  {idx < vitto.length - 1 && (
                    <div className="md:block hidden">
                      <ArrowRight className="text-accent animate-pulse" size={20} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowComparison;
