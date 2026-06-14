'use client';

import { Check, ArrowUpRight } from 'lucide-react';
import { homeCopy } from '@/lib/homepageCopy';
import { SITE } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';

function splitPrice(p: string): { prefix?: string; amount: string } {
  const m = p.match(/^(.*?)\s*(\$[\d,]+(?:\/\w+)?)\s*$/);
  if (!m) return { amount: p };
  const prefix = m[1].trim();
  return prefix ? { prefix, amount: m[2] } : { amount: m[2] };
}

export function HomeServices() {
  const c = homeCopy.services;
  const basic   = c.items.find(i => !i.featured)!;
  const premium = c.items.find(i =>  i.featured)!;

  return (
    <section
      id="services"
      style={{
        background: 'var(--cream)',
        paddingTop: 'clamp(72px, 10vw, 128px)',
        paddingBottom: 'clamp(80px, 11vw, 144px)',
      }}
    >
      <div className="container">
        {/* Header — tightened */}
        <Reveal>
          <div
            style={{
              display: 'grid',
              gap: 20,
              alignItems: 'end',
              marginBottom: 40,
            }}
            className="grid-cols-1 md:grid-cols-[1fr_1fr]"
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                §02 · {c.eyebrow}
              </p>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4.2vw, 48px)',
                  lineHeight: 1.02,
                  whiteSpace: 'pre-line',
                  letterSpacing: '-0.03em',
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

        {/* Single editorial pricing block — 1px hairline divider via grid gap */}
        <Reveal delay={0.05}>
          <div
            style={{
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-sm)',
              overflow: 'hidden',
              background: 'var(--line)',
              display: 'grid',
              gap: 1,
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            <Tier tier={basic}   featured={false} />
            <Tier tier={premium} featured={true}  />
          </div>
        </Reveal>

        {/* Parity strip */}
        <Reveal delay={0.12}>
          <div
            style={{
              marginTop: 28,
              display: 'grid',
              gap: 8,
            }}
            className="grid-cols-1 md:grid-cols-[1fr_auto] md:items-center md:gap-8"
          >
            <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>
              Both packages include a fixed quote up front, mobile first design, technical SEO foundations, and complete code ownership at handover.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              E-commerce not offered
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Tier column ────────────────────────────────────────────────────────── */

type TierData = {
  name:     string;
  tagline:  string;
  price:    string;
  features: readonly string[];
  cta:      string;
};

function Tier({ tier, featured }: { tier: TierData; featured: boolean }) {
  const { prefix, amount } = splitPrice(tier.price);
  return (
    <div
      style={{
        padding: 'clamp(28px, 3vw, 36px)',
        background: featured
          ? 'linear-gradient(180deg, var(--accent-tint) 0%, var(--paper) 120%)'
          : 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}
    >
      {/* Tier name + recommended pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <h3
          style={{
            margin: 0,
            fontSize: 'clamp(20px, 2vw, 24px)',
            letterSpacing: '-0.015em',
            lineHeight: 1.1,
          }}
        >
          {tier.name}
        </h3>
        {featured && (
          <span
            className="chip"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              fontSize: 10.5,
              padding: '3px 9px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            Recommended
          </span>
        )}
      </div>

      <p
        style={{
          color: 'var(--muted)',
          fontSize: 14,
          lineHeight: 1.55,
          margin: 0,
          marginBottom: 26,
          maxWidth: 320,
        }}
      >
        {tier.tagline}
      </p>

      {/* Price */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        {prefix && (
          <span style={{ fontSize: 13, color: 'var(--muted-2)', fontWeight: 500 }}>{prefix}</span>
        )}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(30px, 3.4vw, 38px)',
            letterSpacing: '-0.025em',
            lineHeight: 1,
            color: 'var(--ink)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {amount}
        </span>
      </div>

      {/* Short accent hairline */}
      <div
        aria-hidden
        style={{
          width: 44,
          height: 1.5,
          background: 'var(--accent)',
          opacity: 0.55,
          marginTop: 18,
          marginBottom: 22,
          borderRadius: 1,
        }}
      />

      {/* Features */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          flex: 1,
        }}
      >
        {tier.features.map(f => (
          <li
            key={f}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              fontSize: 14,
              lineHeight: 1.5,
              color: 'var(--ink-2)',
            }}
          >
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: featured ? 'var(--accent)' : 'var(--accent-soft)',
                color: featured ? '#fff' : 'var(--accent)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <Check size={10} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={SITE.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className={featured ? 'btn btn-primary' : 'btn btn-ghost'}
        style={{
          marginTop: 28,
          width: '100%',
          justifyContent: 'space-between',
          padding: '13px 20px',
          fontSize: 14,
        }}
      >
        {tier.cta}
        <ArrowUpRight size={15} />
      </a>
    </div>
  );
}

export default HomeServices;
