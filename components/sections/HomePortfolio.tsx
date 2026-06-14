'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import portfolio from '@/lib/portfolio';
import { Reveal } from '@/components/ui/Reveal';
import { RollingNumber } from '@/components/ui/RollingNumber';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Top-tab portfolio gallery.
 * A horizontally-scrolling tab strip with an animated underline indicator
 * lets the visitor pick a site. The featured preview below cross-fades.
 * Every site is rendered in the DOM (the tab `<button>`s carry the name)
 * so the section remains crawlable.
 */
export function HomePortfolio() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isFirstRender = useRef(true);
  const prefersReduced = useReducedMotion();
  const item = portfolio[active];

  const go = (dir: 1 | -1) =>
    setActive(prev => (prev + dir + portfolio.length) % portfolio.length);

  // Auto-scroll the active tab into view whenever it changes (click, arrow,
  // keyboard, wrap-around). Skip on first paint so we don't snap to centre
  // before the visitor has had a chance to look.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const container = tabsRef.current;
    const tab = tabRefs.current[active];
    if (!container || !tab) return;

    // Compute the offset that centres the tab in the container, then clamp
    // to the scrollable range. This avoids "scroll past zero" jitter on the
    // first item and unnecessary scrolls when the tab is already in view.
    const containerRect = container.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const offset =
      tab.offsetLeft - container.offsetLeft - (containerRect.width - tabRect.width) / 2;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const target = Math.max(0, Math.min(maxScroll, offset));

    container.scrollTo({
      left: target,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  }, [active, prefersReduced]);

  // Keyboard arrow navigation while focus is anywhere inside the tablist
  const onTabKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1);  }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(-1); }
    if (e.key === 'Home')       { e.preventDefault(); setActive(0); }
    if (e.key === 'End')        { e.preventDefault(); setActive(portfolio.length - 1); }
  };

  return (
    <section
      id="work"
      style={{
        background: 'var(--cream-2)',
        paddingTop: 'clamp(96px, 12vw, 144px)',
        paddingBottom: 'clamp(96px, 12vw, 144px)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section header */}
        <Reveal>
          <div
            style={{
              display: 'grid',
              gap: 24,
              alignItems: 'end',
              marginBottom: 40,
            }}
            className="grid-cols-1 md:grid-cols-[1.4fr_1fr]"
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                §03 · Recent work
              </p>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5.4vw, 72px)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.03em',
                }}
              >
                Sites built
                <br />
                <span style={{ color: 'var(--accent)' }}>by Webbaura.</span>
              </h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 460 }}>
              Each one built from scratch. Grounded in competitor research,
              tested on real devices, shipped only when it&apos;s right.
            </p>
          </div>
        </Reveal>

        {/* Tab strip + controls */}
        <Reveal delay={0.05}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              borderBottom: '1px solid var(--line-strong)',
              marginBottom: 24,
            }}
          >
            {/* Counter */}
            <div
              aria-hidden
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 6,
                paddingRight: 16,
                marginRight: 4,
                fontFamily: 'var(--font-display)',
                color: 'var(--ink-2)',
                flexShrink: 0,
                borderRight: '1px solid var(--line-strong)',
                alignSelf: 'stretch',
              }}
              className="hidden md:flex"
            >
              <RollingNumber
                value={active + 1}
                digits={2}
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
                ariaLabel={`Project ${active + 1} of ${portfolio.length}`}
              />
              <span
                style={{
                  fontSize: 13,
                  color: 'var(--muted-2)',
                  fontWeight: 600,
                }}
              >
                /{String(portfolio.length).padStart(2, '0')}
              </span>
            </div>

            {/* Tabs (scroll horizontally on overflow) */}
            <div
              ref={tabsRef}
              role="tablist"
              aria-label="Portfolio projects"
              onKeyDown={onTabKey}
              style={{
                display: 'flex',
                alignItems: 'stretch',
                gap: 0,
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                flex: 1,
                minWidth: 0,
                scrollBehavior: prefersReduced ? 'auto' : 'smooth',
              }}
              className="[&::-webkit-scrollbar]:hidden"
            >
              {portfolio.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.slug}
                    ref={el => { tabRefs.current[i] = el; }}
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    aria-selected={isActive}
                    aria-controls="showcase-panel"
                    onClick={() => setActive(i)}
                    style={{
                      position: 'relative',
                      padding: '14px 18px 16px',
                      fontFamily: 'var(--font-display)',
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: '-0.005em',
                      color: isActive ? 'var(--ink)' : 'var(--muted)',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s ease',
                      cursor: 'pointer',
                      background: 'transparent',
                      border: 'none',
                      flexShrink: 0,
                      scrollSnapAlign: 'center',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        style={{
                          fontSize: 11,
                          color: 'var(--muted-2)',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {p.name}
                    </span>

                    {/* Animated underline */}
                    {isActive && (
                      <motion.span
                        layoutId="tab-underline"
                        aria-hidden
                        transition={{ duration: 0.35, ease: easeOut }}
                        style={{
                          position: 'absolute',
                          left: 12,
                          right: 12,
                          bottom: -1,
                          height: 2,
                          borderRadius: 2,
                          background: 'var(--accent)',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Prev/Next */}
            <div style={{ display: 'flex', gap: 6, paddingLeft: 8, flexShrink: 0 }}>
              <button
                aria-label="Previous project"
                onClick={() => go(-1)}
                style={navBtnStyle}
              >
                <ArrowLeft size={15} />
              </button>
              <button
                aria-label="Next project"
                onClick={() => go(1)}
                style={navBtnStyle}
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Featured preview — 70/30 image · info on md+ */}
        <Reveal delay={0.08}>
          <div
            role="tabpanel"
            id="showcase-panel"
            aria-live="polite"
            style={{
              display: 'grid',
              gap: 0,
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-md)',
            }}
            className="grid-cols-1 md:grid-cols-[7fr_3fr]"
          >
            {/* Image */}
            <div style={{ position: 'relative', aspectRatio: '16 / 11', overflow: 'hidden', background: 'var(--cream)' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.slug}
                  initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: easeOut }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <Image
                    src={`/portfolio/${item.slug}.webp`}
                    alt={`${item.name}, ${item.industry} website by Webbaura`}
                    fill
                    sizes="(min-width: 768px) 70vw, 100vw"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    priority={active === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Industry chip */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`${item.slug}-chip`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.32, ease: easeOut }}
                  className="chip"
                  style={{
                    position: 'absolute',
                    top: 18,
                    left: 18,
                    background: 'rgba(255,255,255,0.94)',
                    color: 'var(--ink-2)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.6)',
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {item.industry}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Info panel — editorial sidebar */}
            <div
              style={{
                padding: 'clamp(24px, 2.4vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--paper)',
                borderTop: '1px solid var(--line)',
                position: 'relative',
                minWidth: 0,
              }}
              className="md:border-t-0 md:border-l md:border-l-[var(--line)]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                  style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
                >
                  {/* Industry + location eyebrow */}
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 11.5,
                      color: 'var(--accent)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      margin: 0,
                      marginBottom: 12,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.industry} · {item.location}
                  </p>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(22px, 2vw, 28px)',
                      letterSpacing: '-0.025em',
                      margin: 0,
                      lineHeight: 1.08,
                      marginBottom: 16,
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: 'var(--muted)',
                      fontSize: 14,
                      lineHeight: 1.65,
                      margin: 0,
                      marginBottom: 22,
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Tag pills — focus areas */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                      marginBottom: 'auto',
                      paddingBottom: 24,
                    }}
                  >
                    {item.tags.map(t => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          fontSize: 11,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: 'var(--ink-2)',
                          background: 'var(--cream-2)',
                          padding: '5px 10px',
                          borderRadius: 999,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* CTA — pinned to bottom */}
              <a
                href={item.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.name} (opens in new tab)`}
                className="btn btn-primary"
                style={{
                  marginTop: 'auto',
                  justifyContent: 'space-between',
                  padding: '13px 18px',
                  fontSize: 14,
                }}
              >
                Visit live site <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Hidden SEO-friendly list of every site — bots can read every name + URL */}
        <ul aria-hidden style={{ position: 'absolute', left: -9999, top: -9999, listStyle: 'none' }}>
          {portfolio.map(p => (
            <li key={p.slug}>
              <a href={p.siteUrl} target="_blank" rel="noopener noreferrer">
                {p.name} — {p.industry}, {p.location}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const navBtnStyle = {
  width: 36,
  height: 36,
  borderRadius: 999,
  background: 'var(--paper)',
  color: 'var(--ink)',
  border: '1px solid var(--line-strong)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.18s ease, border-color 0.18s ease',
} as const;

export default HomePortfolio;
