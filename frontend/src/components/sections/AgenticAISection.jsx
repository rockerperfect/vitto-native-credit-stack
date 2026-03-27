import React from 'react';
import { Zap } from 'lucide-react';

const AgentVisuals = [
  // Borrower Agent: User pulse
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <circle cx="40" cy="30" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M20 65 C20 50 30 45 40 45 C50 45 60 50 60 65" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
    <path d="M65 25 Q70 30 65 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse"/>
  </svg>,
  // Field Agent: Shield with signal
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <path d="M40 10 L65 20 V45 C65 60 40 70 40 70 C40 70 15 60 15 45 V20 L40 10Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M30 40 L38 48 L55 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.3"/>
  </svg>,
  // Underwriter Agent: Briefcase with policy check
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent group-hover:scale-110 transition-transform">
    <rect x="20" y="25" width="40" height="35" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M30 25 V20 H50 V25" stroke="currentColor" strokeWidth="2"/>
    <line x1="30" y1="40" x2="50" y2="40" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
    <line x1="30" y1="50" x2="45" y2="50" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
    <circle cx="65" cy="55" r="8" fill="primary" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M62 55 L64 57 L68 53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
];

const AgenticAISection = () => {
  const agents = [
    {
      title: "Borrower Agent",
      icon: AgentVisuals[0],
      role: "Self-service Interface",
      tasks: ["Handles EMI & balance queries", "Instant statement generation", "Payment status tracking"],
      constraints: ["Pulls data from LMS + policy"]
    },
    {
      title: "Field Agent",
      icon: AgentVisuals[1],
      role: "Assisted Collections",
      tasks: ["Next-best-action for recovery", "Customer behavior history", "PTP capture optimization"],
      constraints: ["Uses recovery probability signals"]
    },
    {
      title: "Underwriter Agent",
      icon: AgentVisuals[2],
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
