import React from 'react';
import { ArrowRight, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const LifecycleCTA = () => {
  return (
    <section className="bg-primary pt-24 pb-32 border-t border-border relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/10 blur-[150px] -z-10 group-hover:bg-accent/20 transition-all duration-1000"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-surface border border-accent/20 flex items-center justify-center mx-auto mb-10 shadow-xl group-hover:scale-110 transition-transform">
          <Box size={24} className="text-accent" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight italic">
          Replace fragmented systems with a unified lending infrastructure.
        </h2>
        
        <p className="text-lg text-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
          From acquisition to collections, Vitto offers a modular yet unified stack to power the entire operational lifecycle of your lending institution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/signup" className="btn-primary px-10 py-4 shadow-accent/20 shadow-2xl hover:shadow-accent/40 active:scale-95 transition-all outline outline-border outline-1 hover:outline-accent/50 outline-offset-4">
            Explore Platform <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="px-10 py-4 rounded-md font-semibold border-2 border-border text-textPrimary hover:border-accent/40 hover:bg-surface transition-all">
            Book a Demo
          </Link>
        </div>

        <div className="mt-20 opacity-30 flex justify-center items-center gap-12 text-[10px] font-bold uppercase tracking-widest text-textPrimary overflow-hidden whitespace-nowrap">
          <span>Unified Data Layer</span>
          <div className="w-1 h-1 rounded-full bg-accent"></div>
          <span>SLM Powered</span>
          <div className="w-1 h-1 rounded-full bg-accent"></div>
          <span>Fully Deterministic</span>
          <div className="w-1 h-1 rounded-full bg-accent"></div>
          <span>Institutional Logic</span>
          <div className="w-1 h-1 rounded-full bg-accent"></div>
          <span>Event-Driven</span>
        </div>
      </div>
    </section>
  );
};

export default LifecycleCTA;
