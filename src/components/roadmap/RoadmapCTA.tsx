
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RoadmapCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-muted/30 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of building the future of automated liquidity management on Solana
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full">
              Launch App
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-full group" asChild>
              <Link to="/blog">
                Read Updates
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapCTA;
