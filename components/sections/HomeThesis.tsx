'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HomeThesis() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      style={{
        background: 'var(--cream)',
        paddingTop: 'clamp(96px, 12vw, 144px)',
        paddingBottom: 'clamp(80px, 10vw, 128px)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 32,
            alignItems: 'start',
          }}
          className="md:grid-cols-[auto_1fr] md:gap-20"
        >
          {/* Left margin label — small eyebrow vertical */}
          <Reveal>
            <div
              style={{
                paddingTop: 12,
                minWidth: 140,
              }}
            >
              <p className="eyebrow" style={{ marginBottom: 8 }}>
                §01 · The thesis
              </p>
            </div>
          </Reveal>

          <div style={{ position: 'relative' }}>
            {/* Decorative open-quote */}
            <motion.div
              aria-hidden
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, ease: easeOut }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(96px, 14vw, 180px)',
                lineHeight: 0.7,
                color: 'var(--accent)',
                opacity: 0.18,
                marginBottom: -36,
                marginLeft: -8,
                userSelect: 'none',
              }}
            >
              &ldquo;
            </motion.div>

            <Reveal>
              <h2
                style={{
                  fontSize: 'clamp(36px, 6vw, 84px)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.03em',
                  marginBottom: 36,
                }}
              >
                Most sites look the part.
                <br />
                <span style={{ color: 'var(--muted)' }}>Few do the job.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 28,
                  maxWidth: 760,
                }}
                className="md:grid-cols-2"
              >
                <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.7 }}>
                  A beautiful website that doesn&apos;t convert is just an expensive
                  brochure. The visitor leaves, the phone doesn&apos;t ring, the
                  enquiries don&apos;t arrive. The site quietly costs you
                  business every single day.
                </p>
                <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.7 }}>
                  Webbaura was built to be the opposite. Strategic, disciplined, and
                  honest about what works. Every section earns its place; every
                  visitor leaves with a reason to act.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  flexWrap: 'wrap',
                  marginTop: 40,
                  paddingTop: 28,
                  borderTop: '1px solid var(--line-strong)',
                }}
              >
                {['Strategy first', 'No bloat', 'Mobile-first', 'Full code ownership'].map(t => (
                  <span key={t} className="chip chip--soft">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeThesis;
