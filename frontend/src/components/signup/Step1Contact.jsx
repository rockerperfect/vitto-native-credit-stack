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
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-white mb-2 tracking-tight italic uppercase tracking-widest text-xs opacity-60">Step 01 / Identity Verification</h2>
        <p className="text-textSecondary text-sm">Enter your contact details to receive a secure access code.</p>
      </div>

      <form onSubmit={status === 'otpSent' ? handleVerifyOTP : handleSendOTP} className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-textPrimary mb-3 opacity-60">Email or Phone</label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${status === 'otpSent' ? 'text-accent/40' : 'text-textSecondary group-focus-within:text-accent'}`}>
              {contact.includes('@') ? <Mail size={18} /> : <Phone size={18} />}
            </div>
            <input
              type="text"
              className={`w-full bg-primary border-2 rounded-xl py-4 pl-12 pr-4 text-white placeholder-textSecondary/30 focus:outline-none transition-all duration-300 ${status === 'otpSent' ? 'border-accent/20 bg-accent/5 opacity-50 cursor-not-allowed' : 'border-border focus:border-accent shadow-inner'}`}
              placeholder="e.g. name@bank.com or +91..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              disabled={status === 'otpSent' || status === 'sending'}
            />
          </div>
        </div>

        {status === 'otpSent' && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500">
            <label className="block text-xs font-bold uppercase tracking-widest text-textPrimary mb-3 opacity-60">Enter 6-Digit OTP</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
                <Lock size={18} />
              </div>
              <input
                type="text"
                className="w-full bg-primary border-2 border-accent rounded-xl py-4 pl-12 pr-4 text-white placeholder-textSecondary/30 focus:outline-none focus:shadow-[0_0_20px_rgba(211,47,47,0.2)]"
                placeholder="123456"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                disabled={status === 'verifying'}
              />
            </div>
            <p className="mt-4 text-xs font-semibold italic text-accent flex items-center gap-2">
              <CheckCircle2 size={14} /> {message}
            </p>
          </div>
        )}

        {error && (
          <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center gap-3 text-sm text-accent font-medium animate-pulse">
            <AlertCircle size={18} /> {error}
          </div>
        )}

        <button
          type="submit"
          className="btn-primary w-full py-5 text-sm uppercase tracking-[0.2em] font-bold shadow-2xl hover:shadow-accent/40 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status === 'sending' || status === 'verifying'}
        >
          {status === 'sending' || status === 'verifying' ? (
            <span className="flex items-center gap-2">
               <Loader2 className="animate-spin" size={20} /> Processing...
            </span>
          ) : status === 'otpSent' ? (
            'Verify Access Code'
          ) : (
            'Send Security Code'
          )}
        </button>
      </form>
      
      {status === 'otpSent' && (
        <div className="text-center mt-6">
          <button 
            type="button" 
            onClick={() => setStatus('idle')}
            className="text-xs font-bold uppercase tracking-widest text-textSecondary hover:text-accent transition-colors"
          >
            Correction: Re-enter Contact?
          </button>
        </div>
      )}
    </div>
  );
};

export default Step1Contact;
