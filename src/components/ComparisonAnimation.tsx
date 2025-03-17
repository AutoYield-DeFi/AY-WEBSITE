
import React from 'react';
import { Check, Clock, TrendingUp, Shield, X } from 'lucide-react';

const ComparisonAnimation = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-primary-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Value Proposition</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Why AutoYield?</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Comparison cards with simpler animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manual Management */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold">Manual LP Management</h3>
              </div>
              
              <p className="text-gray-500 mb-6">Time-consuming & requires technical expertise</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">24/7 Monitoring Required</p>
                    <p className="text-sm text-gray-500">Constant price watching</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">High Impermanent Loss Risk</p>
                    <p className="text-sm text-gray-500">No automatic protection</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Missed Yield Opportunities</p>
                    <p className="text-sm text-gray-500">Slow manual adjustments</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* AutoYield */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-primary/20 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-muted flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">AutoYield Smart Management</h3>
              </div>
              
              <p className="text-gray-500 mb-6">Automated & optimized for maximum returns</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">24/7 AI Monitoring</p>
                    <p className="text-sm text-gray-500">Continuous algorithmic optimization</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Smart Loss Protection</p>
                    <p className="text-sm text-gray-500">Automated risk management</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Auto-Compounding Returns</p>
                    <p className="text-sm text-gray-500">Reinvests profits automatically</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Results card - simplified with better performance */}
          <div className="mt-10 bg-gradient-to-r from-blue-50 to-primary-muted/20 p-6 rounded-xl border border-primary/10 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-center">
              <div className="hidden sm:block flex-shrink-0 mr-5">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-2">2-3x Higher Returns</h4>
                <p className="text-gray-700">AutoYield's smart technology handles all the complex work of liquidity management so you can enjoy optimized yields without the technical complexity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonAnimation;
