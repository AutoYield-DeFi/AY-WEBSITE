
import React from 'react';
import { Database } from 'lucide-react';
import ApiEndpointCard from './ApiEndpointCard';
import ApiParametersTable from './ApiParametersTable';
import CodeBlock from './CodeBlock';

const ApiEndpointsSection = () => {
  const poolsParameters = [
    { name: 'limit', type: 'Integer', description: 'Maximum number of pools to return (default: 20)', required: false },
    { name: 'offset', type: 'Integer', description: 'Number of pools to skip (default: 0)', required: false },
    { name: 'sort_by', type: 'String', description: 'Sort by field (tvl, volume, apr, etc.)', required: false },
  ];

  const poolByIdParameters = [
    { name: 'id', type: 'String', description: 'Pool identifier (e.g., sol_usdc)', required: true },
  ];

  const userPositionsParameters = [
    { name: 'status', type: 'String', description: 'Filter by status (active, closed, all)', required: false },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Database size={24} className="text-primary" />
        Endpoints
      </h2>
      
      <div className="grid gap-6 mb-8">
        <ApiEndpointCard
          method="GET"
          endpoint="/pools"
          description="Retrieve all available liquidity pools"
        >
          <ApiParametersTable parameters={poolsParameters} />
          
          <h4 className="font-semibold">Response</h4>
          <CodeBlock code={`{\n  "data": [\n    {\n      "id": "sol_usdc",\n      "token0": {\n        "symbol": "SOL",\n        "address": "So11111111111111111111111111111111111111112",\n        "decimals": 9\n      },\n      "token1": {\n        "symbol": "USDC",\n        "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",\n        "decimals": 6\n      },\n      "tvl": 2500000,\n      "volume_24h": 750000,\n      "apr": 18.5,\n      "risk_score": 3,\n      "fee_tier": 0.05\n    },\n    // Additional pools...\n  ],\n  "pagination": {\n    "total": 42,\n    "limit": 20,\n    "offset": 0\n  }\n}`} />
        </ApiEndpointCard>
        
        <ApiEndpointCard
          method="GET"
          endpoint="/pools/:id"
          description="Retrieve detailed information about a specific pool"
        >
          <ApiParametersTable parameters={poolByIdParameters} />
          
          <h4 className="font-semibold">Response</h4>
          <CodeBlock code={`{\n  "id": "sol_usdc",\n  "token0": {\n    "symbol": "SOL",\n    "address": "So11111111111111111111111111111111111111112",\n    "decimals": 9,\n    "price_usd": 100.25\n  },\n  "token1": {\n    "symbol": "USDC",\n    "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",\n    "decimals": 6,\n    "price_usd": 1.00\n  },\n  "tvl": 2500000,\n  "volume_24h": 750000,\n  "volume_7d": 4850000,\n  "fees_24h": 37500,\n  "fees_7d": 242500,\n  "apr": 18.5,\n  "risk_score": 3,\n  "fee_tier": 0.05,\n  "price_range_optimal": {\n    "min": 90.25,\n    "max": 110.75\n  },\n  "price_current": 100.25,\n  "price_history_24h": [\n    { "timestamp": 1626912000, "price": 98.75 },\n    // Additional price points...\n  ],\n  "volume_history_7d": [\n    { "timestamp": 1626912000, "volume": 125000 },\n    // Additional volume points...\n  ]\n}`} />
        </ApiEndpointCard>
        
        <ApiEndpointCard
          method="GET"
          endpoint="/user/positions"
          description="Retrieve all positions for the authenticated user"
        >
          <ApiParametersTable parameters={userPositionsParameters} />
          
          <h4 className="font-semibold">Response</h4>
          <CodeBlock code={`{\n  "data": [\n    {\n      "id": "pos_1234567890",\n      "pool_id": "sol_usdc",\n      "created_at": 1626912000,\n      "status": "active",\n      "initial_value_usd": 5000,\n      "current_value_usd": 5250,\n      "profit_loss_usd": 250,\n      "profit_loss_pct": 5,\n      "fees_earned_usd": 75,\n      "il_value_usd": -25,\n      "token0": {\n        "symbol": "SOL",\n        "amount": 25.5,\n        "value_usd": 2556.38\n      },\n      "token1": {\n        "symbol": "USDC",\n        "amount": 2693.62,\n        "value_usd": 2693.62\n      },\n      "range": {\n        "min": 95.5,\n        "max": 105.25,\n        "current": 100.25\n      },\n      "last_rebalanced_at": 1626972000,\n      "rebalance_count": 3\n    },\n    // Additional positions...\n  ]\n}`} />
        </ApiEndpointCard>
      </div>
      
      <div className="p-4 border rounded-lg">
        <h3 className="text-lg font-bold mb-4">Additional Endpoints</h3>
        <ul className="space-y-2">
          <li><code className="bg-muted px-1 py-0.5 rounded">POST /positions</code> - Create a new liquidity position</li>
          <li><code className="bg-muted px-1 py-0.5 rounded">GET /positions/:id</code> - Get details for a specific position</li>
          <li><code className="bg-muted px-1 py-0.5 rounded">POST /positions/:id/withdraw</code> - Withdraw from a position</li>
          <li><code className="bg-muted px-1 py-0.5 rounded">POST /positions/:id/add</code> - Add liquidity to a position</li>
          <li><code className="bg-muted px-1 py-0.5 rounded">POST /positions/:id/rebalance</code> - Manually trigger a rebalance</li>
          <li><code className="bg-muted px-1 py-0.5 rounded">GET /stats</code> - Get platform-wide statistics</li>
          <li><code className="bg-muted px-1 py-0.5 rounded">GET /user/activity</code> - Get user activity history</li>
        </ul>
      </div>
    </section>
  );
};

export default ApiEndpointsSection;
