import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced background with better gradient and pattern */}
      <div className="absolute inset-0 hero-gradient opacity-70"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
              <span className="text-xs font-semibold tracking-wider uppercase">Powered by AI. Built on Solana</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            Smart Liquidity Management <span className="text-primary">on Solana</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 text-balance"
          >
            Effortlessly optimize LP positions with automated rebalancing, smart adjustments, and real-time yield optimization—no manual management required.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button asChild className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              <a
                href="https://getwaitlist.com/waitlist/27123"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Early Access
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Link to="/about">
              <Button variant="outline" className="btn-secondary w-full sm:w-auto">
                How It Works
              </Button>
            </Link>
          </motion.div>
          
          {/* Added security and platform indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;