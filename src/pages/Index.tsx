
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AdvancedStrategies from '@/components/AIStrategies';
import SecurityFeatures from '@/components/SecurityFeatures';
import Explainer from '@/components/Explainer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Explainer />
      <Features />
      <AdvancedStrategies />
      <SecurityFeatures />
      <Footer />
    </div>
  );
};

export default Index;
