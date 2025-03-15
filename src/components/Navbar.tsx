
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MenuIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <span className="text-xl font-semibold tracking-tight">AutoYield</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground link-underline">
            Features
          </a>
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground link-underline">
            About Us
          </Link>
          <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground link-underline">
            Blog
          </Link>
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-0 transition-all duration-300 ease-in-out flex flex-col items-center justify-center space-y-8',
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <a 
            href="#features" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <Link 
            to="/about" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/blog" 
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <a 
            href="#contact" 
            className="btn-primary mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
