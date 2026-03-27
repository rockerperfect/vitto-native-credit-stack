import React, { useState } from 'react';
import Step1Contact from '../components/signup/Step1Contact';
import Step2Organization from '../components/signup/Step2Organization';
import Step3Confirmation from '../components/signup/Step3Confirmation';
import { ShieldCheck } from 'lucide-react';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [authToken, setAuthToken] = useState('');
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });

  const nextStep = () => setStep(prev => prev + 1);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface border border-border mb-6 shadow-2xl">
            <ShieldCheck className="text-accent" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Onboard onto Vitto</h1>
          <p className="text-textSecondary text-sm uppercase tracking-widest font-semibold italic">Secure Institutional Access</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-12 relative px-4">
           <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -z-10"></div>
           {[1, 2, 3].map((s) => (
             <div 
               key={s}
               className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-2 ${
                 step >= s ? 'bg-accent border-accent text-white shadow-[0_0_15px_rgba(211,47,47,0.4)]' : 'bg-primary border-border text-textSecondary'
               }`}
             >
               {s}
             </div>
           ))}
        </div>

        {/* Form Container */}
        <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] -z-10"></div>
          
          {step === 1 && (
            <Step1Contact 
              onVerified={(token, info) => {
                setAuthToken(token);
                setContactInfo(info);
                nextStep();
              }} 
            />
          )}

          {step === 2 && (
            <Step2Organization 
              authToken={authToken}
              contactInfo={contactInfo}
              onSuccess={nextStep}
            />
          )}

          {step === 3 && (
            <Step3Confirmation />
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-textSecondary/50 font-medium uppercase tracking-widest">
            Policy-Bound & Fully Auditable Decisioning Infrastructure
        </div>
      </div>
    </div>
  );
};

export default Signup;
