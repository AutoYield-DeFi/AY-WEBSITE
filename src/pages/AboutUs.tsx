import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TeamSection from '@/components/about/TeamSection';
import Mission from '@/components/about/Mission';
import Values from '@/components/about/Values';
import { motion } from '@/components/about/MotionWrapper';
import { ArrowDown } from 'lucide-react';

const AboutUs = () => {
  return <div className="min-h-screen bg-white">
      <SEO title="Our Story | AutoYield" description="We're a team of engineers who experienced the pain of liquidity provision firsthand and built AutoYield to make it accessible to everyone." keywords="AutoYield team, Solana DeFi, liquidity management, LP automation, DeFi solutions, AI liquidity" />
      <Navbar />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 md:pt-24 pb-12 relative overflow-hidden flex min-h-[70vh] items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-muted/10 to-white z-0"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/10 rounded-lg animate-float"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-blue-100 rounded-full animate-pulse-soft"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-muted/40 rounded-full animate-pulse-soft"></div>
          <div className="absolute right-10 top-1/3 w-32 h-32 border border-blue-200 rounded-xl rotate-12 animate-float"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full animate-fade-in">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our Story</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                Unlocking DeFi's<br />Hidden Potential
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">While everyone was hunting for 100x tokens, we discovered the real opportunity in the infrastructure!</p>
              
              {/* Visual explanation - simple & concise */}
              <div className="flex justify-center mb-12">
                <div className="relative max-w-lg w-full">
                  <motion.div 
                    className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-full opacity-70"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {/* Empty div for animation */}
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-muted/30 rounded-full opacity-70"
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {/* Empty div for animation */}
                  </motion.div>
                  
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10 p-8 transform transition-all">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="w-16 h-16 rounded-full bg-primary-muted flex items-center justify-center text-primary mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-4"><path d="M3 3v18h18"></path><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M8 17v-3"></path></svg>
                        </div>
                        <h3 className="text-base font-medium">The Problem</h3>
                        <p className="text-sm text-muted-foreground mt-2">Liquidity provision is complex and risky for most users</p>
                      </div>
                      
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="w-16 h-16 rounded-full bg-primary-muted flex items-center justify-center text-primary mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
                        </div>
                        <h3 className="text-base font-medium">Our Solution</h3>
                        <p className="text-sm text-muted-foreground mt-2">AI-powered liquidity management with one click</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="animate-bounce mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <ArrowDown className="mx-auto text-primary/60" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <Mission />
        
        {/* Values Section */}
        <Values />
        
        {/* Team Section - Kept unchanged as requested */}
        <TeamSection />
      </main>
      
      <Footer />
    </div>;
};
export default AboutUs;
