
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from './MotionWrapper';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
}

const TeamMember = ({ 
  name, 
  role, 
  bio, 
  imageUrl, 
  linkedin, 
  github
}: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-transparent hover:border-blue-200 h-full">
      <div className="p-6">
        <div className="flex flex-col items-center text-center mb-4">
          <Avatar className="h-24 w-24 rounded-full border-2 border-blue-100 mb-4">
            <AvatarImage src={imageUrl} alt={name} className="object-cover" />
            <AvatarFallback className="bg-primary-muted text-primary text-xl">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-primary font-medium mb-3">{role}</p>
        </div>
        
        <CardContent className="p-0">
          <p className="text-muted-foreground text-center mb-4">{bio}</p>
          
          {(linkedin || github) && (
            <div className="flex gap-3 justify-center pt-2">
              {linkedin && (
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50"
                  aria-label={`${name}'s LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50"
                  aria-label={`${name}'s GitHub`}
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default TeamMember;
