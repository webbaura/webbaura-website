'use client';

import { useEffect, useState } from 'react';
import { Search, Zap, Send, ArrowUpRight, Calendar, Mail, Star, CheckCircle, Globe, Crosshair, Bot, Workflow, Quote } from 'lucide-react';
import portfolio from '@/lib/portfolio';

const CALENDLY  = process.env.NEXT_PUBLIC_CALENDLY_URL  || 'https://calendly.com/aaronlevin98/free-consultation';
const EMAIL     = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'aaronjlevin@outlook.com';

// ── Stats hook — fetches live build count from build server ──────────────────
function useStats() {
  const [stats, setStats] = useState<{ sitesRebuilt: number } | null>(null);
  useEffect(() => {
    fetch('https://tools.webbaura.com/stats')
      .then(r => r.json())
      .then(setStats)
      .catch(() => setStats({ sitesRebuilt: 5 })); // fallback
  }, []);
  return stats;
}

// ── Scroll reveal hook ────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io  = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid var(--border)',
      background: 'rgba(13,13,16,0.82)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 18, letterSpacing: '-0.03em', color: 'var(--fg)' }}>
          web<span style={{ color: 'var(--accent)' }}>baura</span>
        </div>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: 14 }}>
          Book a call
        </a>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ paddingTop: 160, paddingBottom: 120, position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,106,247,0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <div className="reveal" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--accent-subtle)', border: '1px solid rgba(124,106,247,0.28)',
          borderRadius: 99, padding: '5px 14px', marginBottom: 32,
          fontSize: 13, fontWeight: 600, color: 'var(--accent-light)',
          fontFamily: 'var(--font-head)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          Melbourne · Websites that work for you 24/7
        </div>

        <h1 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', marginBottom: 24, maxWidth: 760, margin: '0 auto 24px', lineHeight: 1.1 }}>
          Your website should be your
          <br />
          <span style={{ color: 'var(--accent-light)' }}>best salesperson.</span>
        </h1>

        <p className="reveal reveal-delay-2" style={{
          fontSize: 'clamp(16px, 1.8vw, 19px)', color: 'var(--muted)', lineHeight: 1.7,
          maxWidth: 580, margin: '0 auto 48px',
        }}>
          Most small business websites sit there looking presentable while doing nothing.
          A good website earns trust, answers the right questions, and turns visitors
          into enquiries — on any device, at any hour, without you lifting a finger.
        </p>

        <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 16, padding: '15px 32px' }}>
            <Calendar size={17} /> Book a free call
          </a>
          <a href="#what-your-site-should-do" className="btn btn-ghost" style={{ fontSize: 16, padding: '15px 32px' }}>
            See how it works <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Trust strip ───────────────────────────────────────────────────────────────
function TrustStrip({ sitesRebuilt }: { sitesRebuilt: number }) {
  const stats = [
    {
      value: sitesRebuilt > 0 ? `${sitesRebuilt}+` : '50+',
      label: 'Melbourne businesses',
      sublabel: 'with better websites',
    },
    {
      value: 'Mobile',
      label: 'First, always',
      sublabel: '70%+ of searches are mobile',
    },
    {
      value: 'Yours',
      label: 'Full code ownership',
      sublabel: 'no lock-in, ever',
    },
    {
      value: '★ 5.0',
      label: 'Client rating',
      sublabel: 'see it before you pay',
      accent: true,
    },
  ];

  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg2)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 0,
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '28px 24px',
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-head)',
                fontSize: 'clamp(24px, 3vw, 34px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: s.accent ? 'var(--amber)' : 'var(--fg)',
                marginBottom: 4,
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg2)', fontFamily: 'var(--font-head)', marginBottom: 2 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted2)' }}>
                {s.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Testimonial ───────────────────────────────────────────────────────────────
const TESTIMONIAL = {
  quote: "Aaron doesn't waste your time. He looked at what we were trying to communicate, understood it, and built something that actually reflects the standard of the work we do. No lengthy briefs, no back-and-forth on things that shouldn't need explaining. Clean code, fast delivery, and the site has performed exactly as intended since day one.",
  name:  'Leon',
  role:  'Director',
  org:   'Combined Arms Consulting',
  stars: 5,
};

function Testimonial() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="reveal" style={{ maxWidth: 780, margin: '0 auto' }}>
          <div className="card" style={{
            padding: 'clamp(32px, 5vw, 56px)',
            background: 'linear-gradient(135deg, rgba(124,106,247,0.06) 0%, var(--surface) 100%)',
            borderColor: 'rgba(124,106,247,0.16)',
            position: 'relative',
          }}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 24 }}>
              {Array.from({ length: TESTIMONIAL.stars }).map((_, i) => (
                <Star key={i} size={16} fill="var(--amber)" color="var(--amber)" />
              ))}
            </div>

            {/* Quote icon */}
            <div style={{ position: 'absolute', top: 32, right: 36, opacity: 0.08 }}>
              <Quote size={64} color="var(--accent)" />
            </div>

            <blockquote style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: 1.75,
              color: 'var(--fg2)',
              fontStyle: 'normal',
              marginBottom: 32,
              position: 'relative',
            }}>
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {/* Avatar initial */}
              <div style={{
                width: 42, height: 42, borderRadius: '50%',
                background: 'var(--accent-subtle)',
                border: '1px solid rgba(124,106,247,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 16,
                color: 'var(--accent-light)', flexShrink: 0,
              }}>
                {TESTIMONIAL.name[0]}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-head)', color: 'var(--fg)' }}>
                  {TESTIMONIAL.name}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                  {TESTIMONIAL.role}, {TESTIMONIAL.org}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Education — what a website should do ──────────────────────────────────────
