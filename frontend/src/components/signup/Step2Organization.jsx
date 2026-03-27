import React, { useState } from 'react';
import { User, Building, LayoutGrid, Loader2, ArrowRight } from 'lucide-react';

const Step2Organization = ({ onNext, token }) => {
  const [formData, setFormData] = useState({
    name: '',
    orgName: '',
    useCase: 'Collections'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const useCases = ["Collections", "Underwriting", "Full-Stack Automation", "API Infrastructure"];

  const handleNext = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
       // Mocking the call to /api/leads with Authorization token
       setTimeout(() => {
          onNext();
          setLoading(false);
       }, 1000);
    } catch (err) {
       setError('Failed to create lead. Please check details and try again.');
       setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
         <div className="w-12 h-12 rounded-xl bg-surface border border-accent/20 flex items-center justify-center mx-auto mb-6 text-accent">
            <Building size={24} />
         </div>
         <h2 className="text-2xl font-bold text-white mb-4 italic">Organization Profile</h2>
         <p className="text-textSecondary text-sm font-light italic">Help us tailor your Vitto infrastructure journey.</p>
      </div>

      <form onSubmit={handleNext} className="space-y-6">
         <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent opacity-60 group-hover:opacity-100 transition-opacity" size={18} />
            <input 
               type="text" 
               value={formData.name}
               onChange={(e) => setFormData({...formData, name: e.target.value})}
               placeholder="Contact Person Full Name" 
               className="w-full bg-surface border border-border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all"
               required
            />
         </div>
         <div className="relative group">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-accent opacity-60 group-hover:opacity-100 transition-opacity" size={18} />
            <input 
               type="text" 
               value={formData.orgName}
               onChange={(e) => setFormData({...formData, orgName: e.target.value})}
               placeholder="Organization Name" 
               className="w-full bg-surface border border-border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all"
               required
            />
         </div>
         <div className="relative group">
            <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 text-accent opacity-60 group-hover:opacity-100 transition-opacity" size={18} />
            <select 
               value={formData.useCase}
               onChange={(e) => setFormData({...formData, useCase: e.target.value})}
               className="w-full bg-surface border border-border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer italic font-medium"
            >
               {useCases.map((uc, idx) => (
                 <option key={idx} value={uc} className="bg-primary">{uc}</option>
               ))}
            </select>
         </div>
         {error && <p className="text-red-500 text-xs text-center font-bold italic">{error}</p>}
         <button 
               type="submit" 
               disabled={loading}
               className="btn-primary w-full py-4 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2"
         >
               {loading ? <Loader2 className="animate-spin" size={18} /> : <>Create Lead <ArrowRight size={18} /></>}
         </button>
      </form>
    </div>
  );
};

export default Step2Organization;
