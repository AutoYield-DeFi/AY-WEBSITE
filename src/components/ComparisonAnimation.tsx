
import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, RefreshCw, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ComparisonAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      title: "Price Movement",
      manualDescription: "Manual monitoring and adjustment required",
      autoDescription: "AI automatically adjusts to changing prices",
      manualIcon: <AlertTriangle className="h-5 w-5 text-orange-500" />,
      autoIcon: <TrendingUp className="h-5 w-5 text-green-500" />
    },
    {
      title: "Fee Collection",
      manualDescription: "Often misses optimal fee-generating ranges",
      autoDescription: "Optimally positioned for maximum fee capture",
      manualIcon: <XCircle className="h-5 w-5 text-red-500" />,
      autoIcon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      title: "Impermanent Loss",
      manualDescription: "High risk during market volatility",
      autoDescription: "AI strategies minimize risk exposure",
      manualIcon: <AlertTriangle className="h-5 w-5 text-orange-500" />,
      autoIcon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      title: "Reinvestment",
      manualDescription: "Manual fee reinvestment process",
      autoDescription: "Auto-compounds for optimal growth",
      manualIcon: <RefreshCw className="h-5 w-5 text-blue-500" />,
      autoIcon: <RefreshCw className="h-5 w-5 text-green-500 animate-spin-slow" />
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">Smart Automation vs Manual Management</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        See how AutoYield's AI-powered approach compares to traditional manual liquidity management
      </p>
      
      {/* Sleek, Split-Screen Comparison Card */}
      <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
        {/* Step Navigation - Small Pills */}
        <div className="pt-5 pb-2 px-4 flex justify-center gap-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                activeStep === index 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>
        
        {/* Main Content Area - Side by Side Comparison */}
        <div className="px-6 pt-4 pb-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`transition-all duration-500 ${
                activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-0 absolute -translate-y-4'
              }`}
              style={{ display: activeStep === index ? 'block' : 'none' }}
            >
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Manual Side */}
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mr-3">
                      <XCircle className="h-4 w-4 text-red-500" />
                    </div>
                    <h3 className="font-medium text-gray-900">Manual Management</h3>
                  </div>
                  
                  <div className="flex items-start mt-4 gap-3">
                    <div className="mt-1 bg-white p-2 rounded-full shadow-sm">
                      {step.manualIcon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{step.title}</p>
                      <p className="text-gray-500 text-sm mt-1">{step.manualDescription}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 w-1/3 rounded-full"></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
                      <span>Lower Returns</span>
                      <span>Higher Risk</span>
                    </div>
                  </div>
                </div>
                
                {/* AutoYield Side */}
                <div className="bg-primary-muted/10 rounded-lg p-5 border border-primary/10">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <h3 className="font-medium text-gray-900">AutoYield AI</h3>
                  </div>
                  
                  <div className="flex items-start mt-4 gap-3">
                    <div className="mt-1 bg-white p-2 rounded-full shadow-sm">
                      {step.autoIcon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{step.title}</p>
                      <p className="text-gray-500 text-sm mt-1">{step.autoDescription}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 w-4/5 rounded-full"></div>
                    </div>
                    <div className="mt-1 flex justify-between text-xs text-gray-500">
                      <span>Higher Returns</span>
                      <span>Lower Risk</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <div className="text-center bg-green-50 px-4 py-2 rounded-full inline-block">
                  <span className="text-sm font-medium text-green-700">
                    {isMobile ? "2x better returns, less effort" : "Up to 2x better returns with significantly lower effort"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Progress Indicator */}
        <div className="py-3 bg-gray-50 border-t border-gray-100">
          <div className="flex justify-center space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonAnimation;
