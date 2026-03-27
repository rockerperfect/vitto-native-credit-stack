import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';

const ContactHero = () => (
  <section className="bg-primary pt-32 pb-24 border-b border-border text-center">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="inline-block px-3 py-1 mb-8 border border-accent/20 rounded-full bg-accent/5 text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2 w-fit mx-auto italic">
        <MessageSquare size={14} /> Institutional Support
      </div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
        Connect with <br />
        <span className="text-accent italic font-light italic underline decoration-accent decoration-2 underline-offset-8">Our Credit Experts</span>
      </h1>
      <p className="text-xl md:text-2xl text-textSecondary leading-relaxed font-light italic border-l-4 border-accent pl-8 py-2 max-w-3xl mx-auto">
        Whether you are implementing our RAG pipelines or scaling your collections, our technical team is ready to assist.
      </p>
    </div>
  </section>
);

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-surface border border-accent/20 rounded-3xl p-12 text-center animate-in zoom-in duration-500">
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
           <CheckCircle className="text-green-500" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Transmission Received</h3>
        <p className="text-textSecondary italic">Our institutional desk will contact you within 2 business hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-8 text-xs font-bold uppercase tracking-widest text-accent hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-border rounded-3xl p-10 shadow-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] -z-10 group-hover:bg-accent/10 transition-colors"></div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
             <label className="text-[10px] font-bold uppercase tracking-widest text-textSecondary italic">Full Name</label>
             <input required type="text" className="w-full bg-primary border border-border rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors italic" placeholder="Arjun Mehta" />
          </div>
          <div className="space-y-3">
             <label className="text-[10px] font-bold uppercase tracking-widest text-textSecondary italic">Work Email</label>
             <input required type="email" className="w-full bg-primary border border-border rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors italic" placeholder="arjun@nbfc.com" />
          </div>
        </div>
        <div className="space-y-3">
           <label className="text-[10px] font-bold uppercase tracking-widest text-textSecondary italic">Institutional Role</label>
           <select className="w-full bg-primary border border-border rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent appearance-none italic">
             <option>Chief Risk Officer</option>
             <option>Technology Lead</option>
             <option>Operations Manager</option>
             <option>Other</option>
           </select>
        </div>
        <div className="space-y-3">
           <label className="text-[10px] font-bold uppercase tracking-widest text-textSecondary italic">Inquiry Details</label>
           <textarea required rows={4} className="w-full bg-primary border border-border rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors italic" placeholder="How can Vitto scale your infrastructure?"></textarea>
        </div>
        <button type="submit" disabled={status === 'sending'} className="btn-primary w-full py-5 text-sm uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-3 active:scale-[0.98]">
           {status === 'sending' ? <Loader2 className="animate-spin" size={20} /> : <><Send size={18} /> Deploy Transmission</>}
        </button>
      </form>
    </div>
  );
};

const ContactInfo = () => (
  <div className="space-y-12">
     <div className="space-y-6">
        <h3 className="text-xl font-bold text-white italic tracking-tight">Direct Channels</h3>
        <div className="space-y-6">
           <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                 <Mail size={20} />
              </div>
              <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-textSecondary">Email</p>
                 <p className="text-white italic">institutional@vitto.ai</p>
              </div>
           </div>
           <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                 <Phone size={20} />
              </div>
              <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-textSecondary">Global Desk</p>
                 <p className="text-white italic">+91 (22) 4950 2000</p>
              </div>
           </div>
        </div>
     </div>

     <div className="space-y-6">
        <h3 className="text-xl font-bold text-white italic tracking-tight">Headquarters</h3>
        <div className="flex items-start gap-6 group">
           <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
              <MapPin size={20} />
           </div>
           <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-textSecondary">Address</p>
              <p className="text-white italic leading-relaxed">
                 Level 14, Tower B, <br />
                 World Trade Center, Mumbai <br />
                 Maharashtra 400005
              </p>
           </div>
        </div>
     </div>
  </div>
);

const Contact = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <ContactHero />
      <section className="py-24 bg-primary relative">
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/5 blur-[150px] -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
               <ContactForm />
            </div>
            <div className="lg:col-span-1">
               <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <div className="py-20 text-center bg-surface border-t border-border">
         <p className="text-textSecondary text-xs uppercase tracking-[0.4em] font-bold italic opacity-40">Vitto Institutional Grade Infrastructure - © 2026</p>
      </div>
    </div>
  );
};

export default Contact;
