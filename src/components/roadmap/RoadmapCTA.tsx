
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RoadmapCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-muted/30 z-0"></div>
      <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us On This Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're building the future of automated liquidity management, and we want you to be part of it. Follow our progress, provide feedback, and be among the first to experience each new feature as it launches.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full">
              Launch Beta App
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-full group" asChild>
              <Link to="/blog">
                Read Our Blog
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="font-medium mb-6">Have ideas to improve our roadmap?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for feedback from our community to help shape our roadmap and prioritize features.
            </p>
            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5">
              Share Your Feedback
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapCTA;
