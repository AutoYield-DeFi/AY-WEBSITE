
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import TeamMember from '@/components/about/TeamMember';
import Mission from '@/components/about/Mission';
import Timeline from '@/components/about/Timeline';
import Values from '@/components/about/Values';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-muted/30 to-white">
      <SEO 
        title="About Us"
        description="Learn about AutoYield's mission to revolutionize liquidity management on Solana. Our team, values, and commitment to creating accessible, secure DeFi solutions."
        keywords="AutoYield team, Solana DeFi, liquidity management team, crypto experts, DeFi innovation, AI liquidity technology"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 text-center relative overflow-hidden">
        <div className="hero-gradient absolute inset-0 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Building the Future of <span className="text-blue-600">Automated Liquidity</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 mb-8 max-w-3xl mx-auto text-balance">
            At AutoYield, we're a team of DeFi experts, developers, and crypto enthusiasts dedicated to 
            simplifying liquidity management on Solana with intelligent, secure, and accessible solutions.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-6 mb-20">
        {/* Mission Section */}
        <Mission />
        
        <Separator className="my-16 max-w-4xl mx-auto opacity-30" />
        
        {/* Values Section */}
        <Values />
        
        <Separator className="my-16 max-w-4xl mx-auto opacity-30" />
        
        {/* Team Section */}
        <section id="team" className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the passionate individuals driving AutoYield's innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Alex Johnson"
              role="Founder & CEO"
              bio="DeFi veteran with 7+ years in liquidity protocols and market making algorithms."
              imageUrl="/placeholder.svg"
            />
            <TeamMember 
              name="Sarah Chen"
              role="CTO"
              bio="Solana developer and machine learning expert focused on optimizing liquidity algorithms."
              imageUrl="/placeholder.svg"
            />
            <TeamMember 
              name="Michael Rodriguez"
              role="Head of Product"
              bio="Former DEX product lead with a passion for creating user-friendly DeFi experiences."
              imageUrl="/placeholder.svg"
            />
            <TeamMember 
              name="Jasmine Taylor"
              role="Lead AI Engineer"
              bio="Specializes in AI-driven automation for DeFi with previous work at major exchanges."
              imageUrl="/placeholder.svg"
            />
            <TeamMember 
              name="David Kim"
              role="Security Lead"
              bio="Blockchain security expert focused on creating safe and reliable DeFi protocols."
              imageUrl="/placeholder.svg"
            />
            <TeamMember 
              name="Emily Nguyen"
              role="Community Manager"
              bio="Dedicated to building bridges between technical innovation and user education."
              imageUrl="/placeholder.svg"
            />
          </div>
        </section>
        
        <Separator className="my-16 max-w-4xl mx-auto opacity-30" />
        
        {/* Timeline Section */}
        <Timeline />
        
        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="glass-panel max-w-4xl mx-auto p-10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Join Us on This Journey</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We're just getting started, and we'd love to have you be part of the AutoYield community
              as we revolutionize liquidity management on Solana.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary">Explore AutoYield</Link>
              <Link to="#" className="btn-secondary">Join Discord</Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
