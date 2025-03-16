
import React from 'react';
import { Book } from 'lucide-react';

interface DocsHeaderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const DocsHeader: React.FC<DocsHeaderProps> = ({ 
  title, 
  description, 
  icon = <Book size={24} className="text-primary" /> 
}) => {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-muted/50 flex items-center justify-center">
          {icon}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      </div>
      <p className="text-xl text-muted-foreground max-w-3xl">
        {description}
      </p>
    </div>
  );
};

export default DocsHeader;
