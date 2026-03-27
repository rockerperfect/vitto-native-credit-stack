import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="bg-accent py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Discover the key to grow your business
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="bg-white text-accent px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95 duration-200">
            Book a Demo <ArrowRight size={18} />
          </Link>
          <Link to="/platform" className="px-8 py-3 rounded-md font-medium border-2 border-white/30 text-white hover:bg-white/10 transition-colors duration-200">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
