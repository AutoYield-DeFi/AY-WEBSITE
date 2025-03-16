
import React from 'react';
import { ArrowRight, DollarSign, Repeat, TrendingUp, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const DeFiExplainer = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary-muted/10 to-white">
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
                  
                  {/* Improved step-by-step explanation with icons */}
                  <div className="bg-white p-5 rounded-lg border border-gray-100 space-y-5 shadow-sm">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">You provide tokens to a liquidity pool</p>
                        <p className="text-gray-600 text-sm mt-1">For example, you deposit equal values of SOL + USDC</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Traders pay fees when they swap tokens</p>
                        <p className="text-gray-600 text-sm mt-1">These fees are distributed to liquidity providers like you</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">You earn these fees as passive income</p>
                        <p className="text-gray-600 text-sm mt-1">The more trading that happens, the more you earn</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Added "The Problem" and "Our Solution" comparison */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        <h3 className="font-medium text-red-900">The Problem</h3>
                      </div>
                      <ul className="text-sm text-red-800 space-y-2 ml-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Requires constant monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Risk of impermanent loss</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Complex range setting</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <h3 className="font-medium text-green-900">AutoYield's Solution</h3>
                      </div>
                      <ul className="text-sm text-green-800 space-y-2 ml-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Fully automated management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Smart risk protection</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>2-3x higher returns</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="btn-primary flex items-center gap-2">
                      Learn More
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass-panel p-6 rounded-xl overflow-hidden shadow-md">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary-muted to-white flex items-center justify-center">
                    {/* Improved animated visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                        {/* Central Pool */}
                        <div className="relative w-44 h-44 rounded-full border-4 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-white/90 flex items-center justify-center shadow-lg text-center">
                              <div>
                                <div className="text-primary font-bold">Liquidity Pool</div>
                                <div className="text-xs text-primary/70 mt-1">Powered by AutoYield</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Orbiting Token 1 */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-md animate-pulse-soft">
                              SOL
                            </div>
                          </div>
                          
                          {/* Orbiting Token 2 */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shadow-md animate-pulse-soft">
                              USDC
                            </div>
                          </div>
                          
                          {/* Side Orbit Elements */}
                          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center font-bold shadow-md">
                              SOL
                            </div>
                          </div>
                          
                          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white text-xs flex items-center justify-center font-bold shadow-md">
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
                            <span className="text-xs font-medium text-purple-700">Trades</span>
                          </div>
                        </div>
                        
                        {/* Fee Generation */}
                        <div className="absolute top-20 left-10">
                          <div className="flex items-center space-x-1 bg-blue-50 px-3 py-1 rounded-full shadow-sm animate-float" style={{ animationDelay: "0.5s" }}>
                            <TrendingUp className="h-3 w-3 text-blue-600" />
                            <span className="text-xs font-medium text-blue-700">Fees</span>
                          </div>
                        </div>
                        
                        {/* Added AI label */}
                        <div className="absolute bottom-20 right-10">
                          <div className="flex items-center space-x-1 bg-green-50 px-3 py-1 rounded-full shadow-sm animate-float" style={{ animationDelay: "0.8s" }}>
                            <Shield className="h-3 w-3 text-green-600" />
                            <span className="text-xs font-medium text-green-700">AutoYield AI</span>
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
