'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { SITE } from '@/lib/site';

interface WordmarkProps {
  tone?: 'light' | 'dark';
  size?: 'hero' | 'foot';
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Massive editorial wordmark — used as bookend in hero & footer. */
export function Wordmark({ tone = 'light', size = 'hero' }: WordmarkProps) {
  const prefersReduced = useReducedMotion();
  const color = tone === 'light' ? '#FFFFFF' : 'var(--ink)';

  const fontSize =
    size === 'hero'
      ? 'clamp(72px, 18vw, 240px)'
      : 'clamp(52px, 12vw, 168px)';

  const variants: Variants = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24, letterSpacing: '-0.02em' },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: '-0.045em',
      transition: { duration: 0.95, ease: easeOut },
    },
  };

  return (
    <motion.div
      aria-hidden
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        lineHeight: 0.88,
        fontSize,
        color,
        letterSpacing: '-0.045em',
        whiteSpace: 'nowrap',
      }}
    >
      {SITE.wordmark}
    </motion.div>
  );
}

export default Wordmark;
