
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TeamSection from '@/components/about/TeamSection';
import Mission from '@/components/about/Mission';
import Values from '@/components/about/Values';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Story | AutoYield"
        description="We're a team of engineers who experienced the pain of liquidity provision firsthand and built AutoYield to make it accessible to everyone."
        keywords="AutoYield team, Solana DeFi, liquidity management, LP automation, DeFi solutions, AI liquidity"
      />
      <Navbar />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 md:pt-24 pb-12 md:pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-muted/10 to-white z-0"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full animate-fade-in">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary">Our Story</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                Selling Shovels in<br/>The Crypto Gold Rush
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">
                While everyone focuses on trading and lending, we saw opportunity in the overlooked field of liquidity provision—where the steady returns really are.
              </p>
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
    </div>
  );
};

export default AboutUs;
