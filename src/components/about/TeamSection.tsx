
import React from 'react';
import { motion } from './MotionWrapper';
import TeamMember from './TeamMember';
import { LineChart, Code, Target, Shield } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Shuhaib Shariff",
      role: "Founder & CEO",
      bio: "Former DeFi trader who lost enough in failed liquidity positions to finance a small yacht. Now determined to make sure no one else has to wake up at 3 AM to rebalance their positions.",
      imageUrl: "/team/shuhaib.jpg",
      linkedin: "https://linkedin.com/in/shuhaibshariff",
      credentials: "6+ years in DeFi trading and development"
    },
    {
      name: "Pratik Kumar",
      role: "CTO",
      bio: "Built trading algorithms for Wall Street before finding Solana. Known for saying 'Let me write a script for that' instead of doing anything manually. Has strong opinions about code quality.",
      imageUrl: "/team/pratik.jpg",
      linkedin: "https://linkedin.com/in/pratikkumar",
      github: "https://github.com/pratikkumar",
      credentials: "10+ years in financial technology and algorithmic trading"
    },
    {
      name: "YK",
      role: "Head of Quant Strategy",
      bio: "Our mystery quant who moonlights from a top hedge fund. IIT graduate with a talent for turning market inefficiencies into profit. Refuses to appear on video calls before noon.",
      imageUrl: "/team/anonymous.jpg",
      credentials: "IIT graduate, 8+ years in quantitative finance"
    },
    {
      name: "Hamza Ahmed",
      role: "Chief Product Officer",
      bio: "The user experience perfectionist who ensures our platform is intuitive even to those who think 'liquidity pool' is where you go swimming. Notorious for rejecting designs that require more than 3 clicks.",
      imageUrl: "/team/hamza.jpg",
      linkedin: "https://linkedin.com/in/hamzaahmed",
      credentials: "Led product at two successful fintech startups"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Meet The Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Founders</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We're just four friends who got tired of losing money on DeFi and decided to build something better. Each of us brings a unique perspective, but we share one common trait: we've all felt the pain we're now solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="transform transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMember
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
                linkedin={member.linkedin}
                github={member.github}
                credentials={member.credentials}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-xl italic max-w-3xl mx-auto">
            "We built AutoYield because we got tired of explaining to our non-crypto friends why our 'passive income strategy' required checking charts every 45 minutes."
          </blockquote>
          <p className="text-right max-w-3xl mx-auto mt-4 text-muted-foreground">— Hamza Ahmed, CPO</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