const WEBSITE_TRUTHS = [
  {
    number: '01',
    heading: 'It should answer the question before they think to ask it.',
    body: 'When someone finds your business online, they have a specific need and a short attention span. A good website anticipates what they\'re wondering — "Can they do my job?", "Are they reliable?", "How do I contact them?" — and answers it immediately, in plain language. Anything that makes them work for that answer is working against you.',
  },
  {
    number: '02',
    heading: 'It should make one thing easier than everything else.',
    body: 'For a plumber, that\'s a phone call. For a real estate agent, it\'s a valuation request. For a restaurant, it\'s a reservation. Every good website has a single primary action it\'s designed to produce, and every element on the page either supports that action or shouldn\'t be there. When a site tries to do everything, it does nothing particularly well.',
  },
  {
    number: '03',
    heading: 'It should earn trust before it asks for anything.',
    body: 'Visitors don\'t know you. They\'ve been burned by businesses that looked professional online and weren\'t. The sites that convert are the ones that show real evidence — genuine reviews, specific credentials, a clear location, a face behind the business. Trust isn\'t claimed with language. It\'s shown with proof.',
  },
  {
    number: '04',
    heading: 'It should reflect what makes you worth choosing.',
    body: 'There are other businesses in your industry within your area. A visitor comparing you to them will make a decision in seconds based on first impressions. That impression should communicate exactly what makes you different — your speed, your specialisation, your track record, your standards. If it doesn\'t, you\'re leaving the decision to chance.',
  },
];

function WhatYourSiteShouldDo() {
  return (
    <section id="what-your-site-should-do" style={{ borderTop: '1px solid var(--border)', padding: '120px 0' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 80 }}>
          <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
            What a good website does
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', maxWidth: 560, lineHeight: 1.15 }}>
            Most sites look the part.
            <br />
            <span style={{ color: 'var(--muted)' }}>Few actually do the job.</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {WEBSITE_TRUTHS.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '32px',
                padding: '48px 0',
                borderBottom: i < WEBSITE_TRUTHS.length - 1 ? '1px solid var(--border)' : 'none',
                alignItems: 'start',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-head)',
                fontSize: 13,
                fontWeight: 700,
                color: 'var(--accent-light)',
                letterSpacing: '0.06em',
                paddingTop: 6,
              }}>
                {t.number}
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', marginBottom: 16, lineHeight: 1.3, maxWidth: 640 }}>
                  {t.heading}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, maxWidth: 640 }}>
                  {t.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How it works ──────────────────────────────────────────────────────────────
const STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'We analyse your market',
    body: 'We score your current site and map your local competitors — design benchmarks, positioning gaps, what the best-performing sites in your industry actually do.',
  },
  {
    icon: Zap,
    number: '02',
    title: 'We build your new site',
    body: 'A complete, production-ready website — proper Next.js, TypeScript, mobile-first, Core Web Vitals tested. Built overnight, not in six weeks.',
  },
  {
    icon: Send,
    number: '03',
    title: 'You get the link — and the code',
    body: "A live staging URL lands in your inbox. If you love it, we talk. If not, move on with no obligation. Either way, you keep full ownership of everything built.",
  },
];

