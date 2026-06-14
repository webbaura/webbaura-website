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
      className="grain"
      style={{
        background: 'var(--ink)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(112px, 13vw, 152px)',
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

      <div className="container" style={{ position: 'relative' }}>
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOut }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '7px 14px 7px 12px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            color: 'rgba(255,255,255,0.84)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: '0.04em',
            marginBottom: 36,
          }}
        >
          <span style={{ position: 'relative', display: 'inline-flex' }}>
            <span
              style={{
                position: 'absolute',
                inset: -4,
                borderRadius: '50%',
                background: 'var(--accent)',
                opacity: 0.35,
                animation: 'ping 1.8s cubic-bezier(0,0,0.2,1) infinite',
              }}
            />
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent)',
                position: 'relative',
              }}
            />
          </span>
          Now taking on clients · {SITE.city}
        </motion.div>

        {/* Headline + side rail */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 56,
            alignItems: 'end',
          }}
          className="lg:grid-cols-[1.4fr_1fr]"
        >
          <div>
            <h1
              style={{
                fontSize: 'clamp(44px, 7vw, 104px)',
                lineHeight: 0.96,
                color: '#fff',
                letterSpacing: '-0.035em',
                margin: 0,
                maxWidth: 980,
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
                marginTop: 32,
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
                marginTop: 36,
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

            {/* Mobile-only inline trust line — side rail is hidden on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85, ease: easeOut }}
              className="lg:hidden"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 28,
                color: 'rgba(255,255,255,0.62)',
                fontSize: 13,
              }}
            >
              <span style={{ display: 'inline-flex', gap: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="#fff" color="#fff" />
                ))}
              </span>
              <span style={{ color: '#fff', fontWeight: 600 }}>5.0</span>
              <span style={{ color: 'rgba(255,255,255,0.35)' }}>·</span>
              <span>Trusted by Melbourne small businesses</span>
            </motion.div>
          </div>

          {/* Side rail — trust card */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: easeOut }}
            style={{
              borderLeft: '1px solid rgba(255,255,255,0.10)',
              paddingLeft: 28,
              maxWidth: 360,
              justifySelf: 'end',
              width: '100%',
            }}
            className="hidden lg:block"
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

        {/* Spacer */}
        <div style={{ height: 64 }} />
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

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default HomeHero;
