
import React from 'react';
import { Zap, Shield, Trophy } from 'lucide-react';

const RoadmapStrategic = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Focus Areas</h2>
          <p className="text-muted-foreground">
            Three core principles guiding our development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Zap className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Performance</h3>
            <p className="text-muted-foreground">Maximizing yield with AI-powered optimization strategies</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Shield className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Security</h3>
            <p className="text-muted-foreground">Enterprise-grade protection for your assets and transactions</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Trophy className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Simplicity</h3>
            <p className="text-muted-foreground">Making DeFi accessible through intuitive design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapStrategic;
