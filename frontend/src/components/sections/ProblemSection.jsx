import React from 'react';

// Bespoke micro-illustration SVGs for each problem
const ProblemVisuals = [
  // 01 — Fragmented Systems: disconnected nodes
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
    <circle cx="15" cy="15" r="5" stroke="#D32F2F" strokeWidth="1.5"/>
    <circle cx="65" cy="15" r="5" stroke="#D32F2F" strokeWidth="1.5" strokeDasharray="3 2"/>
    <circle cx="15" cy="65" r="5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
    <circle cx="65" cy="65" r="5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 2"/>
    <circle cx="40" cy="40" r="7" fill="rgba(211,47,47,0.15)" stroke="#D32F2F" strokeWidth="1.5"/>
    <line x1="20" y1="15" x2="60" y2="15" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 3"/>
    <line x1="15" y1="20" x2="34" y2="34" stroke="#D32F2F" strokeWidth="1" strokeOpacity="0.4"/>
    <line x1="65" y1="20" x2="46" y2="34" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3"/>
    <line x1="15" y1="60" x2="34" y2="46" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3"/>
    <line x1="65" y1="60" x2="46" y2="46" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 3"/>
  </svg>,
  // 02 — Non-AI Native: bolt on top of legacy block
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
    <rect x="10" y="40" width="60" height="30" rx="3" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)"/>
    <rect x="20" y="50" width="10" height="10" rx="1" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <rect x="35" y="50" width="10" height="10" rx="1" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <rect x="50" y="50" width="10" height="10" rx="1" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <polygon points="40,8 46,26 40,22 34,26" fill="rgba(211,47,47,0.3)" stroke="#D32F2F" strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="40" y1="28" x2="40" y2="40" stroke="#D32F2F" strokeWidth="1" strokeDasharray="3 2"/>
  </svg>,
  // 03 — Reactive Collections: lagging wave signal
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
    <path d="M5 50 Q15 20 25 50 Q35 80 45 50 Q55 20 65 50 Q72 70 80 50" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
    <path d="M5 50 Q15 30 25 50 Q35 70 45 50" stroke="#D32F2F" strokeWidth="1.5" fill="none" strokeOpacity="0.7"/>
    <circle cx="45" cy="50" r="4" fill="rgba(211,47,47,0.2)" stroke="#D32F2F" strokeWidth="1.5"/>
    <line x1="45" y1="10" x2="45" y2="30" stroke="#D32F2F" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.4"/>
    <text x="41" y="8" fill="#D32F2F" fontSize="8" fontFamily="monospace" opacity="0.6">!</text>
  </svg>,
  // 04 — Static Rule Engine: locked box
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
    <rect x="15" y="35" width="50" height="35" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)"/>
    <path d="M28 35 V25 C28 17 52 17 52 25 V35" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <circle cx="40" cy="52" r="5" fill="rgba(211,47,47,0.15)" stroke="#D32F2F" strokeWidth="1.5"/>
    <line x1="40" y1="57" x2="40" y2="63" stroke="#D32F2F" strokeWidth="1.5" strokeOpacity="0.6"/>
    <line x1="22" y1="45" x2="28" y2="45" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2"/>
    <line x1="52" y1="45" x2="58" y2="45" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2"/>
  </svg>
];

const ProblemSection = () => {
  const problems = [
    {
      title: "Fragmented Systems",
      description: "Siloed LOS, LMS, and CRM with no unified data layer, leading to operational friction and disjointed insights."
    },
    {
      title: "Non-AI Native Vendors",
      description: "AI is layered on top of legacy systems without integration into core decision flows, limiting actual intelligence."
    },
    {
      title: "Reactive Collections",
      description: "Collections rely on manual prioritization with no predictive intelligence or early warning signals."
    },
    {
      title: "Static Rule Engines",
      description: "Rules are fixed, manually updated, and do not intelligently adapt to evolving portfolio risk behavior."
    }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Market Inefficiency</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            The Reality of Today's Lending Technology
          </h2>
          <p className="text-textSecondary text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Traditional infrastructure executes transactions but fails at real-time credit decisioning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, idx) => (
            <div 
              key={idx} 
              className="group glass-card p-8 hover-lift relative overflow-hidden flex gap-8 h-full"
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Left: editorial number + SVG illustration stacked */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3 w-16">
                <div className="text-3xl font-black text-accent/20 group-hover:text-accent/40 transition-colors duration-500 font-header leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="w-16 h-16 flex-shrink-0">
                  {ProblemVisuals[idx]}
                </div>
              </div>

              {/* Right: content */}
              <div className="flex flex-col justify-center relative z-10">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300 tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-textSecondary text-sm leading-relaxed font-light">
                  {problem.description}
                </p>
              </div>

              {/* Background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

