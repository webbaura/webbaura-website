'use client';

import { homeCopy } from '@/lib/homepageCopy';
import { Reveal } from '@/components/ui/Reveal';

export function HomeWhy() {
  const c = homeCopy.why;
  return (
    <section
      style={{
        background: 'var(--ink)',
        color: '#fff',
        paddingTop: 'clamp(72px, 10vw, 120px)',
        paddingBottom: 'clamp(72px, 10vw, 120px)',
      }}
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--on-dark" style={{ marginBottom: 16 }}>
            {c.eyebrow}
          </p>
          <h2
            style={{
              fontSize: 'clamp(34px, 5vw, 64px)',
              lineHeight: 1.02,
              color: '#fff',
              maxWidth: 720,
              whiteSpace: 'pre-line',
              marginBottom: 56,
            }}
          >
            {c.headline}
          </h2>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 0,
            borderTop: '1px solid rgba(255,255,255,0.10)',
          }}
          className="md:grid-cols-3"
        >
          {c.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div
                style={{
                  padding: '40px 28px 40px 0',
                  borderRight:
                    i < c.points.length - 1
                      ? '1px solid rgba(255,255,255,0.10)'
                      : 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.10)',
                  paddingLeft: i === 0 ? 0 : 28,
                  height: '100%',
                }}
              >
                <div
                  aria-hidden
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 13,
                    color: 'var(--accent)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    marginBottom: 14,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    lineHeight: 1.25,
                    color: '#fff',
                    marginBottom: 14,
                    maxWidth: 280,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.66)',
                    fontSize: 15,
                    lineHeight: 1.7,
                    maxWidth: 360,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeWhy;
