import React from 'react';
import { ShieldCheck, Code, ArrowRight, Lock } from 'lucide-react';

const GuardrailsOutput = () => {
  const constraints = [
    { title: "Retrieval Constraint", desc: "Agent must retrieve from the centralized policy store before formulating any response.", icon: <ShieldCheck size={18} /> },
    { title: "Context Boundary", desc: "Cannot generate information or advice outside of the retrieved institutional context.", icon: <Lock size={18} /> },
    { title: "Output Structure", desc: "Responses must be returned in machine-readable, structured JSON for system integration.", icon: <Code size={18} /> }
  ];

  const jsonOutput = {
    "decision": "REJECT",
    "reason": "Income below threshold",
    "policy_reference": "Section 4.2 - Minimum Income Criteria",
    "timestamp": "2026-03-27T22:24:31Z",
    "agent_id": "underwriter-alpha-09"
  };

  return (
    <section className="py-24 bg-primary border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">
                Deterministic <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">Guardrails</span>
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed font-light italic">
                 Vitto agents operate within a "policy-first" execution environment. Hallucination is architecturally impossible because every response is a synthesis of verified policy data.
              </p>
            </div>

            <div className="space-y-8">
              {constraints.map((c, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 tracking-tight italic">{c.title}</h4>
                    <p className="text-sm text-textSecondary leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-border/40 blur-2xl opacity-50"></div>
            <div className="relative bg-surface border border-border rounded-3xl overflow-hidden shadow-3xl">
              <div className="p-6 border-b border-border bg-primary/40 flex justify-between items-center">
                 <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-textSecondary italic">Underwriter Agent Output</span>
              </div>
              <div className="p-8 md:p-12 overflow-x-auto">
                 <pre className="text-sm md:text-base font-mono leading-relaxed text-accent">
                    {JSON.stringify(jsonOutput, null, 2)}
                 </pre>
              </div>
              <div className="p-6 bg-accent border-t border-white/10 flex items-center justify-between">
                 <span className="text-xs font-bold text-white uppercase tracking-widest italic">Decision Execution</span>
                 <ArrowRight size={18} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuardrailsOutput;
