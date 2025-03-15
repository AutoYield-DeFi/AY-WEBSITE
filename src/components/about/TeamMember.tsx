
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Twitter, Globe } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  twitter?: string;
  website?: string;
}

const TeamMember = ({ 
  name, 
  role, 
  bio, 
  imageUrl, 
  twitter, 
  website 
}: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-transparent hover:border-blue-200">
      <div className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
        <Avatar className="h-24 w-24 rounded-full border-2 border-blue-100">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <CardContent className="p-0 flex-1">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-blue-600 font-medium mb-3">{role}</p>
          <p className="text-muted-foreground mb-4">{bio}</p>
          
          {(twitter || website) && (
            <div className="flex gap-3 pt-2">
              {twitter && (
                <a 
                  href={twitter} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                  aria-label={`${name}'s Twitter`}
                >
                  <Twitter size={18} />
                </a>
              )}
              {website && (
                <a 
                  href={website} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                  aria-label={`${name}'s Website`}
                >
                  <Globe size={18} />
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
