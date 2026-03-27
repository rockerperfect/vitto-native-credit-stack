import React from 'react';
import { ShieldCheck, Layers, GitMerge, FileCode, Lock, Zap } from 'lucide-react';

const APIPhilosophy = () => {
  const points = [
    {
      title: "RESTful Architecture",
      icon: <FileCode className="text-secondary" />,
      desc: "Resource-oriented design with predictable URLs, standard HTTP methods, and JSON-encoded responses."
    },
    {
      title: "JWT-Based Security",
      icon: <Lock className="text-secondary" />,
      desc: "Stateless authentication via JSON Web Tokens ensures institutional-grade security for every endpoint."
    },
    {
      title: "Modular Micro-hooks",
      icon: <Zap className="text-secondary" />,
      desc: "Granular access to specific services like Credit Scoring, OTP Management, or Lead Retrieval."
    }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight underline decoration-accent decoration-2 underline-offset-8">
            Engineering Philosophy
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed font-light italic">
            Built by engineers for engineers. Vitto's API layer follows global BFSI standards for latency, security, and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {points.map((p, idx) => (
            <div key={idx} className="group p-10 rounded-3xl border border-border bg-primary hover:bg-surface hover:border-accent/40 shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden flex flex-col h-full text-center items-center">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] -z-10 group-hover:bg-accent/10 transition-colors"></div>
               
               <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-accent transition-all">
                  {p.icon}
               </div>

               <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent transition-colors underline-offset-8 decoration-border/40 group-hover:decoration-accent transition-all underline">
                  {p.title}
               </h3>
               
               <p className="text-textSecondary leading-relaxed text-sm font-medium italic">
                  {p.desc}
               </p>

               <div className="mt-8 flex gap-1 items-center text-[10px] font-bold uppercase tracking-widest text-accent opacity-30 group-hover:opacity-100 transition-opacity">
                   <ShieldCheck size={12} /> Institutional Verified
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APIPhilosophy;
