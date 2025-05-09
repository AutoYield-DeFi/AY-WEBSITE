
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
  credentials?: string;
  icon?: React.ReactNode;
}

const TeamMember = ({ 
  name, 
  role, 
  bio, 
  imageUrl, 
  linkedin, 
  github,
  credentials,
  icon
}: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/5 hover:border-blue-200 h-full group">
      <div className="p-6">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <Avatar className="h-24 w-24 rounded-full border-2 border-blue-100 group-hover:border-blue-200 transition-all duration-300 shadow-sm">
              <AvatarImage src={imageUrl} alt={name} className="object-cover" />
              <AvatarFallback className="bg-primary-muted text-primary text-xl">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            {icon && (
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md border border-blue-100 group-hover:border-blue-200 transition-all duration-300">
                <div className="text-primary">
                  {icon}
                </div>
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
          <p className="text-primary font-medium mb-3">{role}</p>
        </div>
        
        <CardContent className="p-0">
          <p className="text-muted-foreground text-center mb-4">{bio}</p>
          
          {credentials && (
            <div className="flex items-center justify-center gap-2 bg-blue-50 rounded-md py-2 px-3 mb-4">
              <span className="text-xs text-blue-800 font-medium">{credentials}</span>
            </div>
          )}
          
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
