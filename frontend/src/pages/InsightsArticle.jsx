import React, { useState, useEffect } from 'react';
import ArticleHero from '../components/sections/ArticleHero';
import ArticleBody from '../components/sections/ArticleBody';
import ComparisonSection from '../components/sections/ComparisonSection';
import InsightsArticleCTA from '../components/sections/InsightsArticleCTA';

const InsightsArticle = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="bg-primary text-textPrimary relative overflow-hidden">
      {/* Sticky Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-accent z-50 transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <ArticleHero />
      <ArticleBody />
      <ComparisonSection />
      <InsightsArticleCTA />
    </div>
  );
};

export default InsightsArticle;
