import React from 'react';
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            
            <Link to="/" className="inline-block mb-4">
              <Logo variant="full" size="lg" darkMode={true} />
            </Link>
            <p className="text-primary-foreground/90 mb-6 text-sm leading-relaxed">
              AI-powered liquidity management platform on Solana, maximizing yields across established, mid-cap, and promising small-cap tokens.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/AutoYield-DeFi" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/company/autoyield-defi" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2EOQoZQ97opT4bT7y-vSAjoUk3VLOn0eWpH6dUbTIMYe9kA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Contact">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/90">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/docs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Documentation</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/90">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/glossary" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Glossary</Link></li>
              <li><Link to="/roadmap" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Roadmap</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1">
                Launch App <ExternalLink size={14} />
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/90">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/legal" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal?tab=privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal?tab=disclaimer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Risk Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} AutoYield. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50 mt-2 md:mt-0">
              Built on Solana for maximum efficiency and security.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
