import React from 'react';
import { CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Step3Confirmation = () => {
  return (
    <div className="text-center py-8 animate-in fade-in zoom-in duration-1000">
      <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(211,47,47,0.2)] border-accent/20 group">
        <CheckCircle className="text-accent group-hover:scale-110 transition-transform duration-700" size={48} />
      </div>
      
      <div className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 animate-pulse">Transmission Successful</div>
      <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter italic font-header uppercase">Onboarding Request Received</h2>
      
      <p className="text-lg text-textSecondary mb-12 max-w-sm mx-auto leading-relaxed font-light italic opacity-80">
        "Your institutional profile has been successfully deployed to our lead queue. Our technical concierge will reach out via secure channel within 24 hours."
      </p>

      <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 mb-12 flex items-center justify-center gap-6 group hover:bg-white/[0.04] transition-all duration-500">
        <ShieldCheck className="text-accent group-hover:rotate-12 transition-transform duration-500" size={28} />
        <div className="text-left">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Secure Pipeline</div>
          <div className="text-[9px] font-mono text-white/20 italic tracking-widest uppercase">Encryption: AES-256-GCM</div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Link to="/" className="group relative w-full py-5 rounded-xl bg-accent text-white overflow-hidden transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(211,47,47,0.2)]">
           <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
           <span className="relative z-10 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.4em]">
              Return to Nexus <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </span>
        </Link>
        <Link to="/lifecycle" className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20 hover:text-white transition-all duration-700">
            Explore System Architecture
        </Link>
      </div>
    </div>
  );
};

export default Step3Confirmation;
