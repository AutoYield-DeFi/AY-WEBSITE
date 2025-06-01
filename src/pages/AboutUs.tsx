import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import TeamSection from '@/components/about/TeamSection';
import Mission from '@/components/about/Mission';
import Values from '@/components/about/Values';
import { motion } from 'framer-motion'; // Import directly from framer-motion
import { ArrowDown } from 'lucide-react';
import { Heading, Paragraph, Label } from '@/components/ui/typography';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">      <SEO 
        title="Our Story | AutoYield" 
        description="We're a team of engineers who experienced the pain of liquidity provision firsthand and built AutoYield to make it accessible to everyone." 
        keywords="AutoYield team, Solana DeFi, liquidity management, LP automation, DeFi solutions, AI liquidity"
        canonical="https://autoyield.io/about"
      />
      <Navbar />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 md:pt-24 pb-12 relative overflow-hidden flex min-h-[70vh] items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-muted/10 to-white z-0"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl transform-gpu will-change-transform"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform-gpu will-change-transform"></div>
          
          {/* Decorative Elements - with fixed dimensions and GPU acceleration */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/10 rounded-lg transform-gpu"
            style={{ width: '5rem', height: '5rem' }}
          >
            &nbsp;
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute top-40 right-20 w-12 h-12 bg-blue-100 rounded-full transform-gpu"
            style={{ width: '3rem', height: '3rem' }}
          >
            &nbsp;
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-muted/40 rounded-full transform-gpu"
            style={{ width: '4rem', height: '4rem' }}
          >
            &nbsp;
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-10 top-1/3 w-32 h-32 border border-blue-200 rounded-xl rotate-12 transform-gpu"
            style={{ width: '8rem', height: '8rem' }}
          >
            &nbsp;
          </motion.div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.2,
                    delayChildren: 0.1
                  }
                }
              }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full"
              >
                <Label className="tracking-wider uppercase text-primary">Our Story</Label>
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
              >
                <Heading 
                  as="h1" 
                  size="6xl" 
                  gradient 
                  className="mb-6"
                >
                  Unlocking DeFi's<br />Hidden Potential
                </Heading>
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
              >
                <Paragraph 
                  size="lg" 
                  muted 
                  className="mb-8"
                >
                  While everyone was hunting for 100x tokens, we discovered the real opportunity in the infrastructure!
                </Paragraph>
              </motion.div>
              
              {/* Visual explanation - simple & concise */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.7 }
                  }
                }}
                className="flex justify-center mb-12"
              >
                <div className="relative max-w-lg w-full">
                  <motion.div 
                    initial={{ scale: 1, rotate: 0 }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-full opacity-70 transform-gpu will-change-transform"
                    style={{ width: '6rem', height: '6rem' }}
                  >
                    &nbsp;
                  </motion.div>
                  
                  <motion.div 
                    initial={{ scale: 1, rotate: 0 }}
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-muted/30 rounded-full opacity-70 transform-gpu will-change-transform"
                    style={{ width: '8rem', height: '8rem' }}
                  >
                    &nbsp;
                  </motion.div>
                  
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10 p-8 transform-gpu"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="w-16 h-16 rounded-full bg-primary-muted flex items-center justify-center text-primary mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-4"><path d="M3 3v18h18"></path><path d="M13 17V9"></path><path d="M18 17V5"></path><path d="M8 17v-3"></path></svg>
                        </div>
                        <Heading as="h3" size="lg">The Problem</Heading>
                        <Paragraph size="sm" muted className="mt-2">
                          Liquidity provision is complex and risky for most users
                        </Paragraph>
                      </div>
                      
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="w-16 h-16 rounded-full bg-primary-muted flex items-center justify-center text-primary mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
                        </div>
                        <Heading as="h3" size="lg">Our Solution</Heading>
                        <Paragraph size="sm" muted className="mt-2">
                          AI-powered liquidity management with one click
                        </Paragraph>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-10"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <ArrowDown className="mx-auto text-primary/60" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        <Mission />
        
        <Values />
        
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;