
import React from 'react';
import { ArrowRight, TrendingUp, Shield } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced background with better gradient and pattern */}
      <div className="absolute inset-0 hero-gradient opacity-70"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
              <span className="text-xs font-semibold tracking-wider uppercase">Powered by AI. Built on Solana</span>
            </div>
          </div>
          
          <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Smart Liquidity Management <span className="text-primary">on Solana</span>
          </h1>
          
          {/* Added highlight banner for the 2-3x returns */}
          <div className="animate-fade-up animation-delay-100 flex items-center justify-center mb-6">
            <div className="px-4 py-2 bg-green-50 border border-green-100 rounded-lg inline-flex items-center">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm md:text-base font-semibold text-green-700">Earn 2-3x more than manual liquidity management</span>
            </div>
          </div>
          
          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Effortlessly maximize LP fees with automated rebalancing, smart position adjustments, and real-time yield optimization—no manual management required.
          </p>
          
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              Start Earning 2-3x More
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-secondary w-full sm:w-auto">
              How It Works
            </Button>
          </div>
          
          {/* Added security and platform indicators */}
          <div className="animate-fade-up animation-delay-400 flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Shield className="h-4 w-4 mr-1 text-blue-500" />
              <span>Audited Smart Contracts</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
              <span>Non-custodial</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-amber-500 mr-1"></div>
              <span>Automatic Compounding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
