
import React from 'react';
import { motion } from './MotionWrapper';
import TeamMember from './TeamMember';
import { LineChart, Lightbulb, Code, Coffee } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former LP who got tired of losing money to impermanent loss. Now on a mission to help others avoid the same fate. DeFi enthusiast who believes in keeping things simple.",
      imageUrl: "/team/alex.jpg",
      icon: <LineChart className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/alexchen"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead AI Engineer",
      bio: "Turned her frustration with manual liquidity management into algorithms that do the work for her. Loves explaining complex concepts with simple analogies.",
      imageUrl: "/team/emily.jpg",
      icon: <Lightbulb className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/emilyrodriguez"
    },
    {
      name: "Michael Park",
      role: "Lead Solana Developer",
      bio: "The guy who actually makes everything work. Lost a small fortune on poorly managed LP positions before deciding to build something better.",
      imageUrl: "/team/michael.jpg",
      icon: <Code className="h-5 w-5" />,
      linkedin: "https://linkedin.com/in/michaelpark",
      github: "https://github.com/michaelpark"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      bio: "Former UX designer who couldn't understand why DeFi had to be so complicated. Now ensures everything we build passes the 'my mom could use this' test.",
      imageUrl: "/team/sarah.jpg",
      icon: <Coffee className="h-5 w-5" />,
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
            We're not just another team of tech bros who spotted a market opportunity. We're actual DeFi users who got tired of waking up to impermanent loss notifications and manually adjusting our positions at 3 AM. After one too many cups of coffee and some colorful language directed at our screens, we decided there had to be a better way.
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
