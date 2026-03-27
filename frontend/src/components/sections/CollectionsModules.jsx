import React from 'react';
import { GitBranch, Target, ClipboardList, Share2, CreditCard } from 'lucide-react';

const CollectionsModules = () => {
  const modules = [
    {
      icon: <GitBranch size={24} className="text-secondary" />,
      title: "Case Allotment Engine",
      desc: "Assign accounts based on priority, agent score, geography, and recovery complexity."
    },
    {
      icon: <Target size={24} className="text-secondary" />,
      title: "Recovery Scoring",
      desc: "ML models predicting the likelihood of recovery at the individual account level."
    },
    {
      icon: <ClipboardList size={24} className="text-secondary" />,
      title: "PTP Tracking",
      desc: "Deterministic tracking of promise-to-pay commitments with automated reminders."
    },
    {
      icon: <Share2 size={24} className="text-secondary" />,
      title: "Omni-channel Communication",
      desc: "Integrated WhatsApp, SMS, and AI-voice calls tied to behavioral triggers."
    },
    {
      icon: <CreditCard size={24} className="text-accent" />,
      title: "Integrated Payment Gateway",
      desc: "Generate and send dynamic payment links directly within the collection journey."
    }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight underline decoration-accent decoration-2 underline-offset-8">
            Operational Modules
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed font-light">
            Each module is designed to function as part of a unified predictive stream, ensuring no case is lost in the recovery queue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-2xl border bg-primary shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group ${idx === 4 ? 'lg:col-span-1 lg:mx-auto lg:translate-x-full md:col-span-1 lg:col-start-2' : ''}`}
            >
               <div className="w-16 h-16 rounded-xl bg-surface border-2 border-border flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-accent transition-all">
                  {mod.icon}
               </div>

               <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent transition-colors">
                  {mod.title}
               </h3>
               
               <p className="text-textSecondary leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity italic">
                  {mod.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsModules;
