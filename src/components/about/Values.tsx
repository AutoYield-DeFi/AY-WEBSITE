
import React from 'react';
import { Shield, Clock, HeartHandshake, LineChart, Zap } from 'lucide-react';
import { motion } from './MotionWrapper';

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "We test with our own money before we ask for yours. Our platform needs to earn our trust before it can earn yours. Like Warren Buffett said, 'Never invest in something you don't understand'—we just made it simpler to understand."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Algorithms Don't Sleep",
      description: "Markets move 24/7, and so do our algorithms. We built AutoYield so you can have dinner with friends who don't know what impermanent loss means—and you never have to explain it to them."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Results, Not Promises",
      description: "In DeFi, fancy marketing can't hide poor performance. We're not here to 'revolutionize finance'—we're here to give you better yields with less headache. We let our algorithms do the talking."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Built By Users, For Users",
      description: "We're building the tool we wished existed when we were losing money to impermanent loss. Every feature starts with a simple question: 'Would this have saved us from that painful trade?'"
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-white to-primary-muted/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-primary-muted/5 transform rotate-3 origin-bottom-right"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Our Principles</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
          <p className="text-lg max-w-2xl mx-auto">Simple truths that guide everything we build, learned the hard way through our own mistakes (so you don't have to make them).</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-primary/5 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary-muted/20 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-blue-50 rounded-full"></div>
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-muted text-primary mb-4 relative z-10">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">{value.title}</h3>
              <p className="text-muted-foreground relative z-10">{value.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-primary-muted/30 rounded-lg p-8 shadow-sm border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-white p-4 rounded-full">
              <Zap className="h-8 w-8 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">The AutoYield Philosophy</h3>
              <p className="text-muted-foreground">
                "If it takes more than one click, it's probably too complicated. If you have to watch it 24/7, it's definitely not passive income. And if it sounds too good to be true, it's almost certainly going to zero."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
