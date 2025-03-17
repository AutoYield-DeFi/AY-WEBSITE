
import React from 'react';
import { motion } from './MotionWrapper';
import { Code, Zap, BarChart3, Rocket } from 'lucide-react';

const TimelineItem = ({ 
  icon, 
  title, 
  description,
  index
}: { 
  icon: React.ReactNode;
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <motion.div 
      className="flex items-start gap-4 mb-6 bg-white/80 p-5 rounded-lg shadow-sm border border-primary/5 hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-muted flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const items = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "The Problem",
      description: "We saw firsthand how complex liquidity management is for most users"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Our Approach",
      description: "AI-powered automation that does the heavy lifting for you"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "The Tech",
      description: "Smart algorithms find optimal positions while minimizing impermanent loss"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "The Result",
      description: "Reliable yield without needing a PhD in financial engineering"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/10 to-primary-muted/30 rounded-full"></div>
        </div>
      </div>
      
      <div className="space-y-6">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
