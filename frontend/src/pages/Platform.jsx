import React from 'react';
import PlatformHero from '../components/sections/PlatformHero';
import DecisioningArchitecture from '../components/sections/DecisioningArchitecture';
import ModulesGrid from '../components/sections/ModulesGrid';
import AgenticAISection from '../components/sections/AgenticAISection';
import RAGPipelineSection from '../components/sections/RAGPipelineSection';
import SLMvsLLMSection from '../components/sections/SLMvsLLMSection';
import PlatformCTA from '../components/sections/PlatformCTA';

const Platform = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <PlatformHero />
      <DecisioningArchitecture />
      <ModulesGrid />
      <AgenticAISection />
      <RAGPipelineSection />
      <SLMvsLLMSection />
      <PlatformCTA />
    </div>
  );
};

export default Platform;
