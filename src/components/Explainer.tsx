
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Explainer = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-panel p-6 rounded-xl overflow-hidden">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary-muted to-white flex items-center justify-center">
                    <div className="relative w-3/4 h-3/4">
                      {/* Simplified liquidity pool visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-4 border-primary/30 flex items-center justify-center animate-pulse-soft">
                          <div className="w-24 h-24 rounded-full border-4 border-primary/50 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                              LP
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Token representations */}
                      <div className="absolute top-6 left-8 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-lg animate-float" style={{ animationDelay: '0.1s' }}>
                        SOL
                      </div>
                      <div className="absolute bottom-6 right-8 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                        USDC
                      </div>
                      
                      {/* Trading arrows */}
                      <div className="absolute top-1/2 left-0 w-full flex justify-between items-center px-4">
                        <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center rotate-180">
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="space-y-6">
                <div className="inline-block mb-2 px-4 py-1.5 bg-primary-muted rounded-full">
                  <span className="text-xs font-semibold tracking-wider uppercase">DeFi Made Simple</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Liquidity Provisioning?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Liquidity provisioning is how traders are able to buy and sell tokens on decentralized exchanges (DEXs). When you provide liquidity, you're adding your tokens to a pool that traders can use.
                  </p>
                  <p>
                    <strong className="text-foreground">The problem:</strong> Traditional liquidity providing requires constant monitoring and adjustment to maximize returns and minimize risks.
                  </p>
                  <p>
                    <strong className="text-foreground">AutoYield's solution:</strong> Our smart technology handles all the complex decisions for you, automatically adjusting your position based on market conditions.
                  </p>
                  <div className="pt-4">
                    <Button className="btn-primary flex items-center gap-2">
                      Learn More
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explainer;
