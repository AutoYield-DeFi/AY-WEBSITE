
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
              <span className="text-xs font-semibold tracking-wider uppercase">Built on Solana</span>
            </div>
          </div>
          
          <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            Smart Liquidity Management on Solana
          </h1>
          
          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground mb-10 text-balance">
            AutoYield uses advanced technology to maximize your trading fees while protecting against impermanent loss - no complex DeFi knowledge required.
          </p>
          
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
              Start Earning Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-secondary w-full sm:w-auto">
              How It Works
            </Button>
          </div>
        </div>
        
        {/* Animation comparing manual vs automated LP */}
        <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto animate-fade-up animation-delay-400">
          <div className="glass-panel p-2 md:p-4 overflow-hidden rounded-xl">
            <div className="aspect-[16/9] rounded-lg bg-card flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col md:flex-row">
                {/* Manual LP Side */}
                <div className="w-full md:w-1/2 h-full flex flex-col p-4 md:p-8 border-b md:border-r md:border-b-0 border-gray-200 bg-gray-50">
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-4">Manual LP Management</h3>
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    <div className="flex items-center space-x-3 opacity-80">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">✗</div>
                      <p className="text-sm md:text-base">Constant manual rebalancing</p>
                    </div>
                    <div className="flex items-center space-x-3 opacity-80">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">✗</div>
                      <p className="text-sm md:text-base">High risk of impermanent loss</p>
                    </div>
                    <div className="flex items-center space-x-3 opacity-80">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">✗</div>
                      <p className="text-sm md:text-base">Missed optimal fee collection</p>
                    </div>
                    <div className="flex items-center space-x-3 opacity-80">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">✗</div>
                      <p className="text-sm md:text-base">Complex decision-making</p>
                    </div>
                  </div>
                </div>
                
                {/* AutoYield Side */}
                <div className="w-full md:w-1/2 h-full flex flex-col p-4 md:p-8 bg-white">
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-4">AutoYield Management</h3>
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">✓</div>
                      <p className="text-sm md:text-base">Set-and-forget automation</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">✓</div>
                      <p className="text-sm md:text-base">Smart loss protection strategies</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">✓</div>
                      <p className="text-sm md:text-base">Dynamic fee optimization</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">✓</div>
                      <p className="text-sm md:text-base">Simple one-click deployment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay animation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="px-4 py-2 bg-primary/90 text-white rounded-full text-sm animate-pulse-soft">
                  Up to 2x better returns than manual management
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 w-28 h-28 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
