
import React from 'react';
import { 
  RefreshCcw, 
  TrendingUp, 
  Shield, 
  Sparkles, 
  AlertTriangle 
} from 'lucide-react';

const AdvancedStrategies = () => {
  const strategies = [
    {
      icon: RefreshCcw,
      title: 'Smart Range Rebalancing',
      description: 'Our technology continuously analyzes price trends and liquidity depth to automatically rebalance when positions move outside optimal ranges.'
    },
    {
      icon: TrendingUp,
      title: 'Market-Adaptive Deployment',
      description: 'Our system detects trading volume surges and reallocates liquidity dynamically to ensure capital is placed where fee generation is highest.'
    },
    {
      icon: Shield,
      title: 'Loss Protection System',
      description: 'We monitor volatility metrics and adjust positions preemptively, shifting liquidity to safer price bands during large price swings.'
    },
    {
      icon: Sparkles,
      title: 'Auto-Compounding Fees',
      description: 'Earned trading fees are automatically reinvested to maximize long-term yield and reduce gas costs through compounding efficiency.'
    },
    {
      icon: AlertTriangle,
      title: 'Smart Stop-Loss Mechanism',
      description: 'Our system sets risk thresholds based on market conditions and automatically withdraws liquidity to stable assets if volatility exceeds safe limits.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary-muted/30 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Advanced Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Smart Strategies</h2>
          <p className="text-lg text-muted-foreground">
            Our proprietary technology employs multiple strategies to enhance capital efficiency and protect against adverse market conditions.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {strategies.map((strategy, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-white/50 border border-gray-100 shadow-sm opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-muted text-primary shrink-0">
                <strategy.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                <p className="text-muted-foreground">{strategy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedStrategies;
