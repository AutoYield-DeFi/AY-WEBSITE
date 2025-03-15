
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
                <path d="M18 3C9.716 3 3 9.716 3 18C3 26.284 9.716 33 18 33C26.284 33 33 26.284 33 18C33 9.716 26.284 3 18 3Z" fill="currentColor" fillOpacity="0.1"/>
                <path d="M18 8C13.029 8 9 12.029 9 17C9 21.971 13.029 26 18 26C22.971 26 27 21.971 27 17C27 12.029 22.971 8 18 8Z" fill="currentColor" fillOpacity="0.3"/>
                <path d="M18 13C15.791 13 14 14.791 14 17C14 19.209 15.791 21 18 21C20.209 21 22 19.209 22 17C22 14.791 20.209 13 18 13Z" fill="currentColor"/>
                <path d="M27.5 9.5L22 15M27.5 24.5L22 19M8.5 24.5L14 19M8.5 9.5L14 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
            <path d="M18 3C9.716 3 3 9.716 3 18C3 26.284 9.716 33 18 33C26.284 33 33 26.284 33 18C33 9.716 26.284 3 18 3Z" fill="currentColor" fillOpacity="0.1"/>
            <path d="M18 8C13.029 8 9 12.029 9 17C9 21.971 13.029 26 18 26C22.971 26 27 21.971 27 17C27 12.029 22.971 8 18 8Z" fill="currentColor" fillOpacity="0.3"/>
            <path d="M18 13C15.791 13 14 14.791 14 17C14 19.209 15.791 21 18 21C20.209 21 22 19.209 22 17C22 14.791 20.209 13 18 13Z" fill="currentColor"/>
            <path d="M27.5 9.5L22 15M27.5 24.5L22 19M8.5 24.5L14 19M8.5 9.5L14 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Logo;
