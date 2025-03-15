
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <h3 className="text-xl font-semibold">{term}</h3>
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
          <p className="text-muted-foreground">{definition}</p>
        </div>
      </div>
    </div>
  );
};

export default GlossaryTerm;
