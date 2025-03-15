
import React, { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Trophy, Network, BarChart, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StrategyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const StrategyCard = ({ icon, title, description, delay }: StrategyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-xl border border-gray-100 p-6 shadow-sm transition-all duration-700 opacity-0 translate-y-8",
        isVisible && `opacity-100 translate-y-0 delay-${delay}`
      )}
    >
      <div className="p-3 bg-primary-muted/30 rounded-lg inline-block mb-4">
        <div className="text-primary w-6 h-6">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const RoadmapStrategic = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Strategic Focus Areas</h2>
          <p className="text-muted-foreground">
            Beyond our specific timeline milestones, these core strategic areas guide our product development and ensure we're building a platform that delivers exceptional value to our users.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StrategyCard 
            icon={<Zap />}
            title="Performance Optimization"
            description="Continuously improving our AI algorithms to maximize yield while minimizing risk for liquidity providers."
            delay={100}
          />
          
          <StrategyCard 
            icon={<Shield />}
            title="Security First"
            description="Implementing rigorous security protocols and audits to ensure the highest standards of protection for user funds."
            delay={200}
          />
          
          <StrategyCard 
            icon={<Trophy />}
            title="User Experience Excellence"
            description="Creating intuitive interfaces that make complex DeFi strategies accessible to users of all experience levels."
            delay={300}
          />
          
          <StrategyCard 
            icon={<Network />}
            title="Ecosystem Integration"
            description="Building partnerships and integrations with key Solana DeFi protocols to expand opportunities for our users."
            delay={400}
          />
          
          <StrategyCard 
            icon={<BarChart />}
            title="Data-Driven Intelligence"
            description="Leveraging advanced analytics to provide users with actionable insights and transparent performance metrics."
            delay={500}
          />
          
          <StrategyCard 
            icon={<Users />}
            title="Community Governance"
            description="Moving towards a community-driven model where users help shape the future direction of AutoYield."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default RoadmapStrategic;
