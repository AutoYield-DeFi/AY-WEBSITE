
import React from 'react';
import { Flag, Target, Zap } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We're on a mission to democratize liquidity management on Solana, making sophisticated
          strategies accessible to everyone.
        </p>
      </div>
      
      <div className="glass-panel p-8 md:p-12 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Flag size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p className="text-muted-foreground">
              A DeFi ecosystem where intelligent automation eliminates technical barriers, 
              allowing anyone to access institutional-grade liquidity strategies.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Purpose</h3>
            <p className="text-muted-foreground">
              To bridge the gap between complex DeFi protocols and everyday users through 
              AI-powered automation and intuitive interfaces.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Promise</h3>
            <p className="text-muted-foreground">
              Security, transparency, and performance. We're committed to building 
              reliable systems that protect assets while maximizing returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
