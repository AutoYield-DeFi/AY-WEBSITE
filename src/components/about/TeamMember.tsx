
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Twitter, Globe } from 'lucide-react';

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
    <Card className="overflow-hidden hover-scale transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-primary-muted/30">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
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
              >
                <Globe size={18} />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMember;
