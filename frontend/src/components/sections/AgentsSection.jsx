import React from 'react';
import { UserPlus, ShieldPlus, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

const AgentsSection = () => {
  const agents = [
    {
      title: "Borrower Agent",
      icon: <UserPlus className="text-secondary" size={24} />,
      role: "Customer-Facing Interface",
      useCase: "Instant query handling for EMI due dates, statement requests, and loan eligibility status.",
      tasks: ["NLU-based query routing", "Statement generation", "Payment status updates"],
      context: "Accesses individual borrower history + LMS data."
    },
    {
      title: "Field Agent",
      icon: <ShieldPlus className="text-secondary" size={24} />,
      role: "On-Ground Collection Assistant",
      useCase: "Providing next-best-action for recovery, customer behavioral history, and PTP capture.",
      tasks: ["Behavioral insights", "PTP logging", "Collection prioritization"],
      context: "Accesses recovery scoring + historical repayment data."
    },
    {
      title: "Underwriter Agent",
      icon: <Briefcase className="text-secondary" size={24} />,
      role: "Internal Decision Support",
      useCase: "Instant retrieval of credit policy fragments to justify decisions or clarify eligibility.",
      tasks: ["Policy lookups", "Decision auditing", "Risk justification"],
      context: "Accesses institutional credit policy + underwriting logs."
    }
  ];

  return (
    <section className="py-24 bg-surface border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
             Specialized Agents for <br />
             <span className="text-accent italic font-light font-bold uppercase tracking-widest text-lg">BFSI Workflows</span>
          </h2>
          <p className="text-xl text-textSecondary leading-relaxed font-light">
             Each Vitto agent is specialized for a core operational vertical, ensuring policy adherence and high-speed execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {agents.map((agent, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-3xl border border-border bg-primary hover:bg-surface hover:border-accent/40 shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] -z-10 group-hover:bg-accent/10 transition-colors"></div>
               
               <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center mb-10 group-hover:bg-accent/10 group-hover:border-accent group-hover:text-accent transition-all shadow-xl group-hover:rotate-12">
                  {agent.icon}
               </div>

               <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors">
                  {agent.title}
               </h3>

               <p className="text-xs font-bold text-accent uppercase tracking-widest mb-6 opacity-70 italic">{agent.role}</p>
               
               <p className="text-textSecondary leading-relaxed text-sm font-medium mb-8 flex-1 italic">
                  {agent.useCase}
               </p>

               <div className="space-y-4 pt-6 border-t border-border/50">
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 opacity-40">Core Tasks</h4>
                  <ul className="space-y-3">
                    {agent.tasks.map((task, i) => (
                      <li key={i} className="flex gap-2 text-xs text-textSecondary font-medium leading-relaxed">
                        <CheckCircle2 size={12} className="text-accent shrink-0 mt-0.5" />
                        {task}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-3 p-3 rounded-xl bg-surface border border-border text-[10px] italic text-accent font-semibold flex items-center gap-2 group-hover:bg-primary transition-colors">
                    <Zap size={10} className="shrink-0" />
                    {agent.context}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
