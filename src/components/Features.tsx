
import React from 'react';
import FeatureCard from './FeatureCard';
import { LineChart, ArrowUpCircle, Lock, RefreshCw, Zap, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: LineChart,
      title: 'Optimized Yields',
      description: 'Automatically allocate assets to the highest performing DeFi protocols in real-time.'
    },
    {
      icon: Lock,
      title: 'Enhanced Security',
      description: 'Non-custodial architecture with multi-layered security measures to protect your assets.'
    },
    {
      icon: RefreshCw,
      title: 'Automatic Rebalancing',
      description: 'Smart algorithms continuously monitor and adjust your portfolio for maximum returns.'
    },
    {
      icon: Zap,
      title: 'Instant Liquidity',
      description: 'Access your funds whenever you need them without lengthy unstaking periods.'
    },
    {
      icon: ArrowUpCircle,
      title: 'One-Click Deposits',
      description: 'Simplified interface lets you deposit and start earning with just a single click.'
    },
    {
      icon: Layers,
      title: 'Multi-Chain Support',
      description: 'Seamlessly operate across multiple blockchains from a single dashboard.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-primary-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Key Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simplifying DeFi For Everyone</h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge technology with an intuitive interface, making DeFi accessible to all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-up" 
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
