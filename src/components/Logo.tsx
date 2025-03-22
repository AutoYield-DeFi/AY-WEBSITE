
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

  return (
    <div className={cn("relative flex items-center", className)}>
      {variant === 'full' ? (
        <div className="flex items-center">
          <div className="mr-2 relative">
            <div className={`${darkMode ? 'text-white' : 'text-primary'} font-bold relative z-10 flex items-center`}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(sizeClasses[size])}>
                <rect width="36" height="36" rx="8" fill="currentColor" />
                <path d="M9 15L18 9L27 15V24L18 30L9 24V15Z" stroke={darkMode ? "#fff" : "white"} strokeWidth="2" />
                <circle cx="18" cy="19" r="5" fill={darkMode ? "#000" : "white"} />
              </svg>             
            </div>
          </div>
          <div className={`${darkMode ? 'text-white' : 'text-foreground'} font-bold text-xl md:text-2xl`}>
            Auto<span className={`${darkMode ? 'text-white' : 'text-primary'}`}>Yield</span>
          </div>
        </div>
      ) : (
        <div className={`${darkMode ? 'text-white' : 'text-primary'} font-bold relative z-10`}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(sizeClasses[size])}>
            <rect width="36" height="36" rx="8" fill="currentColor" />
            <path d="M9 15L18 9L27 15V24L18 30L9 24V15Z" stroke={darkMode ? "#000" : "white"} strokeWidth="2" />
            <circle cx="18" cy="19" r="5" fill={darkMode ? "#000" : "white"} />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Logo;
