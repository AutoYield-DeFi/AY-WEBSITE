
import React, { ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
  className?: string;
  onClick?: () => void;
}

export const motion = {
  div: ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    whileInView, 
    viewport, 
    className = '',
    onClick
  }: MotionProps) => {
    // Simple implementation of animation with CSS classes
    const [isInView, setIsInView] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold: 0.1 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    
    // Generate CSS classes based on animation props
    let animationClass = '';
    
    if (isInView && whileInView) {
      animationClass = 'animate-fade-up';
    } else if (animate) {
      animationClass = 'animate-fade-in';
    }
    
    return (
      <div 
        ref={ref} 
        className={`${className} ${animationClass}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
};
