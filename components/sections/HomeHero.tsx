'use client';

import { Calendar, ArrowDown, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';
import { SplitText } from '@/components/ui/SplitText';
import { Marquee } from '@/components/ui/Marquee';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const industries = [
  'Restaurants', 'Cafés', 'Consulting', 'Accounting',
  'Beauty', 'Construction', 'SaaS', 'Wellness',
  'Hospitality', 'Trades', 'Professional Services',
];

export function HomeHero() {
  return (
    <section
      id="top"
      className="grain min-h-screen flex flex-col"
      style={{
        background: 'var(--ink)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(96px, 11vw, 128px)',
        paddingBottom: 0,
      }}
    >
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-15%',
          width: 820,
          height: 820,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(31,138,96,0.22) 0%, rgba(31,138,96,0.06) 35%, transparent 65%)',
          filter: 'blur(6px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: 620,
          height: 620,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(216,159,74,0.10) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container flex-1 flex flex-col"
        style={{ position: 'relative' }}
      >
        {/* Top spacer — absorbs space above content (vertical centering) */}
        <div className="flex-1" aria-hidden />

        {/* Center block — title + subtitle + CTAs + (mobile) trust line */}
        <div>
          <h1
            style={{
              fontSize: 'clamp(44px, 7vw, 112px)',
              lineHeight: 0.96,
              color: '#fff',
              letterSpacing: '-0.035em',
              margin: 0,
              marginBottom: 'clamp(28px, 4vw, 48px)',
            }}
          >
            <SplitText text="Websites that" />
            <br />
            <SplitText text="earn their keep." delay={0.18} style={{ color: 'var(--accent)' }} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: 'clamp(16px, 1.4vw, 19px)',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 560,
            }}
          >
            Most small-business websites sit there looking presentable while doing nothing.
            We design and build sites that answer the right questions, earn trust, and
            turn visitors into enquiries, on every device, at every hour.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: easeOut }}
            style={{
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
              marginTop: 'clamp(24px, 3vw, 36px)',
            }}
          >
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '15px 28px', fontSize: 15 }}
            >
              <Calendar size={16} />
              Book a free call
            </a>
            <a
              href="#work"
              className="btn btn-ghost btn-ghost--on-dark"
              style={{ padding: '15px 28px', fontSize: 15 }}
            >
              See our work <ArrowDown size={15} />
            </a>
          </motion.div>

        </div>

        {/* Bottom block — balances top spacer (centring) AND anchors the aside to bottom-right at lg+ */}
        <div
          className="flex-1 flex items-end justify-end"
          style={{
            paddingTop: 'clamp(32px, 5vw, 64px)',
            paddingBottom: 'clamp(24px, 4vw, 48px)',
          }}
        >
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: easeOut }}
            style={{
              borderLeft: '1px solid rgba(255,255,255,0.10)',
              paddingLeft: 28,
            }}
            className="w-full lg:max-w-[360px]"
          >
            <p
              className="eyebrow eyebrow--on-dark"
              style={{ marginBottom: 18 }}
            >
              Established 2024
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                marginBottom: 14,
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#fff" color="#fff" />
              ))}
              <span
                style={{
                  marginLeft: 6,
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                5.0
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.62)', lineHeight: 1.65 }}>
              Trusted by Hilltops, Gambino Rooftop, Communal Market, Combined Arms and Rubin Partners.
            </p>

            <div
              style={{
                marginTop: 26,
                paddingTop: 22,
                borderTop: '1px solid rgba(255,255,255,0.10)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  No deposit
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>
                  see it before you pay
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Your code
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>
                  full ownership, no lock-in
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Bottom marquee strip — industries served */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.85, ease: 'easeOut' }}
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '18px 0',
          position: 'relative',
          background: 'rgba(0,0,0,0.15)',
        }}
      >
        <Marquee items={industries} tone="dark" />
      </motion.div>
    </section>
  );
}

export default HomeHero;
