import React from 'react';
import LifecycleHero from '../components/sections/LifecycleHero';
import LifecycleFlowDiagram from '../components/sections/LifecycleFlowDiagram';
import LayerSection from '../components/sections/LayerSection';
import CrossLayerIntelligence from '../components/sections/CrossLayerIntelligence';
import LifecycleCTA from '../components/sections/LifecycleCTA';

const Lifecycle = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden min-h-screen">
      <LifecycleHero />
      <LifecycleFlowDiagram />
      <div className="relative group">
         {/* Decorative side element */}
         <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-border/50 to-transparent -z-10 group-hover:via-accent/40 transition-all duration-1000"></div>
         <LayerSection />
      </div>
      <CrossLayerIntelligence />
      <LifecycleCTA />
    </div>
  );
};

export default Lifecycle;
