
import React from 'react';
import { ShieldCheck, Sparkles, RefreshCw, MousePointer, BarChart3, Zap, TrendingUp, Lock, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const ConsolidatedFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Set it and forget it - our AI handles everything from range setting to rebalancing, with minimal effort from you.",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: TrendingUp,
      title: "Optimized Returns",
      description: "Our AI constantly optimizes positions to help generate better yields than typical manual management.",
      color: "bg-green-50 text-green-600 border-green-100"
    },
    {
      icon: ShieldCheck,
      title: "Risk Protection",
      description: "Advanced mechanisms help shield your funds during market volatility and minimize impermanent loss.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      icon: RefreshCw,
      title: "Auto-Compounding",
      description: "Earned fees are automatically reinvested to help maximize long-term growth through compound returns.",
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      icon: MousePointer,
      title: "One-Click Liquidity",
      description: "Simplified interface reduces complex decisions - designed to be accessible for beginners and experts alike.",
      color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      icon: BarChart3,
      title: "Performance Insights",
      description: "Track your earnings, APR, and optimization activities with detailed real-time analytics.",
      color: "bg-rose-50 text-rose-600 border-rose-100"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white to-primary-muted/20">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Smart Liquidity Management</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Effortless Yield Generation</h2>
          <p className="text-lg text-muted-foreground">
            AutoYield combines AI technology with Meteora's DLMM pools to help you earn more with less effort — whether you're new to DeFi or a seasoned pro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 bg-white border rounded-xl hover:shadow-md opacity-0 animate-fade-up"
              style={{ 
                animationDelay: `${index * 100}ms`, 
                animationFillMode: 'forwards',
                borderColor: feature.color.split(" ")[2]
              }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Improved security section with more visual emphasis */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Enterprise-Grade Security</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Non-Custodial</h4>
                <p className="text-sm text-muted-foreground">You maintain full control of your assets at all times</p>
              </div>
            </div>
            
            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Audited Contracts</h4>
                <p className="text-sm text-muted-foreground">All code undergoes rigorous third-party security audits</p>
              </div>
            </div>
            
            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Risk Monitoring</h4>
                <p className="text-sm text-muted-foreground">Real-time systems detect and protect against potential threats</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <Link to="/docs/security-model">
              <Button className="btn-primary">
                Learn About Our Security
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsolidatedFeatures;
