
import React from 'react';
import { motion } from './MotionWrapper';
import { ArrowRight, TrendingUp, Zap, Shield, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-white to-primary-muted/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCQkRERkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2Mmgydi0yem0tNS0xMGgtMnYyaDJ2LTJ6bTUgMGgtMnYyaDJ2LTJ6TTIwIDMwaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <motion.div 
              className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our Mission</span>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Making DeFi's Best Yield Strategy Actually Usable
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Liquidity provision offers some of crypto's most consistent returns, but it's traditionally been about as user-friendly as assembling IKEA furniture in the dark.
            </motion.p>
            
            <div className="space-y-6">
              <motion.div 
                className="p-4 rounded-lg border border-blue-100 bg-blue-50/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-muted-foreground italic">
                  "We observed liquidity providers spending more time monitoring positions than actually enjoying their returns. What should have been a relatively passive investment was turning into a full-time job."
                </p>
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our team came together with a simple mission: abstract away the complexity of liquidity provision so anyone can access these reliable yield opportunities without needing a degree in financial engineering.
              </motion.p>
              
              <motion.div 
                className="mt-8 pt-8 border-t border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="font-medium">The fundamental insight that drives us:</p>
                <p className="text-xl font-semibold mt-2 mb-4 text-blue-600">
                  "LP strategies offer the most reliable yield in crypto, yet remain inaccessible to most users due to complexity."
                </p>
                <p className="text-muted-foreground">
                  By combining automation with intelligent algorithms, we've created a solution that removes barriers to entry, reduces risk, and opens up a powerful earning strategy that was previously reserved for the most technical users.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/docs/welcome">
                <Button className="group" variant="outline">
                  <span>Learn how it works</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-primary/5 rounded-2xl transform rotate-3"></div>
            <div className="aspect-square max-w-md mx-auto relative bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
              <div className="absolute inset-0 p-6">
                <div className="h-full flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold">The LP Challenge</h3>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-1 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg relative overflow-hidden">
                      <div className="absolute -right-4 -top-4 text-blue-100">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30 0L36.5 23.5L60 30L36.5 36.5L30 60L23.5 36.5L0 30L23.5 23.5L30 0Z" fill="currentColor" />
                        </svg>
                      </div>
                      <p className="font-medium mb-2 flex items-center gap-2">
                        <TrendingUp size={18} className="text-red-500" />
                        <span>The Pain Points</span>
                      </p>
                      <p className="text-sm text-muted-foreground relative z-10">Technical complexity and steep learning curve</p>
                      <p className="text-sm text-muted-foreground relative z-10">Risk of impermanent loss without active management</p>
                      <p className="text-sm text-muted-foreground relative z-10">Constant monitoring required</p>
                    </div>
                    
                    <div className="bg-primary-muted p-4 rounded-lg relative overflow-hidden">
                      <div className="absolute -right-4 -top-4 text-blue-200">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="30" cy="30" r="30" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded">
                        Our Solution
                      </div>
                      <p className="font-medium mb-2 flex items-center gap-2">
                        <Zap size={18} className="text-yellow-500" />
                        <span>AutoYield</span>
                      </p>
                      <p className="text-sm relative z-10">User-friendly interface with one-click deployment</p>
                      <p className="text-sm relative z-10">Intelligent algorithms that mitigate risks</p>
                      <p className="text-sm relative z-10">Automated 24/7 position management</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-primary-muted/30 p-4 rounded-lg relative overflow-hidden">
                      <div className="absolute -right-4 -top-4 text-blue-100/50">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="60" height="60" fill="currentColor" />
                        </svg>
                      </div>
                      <p className="font-medium mb-2 flex items-center gap-2">
                        <Brain size={18} className="text-purple-500" />
                        <span>The Result</span>
                      </p>
                      <p className="text-sm relative z-10">LP opportunities accessible to everyone</p>
                      <p className="text-sm relative z-10">Reduced risks, improved yields</p>
                      <p className="text-sm relative z-10">True passive income from crypto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
