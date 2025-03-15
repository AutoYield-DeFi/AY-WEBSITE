
import React from 'react';
import { BookOpen } from 'lucide-react';

const GlossaryHeader = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-muted text-primary">
        <BookOpen size={32} />
      </div>
      <h1 className="text-4xl font-bold mb-4">DeFi Glossary</h1>
      <p className="text-lg text-muted-foreground">
        Welcome to AutoYield's comprehensive glossary of decentralized finance terms. 
        Use this resource to better understand the concepts behind liquidity provision, 
        yield strategies, and how AutoYield's technology works.
      </p>
      
      <div className="mt-6 p-4 rounded-lg bg-blue-50 text-blue-700 text-sm border border-blue-100">
        <p>
          Understanding these concepts will help you make informed decisions about your DeFi investments 
          and maximize your returns with AutoYield's automated liquidity management.
        </p>
      </div>
    </div>
  );
};

export default GlossaryHeader;
