
import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, RefreshCw, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const ComparisonAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      title: "Price Movement",
      manualDescription: "Requires manual monitoring and adjustment",
      autoDescription: "Automatically detects and adjusts to price changes",
      manualIcon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      autoIcon: <TrendingUp className="h-6 w-6 text-green-500" />
    },
    {
      title: "Fee Collection",
      manualDescription: "Often misses optimal fee-generating ranges",
      autoDescription: "Dynamically positions for maximum fee capture",
      manualIcon: <XCircle className="h-6 w-6 text-red-500" />,
      autoIcon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      title: "Impermanent Loss",
      manualDescription: "High exposure risk during market volatility",
      autoDescription: "Smart protection strategies minimize risk",
      manualIcon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
      autoIcon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      title: "Reinvestment",
      manualDescription: "Manual reinvestment of earned fees",
      autoDescription: "Auto-compounds earnings for optimal growth",
      manualIcon: <RefreshCw className="h-6 w-6 text-blue-500" />,
      autoIcon: <RefreshCw className="h-6 w-6 text-green-500 animate-spin-slow" />
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-16">
      <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
        <div className="flex flex-col">
          {/* Top navigation */}
          <div className="flex border-b border-gray-100">
            {steps.map((step, index) => (
              <button 
                key={index}
                className={`flex-1 py-3 px-4 text-sm md:text-base font-medium transition-all duration-300 ${activeStep === index ? 'bg-primary-muted text-primary' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                onClick={() => setActiveStep(index)}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="flex flex-col md:flex-row">
            {/* Manual side */}
            <div className="w-full md:w-1/2 p-6 bg-gray-50 border-b md:border-r md:border-b-0 border-gray-100">
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold">Manual LP Management</h3>
                </div>
                
                <div className="flex-1 flex flex-col justify-center space-y-6">
                  <div className={`transition-all duration-500 transform ${activeStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}>
                    <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                          <div className="w-16 h-16 mb-4 rounded-full bg-white shadow-md flex items-center justify-center">
                            {steps[activeStep].manualIcon}
                          </div>
                          <p className="text-center text-gray-700 font-medium mb-2">{steps[activeStep].title}</p>
                          <p className="text-center text-sm text-gray-500">{steps[activeStep].manualDescription}</p>
                          
                          <div className="mt-4 w-full max-w-xs">
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-red-400 w-1/3 rounded-full"></div>
                            </div>
                            <div className="mt-1 flex justify-between text-xs text-gray-500">
                              <span>Lower Returns</span>
                              <span>Higher Risk</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AutoYield side */}
            <div className="w-full md:w-1/2 p-6 bg-white">
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold">AutoYield Management</h3>
                </div>
                
                <div className="flex-1 flex flex-col justify-center space-y-6">
                  <div className={`transition-all duration-500 transform ${activeStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}>
                    <div className="aspect-video relative bg-white rounded-lg overflow-hidden border border-green-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                          <div className="w-16 h-16 mb-4 rounded-full bg-green-50 shadow-md flex items-center justify-center">
                            {steps[activeStep].autoIcon}
                          </div>
                          <p className="text-center text-gray-700 font-medium mb-2">{steps[activeStep].title}</p>
                          <p className="text-center text-sm text-gray-500">{steps[activeStep].autoDescription}</p>
                          
                          <div className="mt-4 w-full max-w-xs">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom indicator */}
          <div className="py-4 bg-white border-t border-gray-100">
            <div className="flex justify-center space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeStep === index ? 'bg-primary w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Value proposition */}
      <div className="mt-6 text-center">
        <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium animate-pulse-soft">
          Up to 2x better returns with significantly lower effort
        </span>
      </div>
    </div>
  );
};

export default ComparisonAnimation;
