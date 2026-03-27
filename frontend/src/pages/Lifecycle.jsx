import React from 'react';
import { ArrowLeftRight, CheckCircle2, ShieldCheck, Zap, Activity } from 'lucide-react';
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

// Bespoke illustrations for Lifecycle Stages
const LifecycleVisuals = [
  // Acquisition: Node funnel
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent opacity-70 group-hover:opacity-100 transition-opacity">
    <path d="M10 20 L70 20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
    <path d="M20 40 L60 40" stroke="currentColor" strokeWidth="2"/>
    <path d="M30 60 L50 60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
    <circle cx="40" cy="15" r="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor"/>
    <circle cx="20" cy="40" r="3" fill="currentColor"/>
    <circle cx="60" cy="40" r="3" fill="currentColor"/>
    <circle cx="40" cy="65" r="5" fill="currentColor" fillOpacity="0.3" stroke="currentColor"/>
  </svg>,
  // Underwriting: Shield with verification paths
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent opacity-70 group-hover:opacity-100 transition-opacity">
    <path d="M40 10 L65 20 V45 C65 60 40 70 40 70 C40 70 15 60 15 45 V20 L40 10Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
    <path d="M30 35 L38 43 L55 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.3"/>
  </svg>,
  // Servicing: Balanced scale / node cluster
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent opacity-70 group-hover:opacity-100 transition-opacity">
    <rect x="25" y="25" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <line x1="10" y1="40" x2="25" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
    <line x1="55" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
    <line x1="40" y1="10" x2="40" y2="25" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
    <line x1="40" y1="55" x2="40" y2="70" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
    <circle cx="10" cy="40" r="3" fill="currentColor"/>
    <circle cx="70" cy="40" r="3" fill="currentColor"/>
    <circle cx="40" cy="10" r="3" fill="currentColor"/>
    <circle cx="40" cy="70" r="3" fill="currentColor"/>
  </svg>,
  // Collections: Upward arrow trend with guardrails
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent opacity-70 group-hover:opacity-100 transition-opacity">
    <path d="M15 65 L35 45 L45 55 L65 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M55 25 H65 V35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="10" y1="70" x2="70" y2="70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
    <line x1="10" y1="10" x2="10" y2="70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
  </svg>
];

const LifecycleStages = () => {
  const stages = [
    { title: "Acquisition", details: ["Omni-channel onboarding", "Real-time bureau pulls", "Identity verification"] },
    { title: "Underwriting", details: ["Predictive risk scoring", "Policy execution flow", "Explainable decisions"] },
    { title: "Servicing", details: ["Autonomous query resolution", "LMS ledger updates", "Seamless disbursement"] },
    { title: "Collections", details: ["Recovery probability scoring", "Intelligent worklists", "Automated engagement"] }
  ];

  return (
    <section className="py-24 bg-surface border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-primary/40 hover:border-accent/30 transition-all group relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all duration-700" />
              
              {/* Illustration Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 p-2">
                  {LifecycleVisuals[idx]}
                </div>
                <div className="text-4xl font-black text-white/[0.03] group-hover:text-accent/10 transition-colors font-header">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight font-header italic">
                {stage.title}
              </h3>
              
              <ul className="space-y-4 relative z-10">
                {stage.details.map((d, i) => (
                  <li key={i} className="flex gap-4 text-xs text-textSecondary group-hover:text-white/70 transition-colors italic leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1 shrink-0 group-hover:bg-accent group-hover:scale-125 transition-all"></div>
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

const LifecycleCTA = () => {
  return (
    <section className="py-24 bg-primary border-t border-white/5 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-red-glow opacity-30 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight font-header uppercase italic leading-tight">
          Unified Infrastructure. <br /><span className="text-accent underline decoration-white/10 underline-offset-8">Infinite Scale.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/signup" className="group/btn relative overflow-hidden bg-accent text-white px-12 py-4 rounded-xl font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-3 shadow-[0_0_30px_rgba(211,47,47,0.25)] hover:shadow-[0_0_50px_rgba(211,47,47,0.45)] transition-all active:scale-[0.98]">
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10">Get Started Now</span>
            <Zap size={18} className="relative z-10 group-hover:scale-110 transition-transform" />
          </Link>
          <Link to="/contact" className="px-12 py-4 rounded-xl font-bold text-sm uppercase tracking-[0.2em] border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
            Contact Desk
          </Link>
        </div>
      </div>
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
