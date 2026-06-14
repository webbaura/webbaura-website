'use client';

import { Calendar, Mail } from 'lucide-react';
import { homeCopy } from '@/lib/homepageCopy';
import { SITE } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';

export function HomeFinalCTA() {
  const c = homeCopy.finalCta;
  return (
    <section
      id="contact"
      style={{
        background: 'var(--cream)',
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(80px, 10vw, 128px)',
      }}
    >
      <div className="container">
        <Reveal>
          <div
            style={{
              background: 'var(--ink)',
              color: '#fff',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(40px, 6vw, 96px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 720,
                height: 380,
                background:
                  'radial-gradient(ellipse at center, rgba(232,107,90,0.20) 0%, transparent 65%)',
                filter: 'blur(4px)',
                pointerEvents: 'none',
              }}
            />

            <p
              className="eyebrow eyebrow--accent"
              style={{ marginBottom: 18, position: 'relative' }}
            >
              {c.eyebrow}
            </p>
            <h2
              style={{
                fontSize: 'clamp(34px, 5.4vw, 68px)',
                lineHeight: 1.02,
                color: '#fff',
                maxWidth: 760,
                margin: '0 auto 20px',
                position: 'relative',
              }}
            >
              {c.headline}
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 520,
                margin: '0 auto 36px',
                position: 'relative',
              }}
            >
              {c.sub}
            </p>

            <div
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
                position: 'relative',
              }}
            >
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Calendar size={16} /> {c.primaryCta}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="btn btn-ghost btn-ghost--on-dark"
              >
                <Mail size={16} /> {c.secondaryCta}
              </a>
            </div>

            <p
              style={{
                marginTop: 24,
                fontSize: 13,
                color: 'rgba(255,255,255,0.48)',
                position: 'relative',
              }}
            >
              {c.foot}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HomeFinalCTA;
