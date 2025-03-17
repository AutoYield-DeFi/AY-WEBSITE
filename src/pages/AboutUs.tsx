
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TeamSection from '@/components/about/TeamSection';
import Mission from '@/components/about/Mission';
import Values from '@/components/about/Values';

const AboutUs = () => {
  return <div className="min-h-screen bg-white">
      <SEO title="Our Story | AutoYield" description="We're a team of engineers who experienced the pain of liquidity provision firsthand and built AutoYield to make it accessible to everyone." keywords="AutoYield team, Solana DeFi, liquidity management, LP automation, DeFi solutions, AI liquidity" />
      <Navbar />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 md:pt-24 pb-12 md:pb-16 relative overflow-hidden">
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
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">While everyone else was hunting for the next 100x token, we discovered that the real opportunity was in the infrastructure that powers the entire ecosystem!</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 mb-12">
                <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-up animation-delay-300 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full"></div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-muted text-primary mb-4 mx-auto relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pickaxe"><path d="M14.4 16.1 11 13M12 9l1-5 2 2 1-4 2 2-2.4 7.6"></path><path d="M16.8 14.5c1.8 1.8 4.3 2.3 6.1.5l-8-8c-1.8 1.8-1.3 4.3.4 6.1"></path><path d="M10 16.5l-6.7 6.7"></path><path d="M4.9 14.7 14.7 4.9"></path></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center relative z-10">The Infrastructure Play</h3>
                  <p className="text-muted-foreground text-center relative z-10">
                    Providing liquidity is the backbone of decentralized exchanges, yet it remains technically complex and risky for most users. We're changing that equation.
                  </p>
                </div>
                
                <div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-up animation-delay-400 relative overflow-hidden">
                  <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-primary-muted/30 rounded-full"></div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-muted text-primary mb-4 mx-auto relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center relative z-10">Beyond the Hype Cycle</h3>
                  <p className="text-muted-foreground text-center relative z-10">
                    Our team built AutoYield after years of watching DeFi users struggle with the complexity of liquidity provision while missing out on its consistent, market-neutral returns.
                  </p>
                </div>
              </div>
              
              <div className="animate-fade-up animation-delay-300">
                <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  <span className="mr-2">•</span>
                  <span>Making LP strategies accessible to everyone</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <Mission />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Values Section */}
        <Values />
      </main>
      
      <Footer />
    </div>;
};
export default AboutUs;
