
import React from 'react';
import { motion } from './MotionWrapper';
import TeamMember from './TeamMember';
import { LineChart, Lightbulb, Code, Target } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former LP who lost a small fortune to impermanent loss. Now buildling tools to save others from the same pain. Still winces when anyone mentions the May 2021 crypto crash.",
      imageUrl: "/team/alex.jpg",
      icon: <LineChart className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/alexchen"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead AI Engineer",
      bio: "Turned her frustration with liquidity pools into algorithms that never complain. Has a whiteboard in her shower for when inspiration strikes. Seriously.",
      imageUrl: "/team/emily.jpg",
      icon: <Lightbulb className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/emilyrodriguez"
    },
    {
      name: "Michael Park",
      role: "Lead Solana Developer",
      bio: "The guy who actually makes everything work. Survived three bull markets and still has PTSD from manually adjusting LP ranges. His rubber duck debugger has seen things.",
      imageUrl: "/team/michael.jpg",
      icon: <Code className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/michaelpark",
      github: "https://github.com/michaelpark"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      bio: "Former UX designer who couldn't understand why DeFi apps looked like they were designed by the same people who code them. Once threw her laptop after a failed transaction.",
      imageUrl: "/team/sarah.jpg",
      icon: <Target className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/sarahjohnson"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary-muted rounded-full">
            <span className="text-xs font-semibold tracking-wider uppercase">The Faces Behind AutoYield</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We've Been in Your Shoes</h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-center text-lg">
            We're not just another team of tech enthusiasts who spotted a market opportunity. We're actual DeFi users who got liquidated, rekt, and impermanently lost more times than we care to admit. After some colorful language directed at our screens (and a few broken mice), we decided there had to be a better way.
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
                linkedin={member.linkedin}
                github={member.github}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
