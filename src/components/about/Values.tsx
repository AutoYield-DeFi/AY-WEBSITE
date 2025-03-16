
import React from 'react';
import { Shield, Clock, HeartHandshake, LineChart } from 'lucide-react';
import { motion } from './MotionWrapper';

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "We test with our own money before we ask for yours. No exceptions. Our platform has to earn our trust before it can earn yours."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Algorithms Don't Sleep",
      description: "Markets move 24/7. Your liquidity management should too. We built AutoYield so you can have dinner with friends who don't know what impermanent loss means."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Results, Not Promises",
      description: "In DeFi, fancy marketing can't hide poor performance. We let our yields do the talking, not our Medium posts about 'revolutionizing finance.'"
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Built By Users, For Users",
      description: "We're building the tool we wished existed when we were losing money. Every feature starts with a simple question: 'Would this have saved us?'"
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-white to-primary-muted/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-primary-muted/5 transform rotate-3 origin-bottom-right"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Our Principles</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
          <p className="text-lg max-w-2xl mx-auto">Simple truths that guide everything we build, learned the hard way through our own mistakes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
        
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-blue-50/50 rounded-xl">
            <p className="font-medium text-lg mb-4">Our internal testing showed consistent outperformance compared to static liquidity positions.</p>
            <p className="text-muted-foreground mb-6">
              But we don't expect you to take our word for it—our dashboard shows real-time performance data so you can see for yourself.
            </p>
            <p className="text-sm text-blue-600 font-medium">
              Join us and take back control of your liquidity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
