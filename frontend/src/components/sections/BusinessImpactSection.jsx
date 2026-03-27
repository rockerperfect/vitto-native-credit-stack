import React from 'react';

const BusinessImpactSection = () => {
  const metrics = [
    { value: "Minutes", label: "Faster credit decisions", sub: "Reduced turnaround from days" },
    { value: "40%", label: "Reduced portfolio risk", sub: "Improved risk segmentation" },
    { value: "2.5x", label: "Increased recovery rates", sub: "Optimized collection efforts" },
    { value: "Plug & Play", label: "Seamless integrations", sub: "Pre-built system connectors" }
  ];

  return (
    <section className="py-24 bg-primary text-textPrimary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quantifiable Business Impact</h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            Translating core system architecture into measurable financial outcomes for your institution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-6 text-center border-l-2 border-border hover:border-accent transition-colors duration-300">
              <div className="text-4xl font-bold text-white mb-2 tracking-tight">{metric.value}</div>
              <div className="text-lg font-medium text-textPrimary mb-1">{metric.label}</div>
              <div className="text-sm text-textSecondary">{metric.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
