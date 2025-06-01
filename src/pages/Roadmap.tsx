
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import RoadmapTimeline from '@/components/roadmap/RoadmapTimeline';
import RoadmapHeader from '@/components/roadmap/RoadmapHeader';
import RoadmapStrategic from '@/components/roadmap/RoadmapStrategic';
import RoadmapCTA from '@/components/roadmap/RoadmapCTA';

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-white">      <SEO 
        title="Product Roadmap | AutoYield"
        description="Explore AutoYield's 12-month roadmap for automated liquidity management on Solana."
        keywords="AutoYield roadmap, Solana DeFi, product timeline, liquidity management"
        canonical="https://autoyield.io/roadmap"
      />
      <Navbar />
      
      <main>
        <RoadmapHeader />
        <RoadmapTimeline />
        <RoadmapStrategic />
        <RoadmapCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Roadmap;
