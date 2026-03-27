import React from 'react';
import { ArrowRight, Box } from 'lucide-react';

const LifecycleHero = () => {
  return (
    <section className="bg-primary text-white pt-24 pb-20 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent -z-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Box className="text-accent" size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-textSecondary italic">Full-Stack Operational Infrastructure</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Full-Stack Lending Automation, <br />
            <span className="text-accent italic font-light">Structured as a Decision System</span>
          </h1>
          <p className="text-xl text-textSecondary mb-12 leading-relaxed max-w-2xl">
            Vitto connects acquisition, underwriting, servicing, and collections into a single operational flow. Each layer shares data and decision outputs, eliminating the system fragmentation of legacy vendors.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">
              Book a Demo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifecycleHero;
