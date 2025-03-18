
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ComparisonAnimation from '@/components/ComparisonAnimation';
import DeFiExplainer from '@/components/DeFiExplainer';
import ConsolidatedFeatures from '@/components/ConsolidatedFeatures';
import Features from '@/components/Features';
import SecurityFeatures from '@/components/SecurityFeatures';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="AutoYield | Earn 2-3x More with AI-Powered Liquidity Management on Solana"
        description="AutoYield uses advanced AI technology to maximize your trading fees while protecting against impermanent loss - no complex DeFi knowledge required."
        keywords="liquidity management, Solana, DeFi, DLMM, Meteora, yield optimization, automated liquidity, cryptocurrency, 2-3x returns"
      />
      <Navbar />
      <Hero />
      <ComparisonAnimation />
      <DeFiExplainer />
      <ConsolidatedFeatures />
      <Features />
      <SecurityFeatures />
      <Footer />
    </div>
  );
};

export default Index;
