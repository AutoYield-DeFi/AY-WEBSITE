
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type RoadmapPhase = {
  id: string;
  quarter: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
  features: string[];
  imageUrl?: string;
};

const roadmapData: RoadmapPhase[] = [
  {
    id: 'phase-1',
    quarter: 'Q2 2024',
    title: 'Beta Launch',
    status: 'current',
    description: 'Initial platform launch with core functionality and integration with Meteora DLMM pools.',
    features: [
      'Web application with Privy authentication',
      'Meteora DLMM integration',
      'Basic QUANT AI strategies',
      'Auto-compounding fees',
      'Real-time performance dashboard'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop'
  },
  {
    id: 'phase-2',
    quarter: 'Q3 2024',
    title: 'Advanced AI Strategies',
    status: 'upcoming',
    description: 'Enhanced AI capabilities and expanded pool support for improved yield generation.',
    features: [
      'Advanced volatility prediction models',
      'Dynamic range adjustment algorithms',
      'Expanded pool selection',
      'Customizable risk parameters',
      'Detailed analytics dashboards'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2970&auto=format&fit=crop'
  },
  {
    id: 'phase-3',
    quarter: 'Q4 2024',
    title: 'Institutional Features',
    status: 'upcoming',
    description: 'Institutional-grade tools and features designed for professional liquidity providers.',
    features: [
      'Multi-wallet support',
      'Advanced reporting and tax documentation',
      'API access for programmatic interaction',
      'Whitelist and customization options',
      'Enhanced security features'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop'
  },
  {
    id: 'phase-4',
    quarter: 'Q1 2025',
    title: 'Governance & Incentives',
    status: 'upcoming',
    description: 'Introduction of governance mechanisms and incentive structures for the community.',
    features: [
      'Governance token launch',
      'Community voting on strategies',
      'Staking and incentive programs',
      'Fee-sharing mechanism',
      'Strategic partnership integrations'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2970&auto=format&fit=crop'
  },
  {
    id: 'phase-5',
    quarter: 'Q2 2025',
    title: 'Cross-chain Expansion',
    status: 'upcoming',
    description: 'Expanding beyond Solana to other blockchains while maintaining our core focus on efficiency.',
    features: [
      'Support for Ethereum L2s',
      'Cross-chain liquidity positions',
      'Unified dashboard for all chains',
      'Chain-specific optimization strategies',
      'Mobile application launch'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop'
  }
];

const RoadmapTimeline = () => {
  const [activePhase, setActivePhase] = useState<string>('phase-1');
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white" ref={timelineRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">12-Month Development Timeline</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our product roadmap outlines the key milestones and features we'll be delivering over the next year to build the most powerful liquidity management platform on Solana.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex min-w-max justify-center gap-1 md:gap-0">
            {roadmapData.map((phase, index) => (
              <button
                key={phase.id}
                className={cn(
                  "relative flex-1 min-w-24 md:min-w-0 px-4 pt-8 pb-4 text-center cursor-pointer transition-all group",
                  activePhase === phase.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setActivePhase(phase.id)}
              >
                {/* Timeline connector */}
                {index > 0 && (
                  <div className={cn(
                    "absolute left-0 right-0 top-4 h-0.5 -translate-y-1/2",
                    phase.status === 'completed' ? "bg-primary" : "bg-muted",
                    activePhase === phase.id || roadmapData.findIndex(p => p.id === activePhase) > index 
                      ? "bg-primary" 
                      : "bg-muted"
                  )} />
                )}
                
                {/* Timeline node */}
                <div className={cn(
                  "absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all",
                  activePhase === phase.id 
                    ? "border-primary bg-white scale-125" 
                    : phase.status === 'completed' 
                      ? "border-primary bg-primary" 
                      : "border-muted bg-white"
                )} />
                
                <div className="text-sm font-medium mb-1">{phase.quarter}</div>
                <div className={cn(
                  "font-bold text-base transition-all",
                  activePhase === phase.id ? "text-foreground" : ""
                )}>
                  {phase.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-5xl mx-auto">
          {roadmapData.map((phase) => (
            <div
              key={phase.id}
              className={cn(
                "transition-all duration-500",
                activePhase === phase.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 absolute -z-10 translate-y-8"
              )}
            >
              {activePhase === phase.id && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={cn(
                    "order-2 md:order-1",
                    isVisible ? "animate-fade-up" : ""
                  )}>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      {phase.status === 'completed' 
                        ? 'Completed' 
                        : phase.status === 'current' 
                          ? 'In Progress' 
                          : 'Upcoming'}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                    <p className="text-muted-foreground mb-6">{phase.description}</p>
                    
                    <h4 className="font-medium mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 bg-primary-muted/50 rounded-full flex items-center justify-center mt-0.5 mr-3">
                            <div className="h-2 w-2 bg-primary rounded-full"></div>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={cn(
                    "order-1 md:order-2",
                    isVisible ? "animate-fade-up animation-delay-200" : ""
                  )}>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-video bg-gray-50">
                      {phase.imageUrl ? (
                        <img 
                          src={phase.imageUrl} 
                          alt={phase.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary-muted/20">
                          <span className="text-primary font-medium">Image coming soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
