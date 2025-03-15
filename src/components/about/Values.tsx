
import React from 'react';
import { Shield, PiggyBank, HeartHandshake, PartyPopper, Laugh } from 'lucide-react';
import { motion } from './MotionWrapper';

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "We Don't Gamble With Your Money",
      description: "We protect your funds like they're our own retirement accounts. Because they literally were at one point."
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Algorithms Don't Need Lunch Breaks",
      description: "Our AI doesn't need sleep, food, or motivation pep talks. It just quietly makes you money while you do literally anything else."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Made By Users, For Users",
      description: "Every feature exists because one of us needed it. If it sounds like a gimmick, we didn't build it."
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
          <p className="text-lg max-w-2xl mx-auto">Not the usual corporate nonsense. These are lessons we learned through trial, error, and a few crypto trading PTSD episodes.</p>
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
          <div className="flex justify-center mb-4">
            <PartyPopper className="h-8 w-8 text-amber-500 mr-2" />
            <Laugh className="h-8 w-8 text-amber-500" />
          </div>
          <p className="text-lg italic max-w-2xl mx-auto">
            "AutoYield is what happens when four people lose too much money and decide to fix the problem instead of just complaining about it on Twitter."
          </p>
          <p className="mt-3 text-sm text-muted-foreground">— Overheard at our first successful liquidity deployment</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
