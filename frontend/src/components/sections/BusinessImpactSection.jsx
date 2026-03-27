import React from 'react';

const BusinessImpactSection = () => {
  const metrics = [
    { value: "Minutes", label: "Faster credit decisions", sub: "Reduced turnaround from days" },
    { value: "40%", label: "Reduced portfolio risk", sub: "Improved risk segmentation" },
    { value: "2.5x", label: "Increased recovery rates", sub: "Optimized collection efforts" },
    { value: "Plug & Play", label: "Seamless integrations", sub: "Pre-built system connectors" }
  ];

  return (
    <section className="py-32 bg-primary relative overflow-hidden group">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 relative z-10">
          <div className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Performance Metrics</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Business Impact (Measurable from Day One)
          </h2>
          <p className="text-textSecondary text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Translating core system architecture into measurable financial outcomes for your institution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="group glass-card p-10 hover:accent-glow transition-all duration-700 h-full flex flex-col items-center justify-center text-center overflow-hidden border-white/5"
            >
              {/* Inner Light Effect */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 blur-[60px] rounded-full group-hover:bg-accent/10 transition-all duration-500"></div>
              
              <div className="text-4xl lg:text-5xl font-black mb-4 text-white group-hover:text-accent transition-colors duration-500 font-header italic tracking-tight">
                {metric.value}
              </div>
              <div className="text-lg font-bold text-white/90 mb-2">{metric.label}</div>
              <div className="text-sm text-textSecondary font-light opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-widest text-[10px]">{metric.sub}</div>
            </div>
          ))}
        </div>
        
        {/* Social Proof (Trust Logos) Inline */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center justify-center animate-in fade-in duration-1000">
          <div className="text-[10px] font-bold tracking-[0.5em] uppercase mb-12 text-white/20">Institutional Deployments</div>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 grayscale opacity-20 hover:opacity-60 transition-all duration-700">
             <div className="font-black italic tracking-tighter text-xl text-white select-none">FINCORE</div>
             <div className="font-black italic tracking-tighter text-xl text-white select-none">GLOBALBANK</div>
             <div className="font-black italic tracking-tighter text-xl text-white select-none">ALTCREDIT</div>
             <div className="font-black italic tracking-tighter text-xl text-white select-none">LENDERA</div>
             <div className="font-black italic tracking-tighter text-xl text-white select-none">VITAFIN</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
