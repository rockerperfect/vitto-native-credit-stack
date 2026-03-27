import React, { useState } from 'react';
import Step1Contact from '../components/signup/Step1Contact';
import Step2Organization from '../components/signup/Step2Organization';
import Step3Confirmation from '../components/signup/Step3Confirmation';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [token, setToken] = useState(null);

  const nextStep = () => setStep(step + 1);

  return (
    <div className="bg-primary flex-1 flex flex-col justify-center items-center py-24 relative overflow-hidden text-textPrimary">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/5 blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-lg">
        {/* Progress Stepper */}
        <div className="flex justify-between items-center mb-16 relative">
          <div className="absolute top-[26px] left-[5%] right-[5%] h-[2px] bg-border -z-10"></div>
          
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center gap-3 relative z-10 w-fit">
              <div 
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-xl ${
                  step >= s 
                  ? 'border-accent bg-accent text-white shadow-accent/25 scale-110' 
                  : 'border-border bg-primary text-textSecondary opacity-50'
                }`}
              >
                <div className="text-xl font-bold font-mono tracking-tighter italic">{s}</div>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest italic transition-opacity ${step >= s ? 'text-accent opacity-100' : 'text-textSecondary opacity-40'}`}>
                {s === 1 ? 'Contact' : s === 2 ? 'Org Profile' : 'Complete'}
              </span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-surface border border-border rounded-[32px] p-8 md:p-12 shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          {step === 1 && <Step1Contact onNext={nextStep} setToken={setToken} />}
          {step === 2 && <Step2Organization onNext={nextStep} token={token} />}
          {step === 3 && <Step3Confirmation />}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-sm text-textSecondary font-light italic">Institutional Grade Self-Signup Stack &copy; Vitto 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
