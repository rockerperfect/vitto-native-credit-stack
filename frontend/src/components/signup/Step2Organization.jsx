import React, { useState } from 'react';
import { Building2, MapPin, BarChart3, ChevronDown, Rocket, Loader2, AlertCircle } from 'lucide-react';
import { API_ENDPOINTS } from '../../api/config';

const Step2Organization = ({ authToken, contactInfo, onSuccess }) => {
  const [formData, setFormData] = useState({
    institution_name: '',
    institution_type: '',
    city: '',
    loan_book_size: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const institutionTypes = ['Bank', 'NBFC', 'MFI'];
  const bookSizes = ['< $10M', '$10M - $100M', '$100M - $1B', '> $1B'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.institution_name || !formData.institution_type || !formData.city) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.SUBMIT_LEAD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          ...formData,
          email: contactInfo.email,
          phone: contactInfo.phone,
        }),
      });

      const data = await response.json();
      if (data.success) {
        onSuccess();
      } else {
        setError(data.error || 'Failed to create lead');
      }
    } catch (err) {
      setError('Infrastructure failure. Check backend logs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
      <div className="mb-10 text-center md:text-left">
        <div className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-2">Metadata Configuration</div>
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight italic font-header">Institutional Profile</h2>
        <p className="text-textSecondary text-xs font-light uppercase tracking-widest opacity-60">Provisioning architecture for your organization.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2">
          <div className="flex justify-between items-end mb-4 px-1">
             <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Institution Name</label>
             <Building2 size={12} className="text-white/20" />
          </div>
          <div className="relative group">
            <input
              type="text"
              required
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-5 px-6 text-white placeholder-white/10 focus:outline-none focus:border-accent focus:bg-white/[0.04] transition-all duration-500 font-light group-hover:border-white/20"
              placeholder="e.g. Apex Global Bank"
              value={formData.institution_name}
              onChange={(e) => setFormData({ ...formData, institution_name: e.target.value })}
            />
          </div>
        </div>

        <div>
           <div className="flex justify-between items-end mb-4 px-1">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Entity Type</label>
           </div>
           <div className="relative group">
             <select
               required
               className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-5 px-6 text-white appearance-none focus:outline-none focus:border-accent focus:bg-white/[0.04] transition-all duration-500 font-light group-hover:border-white/20 cursor-pointer"
               value={formData.institution_type}
               onChange={(e) => setFormData({ ...formData, institution_type: e.target.value })}
             >
               <option value="" disabled className="bg-primary text-white/40">Select Type</option>
               {institutionTypes.map(t => (
                 <option key={t} value={t} className="bg-primary">{t}</option>
               ))}
             </select>
             <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-accent transition-colors" />
           </div>
        </div>

        <div>
           <div className="flex justify-between items-end mb-4 px-1">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Primary Jurisdiction</label>
              <MapPin size={12} className="text-white/20" />
           </div>
           <div className="relative group">
             <input
               type="text"
               required
               className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-5 px-6 text-white placeholder-white/10 focus:outline-none focus:border-accent focus:bg-white/[0.04] transition-all duration-500 font-light group-hover:border-white/20"
               placeholder="e.g. Mumbai / HK / London"
               value={formData.city}
               onChange={(e) => setFormData({ ...formData, city: e.target.value })}
             />
           </div>
        </div>

        <div className="md:col-span-2">
           <div className="flex justify-between items-end mb-4 px-1">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">AUM / Loan Book Size</label>
              <BarChart3 size={12} className="text-white/20" />
           </div>
           <div className="relative group">
             <select
               required
               className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-5 px-6 text-white appearance-none focus:outline-none focus:border-accent focus:bg-white/[0.04] transition-all duration-500 font-light group-hover:border-white/20 cursor-pointer"
               value={formData.loan_book_size}
               onChange={(e) => setFormData({ ...formData, loan_book_size: e.target.value })}
             >
               <option value="" disabled className="bg-primary text-white/40">Select Range</option>
               {bookSizes.map(size => (
                 <option key={size} value={size} className="bg-primary font-mono tracking-tighter">{size}</option>
               ))}
             </select>
             <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-accent transition-colors" />
           </div>
        </div>

        {error && (
          <div className="md:col-span-2 p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-4 text-xs text-accent font-bold uppercase tracking-widest animate-in fade-in zoom-in duration-300">
            <AlertCircle size={18} /> {error}
          </div>
        )}

        <button
          type="submit"
          className="md:col-span-2 group relative w-full py-6 rounded-xl bg-accent text-white overflow-hidden transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_40px_rgba(211,47,47,0.2)]"
          disabled={loading}
        >
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          <span className="relative z-10 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.4em]">
            {loading ? (
              <>
                 <Loader2 className="animate-spin" size={18} /> Deploying Infrastructure...
              </>
            ) : (
              <>
                Finalize Provisioning <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Step2Organization;
