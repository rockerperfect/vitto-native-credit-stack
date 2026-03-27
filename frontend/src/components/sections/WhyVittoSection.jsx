import React from 'react';
import { Layers, Cpu, Workflow, ShieldCheck, Zap } from 'lucide-react';

const WhyVittoSection = () => {
  const points = [
    {
      title: "Unified Architecture",
      icon: <Layers size={24} className="text-secondary" />,
      desc: "LMS, CRM, and Collections layers all share a single predictive core, ensuring a 360-degree real-time view of every borrower."
    },
    {
      title: "AI-Native from Ground Up",
      icon: <Cpu size={24} className="text-secondary" />,
      desc: "Our data schema is optimized for RAG and SLM pipelines, enabling deterministic AI decisioning without legacy workarounds."
    },
    {
      title: "Built for BFSI Workflows",
      icon: <Workflow size={24} className="text-secondary" />,
      desc: "Compliance, auditability, and regulatory policy alignment are core primitives, not optional features."
    }
  ];

  return (
    <section className="py-24 bg-primary text-textPrimary border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit mx-auto italic">
            <Zap size={14} /> The Vitto Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
             Engineering the Future of <br />
             <span className="text-accent italic font-light">Digital Credit</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
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

               <div className="mt-8 flex items-center gap-2 text-accent/40 group-hover:text-accent transition-colors font-bold uppercase tracking-widest text-[10px]">
                   <ShieldCheck size={14} /> Verified Architecture
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVittoSection;
