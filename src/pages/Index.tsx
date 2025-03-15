
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ComparisonAnimation from '@/components/ComparisonAnimation';
import DeFiExplainer from '@/components/DeFiExplainer';
import ConsolidatedFeatures from '@/components/ConsolidatedFeatures';
import SecurityFeatures from '@/components/SecurityFeatures';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
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
