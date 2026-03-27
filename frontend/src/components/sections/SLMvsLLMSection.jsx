import React from 'react';
import { ShieldCheck, ServerCrash, Cpu, BrainCircuit } from 'lucide-react';

const SLMvsLLMSection = () => {
  const comparison = [
    { cap: "Policy Awareness", llm: "No access to internal data", slm: "Trained on credit policies", llmStatus: false, slmStatus: true },
    { cap: "Hallucination Risk", llm: "High (Probabilistic generation)", slm: "Controlled (Constrained inference)", llmStatus: false, slmStatus: true },
    { cap: "Explainability", llm: "Low (Black box architecture)", slm: "High (Traceable logic flow)", llmStatus: false, slmStatus: true },
    { cap: "Determinism", llm: "Unpredictable / Non-deterministic", slm: "Fixed / Deterministic outputs", llmStatus: false, slmStatus: true },
    { cap: "Compliance Ready", llm: "No regulatory safety", slm: "Fully auditable & secure", llmStatus: false, slmStatus: true }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Small Language Models (SLMs) over <span className="text-textSecondary italic">Generic LLMs</span>
            </h2>
            <p className="text-xl text-textSecondary mb-8 leading-relaxed font-light">
              Public LLMs are designed for broad creativity. Vitto SLMs are designed for BFSI precision and policy-bound decisioning.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl border border-border bg-primary/50 text-textSecondary hover:border-accent/40 transition-colors">
                <ServerCrash className="text-accent shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">The Public LLM Problem</h3>
                  <p className="text-sm">High hallucination risks and lack of internal credit policy access makes standard LLMs unsuited for institutional lending.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl border border-border bg-accent/5 text-textSecondary hover:border-accent/40 transition-colors">
                <ShieldCheck className="text-accent shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">The Vitto SLM Solution</h3>
                  <p className="text-sm">Deterministic behavior, domain-trained parameter sizes, and an auditable inference path ensure compliance readiness.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/10 blur-3xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity"></div>
            <div className="rounded-3xl border border-border bg-primary overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-border flex items-center justify-between bg-surface/50">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-accent animate-pulse"></div>
                  <h4 className="font-bold text-sm tracking-widest uppercase">Benchmarking Report</h4>
                </div>
                <BrainCircuit className="text-accent/40" size={20} />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface/30">
                      <th className="p-6 text-xs font-bold uppercase tracking-widest border-b border-border opacity-60">Capability</th>
                      <th className="p-6 text-xs font-bold uppercase tracking-widest border-b border-border opacity-60">Public LLM</th>
                      <th className="p-6 text-xs font-bold uppercase tracking-widest border-b border-border text-accent">Vitto SLM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-accent/5 transition-colors border-b border-border last:border-0 group/row">
                        <td className="p-6 text-sm font-semibold text-textPrimary group-hover/row:text-white">{row.cap}</td>
                        <td className="p-6 text-sm text-textSecondary line-through decoration-accent/40 opacity-50 italic">{row.llm}</td>
                        <td className="p-6 text-sm font-bold text-white flex items-center gap-2">
                          <Cpu size={14} className="text-accent" /> {row.slm}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SLMvsLLMSection;
