import React from 'react';

const ArticleBody = () => {
  return (
    <div className="bg-primary pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <section className="mb-20">
          <p className="text-xl text-textSecondary leading-relaxed mb-10 font-light italic">
             The current wave of AI adoption in financial services is being driven by urgency rather than architecture. Most institutions are not rebuilding their systems for AI—they are attaching AI capabilities onto existing stacks. This approach, while expedient, creates structural limitations that become evident in underwriting, collections, and risk management.
          </p>
          <p className="text-lg text-textSecondary leading-relaxed mb-6">
             At a high level, there are two approaches emerging: **Retrofit AI** (layered on legacy systems) and **AI-Native Infrastructure** (built for decisioning).
          </p>
        </section>

        <section id="cost" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 underline decoration-accent decoration-2 underline-offset-8">The Cost of Retrofitting</h2>
          <p className="text-lg text-textSecondary leading-relaxed mb-6 font-medium italic opacity-80 transition-opacity hover:opacity-100">
             Retrofitting AI into legacy systems introduces hidden costs that are often underestimated during initial implementation.
          </p>
          <div className="space-y-8 mt-10">
             <div>
                <h3 className="text-xl font-bold text-white mb-4">1. Cost of Integration</h3>
                <p className="text-textSecondary leading-relaxed">Each system—LOS, LMS, CRM—maintains its own data model. AI systems must reconcile these differences before generating outputs. This creates latency and inconsistency.</p>
             </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-4">2. Cost of Maintenance</h3>
                <p className="text-textSecondary leading-relaxed">As rules evolve and models are retrained, the integration layer becomes increasingly complex. Small changes in one system propagate unpredictably across others.</p>
             </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-4">3. Cost of Decision Quality</h3>
                <p className="text-textSecondary leading-relaxed">Without direct access to a unified data layer, AI models operate on partial or delayed information. This directly impacts underwriting accuracy and collections efficiency.</p>
             </div>
          </div>
        </section>

        <section id="decisioning" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 underline decoration-accent decoration-2 underline-offset-8">Decisioning Depth: The Core Limitation</h2>
          <p className="text-lg text-textSecondary leading-relaxed mb-6 font-medium italic italic underline-offset-4 decoration-border/40 underline">
             The primary limitation of retrofit AI is not performance—it is access.
          </p>
          <p className="text-textSecondary leading-relaxed mb-6">
             In contrast, AI-native infrastructure integrates these components at the architectural level. Data ingestion, feature engineering, model inference, and rule execution operate within a single pipeline. This allows the system to generate decisions that are both faster and more aligned with policy.
          </p>
        </section>

        <section id="explainability" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 underline decoration-accent decoration-2 underline-offset-8">Explainability and Compliance</h2>
          <p className="text-lg text-textSecondary leading-relaxed mb-6">
             In regulated lending environments, every decision must be explainable. Retrofitted AI systems struggle with this requirement because they operate as black-box layers.
          </p>
          <p className="text-textSecondary leading-relaxed mb-6">
             AI-native systems approach this differently. Explainability is not an afterthought—it is part of the decision pipeline. Every output is tied to input data, model reasoning, and policy rules applied.
          </p>
        </section>

        <section id="conclusion" className="mb-10 text-center">
           <div className="w-20 h-1 bg-accent/20 mx-auto mb-16 rounded-full"></div>
           <h2 className="text-3xl font-bold text-white mb-8 italic">Conclusion</h2>
           <p className="text-xl text-textSecondary leading-relaxed font-light font-medium italic">
              Traditional LOS platforms are designed to execute transactions. They move data from one stage to another. AI-native infrastructure is designed to execute decisions. It determines what should happen at each stage, based on data, models, and policy.
           </p>
        </section>
      </div>
    </div>
  );
};

export default ArticleBody;
