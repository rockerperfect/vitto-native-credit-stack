import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedInsights = () => {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
              Latest <span className="text-accent underline decoration-accent decoration-2 underline-offset-8 italic font-light font-medium">Insights</span>
            </h2>
            <p className="text-xl text-textSecondary font-light italic">
              Architectural deep-dives and engineering perspectives on the future of credit infrastructure.
            </p>
          </div>
          <Link to="/insights/ai-native-vs-retrofit" className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all pb-2 border-b border-accent/20">
             View All Articles <ArrowRight size={18} />
          </Link>
        </div>

        <div className="bg-primary p-1 rounded-3xl border border-border group hover:border-accent/40 shadow-3xl transition-all max-w-4xl">
           <Link to="/insights/ai-native-vs-retrofit" className="flex flex-col md:flex-row gap-10 p-10">
              <div className="md:w-1/3 aspect-[4/3] rounded-2xl bg-surface border border-border flex items-center justify-center relative overflow-hidden group-hover:bg-accent/5 transition-colors">
                 <BookOpen size={48} className="text-accent/20 group-hover:text-accent transition-colors" />
                 <div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest italic">New Release</div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                 <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-textSecondary italic">
                    <span>Architecture</span>
                    <div className="w-1 h-1 rounded-full bg-accent"></div>
                    <span>8 Min Read</span>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-accent transition-colors leading-tight">
                    Retrofit AI vs. AI-Native Infrastructure in BFSI
                 </h3>
                 <p className="text-textSecondary leading-relaxed mb-8 opacity-70 italic font-medium">
                    Why layering AI on legacy transaction ledgers creates technical debt, and why re-architecture is required for autonomous lending.
                 </p>
                 <div className="flex items-center gap-2 text-white font-bold text-sm tracking-tight underline decoration-accent decoration-2 underline-offset-8">
                    Read Article <ArrowRight size={16} className="text-accent" />
                 </div>
              </div>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
