import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlatformCTA = () => {
  return (
    <section className="bg-primary pt-24 pb-32 border-t border-border relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/10 blur-[150px] -z-10 group-hover:bg-accent/20 transition-all duration-1000"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-surface border border-accent/20 flex items-center justify-center mx-auto mb-10 shadow-xl group-hover:scale-110 transition-transform">
          <Terminal size={24} className="text-accent" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight italic">
          Explore how decisioning infrastructure replaces fragmented lending systems.
        </h2>
        
        <p className="text-lg text-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
          The lending industry is moving from transactional legacy software to unified decision architectures. Ready to upgrade your credit stack?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/signup" className="group/btn relative overflow-hidden bg-accent text-white px-12 py-4 rounded-xl font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-3 shadow-[0_0_30px_rgba(211,47,47,0.25)] hover:shadow-[0_0_50px_rgba(211,47,47,0.45)] transition-all active:scale-[0.98]">
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10">Explore Platform</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/contact" className="px-12 py-4 rounded-xl font-bold text-sm uppercase tracking-[0.2em] border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
            Book a Demo
          </Link>
        </div>

        <div className="mt-20 opacity-30 flex justify-center items-center gap-12 text-[10px] font-bold uppercase tracking-widest text-textPrimary overflow-hidden whitespace-nowrap">
          <span>Explainable AI</span>
          <div className="w-1 h-1 rounded-full bg-accent"></div>
          <span>SLM Powered</span>
          <div className="w-1 h-1 rounded-full bg-accent"></div>
          <span>Fully Deterministic</span>
          <div className="w-1 h-1 rounded-full bg-accent"></div>
          <span>BFSI Compliant</span>
          <div className="w-1 h-1 rounded-full bg-accent"></div>
          <span>Unified Data Layer</span>
        </div>
      </div>
    </section>
  );
};

export default PlatformCTA;
