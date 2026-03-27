import React, { useState } from 'react';
import { Terminal, ArrowRight, Layers, ShieldCheck, AlertCircle, Lock, Zap } from 'lucide-react';

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

const APIExamplesInline = () => {
  const [activeTab, setActiveTab] = useState('send-otp');
  const [activeSection, setActiveSection] = useState('payload');
  
  const examples = {
    'send-otp': {
      method: "POST",
      endpoint: "/api/auth/send-otp",
      headers: { 
        "Content-Type": "application/json",
        "X-Idempotency-Key": "unique-request-id-123"
      },
      payload: { "phoneNumber": "+91 9876543210" },
      response: { "success": true, "message": "OTP sent successfully" },
      errorResponse: { "success": false, "error": "Invalid OTP" }
    },
    'leads': {
      method: "POST",
      endpoint: "/api/leads",
      headers: { 
        "Authorization": "Bearer <JWT_TOKEN>",
        "Content-Type": "application/json"
      },
      payload: { "orgName": "Apex NBFC", "contactPerson": "Arjun Mehta", "useCase": "Collections" },
      response: { "success": true, "leadId": "LD-88921", "status": "CREATED" },
      errorResponse: { "success": false, "error": "Unauthorized Access" }
    },
    'policy-lookup': {
      method: "GET",
      endpoint: "/api/policy/underwriting/v1",
      headers: { 
        "Authorization": "Bearer <JWT_TOKEN>"
      },
      payload: null,
      response: { "policy_version": "2.4", "min_income": 25000, "min_score": 750 },
      errorResponse: { "success": false, "error": "Internal Server Error" }
    }
  };

  const getContent = () => {
    const ex = examples[activeTab];
    if (activeSection === 'headers') return ex.headers;
    if (activeSection === 'payload') return ex.payload || { "msg": "No request body for GET requests" };
    if (activeSection === 'response') return ex.response;
    if (activeSection === 'error') return ex.errorResponse;
    return {};
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
                  onClick={() => { setActiveTab(tab); setActiveSection('payload'); }}
                  className={`w-full p-6 text-left rounded-xl border transition-all flex justify-between items-center ${activeTab === tab ? 'bg-accent border-white text-white italic font-bold' : 'bg-primary border-border text-textSecondary'}`}
                 >
                    <span className="uppercase tracking-widest text-xs">{tab.replace(/-/g, ' ')}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] opacity-70 font-mono">{examples[tab].method}</span>
                      <ArrowRight size={16} />
                    </div>
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
                
                <div className="flex border-b border-border bg-primary/40 text-[10px] font-bold uppercase tracking-widest">
                  {['payload', 'headers', 'response', 'error'].map(section => (
                    <button 
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`flex-1 py-3 px-4 border-r border-border last:border-r-0 transition-colors ${activeSection === section ? 'bg-accent/10 text-accent' : 'text-textSecondary hover:text-white'}`}
                    >
                      {section}
                    </button>
                  ))}
                </div>

                <div className="p-10 overflow-x-auto bg-surface/20 min-h-[240px]">
                   <pre className="text-sm font-mono leading-relaxed text-accent">
                      {JSON.stringify(getContent(), null, 2)}
                   </pre>
                </div>
                <div className="p-4 bg-accent border-t border-white/10 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-white uppercase tracking-widest italic">
                     {activeSection === 'error' ? 'Error Schema' : activeSection === 'headers' ? 'Auth & Meta' : 'Institutional Data'}
                   </span>
                   {activeSection === 'error' ? <AlertCircle size={14} className="text-white" /> : <ShieldCheck size={14} className="text-white" />}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GovernanceResilience = () => {
  const policies = [
    { 
      title: "Rate Limiting", 
      desc: "Tiered institutional limits monitored via Redis. 1000 req/min for Enterprise tier, auto-sharding on bursts.", 
      icon: <Layers size={20} /> 
    },
    { 
      title: "Idempotency", 
      desc: "Critical endpoints require X-Idempotency-Key to prevent duplicate disbursements or payments.", 
      icon: <Lock size={20} /> 
    },
    { 
      title: "Payload Encryption", 
      desc: "AES-256 field-level encryption for sensitive borrower PII, ensuring data-at-rest compliance.", 
      icon: <ShieldCheck size={20} /> 
    },
    { 
      title: "Institutional Sharding", 
      desc: "Isolated API throughput per organization to prevent noisy-neighbor performance degradation.", 
      icon: <Zap size={20} /> 
    }
  ];

  return (
    <section className="py-24 bg-primary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white italic uppercase tracking-tighter">
            Platform <span className="text-accent underline decoration-accent decoration-1 underline-offset-8">Governance</span>
          </h2>
          <p className="text-textSecondary mt-6 max-w-2xl mx-auto italic font-light">
            Architected for institutional resilience. Our APIs enforce strict governance to ensure reliability across millions of transactions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {policies.map((p, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-border bg-surface hover:border-accent/40 transition-all group">
               <div className="w-10 h-10 rounded-lg bg-primary border border-border flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  {p.icon}
               </div>
               <h3 className="text-base font-bold text-white mb-3 italic tracking-tight">{p.title}</h3>
               <p className="text-xs text-textSecondary leading-relaxed italic">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const APIInfra = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <APIHero />
      <APIExamplesInline />
      <GovernanceResilience />
      <div className="py-20 text-center bg-surface border-t border-border">
         <h2 className="text-3xl font-bold text-white italic underline decoration-accent underline-offset-8">Production <span className="text-accent">Ready.</span></h2>
         <p className="text-textSecondary mt-4 italic">Integrated with standard JWT and X-Idempotency patterns.</p>
      </div>
    </div>
  );
};

export default APIInfra;