function HowItWorks() {
  return (
    <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
            How it works
          </p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}>Three steps. No surprises.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {STEPS.map((step, i) => (
            <div key={i} className={`card reveal reveal-delay-${i + 1}`} style={{ padding: 36, position: 'relative' }}>
              <div style={{
                position: 'absolute', top: 28, right: 28,
                fontFamily: 'var(--font-head)', fontSize: 13, fontWeight: 700,
                color: 'var(--muted2)',
              }}>
                {step.number}
              </div>
              <div style={{
                width: 44, height: 44, borderRadius: 10, marginBottom: 24,
                background: 'var(--accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <step.icon size={20} color="var(--accent-light)" />
              </div>
              <h3 style={{ fontSize: 19, marginBottom: 12 }}>{step.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Portfolio ─────────────────────────────────────────────────────────────────
function Portfolio() {
  return (
    <section>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
            Our work
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', maxWidth: 500 }}>
              Sites built by Webbaura
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 360 }}>
              Each site is built from scratch, grounded in competitive analysis, tested before delivery.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          {portfolio.map((item, i) => (
            <div
              key={item.slug}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: 'var(--surface)',
                borderRight: '1px solid var(--border)',
                display: 'flex', flexDirection: 'column',
                transition: 'background 0.2s',
              }}
            >
              {/* Screenshot — consistent height for all cards */}
              <div style={{ height: 220, background: 'var(--bg2)', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/portfolio/${item.slug}.jpg`}
                  alt={`${item.name} website`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                  loading="lazy"
                />
                {/* Industry pill overlaid on screenshot */}
                <div style={{
                  position: 'absolute', top: 14, left: 14,
                  background: 'rgba(13,13,16,0.72)', backdropFilter: 'blur(8px)',
                  border: '1px solid var(--border)', borderRadius: 99,
                  padding: '4px 12px', fontSize: 11, fontWeight: 700,
                  fontFamily: 'var(--font-head)', color: 'var(--fg2)',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  {item.industry}
                </div>
              </div>

              {/* Content — consistent structure for all cards */}
              <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Tags row */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                  {item.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-head)',
                      color: 'var(--muted)', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border)', borderRadius: 5, padding: '2px 8px',
                      letterSpacing: '0.04em',
                    }}>{t}</span>
                  ))}
                  {/* Score chip — inline, same visual weight as tags */}
                  {item.scoreBefore != null && item.scoreAfter != null && (
                    <span style={{
                      fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-head)',
                      color: 'var(--green)', background: 'rgba(52,211,153,0.1)',
                      border: '1px solid rgba(52,211,153,0.2)', borderRadius: 5, padding: '2px 8px',
                    }}>
                      {item.scoreBefore} → {item.scoreAfter}/10
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: 17, marginBottom: 10, lineHeight: 1.3 }}>{item.name}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, flex: 1 }}>
                  {item.description}
                </p>

                {/* Footer row — location + link, always at bottom */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 12, color: 'var(--muted2)', fontFamily: 'var(--font-head)' }}>
                    {item.location}
                  </span>
                  <a
                    href={item.siteUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: 'var(--accent-light)', fontFamily: 'var(--font-head)' }}
                  >
                    View site <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Globe,
    label: 'Website',
    title: 'A site that turns visitors into enquiries',
    body: 'Designed specifically for your business, your customers, and your location. Built to rank locally, load fast on mobile, and make the right action obvious — whether that\'s a call, a booking, or a form submission.',
    points: ['Designed for your primary conversion goal', 'Local SEO built in from day one', 'Live staging before you pay a cent'],
    price: 'From $1,500',
  },
  {
    icon: Zap,
    label: 'Website + Google',
    title: 'Visible to the right people at the right time',
    body: 'Your website paired with a fully optimised Google Business Profile — the combination that gets local businesses into the Maps pack. The two work together. One without the other is half the job.',
    points: ['GMB setup and optimisation', 'Review generation strategy', 'Monthly local search report'],
    price: 'From $2,200',
  },
  {
    icon: Workflow,
    label: 'Growth Package',
    title: 'A system that keeps working after launch',
    body: 'For businesses that want more than a good-looking site. Monthly updates, performance tracking, conversion improvements, and ongoing support — so your site gets better over time, not stale.',
    points: ['Monthly performance review', 'Copy and design updates', 'Priority support'],
    price: 'From $350/month',
  },
  {
    icon: Bot,
    label: 'AI Enquiry Agent',
    title: 'Every message answered, every lead captured',
    body: 'A custom AI agent that responds to enquiries on your site around the clock. Qualifies leads, answers common questions, and books appointments — so you wake up to warm leads, not missed opportunities.',
    points: ['Trained on your services and pricing', 'Hands off to you at the right moment', 'Works while you\'re on the tools'],
    price: 'From $800 + setup',
  },
];

function Services() {
  return (
    <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
            Packages
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', maxWidth: 480 }}>
              Simple options.<br />Clear outcomes.
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 380, lineHeight: 1.7 }}>
              Every package starts with understanding what your business actually needs to grow — not what sounds good on a features list.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 1,
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                padding: '36px 32px',
                background: 'var(--surface)',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-hover)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--surface)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 9,
                  background: 'var(--accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <s.icon size={17} color="var(--accent-light)" />
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-head)',
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)',
                }}>
                  {s.label}
                </span>
              </div>

              <h3 style={{ fontSize: 18, marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>{s.body}</p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                {s.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--fg2)' }}>
                    <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(52,211,153,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle size={10} color="var(--green)" />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              {(s as any).price && (
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent-light)', fontFamily: 'var(--font-head)', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                  {(s as any).price}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why different ─────────────────────────────────────────────────────────────
const REASONS = [
  {
    icon: CheckCircle,
    title: 'You see it before you pay',
    body: 'A live staging site is built and sent to you before any invoice is raised. You decide if it works for your business. If it doesn\'t, keep the research — the risk is ours.',
  },
  {
    icon: Globe,
    title: 'Built for mobile first',
    body: 'More than 70% of local searches happen on a phone. Every site we build is designed on mobile first — fast, thumb-friendly, and easy to navigate with one hand. Desktop looks great too, but mobile is where your customers actually are.',
  },
  {
    icon: Star,
    title: 'No lock-in',
    body: 'You own the code outright. No platform subscriptions, no ongoing fees unless you choose them, no asking permission to make changes. It\'s yours from day one.',
  },
];

function WhyDifferent() {
  return (
    <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
            How we work
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', maxWidth: 520, margin: '0 auto' }}>
            Your interest first.
            <br />Always.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {REASONS.map((r, i) => (
            <div key={i} className={`card reveal reveal-delay-${i + 1}`} style={{ padding: 32 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 9, marginBottom: 20,
                background: 'var(--accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <r.icon size={18} color="var(--accent-light)" />
              </div>
              <h3 style={{ fontSize: 17, marginBottom: 10 }}>{r.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{ padding: '120px 0', overflow: 'hidden' }}>
      <div className="container">
        <div className="reveal" style={{ position: 'relative' }}>
          {/* Glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500, height: 300, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(124,106,247,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="card" style={{
            padding: 'clamp(40px, 6vw, 80px)',
            textAlign: 'center',
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(124,106,247,0.08) 0%, var(--surface) 100%)',
            borderColor: 'rgba(124,106,247,0.2)',
          }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 16, maxWidth: 600, margin: '0 auto 16px', lineHeight: 1.15 }}>
              See what your site could look like — before you commit to anything.
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              We&apos;ll have a 15-minute conversation about your business. If it&apos;s a good fit, we&apos;ll show you what we&apos;d build — no obligation, no deposit.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 16, padding: '15px 32px' }}>
                <Calendar size={17} /> Book a free call
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn-ghost" style={{ fontSize: 16, padding: '15px 32px' }}>
                <Mail size={17} /> Send an email
              </a>
            </div>

            <p style={{ color: 'var(--muted2)', fontSize: 13 }}>
              Melbourne-based · Typically respond within a few hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em' }}>
          web<span style={{ color: 'var(--accent)' }}>baura</span>
        </div>
        <p style={{ color: 'var(--muted2)', fontSize: 13 }}>
          © {new Date().getFullYear()} Webbaura · Melbourne, Australia
        </p>
        <a href={`mailto:${EMAIL}`} style={{ color: 'var(--muted)', fontSize: 13, fontFamily: 'var(--font-head)' }}>
          Get in touch
        </a>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  useReveal();
  const stats = useStats();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip sitesRebuilt={stats?.sitesRebuilt ?? 0} />
        <WhatYourSiteShouldDo />
        <Testimonial />
        <Services />
        <Portfolio />
        <WhyDifferent />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
