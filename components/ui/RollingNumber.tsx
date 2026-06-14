'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { type CSSProperties } from 'react';

interface RollingNumberProps {
  /** Numeric value to display (positive integer). */
  value: number;
  /** Total digit slots (zero-padded). Default: 2. */
  digits?: number;
  /**
   * Slot height in px. If omitted, slots size to their own font-size so they
   * integrate naturally with adjacent inline text. Override when you need a
   * larger animation distance than the natural line-height.
   */
  height?: number;
  /** Direction the new digit comes from. */
  direction?: 'up' | 'down';
  /** Forwarded styles for the whole strip (font-size, color, etc.). */
  style?: CSSProperties;
  className?: string;
  /** Accessible label override (otherwise the raw number is announced). */
  ariaLabel?: string;
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Rolling number readout. Each digit slot animates independently when its
 * value changes — slots whose digit is unchanged stay still. By default the
 * slot height matches the font's own line-height (1em) so the readout sits on
 * the same baseline as surrounding inline text.
 */
export function RollingNumber({
  value,
  digits = 2,
  height,
  direction = 'up',
  style,
  className,
  ariaLabel,
}: RollingNumberProps) {
  const padded = String(Math.max(0, Math.floor(value))).padStart(digits, '0');
  const chars = padded.split('');

  return (
    <span
      role="text"
      aria-label={ariaLabel ?? padded}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        // 1.2 line-height gives a sliver of leading above and below each glyph
        // so descender-less digits don't visually clip against the overflow box.
        lineHeight: 1.2,
        fontVariantNumeric: 'tabular-nums',
        verticalAlign: 'baseline',
        ...style,
      }}
    >
      {chars.map((d, i) => (
        <DigitSlot key={i} digit={d} height={height} direction={direction} />
      ))}
    </span>
  );
}

interface DigitSlotProps {
  digit: string;
  /** When omitted, the slot uses 1em (natural line-height of current font). */
  height?: number;
  direction: 'up' | 'down';
}

function DigitSlot({ digit, height, direction }: DigitSlotProps) {
  const prefersReduced = useReducedMotion();
  const inFrom = direction === 'up' ? '100%' : '-100%';
  const outTo  = direction === 'up' ? '-100%' : '100%';

  // If a fixed height is supplied we use it (and centre the digit inside).
  // Without it, an invisible "0" reference digit establishes the slot's
  // natural baseline and dimensions, so the readout sits flush with adjacent
  // inline text instead of floating.
  const hasExplicitHeight = typeof height === 'number';

  return (
    <span
      aria-hidden
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '0.62em',
        // Slight vertical padding gives ascenders / descenders room inside the
        // overflow box; without it heavier display fonts clip on the top edge.
        padding: '0.06em 0',
        overflow: 'hidden',
        textAlign: 'center',
        verticalAlign: 'baseline',
        lineHeight: 1.2,
        height: hasExplicitHeight ? height : undefined,
      }}
    >
      {/* Invisible baseline anchor — keeps the slot's metrics natural. */}
      {!hasExplicitHeight && (
        <span style={{ visibility: 'hidden' }}>0</span>
      )}

      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={digit}
          initial={prefersReduced ? { opacity: 0 } : { y: inFrom, opacity: 0 }}
          animate={prefersReduced ? { opacity: 1 } : { y: '0%', opacity: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { y: outTo, opacity: 0 }}
          transition={{ duration: 0.42, ease: easeOut }}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
          }}
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default RollingNumber;
