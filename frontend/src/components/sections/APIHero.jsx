import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const APIHero = () => {
  return (
    <section className="bg-primary text-white pt-24 pb-20 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
           <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Terminal className="text-accent" size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-textSecondary italic">Infrastructure Architecture / Core APIs</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
             API-First Infrastructure for <br />
             <span className="text-accent italic font-light">Lending Systems</span>
          </h1>
          <p className="text-xl text-textSecondary mb-12 leading-relaxed max-w-2xl font-light">
             Vitto exposes all core capabilities through structured, low-latency APIs designed for seamless integration with legacy banking cores and modern neo-lending stacks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="btn-primary px-10">
              View Documentation <ArrowRight size={18} />
            </button>
            <button className="px-10 py-4 rounded-md font-semibold border-2 border-border text-textPrimary hover:border-accent/40 hover:bg-surface transition-all">
               Request API Key
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIHero;
