
import React from 'react';
import { Bot, Shield, Cpu } from 'lucide-react';

const RoadmapStrategic = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Strategic Pillars</h2>
          <p className="text-muted-foreground">
            Key initiatives guiding our development roadmap
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Bot className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">QUANT AI Engine</h3>
            <p className="text-muted-foreground">Advanced autonomous strategies that optimize liquidity ranges and maximize yields in real-time</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Shield className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Risk Mitigation</h3>
            <p className="text-muted-foreground">Smart impermanent loss protection and volatility management built directly into our core protocol</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="bg-primary-muted/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Cpu className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Solana Integration</h3>
            <p className="text-muted-foreground">Leveraging Solana's AI Agent Kit and high-performance architecture for lightning-fast strategy execution</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapStrategic;
