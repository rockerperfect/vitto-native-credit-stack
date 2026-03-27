import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import ProblemStatementSection from '../components/sections/ProblemStatementSection';
import WhyVittoSection from '../components/sections/WhyVittoSection';
import WorkflowComparison from '../components/sections/WorkflowComparison';
import PrinciplesSection from '../components/sections/PrinciplesSection';
import AboutCTA from '../components/sections/AboutCTA';

const About = () => {
  return (
    <div className="bg-primary text-textPrimary overflow-hidden">
      <AboutHero />
      <ProblemStatementSection />
      <WhyVittoSection />
      <WorkflowComparison />
      <PrinciplesSection />
      <AboutCTA />
    </div>
  );
};

export default About;
