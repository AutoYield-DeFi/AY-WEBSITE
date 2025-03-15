
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
              <span className="text-xs font-semibold tracking-wider uppercase">Built on Solana</span>
            </div>
          </div>
          
          <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            AI-Powered Liquidity Management on Solana
          </h1>
          
          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground mb-10 text-balance">
            AutoYield uses advanced AI to maximize your trading fees while mitigating impermanent loss in Meteora's DLMM pools.
          </p>
          
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              Start Earning Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-secondary w-full sm:w-auto">
              Learn How It Works
            </Button>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto animate-fade-up animation-delay-400">
          <div className="glass-panel p-2 md:p-4 overflow-hidden">
            <div className="aspect-[16/9] rounded-lg bg-card flex items-center justify-center overflow-hidden">
              <img 
                src="/dashboard-preview.png" 
                alt="AutoYield Dashboard"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/1200x675/1a1a2e/ffffff?text=AutoYield+Dashboard';
                }}
              />
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
