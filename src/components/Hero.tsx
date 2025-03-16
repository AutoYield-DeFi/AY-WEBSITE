
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

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
          
          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Effortlessly optimize LP positions with automated rebalancing, smart adjustments, and real-time yield optimization—no manual management required.
          </p>
          
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              Start Earning Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/about">
              <Button variant="outline" className="btn-secondary w-full sm:w-auto">
                How It Works
              </Button>
            </Link>
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
