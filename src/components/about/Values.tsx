
import React from 'react';
import { Shield, PiggyBank, HeartHandshake, LineChart, Coffee, Zap } from 'lucide-react';
import { motion } from './MotionWrapper';

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Before Hype",
      description: "We've survived three major market crashes and two exploits at other platforms. Nothing teaches security consciousness like watching your friends' protocols get drained."
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Algorithms Don't Need Sleep",
      description: "Our AI doesn't doom-scroll Twitter at 2 AM during market volatility. It just quietly rebalances your positions while you're having dinner with people who don't know what 'impermanent loss' means."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Results, Not Promises",
      description: "Fancy marketing can't hide poor performance for long. We let our consistently higher yields do the talking, not our Medium posts about 'revolutionizing DeFi.'"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Built for Speed",
      description: "In the time it takes to manually adjust your position, our algorithm has already analyzed market conditions, optimized your ranges, and started generating fees again."
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "DeFi Shouldn't Be A Full-Time Job",
      description: "You shouldn't need three monitors, five Discord channels, and an energy drink addiction to earn decent yields. We handle the complexity so you don't have to."
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Users First, Always",
      description: "We optimize for long-term user success, not quick profit. Every feature we build first gets tested with our own money—usually quite a lot of it."
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-white to-primary-muted/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-primary-muted/5 transform rotate-3 origin-bottom-right"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">What We Stand For</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Principles Built From Experience</h2>
          <p className="text-lg max-w-2xl mx-auto">These aren't aspirational values written by our marketing team. They're hard-earned lessons from our collective decades in DeFi—sometimes learned the expensive way.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
        
        <div className="mt-16 text-center max-w-3xl mx-auto p-8 bg-blue-50/50 rounded-xl">
          <blockquote className="text-lg italic mb-4">
            "We built AutoYield because we got tired of explaining to our non-crypto friends why our 'passive income strategy' required checking charts every 45 minutes."
          </blockquote>
          <p className="text-right text-sm text-muted-foreground">— Michael Park, Lead Developer</p>
          
          <div className="mt-8 pt-8 border-t border-blue-100">
            <p className="font-medium text-lg mb-2">Did our platform work?</p>
            <p className="text-muted-foreground">
              Our internal testing showed consistent outperformance of 1.8x to 2.9x compared to static liquidity positions over 6-month periods. But don't take our word for it—our dashboard shows real-time performance data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
