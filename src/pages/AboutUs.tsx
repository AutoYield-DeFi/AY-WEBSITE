
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import TeamMember from '@/components/about/TeamMember';
import Mission from '@/components/about/Mission';
import { motion } from '@/components/about/MotionWrapper';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-muted/30 to-white">
      <SEO 
        title="About Us"
        description="Learn about AutoYield's mission to revolutionize liquidity management on Solana."
        keywords="AutoYield team, Solana DeFi, liquidity management team"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-10 px-6 md:px-10 lg:px-20 text-center relative overflow-hidden">
        <div className="hero-gradient absolute inset-0 z-0"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Building the Future of <span className="text-blue-600">Automated Liquidity</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            A team of DeFi experts dedicated to simplifying liquidity management on Solana
          </p>
        </motion.div>
      </section>
      
      <div className="container mx-auto px-6 mb-20">
        {/* Mission Section */}
        <Mission />
        
        <Separator className="my-16 max-w-4xl mx-auto opacity-30" />
        
        {/* Team Section */}
        <section id="team" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experts behind AutoYield's innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMember 
                name="Alex Johnson"
                role="Founder & CEO"
                bio="DeFi veteran with 7+ years in liquidity protocols and market making algorithms."
                imageUrl="/team/alex.jpg"
                twitter="https://twitter.com/alex"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TeamMember 
                name="Sarah Chen"
                role="CTO"
                bio="Solana developer and machine learning expert focused on optimizing liquidity algorithms."
                imageUrl="/team/sarah.jpg"
                website="https://sarahchen.dev"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <TeamMember 
                name="Michael Rodriguez"
                role="Head of Product"
                bio="Former DEX product lead with a passion for creating user-friendly DeFi experiences."
                imageUrl="/team/michael.jpg"
                twitter="https://twitter.com/mrodriguez"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <TeamMember 
                name="Emily Nguyen"
                role="Security & Community Lead"
                bio="Blockchain security expert focused on user education and building community trust."
                imageUrl="/team/emily.jpg"
                twitter="https://twitter.com/emily"
              />
            </motion.div>
          </div>
        </section>
        
        {/* Visual Divider */}
        <div className="py-16 max-w-4xl mx-auto">
          <div className="relative">
            <Separator className="absolute top-1/2 w-full opacity-30" />
            <div className="flex justify-center">
              <div className="bg-white px-4 relative">
                <span className="text-blue-600 text-4xl">✦</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Values Section */}
        <section className="py-12 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="glass-panel p-8 rounded-xl hover:shadow-md transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Security First</h3>
              <p className="text-muted-foreground">
                We prioritize user funds and data security above all, implementing rigorous testing and auditing protocols.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-8 rounded-xl hover:shadow-md transition-all"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Innovation Driven</h3>
              <p className="text-muted-foreground">
                We constantly improve our AI algorithms based on market developments and community feedback.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-8 rounded-xl hover:shadow-md transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Transparency</h3>
              <p className="text-muted-foreground">
                We maintain clear communication about how our systems work and perform, with no hidden fees or surprises.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-panel p-8 rounded-xl hover:shadow-md transition-all"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Accessibility</h3>
              <p className="text-muted-foreground">
                We design our products to be intuitive for newcomers while powerful enough for DeFi experts.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 text-center">
          <motion.div 
            className="glass-panel max-w-4xl mx-auto p-10 rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl font-bold mb-6 relative z-10">Join Us</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Be part of the AutoYield community as we revolutionize liquidity management on Solana.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link to="/" className="btn-primary">Explore AutoYield</Link>
              <Link to="#" className="btn-secondary">Join Discord</Link>
            </div>
          </motion.div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
