import React from 'react';
import { ExternalLink, Mail } from 'lucide-react';
import { motion } from 'framer-motion'; // Import framer-motion
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

// SimpleIcons SVG components
const TwitterIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
    <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/>
  </svg>
);

const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1m-7-7L4 6h16z"/></svg>
);

// Icon animation variants
const iconVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.15,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const Footer = () => {
  const currentYear = new Date(new Date().toLocaleString('en-US', { timeZone: 'UTC' })).getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            
            <Link to="/" className="inline-block mb-4">
              <Logo variant="full" size="lg" darkMode={true} />
            </Link>
            <p className="text-primary-foreground/90 mb-6 text-sm leading-relaxed">
              AI-powered liquidity management platform on Solana. It maximizes yields across established, mid-cap, and promising small-cap tokens.
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a 
                href="http://x.com/autoyield_io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" 
                aria-label="Twitter"
                initial="initial"
                whileHover="hover"
                variants={iconVariants}
              >
                <TwitterIcon />
              </motion.a>
              
              <motion.a 
                href="https://github.com/AutoYield-DeFi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" 
                aria-label="Github"
                initial="initial"
                whileHover="hover"
                variants={iconVariants}
              >
                <GithubIcon />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/company/autoyield-defi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" 
                aria-label="LinkedIn"
                initial="initial"
                whileHover="hover"
                variants={iconVariants}
              >
                <LinkedinIcon />
              </motion.a>
              
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf2EOQoZQ97opT4bT7y-vSAjoUk3VLOn0eWpH6dUbTIMYe9kA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Contact"
                initial="initial"
                whileHover="hover"
                variants={iconVariants}
              >
                <EmailIcon />
              </motion.a>
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
              <li><a href="https://getwaitlist.com/waitlist/27123" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                Get Early Access
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
