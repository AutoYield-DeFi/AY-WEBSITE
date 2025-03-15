
import React from 'react';
import GlossaryHeader from '@/components/glossary/GlossaryHeader';
import GlossaryTermList from '@/components/glossary/GlossaryTermList';

const Glossary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-muted/30 to-white pt-20">
      <div className="container mx-auto px-6 py-8">
        <GlossaryHeader />
        <GlossaryTermList />
      </div>
    </div>
  );
};

export default Glossary;
