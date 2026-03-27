import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Ambient light */}
      <div className="absolute inset-0 bg-red-glow opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card border-white/10 px-10 py-16 md:py-20 text-center max-w-4xl mx-auto relative overflow-hidden group">
          {/* Animated corner accent */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-xl opacity-60" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-xl opacity-60" />

          <div className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 flex items-center justify-center gap-2">
            <Zap size={10} className="animate-pulse" /> Live Infrastructure
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight font-header uppercase italic leading-tight">
            Unified Infrastructure.<br /><span className="text-accent">Infinite Scale.</span>
          </h2>

          <p className="text-textSecondary text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Deploy AI-native credit decisioning across your entire lending lifecycle, from acquisition to collections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup" className="group/btn relative overflow-hidden bg-accent text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-3 shadow-[0_0_30px_rgba(211,47,47,0.3)] hover:shadow-[0_0_50px_rgba(211,47,47,0.5)] transition-all active:scale-[0.98]">
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <Link to="/platform" className="px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-[0.2em] border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
              Explore Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
