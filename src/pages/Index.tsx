
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ComparisonAnimation from '@/components/ComparisonAnimation';
import DeFiExplainer from '@/components/DeFiExplainer';
import ConsolidatedFeatures from '@/components/ConsolidatedFeatures';
import SecurityFeatures from '@/components/SecurityFeatures';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <SEO 
        title="Smart Liquidity Management on Solana"
        description="AutoYield uses advanced AI technology to maximize your trading fees while protecting against impermanent loss - no complex DeFi knowledge required."
        keywords="liquidity management, Solana, DeFi, DLMM, Meteora, yield optimization, automated liquidity, cryptocurrency"
      />
      <Navbar />
      <Hero />
      <ComparisonAnimation />
      <DeFiExplainer />
      <ConsolidatedFeatures />
      <SecurityFeatures />
      <Footer />
    </div>
  );
};

export default Index;
