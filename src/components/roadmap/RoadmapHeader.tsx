
import React from 'react';
import { Clock } from 'lucide-react';

const RoadmapHeader = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-muted/20 to-white z-0"></div>
      <div className="absolute top-0 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl transform rotate-12"></div>
      <div className="absolute bottom-20 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full animate-fade-up">
            <span className="text-xs font-semibold tracking-wider uppercase">Strategic Timeline</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            AutoYield Evolution
          </h1>
          <p className="text-lg text-muted-foreground mb-6 animate-fade-up animation-delay-200">
            Our path to building the most sophisticated AI-powered liquidity management platform on Solana
          </p>
          <div className="flex justify-center gap-3 animate-fade-up animation-delay-300">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Clock size={14} />
              Starting Q2 2025
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              5 Development Phases
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapHeader;
