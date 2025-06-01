
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlossaryHeader from '@/components/glossary/GlossaryHeader';
import GlossaryTermList from '@/components/glossary/GlossaryTermList';
import SEO from '@/components/SEO';

const Glossary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-muted/30 to-white">      <SEO 
        title="DeFi Glossary"
        description="Understand key DeFi and liquidity management terms with AutoYield's comprehensive glossary. Learn about liquidity pools, impermanent loss, and other essential concepts."
        keywords="DeFi glossary, liquidity pools, impermanent loss, yield farming, AMM, DLMM, Solana DeFi"
        canonical="https://autoyield.io/glossary"
      />
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        <GlossaryHeader />
        <GlossaryTermList />
      </div>
      <Footer />
    </div>
  );
};

export default Glossary;
