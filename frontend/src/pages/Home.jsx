import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import AILayerSection from '../components/sections/AILayerSection';
import BusinessImpactSection from '../components/sections/BusinessImpactSection';
import SocialProofSection from '../components/sections/SocialProofSection';
import CTABanner from '../components/sections/CTABanner';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AILayerSection />
      <BusinessImpactSection />
      <SocialProofSection />
      <CTABanner />
    </>
  );
};

export default Home;
