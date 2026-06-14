'use client';

import { homeCopy } from '@/lib/homepageCopy';
import { Reveal } from '@/components/ui/Reveal';

export function HomeProcess() {
  const c = homeCopy.process;
  return (
    <section
      id="process"
      style={{
        background: 'var(--cream)',
        paddingTop: 'clamp(72px, 10vw, 120px)',
        paddingBottom: 'clamp(72px, 10vw, 120px)',
      }}
    >
      <div className="container">
        <Reveal>
          <div
            style={{
              display: 'grid',
              gap: 24,
              alignItems: 'end',
              marginBottom: 'clamp(40px, 6vw, 56px)',
            }}
            className="grid-cols-1 md:grid-cols-[1fr_1fr]"
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                {c.eyebrow}
              </p>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4.4vw, 56px)',
                  lineHeight: 1.04,
                  whiteSpace: 'pre-line',
                  letterSpacing: '-0.025em',
                }}
              >
                {c.headline}
              </h2>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.65, maxWidth: 460 }}>
              {c.sub}
            </p>
          </div>
        </Reveal>

        <ol
          style={{
            listStyle: 'none',
            display: 'grid',
            gap: 16,
            padding: 0,
            margin: 0,
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {c.steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08}>
              <div
                style={{
                  padding: 'clamp(24px, 3vw, 32px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 20,
                    fontFamily: 'var(--font-display)',
                    fontSize: 13,
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    lineHeight: 1.2,
                    marginBottom: 12,
                    maxWidth: 'calc(100% - 40px)',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HomeProcess;
