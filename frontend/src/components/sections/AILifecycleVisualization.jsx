import React, { useState } from 'react';
import { Zap, ShieldCheck, ArrowRight, UserPlus, CreditCard, RefreshCcw } from 'lucide-react';

const AILifecycleVisualization = () => {
  const [activeNode, setActiveNode] = useState(0);

  const flowNodes = [
    {
      id: 1,
      label: "Lead Acquisition",
      icon: <UserPlus size={24} />,
      aiIntervention: "Lead Scorer",
      description: "Proprietary AI evaluates intent and bureau signals in real-time.",
      color: "from-blue-500/20 to-accent/20"
    },
    {
      id: 2,
      label: "Underwriting",
      icon: <ShieldCheck size={24} />,
      aiIntervention: "Risk Core",
      description: "Policy engine executes 1000+ rules via SLM context analysis.",
      isDecision: true,
      color: "from-accent/40 to-red-900/40"
    },
    {
      id: 3,
      label: "Disbursement",
      icon: <CreditCard size={24} />,
      aiIntervention: "Liquid Path",
      description: "Autonomous payment routing selects optimal clearing channel.",
      color: "from-emerald-500/20 to-accent/20"
    },
    {
      id: 4,
      label: "Collections",
      icon: <RefreshCcw size={24} />,
      aiIntervention: "Recovery AI",
      description: "Predictive engine identifies high-propensity recovery leads.",
      isDecision: true,
      color: "from-accent/40 to-amber-900/40"
    }
  ];

  return (
    <div className="w-full bg-[#050505] rounded-[2rem] border border-white/5 p-6 lg:p-12 relative overflow-hidden group">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="text-xl lg:text-3xl font-bold text-white uppercase font-header italic tracking-tighter mb-2">
              Lending <span className="text-accent underline decoration-white/10 underline-offset-4">Intelligence Stack</span>
            </h2>
            <p className="text-xs text-textSecondary font-light uppercase tracking-[0.2em] opacity-40">
              Deterministic Decision Pipeline v4.0
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-4 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border border-primary bg-accent/20"></div>)}
             </div>
             <span className="text-[9px] font-black uppercase tracking-widest text-textSecondary">Active Deployments</span>
          </div>
        </div>

        {/* The Flow Container - Scrollable on Mobile */}
        <div className="relative overflow-x-auto no-scrollbar pb-32 pt-10 px-4">
          <div className="flex items-center justify-between min-w-[800px] lg:min-w-0 relative">
            
            {/* Animated Connector Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-white/5 via-accent/30 to-white/5 -translate-y-1/2 pointer-events-none">
               <div className="absolute inset-0 bg-accent animate-pulse-slow opacity-20"></div>
            </div>

            {flowNodes.map((node, i) => (
              <div 
                key={node.id}
                className="relative flex flex-col items-center group/node transition-all duration-500"
                style={{ width: `${100 / flowNodes.length}%` }}
                onMouseEnter={() => setActiveNode(i)}
              >
                {/* Node Interal State Line */}
                <div className={`absolute top-1/2 h-1 w-full bg-gradient-to-r ${i === 0 ? 'from-transparent' : 'from-accent/40'} ${i === flowNodes.length - 1 ? 'to-transparent' : 'to-accent/40'} pointer-events-none transition-opacity duration-500 ${activeNode === i ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* The Node Hub */}
                <div className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center border transition-all duration-700 z-20 ${
                  activeNode === i 
                    ? 'bg-accent border-accent shadow-[0_0_50px_rgba(211,47,47,0.4)] scale-110 -translate-y-2' 
                    : 'bg-[#0A0A0A] border-white/10 group-hover/node:border-accent/40'
                }`}>
                  <div className={`transition-all duration-500 ${activeNode === i ? 'text-white scale-110' : 'text-accent group-hover/node:text-white'}`}>
                    {node.icon}
                  </div>
                  
                  {/* Glass Gloss Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-3xl"></div>

                  {/* Decision Badge */}
                  {node.isDecision && (
                    <div className="absolute -top-3 -right-3 px-2 py-1 rounded-md bg-accent border border-white/20 shadow-xl flex items-center gap-1.5 animate-bounce-subtle">
                      <Zap size={10} className="fill-white text-white" />
                      <span className="text-[8px] font-black uppercase text-white tracking-widest leading-none">AI Mode</span>
                    </div>
                  )}
                </div>

                {/* Info Text */}
                <div className={`mt-8 text-center transition-all duration-500 ${activeNode === i ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-100'}`}>
                  <h4 className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-2 transition-colors ${activeNode === i ? 'text-accent' : 'text-white/40'}`}>
                    {node.label}
                  </h4>
                  
                  {/* Detailed Description Tooltip Style */}
                  <div className={`absolute top-[120%] left-1/2 -translate-x-1/2 w-64 p-6 glass-card border-accent/20 transition-all duration-500 pointer-events-none ${
                    activeNode === i ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-4'
                  }`}>
                    <div className="text-[9px] font-black text-accent uppercase tracking-widest mb-3 italic flex items-center justify-center gap-2">
                       <div className="w-1 h-1 rounded-full bg-accent animate-ping"></div>
                       Nexus: {node.aiIntervention}
                    </div>
                    <p className="text-[12px] text-textSecondary font-light leading-relaxed italic">
                      {node.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                       <div className="text-[8px] uppercase tracking-widest text-white/20">Decisioning Engine v2</div>
                       <ArrowRight size={12} className="text-accent/40" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="mt-4 flex justify-center lg:hidden">
           <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] animate-pulse">
              Scroll to explore flow →
           </div>
        </div>
      </div>
    </div>
  );
};

export default AILifecycleVisualization;
