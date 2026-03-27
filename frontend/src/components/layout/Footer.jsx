import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageSquare, Mail, ArrowRight } from 'lucide-react';

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
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white/90 focus:outline-none mb-4 inline-block">
              VITTO<span className="text-accent">.</span>
            </Link>
            <p className="text-textSecondary mb-6 max-w-sm">
              AI-native decisioning infrastructure for the modern lending lifecycle. Built for scale, compliance, and speed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary border border-border flex items-center justify-center text-textSecondary hover:text-accent hover:border-accent transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary border border-border flex items-center justify-center text-textSecondary hover:text-accent hover:border-accent transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="mailto:hello@vitto.ai" className="w-10 h-10 rounded-full bg-primary border border-border flex items-center justify-center text-textSecondary hover:text-accent hover:border-accent transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/platform" className="text-textSecondary hover:text-accent transition-colors">Architecture</Link></li>
              <li><Link to="/lifecycle" className="text-textSecondary hover:text-accent transition-colors">Lending Lifecycle</Link></li>
              <li><Link to="/collections" className="text-textSecondary hover:text-accent transition-colors">Collections AI</Link></li>
              <li><Link to="/agentic-ai" className="text-textSecondary hover:text-accent transition-colors">Agentic Models</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-textSecondary hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/api-infra" className="text-textSecondary hover:text-accent transition-colors">API Docs</Link></li>
              <li><Link to="/contact" className="text-textSecondary hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/signup" className="text-textSecondary hover:text-accent transition-colors">Sign Up</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-textSecondary text-sm mb-4">Get the latest on AI credit infrastructure.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.com" 
                  className="w-full bg-primary border border-border rounded-md py-2.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-accent"
                  required
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="absolute right-2 top-1.5 p-1 text-textSecondary hover:text-accent focus:outline-none disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  {status === 'loading' ? (
                    <div className="w-4 h-4 rounded-full border-2 border-accent/30 border-t-accent animate-spin"></div>
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-xs text-green-500">Subscribed successfully.</p>
              )}
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-textSecondary">
          <p>&copy; {new Date().getFullYear()} Vitto Digital Credit Infrastructure.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
