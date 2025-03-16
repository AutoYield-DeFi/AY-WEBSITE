
import React from 'react';
import { motion } from './MotionWrapper';
import TeamMember from './TeamMember';
import { LineChart, Lightbulb, Code, Target, Shield } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Goldman Sachs quant who discovered DeFi in 2017 and never looked back. Survived three bear markets and still believes in the future of decentralized finance. Has a habit of explaining liquidity concepts using food analogies.",
      imageUrl: "/team/alex.jpg",
      icon: <LineChart className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/alexchen",
      credentials: "MSc in Financial Engineering, 8+ years in quantitative trading"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead AI Engineer",
      bio: "Previously led machine learning teams at Citadel and Jump Trading. Became fascinated with applying ML models to DeFi liquidity after losing a significant amount in the 2021 crash. Keeps a rigorous backtest journal that's longer than most fantasy novels.",
      imageUrl: "/team/emily.jpg",
      icon: <Lightbulb className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      credentials: "PhD in Computational Finance, Published researcher in algorithmic trading"
    },
    {
      name: "Michael Park",
      role: "Lead Solana Developer",
      bio: "Core contributor to three major Solana DeFi protocols and a Solana Foundation grant recipient. Became obsessed with DeFi efficiency after writing a script that saved his own LP positions during the UST collapse. Still hasn't forgiven Luna.",
      imageUrl: "/team/michael.jpg",
      icon: <Code className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/michaelpark",
      github: "https://github.com/michaelpark",
      credentials: "Former Solana Foundation developer, 5+ years blockchain experience"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      bio: "Previously product lead at Aave and Uniswap, specializing in making complex DeFi concepts accessible to mainstream users. Believes strongly that great technology deserves equally great user experience. Has a collection of screenshots labeled 'DeFi UI Nightmares.'",
      imageUrl: "/team/sarah.jpg",
      icon: <Target className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/sarahjohnson",
      credentials: "10+ years in fintech product management, DeFi advisor to two YC startups"
    }
  ];

  const advisors = [
    {
      name: "Dr. Robert Zhang",
      role: "Security Advisor",
      bio: "Former security lead at Coinbase and smart contract auditor who's prevented over $300M in potential exploits. Approaches security with paranoia as a virtue. His favorite phrase is 'But what if?'",
      icon: <Shield className="h-5 w-5" />,
      credentials: "Audited 30+ major DeFi protocols, PhD in Computer Security"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built By DeFi Veterans</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We're not just another crypto startup. Our team brings decades of combined experience from traditional finance, AI research, and DeFi development. Most importantly, we've all been LPs ourselves—and we've felt the pain we're now solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
        
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold">Advisors & Specialists</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
              Industry experts who help us stay ahead of the curve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                className="bg-white p-6 rounded-xl shadow-sm border border-primary/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-muted flex items-center justify-center mr-3">
                    {advisor.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{advisor.name}</h4>
                    <p className="text-sm text-primary">{advisor.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{advisor.bio}</p>
                <p className="text-xs font-medium text-muted-foreground">
                  {advisor.credentials}
                </p>
              </motion.div>
            ))}
            
            {/* Placeholder for future advisors */}
            <motion.div
              className="bg-white/50 p-6 rounded-xl border border-dashed border-muted-foreground/30 flex items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-muted-foreground">More industry leaders joining soon</p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-primary-muted/10 p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-sm italic">
                "The AutoYield team has accomplished something rare in DeFi: they've made something complex simple without sacrificing sophistication."
              </p>
              <p className="text-right text-xs mt-3 text-muted-foreground">— DeFi Pulse, Q1 2023 Report</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
