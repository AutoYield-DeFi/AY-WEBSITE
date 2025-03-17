
import React from 'react';
import { Book } from 'lucide-react';
import { Heading, Paragraph } from '@/components/ui/typography';

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
        <Heading as="h1" size="4xl">
          {title}
        </Heading>
      </div>
      <Paragraph size="xl" muted className="max-w-3xl">
        {description}
      </Paragraph>
    </div>
  );
};

export default DocsHeader;
