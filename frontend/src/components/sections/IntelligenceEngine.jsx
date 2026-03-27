import React from 'react';
import { BrainCircuit, LineChart, Cpu, Workflow, GitPullRequest, ArrowUpRight } from 'lucide-react';

const IntelligenceEngine = () => {
  const points = [
    {
      icon: <BrainCircuit size={24} className="text-secondary" />,
      title: "Recovery Scoring Models",
      desc: "Each delinquent account is assigned a dynamic recovery probability score (0-100) based on historical repayment signals and current behavioral context."
    },
    {
      icon: <LineChart size={24} className="text-secondary" />,
      title: "Behavioral Signal Tracking",
      desc: "Monitors payment stickiness, device footprint consistency, and interaction patterns to refine strategy every 24 hours."
    },
    {
      icon: <Cpu size={24} className="text-white" />,
      title: "Dynamic Strategy Mapping (DSM)",
      desc: "Automatically routes accounts between digital automation (bot-led) and human intervention (agent-led) to maximize ROI."
    }
  ];

  return (
    <section className="py-24 bg-primary text-textPrimary border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit mx-auto italic">
            <LineChart size={14} /> Recovery Intelligence Nexus (RIN)
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
             How Vitto Intelligence <br />
             <span className="text-accent italic font-light">Powers Recovery</span>
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed font-medium">
            Vitto moves beyond modularity to unified intelligence. Every interaction—from a customer lead to a collections PTP—contributes to a shared decisioning system.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {points.map((p, idx) => (
            <div key={idx} className="group p-10 rounded-3xl border border-border bg-surface hover:bg-primary hover:border-accent/40 shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] -z-10 group-hover:bg-accent/10 transition-colors"></div>
               
               <div className="w-14 h-14 rounded-2xl bg-primary border border-border flex items-center justify-center mb-10 group-hover:bg-accent/10 group-hover:border-accent group-hover:text-accent transition-all shadow-xl group-hover:rotate-12">
                  {p.icon}
               </div>

               <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent transition-colors underline decoration-border group-hover:decoration-accent underline-offset-8">
                  {p.title}
               </h3>
               
               <p className="text-textSecondary leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity italic">
                  {p.desc}
               </p>

               <div className="mt-8 flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                   <div className="w-2 h-2 rounded-full bg-accent"></div>
                   <div className="w-8 h-0.5 bg-border group-hover:bg-accent/40 lg:w-4"></div>
                   <ArrowUpRight size={14} className="text-accent" />
               </div>
            </div>
          ))}
        </div>

        {/* System Diagram Representation */}
        <div className="p-8 md:p-12 rounded-3xl border border-accent/20 bg-surface/50 shadow-2xl relative overflow-hidden group">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 px-4">
              <div className="flex flex-col items-center gap-4 text-center">
                 <div className="w-16 h-16 rounded-full bg-primary border-2 border-border flex items-center justify-center shadow-lg"><Workflow size={24} className="text-textSecondary" /></div>
                 <div className="text-[10px] uppercase tracking-widest font-bold text-textSecondary">Account Input</div>
              </div>
              
              <div className="hidden md:flex flex-1 h-0.5 bg-border relative items-center justify-center">
                 <div className="absolute w-2 h-2 rounded-full bg-accent animate-ping"></div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center">
                 <div className="w-20 h-20 rounded-full bg-accent border-4 border-white/10 flex items-center justify-center shadow-2xl scale-110 shadow-accent/20"><BrainCircuit size={32} className="text-white" /></div>
                 <div className="text-[10px] uppercase tracking-widest font-bold text-accent">Decision Pipeline</div>
              </div>

              <div className="hidden md:flex flex-1 h-0.5 bg-border relative items-center justify-center">
                 <div className="absolute w-2 h-2 rounded-full bg-accent animate-ping"></div>
              </div>

              <div className="flex items-center gap-12">
                 <div className="flex flex-col items-center gap-4 text-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-primary border-2 border-border flex items-center justify-center shadow-lg"><GitPullRequest size={24} className="text-textSecondary" /></div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-textSecondary">Bot Automation</div>
                 </div>
                 <div className="flex flex-col items-center gap-4 text-center group/opt">
                    <div className="w-16 h-16 rounded-full bg-primary border-2 border-border flex items-center justify-center shadow-lg group-hover/opt:border-accent transition-colors"><Cpu size={24} className="text-textSecondary group-hover/opt:text-accent transition-colors" /></div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-textSecondary group-hover/opt:text-accent transition-colors">Agent Escalation</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceEngine;
