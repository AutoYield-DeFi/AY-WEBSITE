
import React from 'react';
import { motion } from './MotionWrapper';
import { ArrowRight, BarChart, Target, Award, Zap, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <section id="mission" className="py-16 bg-gradient-to-br from-white to-primary-muted/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCQkRERkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTJ2Mmgydi0yem0tNS0xMGgtMnYyaDJ2LTJ6bTUgMGgtMnYyaDJ2LTJ6TTIwIDMwaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our Mission</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Making DeFi's Best Yield Strategy Accessible
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're turning liquidity provision from a full-time job into true passive income
          </motion.p>
        </div>
        
        {/* Visual mission representation */}
        <div className="max-w-5xl mx-auto">
          <div className="relative py-6">
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-muted via-blue-400 to-primary transform -translate-x-1/2"></div>
            
            {/* Mission steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 - Problem */}
              <motion.div 
                className="md:text-right md:pr-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute right-0 top-0 md:right-[-24px] md:top-3 z-10 w-12 h-12 rounded-full bg-white border-4 border-primary-muted flex items-center justify-center shadow-lg">
                  <Target className="text-primary w-6 h-6" />
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm border border-primary/5 md:ml-8">
                  <h3 className="text-xl font-semibold mb-2">The Problem</h3>
                  <p className="text-muted-foreground">LP strategies offer consistent yields but remain too complex for most crypto users</p>
                </div>
              </motion.div>
              
              {/* Empty space to align first step */}
              <div className="hidden md:block"></div>
              
              {/* Step 2 - Solution */}
              <div className="hidden md:block"></div>
              <motion.div 
                className="md:text-left md:pl-12 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-0 md:left-[-24px] md:top-3 z-10 w-12 h-12 rounded-full bg-white border-4 border-primary-muted flex items-center justify-center shadow-lg">
                  <Zap className="text-yellow-500 w-6 h-6" />
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm border border-primary/5 md:mr-8">
                  <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
                  <p className="text-muted-foreground">AutoYield abstracts complexity away with AI-powered position management</p>
                </div>
              </motion.div>
              
              {/* Step 3 - Approach */}
              <motion.div 
                className="md:text-right md:pr-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute right-0 top-0 md:right-[-24px] md:top-3 z-10 w-12 h-12 rounded-full bg-white border-4 border-primary-muted flex items-center justify-center shadow-lg">
                  <BarChart className="text-blue-600 w-6 h-6" />
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm border border-primary/5 md:ml-8">
                  <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
                  <p className="text-muted-foreground">Intelligent algorithms detect optimal entry/exit points while mitigating impermanent loss</p>
                </div>
              </motion.div>
              
              {/* Empty space to align third step */}
              <div className="hidden md:block"></div>
              
              {/* Step 4 - Result */}
              <div className="hidden md:block"></div>
              <motion.div 
                className="md:text-left md:pl-12 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-0 md:left-[-24px] md:top-3 z-10 w-12 h-12 rounded-full bg-white border-4 border-primary-muted flex items-center justify-center shadow-lg">
                  <Award className="text-green-500 w-6 h-6" />
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm border border-primary/5 md:mr-8">
                  <h3 className="text-xl font-semibold mb-2">The Result</h3>
                  <p className="text-muted-foreground">Reliable crypto yield that doesn't require a PhD in financial engineering</p>
                </div>
              </motion.div>
            </div>
            
            {/* Rocket at bottom */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center shadow-lg">
                <Rocket className="text-white w-8 h-8" />
              </div>
            </motion.div>
          </div>
          
          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/docs/welcome">
              <Button className="group" size="lg">
                <span>Learn how it works</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
