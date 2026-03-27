import React from 'react';
import { UserPlus, ShieldHalf, LayoutGrid, Coins, RefreshCw, XCircle, ArrowRight } from 'lucide-react';

const LifecycleFlowDiagram = () => {
  const flow = [
    { title: "Acquisition", icon: <UserPlus size={18} />, anchor: "#layer-a" },
    { title: "Underwriting", icon: <ShieldHalf size={18} />, anchor: "#layer-b" },
    { title: "Disbursement", icon: <Coins size={18} />, anchor: "#layer-b" },
    { title: "LMS", icon: <LayoutGrid size={18} />, anchor: "#layer-d" },
    { title: "Collections", icon: <RefreshCw size={18} />, anchor: "#layer-c" },
    { title: "Closure", icon: <XCircle size={18} />, anchor: "#layer-d" }
  ];

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-surface/50 border-b border-border sticky top-[73px] z-40 backdrop-blur-xl">
      <div className="container mx-auto px-6 overflow-x-auto overflow-y-hidden no-scrollbar">
        <div className="flex items-center justify-between gap-6 min-w-[800px] py-4">
          {flow.map((step, idx) => (
            <React.Fragment key={idx}>
              <button
                onClick={() => handleScroll(step.anchor)}
                className="flex flex-col items-center gap-4 group focus:outline-none"
              >
                <div className="w-12 h-12 rounded-xl bg-primary border border-border flex items-center justify-center text-textSecondary group-hover:bg-accent/10 group-hover:border-accent group-hover:text-accent transition-all duration-300 shadow-xl">
                  {step.icon}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-textSecondary group-hover:text-textPrimary transition-colors">
                  {step.title}
                </div>
              </button>
              {idx < flow.length - 1 && (
                <div className="flex items-center gap-1 opacity-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <div className="w-12 h-0.5 bg-border"></div>
                  <ArrowRight size={14} className="text-accent" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleFlowDiagram;
