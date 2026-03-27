import React from 'react';
import AgenticAIHero from '../components/sections/AgenticAIHero';
import AgenticAISection from '../components/sections/AgenticAISection';
import RAGPipelineSection from '../components/sections/RAGPipelineSection';
import SLMvsLLMSection from '../components/sections/SLMvsLLMSection';
import GuardrailsOutput from '../components/sections/GuardrailsOutput';
import CTABanner from '../components/sections/CTABanner';

const AgenticAI = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <AgenticAIHero />
      <AgenticAISection />
      <RAGPipelineSection />
      <SLMvsLLMSection />
      <GuardrailsOutput />
      <CTABanner />
    </div>
  );
};

export default AgenticAI;
