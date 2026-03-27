import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Step3Confirmation = () => {
  return (
    <div className="text-center py-10 space-y-10 animate-in fade-in zoom-in duration-500">
      <div className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(211,47,47,0.3)] animate-bounce">
         <CheckCircle2 size={48} className="text-accent" />
      </div>
      
      <div className="space-y-4">
         <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">Registration <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">Successful</span></h2>
         <p className="text-textSecondary text-lg font-light leading-relaxed max-w-sm mx-auto italic">
            Your institutional lead has been created. Our decision-first team will contact you within 24 hours.
         </p>
      </div>

      <div className="pt-10 flex flex-col gap-4">
         <Link to="/platform" className="btn-primary py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            Explore Platform <ArrowRight size={18} />
         </Link>
         <Link to="/" className="text-textSecondary hover:text-white text-sm font-medium transition-colors italic">Return Home</Link>
      </div>
    </div>
  );
};

export default Step3Confirmation;
