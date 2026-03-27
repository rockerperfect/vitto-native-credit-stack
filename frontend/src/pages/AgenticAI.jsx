import React from 'react';
import AgenticAIHero from '../components/sections/AgenticAIHero';
import WhyNotLLMSection from '../components/sections/WhyNotLLMSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import AgentsSection from '../components/sections/AgentsSection';
import GuardrailsSection from '../components/sections/GuardrailsSection';
import AgenticAICTA from '../components/sections/AgenticAICTA';

const AgenticAI = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <AgenticAIHero />
      <WhyNotLLMSection />
      <HowItWorksSection />
      <AgentsSection />
      <GuardrailsSection />
      <AgenticAICTA />
    </div>
  );
};

export default AgenticAI;
