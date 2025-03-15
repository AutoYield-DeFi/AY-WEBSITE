
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-semibold mb-4">AutoYield</div>
            <p className="text-primary-foreground/80 mb-6">
              Simplifying DeFi with automated yield optimization strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Github size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Features</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Security</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Roadmap</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Documentation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">API</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">About</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Contact</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} AutoYield. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
