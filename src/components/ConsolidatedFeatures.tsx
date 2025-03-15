
import React from 'react';
import { ShieldCheck, Sparkles, RefreshCw, MousePointer, BarChart3, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ConsolidatedFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Deposit funds once and our automated system handles everything else, from range setting to rebalancing.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: ShieldCheck,
      title: "Risk Protection",
      description: "Advanced protection mechanisms shield your funds during market volatility and minimize impermanent loss.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: RefreshCw,
      title: "Auto-Compounding",
      description: "Earned fees are automatically reinvested to maximize your long-term returns with compound growth.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Sparkles,
      title: "Yield Optimization",
      description: "Smart algorithms detect market trends and adjust your liquidity to ensure continuous fee accrual.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: MousePointer,
      title: "DeFi Simplified",
      description: "No complex decisions or technical knowledge required - perfect for beginners and experts alike.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Performance Insights",
      description: "Monitor your earnings, APR, and optimization activities with detailed real-time analytics.",
      color: "bg-rose-50 text-rose-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-muted/20">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Smart Liquidity Management</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Effortless Yield Generation</h2>
          <p className="text-lg text-muted-foreground">
            AutoYield combines cutting-edge technology with Meteora's DLMM pools to help you earn 
            more with less effort — whether you're new to DeFi or a seasoned pro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-xl hover:shadow-md opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Ready to experience hassle-free liquidity providing?
          </p>
          <Button className="btn-primary flex items-center justify-center gap-2 group text-lg px-8 py-6">
            Get Started
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsolidatedFeatures;
