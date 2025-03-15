
import React from 'react';

const RoadmapHeader = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-muted/20 to-white z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full animate-fade-in">
            <span className="text-xs font-semibold tracking-wider uppercase">Our Journey Forward</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Product Roadmap
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">
            Charting our course through the next 12 months as we build the future of automated liquidity management on Solana
          </p>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-fade-up animation-delay-400">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-6 text-center">
              <div className="font-medium text-primary mb-1">Current Phase</div>
              <div className="text-2xl font-bold">Beta Launch</div>
              <div className="text-sm text-muted-foreground mt-1">Q2 2024</div>
            </div>
            <div className="p-6 text-center">
              <div className="font-medium text-primary mb-1">Next Milestone</div>
              <div className="text-2xl font-bold">Advanced Strategies</div>
              <div className="text-sm text-muted-foreground mt-1">Q3 2024</div>
            </div>
            <div className="p-6 text-center">
              <div className="font-medium text-primary mb-1">Long-term Target</div>
              <div className="text-2xl font-bold">Cross-chain Expansion</div>
              <div className="text-sm text-muted-foreground mt-1">Q2 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapHeader;
