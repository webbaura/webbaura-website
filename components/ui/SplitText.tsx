'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type CSSProperties } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  staggerWord?: number;
}

/** Word-by-word reveal — animated mask sliding up over each word. */
export function SplitText({
  text,
  className,
  style,
  delay = 0,
  duration = 0.7,
  staggerWord = 0.05,
}: SplitTextProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(' ');

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerWord, delayChildren: delay },
    },
  };
  const child: Variants = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: '100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block', ...style }}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <motion.span
            variants={child}
            style={{ display: 'inline-block', willChange: 'transform' }}
          >
            {word}
            {i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default SplitText;
