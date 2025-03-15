
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
              <span className="text-xs font-semibold tracking-wider uppercase">Simplified DeFi</span>
            </div>
          </div>
          
          <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            Maximize your crypto assets with automated yield strategies
          </h1>
          
          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground mb-10 text-balance">
            AutoYield makes DeFi simple by automatically allocating your assets to the highest-yielding protocols, all in one intuitive platform.
          </p>
          
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#features" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              Explore Features
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="btn-secondary w-full sm:w-auto">
              Learn More
            </a>
          </div>
        </div>
        
        {/* Hero image/illustration */}
        <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto animate-fade-up animation-delay-400">
          <div className="glass-panel p-2 md:p-4 overflow-hidden">
            <div className="aspect-[16/9] rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="text-muted-foreground">Dashboard Preview</div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 w-28 h-28 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
