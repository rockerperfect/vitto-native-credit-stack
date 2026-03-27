import React from 'react';
import { Target, Activity, UserPlus, PhoneIncoming, ExternalLink, Zap } from 'lucide-react';

const RecoveryDecisioning = () => {
  const inputs = [
    { title: "Repayment History", desc: "DPD buckets & historical payment velocity analysis.", icon: <Activity size={18} /> },
    { title: "Contactability Score", desc: "Predictive engagement rates across Omni-channels.", icon: <PhoneIncoming size={18} /> },
    { title: "Customer Segment", desc: "Ticket size, geography, and risk cluster categorization.", icon: <UserPlus size={18} /> },
    { title: "Past PTP Adherence", desc: "History of Promise-to-Pay fulfillment reliability.", icon: <Target size={18} /> }
  ];

  const logic = [
    { range: "> 0.8", strategy: "Digital First (Automated)", action: "WhatsApp, SMS + Seamless Payment Link", color: "text-green-400" },
    { range: "0.5 – 0.8", strategy: "Agent Assisted", action: "Precision Field Agent Assignment", color: "text-accent" },
    { range: "< 0.5", strategy: "High-Risk Escalation", action: "Legal & Recovery Team Queue Management", color: "text-red-500" }
  ];

  return (
    <section className="py-24 bg-surface border-y border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit mx-auto italic">
            <Zap size={14} /> Recovery Intelligence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
             Predictive <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">Decisioning Logic</span>
          </h2>
          <p className="text-xl text-textSecondary font-light">
             Vitto doesn't just track debt—it executes recovery strategies based on institutional risk appetite and recovery probability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Inputs Section */}
          <div className="p-10 rounded-3xl border border-border bg-primary/50 shadow-3xl">
             <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-accent border border-accent/20 italic font-medium">1</span>
                Recovery Scoring Inputs
             </h3>
             <div className="grid sm:grid-cols-2 gap-8">
                {inputs.map((inp, idx) => (
                  <div key={idx} className="group space-y-4">
                     <div className="text-accent opacity-60 group-hover:opacity-100 transition-opacity">
                        {inp.icon}
                     </div>
                     <h4 className="font-bold text-white text-sm tracking-tight">{inp.title}</h4>
                     <p className="text-xs text-textSecondary leading-relaxed italic">{inp.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Logic Flow Section */}
          <div className="relative group">
             <div className="absolute -inset-1 bg-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="p-10 rounded-3xl border border-accent/20 bg-surface shadow-2xl relative overflow-hidden h-full">
                <h3 className="text-xl font-bold text-white mb-10 flex items-center gap-3">
                   <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-accent border border-accent/20 italic font-medium">2</span>
                   Automated Action Engine
                </h3>
                <div className="space-y-6">
                   {logic.map((l, idx) => (
                     <div key={idx} className="p-6 rounded-2xl border border-border bg-primary hover:border-accent/40 transition-all group/item">
                        <div className="flex justify-between items-center mb-4">
                           <span className={`text-xl font-bold font-mono tracking-tighter ${l.color}`}>{l.range}</span>
                           <span className="text-[10px] font-bold uppercase tracking-widest text-textSecondary opacity-40 group-hover/item:opacity-100 transition-opacity italic">Score Segment</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">{l.strategy}</h4>
                        <div className="flex items-center gap-2 text-textSecondary text-xs font-medium italic">
                           <ExternalLink size={12} className="text-accent" /> {l.action}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryDecisioning;
