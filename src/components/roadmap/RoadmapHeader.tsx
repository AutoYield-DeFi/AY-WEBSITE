
import React from 'react';

const RoadmapHeader = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-muted/20 to-white z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            AutoYield Roadmap
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">
            Our vision for building the most advanced AI-powered liquidity management platform on Solana
          </p>
          <p className="text-md text-muted-foreground animate-fade-up animation-delay-300">
            Starting Q2 2025, we're revolutionizing DeFi liquidity with intelligent automation and institutional-grade strategies
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapHeader;
