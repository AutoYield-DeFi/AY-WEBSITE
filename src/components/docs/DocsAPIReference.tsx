
import React from 'react';
import { Code, Terminal, Server, Database } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import DocsHeader from './DocsHeader';

const DocsAPIReference = () => {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="API Reference"
        description="Technical documentation for integrating with AutoYield's API"
        icon={<Code size={24} className="text-primary" />}
      />

      <section className="space-y-4">
        <p className="text-lg">
          AutoYield provides a comprehensive API for developers to integrate with our platform and build custom tools or dashboards. 
          This documentation covers authentication, available endpoints, request/response formats, and examples.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Terminal size={24} className="text-primary" />
          API Overview
        </h2>
        <p>
          The AutoYield API is a REST API that uses standard HTTP methods and follows standard conventions:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Base URL:</strong> <code className="bg-muted px-1 py-0.5 rounded">https://api.autoyield.io/v1</code></li>
          <li><strong>Content-Type:</strong> <code className="bg-muted px-1 py-0.5 rounded">application/json</code></li>
          <li><strong>Authentication:</strong> API Key in header or JWT tokens</li>
          <li><strong>Rate Limiting:</strong> 100 requests per minute per API key</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Server size={24} className="text-primary" />
          Authentication
        </h2>
        <p>
          There are two methods for authenticating with the AutoYield API:
        </p>
        
        <Tabs defaultValue="api-key" className="w-full">
          <TabsList>
            <TabsTrigger value="api-key">API Key</TabsTrigger>
            <TabsTrigger value="jwt">JWT Token</TabsTrigger>
          </TabsList>
          
          <TabsContent value="api-key" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">API Key Authentication</h3>
            <p>
              For server-to-server integrations, use API key authentication by including your key in the request header:
            </p>
            <div className="bg-muted p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>
                  {`GET /pools
Authorization: Bearer YOUR_API_KEY`}
                </code>
              </pre>
            </div>
            <p className="mt-2">
              To generate an API key, go to your account settings in the AutoYield dashboard and navigate to the API section.
            </p>
          </TabsContent>
          
          <TabsContent value="jwt" className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">JWT Authentication</h3>
            <p>
              For user-specific operations, use JWT authentication. First, obtain a token:
            </p>
            <div className="bg-muted p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>
                  {`POST /auth/login
Content-Type: application/json

{
  "wallet_address": "YOUR_WALLET_ADDRESS",
  "signature": "SIGNATURE_FROM_WALLET"
}`}
                </code>
              </pre>
            </div>
            <p className="mt-2">
              Then include the token in subsequent requests:
            </p>
            <div className="bg-muted p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>
                  {`GET /user/positions
Authorization: Bearer YOUR_JWT_TOKEN`}
                </code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Database size={24} className="text-primary" />
          Endpoints
        </h2>
        
        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="px-2 py-1 bg-primary-muted/20 text-primary rounded text-sm mr-2">GET</span>
                /pools
              </CardTitle>
              <CardDescription>Retrieve all available liquidity pools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Parameters</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-left">Parameter</th>
                      <th className="py-2 px-4 text-left">Type</th>
                      <th className="py-2 px-4 text-left">Description</th>
                      <th className="py-2 px-4 text-left">Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4"><code>limit</code></td>
                      <td className="py-2 px-4">Integer</td>
                      <td className="py-2 px-4">Maximum number of pools to return (default: 20)</td>
                      <td className="py-2 px-4">No</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4"><code>offset</code></td>
                      <td className="py-2 px-4">Integer</td>
                      <td className="py-2 px-4">Number of pools to skip (default: 0)</td>
                      <td className="py-2 px-4">No</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4"><code>sort_by</code></td>
                      <td className="py-2 px-4">String</td>
                      <td className="py-2 px-4">Sort by field (tvl, volume, apr, etc.)</td>
                      <td className="py-2 px-4">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="font-semibold">Response</h4>
              <div className="bg-muted p-4 rounded-md overflow-x-auto">
                <pre className="text-sm">
                  <code>
{`{
  "data": [
    {
      "id": "sol_usdc",
      "token0": {
        "symbol": "SOL",
        "address": "So11111111111111111111111111111111111111112",
        "decimals": 9
      },
      "token1": {
        "symbol": "USDC",
        "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        "decimals": 6
      },
      "tvl": 2500000,
      "volume_24h": 750000,
      "apr": 18.5,
      "risk_score": 3,
      "fee_tier": 0.05
    },
    // Additional pools...
  ],
  "pagination": {
    "total": 42,
    "limit": 20,
    "offset": 0
  }
}`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="px-2 py-1 bg-primary-muted/20 text-primary rounded text-sm mr-2">GET</span>
                /pools/:id
              </CardTitle>
              <CardDescription>Retrieve detailed information about a specific pool</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Parameters</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-left">Parameter</th>
                      <th className="py-2 px-4 text-left">Type</th>
                      <th className="py-2 px-4 text-left">Description</th>
                      <th className="py-2 px-4 text-left">Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4"><code>id</code></td>
                      <td className="py-2 px-4">String</td>
                      <td className="py-2 px-4">Pool identifier (e.g., sol_usdc)</td>
                      <td className="py-2 px-4">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="font-semibold">Response</h4>
              <div className="bg-muted p-4 rounded-md overflow-x-auto">
                <pre className="text-sm">
                  <code>
{`{
  "id": "sol_usdc",
  "token0": {
    "symbol": "SOL",
    "address": "So11111111111111111111111111111111111111112",
    "decimals": 9,
    "price_usd": 100.25
  },
  "token1": {
    "symbol": "USDC",
    "address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    "decimals": 6,
    "price_usd": 1.00
  },
  "tvl": 2500000,
  "volume_24h": 750000,
  "volume_7d": 4850000,
  "fees_24h": 37500,
  "fees_7d": 242500,
  "apr": 18.5,
  "risk_score": 3,
  "fee_tier": 0.05,
  "price_range_optimal": {
    "min": 90.25,
    "max": 110.75
  },
  "price_current": 100.25,
  "price_history_24h": [
    { "timestamp": 1626912000, "price": 98.75 },
    // Additional price points...
  ],
  "volume_history_7d": [
    { "timestamp": 1626912000, "volume": 125000 },
    // Additional volume points...
  ]
}`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="px-2 py-1 bg-primary-muted/20 text-primary rounded text-sm mr-2">GET</span>
                /user/positions
              </CardTitle>
              <CardDescription>Retrieve all positions for the authenticated user</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Parameters</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-left">Parameter</th>
                      <th className="py-2 px-4 text-left">Type</th>
                      <th className="py-2 px-4 text-left">Description</th>
                      <th className="py-2 px-4 text-left">Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4"><code>status</code></td>
                      <td className="py-2 px-4">String</td>
                      <td className="py-2 px-4">Filter by status (active, closed, all)</td>
                      <td className="py-2 px-4">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="font-semibold">Response</h4>
              <div className="bg-muted p-4 rounded-md overflow-x-auto">
                <pre className="text-sm">
                  <code>
{`{
  "data": [
    {
      "id": "pos_1234567890",
      "pool_id": "sol_usdc",
      "created_at": 1626912000,
      "status": "active",
      "initial_value_usd": 5000,
      "current_value_usd": 5250,
      "profit_loss_usd": 250,
      "profit_loss_pct": 5,
      "fees_earned_usd": 75,
      "il_value_usd": -25,
      "token0": {
        "symbol": "SOL",
        "amount": 25.5,
        "value_usd": 2556.38
      },
      "token1": {
        "symbol": "USDC",
        "amount": 2693.62,
        "value_usd": 2693.62
      },
      "range": {
        "min": 95.5,
        "max": 105.25,
        "current": 100.25
      },
      "last_rebalanced_at": 1626972000,
      "rebalance_count": 3
    },
    // Additional positions...
  ]
}`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
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

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">SDK Integration</h2>
        <p>
          For easier integration, AutoYield offers a JavaScript/TypeScript SDK:
        </p>
        
        <div className="bg-muted p-4 rounded-md overflow-x-auto">
          <pre className="text-sm">
            <code>
              {`// Install the SDK
npm install @autoyield/sdk

// Import and initialize
import { AutoYield } from '@autoyield/sdk';

const autoyield = new AutoYield({
  apiKey: 'YOUR_API_KEY',
  environment: 'production' // or 'testnet'
});

// Example: Get all pools
const pools = await autoyield.pools.getAll();

// Example: Create a position
const position = await autoyield.positions.create({
  pool_id: 'sol_usdc',
  amount_token0: 10, // 10 SOL
  amount_token1: 0,   // 0 USDC (single-sided deposit)
  risk_profile: 'moderate'
});`}
            </code>
          </pre>
        </div>
        
        <p>
          The SDK documentation is available at <a href="https://github.com/autoyield/sdk" className="text-primary hover:underline">github.com/autoyield/sdk</a>.
        </p>
      </section>

      <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
        <h3 className="text-xl font-bold mb-2">API Support</h3>
        <p>
          For questions or issues related to the API, please contact us:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>GitHub Issues: <a href="https://github.com/autoyield/api/issues" className="text-primary hover:underline">github.com/autoyield/api/issues</a></li>
          <li>Developer Discord: <a href="#" className="text-primary hover:underline">Join our Discord</a></li>
          <li>Email: <a href="mailto:api@autoyield.io" className="text-primary hover:underline">api@autoyield.io</a></li>
        </ul>
      </section>
    </div>
  );
};

export default DocsAPIReference;
