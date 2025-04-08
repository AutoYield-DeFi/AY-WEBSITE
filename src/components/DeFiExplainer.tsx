import React from 'react';
import { ArrowRight, DollarSign, Repeat, TrendingUp, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion'; // Import framer-motion

const DeFiExplainer = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary-muted/10 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-2 px-4 py-1.5 bg-primary-muted rounded-full"
                >
                  <span className="text-xs font-semibold tracking-wider uppercase">DeFi Made Simple</span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  What is Liquidity Providing?
                </motion.h2>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4 text-muted-foreground"
                >
                  <p className="text-lg">
                    Liquidity providing is one of the most powerful ways to earn yield in DeFi. It's how traders are able to buy and sell tokens on decentralized exchanges.
                  </p>
                  
                  {/* Step-by-step explanation with icons */}
                  <div className="bg-white p-5 rounded-lg border border-gray-100 space-y-5 shadow-sm">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="flex items-start"
                    >
                      <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">You provide tokens to a liquidity pool</p>
                        <p className="text-gray-600 text-sm mt-1">For example, you deposit equal values of SOL + USDC</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="flex items-start"
                    >
                      <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Traders pay fees when they swap tokens</p>
                        <p className="text-gray-600 text-sm mt-1">These fees are distributed to liquidity providers like you</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="flex items-start"
                    >
                      <div className="mt-1 mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">You earn these fees as passive income</p>
                        <p className="text-gray-600 text-sm mt-1">The more trading that happens, the more you earn</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="pt-4"
                  >
                    <Button className="btn-primary flex items-center gap-2">
                      Learn More
                      <ArrowRight size={16} />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="glass-panel p-6 rounded-xl overflow-hidden shadow-md">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary-muted to-white flex items-center justify-center">
                    {/* Animated visualization */}
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
                            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-md transform-gpu will-change-transform">
                              SOL
                            </div>
                          </div>
                          
                          {/* Orbiting Token 2 */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shadow-md transform-gpu will-change-transform">
                              USDC
                            </div>
                          </div>
                          
                          {/* Side Orbit Elements */}
                          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center font-bold shadow-md transform-gpu will-change-transform">
                              SOL
                            </div>
                          </div>
                          
                          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 rounded-full bg-yellow-500 text-white text-xs flex items-center justify-center font-bold shadow-md transform-gpu will-change-transform">
                              USDC
                            </div>
                          </div>
                        </div>
                        
                        {/* Animated Yield */}
                        <motion.div 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute top-6 right-6"
                        >
                          <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full shadow-sm">
                            <DollarSign className="h-3 w-3 text-yellow-600" />
                            <span className="text-xs font-medium text-yellow-700">Yield</span>
                          </div>
                        </motion.div>
                        
                        {/* Trading Activity */}
                        <div className="absolute bottom-10 left-5">
                          <div className="flex items-center space-x-1 bg-purple-50 px-3 py-1 rounded-full shadow-sm">
                            <Repeat className="h-3 w-3 text-purple-600" />
                            <span className="text-xs font-medium text-purple-700">Trades</span>
                          </div>
                        </div>
                        
                        {/* Fee Generation */}
                        <motion.div 
                          animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute top-20 left-10"
                        >
                          <div className="flex items-center space-x-1 bg-blue-50 px-3 py-1 rounded-full shadow-sm">
                            <TrendingUp className="h-3 w-3 text-blue-600" />
                            <span className="text-xs font-medium text-blue-700">Fees</span>
                          </div>
                        </motion.div>
                        
                        {/* AI label */}
                        <motion.div 
                          animate={{ y: [0, -3, 0], x: [0, -2, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                          className="absolute bottom-20 right-10"
                        >
                          <div className="flex items-center space-x-1 bg-green-50 px-3 py-1 rounded-full shadow-sm">
                            <Shield className="h-3 w-3 text-green-600" />
                            <span className="text-xs font-medium text-green-700">AutoYield AI</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeFiExplainer;