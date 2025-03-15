
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
        description="We built AutoYield because we were tired of losing money on liquidity pools. Meet the team that's solving DeFi's most frustrating problems."
        keywords="AutoYield team, Solana DeFi, liquidity management, crypto founders, DeFi problems solved"
      />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-muted/10 to-white z-0"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full animate-fade-in">
                <span className="text-xs font-semibold tracking-wider uppercase">Meet The Humans</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                From Frustrated Users<br/>To Founders
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-up animation-delay-200">
                We built AutoYield after one too many 3 AM price alerts woke us up to adjust our own liquidity positions. There had to be a better way.
              </p>
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
