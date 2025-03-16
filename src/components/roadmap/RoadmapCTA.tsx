
import React from 'react';
import { ArrowRight, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const RoadmapCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-muted/30 z-0"></div>
      <div className="absolute -right-20 top-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-10 bottom-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
          <h2 className="text-2xl font-bold mb-3">Join AutoYield's Development Journey</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get early access and provide feedback to shape our AI-powered liquidity management platform
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 transition-all">
              Request Early Access
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-full group border-primary/20 hover:border-primary/40" asChild>
              <Link to="/blog">
                <Bell size={16} className="mr-2" />
                Development Updates
              </Link>
            </Button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-muted-foreground">
              Follow our progress on <a href="#" className="text-primary hover:underline">Twitter</a> and 
              join our <a href="#" className="text-primary hover:underline">Discord community</a> for the latest updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapCTA;
