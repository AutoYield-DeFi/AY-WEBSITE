
import React, { useState } from 'react';
import { Check, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

type RoadmapPhase = {
  id: string;
  quarter: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
  details?: string[];
};

const roadmapData: RoadmapPhase[] = [
  {
    id: 'phase-1',
    quarter: 'Q2 2025',
    title: 'Beta Launch',
    status: 'current',
    description: 'Meteora DLMM integration & core platform development',
    details: [
      'Privy authentication and transaction management',
      'Integration with Meteora DLMM pools',
      'Basic QUANT AI monitoring capabilities',
      'Public beta access for early users'
    ]
  },
  {
    id: 'phase-2',
    quarter: 'Q3 2025',
    title: 'AI Strategy Enhancement',
    status: 'upcoming',
    description: 'Advanced AI algorithms & expanded protocol support',
    details: [
      'Dynamic range optimization using Solana AI Agent Kit',
      'Multiple DEX protocol support beyond Meteora',
      'Auto-compounding automation',
      'Risk management features'
    ]
  },
  {
    id: 'phase-3',
    quarter: 'Q4 2025',
    title: 'Institutional Features',
    status: 'upcoming',
    description: 'Enterprise-grade tools & API access',
    details: [
      'Multi-wallet dashboard for institutions',
      'API access for programmatic liquidity management',
      'Advanced analytics and reporting',
      'Custom strategy builder for professional users'
    ]
  },
  {
    id: 'phase-4',
    quarter: 'Q1 2026',
    title: 'Governance & Tokenomics',
    status: 'upcoming',
    description: 'Community ownership & protocol incentives',
    details: [
      'AutoYield governance token launch',
      'DAO-based decision making for protocol upgrades',
      'Fee-sharing mechanism for token holders',
      'Liquidity mining incentives'
    ]
  },
  {
    id: 'phase-5',
    quarter: 'Q2 2026',
    title: 'Ecosystem Expansion',
    status: 'upcoming',
    description: 'Cross-chain support & mobile experience',
    details: [
      'Integration with Ethereum L2 networks',
      'Native mobile app for iOS and Android',
      'Cross-chain liquidity routing',
      'Institutional partnerships program'
    ]
  }
];

const RoadmapTimeline = () => {
  const [active, setActive] = useState<string>('phase-1');
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {roadmapData.map((phase) => (
                <button 
                  key={phase.id}
                  onClick={() => setActive(phase.id)}
                  className="relative flex flex-col items-center"
                >
                  <div className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full z-10 transition-all",
                    phase.status === 'completed' 
                      ? "bg-primary text-white" 
                      : phase.status === 'current'
                        ? "border-2 border-primary bg-white text-primary ring-4 ring-primary/20"
                        : "border-2 border-gray-300 bg-white text-gray-400"
                  )}>
                    {phase.status === 'completed' ? (
                      <Check size={16} />
                    ) : (
                      <Circle size={16} fill={phase.status === 'current' ? "#3B82F6" : "none"} />
                    )}
                  </div>
                  <div className={cn(
                    "absolute top-14 text-sm font-medium whitespace-nowrap",
                    active === phase.id || phase.status === 'completed' || phase.status === 'current'
                      ? "text-primary"
                      : "text-gray-400"
                  )}>
                    {phase.quarter}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Content */}
          {roadmapData.map((phase) => (
            <div 
              key={phase.id}
              className={cn(
                "transition-all duration-300 transform",
                active === phase.id 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 absolute pointer-events-none"
              )}
            >
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {phase.status === 'completed' ? 'Completed' : phase.status === 'current' ? 'In Progress' : 'Upcoming'}
                </div>
                <h2 className="text-2xl font-bold mb-3">{phase.title}</h2>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                
                {phase.details && (
                  <ul className="space-y-2 text-sm text-gray-600">
                    {phase.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
