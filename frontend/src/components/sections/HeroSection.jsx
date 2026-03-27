import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-surface via-primary to-primary opacity-80"></div>
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <div className="inline-block px-3 py-1 mb-6 border border-border rounded-full bg-surface/50 text-xs font-medium text-textSecondary uppercase tracking-wider">
            Vitto BFSI Architecture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            AI-First Infrastructure for Modern Financial Services
          </h1>
          <p className="text-lg text-textSecondary mb-10 leading-relaxed font-light italic border-l-4 border-accent pl-8 py-2">
            Vitto is not a retrofitted legacy system. It is a unified AI-first architecture built specifically for Banks, NBFCs, and MFIs to replace fragmented vendors with a single, intelligent decisioning nexus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary hover:bg-red-700">
              Book a Demo <ArrowRight size={18} />
            </Link>
            <Link to="/platform" className="px-6 py-2 rounded-md font-medium border border-border text-white hover:border-textSecondary transition-colors flex items-center justify-center gap-2 bg-surface/30">
              Explore Platform
            </Link>
          </div>
        </div>
        
        <div className="relative animate-[float_6s_ease-in-out_infinite]">
          {/* Dashboard mock placeholder */}
          <div className="relative rounded-xl border border-border bg-surface shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
            <div className="h-8 border-b border-border bg-[#1A1A2E]/50 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <div className="space-y-1">
                  <div className="w-32 h-4 bg-border rounded"></div>
                  <div className="w-20 h-3 bg-border/50 rounded"></div>
                </div>
                <Activity className="text-accent opacity-80" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 border border-border rounded-lg bg-primary/50 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                </div>
                <div className="h-20 border border-border rounded-lg bg-primary/50"></div>
                <div className="h-20 border border-border rounded-lg bg-primary/50"></div>
              </div>
              <div className="flex-1 border border-border rounded-lg bg-primary/50 mt-2 p-4 flex flex-col gap-3">
                <div className="w-full h-3 bg-border rounded"></div>
                <div className="w-5/6 h-3 bg-border rounded"></div>
                <div className="w-4/6 h-3 bg-border rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute -inset-4 bg-accent/10 blur-2xl rounded-full -z-10 aspect-square"></div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
