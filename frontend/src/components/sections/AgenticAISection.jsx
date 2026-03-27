import React from 'react';
import { UserCheck, ShieldPlus, Briefcase, Zap } from 'lucide-react';

const AgenticAISection = () => {
  const agents = [
    {
      title: "Borrower Agent",
      icon: <UserCheck className="text-accent" size={24} />,
      role: "Self-service Interface",
      tasks: ["Handles EMI & balance queries", "Instant statement generation", "Payment status tracking"],
      constraints: ["Pulls data from LMS + policy"]
    },
    {
      title: "Field Agent",
      icon: <ShieldPlus className="text-accent" size={24} />,
      role: "Assisted Collections",
      tasks: ["Next-best-action for recovery", "Customer behavior history", "PTP capture optimization"],
      constraints: ["Uses recovery probability signals"]
    },
    {
      title: "Underwriter Agent",
      icon: <Briefcase className="text-accent" size={24} />,
      role: "Internal Decision Support",
      tasks: ["Instant policy lookups", "Policy-bound decision justification", "Workflow assistance"],
      constraints: ["Bound to internal policy context"]
    }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-3 py-1 mb-6 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit">
            <Zap size={14} /> Agentic Intelligence Layer (AIL)
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Regulated BFSI Agents <br />
            <span className="text-textSecondary font-light italic">Operating within policy guardrails.</span>
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            Vitto agents do not generate free-form responses. They operate within strictly retrieved policy context and produce structured outputs, ensuring deterministic behavior at every interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-2xl border border-border bg-primary hover:border-accent/40 shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                  {agent.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{agent.title}</h3>
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mt-1 opacity-70 italic">{agent.role}</p>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="text-xs font-bold text-textPrimary uppercase tracking-widest mb-4 opacity-40">Core Functions</h4>
                  <ul className="space-y-3">
                    {agent.tasks.map((task, i) => (
                      <li key={i} className="flex gap-3 text-sm text-textSecondary font-medium leading-relaxed">
                        <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full border border-accent bg-transparent"></div>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-textPrimary uppercase tracking-widest mb-4 opacity-40">System Constraints</h4>
                  <div className="flex gap-3 p-3 rounded-lg bg-surface border border-border text-xs italic text-accent font-semibold">
                    <div className="mt-1 shrink-0 w-1 h-1 rounded-full bg-accent"></div>
                    {agent.constraints}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticAISection;
