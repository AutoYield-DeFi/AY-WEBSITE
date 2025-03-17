
import React from 'react';
import { motion } from './MotionWrapper';
import TeamMember from './TeamMember';

const TeamSection = () => {
  const team = [
    {
      name: "Shuhaib Shariff",
      role: "CEO",
      bio: "Veteran with 20+ years in SaaS and software product development. Led cross-functional teams to build business tools that simplify complex processes. Experienced in bootstrapping ventures and exploring blockchain technologies since 2021.",
      imageUrl: "/team/anonymous.jpg", // Using placeholder image
      linkedin: "https://www.linkedin.com/in/shuhaib/",
      credentials: "20+ years in software product development"
    },
    {
      name: "Pratik Kumar",
      role: "CTO",
      bio: "Engineering professional who transitioned from Marine Engineering to Computer Science and Blockchain Development. Brings unique perspective from cybersecurity to creating innovative DeFi solutions that bridge traditional and decentralized finance.",
      imageUrl: "/team/anonymous.jpg", // Using placeholder image
      linkedin: "https://www.linkedin.com/in/pratik-kumar-/",
      github: "https://github.com/pratikasr",
      credentials: "Specializes in Golang, RUST, COSMOS SDK & AI"
    },
    {
      name: "YK",
      role: "Head of Quant Strategy",
      bio: "AI Quant specialist developing sophisticated financial models that combine deep learning with quantitative methods. Creates autonomous asset management solutions for DeFi while building AutoYield's AI Quant engine in his spare time.",
      imageUrl: "/team/anonymous.jpg",
      credentials: "IIT graduate, 3+ years in quantitative finance"
    },
    {
      name: "Ahmed Hamza",
      role: "Front-end Lead",
      bio: "Web3 development expert specializing in modern JavaScript frameworks and blockchain integrations. Combines expertise in graph databases, RAG systems, and AI to create intuitive interfaces that make complex DeFi concepts accessible.",
      imageUrl: "/team/anonymous.jpg", // Using placeholder image
      linkedin: "https://www.linkedin.com/in/hamzax/",
      credentials: "Focused on UX, design and testing"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Problem Solvers</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We're a diverse team of engineers, finance experts, and designers working to make DeFi's liquidity strategies accessible to everyone. Our combined expertise helps us build solutions that bridge the gap between complex DeFi mechanisms and everyday users.
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
      </div>
    </section>
  );
};

export default TeamSection;
