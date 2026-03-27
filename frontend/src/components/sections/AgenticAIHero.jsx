import React from 'react';
import { ArrowRight, Bot, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgenticAIHero = () => {
  return (
    <section className="bg-primary pt-32 pb-24 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 blur-[120px] -z-10 animate-pulse"></div>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-block px-3 py-1 mb-8 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit mx-auto italic">
            <Bot size={14} /> Agentic AI
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
           Deterministic <br />
           <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">Policy-Bound Intelligence</span>
        </h1>
        <p className="text-xl md:text-2xl text-textSecondary leading-relaxed font-light italic border-l-4 border-accent pl-8 py-2 max-w-3xl mx-auto">
           Moving beyond generative chatter. Vitto Agentic AI operates within strictly retrieved institutional policy contexts to execute complex resolution workflows.
        </p>
        <div className="mt-12 flex justify-center items-center gap-4">
           <Link to="/contact" className="btn-primary hover:bg-accent/80 shadow-2xl shadow-accent/20 px-10 py-4 italic transition-all group flex items-center gap-2">
              Explore Agent Profiles <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
           </Link>
        </div>
      </div>
    </section>
  );
};

export default AgenticAIHero;
