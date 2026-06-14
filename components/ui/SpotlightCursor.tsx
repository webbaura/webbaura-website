'use client';

import { useEffect, useRef } from 'react';

const SIZE         = 50;         // base diameter (when moving)
const REST_SCALE   = 20 / SIZE;  // shrinks to 20px when idle
const IDLE_AFTER   = 140;        // ms of no movement = "at rest"
const POS_FOLLOW   = 0.22;
const SCALE_FOLLOW = 0.18;

export function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = ref.current;
    if (!el) return;

    let tx = 0, ty = 0;
    let x = 0, y = 0;
    let s = REST_SCALE;
    let lastMove = 0;
    let shown = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      lastMove = performance.now();
      if (!shown) {
        x = tx; y = ty;
        el.style.opacity = '1';
        shown = true;
      }
    };

    const onLeave = () => {
      el.style.opacity = '0';
      shown = false;
    };

    const tick = () => {
      const now    = performance.now();
      const moving = now - lastMove < IDLE_AFTER;
      const ts     = moving ? 1 : REST_SCALE;

      x += (tx - x) * POS_FOLLOW;
      y += (ty - y) * POS_FOLLOW;
      s += (ts - s) * SCALE_FOLLOW;

      el.style.transform =
        `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${s})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: SIZE,
        height: SIZE,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.92) 55%, rgba(255,255,255,0) 100%)',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transition: 'opacity 220ms ease',
        willChange: 'transform, opacity',
      }}
    />
  );
}

export default SpotlightCursor;
