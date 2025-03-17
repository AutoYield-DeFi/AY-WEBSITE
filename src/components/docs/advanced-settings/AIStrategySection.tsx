
import React from 'react';
import { Sliders } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AIStrategySection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Sliders size={24} className="text-primary" />
        AI Strategy Customization
      </h2>
      
      <p>
        AutoYield allows advanced users to customize how the QUANT AI manages their liquidity positions. 
        The following parameters can be adjusted for each of your positions:
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Risk Tolerance</CardTitle>
            <CardDescription>Configure your position's risk profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Adjust how aggressively the AI optimizes for higher returns versus stability:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Conservative:</strong> Prioritizes capital preservation with wider liquidity ranges and less frequent rebalancing</li>
              <li><strong>Moderate:</strong> Balanced approach that seeks optimal returns while managing risk (default)</li>
              <li><strong>Aggressive:</strong> Maximizes yield potential with tighter ranges and more active management</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
              Found in: Position Details → Settings → Risk Profile
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Rebalancing Thresholds</CardTitle>
            <CardDescription>Fine-tune when position rebalancing occurs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Set custom triggers for when the AI should rebalance your position:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Price Deviation:</strong> Rebalance when price moves X% from the center of your range (5-50%)</li>
              <li><strong>Time-Based:</strong> Minimum and maximum time between rebalances (1 hour to 7 days)</li>
              <li><strong>Fee Accumulation:</strong> Rebalance after collecting X amount in fees (as % of position value)</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
              Found in: Position Details → Settings → Rebalancing Rules
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Stop-Loss Configuration</CardTitle>
            <CardDescription>Set automated exit conditions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Configure when the AI should automatically exit your position:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Price-Based:</strong> Exit if either token falls below a specified price threshold</li>
              <li><strong>Impermanent Loss Limit:</strong> Exit if IL exceeds a percentage of your position value</li>
              <li><strong>Volatility Trigger:</strong> Exit during extreme market volatility events</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
              Found in: Position Details → Settings → Stop-Loss Rules
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Compounding Frequency</CardTitle>
            <CardDescription>Optimize fee reinvestment timing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Control how often earned fees are reinvested into your position:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fee Threshold:</strong> Compound when accumulated fees reach X% of position value</li>
              <li><strong>Time-Based:</strong> Compound at regular intervals (daily, weekly, etc.)</li>
              <li><strong>Gas-Optimized:</strong> Let AI determine optimal timing based on gas costs vs. benefits (default)</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
              Found in: Position Details → Settings → Compounding Rules
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIStrategySection;
