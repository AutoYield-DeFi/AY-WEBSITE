
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Heading, Paragraph } from '@/components/ui/typography';

interface GlossaryTermProps {
  term: string;
  definition: string;
}

const GlossaryTerm = ({ term, definition }: GlossaryTermProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <Heading as="h3" size="xl">
          {term}
        </Heading>
        <div className="bg-gray-100 rounded-full p-1">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-96 p-4 pt-0" : "max-h-0"
        )}
      >
        <div className="border-t border-gray-100 pt-4">
          <Paragraph muted>{definition}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default GlossaryTerm;
