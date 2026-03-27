import React from 'react';
import { ShieldCheck, Lock, FileText, Activity, AlertCircle, Terminal } from 'lucide-react';

const GuardrailsSection = () => {
  const rails = [
    {
      title: "Policy-Bound Intent",
      icon: <FileText size={20} className="text-secondary" />,
      desc: "Every query is mapped to a predefined set of policy intents. Requests outside the institutional scope are rejected."
    },
    {
      title: "Zero Free-Text Generation",
      icon: <Lock size={20} className="text-secondary" />,
      desc: "Responses are strictly constrained to retrieved policy fragments and structured data, eliminating hallucination risk."
    },
    {
      title: "Deterministic Audit Logs",
      icon: <Activity size={20} className="text-secondary" />,
      desc: "Every interaction is logged with full source attribution, showing exactly which policy document powered the response."
    }
  ];

  return (
    <section className="py-24 bg-primary text-textPrimary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-accent/20 rounded-full bg-accent/5 text-[10px] font-bold text-accent uppercase tracking-widest italic">
              <ShieldCheck size={14} /> Trust & Verification
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
               Built for <br />
               <span className="text-accent italic font-light">Regulated Compliance</span>
            </h2>
            <p className="text-xl text-textSecondary leading-relaxed font-light mb-12">
               Vitto's agentic framework is built on a zero-trust architecture. Agents are not autonomous—they are bound by the institution's formal policies.
            </p>
            
            <div className="grid gap-6">
              {rails.map((rail, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-border bg-surface/50 hover:border-accent/30 transition-all group flex items-start gap-4 shadow-xl">
                   <div className="w-10 h-10 rounded-xl bg-primary border border-border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {rail.icon}
                   </div>
                   <div>
                      <h3 className="font-bold text-white mb-2">{rail.title}</h3>
                      <p className="text-sm text-textSecondary italic leading-relaxed">{rail.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="p-6 md:p-10 rounded-3xl border-2 border-accent/20 bg-primary/80 shadow-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] -z-10"></div>
               
               <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
                  <div className="flex items-center gap-3">
                    <Terminal size={18} className="text-accent" />
                    <span className="text-xs font-bold uppercase tracking-widest text-textSecondary italic">Audit Trace Log</span>
                  </div>
                  <div className="flex gap-1.5 font-bold uppercase tracking-widest text-[9px] text-accent animate-pulse">
                     <div className="w-2 h-2 rounded-full bg-accent"></div>
                     Live Security Boot
                  </div>
               </div>

               <div className="space-y-4 font-mono text-[11px] leading-relaxed">
                  <div className="text-accent/60 opacity-60 flex gap-3">
                    <span className="text-textSecondary opacity-30">12:04:01</span>
                    <span>INTENT_MAPPED: EMI_CALCULATION</span>
                  </div>
                  <div className="text-textSecondary opacity-80 flex gap-3">
                    <span className="text-textSecondary opacity-30">12:04:02</span>
                    <span>FET_SNIPPET: PL_POLICY_REPAYMENT_V2.0</span>
                  </div>
                  <div className="text-textSecondary opacity-80 flex gap-3">
                    <span className="text-textSecondary opacity-30">12:04:03</span>
                    <span>CONTEXT_VERIFIED: GOL_ID_8829</span>
                  </div>
                  <div className="text-accent flex gap-3 italic">
                    <span className="text-textSecondary opacity-30">12:04:04</span>
                    <span>SLM_GEN: SUCCESS (Grounded in context)</span>
                  </div>
                  <div className="text-textPrimary bg-accent/10 p-3 rounded-lg border border-accent/20 flex gap-3 items-center group-hover:scale-[1.02] transition-transform">
                    <AlertCircle size={14} className="text-accent shrink-0" />
                    <span>Response locked to verified policy. No ungrounded text detected.</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuardrailsSection;
