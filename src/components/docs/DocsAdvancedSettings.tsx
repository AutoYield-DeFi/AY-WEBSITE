
import React from 'react';
import { Settings, AlertTriangle, Sliders, Gauge, Zap } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import DocsHeader from './DocsHeader';

const DocsAdvancedSettings = () => {
  return (
    <div className="space-y-10">
      <DocsHeader
        title="Advanced Settings"
        description="Customize your AutoYield experience with advanced configuration options"
        icon={<Settings size={24} className="text-primary" />}
      />

      <Alert variant="warning" className="bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        <AlertTitle>For Advanced Users</AlertTitle>
        <AlertDescription>
          These settings are intended for experienced users who understand DeFi liquidity provisioning and the associated risks. 
          The default AutoYield settings are optimized for most users. Modify these parameters only if you understand their impact.
        </AlertDescription>
      </Alert>

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

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Gauge size={24} className="text-primary" />
          Performance Analytics Settings
        </h2>
        
        <p>
          Customize how performance data is displayed and calculated in your dashboard:
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Benchmark Selection</CardTitle>
              <CardDescription>Choose performance comparison metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Select which benchmarks to compare your position's performance against:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>HODL Comparison:</strong> Compare to simply holding the tokens</li>
                <li><strong>Market Index:</strong> Compare to broader market performance</li>
                <li><strong>Traditional Finance:</strong> Compare to TradFi yields (T-bills, bonds, etc.)</li>
                <li><strong>Other DeFi:</strong> Compare to alternative yield strategies</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Found in: Dashboard → Settings → Performance Metrics
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Time Period Customization</CardTitle>
              <CardDescription>Set custom reporting periods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Define custom time periods for performance calculations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Custom Date Ranges:</strong> Set specific start and end dates for analysis</li>
                <li><strong>Rolling Periods:</strong> Configure rolling time windows (last 7 days, 30 days, etc.)</li>
                <li><strong>Tax Periods:</strong> Align with fiscal year or tax reporting periods</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Found in: Dashboard → Settings → Time Periods
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

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

      <section className="bg-primary-muted/10 p-6 rounded-lg border border-primary-muted/20">
        <h3 className="text-xl font-bold mb-2">Restoring Default Settings</h3>
        <p>
          If you've customized your settings and want to return to AutoYield's optimized defaults:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mt-4">
          <li>Navigate to the Settings page for your position or account</li>
          <li>Click the "Restore Defaults" button at the bottom of the page</li>
          <li>Confirm that you want to reset all customized parameters</li>
          <li>The AI will resume managing your position with the default optimized settings</li>
        </ol>
      </section>
    </div>
  );
};

export default DocsAdvancedSettings;
