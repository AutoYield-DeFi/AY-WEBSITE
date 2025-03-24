import React from 'react';
import { motion } from 'framer-motion'; // Import from framer-motion
import { Check, Clock, TrendingUp, Shield, X } from 'lucide-react';

const ComparisonAnimation = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-primary-muted/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block px-4 py-1.5 mb-4 bg-primary-muted rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase">Value Proposition</span>
          </motion.div>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Why AutoYield?
          </motion.h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {/* Comparison cards with Framer Motion animations */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
          >
            {/* Manual Management */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md transform-gpu"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Clock className="h-6 w-6 text-gray-600" />
                </motion.div>
                <h3 className="text-xl font-semibold">Manual LP Management</h3>
              </div>
              
              <p className="text-gray-500 mb-6">Time-consuming & requires technical expertise</p>
              
              <motion.ul 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li className="flex items-start" variants={listItemVariants}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">24/7 Monitoring Required</p>
                    <p className="text-sm text-gray-500">Constant price watching</p>
                  </div>
                </motion.li>
                
                <motion.li className="flex items-start" variants={listItemVariants}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">High Impermanent Loss Risk</p>
                    <p className="text-sm text-gray-500">No automatic protection</p>
                  </div>
                </motion.li>
                
                <motion.li className="flex items-start" variants={listItemVariants}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Missed Yield Opportunities</p>
                    <p className="text-sm text-gray-500">Slow manual adjustments</p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
            
            {/* AutoYield */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border-2 border-primary/20 transition-all duration-300 hover:shadow-md transform-gpu"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-primary-muted flex items-center justify-center mr-4"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Shield className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-primary">AutoYield Smart Management</h3>
              </div>
              
              <p className="text-gray-500 mb-6">Automated & optimized for maximum returns</p>
              
              <motion.ul 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li className="flex items-start" variants={listItemVariants}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">24/7 AI Monitoring</p>
                    <p className="text-sm text-gray-500">Continuous algorithmic optimization</p>
                  </div>
                </motion.li>
                
                <motion.li className="flex items-start" variants={listItemVariants}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Smart Loss Protection</p>
                    <p className="text-sm text-gray-500">Automated risk management</p>
                  </div>
                </motion.li>
                
                <motion.li className="flex items-start" variants={listItemVariants}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Auto-Compounding Returns</p>
                    <p className="text-sm text-gray-500">Reinvests profits automatically</p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
          
          {/* Results card - with Framer Motion */}
          <motion.div 
            className="mt-10 bg-gradient-to-r from-blue-50 to-primary-muted/20 p-6 rounded-xl border border-primary/10 shadow-sm max-w-2xl mx-auto transform-gpu"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex items-center">
              <motion.div 
                className="hidden sm:block flex-shrink-0 mr-5"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </motion.div>
              <div>
                <motion.h4 
                  className="text-xl font-bold text-blue-600 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  2-3x Higher Returns
                </motion.h4>
                <motion.p 
                  className="text-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  AutoYield's smart technology handles all the complex work of liquidity management so you can enjoy optimized yields without the technical complexity.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonAnimation;