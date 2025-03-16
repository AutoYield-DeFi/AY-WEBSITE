
import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, RefreshCw, AlertTriangle, CheckCircle, XCircle, DollarSign } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ComparisonAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 5000); // Increased time to 5 seconds for better readability
    
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">See The Difference</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Smart Automation vs Manual Management</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AutoYield's AI-powered approach earns 2-3x more than traditional manual liquidity management with less effort
          </p>
        </div>
        
        {/* Enhanced Comparison Card */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
            {/* Step Navigation - Small Pills */}
            <div className="pt-6 pb-3 px-4 flex justify-center gap-2">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>
            
            {/* Main Content Area - Side by Side Comparison with improved animations */}
            <div className="px-6 pt-6 pb-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-0 absolute -translate-y-4'
                  }`}
                  style={{ display: activeStep === index ? 'block' : 'none' }}
                >
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Manual Side - Enhanced styling */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 transition-all duration-500 hover:shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-3">
                          <XCircle className="h-5 w-5 text-red-500" />
                        </div>
                        <h3 className="font-medium text-gray-900">Manual Management</h3>
                      </div>
                      
                      <div className="flex items-start mt-5 gap-4">
                        <div className="mt-1 bg-white p-3 rounded-full shadow-sm">
                          {step.manualIcon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{step.title}</p>
                          <p className="text-gray-600 mt-2">{step.manualDescription}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-red-400 w-1/3 rounded-full"></div>
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-gray-500">
                          <span>Lower Returns</span>
                          <span>Higher Risk</span>
                        </div>
                      </div>
                      
                      {/* Added illustration for manual */}
                      <div className="mt-6 flex justify-center">
                        <div className="relative w-20 h-20">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <DollarSign className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="absolute top-0 right-0">
                            <XCircle className="h-5 w-5 text-red-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* AutoYield Side - Enhanced styling */}
                    <div className="bg-primary-muted/10 rounded-lg p-6 border border-primary/10 transition-all duration-500 hover:shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <h3 className="font-medium text-gray-900">AutoYield AI</h3>
                      </div>
                      
                      <div className="flex items-start mt-5 gap-4">
                        <div className="mt-1 bg-white p-3 rounded-full shadow-sm">
                          {step.autoIcon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{step.title}</p>
                          <p className="text-gray-600 mt-2">{step.autoDescription}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-400 w-4/5 rounded-full"></div>
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-gray-500">
                          <span>Higher Returns (2-3x)</span>
                          <span>Lower Risk</span>
                        </div>
                      </div>
                      
                      {/* Added illustration for AutoYield */}
                      <div className="mt-6 flex justify-center">
                        <div className="relative w-20 h-20">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <DollarSign className="h-8 w-8 text-green-500" />
                          </div>
                          <div className="absolute top-0 right-0">
                            <div className="bg-green-100 rounded-full p-1">
                              <div className="text-xs font-bold text-green-700">2-3x</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <div className="text-center bg-green-50 px-5 py-2.5 rounded-full inline-block">
                      <span className="text-sm font-medium text-green-700">
                        {isMobile ? "2-3x better returns, less effort" : "2-3x better returns with significantly lower effort"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Improved Progress Indicator */}
            <div className="py-4 bg-gray-50 border-t border-gray-100">
              <div className="flex justify-center space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-primary w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonAnimation;
