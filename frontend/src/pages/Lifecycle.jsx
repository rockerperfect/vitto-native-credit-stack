import React from 'react';
import { ArrowLeftRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const LifecycleHero = () => {
  return (
    <section className="bg-primary pt-32 pb-24 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-block px-3 py-1 mb-8 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit mx-auto italic">
            <ArrowLeftRight size={14} /> Full-Stack Automation
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
           Automate the Entire <br />
           <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">Credit Lifecycle</span>
        </h1>
        <p className="text-xl md:text-2xl text-textSecondary leading-relaxed font-light italic border-l-4 border-accent pl-8 py-2 max-w-3xl mx-auto">
           Vitto unifies the journey from acquisition to recovery. No fragmented LOS or LMS. Just one automated nexus with zero-latency decisioning.
        </p>
      </div>
    </section>
  );
};

const LifecycleStages = () => {
  const stages = [
    { title: "Acquisition", icon: <Zap /> , details: ["Omni-channel onboarding", "Real-time bureau pulls", "Identity verification"] },
    { title: "Underwriting", icon: <ShieldCheck /> , details: ["Predictive risk scoring", "Policy execution flow", "Explainable decisions"] },
    { title: "Servicing", icon: <CheckCircle2 /> , details: ["Autonomous query resolution", "LMS ledger updates", "Seamless disbursement"] },
    { title: "Collections", icon: <Activity /> , details: ["Recovery probability scoring", "Intelligent worklists", "Automated engagement"] }
  ];

  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {stages.map((stage, idx) => (
             <div key={idx} className="p-8 rounded-2xl border border-border bg-primary hover:border-accent/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                   {stage.icon || <CheckCircle2 size={24} />}
                </div>
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight italic underline decoration-accent decoration-1 underline-offset-4">{stage.title}</h3>
                <ul className="space-y-3">
                   {stage.details.map((d, i) => (
                     <li key={i} className="flex gap-2 text-sm text-textSecondary italic">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2"></div>
                        {d}
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

import { Activity } from 'lucide-react';

const LifecycleCTA = () => {
   return (
      <section className="py-20 bg-primary border-t border-border text-center">
         <h2 className="text-3xl font-bold text-white mb-8 italic uppercase tracking-tighter">Unified Infrastructure. Infinite <span className="text-accent">Scale.</span></h2>
         <Link to="/signup" className="btn-primary">Get Started Now</Link>
      </section>
   );
};

const Lifecycle = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <LifecycleHero />
      <LifecycleStages />
      <LifecycleCTA />
    </div>
  );
};

export default Lifecycle;
