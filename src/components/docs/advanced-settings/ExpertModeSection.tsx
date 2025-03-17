
import React from 'react';
import { Zap } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExpertModeSection = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Zap size={24} className="text-primary" />
        Expert Mode Features
      </h2>
      
      <Alert className="mb-6">
        <AlertTitle>Warning: Advanced Features</AlertTitle>
        <AlertDescription>
          Expert Mode enables features that can significantly impact your position performance and may increase risk. 
          Only enable if you fully understand these advanced controls.
        </AlertDescription>
      </Alert>
      
      <p>
        Enable Expert Mode to access these additional advanced features:
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Manual Position Management</CardTitle>
            <CardDescription>Override AI automation with direct control</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Take direct control over aspects of your liquidity position:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Manual Rebalancing:</strong> Trigger position rebalancing on demand</li>
              <li><strong>Custom Range Setting:</strong> Manually set your liquidity range boundaries</li>
              <li><strong>Fee Claim Control:</strong> Manually claim fees without reinvestment</li>
              <li><strong>AI Pause/Resume:</strong> Temporarily disable automated management</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Advanced Analytics Access</CardTitle>
            <CardDescription>Unlock detailed performance data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Access enhanced analytics and data visualization tools:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Strategy Backtesting:</strong> Test custom strategies against historical data</li>
              <li><strong>Granular Fee Analysis:</strong> Break down fee earnings by time period and price range</li>
              <li><strong>Position Simulation:</strong> Model how parameter changes would affect performance</li>
              <li><strong>Raw Transaction Data:</strong> Export complete transaction history with full details</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExpertModeSection;
