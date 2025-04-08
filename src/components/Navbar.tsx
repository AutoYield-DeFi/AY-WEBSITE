
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo variant="full" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/')
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/about')
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              About
            </Link>
            <Link
              to="/docs"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname.startsWith('/docs')
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Docs
            </Link>
            <Link
              to="/blog"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/blog') || location.pathname.startsWith('/blog/')
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/waitlist">
              <Button variant="default" className="rounded-full">
                Get Early Access
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg dark:bg-gray-900/95">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') ? 'text-primary bg-primary/5' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/about') ? 'text-primary bg-primary/5' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/docs"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname.startsWith('/docs') ? 'text-primary bg-primary/5' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Docs
          </Link>
          <Link
            to="/blog"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/blog') || location.pathname.startsWith('/blog/')
                ? 'text-primary bg-primary/5'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <div className="pt-4">
            <Link to="/waitlist" className="block w-full" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full rounded-full">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
