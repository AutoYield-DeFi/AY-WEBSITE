
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
              <Logo variant="full" size="md" />
            </Link>
            <p className="text-primary-foreground/80 mb-6">
              AI-powered liquidity management platform on Solana, optimizing yields for a diverse range of tokens from established to promising small and mid-cap projects.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@autoyield.io" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
              <li><Link to="/roadmap" className="text-primary-foreground/80 hover:text-primary-foreground">Roadmap</Link></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-1">
                Launch App <ExternalLink size={14} />
              </a></li>
              <li><Link to="/glossary" className="text-primary-foreground/80 hover:text-primary-foreground">Glossary</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-primary-foreground/80 hover:text-primary-foreground">Documentation</Link></li>
              <li><Link to="/docs/api-reference" className="text-primary-foreground/80 hover:text-primary-foreground">API Reference</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground">Blog</Link></li>
              <li><Link to="/docs/faq" className="text-primary-foreground/80 hover:text-primary-foreground">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/legal" className="text-primary-foreground/80 hover:text-primary-foreground">Terms of Service</Link></li>
              <li><Link to="/legal?tab=privacy" className="text-primary-foreground/80 hover:text-primary-foreground">Privacy Policy</Link></li>
              <li><Link to="/legal?tab=disclaimer" className="text-primary-foreground/80 hover:text-primary-foreground">Risk Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} AutoYield. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/legal" className="text-sm text-primary-foreground/60 hover:text-primary-foreground">
                Terms
              </Link>
              <Link to="/legal?tab=privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground">
                Privacy
              </Link>
              <Link to="/legal?tab=disclaimer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
