
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, TrendingUp, TrendingDown, RefreshCw, Plus } from 'lucide-react';

const ActivePools = () => {
  const pools = [
    {
      id: 1,
      name: 'SOL-USDC',
      icon1: '🌞', // Solana icon
      icon2: '💵', // USDC icon
      tvl: '$5,231.45',
      apr: '19.2%',
      myValue: '$2,500.00',
      myShare: '0.48%',
      fees24h: '$12.41',
      trend: 'up',
      lastRebalance: '2 hours ago',
      protocol: 'Meteora',
      type: 'DLMM'
    },
    {
      id: 2,
      name: 'SOL-BONK',
      icon1: '🌞', // Solana icon
      icon2: '🐕', // BONK icon
      tvl: '$1,890.22',
      apr: '28.7%',
      myValue: '$850.00',
      myShare: '0.45%',
      fees24h: '$9.75',
      trend: 'up',
      lastRebalance: '5 hours ago',
      protocol: 'Meteora',
      type: 'DLMM'
    },
    {
      id: 3,
      name: 'JitoSOL-USDC',
      icon1: '🔄', // JitoSOL icon
      icon2: '💵', // USDC icon
      tvl: '$4,255.10',
      apr: '14.3%',
      myValue: '$1,200.00',
      myShare: '0.28%',
      fees24h: '$6.82',
      trend: 'down',
      lastRebalance: '1 day ago',
      protocol: 'Meteora',
      type: 'DLMM'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Badge variant="outline" className="px-3 py-1 rounded-full bg-white">
            All Pools
          </Badge>
          <Badge variant="outline" className="px-3 py-1 rounded-full">
            Stable Pools
          </Badge>
          <Badge variant="outline" className="px-3 py-1 rounded-full">
            Volatile Pools
          </Badge>
        </div>
        <Button size="sm" variant="outline" className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          <span>Add Liquidity</span>
        </Button>
      </div>

      <div className="space-y-4">
        {pools.map((pool) => (
          <Card key={pool.id} className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className="relative mr-3">
                    <span className="text-2xl">{pool.icon1}</span>
                    <span className="text-2xl absolute -bottom-2 -right-2">{pool.icon2}</span>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-bold">{pool.name}</h3>
                      <Badge className="ml-2 bg-primary-muted text-primary">{pool.type}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center">
                      {pool.protocol}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                  <div>
                    <p className="text-xs text-muted-foreground">My Liquidity</p>
                    <p className="font-medium">{pool.myValue}</p>
                    <p className="text-xs text-muted-foreground">{pool.myShare} of pool</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground">APR</p>
                    <p className="font-medium flex items-center">
                      {pool.apr}
                      {pool.trend === 'up' ? (
                        <TrendingUp className="ml-1 h-3 w-3 text-green-500" />
                      ) : (
                        <TrendingDown className="ml-1 h-3 w-3 text-red-500" />
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground">Fees 24h: {pool.fees24h}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground">TVL</p>
                    <p className="font-medium">{pool.tvl}</p>
                    <p className="text-xs text-muted-foreground">Total Value Locked</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <RefreshCw className="mr-1 h-3 w-3" />
                      Last Rebalance
                    </p>
                    <p className="font-medium">{pool.lastRebalance}</p>
                    <div className="flex space-x-2 mt-1">
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        + Add
                      </Button>
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        - Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActivePools;
