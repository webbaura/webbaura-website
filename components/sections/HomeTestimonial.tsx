'use client';

import { Quote, Star } from 'lucide-react';
import { homeCopy } from '@/lib/homepageCopy';
import { Reveal } from '@/components/ui/Reveal';

export function HomeTestimonial() {
  const c = homeCopy.testimonial;
  return (
    <section
      style={{
        background: 'var(--cream)',
        paddingTop: 'clamp(72px, 10vw, 120px)',
        paddingBottom: 'clamp(56px, 8vw, 96px)',
      }}
    >
      <div className="container">
        <Reveal>
          <article
            style={{
              maxWidth: 880,
              margin: '0 auto',
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(32px, 5vw, 64px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Quote
              aria-hidden
              size={140}
              style={{
                position: 'absolute',
                top: -24,
                right: -16,
                color: 'var(--accent-tint)',
                strokeWidth: 1,
              }}
            />

            <div style={{ display: 'flex', gap: 4, marginBottom: 24, position: 'relative' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="var(--accent)" color="var(--accent)" />
              ))}
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(20px, 2.4vw, 28px)',
                lineHeight: 1.4,
                color: 'var(--ink)',
                letterSpacing: '-0.015em',
                marginBottom: 32,
                position: 'relative',
              }}
            >
              &ldquo;{c.quote}&rdquo;
            </blockquote>

            <footer
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                position: 'relative',
              }}
            >
              <div
                aria-hidden
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'var(--ink)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                {c.name[0]}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    fontSize: 15,
                    color: 'var(--ink)',
                  }}
                >
                  {c.name}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                  {c.role}, {c.org}
                </div>
              </div>
            </footer>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default HomeTestimonial;
