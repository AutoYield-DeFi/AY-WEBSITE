
import React from 'react';
import { motion } from './MotionWrapper';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-white to-primary-muted/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCQkRERkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2Mmgydi0yem0tNS0xMGgtMnYyaDJ2LTJ6bTUgMGgtMnYyaDJ2LTJ6TTIwIDMwaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary">How It Started</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-primary">The Late Night That Changed Everything</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In late 2022, Shuhaib lost over 40% of his liquidity position in a single night. Not because the market crashed, but because he couldn't rebalance his position fast enough.
            </p>
            
            <div className="space-y-6">
              <div className="p-4 rounded-lg border border-blue-100 bg-blue-50/30">
                <p className="text-muted-foreground italic">
                  "I was manually managing seven different pools across three DEXs. I woke up at 3 AM to price alerts, but by the time I figured out what to do, the damage was done," recalls Shuhaib, our CEO.
                </p>
              </div>
              
              <p className="text-muted-foreground">
                That night, he called his friend Pratik, who had built trading algorithms for traditional finance. Together with YK (our anonymous quant from IIT) and Hamza, they sketched out what would become AutoYield: a system that never sleeps, never panics, and makes decisions based on data, not emotion.
              </p>
              
              <div className="mt-8 pt-8 border-t border-blue-100">
                <p className="font-medium">The simple realization that changed everything:</p>
                <p className="text-xl font-semibold mt-2 mb-4 text-blue-600">
                  "The best LPs aren't managed by the smartest people. They're managed by the most consistent ones."
                </p>
                <p className="text-muted-foreground">
                  We built AutoYield to be that consistent presence—continuously optimizing positions without human emotion, hesitation, or the need to sleep.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="group" variant="outline">
                <span>See our performance stats</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
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
                    <h3 className="text-lg font-semibold">The Problem We Solved</h3>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-1 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">Manual LP Management</p>
                      <p className="text-sm text-muted-foreground">Requires constant monitoring</p>
                      <p className="text-sm text-muted-foreground">Emotional decisions during volatility</p>
                      <p className="text-sm text-muted-foreground">Sleep = missed opportunities</p>
                    </div>
                    
                    <div className="bg-primary-muted p-4 rounded-lg relative">
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded">
                        Our Solution
                      </div>
                      <p className="font-medium mb-2">AutoYield</p>
                      <p className="text-sm">24/7 algorithmic management</p>
                      <p className="text-sm">Data-driven decision making</p>
                      <p className="text-sm">Optimizes while you sleep</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-primary-muted/30 p-4 rounded-lg">
                      <p className="font-medium mb-2">The Results</p>
                      <p className="text-sm">Consistently outperforms manual management</p>
                      <p className="text-sm">Adapts to market conditions in real-time</p>
                      <p className="text-sm">Peace of mind for LPs</p>
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
