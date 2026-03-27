import React, { useState } from 'react';
import { Mail, Phone, Lock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Step1Contact = ({ onVerified }) => {
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, otpSent, verifying, error
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!contact) {
      setError('Email or phone is required');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('otpSent');
        setMessage(data.message);
      } else {
        setStatus('error');
        setError(data.error);
      }
    } catch (err) {
      setStatus('error');
      setError('Connection failure. Check if server is running.');
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError('OTP is required');
      return;
    }

    setStatus('verifying');
    setError('');

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact, otp }),
      });

      const data = await response.json();
      if (data.success) {
        onVerified(data.token, { email: contact.includes('@') ? contact : '', phone: !contact.includes('@') ? contact : '' });
      } else {
        setStatus('otpSent');
        setError(data.error);
      }
    } catch (err) {
      setStatus('otpSent');
      setError('Verification failed. Try again.');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-10">
        <div className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-2">Authentication</div>
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight italic font-header">Identity Verification</h2>
        <p className="text-textSecondary text-xs font-light uppercase tracking-widest opacity-60">Enter institutional credentials to proceed.</p>
      </div>

      <form onSubmit={status === 'otpSent' ? handleVerifyOTP : handleSendOTP} className="space-y-8">
        <div>
          <div className="flex justify-between items-end mb-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Credential Input</label>
            <span className="text-[9px] font-mono text-white/20 italic">v2.1-SECURE</span>
          </div>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-all duration-500 ${status === 'otpSent' ? 'text-accent/20' : 'text-white/20 group-focus-within:text-accent'}`}>
              {contact.includes('@') ? <Mail size={18} /> : <Phone size={18} />}
            </div>
            <input
              type="text"
              className={`w-full bg-white/[0.02] border border-white/10 rounded-xl py-5 pl-14 pr-5 text-white placeholder-white/10 focus:outline-none transition-all duration-500 font-light ${status === 'otpSent' ? 'opacity-30 grayscale cursor-not-allowed bg-transparent' : 'focus:border-accent focus:bg-white/[0.04] group-hover:border-white/20'}`}
              placeholder="name@institution.com or +91..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              disabled={status === 'otpSent' || status === 'sending'}
              autoFocus
            />
          </div>
        </div>

        {status === 'otpSent' && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
             <div className="flex justify-between items-end mb-4">
               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">Secured Access Key</label>
               <span className="text-[9px] font-mono text-accent/40 italic">EXPIRING IN 5:00</span>
             </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-accent animate-pulse">
                <Lock size={18} />
              </div>
              <input
                type="text"
                className="w-full bg-accent/5 border border-accent/40 rounded-xl py-5 pl-14 pr-5 text-white placeholder-white/20 focus:outline-none focus:shadow-[0_0_40px_rgba(211,47,47,0.15)] transition-all duration-500 font-mono tracking-[0.5em] text-lg uppercase"
                placeholder="000000"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                disabled={status === 'verifying'}
                autoFocus
              />
            </div>
            <div className="mt-4 p-3 bg-accent/5 border border-accent/10 rounded-lg flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-accent italic">
              <CheckCircle2 size={14} className="animate-bounce" /> {message || 'Security code transmitted successully.'}
            </div>
          </div>
        )}

        {error && (
          <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-4 text-xs text-accent font-bold uppercase tracking-widest animate-in fade-in zoom-in duration-300">
            <AlertCircle size={18} /> {error}
          </div>
        )}

        <button
          type="submit"
          className="group relative w-full py-5 rounded-xl bg-accent text-white overflow-hidden transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(211,47,47,0.2)]"
          disabled={status === 'sending' || status === 'verifying'}
        >
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          <span className="relative z-10 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.3em]">
            {status === 'sending' || status === 'verifying' ? (
              <>
                 <Loader2 className="animate-spin" size={18} /> Encrypting...
              </>
            ) : status === 'otpSent' ? (
              'Verify Access Key'
            ) : (
              'Initialize Gateway'
            )}
          </span>
        </button>
      </form>
      
      {status === 'otpSent' && (
        <div className="text-center pt-4 border-t border-white/5">
          <button 
            type="button" 
            onClick={() => setStatus('idle')}
            className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-accent transition-all duration-500 flex items-center justify-center gap-2 mx-auto"
          >
            <span className="w-1 h-1 rounded-full bg-accent/40 animate-ping"></span>
            Interface Reset: Different Credential?
          </button>
        </div>
      )}
    </div>
  );
};

export default Step1Contact;
