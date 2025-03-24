import React from 'react';
import { motion } from 'framer-motion'; // Changed import to framer-motion
import TeamMember from './TeamMember';
import { Code, Lightbulb, BarChart4, Rocket } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Shuhaib Shariff",
      role: "CEO",
      bio: "Veteran product leader who spent two decades building intuitive software before deciding that traditional finance wasn't confusing enough. Now transforms DeFi's complexity into solutions anyone can use.",
      imageUrl: "/team/ss-pic.jpg",
      linkedin: "https://www.linkedin.com/in/shuhaib/",
      credentials: "20+ years in software product development",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      name: "Pratik Kumar",
      role: "CTO",
      bio: "Began navigating ships before deciding to navigate blockchain protocols instead. Combines cybersecurity expertise with engineering precision to build DeFi infrastructure that's both resilient and user-friendly.",
      imageUrl: "/team/anonymous.jpg",
      linkedin: "https://www.linkedin.com/in/pratik-kumar-/",
      github: "https://github.com/pratikasr",
      credentials: "Specializes in Golang, RUST, COSMOS SDK & AI",
      icon: <Code className="h-5 w-5" />
    },
    {
      name: "YK",
      role: "Head of Quant Strategy",
      bio: "Spends weekdays teaching AI to predict financial markets and weekends teaching it to optimize DeFi yields. Translates institutional quantitative expertise into algorithms that work while you sleep.",
      imageUrl: "/team/iit.jpg",
      credentials: "IIT graduate, 3+ years in quantitative finance",
      icon: <BarChart4 className="h-5 w-5" />
    },
    {
      name: "Ahmed Hamza",
      role: "Front-end Lead",
      bio: "Interface architect who believes complex DeFi protocols deserve beautiful, intuitive interfaces. Combines graph databases and AI to create experiences that make you forget you're interacting with blockchain.",
      imageUrl: "/team/hh.png",
      linkedin: "https://www.linkedin.com/in/hamzax/",
      credentials: "Focused on UX, design and testing",
      icon: <Lightbulb className="h-5 w-5" />
    }
  ];

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform-gpu will-change-transform"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl transform-gpu will-change-transform"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCQkRERkYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzBoLTJ2Mmgydi0yem0tNS0xMGgtMnYyaDJ2LTJ6bTUgMGgtMnYyaDJ2LTJ6TTIwIDMwaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-wider uppercase">Meet The Team</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "50px" }}
          >
            The DeFi Optimists
          </motion.h2>
          <motion.p 
            className="text-lg max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, margin: "50px" }}
          >
            We're the kind of people who saw everyone struggling with liquidity protocols and thought, "Let's fix that!" instead of "Let's build another NFT marketplace!" Our combined expertise helps us build solutions that bridge the gap between complex DeFi mechanisms and everyday users.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="transform transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "50px" }}
            >
              <TeamMember
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
                linkedin={member.linkedin}
                github={member.github}
                credentials={member.credentials}
                icon={member.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;