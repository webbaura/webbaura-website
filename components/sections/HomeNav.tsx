'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Calendar, Mail } from 'lucide-react';
import { SITE } from '@/lib/site';

const links = [
  { href: '#work',     label: 'Work',     n: '01' },
  { href: '#services', label: 'Services', n: '02' },
  { href: '#process',  label: 'Process',  n: '03' },
  { href: '#faq',      label: 'FAQ',      n: '04' },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const fg = scrolled ? 'var(--ink)' : 'rgba(255,255,255,0.92)';
  const fgSub = scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.65)';

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: easeOut }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backgroundColor: scrolled ? 'rgba(245,241,232,0.86)' : 'transparent',
          backdropFilter:  scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
          transition: 'background-color 220ms ease, border-color 220ms ease',
        }}
      >
        <div
          className="container flex items-center justify-between"
          style={{ height: 72 }}
        >
          {/* Brand */}
          <a
            href="#top"
            aria-label="Webbaura — home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              color: fg,
              transition: 'color 200ms ease',
            }}
          >
            {SITE.name.toLowerCase()}<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-9"
            style={{ height: '100%' }}
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '100%',
                  color: fg,
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '-0.005em',
                  lineHeight: 1,
                  transition: 'color 200ms ease, opacity 150ms ease',
                }}
                className="hover:opacity-70"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden md:inline-flex"
            style={{
              padding: '10px 20px',
              fontSize: 14,
              lineHeight: 1,
              height: 40,
            }}
          >
            Book a call <ArrowUpRight size={15} />
          </a>

          {/* Mobile menu trigger */}
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center"
            style={{
              width: 44, height: 44, borderRadius: 999,
              background: scrolled ? 'var(--paper)' : 'rgba(255,255,255,0.10)',
              border: scrolled ? '1px solid var(--line)' : '1px solid rgba(255,255,255,0.18)',
              color: fg,
              lineHeight: 1,
              transition: 'background-color 200ms ease, border-color 200ms ease, color 200ms ease',
            }}
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden fixed inset-0 z-50"
              style={{
                background: 'rgba(10,13,11,0.55)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                cursor: 'pointer',
              }}
            />

            {/* Drawer panel */}
            <motion.aside
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={prefersReduced ? { opacity: 0 } : { x: '100%' }}
              animate={prefersReduced ? { opacity: 1 } : { x: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { x: '100%' }}
              transition={{ duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-50"
              style={{
                width: 'min(86vw, 380px)',
                background: 'var(--ink)',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-32px 0 64px rgba(0,0,0,0.4)',
              }}
            >
              {/* Drawer header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '22px 24px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 17,
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                  }}
                >
                  webbaura<span style={{ color: 'var(--accent)' }}>.</span>
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Link list */}
              <nav
                aria-label="Mobile primary"
                style={{
                  padding: '8px 8px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + i * 0.05,
                      ease: easeOut,
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                      padding: '18px 16px',
                      borderRadius: 14,
                      color: '#fff',
                      transition: 'background 0.18s ease',
                    }}
                    className="active:bg-white/5 hover:bg-white/5"
                  >
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 12,
                          fontWeight: 700,
                          color: 'var(--accent)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {l.n}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 26,
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.1,
                        }}
                      >
                        {l.label}
                      </span>
                    </span>
                    <ArrowUpRight size={20} style={{ color: 'rgba(255,255,255,0.55)' }} />
                  </motion.a>
                ))}
              </nav>

              {/* Drawer footer / CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.36, ease: easeOut }}
                style={{
                  padding: '20px 20px 28px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  onClick={() => setOpen(false)}
                  style={{ justifyContent: 'space-between', padding: '14px 20px' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <Calendar size={16} /> Book a free call
                  </span>
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 4px',
                    color: 'rgba(255,255,255,0.66)',
                    fontSize: 14,
                  }}
                >
                  <Mail size={14} /> {SITE.email}
                </a>
                <p
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.42)',
                    lineHeight: 1.6,
                  }}
                >
                  Based in {SITE.city}. Typically replies within a few hours.
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default HomeNav;
