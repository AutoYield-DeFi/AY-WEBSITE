
import React from 'react';

const RoadmapHeader = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-muted/20 to-white z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Product Roadmap
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">
            Our 12-month vision for AutoYield on Solana
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapHeader;
