
import React from 'react';
import GlossaryHeader from '@/components/glossary/GlossaryHeader';
import GlossaryTermList from '@/components/glossary/GlossaryTermList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Glossary = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-primary-muted/30 to-white pt-20">
        <div className="container mx-auto px-6 py-8">
          <GlossaryHeader />
          <GlossaryTermList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Glossary;
