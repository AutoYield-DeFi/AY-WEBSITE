
import React from 'react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Sitemap = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Sitemap" 
        description="Navigate through all pages of AutoYield's website with our sitemap."
      />
      
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        
        <div className="grid gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                <Link to="/" className="text-primary hover:underline">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                <Link to="/about" className="text-primary hover:underline">About Us</Link>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                <Link to="/docs" className="text-primary hover:underline">Documentation</Link>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                <Link to="/blog" className="text-primary hover:underline">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Resources</h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                <Link to="/glossary" className="text-primary hover:underline">Glossary</Link>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                <Link to="/roadmap" className="text-primary hover:underline">Roadmap</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Legal</h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                <Link to="/legal" className="text-primary hover:underline">Terms of Service</Link>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                <Link to="/legal?tab=privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-primary" />
                <Link to="/legal?tab=disclaimer" className="text-primary hover:underline">Risk Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
