'use client';

import { useEffect, useRef } from 'react';
import { Search, Zap, Send, ArrowUpRight, Calendar, Mail, Star, TrendingUp, CheckCircle, Globe, Crosshair, Bot, Workflow } from 'lucide-react';
import portfolio from '@/lib/portfolio';

const CALENDLY  = process.env.NEXT_PUBLIC_CALENDLY_URL  || 'https://calendly.com/webbaura/15min';
const EMAIL     = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@webbaura.com';

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
      {/* Glow */}
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
          Built for Melbourne businesses
        </div>

        <h1 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: 24, maxWidth: 780, margin: '0 auto 24px' }}>
          We build your site first.
          <br />
          <span style={{ color: 'var(--accent-light)' }}>You decide if you want it.</span>
        </h1>

        <p className="reveal reveal-delay-2" style={{
          fontSize: 'clamp(17px, 2vw, 20px)', color: 'var(--muted)', lineHeight: 1.65,
          maxWidth: 580, margin: '0 auto 48px',
        }}>
          We analyse your market, build you a production-ready website, then send you the staging link.
          No deposit. No obligation. Just a better website.
        </p>

        <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 16, padding: '15px 32px' }}>
            <Calendar size={17} /> Book a free call
          </a>
          <a href={`mailto:${EMAIL}`} className="btn btn-ghost" style={{ fontSize: 16, padding: '15px 32px' }}>
            <Mail size={17} /> {EMAIL}
          </a>
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
    title: 'We send you the link',
    body: "You get a live staging URL. No invoice. No sales call. If you love it, we talk. If not, keep the insights and move on — no hard feelings.",
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {portfolio.map((item, i) => (
            <div key={item.slug} className={`card reveal reveal-delay-${i + 1}`} style={{ overflow: 'hidden' }}>
              {/* Score bar */}
              <div style={{
                padding: '14px 20px', borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--font-head)' }}>Visual score</span>
                  <span className="score-badge" style={{ background: 'rgba(248,113,113,0.12)', color: 'var(--red)' }}>
                    {item.scoreBefore}/10 before
                  </span>
                  <span style={{ color: 'var(--muted2)' }}>→</span>
                  <span className="score-badge" style={{ background: 'rgba(52,211,153,0.12)', color: 'var(--green)' }}>
                    {item.scoreAfter}/10 after
                  </span>
                </div>
              </div>

              {/* Site preview frame */}
              <div style={{
                height: 200, background: 'var(--bg2)', overflow: 'hidden', position: 'relative',
                borderBottom: '1px solid var(--border)',
              }}>
                <iframe
                  src={item.siteUrl}
                  title={item.name}
                  style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'top left', border: 'none', pointerEvents: 'none' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, var(--bg2) 100%)' }} />
              </div>

              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
                  {item.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-head)',
                      color: 'var(--muted)', background: 'var(--surface)',
                      border: '1px solid var(--border)', borderRadius: 6, padding: '2px 9px',
                    }}>{t}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 8 }}>{item.name}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>
                  {item.description}
                </p>
                <a href={item.siteUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: 'var(--accent-light)', fontFamily: 'var(--font-head)' }}>
                  View site <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}

          {/* Coming soon placeholder */}
          <div className="card reveal reveal-delay-2" style={{
            padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            textAlign: 'center', minHeight: 340, borderStyle: 'dashed',
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <TrendingUp size={22} color="var(--muted2)" />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>
              More builds in progress.<br />
              Each week we add to the portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Globe,
    label: 'Websites',
    title: 'A site that does the work while you sleep',
    body: 'Production-ready, mobile-first websites built for lead capture and local search. Competitive design, clean code, yours to own outright.',
    points: ['Competitor-informed design', 'SEO-ready from day one', 'Core Web Vitals tested'],
  },
  {
    icon: Crosshair,
    label: 'Lead Generation',
    title: 'Know who to call before they call you',
    body: 'We identify local businesses that are losing customers to better-presented competitors, score their digital presence, and build a warm outreach pipeline — ready to act on.',
    points: ['Automated prospect discovery', 'Prioritised by opportunity', 'Personalised outreach at scale'],
  },
  {
    icon: Workflow,
    label: 'Automation',
    title: 'Stop doing manually what a system can do overnight',
    body: 'Custom automation pipelines that handle intake, follow-up, reporting, and internal workflows — so your team focuses on work that actually needs them.',
    points: ['Client intake & onboarding flows', 'CRM and scheduling integrations', 'Reporting and digest automation'],
  },
  {
    icon: Bot,
    label: 'AI Agents',
    title: 'A tireless team member that never misses a message',
    body: 'Custom AI agents that handle enquiries, qualify leads, book appointments, and respond intelligently — trained on your business and available around the clock.',
    points: ['Conversational lead qualification', 'Bookings and FAQ handling', 'Connected to your existing tools'],
  },
];

function Services() {
  return (
    <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
            What we build
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', maxWidth: 480 }}>
              Custom solutions.<br />Real outcomes.
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: 360, lineHeight: 1.7 }}>
              Every engagement starts with understanding what's actually costing you customers — then building the system that fixes it.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                padding: '36px 32px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                transition: 'background 0.2s, border-color 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-hover)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-strong)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'var(--surface)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
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

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--fg2)' }}>
                    <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(52,211,153,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle size={10} color="var(--green)" />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
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
    icon: Search,
    title: 'Grounded in intelligence',
    body: 'Every build starts with competitor analysis — we score local rivals, map design patterns, and identify exactly where your site should differentiate.',
  },
  {
    icon: CheckCircle,
    title: 'Production quality, every time',
    body: 'Next.js, TypeScript, Core Web Vitals tested. Not a page builder. Not a template. A proper codebase you own outright.',
  },
  {
    icon: Star,
    title: 'Zero commitment to see it',
    body: "We show you the finished site on a live staging URL before any money changes hands. The risk is entirely ours.",
  },
];

function WhyDifferent() {
  return (
    <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
            Why Webbaura
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', maxWidth: 520, margin: '0 auto' }}>
            Different by design
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
    <section style={{ padding: '120px 0' }}>
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
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 16, maxWidth: 560, margin: '0 auto 16px' }}>
              Want to see what we'd build for you?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              We'll research your market, build your site, and send you the link — before you spend a dollar.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 16, padding: '15px 32px' }}>
                <Calendar size={17} /> Book a 15-min call
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn-ghost" style={{ fontSize: 16, padding: '15px 32px' }}>
                <Mail size={17} /> Send an email
              </a>
            </div>

            <p style={{ color: 'var(--muted2)', fontSize: 13 }}>
              No sales pitch. No deposit. Just a conversation.
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
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Portfolio />
        <WhyDifferent />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
