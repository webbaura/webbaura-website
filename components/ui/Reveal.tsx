'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

type Direction = 'up' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  delay?: number;        // seconds
  direction?: Direction;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'span' | 'li';
  amount?: number;       // viewport-intersection threshold 0..1
  once?: boolean;
}

const distance = 18;

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  as = 'div',
  amount = 0.18,
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = {
    hidden: prefersReduced
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === 'up' ? distance : 0,
          x: direction === 'right' ? -distance : 0,
        },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
