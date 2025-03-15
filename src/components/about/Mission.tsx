
import React from 'react';
import { motion } from './MotionWrapper';
import { Target, Lightbulb, Coffee, Laugh, PiggyBank } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-white to-primary-muted/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCQkRERkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2Mmgydi0yem0tNS0xMGgtMnYyaDJ2LTJ6bTUgMGgtMnYyaDJ2LTJ6TTIwIDMwaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
              <span className="text-xs font-semibold tracking-wider uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The AutoYield Origin Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Picture this: A whiteboard covered in trading charts, a stack of pizza boxes, and four DeFi nerds who just watched their liquidity positions get wrecked. Again. We thought, "There has to be a better way than manually babysitting these pools." Turns out, there wasn't. So we built it.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <PiggyBank className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Wallets Felt The Pain</h3>
                  <p className="text-muted-foreground">We lost enough money from poorly managed positions to fund a small startup. So we did exactly that.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">The "Aha" Moment</h3>
                  <p className="text-muted-foreground">What if the same algorithms that were destroying our positions could actually protect them instead?</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Whimsical illustration of the "aha" moment */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-muted/30 rounded-full blur-sm"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/40 rounded-full blur-md"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* A more creative visualization - trading graph with lightbulb */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-40 relative">
                      {/* Stylized trading graph */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200 rounded"></div>
                      
                      {/* Graph lines */}
                      <div className="absolute bottom-2 left-5 h-20 w-2 bg-red-400 rounded animate-bounce-slow" style={{ animationDelay: "0.3s", height: "25%" }}></div>
                      <div className="absolute bottom-2 left-14 h-20 w-2 bg-red-400 rounded animate-bounce-slow" style={{ animationDelay: "0.1s", height: "15%" }}></div>
                      <div className="absolute bottom-2 left-24 h-20 w-2 bg-red-400 rounded animate-bounce-slow" style={{ animationDelay: "0.5s", height: "40%" }}></div>
                      <div className="absolute bottom-2 left-36 h-20 w-2 bg-green-400 rounded animate-bounce-slow" style={{ animationDelay: "0.2s", height: "60%" }}></div>
                      <div className="absolute bottom-2 left-48 h-20 w-2 bg-green-400 rounded animate-bounce-slow" style={{ animationDelay: "0.4s", height: "75%" }}></div>
                      
                      {/* Lightbulb moment */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <div className="relative animate-bounce-slow">
                          <Lightbulb className="h-14 w-14 text-yellow-400 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 right-10 p-3 bg-white rounded-lg shadow-md animate-float">
                <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                  impermanentLoss = false; 🎉
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 p-2 bg-white rounded-lg shadow-md animate-float" style={{ animationDelay: "1s" }}>
                <Laugh className="h-8 w-8 text-amber-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
