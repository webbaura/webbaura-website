'use client';
import { useEffect, useRef } from 'react';

interface AnimateProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
}

export default function Animate({ children, className = '', animation = 'fade-up', delay = 0 }: AnimateProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in-view'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`animate-${animation} ${className}`}>
      {children}
    </div>
  );
}
