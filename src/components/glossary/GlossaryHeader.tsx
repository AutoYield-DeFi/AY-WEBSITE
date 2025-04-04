
import React from 'react';
import { BookOpen, BookText, Search } from 'lucide-react';
import { Heading, Paragraph } from '@/components/ui/typography';

const GlossaryHeader = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-muted text-primary">
        <BookOpen size={32} />
      </div>
      <Heading as="h1" size="4xl" className="mb-4">
        Liquidity Provision Glossary
      </Heading>
      <Paragraph size="lg" muted className="mb-4">
        Welcome to AutoYield's comprehensive glossary on liquidity provision terminology. 
        This resource explains the key concepts behind automated liquidity management, 
        helping you understand how our AI-powered solutions optimize your positions on Solana.
      </Paragraph>
      
      <div className="mt-6 p-5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex gap-4 text-left">
        <div className="flex-shrink-0 pt-1">
          <BookText size={24} />
        </div>
        <div>
          <Heading as="h3" size="lg" className="mb-1">
            Understanding Liquidity Provision
          </Heading>
          <Paragraph size="sm">
            Liquidity provision introduces concepts that directly impact your returns.
            By understanding these terms, you'll appreciate how AutoYield's AI-driven approach
            optimizes liquidity positions for maximum yield while minimizing risks like
            impermanent loss. This glossary covers everything from basic LP terminology to
            advanced concepts like concentrated liquidity and AI-powered positioning strategies.
          </Paragraph>
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-8 text-sm gap-2">
        <Search size={14} className="text-muted-foreground" />
        <span>Use the search and filters below to find specific terms</span>
      </div>
    </div>
  );
};

export default GlossaryHeader;
