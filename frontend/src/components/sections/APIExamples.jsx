import React, { useState } from 'react';
import { Terminal, Copy, Check, Code2, Info } from 'lucide-react';

const APIExamples = () => {
  const [activeTab, setActiveTab] = useState('auth');
  const [copied, setCopied] = useState(false);

  const examples = {
    auth: {
      title: "Send OTP Verification",
      method: "POST",
      endpoint: "/api/auth/send-otp",
      desc: "Initiate institutional access by sending a 6-digit secure code to a mobile or email address.",
      request: `{
  "contact": "cto@bankname.com"
}`,
      response: `{
  "success": true,
  "message": "OTP sent to cto@bankname.com"
}`
    },
    leads: {
      title: "Create Lead Record",
      method: "POST",
      endpoint: "/api/leads",
      desc: "Securely ingest institutional metadata. Requires a valid JWT in the Authorization header.",
      request: `{
  "institution_name": "Apex Finance",
  "institution_type": "NBFC",
  "city": "Mumbai",
  "loan_book_size": "$100M - $1B"
}`,
      response: `{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "status": "new"
  }
}`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(examples[activeTab].request);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-primary text-textPrimary border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight uppercase tracking-tighter">
              Developer <br />
              <span className="text-accent italic font-light lowercase font-medium italic underline decoration-accent decoration-2 underline-offset-8">Quick<ctrl94></span>
            </h2>
            <p className="text-xl text-textSecondary leading-relaxed font-light mb-12">
               Interact with Vitto's core infrastructure using standard JSON-over-HTTP. Integrated with your existing CI/CD pipelines.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => setActiveTab('auth')}
                className={`w-full p-6 rounded-2xl border flex items-center justify-between transition-all ${activeTab === 'auth' ? 'bg-surface border-accent shadow-2xl scale-[1.02] text-accent font-bold' : 'bg-primary border-border text-textSecondary hover:border-accent/40'}`}
              >
                <div className="flex items-center gap-3 italic tracking-widest text-xs uppercase opacity-80">
                   <Terminal size={18} /> Auth Lifecycle
                </div>
                <Code2 size={16} className={activeTab === 'auth' ? 'opacity-100' : 'opacity-0'} />
              </button>
              <button 
                onClick={() => setActiveTab('leads')}
                className={`w-full p-6 rounded-2xl border flex items-center justify-between transition-all ${activeTab === 'leads' ? 'bg-surface border-accent shadow-2xl scale-[1.02] text-accent font-bold' : 'bg-primary border-border text-textSecondary hover:border-accent/40'}`}
              >
                <div className="flex items-center gap-3 italic tracking-widest text-xs uppercase opacity-80">
                   <Code2 size={18} /> Leads Ingestion
                </div>
                <Terminal size={16} className={activeTab === 'leads' ? 'opacity-100' : 'opacity-0'} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full animate-in fade-in slide-in-from-right-8 duration-500">
             <div className="p-8 md:p-10 rounded-3xl border border-accent/20 bg-surface shadow-3xl relative overflow-hidden flex flex-col h-full group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] -z-10 group-hover:bg-accent/10 transition-colors"></div>
                
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                   <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{examples[activeTab].title}</h3>
                      <div className="flex items-center gap-3">
                         <span className="px-2 py-0.5 rounded bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest">{examples[activeTab].method}</span>
                         <code className="text-sm font-mono text-textSecondary italic">{examples[activeTab].endpoint}</code>
                      </div>
                   </div>
                   <button onClick={handleCopy} className="p-3 rounded-xl bg-primary border border-border text-textSecondary hover:text-accent hover:border-accent transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest group/btn active:scale-95">
                      {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                      <span className="hidden sm:inline italic">{copied ? 'Copied' : 'Copy Payload'}</span>
                   </button>
                </div>

                <div className="grid md:grid-cols-2 gap-10 flex-1">
                   <div>
                      <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 opacity-40 flex items-center gap-2">
                         <Terminal size={12} /> Request Payload
                      </h4>
                      <pre className="p-6 rounded-2xl bg-primary/80 border border-border font-mono text-sm leading-relaxed text-textSecondary overflow-x-auto shadow-inner h-[240px]">
                         {examples[activeTab].request}
                      </pre>
                   </div>
                   <div>
                      <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 opacity-40 flex items-center gap-2">
                         <Code2 size={12} /> Response Body
                      </h4>
                      <pre className="p-6 rounded-2xl bg-primary/80 border border-border font-mono text-sm leading-relaxed text-accent/80 overflow-x-auto shadow-inner h-[240px]">
                         {examples[activeTab].response}
                      </pre>
                   </div>
                </div>

                <div className="mt-8 flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20 text-xs text-textSecondary italic font-medium">
                   <Info size={16} className="text-accent shrink-0" />
                   {examples[activeTab].desc}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIExamples;
