import React from 'react';
import { TrendingUp, DollarSign, Target, CheckCircle2 } from 'lucide-react';

const CollectionsOutcomes = () => {
  const outcomes = [
    {
      title: "Recovery Acceleration",
      desc: "Up to 35% increase in baseline recovery rates through predictive prioritization.",
      icon: <TrendingUp className="text-secondary" />
    },
    {
      title: "Cost Reduction",
      desc: "Decrease operational expenses by 25% by automating low-risk follow-ups via AI bots.",
      icon: <DollarSign className="text-secondary" />
    },
    {
      title: "Risk Precision",
      desc: "Accurate DPD bucket management through early behavioral signals and PTP commit tracking.",
      icon: <Target className="text-accent" />
    }
  ];

  return (
    <section className="py-24 bg-primary text-textPrimary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
             Impact of Intelligence-Driven <br />
             <span className="text-accent italic font-light">Lending Recovery</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {outcomes.map((o, idx) => (
            <div key={idx} className="group p-10 rounded-3xl border border-border bg-surface hover:bg-primary shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-full bg-primary border-2 border-border flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:border-accent group-hover:text-accent transition-all">
                  {o.icon}
               </div>

               <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent transition-colors">
                  {o.title}
               </h3>
               
               <p className="text-textSecondary leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity italic">
                  {o.desc}
               </p>

               <div className="mt-10 flex items-center gap-2 text-accent/40 group-hover:text-accent transition-colors font-bold uppercase tracking-widest text-xs">
                   <CheckCircle2 size={16} /> Verified Benchmark
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsOutcomes;
