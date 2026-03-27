import React from 'react';
import CollectionsHero from '../components/sections/CollectionsHero';
import CollectionsProblem from '../components/sections/CollectionsProblem';
import IntelligenceEngine from '../components/sections/IntelligenceEngine';
import RecoveryDecisioning from '../components/sections/RecoveryDecisioning';
import CollectionsModules from '../components/sections/CollectionsModules';
import CollectionsOutcomes from '../components/sections/CollectionsOutcomes';
import CollectionsCTA from '../components/sections/CollectionsCTA';

const Collections = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <CollectionsHero />
      <CollectionsProblem />
      <IntelligenceEngine />
      <RecoveryDecisioning />
      <CollectionsModules />
      <CollectionsOutcomes />
      <CollectionsCTA />
    </div>
  );
};

export default Collections;
