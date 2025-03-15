
import React from 'react';
import { motion } from './MotionWrapper';
import { Flag, Target, Zap } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
      </div>
      
      <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <motion.div 
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Flag size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p className="text-muted-foreground">
              A DeFi ecosystem where intelligent automation eliminates technical barriers for everyone.
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Purpose</h3>
            <p className="text-muted-foreground">
              To bridge complex DeFi protocols and everyday users through AI-powered automation.
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Promise</h3>
            <p className="text-muted-foreground">
              Security, transparency, and performance that maximize returns while protecting assets.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
