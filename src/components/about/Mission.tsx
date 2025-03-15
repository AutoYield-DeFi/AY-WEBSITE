
import React from 'react';
import { motion } from './MotionWrapper';
import { Flag, Target, Lightbulb, Coffee, Laugh } from 'lucide-react';

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Born from Our Own Frustration</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Picture this: It's 2 AM, and we're huddled around a whiteboard covered in trading charts and half-empty coffee cups, trying to optimize our LP positions manually. We thought, "There has to be a better way than this." Turns out, there wasn't. So we built it.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Coffee className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Too Many Late Nights</h3>
                  <p className="text-muted-foreground">We got tired of the 3 AM price alerts and manual adjustments</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Eureka Moment</h3>
                  <p className="text-muted-foreground">Why can't an AI do what we're doing manually, but better?</p>
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
                  {/* Coffee cup with lightbulb idea */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-50 bg-blue-50 rounded-b-3xl rounded-t-xl border-2 border-blue-200">
                    {/* Coffee cup handle */}
                    <div className="absolute top-10 right-0 transform translate-x-6 w-10 h-16 border-2 border-blue-200 rounded-r-full"></div>
                    
                    {/* Coffee */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-amber-800/80 rounded-b-3xl"></div>
                    
                    {/* Steam/idea */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="relative animate-bounce-slow">
                        <Lightbulb className="h-14 w-14 text-yellow-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - code and charts */}
              <div className="absolute top-10 right-10 p-3 bg-white rounded-lg shadow-md animate-float">
                <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                  if(price &lt; target) 😱
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
