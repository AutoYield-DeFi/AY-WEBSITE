
import React from 'react';
import { BookOpen, BookText, Search } from 'lucide-react';

const GlossaryHeader = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-muted text-primary">
        <BookOpen size={32} />
      </div>
      <h1 className="text-4xl font-bold mb-4">DeFi & Liquidity Glossary</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Welcome to AutoYield's comprehensive glossary of decentralized finance terminology. 
        This resource explains the key concepts behind liquidity provision, yield optimization, 
        and automated market makers to help you navigate the DeFi ecosystem with confidence.
      </p>
      
      <div className="mt-6 p-5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex gap-4 text-left">
        <div className="flex-shrink-0 pt-1">
          <BookText size={24} />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Why Understanding DeFi Terms Matters</h3>
          <p className="text-sm">
            DeFi protocols introduce new financial concepts that can be challenging to grasp at first. By understanding
            these terms, you'll be able to make more informed decisions about your investments, better assess risks and
            opportunities, and maximize your potential returns with AutoYield's automated liquidity management.
            This glossary covers everything from basic blockchain terminology to advanced concepts like
            impermanent loss and concentrated liquidity strategies.
          </p>
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
