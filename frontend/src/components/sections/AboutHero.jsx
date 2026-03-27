import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="bg-primary text-white pt-24 pb-20 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
           <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Shield className="text-accent" size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-textSecondary italic">Our Mission / Architectural Thesis</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Built for Decisioning, <br />
            <span className="text-accent italic font-light">Not Just Transactions</span>
          </h1>
          <p className="text-xl text-textSecondary mb-12 leading-relaxed max-w-2xl font-light italic">
            Vitto is a high-performance, AI-native credit infrastructure designed to move BFSI operations from legacy transaction ledgers to real-time predictive decision engines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
