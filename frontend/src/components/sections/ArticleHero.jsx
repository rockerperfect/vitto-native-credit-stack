import React from 'react';
import { BookOpen, Calendar, Clock } from 'lucide-react';

const ArticleHero = () => {
  return (
    <section className="bg-primary pt-32 pb-20 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-6 mb-10 opacity-70">
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent italic">
              <BookOpen size={14} /> Insights / Architecture
           </div>
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textSecondary italic">
              <Calendar size={14} /> March 27, 2026
           </div>
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textSecondary italic">
              <Clock size={14} /> 8 Min Read
           </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-header leading-[1.1] mb-8 text-white uppercase tracking-tight">
          Retrofit AI vs <br />
          <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">AI-Native Infrastructure</span> in BFSI
        </h1>
        
        <p className="text-xl md:text-2xl text-textSecondary leading-relaxed font-light italic border-l-4 border-accent pl-8 py-2 max-w-2xl">
          Why layering AI onto legacy systems creates structural debt, and why re-architecture is becoming unavoidable.
        </p>
      </div>
    </section>
  );
};

export default ArticleHero;
