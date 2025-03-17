
import React from 'react';
import { motion } from './MotionWrapper';
import TeamMember from './TeamMember';

const TeamSection = () => {
  const team = [
    {
      name: "Shuhaib Shariff",
      role: "CEO",
      bio: "20+ years in SaaS and software product development, led teams across design, engineering, and content to build tools that make business easier. Experience bootstrapping businesses from 0 to 10. Dabbling in blockchain, crypto & DeFi since 2021.",
      imageUrl: "/team/anonymous.jpg", // Using placeholder image
      linkedin: "https://www.linkedin.com/in/shuhaib/",
      credentials: "20+ years in software product development"
    },
    {
      name: "Pratik Kumar",
      role: "CTO",
      bio: "Marine Engineer cultivating an interest in Computer Science, and becoming a Blockchain Developer. Started off in Cybersecurity and moved to blockchain building an ecosystem of solutions to bridge the gap between DeFi and CeFi.",
      imageUrl: "/team/anonymous.jpg", // Using placeholder image
      linkedin: "https://www.linkedin.com/in/pratik-kumar-/",
      github: "https://github.com/pratikasr",
      credentials: "Specializes in Golang, RUST, COSMOS SDK & AI"
    },
    {
      name: "YK",
      role: "Head of Quant Strategy",
      bio: "AI Quant at a hedge fund, where he develops financial models using deep learning and quantitative methods to build AI-driven solutions for autonomous asset management in the DeFi space. Build's AutoYield's AI Quant engine over the weekends.",
      imageUrl: "/team/anonymous.jpg",
      credentials: "IIT graduate, 3+ years in quantitative finance"
    },
    {
      name: "Ahmed Hamza",
      role: "Front-end Lead",
      bio: "Web3 Development specialist with expertise in wagmi and ethers.js. Building with Graph Databases & RAG Systems while exploring AI integration. JavaScript enthusiast focused on creating exceptional user experiences with attention to design and testing.",
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
