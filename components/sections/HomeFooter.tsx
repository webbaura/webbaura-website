'use client';

import { Mail, ArrowUpRight } from 'lucide-react';
import { SITE } from '@/lib/site';
import { Wordmark } from '@/components/ui/Wordmark';

const navLinks = [
  { href: '#work',     label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#process',  label: 'Process' },
  { href: '#faq',      label: 'FAQ' },
];

export function HomeFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'rgba(255,255,255,0.82)',
        paddingTop: 'clamp(64px, 8vw, 96px)',
        paddingBottom: 36,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 32,
            alignItems: 'end',
            paddingBottom: 'clamp(48px, 7vw, 80px)',
          }}
          className="md:grid-cols-[1.5fr_1fr_auto]"
        >
          <div>
            <p
              className="eyebrow eyebrow--on-dark"
              style={{ marginBottom: 16 }}
            >
              Strategic websites · {SITE.city}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(20px, 2.4vw, 28px)',
                color: '#fff',
                lineHeight: 1.3,
                letterSpacing: '-0.015em',
                maxWidth: 460,
              }}
            >
              Designed with virtue.<br />Built with discipline.
            </p>
          </div>

          <nav aria-label="Footer" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p
              className="eyebrow eyebrow--on-dark"
              style={{ marginBottom: 6 }}
            >
              Navigate
            </p>
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 15,
                  fontWeight: 600,
                  transition: 'color 0.18s ease',
                }}
                className="hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a call <ArrowUpRight size={15} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: 'rgba(255,255,255,0.66)',
                fontSize: 14,
              }}
              className="hover:text-white"
            >
              <Mail size={14} /> {SITE.email}
            </a>
          </div>
        </div>

        {/* Editorial wordmark bookend */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.10)',
            paddingTop: 'clamp(32px, 5vw, 56px)',
            paddingBottom: 'clamp(24px, 3vw, 40px)',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Wordmark tone="light" size="foot" />
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)' }}>
            © {year} {SITE.name} · {SITE.city}, {SITE.country}
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)' }}>
            Built in-house with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
