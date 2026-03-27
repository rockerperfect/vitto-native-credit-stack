import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

import InteractiveGlassArchitecture from './InteractiveGlassArchitecture';

const HeroSection = () => {
  return (
    <section className="bg-primary pt-32 pb-24 overflow-hidden relative min-h-[90vh] flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse"></span>
            Vitto Institutional Engine v2.0
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-gradient uppercase font-header">
            AI-First Infrastructure for <span className="text-white">Modern Finance</span>
          </h1>
          
          <p className="text-xl text-textSecondary mb-12 leading-relaxed font-light border-l-2 border-accent/30 pl-8 max-w-lg">
            Vitto is not a retrofitted legacy system. It is a <span className="text-white font-medium">unified AI-first architecture</span> built specifically for Banks, NBFCs, and MFIs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact" className="btn-primary group">
              Book a Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/platform" className="btn-secondary group">
              Explore Platform
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">v2.4</span>
            </Link>
          </div>
          
          <div className="mt-16 flex items-center gap-8 grayscale opacity-30 hover:opacity-100 transition-all duration-500">
            <div className="text-xs font-bold tracking-widest uppercase text-white/50">Verified Deployment</div>
            <div className="flex gap-6 items-center">
              <div className="w-12 h-1 bg-white/20 rounded-full"></div>
              <div className="w-8 h-1 bg-white/20 rounded-full"></div>
              <div className="w-10 h-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <InteractiveGlassArchitecture />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
