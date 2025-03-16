
import React from 'react';
import { Bot, Shield, Cpu, Zap, BarChart3 } from 'lucide-react';

const RoadmapStrategic = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Core Development Pillars</h2>
          <p className="text-muted-foreground">
            Strategic initiatives guiding our development roadmap
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Bot className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-3">QUANT AI Engine</h3>
            <p className="text-muted-foreground">Advanced algorithmic strategies that continuously optimize liquidity positions through statistical analysis and machine learning</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Shield className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-3">Risk Management</h3>
            <p className="text-muted-foreground">Sophisticated impermanent loss protection and volatility management systems integrated directly into the protocol architecture</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Cpu className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-3">Solana Integration</h3>
            <p className="text-muted-foreground">Leveraging Solana's AI Agent Kit and high-performance architecture for millisecond-level position adjustments and optimization</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Zap className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-3">Performance Optimization</h3>
            <p className="text-muted-foreground">Continuous refinement of execution strategies to maximize capital efficiency and minimize gas costs for institutional-grade liquidity management</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <BarChart3 className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-3">Analytics Framework</h3>
            <p className="text-muted-foreground">Comprehensive performance tracking and visualization tools providing transparent insights into position performance and optimization decisions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapStrategic;
