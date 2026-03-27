import React from 'react';
import APIHero from '../components/sections/APIHero';
import APIPhilosophy from '../components/sections/APIPhilosophy';
import APIExamples from '../components/sections/APIExamples';
import IntegrationFlow from '../components/sections/IntegrationFlow';
import APICTA from '../components/sections/APICTA';

const API = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <APIHero />
      <APIPhilosophy />
      <APIExamples />
      <IntegrationFlow />
      <APICTA />
    </div>
  );
};

export default API;
