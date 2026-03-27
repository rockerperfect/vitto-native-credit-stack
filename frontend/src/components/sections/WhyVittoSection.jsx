import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

const WhyVittoVisuals = [

  // Unified Architecture: Layered stack
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform duration-500">
    <path d="M15 25 L40 15 L65 25 L40 35 L15 25Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M15 40 L40 30 L65 40 L40 50 L15 40Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
    <path d="M15 55 L40 45 L65 55 L40 65 L15 55Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.02"/>
    <path d="M40 15 V65" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.4"/>
  </svg>,
  // AI-Native: Neural circuit
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform duration-500">
    <circle cx="40" cy="40" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="40" cy="40" r="4" fill="currentColor"/>
    <path d="M40 28 V15 M40 52 V65 M28 40 H15 M52 40 H65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M31.5 31.5 L22 22 M48.5 48.5 L58 58 M31.5 48.5 L22 58 M48.5 31.5 L58 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
  </svg>,
  // BFSI Workflows: Document with verified seal
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform duration-500">
    <path d="M20 15 H50 L60 25 V65 H20 V15Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
    <path d="M50 15 V25 H60" stroke="currentColor" strokeWidth="2"/>
    <line x1="30" y1="35" x2="50" y2="35" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
    <line x1="30" y1="45" x2="50" y2="45" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
    <circle cx="40" cy="55" r="10" fill="primary" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M36 55 L39 58 L45 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
];

const WhyVittoSection = () => {
  const points = [
    {
      title: "Unified Architecture",
      icon: WhyVittoVisuals[0],
      desc: "LMS, CRM, and Collections layers all share a single predictive core, ensuring a 360-degree real-time view of every borrower."
    },
    {
      title: "AI-Native from Ground Up",
      icon: WhyVittoVisuals[1],
      desc: "Our data schema is optimized for RAG and SLM pipelines, enabling deterministic AI decisioning without legacy workarounds."
    },
    {
      title: "Built for BFSI Workflows",
      icon: WhyVittoVisuals[2],
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
