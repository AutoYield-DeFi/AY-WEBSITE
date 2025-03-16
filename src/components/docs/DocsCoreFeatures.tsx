
import React from 'react';
import { Command, Zap, Layers, ChartBar, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import DocsHeader from './DocsHeader';

const DocsCoreFeatures = () => {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="Core Features"
        description="Discover the key features that make AutoYield the ultimate liquidity management solution"
        icon={<Command size={24} className="text-primary" />}
      />

      <section className="space-y-6">
        <p className="text-lg">
          AutoYield combines cutting-edge AI technology with Solana's powerful blockchain infrastructure to provide
          a comprehensive liquidity management platform. Here are the core features that set AutoYield apart:
        </p>

        <div className="grid gap-6 mt-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap size={20} className="text-primary" />
                One-Click Liquidity
              </CardTitle>
              <CardDescription>Simplified provision of liquidity with automated optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                With AutoYield, providing liquidity is as simple as choosing a pool and depositing your assets. 
                Our platform handles all the complexity behind the scenes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automatic splitting of tokens into the correct ratio</li>
                <li>Optimal concentrated liquidity range determination</li>
                <li>Continuous position monitoring and adjustment</li>
                <li>Fee collection and reinvestment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers size={20} className="text-primary" />
                Meteora DLMM Integration
              </CardTitle>
              <CardDescription>Seamless integration with Meteora's Dynamic Liquidity Market Maker</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                AutoYield is built exclusively for Meteora's DLMM pools, optimizing for their unique advantages:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>More efficient capital utilization through concentrated liquidity</li>
                <li>Lower slippage for traders, attracting more volume</li>
                <li>Higher fee generation potential for liquidity providers</li>
                <li>Dynamic fee tiers based on volatility</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartBar size={20} className="text-primary" />
                Advanced Analytics
              </CardTitle>
              <CardDescription>Comprehensive insights into your liquidity positions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                AutoYield provides detailed analytics to help you understand your liquidity performance:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time tracking of earned fees and current value</li>
                <li>Historical performance charts and APR calculations</li>
                <li>Impermanent loss estimation and mitigation recommendations</li>
                <li>AI rebalancing activity logs with explanations</li>
                <li>Position performance compared to market benchmarks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield size={20} className="text-primary" />
                Risk Management
              </CardTitle>
              <CardDescription>Protecting your assets during market volatility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our platform includes sophisticated risk management features to safeguard your liquidity:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Smart stop-loss mechanisms that respond to market conditions</li>
                <li>Impermanent loss protection through dynamic position adjustment</li>
                <li>Risk scoring for different pools and strategies</li>
                <li>Automated exit strategies during extreme market events</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Privy-Powered Authentication & Transactions</h2>
        <p>
          AutoYield uses Privy to provide a seamless authentication and transaction experience:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Multiple Login Options:</strong> Connect with email, social accounts, or traditional crypto wallets</li>
          <li><strong>Streamlined Transaction Flow:</strong> Simplified approval process for all platform operations</li>
          <li><strong>Enhanced Security:</strong> Additional layer of protection for your assets and transactions</li>
          <li><strong>Lower Gas Fees:</strong> Optimized transaction bundling and execution</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Solana AI Agent Kit Integration</h2>
        <p>
          AutoYield leverages Solana's AI Agent Kit to enable faster automated liquidity strategies with smart contract-driven intelligence:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Real-time Analysis:</strong> Continuous monitoring of on-chain data for optimal decision-making</li>
          <li><strong>Fast Execution:</strong> Near-instant position adjustments when market conditions change</li>
          <li><strong>Predictive Modeling:</strong> Anticipating market movements to optimize liquidity placement</li>
          <li><strong>Autonomous Operation:</strong> Self-managing positions that require no manual intervention</li>
        </ul>
      </section>

      <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
        <h3 className="text-xl font-bold mb-2">Learn More About Our Features</h3>
        <p className="mb-4">
          Explore our detailed documentation to learn more about AutoYield's powerful features:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Discover how our <a href="/docs/ai-strategies" className="text-primary hover:underline">AI Strategies</a> work behind the scenes</li>
          <li>Learn about our <a href="/docs/security-model" className="text-primary hover:underline">Security Model</a> for protecting your assets</li>
          <li>Understand our <a href="/docs/fee-structure" className="text-primary hover:underline">Fee Structure</a> and revenue model</li>
          <li>Check out <a href="/docs/advanced-settings" className="text-primary hover:underline">Advanced Settings</a> for customizing your experience</li>
        </ul>
      </section>
    </div>
  );
};

export default DocsCoreFeatures;
