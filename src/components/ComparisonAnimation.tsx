
import React from 'react';
import { TrendingUp, ShieldCheck, RefreshCw, Clock } from 'lucide-react';

const ComparisonAnimation = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">See The Difference</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Smart Automation vs Manual Management</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AutoYield's AI-powered approach simplifies liquidity management while delivering better results
          </p>
        </div>
        
        {/* Redesigned Comparison - Elegant Side-by-Side Table */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-gray-100">
              <div className="p-5 text-center font-medium text-gray-500">Features</div>
              <div className="p-5 text-center font-medium bg-gray-50 text-gray-800 border-l border-r border-gray-100">Manual Management</div>
              <div className="p-5 text-center font-medium bg-primary-muted/20 text-primary border-r border-gray-100">AutoYield</div>
            </div>
            
            {/* Row 1: Position Management */}
            <div className="grid grid-cols-3 border-b border-gray-100">
              <div className="p-5 flex items-center">
                <div className="bg-blue-50 p-2 rounded-full mr-3">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Position Management</p>
                </div>
              </div>
              <div className="p-5 bg-gray-50 border-l border-r border-gray-100">
                <p className="text-sm">Requires constant monitoring and manual adjustments to optimize range</p>
              </div>
              <div className="p-5 bg-primary-muted/10 border-r border-gray-100">
                <p className="text-sm">AI automatically adjusts positions based on market conditions</p>
              </div>
            </div>
            
            {/* Row 2: Risk Protection */}
            <div className="grid grid-cols-3 border-b border-gray-100">
              <div className="p-5 flex items-center">
                <div className="bg-green-50 p-2 rounded-full mr-3">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Risk Protection</p>
                </div>
              </div>
              <div className="p-5 bg-gray-50 border-l border-r border-gray-100">
                <p className="text-sm">Limited protection against impermanent loss unless actively managed</p>
              </div>
              <div className="p-5 bg-primary-muted/10 border-r border-gray-100">
                <p className="text-sm">Sophisticated algorithms minimize exposure during market volatility</p>
              </div>
            </div>
            
            {/* Row 3: Fee Compounding */}
            <div className="grid grid-cols-3 border-b border-gray-100">
              <div className="p-5 flex items-center">
                <div className="bg-purple-50 p-2 rounded-full mr-3">
                  <RefreshCw className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Fee Compounding</p>
                </div>
              </div>
              <div className="p-5 bg-gray-50 border-l border-r border-gray-100">
                <p className="text-sm">Manual collection and reinvestment process, often cost-inefficient</p>
              </div>
              <div className="p-5 bg-primary-muted/10 border-r border-gray-100">
                <p className="text-sm">Automatic fee collection and optimal reinvestment strategy</p>
              </div>
            </div>
            
            {/* Row 4: Time Investment */}
            <div className="grid grid-cols-3">
              <div className="p-5 flex items-center">
                <div className="bg-amber-50 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">Time Investment</p>
                </div>
              </div>
              <div className="p-5 bg-gray-50 border-l border-r border-gray-100">
                <p className="text-sm">Requires significant time dedication for optimal management</p>
              </div>
              <div className="p-5 bg-primary-muted/10 border-r border-gray-100">
                <p className="text-sm">Set-and-forget approach with 24/7 AI optimization</p>
              </div>
            </div>
            
            {/* Footer - Clean Summary */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-primary-muted/10 border-t border-gray-100">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">
                  AutoYield delivers better returns with significantly lower effort
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonAnimation;
