import React from 'react';

const PrincipleVisuals = [

  // Decision-First Design: Target with outcome path
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3"/>
    <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="40" cy="40" r="5" fill="currentColor"/>
    <path d="M10 40 H25 M55 40 H70 M40 10 V25 M40 55 V70" stroke="currentColor" strokeWidth="1.5"/>
  </svg>,
  // Explainability: Traced investigation
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <circle cx="35" cy="35" r="15" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <line x1="46" y1="46" x2="65" y2="65" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M30 30 L40 40 L50 30" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
    <path d="M25 40 H45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
  </svg>,
  // Policy Alignment: Guardrails
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <rect x="15" y="30" width="50" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <line x1="15" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
    <line x1="15" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
    <path d="M40 20 V30 M40 50 V60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="40" cy="40" r="4" fill="currentColor"/>
  </svg>,
  // System Integration: Adaptive bridge
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <rect x="10" y="25" width="20" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <rect x="50" y="25" width="20" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M30 40 H50" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4"/>
    <circle cx="40" cy="40" r="5" stroke="currentColor" strokeWidth="1.5" fill="primary"/>
  </svg>
];

const PrinciplesSection = () => {
  const principles = [
    { title: "Decision-First Design", icon: PrincipleVisuals[0], desc: "Architecture optimized for outputting actionable credit decisions, not just storing records." },
    { title: "Explainability", icon: PrincipleVisuals[1], desc: "Every AI-led action is traceable to its source policy fragment for full transparency." },
    { title: "Policy Alignment", icon: PrincipleVisuals[2], desc: "Deterministic guardrails ensure no decisions are made outside of institutional risk parameters." },
    { title: "System Integration", icon: PrincipleVisuals[3], desc: "Built to sit atop legacy cores, enhancing them with modern agentic capabilities." }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight underline decoration-accent decoration-2 underline-offset-8">
            Core Principles
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed font-light">
            Our engineering decisions are guided by an obsession with institutional safety and operational speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((pr, idx) => (
            <div key={idx} className="p-10 rounded-2xl border bg-primary shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group">
               <div className="w-16 h-16 rounded-xl bg-surface border-2 border-border flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-accent transition-all">
                  {pr.icon}
               </div>

               <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent transition-colors">
                  {pr.title}
               </h3>
               
               <p className="text-textSecondary leading-relaxed text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity italic">
                  {pr.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
