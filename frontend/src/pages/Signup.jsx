import React, { useState } from 'react';
import Step1Contact from '../components/signup/Step1Contact';
import Step2Organization from '../components/signup/Step2Organization';
import Step3Confirmation from '../components/signup/Step3Confirmation';
import VittoLogo from '../components/layout/VittoLogo';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [authToken, setAuthToken] = useState('');
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });

  const nextStep = () => setStep(prev => prev + 1);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-24 relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      <div className="w-full max-w-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <VittoLogo iconSize={40} textSize="text-2xl sm:text-3xl" noLink />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter italic font-header uppercase">
            Institutional Onboarding
          </h1>
          <p className="text-accent font-bold text-[10px] uppercase tracking-[0.5em] animate-pulse">
            Secure Gateway v4.2.1
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-10 sm:mb-16 relative px-4 sm:px-8">
           <div className="absolute top-1/2 left-4 right-4 sm:left-8 sm:right-8 h-px bg-white/5 -z-10"></div>
           {[1, 2, 3].map((s) => (
             <div 
               key={s}
               className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xs font-black transition-all duration-700 border ${
                 step >= s 
                   ? 'bg-accent border-accent text-white shadow-[0_0_30px_rgba(211,47,47,0.3)] scale-110' 
                   : 'glass-card border-white/10 text-white/20'
               }`}
             >
               {s < step ? <div className="animate-in zoom-in duration-500 font-header italic">OK</div> : `0${s}`}
             </div>
           ))}
        </div>

        {/* Form Container */}
        <div className="glass-card p-6 sm:p-10 md:p-14 relative overflow-hidden group shadow-2xl border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] -z-10 group-hover:bg-accent/10 transition-colors duration-1000"></div>
          
          <div className="relative z-10">
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
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
            <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em] mb-4">
              End-to-End Encrypted . ISO 27001 Certified . SOC2 Type II
            </div>
            <div className="h-px w-24 bg-white/5 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
