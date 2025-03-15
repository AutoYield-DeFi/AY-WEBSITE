
import React from 'react';
import { ArrowRight, DollarSign, Repeat, TrendingUp } from 'lucide-react';

const DeFiExplainer = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary-muted/10 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="inline-block mb-2 px-4 py-1.5 bg-primary-muted rounded-full">
                  <span className="text-xs font-semibold tracking-wider uppercase">DeFi Made Simple</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Liquidity Providing?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Liquidity providing is one of the most powerful ways to earn yield in DeFi. It's how traders are able to buy and sell tokens on decentralized exchanges.
                  </p>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100 space-y-3">
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-bold">1</span>
                      </div>
                      <p><strong className="text-gray-800">You provide tokens</strong> to a liquidity pool (like SOL + USDC)</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-bold">2</span>
                      </div>
                      <p><strong className="text-gray-800">Traders pay fees</strong> when they use your liquidity to swap tokens</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-bold">3</span>
                      </div>
                      <p><strong className="text-gray-800">You earn these fees</strong> as passive income on your tokens</p>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-gray-900 mt-4">
                    The challenge: Traditional liquidity providing is complex and requires constant attention to be profitable.
                  </p>
                  
                  <p className="text-lg">
                    AutoYield solves this by automatically managing your liquidity position to maximize returns while protecting your capital.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass-panel p-6 rounded-xl overflow-hidden">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary-muted to-white flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                        {/* Pool Representation */}
                        <div className="relative w-40 h-40 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-28 h-28 rounded-full bg-white/90 flex items-center justify-center text-primary font-bold shadow-lg">
                              Liquidity Pool
                            </div>
                          </div>
                          
                          {/* Orbiting Token */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold shadow-md">
                              SOL
                            </div>
                          </div>
                          
                          {/* Orbiting Token */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                            <div className="w-10 h-10 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold shadow-md">
                              USDC
                            </div>
                          </div>
                        </div>
                        
                        {/* Animated Yield */}
                        <div className="absolute top-6 right-6">
                          <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full shadow-sm animate-pulse-soft">
                            <DollarSign className="h-3 w-3 text-yellow-600" />
                            <span className="text-xs font-medium text-yellow-700">Yield</span>
                          </div>
                        </div>
                        
                        {/* Trading Activity */}
                        <div className="absolute bottom-10 left-5">
                          <div className="flex items-center space-x-1 bg-purple-50 px-3 py-1 rounded-full shadow-sm">
                            <Repeat className="h-3 w-3 text-purple-600" />
                            <span className="text-xs font-medium text-purple-700">Swaps</span>
                          </div>
                        </div>
                        
                        {/* Fee Generation */}
                        <div className="absolute top-20 left-10">
                          <div className="flex items-center space-x-1 bg-blue-50 px-3 py-1 rounded-full shadow-sm animate-float" style={{ animationDelay: "0.5s" }}>
                            <TrendingUp className="h-3 w-3 text-blue-600" />
                            <span className="text-xs font-medium text-blue-700">Fees</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default DeFiExplainer;
