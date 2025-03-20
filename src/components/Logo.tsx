
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'symbol';
  darkMode?: boolean;
}

const Logo = ({ 
  className, 
  size = 'md', 
  variant = 'full',
  darkMode = false 
}: LogoProps) => {
  const sizeClasses = {
    sm: variant === 'full' ? 'h-6' : 'h-7',
    md: variant === 'full' ? 'h-8' : 'h-9',
    lg: variant === 'full' ? 'h-10' : 'h-12'
  };

  // Use SVG files instead of inline SVG
  const logoSrc = darkMode 
    ? (variant === 'full' ? '/logo-full-dark.svg' : '/logo-symbol-dark.svg')
    : (variant === 'full' ? '/logo-full.svg' : '/logo-symbol.svg');

  return (
    <div className={cn("relative flex items-center", className)}>
      <img 
        src={logoSrc} 
        alt="AutoYield Logo" 
        className={cn(sizeClasses[size])}
      />
    </div>
  );
};

export default Logo;
