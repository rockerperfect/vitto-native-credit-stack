import React from 'react';
import { ShieldCheck, Zap, Layers, ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => (
  <section className="bg-primary pt-32 pb-24 border-b border-border text-center">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="inline-block px-3 py-1 mb-8 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit mx-auto italic">
        <Bot size={14} /> Our Mission
      </div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
        Infrastructure for <br />
        <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">Decision-First Credit</span>
      </h1>
      <p className="text-xl md:text-2xl text-textSecondary leading-relaxed font-light italic border-l-4 border-accent pl-8 py-2 max-w-3xl mx-auto text-center">
        Vitto is built on the belief that traditional lending software executes transactions, but modern financial services require systems that execute decisions.
      </p>
    </div>
  </section>
);

const WhyVittoSection = () => {
    const differentiators = [
        { title: "Unified Data Layer", desc: "No fragmented LOS or LMS. One central nexus for credit data.", icon: <Layers size={18} /> },
        { title: "Policy-Bound AI", desc: "Deterministic decisioning without hallucination risks.", icon: <ShieldCheck size={18} /> },
        { title: "Low Latency", desc: "Sub-100ms decisioning for real-time applications.", icon: <Zap size={18} /> },
        { title: "Institutional Grade", desc: "Built for Banks, NBFCs, and MFIs with full auditability.", icon: <ArrowRight size={18} /> }
    ];

    return (
        <section className="py-24 bg-surface border-y border-border">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">The Vitto <span className="text-accent italic font-light font-medium italic underline decoration-accent decoration-1 underline-offset-4">Differentiator.</span></h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentiators.map((diff, idx) => (
                        <div key={idx} className="p-8 rounded-2xl border border-border bg-primary hover:border-accent/40 transition-all font-light italic">
                            <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-6">
                                {diff.icon}
                            </div>
                            <h3 className="text-base font-bold text-white mb-2">{diff.title}</h3>
                            <p className="text-xs text-textSecondary leading-relaxed italic">{diff.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const About = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <AboutHero />
      <WhyVittoSection />
      <div className="py-32 text-center bg-primary border-t border-border">
         <h2 className="text-3xl font-bold text-white italic underline decoration-accent underline-offset-8">Join the Decision <span className="text-accent">First Future.</span></h2>
         <Link to="/signup" className="btn-primary mt-12 inline-block">Get Started Now</Link>
      </div>
    </div>
  );
};

export default About;
