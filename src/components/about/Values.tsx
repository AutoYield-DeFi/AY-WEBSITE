
import React from 'react';
import { Shield, Lightbulb, Users } from 'lucide-react';
import { motion } from './MotionWrapper';

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "We prioritize user funds and data security above all else."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Continuous Innovation",
      description: "We constantly improve our AI algorithms based on market developments."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Driven",
      description: "We build together with our users, incorporating feedback openly."
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-white to-primary-muted/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-primary-muted/5 transform rotate-3 origin-bottom-right"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Our Values</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Core Principles</h2>
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
          <p className="text-muted-foreground italic max-w-2xl mx-auto">
            "We believe that intelligent automation is the key to democratizing access to DeFi's most powerful yield strategies."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
