
import React, { useEffect, useRef } from 'react';
import { Check, RefreshCw, Clock, TrendingUp } from 'lucide-react';

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
          {/* Animation Container */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Left Side: Manual Management */}
            <div className="animate-item opacity-0 transition-all duration-700 delay-300 translate-x-[-50px] w-full md:w-2/5 p-6 rounded-xl bg-white shadow-lg border border-gray-100">
              <div className="text-center mb-4">
                <div className="inline-block p-3 rounded-full bg-gray-100 mb-3">
                  <Clock className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold">Manual LP Management</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-3">
                    <span className="text-xs">✗</span>
                  </div>
                  <p className="text-sm text-gray-600">Constant monitoring of price ranges</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-3">
                    <span className="text-xs">✗</span>
                  </div>
                  <p className="text-sm text-gray-600">Manual fee collection & reinvestment</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-3">
                    <span className="text-xs">✗</span>
                  </div>
                  <p className="text-sm text-gray-600">No protection from impermanent loss</p>
                </div>
              </div>
            </div>
            
            {/* Center Animation */}
            <div className="animate-item opacity-0 transition-all duration-700 delay-500 z-10 w-full md:w-1/5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-600 animate-pulse opacity-30 blur-xl"></div>
                <div className="relative bg-gradient-to-r from-primary to-blue-600 p-4 rounded-full shadow-lg">
                  <RefreshCw className="h-8 w-8 text-white animate-spin-slow" />
                </div>
                <div className="absolute top-1/2 left-[-100px] md:left-[-150px] w-[100px] md:w-[150px] h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
                <div className="absolute top-1/2 right-[-100px] md:right-[-150px] w-[100px] md:w-[150px] h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
            </div>
            
            {/* Right Side: AutoYield */}
            <div className="animate-item opacity-0 transition-all duration-700 delay-700 translate-x-[50px] w-full md:w-2/5 p-6 rounded-xl bg-white shadow-lg border border-primary/20">
              <div className="text-center mb-4">
                <div className="inline-block p-3 rounded-full bg-primary-muted mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">AutoYield</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                    <Check className="h-3 w-3" />
                  </div>
                  <p className="text-sm text-gray-600">AI-powered 24/7 position optimization</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                    <Check className="h-3 w-3" />
                  </div>
                  <p className="text-sm text-gray-600">Automatic fee reinvestment & compounding</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                    <Check className="h-3 w-3" />
                  </div>
                  <p className="text-sm text-gray-600">Smart risk management algorithms</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Outcome Statement */}
          <div className="animate-item opacity-0 transition-all duration-700 delay-900 text-center mt-12 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
              <p className="text-blue-800 font-medium">
                AutoYield handles the complex work of liquidity management, 
                so you can enjoy the benefits without the hassle
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add animation styles using CSS classes instead of inline JSX style tag */}
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-in .animate-item {
          opacity: 1;
          transform: translateX(0);
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}} />
    </section>
  );
};

export default ComparisonAnimation;
