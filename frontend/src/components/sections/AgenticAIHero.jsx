import React from 'react';
import { ArrowRight, Cpu } from 'lucide-react';

const AgenticAIHero = () => {
  return (
    <section className="bg-primary text-white pt-24 pb-20 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Cpu className="text-accent" size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-textSecondary italic">Agentic Intelligence Layer (AIL)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Agentic AI Built for <br />
            <span className="text-accent italic font-light">Credit Systems</span>
          </h1>
          <p className="text-xl text-textSecondary mb-12 leading-relaxed max-w-2xl">
            Vitto agents operate within strict policy constraints using retrieval-augmented pipelines and domain-trained models. Deterministic intelligence tailored for regulated BFSI environments.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">
              Explore Platform <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticAIHero;
