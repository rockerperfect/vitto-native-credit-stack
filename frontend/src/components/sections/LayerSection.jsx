import React, { useState } from 'react';
import { UserPlus, ShieldHalf, RefreshCw, LayoutGrid, LayoutDashboard, ChevronDown, CheckCircle } from 'lucide-react';

const LayerSection = () => {
  const [expandedLayer, setExpandedLayer] = useState(0);

  const layers = [
    {
      id: "layer-a",
      title: "Layer A — Customer Acquisition",
      icon: <UserPlus className="text-secondary" />,
      purpose: "Capture and qualify incoming demand across multiple digital and offline channels.",
      modules: [
        { name: "Lead Management", desc: "Multi-source ingestion (web, partners, APIs)." },
        { name: "Partner Onboarding", desc: "Enable DSAs and fintech partners at scale." },
        { name: "Journey Orchestration", desc: "DIY / Assisted / Partner / Employee journeys." },
        { name: "Eligibility Pre-Check", desc: "Lightweight rule-based filtering before underwriting." }
      ],
      output: "Qualified lead + initial data payload"
    },
    {
      id: "layer-b",
      title: "Layer B — Underwriting & LOS",
      icon: <ShieldHalf className="text-secondary" />,
      purpose: "Evaluate risk and execute loan origination with deep policy integration.",
      modules: [
        { name: "KYC (Individual + Entity)", desc: "Identity verification and compliance checks." },
        { name: "UCIC & Deduplication", desc: "Single customer identity resolution." },
        { name: "Document Fetch & Analyzer", desc: "OCR + structured extraction." },
        { name: "Rule Engine", desc: "Policy-based eligibility checks." },
        { name: "Underwriting Engine", desc: "Combines model score + rules." },
        { name: "E-Sign & Disbursement", desc: "Agreement execution + fund transfer." }
      ],
      output: "Credit decision + disbursed loan"
    },
    {
      id: "layer-c",
      title: "Layer C — Collections Intelligence",
      icon: <RefreshCw className="text-secondary" />,
      purpose: "Optimize recovery and reduce delinquency through predictive scoring.",
      modules: [
        { name: "Case Allotment Engine", desc: "Assign accounts based on priority and geography." },
        { name: "PTP Capture", desc: "Promise-to-pay tracking." },
        { name: "Payment Gateway Integration", desc: "Direct payment links and reconciliation." },
        { name: "Omni-channel Communication", desc: "WhatsApp, SMS, AI calls." },
        { name: "Recovery Scoring", desc: "Predict probability of recovery." }
      ],
      output: "Optimized recovery actions"
    },
    {
      id: "layer-d",
      title: "Layer D — Loan Management System (LMS)",
      icon: <LayoutGrid className="text-secondary" />,
      purpose: "Manage active loan lifecycle, payments, and settlements.",
      modules: [
        { name: "Ledger Creation", desc: "Loan account and repayment schedule." },
        { name: "Insurance Auto Deduct", desc: "Embedded insurance handling." },
        { name: "Loan Closure", desc: "Final settlement workflows." },
        { name: "Debt Tagging", desc: "Classification (NPA, restructuring, etc.)." }
      ],
      output: "Updated loan state + financial records"
    },
    {
      id: "layer-e",
      title: "Layer E — CRM & Communication",
      icon: <LayoutDashboard className="text-secondary" />,
      purpose: "Provide unified visibility and engagement across the customer profile.",
      modules: [
        { name: "360 Customer View", desc: "Consolidated profile across lifecycle." },
        { name: "Service Management", desc: "Ticketing and issue resolution." },
        { name: "Internal Hub", desc: "Team collaboration and notes." },
        { name: "Campaign Engine", desc: "Targeted outreach (cross-sell, reminders)." },
        { name: "Reporting & Analytics", desc: "Portfolio dashboards and insights." }
      ],
      output: "Operational visibility + engagement actions"
    }
  ];

  return (
    <section className="py-24 bg-primary text-textPrimary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
          {/* Sticky Side Nav (Desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-40 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent italic mb-8">System Hierarchy</h4>
              {layers.map((layer, idx) => (
                <button 
                  key={idx}
                  onClick={() => {
                    setExpandedLayer(idx);
                    document.getElementById(layer.id).scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`w-full text-left p-6 rounded-xl border transition-all flex items-center gap-4 group ${
                    expandedLayer === idx ? 'border-accent bg-surface shadow-2xl' : 'border-border bg-transparent hover:border-accent/40'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    expandedLayer === idx ? 'bg-accent text-white' : 'bg-surface border border-border text-textSecondary group-hover:text-accent'
                  }`}>
                    {React.cloneElement(layer.icon, { size: 16 })}
                  </div>
                  <div>
                    <span className={`block text-[10px] font-bold uppercase tracking-widest ${expandedLayer === idx ? 'text-accent' : 'text-textSecondary opacity-40'}`}>Layer {idx + 1}</span>
                    <span className={`block text-xs font-semibold leading-relaxed mt-1 ${expandedLayer === idx ? 'text-white' : 'text-textSecondary/80 group-hover:text-textPrimary transition-colors'}`}>
                      {layer.id === "layer-a" ? "Acquisition" : 
                       layer.id === "layer-b" ? "Underwriting" : 
                       layer.id === "layer-c" ? "Collections" : 
                       layer.id === "layer-d" ? "LMS" : "CRM"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Layer Contents */}
          <div className="space-y-12">
            {layers.map((layer, idx) => (
              <div 
                key={idx} 
                id={layer.id}
                className={`p-10 rounded-2xl border transition-all group ${
                  expandedLayer === idx ? 'border-accent/60 bg-surface shadow-3xl' : 'border-border bg-primary'
                }`}
                onMouseEnter={() => setExpandedLayer(idx)}
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all ${
                    expandedLayer === idx ? 'bg-accent/10 border-accent/40 text-accent' : 'bg-surface border-border text-textSecondary group-hover:border-accent group-hover:text-accent'
                  }`}>
                    {React.cloneElement(layer.icon, { size: 28 })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{layer.title}</h2>
                    <p className="text-textSecondary leading-relaxed">{layer.purpose}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {layer.modules.map((mod, i) => (
                    <div key={i} className="p-5 rounded-xl border border-border bg-primary/40 hover:border-accent/30 transition-colors flex flex-col gap-2">
                       <h3 className="font-bold text-sm text-textPrimary tracking-tight">{mod.name}</h3>
                       <p className="text-xs text-textSecondary leading-relaxed font-medium">{mod.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center bg-primary/20 p-6 rounded-xl border-dashed border-border lg:hover:border-accent transition-all">
                  <div className="flex items-center gap-3 text-sm text-textSecondary font-bold uppercase tracking-widest">
                    <CheckCircle size={18} className="text-accent" /> Outcome Output
                  </div>
                  <div className="text-base font-bold text-white italic tracking-tight">{layer.output}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayerSection;
