import React, { useState } from 'react';
import { Building2, MapPin, BarChart3, ChevronDown, Rocket, Loader2, AlertCircle } from 'lucide-react';

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
      const response = await fetch('/api/leads', {
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
    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-2 tracking-tight italic uppercase tracking-widest text-xs opacity-60">Step 02 / Institutional Metadata</h2>
        <p className="text-textSecondary text-sm">Provide your organization details to personalize your credit stack.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-widest text-textPrimary mb-3 opacity-60">Institution Name</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-textSecondary group-focus-within:text-accent">
              <Building2 size={18} />
            </div>
            <input
              type="text"
              required
              className="w-full bg-primary border-2 border-border rounded-xl py-4 pl-12 pr-4 text-white placeholder-textSecondary/30 focus:outline-none focus:border-accent transition-all duration-300"
              placeholder="e.g. Apex Global Bank"
              value={formData.institution_name}
              onChange={(e) => setFormData({ ...formData, institution_name: e.target.value })}
            />
          </div>
        </div>

        <div>
           <label className="block text-xs font-bold uppercase tracking-widest text-textPrimary mb-3 opacity-60">Institution Type</label>
           <div className="relative group">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-textSecondary group-focus-within:text-accent">
               <ChevronDown size={14} className="absolute left-4" />
             </div>
             <select
               required
               className="w-full bg-primary border-2 border-border rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-accent transition-all duration-300"
               value={formData.institution_type}
               onChange={(e) => setFormData({ ...formData, institution_type: e.target.value })}
             >
               <option value="" disabled className="bg-primary">Select Type</option>
               {institutionTypes.map(t => (
                 <option key={t} value={t} className="bg-primary">{t}</option>
               ))}
             </select>
           </div>
        </div>

        <div>
           <label className="block text-xs font-bold uppercase tracking-widest text-textPrimary mb-3 opacity-60">City</label>
           <div className="relative group">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-textSecondary group-focus-within:text-accent">
               <MapPin size={18} />
             </div>
             <input
               type="text"
               required
               className="w-full bg-primary border-2 border-border rounded-xl py-4 pl-12 pr-4 text-white placeholder-textSecondary/30 focus:outline-none focus:border-accent transition-all duration-300"
               placeholder="e.g. Mumbai"
               value={formData.city}
               onChange={(e) => setFormData({ ...formData, city: e.target.value })}
             />
           </div>
        </div>

        <div className="md:col-span-2">
           <label className="block text-xs font-bold uppercase tracking-widest text-textPrimary mb-3 opacity-60">Estimated Loan Book Size</label>
           <div className="relative group">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-textSecondary group-focus-within:text-accent">
               <BarChart3 size={18} />
             </div>
             <select
               required
               className="w-full bg-primary border-2 border-border rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-accent transition-all duration-300"
               value={formData.loan_book_size}
               onChange={(e) => setFormData({ ...formData, loan_book_size: e.target.value })}
             >
               <option value="" disabled className="bg-primary">Select Range</option>
               {bookSizes.map(size => (
                 <option key={size} value={size} className="bg-primary">{size}</option>
               ))}
             </select>
           </div>
        </div>

        {error && (
          <div className="md:col-span-2 p-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center gap-3 text-sm text-accent font-medium">
            <AlertCircle size={18} /> {error}
          </div>
        )}

        <button
          type="submit"
          className="md:col-span-2 btn-primary py-5 text-sm uppercase tracking-[0.2em] font-bold shadow-2xl hover:shadow-accent/40 active:scale-[0.98] disabled:opacity-50"
          disabled={loading}
        >
          {loading ? (
             <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" size={20} /> Deploying Lead Profile...
             </span>
          ) : (
            <span className="flex items-center gap-2">
               Complete Registration <Rocket size={18} />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Step2Organization;
