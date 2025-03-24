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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" className={cn(sizeClasses[size])}>
                <path fill={darkMode ? "#fff" : "currentColor"} d="M27.3916 1H8.54045C4.37598 1 1 4.37598 1 8.54045V27.3916c0 4.1645 3.37598 7.5404 7.54045 7.5404H27.3916c4.1645 0 7.5404-3.3759 7.5404-7.5404V8.54045C34.932 4.37598 31.5561 1 27.3916 1Z"/>
                <path fill={darkMode ? "#2563eb" : "white"} d="M12.75 28 7 18l5.75-10h11.5L30 18l-5.75 10h-11.5Zm1.2716-2.2222h8.9568L27.4291 18l-4.4507-7.7778h-8.9568L9.54327 18l4.47833 7.7778Z"/>
                <path fill={darkMode ? "#2563eb" : "white"} stroke={darkMode ? "#2563eb" : "white"} strokeWidth="2" d="M18.4997 22.0001c-3.2118 0-5.1892-3.5111-3.5242-6.2576 1.6043-2.6463 5.4441-2.6463 7.0484 0 1.665 2.7465-.3124 6.2576-3.5242 6.2576Z"/>
              </svg>               
            </div>
          </div>
          <div className={`${darkMode ? 'text-white' : 'text-foreground'} font-bold text-xl md:text-2xl`}>
            Auto<span className={`${darkMode ? 'text-black' : 'text-primary'}`}>Yield</span>
          </div>
        </div>
      ) : (
        <div className={`${darkMode ? 'text-white' : 'text-primary'} font-bold relative z-10`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" className={cn(sizeClasses[size])}>
            <path fill="currentColor" d="M27.3916 1H8.54045C4.37598 1 1 4.37598 1 8.54045V27.3916c0 4.1645 3.37598 7.5404 7.54045 7.5404H27.3916c4.1645 0 7.5404-3.3759 7.5404-7.5404V8.54045C34.932 4.37598 31.5561 1 27.3916 1Z"/>
            <path fill={darkMode ? "#000" : "white"} d="M12.75 28 7 18l5.75-10h11.5L30 18l-5.75 10h-11.5Zm1.2716-2.2222h8.9568L27.4291 18l-4.4507-7.7778h-8.9568L9.54327 18l4.47833 7.7778Z"/>
            <path fill={darkMode ? "#000" : "white"} stroke={darkMode ? "#000" : "white"} strokeWidth="2" d="M18.4997 22.0001c-3.2118 0-5.1892-3.5111-3.5242-6.2576 1.6043-2.6463 5.4441-2.6463 7.0484 0 1.665 2.7465-.3124 6.2576-3.5242 6.2576Z"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Logo;