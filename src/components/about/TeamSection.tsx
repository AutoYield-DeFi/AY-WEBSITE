
import React from 'react';
import { motion } from './MotionWrapper';
import TeamMember from './TeamMember';

const TeamSection = () => {
  const team = [
    {
      name: "Shuhaib Shariff",
      role: "Founder & CEO",
      bio: "Former DeFi trader who believes liquidity provision is the most underrated opportunity in crypto. Shuhaib saw firsthand how LP strategies could generate consistent returns.",
      imageUrl: "/team/anonymous.jpg", // Using placeholder image
      linkedin: "https://linkedin.com/in/shuhaibshariff",
      credentials: "6+ years in DeFi trading and development"
    },
    {
      name: "Pratik Kumar",
      role: "CTO",
      bio: "Systems architect who turned his attention to the technical challenges of LP management. Pratik's background in quantitative finance helps drive AutoYield's intelligent algorithms.",
      imageUrl: "/team/anonymous.jpg", // Using placeholder image
      linkedin: "https://linkedin.com/in/pratikkumar",
      github: "https://github.com/pratikkumar",
      credentials: "10+ years in financial technology and algorithmic trading"
    },
    {
      name: "YK",
      role: "Head of Quant Strategy",
      bio: "Mathematical genius specializing in risk modeling and optimization algorithms. YK developed much of the core logic that protects users from impermanent loss.",
      imageUrl: "/team/anonymous.jpg",
      credentials: "IIT graduate, 8+ years in quantitative finance"
    },
    {
      name: "Hamza Ahmed",
      role: "Chief Product Officer",
      bio: "UX specialist obsessed with simplifying complex financial interactions. Hamza ensures that AutoYield remains accessible even to those new to DeFi concepts.",
      imageUrl: "/team/anonymous.jpg", // Using placeholder image
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Problem Solvers</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We're engineers and finance experts who recognized that LP strategies were too complex and risky for most users. By combining our expertise, we've created an accessible solution that removes barriers and minimizes risks.
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
            "Liquidity provision is like selling shovels in a gold rush—you earn steady income regardless of market direction. Our mission is to make these strategies accessible to everyone."
          </blockquote>
          <p className="text-right max-w-3xl mx-auto mt-4 text-muted-foreground">— Shuhaib Shariff, CEO</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
