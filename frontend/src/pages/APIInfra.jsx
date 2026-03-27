import React, { useState } from 'react';
import { Terminal, Code, Cpu, ArrowRight, Layers, ShieldCheck, Check } from 'lucide-react';

const APIHero = () => (
  <section className="bg-primary pt-32 pb-24 border-b border-border text-center">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="inline-block px-3 py-1 mb-8 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit mx-auto italic">
        <Terminal size={14} /> Developer Experience
      </div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
        Standardized <br />
        <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">Credit Infrastructure</span>
      </h1>
      <p className="text-xl md:text-2xl text-textSecondary leading-relaxed font-light italic border-l-4 border-accent pl-8 py-2 max-w-3xl mx-auto">
        Vitto's RESTful APIs allow institutions to integrate core decisioning logic into any channel. JSON-over-HTTP, fully documented, and institutional-grade.
      </p>
    </div>
  </section>
);

const APIExamples = () => {
  const [activeTab, setActiveTab] = useState('send-otp');
  
  const examples = {
    'send-otp': {
      method: "POST",
      endpoint: "/api/auth/send-otp",
      payload: { "phoneNumber": "+91 9876543210" },
      response: { "message": "OTP sent successfully" }
    },
    'leads': {
      method: "POST",
      endpoint: "/api/leads",
      headers: { "Authorization": "Bearer <JWT>" },
      payload: { "orgName": "Apex NBFC", "contactPerson": "Arjun Mehta", "useCase": "Collections" },
      response: { "leadId": "LD-88921", "status": "CREATED" }
    }
  };

  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 italic uppercase tracking-tighter">Unified <span className="text-accent">Data Integration.</span></h2>
            <p className="text-lg text-textSecondary mb-8 leading-relaxed font-light italic">
               Interact with Vitto's core infrastructure using standard REST patterns. Integrated with your existing CI/CD pipelines.
            </p>
            <div className="space-y-4">
               {Object.keys(examples).map(tab => (
                 <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full p-6 text-left rounded-xl border transition-all flex justify-between items-center ${activeTab === tab ? 'bg-accent border-white text-white italic font-bold' : 'bg-primary border-border text-textSecondary'}`}
                 >
                    <span className="uppercase tracking-widest text-xs">{tab}</span>
                    <ArrowRight size={16} />
                 </button>
               ))}
            </div>
          </div>

          <div className="relative group">
             <div className="absolute -inset-1 bg-accent/20 blur-xl opacity-50"></div>
             <div className="relative bg-primary border border-border rounded-3xl overflow-hidden shadow-3xl">
                <div className="p-4 border-b border-border bg-surface/50 flex justify-between items-center">
                   <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-textSecondary italic">{examples[activeTab].method} {examples[activeTab].endpoint}</span>
                </div>
                <div className="p-10 overflow-x-auto bg-surface/20">
                   <pre className="text-sm font-mono leading-relaxed text-accent">
                      {JSON.stringify(examples[activeTab].payload, null, 2)}
                   </pre>
                </div>
                <div className="p-4 bg-accent border-t border-white/10 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-white uppercase tracking-widest italic">Institutional Payload</span>
                   <ShieldCheck size={14} className="text-white" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const APIInfra = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <APIHero />
      <APIExamples />
      <div className="py-20 text-center">
         <h2 className="text-3xl font-bold text-white italic underline decoration-accent underline-offset-8">Modular API <span className="text-accent">Ready.</span></h2>
      </div>
    </div>
  );
};

export default APIInfra;
