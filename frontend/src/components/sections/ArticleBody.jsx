import React from 'react';

const ArticleBody = () => {
  return (
    <div className="bg-primary pt-20 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <section className="mb-20">
          <p className="text-xl text-textSecondary leading-[1.8] mb-8 font-light italic border-l-2 border-white/10 pl-8">
            The current push toward AI in financial services is happening faster than most institutions can realistically adapt to. There is pressure to improve turnaround times, reduce risk, and automate operations, and AI is seen as the obvious answer. The problem is not the intent. It is how the implementation is being approached.
          </p>
          <p className="text-lg text-textSecondary leading-relaxed mb-6">
            Most institutions today are not rebuilding their systems for AI. They are adding AI on top of what already exists. Loan Origination Systems, Loan Management Systems, and CRMs remain unchanged, while AI is introduced as an additional layer. This approach works in the short term, but it carries limitations that start to show up very quickly in underwriting, collections, and overall decision quality.
          </p>
          <p className="text-lg text-textSecondary leading-relaxed mb-6">
            At a high level, two different approaches are taking shape. One is retrofit AI, where capabilities are added onto existing systems. The other is AI-native infrastructure, where the system itself is designed around data, models, and decision-making from the beginning. The difference between these approaches is not just technical. It directly affects how well an institution can operate.
          </p>
          <p className="text-lg text-white/90 font-bold italic border-b border-accent/20 pb-4 mt-12 mb-6">
            "In a retrofit setup, AI is trying to work around the system. In an AI-native setup, the system is built to work with AI."
          </p>
        </section>

        <section id="cost" className="mb-20">
          <h2 className="text-3xl font-bold font-header text-white mb-8 underline decoration-accent decoration-2 underline-offset-8 uppercase tracking-tight">The Cost of Retrofitting</h2>
          <p className="text-lg text-textSecondary leading-relaxed mb-10 opacity-80">
            The cost of retrofitting is often underestimated because it does not appear immediately. It shows up gradually as systems become harder to manage.
          </p>
          <div className="space-y-12 mt-10">
             <div>
                <h3 className="text-xl font-bold text-white mb-4 italic">01. Fragmented Integration</h3>
                <p className="text-textSecondary leading-relaxed font-light">Each system in the stack has its own structure and logic. Data lives in different formats and flows differently across LOS, LMS, and CRM. Before any model can produce a result, this data has to be aligned. That alignment introduces delay and, more importantly, inconsistency. Two systems may reflect slightly different states of the same customer, which affects the reliability of any decision built on top of them.</p>
             </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-4 italic">02. Maintenance Complexity</h3>
                <p className="text-textSecondary leading-relaxed font-light">As policies change and models are updated, the connections between systems become more complex. A small change in underwriting rules can require updates across multiple layers. Over time, this creates a situation where changes become slower and riskier, even if the underlying intent is simple.</p>
             </div>
             <div>
                <h3 className="text-xl font-bold text-white mb-4 italic">03. Impact on Decision Quality</h3>
                <p className="text-textSecondary leading-relaxed font-light">AI models depend on context. When they are operating on incomplete or delayed data, their outputs become less reliable. This is especially visible in credit decisions and collections prioritization, where timing and accuracy matter.</p>
             </div>
          </div>
        </section>

        <section id="access" className="mb-20">
          <h2 className="text-3xl font-bold font-header text-white mb-8 underline decoration-accent decoration-2 underline-offset-8 uppercase tracking-tight">Decisional Access</h2>
          <p className="text-xl text-white/90 leading-relaxed mb-6 font-medium italic border-b border-white/5 pb-4">
             At its core, the limitation of retrofit AI is not performance. It is access.
          </p>
          <p className="text-textSecondary leading-relaxed mb-6 font-light">
            A meaningful credit decision depends on multiple inputs coming together at the same time. Historical data, real-time behavior, policy rules, and model outputs all need to be evaluated together. In a fragmented system, these elements are separated. AI ends up working with a partial view, which limits how deep or accurate the decision can be.
          </p>
          <p className="text-textSecondary leading-relaxed mb-6 font-light">
            In contrast, AI-native systems are designed so that these components are not separated in the first place. Data flows into a single pipeline. Models operate within that pipeline. Policy rules are applied in the same flow. The outcome is not just faster decisions, but decisions that are grounded in complete context.
          </p>
        </section>

        <section id="explainability" className="mb-20">
          <h2 className="text-3xl font-bold font-header text-white mb-8 underline decoration-accent decoration-2 underline-offset-8 uppercase tracking-tight">Explainability by Design</h2>
          <p className="text-lg text-textSecondary leading-relaxed mb-6">
            Another area where the difference becomes clear is explainability. In financial services, decisions are not just about outcomes. They need to be justified. Whether it is for internal audit, regulators, or customers, the ability to explain why a decision was made is critical.
          </p>
          <div className="glass-card p-8 border-white/5 mb-8">
            <p className="text-textSecondary leading-relaxed mb-6 font-light italic">When AI is layered onto existing systems, it often behaves like a black box. Tracing a decision requires moving across multiple systems and reconstructing what happened. This is time-consuming and sometimes incomplete.</p>
            <p className="text-white leading-relaxed font-medium">In an AI-native setup, explainability is part of how the system is built. Every decision is linked to the data that was used, the model output, and the rules that were applied. This makes it easier to audit and easier to trust.</p>
          </div>
        </section>

        <section id="future" className="mb-20 pt-10 border-t border-white/5 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-header text-white mb-8 italic uppercase text-accent">The Strategic Choice</h2>
          <p className="text-lg text-textSecondary leading-relaxed mb-8 font-light">
            Re-architecting around AI requires more effort upfront, but it simplifies how the system behaves in the long run. Decisions become faster. Data becomes consistent. Operations become easier to scale.
          </p>
          <p className="text-xl text-white font-bold italic leading-relaxed">
            "This is not about replacing everything overnight. It is about moving toward a structure where decision-making is central, not an afterthought."
          </p>
        </section>

        <section id="vision" className="mb-10 lg:mb-20 p-10 bg-accent/5 rounded-3xl border border-accent/10">
           <h2 className="text-2xl font-bold font-header text-white mb-8 uppercase tracking-widest text-center shadow-accent/20">The Decision-Centric Era</h2>
           <p className="text-lg text-textSecondary leading-relaxed mb-6 text-center lg:text-left">
              Traditional lending systems were built to process transactions. They move applications from one stage to another. That model worked when the primary challenge was operational efficiency.
           </p>
           <p className="text-lg text-textSecondary leading-relaxed mb-6 text-center lg:text-left">
              Today, the challenge is different. It is about making better decisions, faster, and with accountability. Systems that are built around transactions will always struggle to do that. Systems that are built around decision-making will not.
           </p>
           <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent my-10"></div>
           <p className="text-xl text-white font-black uppercase text-center tracking-tighter italic">
              The choice will define how effectively they operate in the years ahead.
           </p>
        </section>
      </div>
    </div>
  );
};

export default ArticleBody;
