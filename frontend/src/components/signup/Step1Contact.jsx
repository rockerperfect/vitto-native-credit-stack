import React, { useState } from 'react';
import { Phone, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

const Step1Contact = ({ onNext, setToken }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulating API call for demonstration, naturally you'd fetch to /api/auth/send-otp
    try {
       // Mock success
       setTimeout(() => {
          setIsOtpSent(true);
          setLoading(false);
       }, 1000);
    } catch (err) {
       setError('Failed to send OTP. Please try again.');
       setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
       // Mock success with a JWT
       setTimeout(() => {
          setToken("mock-jwt-token");
          onNext();
          setLoading(false);
       }, 1000);
    } catch (err) {
       setError('Invalid OTP. Please check and try again.');
       setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
         <div className="w-12 h-12 rounded-xl bg-surface border border-accent/20 flex items-center justify-center mx-auto mb-6 text-accent">
            <ShieldCheck size={24} />
         </div>
         <h2 className="text-2xl font-bold text-white mb-4">Contact Verification</h2>
         <p className="text-textSecondary text-sm font-light italic">Enter your mobile number to receive a secure access code.</p>
      </div>

      {!isOtpSent ? (
         <form onSubmit={handleSendOtp} className="space-y-6">
            <div className="relative">
               <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-accent opacity-60" size={18} />
               <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+91 00000 00000" 
                  className="w-full bg-surface border border-border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all"
                  required
               />
            </div>
            {error && <p className="text-red-500 text-xs text-center font-bold italic">{error}</p>}
            <button 
               type="submit" 
               disabled={loading}
               className="btn-primary w-full py-4 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2"
            >
               {loading ? <Loader2 className="animate-spin" size={18} /> : <>Generate OTP <ArrowRight size={18} /></>}
            </button>
         </form>
      ) : (
         <form onSubmit={handleVerifyOtp} className="space-y-6">
            <input 
               type="text" 
               value={otp}
               onChange={(e) => setOtp(e.target.value)}
               placeholder="Enter 6-digit OTP" 
               className="w-full bg-surface border border-accent/50 rounded-xl py-4 px-4 text-center text-2xl font-mono tracking-widest text-white focus:outline-none focus:border-accent transition-all animate-pulse"
               maxLength={6}
               required
            />
            {error && <p className="text-red-500 text-xs text-center font-bold italic">{error}</p>}
            <button 
               type="submit" 
               disabled={loading}
               className="btn-primary w-full py-4 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2"
            >
               {loading ? <Loader2 className="animate-spin" size={18} /> : <>Verify & Proceed <CheckCircle2 size={18} /></>}
            </button>
         </form>
      )}
    </div>
  );
};

export default Step1Contact;
