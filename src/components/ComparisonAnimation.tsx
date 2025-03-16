
import React, { useEffect, useRef } from 'react';
import { Check, RefreshCw, Clock, TrendingUp, Shield } from 'lucide-react';

const ComparisonAnimation = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = animationRef.current?.querySelectorAll('.animate-item');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={animationRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-muted/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Value Proposition</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Why AutoYield?</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Using a simpler, more reliable comparison approach */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Center Divider with Animation */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -translate-x-1/2"></div>
            
            {/* Left Side: Manual Way */}
            <div className="animate-item opacity-0 transition-all duration-700 delay-300 -translate-x-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-gray-100 mb-3">
                  <Clock className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold">Manual LP Management</h3>
                <p className="text-sm text-gray-500 mt-2">Time-consuming & error-prone</p>
              </div>
              
              <div className="space-y-5 mt-8">
                <div className="flex p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-item opacity-0 transition-all duration-300 delay-500 -translate-y-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex h-8 w-8 rounded-full bg-red-100 items-center justify-center">
                      <span className="text-red-500 text-lg">✗</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Constant Monitoring</h4>
                    <p className="text-sm text-gray-500 mt-1">Requires 24/7 attention to price movements</p>
                  </div>
                </div>
                
                <div className="flex p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-item opacity-0 transition-all duration-300 delay-600 -translate-y-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex h-8 w-8 rounded-full bg-red-100 items-center justify-center">
                      <span className="text-red-500 text-lg">✗</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Financial Risk</h4>
                    <p className="text-sm text-gray-500 mt-1">High impermanent loss with no automatic protection</p>
                  </div>
                </div>
                
                <div className="flex p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-item opacity-0 transition-all duration-300 delay-700 -translate-y-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex h-8 w-8 rounded-full bg-red-100 items-center justify-center">
                      <span className="text-red-500 text-lg">✗</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Missed Opportunities</h4>
                    <p className="text-sm text-gray-500 mt-1">Manual rebalancing often too slow to capture optimal yields</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side: AutoYield */}
            <div className="animate-item opacity-0 transition-all duration-700 delay-300 translate-x-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary-muted mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">AutoYield Smart Management</h3>
                <p className="text-sm text-gray-500 mt-2">Automated & risk-optimized</p>
              </div>
              
              <div className="space-y-5 mt-8">
                <div className="flex p-4 bg-white rounded-lg shadow-sm border border-primary/10 animate-item opacity-0 transition-all duration-300 delay-500 translate-y-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex h-8 w-8 rounded-full bg-green-100 items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">AI-Powered Automation</h4>
                    <p className="text-sm text-gray-500 mt-1">24/7 algorithmic position optimization</p>
                  </div>
                </div>
                
                <div className="flex p-4 bg-white rounded-lg shadow-sm border border-primary/10 animate-item opacity-0 transition-all duration-300 delay-600 translate-y-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex h-8 w-8 rounded-full bg-green-100 items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Risk Management</h4>
                    <p className="text-sm text-gray-500 mt-1">Automatic impermanent loss protection mechanisms</p>
                  </div>
                </div>
                
                <div className="flex p-4 bg-white rounded-lg shadow-sm border border-primary/10 animate-item opacity-0 transition-all duration-300 delay-700 translate-y-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex h-8 w-8 rounded-full bg-green-100 items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Compound Growth</h4>
                    <p className="text-sm text-gray-500 mt-1">Automatic fee reinvestment for maximum returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Animation Element */}
          <div className="flex justify-center mt-16">
            <div className="animate-item opacity-0 delay-800 transition-all duration-700 scale-95 bg-blue-50 border border-blue-100 rounded-lg p-4 md:p-6 max-w-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4 hidden sm:block">
                  <div className="p-2 rounded-full bg-blue-100">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 text-lg mb-1">The AutoYield Advantage</h4>
                  <p className="text-blue-700">
                    AutoYield handles all the complex work of liquidity management so you can enjoy optimized yields without the technical complexity or constant monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add animation styles using CSS classes */}
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-in .animate-item {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        .pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default ComparisonAnimation;
