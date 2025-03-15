
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AIStrategies from '@/components/AIStrategies';
import SecurityFeatures from '@/components/SecurityFeatures';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <AIStrategies />
      <SecurityFeatures />
      <Footer />
    </div>
  );
};

export default Index;
