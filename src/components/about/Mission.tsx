
import React from 'react';
import { motion } from './MotionWrapper';
import { Target, Lightbulb, PiggyBank, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-white to-primary-muted/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCQkRERkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2Mmgydi0yem0tNS0xMGgtMnYyaDJ2LTJ6bTUgMGgtMnYyaDJ2LTJ6TTIwIDMwaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
              <span className="text-xs font-semibold tracking-wider uppercase">Our Origin Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Frustration to Innovation</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In May 2021, our founder Alex watched helplessly as his carefully positioned liquidity pools hemorrhaged value during a market crash. The problem wasn't just volatility—it was the inability to adapt positions quickly enough.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Target className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">The Realization</h3>
                  <p className="text-muted-foreground">After analyzing hundreds of LP positions, we discovered a pattern: the highest-performing positions weren't managed by the smartest traders—they were managed by the most <em>consistent</em> ones. The ones who could continuously optimize ranges without emotional decisions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">The Pivot</h3>
                  <p className="text-muted-foreground">What if algorithms could do what humans couldn't? Not just basic automations, but sophisticated position management that continuously adapted to market conditions without fear, fatigue, or that pesky need to sleep.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <PiggyBank className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">The Promise</h3>
                  <p className="text-muted-foreground">AutoYield exists to solve the fundamental problem of liquidity provision: making it profitable without requiring you to become a full-time range manager with multiple monitors and a caffeine addiction.</p>
                </div>
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
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square max-w-md mx-auto relative bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Timeline visualization with key moments */}
              <div className="absolute inset-0 p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-center mb-4">The AutoYield Journey</h3>
                
                <div className="flex-1 relative">
                  {/* Vertical timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100"></div>
                  
                  {/* Timeline events */}
                  <div className="relative pl-16 mb-8">
                    <div className="absolute left-7 w-3 h-3 rounded-full bg-red-500 border-2 border-white"></div>
                    <p className="text-sm font-medium">May 2021</p>
                    <p className="text-sm text-muted-foreground">"The Crash" - Alex loses 40% of his LP value in 3 days</p>
                  </div>
                  
                  <div className="relative pl-16 mb-8">
                    <div className="absolute left-7 w-3 h-3 rounded-full bg-amber-500 border-2 border-white"></div>
                    <p className="text-sm font-medium">August 2021</p>
                    <p className="text-sm text-muted-foreground">First prototype of automated position adjustment</p>
                  </div>
                  
                  <div className="relative pl-16 mb-8">
                    <div className="absolute left-7 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                    <p className="text-sm font-medium">January 2022</p>
                    <p className="text-sm text-muted-foreground">Core team assembled, including Emily's AI expertise</p>
                  </div>
                  
                  <div className="relative pl-16 mb-8">
                    <div className="absolute left-7 w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></div>
                    <p className="text-sm font-medium">November 2022</p>
                    <p className="text-sm text-muted-foreground">First private version beats manual management by 87%</p>
                  </div>
                  
                  <div className="relative pl-16">
                    <div className="absolute left-7 w-3 h-3 rounded-full bg-purple-500 border-2 border-white"></div>
                    <p className="text-sm font-medium">Today</p>
                    <p className="text-sm text-muted-foreground">AutoYield consistently outperforms manual LP management</p>
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
