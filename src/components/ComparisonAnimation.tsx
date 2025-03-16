
import React from 'react';
import { Check, Clock, TrendingUp, Shield, X } from 'lucide-react';

const ComparisonAnimation = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-muted/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Value Proposition</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Why AutoYield?</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Animated comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
            {/* Left Column: Manual Management */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-gray-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-4">Manual LP Management</h3>
              <p className="text-gray-500 text-center mb-6">Time-consuming & requires technical expertise</p>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-red-50 rounded-lg">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">24/7 Monitoring Required</p>
                    <p className="text-sm text-gray-500">Constant price watching</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-red-50 rounded-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">High Impermanent Loss Risk</p>
                    <p className="text-sm text-gray-500">No automatic protection</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-red-50 rounded-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Missed Yield Opportunities</p>
                    <p className="text-sm text-gray-500">Slow manual adjustments</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: AutoYield */}
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-primary/20 transform transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-muted flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-center text-primary mb-4">AutoYield Smart Management</h3>
              <p className="text-gray-500 text-center mb-6">Automated & optimized for maximum returns</p>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">24/7 AI Monitoring</p>
                    <p className="text-sm text-gray-500">Continuous algorithmic optimization</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-green-50 rounded-lg animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Smart Loss Protection</p>
                    <p className="text-sm text-gray-500">Automated risk management</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-green-50 rounded-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Auto-Compounding Returns</p>
                    <p className="text-sm text-gray-500">Reinvests profits automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom result card */}
          <div className="mt-12 text-center">
            <div className="inline-block transform transition-all duration-500 hover:scale-105">
              <div className="bg-gradient-to-r from-blue-50 to-primary-muted/20 p-6 rounded-xl border border-primary/10 shadow-sm max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-1">2-3x Higher Returns</h4>
                    <p className="text-gray-700">AutoYield's smart technology handles all the complex work of liquidity management so you can enjoy optimized yields without the technical complexity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual indicators */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="flex flex-col items-center animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-2 h-2 rounded-full bg-primary mb-1"></div>
              <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}} />
    </section>
  );
};

export default ComparisonAnimation;
