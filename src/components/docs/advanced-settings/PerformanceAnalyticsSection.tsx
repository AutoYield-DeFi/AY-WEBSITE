
import React from 'react';
import { Gauge } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PerformanceAnalyticsSection = () => {
  return (
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
  );
};

export default PerformanceAnalyticsSection;
