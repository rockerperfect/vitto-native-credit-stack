import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

import InteractiveGlassArchitecture from './InteractiveGlassArchitecture';

const HeroSection = () => {
  return (
    <section className="bg-primary pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden relative min-h-[90vh] flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-accent/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 sm:mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse"></span>
            Vitto Institutional Engine v2.0
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 sm:mb-8 text-gradient uppercase font-header">
            AI-First Infrastructure for <span className="text-white">Modern Finance</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-textSecondary mb-10 sm:mb-12 leading-relaxed font-light border-l-2 border-accent/30 pl-6 sm:pl-8 max-w-lg mx-auto lg:mx-0">
            Vitto is not a retrofitted legacy system. It is a <span className="text-white font-medium">unified AI-first architecture</span> built specifically for Banks, NBFCs, and MFIs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <Link to="/contact" className="btn-primary group">
              Book a Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/platform" className="btn-secondary group">
              Explore Platform
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">v2.4</span>
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-6 sm:gap-8 grayscale opacity-30 hover:opacity-100 transition-all duration-500 justify-center lg:justify-start">
            <div className="text-xs font-bold tracking-widest uppercase text-white/50">Verified Deployment</div>
            <div className="flex gap-6 items-center">
              <div className="w-12 h-1 bg-white/20 rounded-full"></div>
              <div className="w-8 h-1 bg-white/20 rounded-full"></div>
              <div className="w-10 h-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="relative mt-12 lg:mt-0 w-full max-w-[500px] mx-auto lg:max-w-none">
          <InteractiveGlassArchitecture />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
