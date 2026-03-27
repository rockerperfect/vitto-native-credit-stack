import React from 'react';
import { CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Step3Confirmation = () => {
  return (
    <div className="text-center py-8 animate-in fade-in zoom-in duration-700">
      <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(211,47,47,0.2)]">
        <CheckCircle className="text-accent" size={40} />
      </div>
      
      <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Onboarding Request Received</h2>
      <p className="text-lg text-textSecondary mb-10 max-w-sm mx-auto leading-relaxed font-medium italic">
        "Your institutional profile has been successfully deployed to our lead queue. Our technical team will reach out within 24 hours."
      </p>

      <div className="p-6 rounded-2xl bg-primary/50 border border-border mb-10 flex items-center justify-center gap-4 group">
        <ShieldCheck className="text-accent group-hover:scale-110 transition-transform" size={24} />
        <span className="text-xs font-bold uppercase tracking-widest text-textPrimary opacity-60 italic">Secure Infrastructure - Verified</span>
      </div>

      <div className="flex flex-col gap-4">
        <Link to="/" className="btn-primary w-full py-4 text-sm uppercase tracking-widest font-bold">
           Return to Homepage <ArrowRight size={18} />
        </Link>
        <Link to="/lifecycle" className="text-xs font-bold uppercase tracking-widest text-textSecondary hover:text-white transition-colors">
            Explore Lending Lifecycle
        </Link>
      </div>
    </div>
  );
};

export default Step3Confirmation;
