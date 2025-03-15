
import React from 'react';
import FeatureCard from './FeatureCard';
import { 
  Sparkles, 
  ShieldCheck, 
  RefreshCw, 
  Zap, 
  MousePointer, 
  BarChart3
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Our advanced technology continuously analyzes market conditions to optimize your liquidity positions without any manual work.'
    },
    {
      icon: ShieldCheck,
      title: 'Capital Protection',
      description: 'Built-in protection mechanisms and smart strategies keep your funds safe during market volatility.'
    },
    {
      icon: RefreshCw,
      title: 'Auto-Compounding',
      description: 'Earned trading fees are automatically reinvested to maximize your long-term returns and efficiency.'
    },
    {
      icon: Sparkles,
      title: 'Dynamic Optimization',
      description: 'Smart algorithms detect price trends and adjust liquidity ranges to ensure continuous fee accrual in any market.'
    },
    {
      icon: MousePointer,
      title: 'One-Click Deployment',
      description: 'Deposit funds once and AutoYield handles everything - splitting tokens, setting ranges, and optimization.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Monitor performance with detailed insights into earnings, APR, and rebalancing activity.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-primary-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Smart Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Liquidity Management</h2>
          <p className="text-lg text-muted-foreground">
            AutoYield combines advanced technology with Meteora's DLMM pools to deliver institutional-grade yield strategies with minimal effort.
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
