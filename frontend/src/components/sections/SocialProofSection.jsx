import React from 'react';

const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Vitto didn't just digitize our workflows; it completely re-architected our decision-making. The SLM-based policy extraction alone saved our underwriters thousands of hours.",
      name: "Arjun Mehta",
      designation: "Chief Risk Officer",
      institution: "Apex Finance NBFC"
    },
    {
      quote: "As a CTO, the unified data layer was the selling point. Moving away from four fragmented SaaS vendors to a single AI-native nexus transformed our IT overhead.",
      name: "Sarah Jenkins",
      designation: "Chief Technology Officer",
      institution: "Meridian Co-operative Bank"
    }
  ];

  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <p className="text-center text-sm font-medium text-textSecondary uppercase tracking-widest mb-8">Trusted by Forward-Thinking Institutions</p>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold font-serif">ApexFinance</div>
            <div className="text-2xl font-bold tracking-tighter">MERIDIAN</div>
            <div className="text-2xl font-bold italic">NexaCredit</div>
            <div className="text-2xl font-medium tracking-widest">VANGUARD</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, idx) => (
            <div key={idx} className="p-8 border border-border rounded-xl bg-primary relative">
              <div className="text-accent text-6xl absolute top-4 left-6 opacity-20 font-serif">"</div>
              <p className="text-lg italic text-textPrimary leading-relaxed mb-8 relative z-10 pt-4">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-textSecondary font-bold text-lg">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-textPrimary">{test.name}</div>
                  <div className="text-sm text-textSecondary">{test.designation}, {test.institution}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
