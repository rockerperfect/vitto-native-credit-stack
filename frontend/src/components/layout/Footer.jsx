import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageSquare, Mail, ArrowRight } from 'lucide-react';
import VittoLogo from './VittoLogo';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-primary border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <VittoLogo iconSize={40} textSize="text-2xl" noLink />
            </div>
            <p className="text-textSecondary mb-10 max-w-sm font-light leading-relaxed">
              AI-native decisioning infrastructure for the modern lending lifecycle. Built for institutional precision, compliance, and deterministic speed.
            </p>
            <div className="flex gap-6 grayscale opacity-40 hover:opacity-100 transition-all duration-500">
              <a href="#" className="text-white hover:text-accent transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-white hover:text-accent transition-colors"><MessageSquare size={20} /></a>
              <a href="mailto:hello@vitto.ai" className="text-white hover:text-accent transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-accent font-bold mb-8 uppercase tracking-[0.3em] text-[10px]">Pages</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-textSecondary text-sm font-bold hover:text-white transition-colors uppercase tracking-widest text-[10px]">About Us</Link></li>
              <li><Link to="/contact" className="text-textSecondary text-sm font-bold hover:text-white transition-colors uppercase tracking-widest text-[10px]">Contact</Link></li>
              <li><Link to="/signup" className="text-white text-sm font-bold hover:text-accent transition-colors uppercase tracking-widest text-[10px]">Sign Up</Link></li>
              <li><Link to="/api" className="text-textSecondary text-sm font-bold hover:text-white transition-colors uppercase tracking-widest text-[10px]">API Docs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-accent font-bold mb-8 uppercase tracking-[0.3em] text-[10px]">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/platform" className="text-textSecondary text-sm font-bold hover:text-white transition-colors uppercase tracking-widest text-[10px]">Architecture</Link></li>
              <li><Link to="/lifecycle" className="text-textSecondary text-sm font-bold hover:text-white transition-colors uppercase tracking-widest text-[10px]">Lending Lifecycle</Link></li>
              <li><Link to="/collections" className="text-textSecondary text-sm font-bold hover:text-white transition-colors uppercase tracking-widest text-[10px]">Collections AI</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-accent font-bold mb-8 uppercase tracking-[0.3em] text-[10px]">Stay Updated</h4>
            <p className="text-textSecondary text-[11px] font-bold uppercase tracking-widest mb-6 opacity-60">Get the latest on AI infrastructure.</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.com" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 pl-5 pr-12 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all group-hover:bg-white/[0.05]"
                  required
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="absolute right-3 top-2.5 p-1 text-textSecondary hover:text-accent focus:outline-none disabled:opacity-50 transition-colors"
                >
                  {status === 'loading' ? (
                    <div className="w-4 h-4 rounded-full border-2 border-accent/30 border-t-accent animate-spin"></div>
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest animate-in fade-in">Request Received Successfully.</p>
              )}
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Vitto Digital Credit Infrastructure. Institutional Only.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
