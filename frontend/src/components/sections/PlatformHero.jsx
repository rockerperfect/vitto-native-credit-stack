import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlatformHero = () => {
  return (
    <section className="bg-primary text-white relative overflow-hidden pt-20 pb-20 border-b border-border">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-border rounded-full bg-surface/50 text-xs font-semibold text-accent uppercase tracking-widest">
            The Decision Nexus
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            AI-First Decisioning Infrastructure for <span className="text-accent underline decoration-2 underline-offset-8">Lending</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary mb-10 leading-relaxed max-w-2xl">
            Vitto combines data ingestion, model inference, and rule execution into a single, unified pipeline. Every credit decision is traceable to inputs, policy, and model outputs, removing legacy silos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Book a Demo <ArrowRight size={18} />
            </Link>
            <a href="#architecture" className="px-8 py-3 rounded-md font-medium border border-border text-textPrimary hover:bg-surface transition-all">
              View Architecture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;
