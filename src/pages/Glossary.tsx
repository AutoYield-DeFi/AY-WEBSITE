
import React from 'react';
import GlossaryHeader from '@/components/glossary/GlossaryHeader';
import GlossaryTermList from '@/components/glossary/GlossaryTermList';
import SEO from '@/components/SEO';

const Glossary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-muted/30 to-white pt-20">
      <SEO 
        title="DeFi Glossary"
        description="Understand key DeFi and liquidity management terms with AutoYield's comprehensive glossary. Learn about liquidity pools, impermanent loss, and other essential concepts."
        keywords="DeFi glossary, liquidity pools, impermanent loss, yield farming, AMM, DLMM, Solana DeFi"
      />
      <div className="container mx-auto px-6 py-8">
        <GlossaryHeader />
        <GlossaryTermList />
      </div>
    </div>
  );
};

export default Glossary;
