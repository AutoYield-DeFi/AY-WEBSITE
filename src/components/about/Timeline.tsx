
import React from 'react';

const TimelineItem = ({ 
  date, 
  title, 
  description, 
  isLast = false 
}: { 
  date: string; 
  title: string; 
  description: string; 
  isLast?: boolean;
}) => {
  return (
    <div className="relative flex items-start">
      {/* Dot and line */}
      <div className="absolute left-0 flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-blue-600"></div>
        {!isLast && <div className="h-full w-0.5 bg-blue-200"></div>}
      </div>
      
      {/* Content */}
      <div className="ml-8 pb-8">
        <span className="text-sm font-medium text-blue-600 block mb-2">{date}</span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const milestones = [
    {
      date: "Q2 2023",
      title: "Concept Development",
      description: "The AutoYield concept was born from observing the complexity and inefficiency in Solana DeFi liquidity management."
    },
    {
      date: "Q3 2023",
      title: "Research & Team Formation",
      description: "Our founding team came together, bringing expertise in DeFi, AI, and Solana development to create the AutoYield vision."
    },
    {
      date: "Q4 2023",
      title: "Technology Development",
      description: "Development of the core QUANT AI engine and integration with Meteora's DLMM architecture began."
    },
    {
      date: "Q1 2024",
      title: "Private Alpha",
      description: "Limited release to select partners for testing our core liquidity management algorithms and security features."
    },
    {
      date: "Q2 2024",
      title: "Public Beta Launch",
      description: "AutoYield opened to the public, allowing anyone to access AI-driven liquidity management on Solana."
    },
    {
      date: "Q3 2024+",
      title: "The Road Ahead",
      description: "Expansion of supported pools, advanced AI features, and deeper ecosystem integrations planned for the future."
    }
  ];

  return (
    <section id="timeline" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The evolution of AutoYield from concept to a leading liquidity management platform on Solana.
        </p>
      </div>
      
      <div className="relative max-w-3xl mx-auto pl-4">
        {milestones.map((milestone, index) => (
          <TimelineItem
            key={index}
            date={milestone.date}
            title={milestone.title}
            description={milestone.description}
            isLast={index === milestones.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
