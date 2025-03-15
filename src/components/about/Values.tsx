
import React from 'react';
import { Shield, Coffee, HeartHandshake } from 'lucide-react';
import { motion } from './MotionWrapper';

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sleep Soundly Security",
      description: "We protect your funds like they're our own retirement accounts. Because they literally were at one point."
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "No More 3 AM Alerts",
      description: "Our algorithms don't need coffee to stay up all night watching your positions. We learned this the hard way."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Made By Users, For Users",
      description: "Every feature exists because one of us needed it. If something doesn't make sense, we didn't build it."
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-white to-primary-muted/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-primary-muted/5 transform rotate-3 origin-bottom-right"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Our Principles</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Things We Actually Believe</h2>
          <p className="text-lg max-w-2xl mx-auto">Not the usual corporate nonsense. These are lessons we learned through trial, error, and a few choice words we can't put on this website.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-primary/5 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-muted text-primary mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg italic max-w-2xl mx-auto">
            "We built AutoYield because we got tired of losing sleep—and money—trying to manage our own liquidity positions. Now we sleep like babies."
          </p>
          <p className="mt-3 text-sm text-muted-foreground">— The entire team, in unison, after the first successful test</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
