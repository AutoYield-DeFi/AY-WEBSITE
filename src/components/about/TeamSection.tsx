
import React from 'react';
import { motion } from './MotionWrapper';
import TeamMember from './TeamMember';
import { Github, Lightbulb, Code, LineChart } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former quant researcher with 8+ years in algorithmic trading. DeFi enthusiast since 2018.",
      imageUrl: "/team/alex.jpg",
      icon: <LineChart className="h-5 w-5" />,
      twitter: "https://twitter.com/alexchen",
      website: "https://alexchen.dev"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead AI Engineer",
      bio: "ML specialist focused on financial models. Previously built trading algorithms at a leading hedge fund.",
      imageUrl: "/team/emily.jpg",
      icon: <Lightbulb className="h-5 w-5" />,
      twitter: "https://twitter.com/emilyrodriguez"
    },
    {
      name: "Michael Park",
      role: "Lead Solana Developer",
      bio: "Core contributor to multiple Solana projects. Passionate about building scalable DeFi infrastructure.",
      imageUrl: "/team/michael.jpg",
      icon: <Code className="h-5 w-5" />,
      twitter: "https://twitter.com/michaelpark",
      github: "https://github.com/michaelpark"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      bio: "UX specialist with experience at major fintech companies. Focused on making complex DeFi simple.",
      imageUrl: "/team/sarah.jpg",
      icon: <Github className="h-5 w-5" />,
      twitter: "https://twitter.com/sarahjohnson"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">Meet Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Minds Behind AutoYield</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A small but passionate team combining expertise in DeFi, AI, and Solana development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                twitter={member.twitter}
                website={member.website}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
