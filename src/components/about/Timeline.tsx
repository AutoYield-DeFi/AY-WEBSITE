
import React from 'react';
import { motion } from './MotionWrapper';
import { Calendar, Code, Users, Rocket, Zap, BarChart3 } from 'lucide-react';

const TimelineItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-muted flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const items = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Idea",
      description: "We experienced the complexity of liquidity provision firsthand and built AutoYield to simplify it"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Solution",
      description: "AI-powered position management that abstracts away the complexity"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Technology",
      description: "Intelligent algorithms detect optimal positions while mitigating impermanent loss"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Result",
      description: "Reliable crypto yield without requiring a PhD in financial engineering"
    }
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <TimelineItem
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Timeline;
