'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

interface AnimatedButtonProps extends AnimatedSectionProps {
  href: string;
}

const getDirectionOffset = (direction: string) => {
  switch (direction) {
    case 'left':
      return { x: -100, y: 0 };
    case 'right':
      return { x: 100, y: 0 };
    case 'up':
      return { x: 0, y: -100 };
    case 'down':
      return { x: 0, y: 100 };
    default:
      return { x: 0, y: 40 };
  }
};

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) => {
  const offset = getDirectionOffset(direction);

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...offset,
        scale: 0.95,
        filter: 'blur(10px)'
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
      }}
      transition={{ 
        duration: 1,
        delay,
        ease: [0.4, 0, 0.2, 1],
        filter: {
          duration: 0.8
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 20,
        scale: 0.95,
        rotateX: 10
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotateX: 0
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`${className} transform-gpu`}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedButton = ({ 
  children, 
  className = '', 
  delay = 0,
  href
}: AnimatedButtonProps) => {
  return (
    <motion.a
      href={href}
      initial={{ 
        opacity: 0, 
        scale: 0.9,
        y: 20
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        y: 0
      }}
      whileHover={{ 
        scale: 1.05,
        transition: {
          duration: 0.2,
          ease: "easeOut"
        }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: {
          duration: 0.1
        }
      }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      viewport={{ once: true }}
      className={`${className} transform-gpu`}
    >
      {children}
    </motion.a>
  );
}; 