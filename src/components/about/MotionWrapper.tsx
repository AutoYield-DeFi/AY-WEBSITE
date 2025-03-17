
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

// Create a function to generate motion components for different HTML elements
const createMotionComponent = (Element: keyof JSX.IntrinsicElements) => {
  return ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    whileInView, 
    viewport, 
    className = '',
    onClick,
    ...props
  }: MotionProps & React.HTMLAttributes<HTMLElement>) => {
    // Simple implementation of animation with CSS classes
    const [isInView, setIsInView] = React.useState(false);
    const ref = React.useRef<HTMLElement>(null);
    
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
    let delayClass = '';
    
    if (isInView && whileInView) {
      animationClass = 'animate-fade-up';
      
      if (transition?.delay) {
        const delayMs = transition.delay * 1000;
        delayClass = `animation-delay-${delayMs}`;
      }
    } else if (animate) {
      animationClass = 'animate-fade-in';
    }
    
    return React.createElement(
      Element,
      { 
        ref: ref as any, 
        className: `${className} ${animationClass} ${delayClass}`.trim(),
        onClick,
        ...props
      },
      children
    );
  };
};

// Export motion components for common elements
export const motion = {
  div: createMotionComponent('div'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  h4: createMotionComponent('h4'),
  h5: createMotionComponent('h5'),
  h6: createMotionComponent('h6'),
  p: createMotionComponent('p'),
  span: createMotionComponent('span'),
  section: createMotionComponent('section'),
  article: createMotionComponent('article'),
  button: createMotionComponent('button'),
  img: createMotionComponent('img'),
  ul: createMotionComponent('ul'),
  li: createMotionComponent('li'),
  a: createMotionComponent('a'),
  nav: createMotionComponent('nav'),
  header: createMotionComponent('header'),
  footer: createMotionComponent('footer'),
  aside: createMotionComponent('aside'),
  main: createMotionComponent('main'),
};
