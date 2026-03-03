import type { Metadata } from 'next';
import Link from 'next/link';
import Animate from '@/components/ui/Animate';
import SectionLabel from '@/components/ui/SectionLabel';
import { content } from '@/lib/content';

export const metadata: Metadata = {
  title: content.pages.home.hero.headline,
};

export default function Home() {
  const { hero } = content.pages.home;
  const services  = content.pages.services.items.slice(0, 4);
  const values    = content.pages.about.values || [];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: 'var(--color-primary)' }}
        className="relative min-h-[100svh] flex items-center overflow-hidden noise"
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(var(--color-white) 1px, transparent 1px), linear-gradient(90deg, var(--color-white) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <Animate animation="fade-up" delay={0}>
            <SectionLabel>{content.business.industry || 'Professional Services'}</SectionLabel>
          </Animate>

          <Animate animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8 max-w-5xl">
              {hero.headline}
            </h1>
          </Animate>

          <Animate animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl">
              {hero.subheadline}
            </p>
          </Animate>

          <Animate animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                style={{ backgroundColor: 'var(--color-accent)' }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-base hover:opacity-90 transition-all duration-200 hover:gap-3"
              >
                {hero.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold text-base border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </Animate>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-primary))' }} />
      </section>

      {/* ── Philosophy bar ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--color-secondary)' }} className="py-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Animate animation="fade-in">
            <p className="text-center text-slate-400 text-sm md:text-base italic leading-relaxed max-w-3xl mx-auto">
              &ldquo;{content.philosophy}&rdquo;
            </p>
          </Animate>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--color-background)' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <Animate animation="fade-up">
              <SectionLabel>What We Do</SectionLabel>
              <h2 style={{ color: 'var(--color-primary)' }} className="text-4xl md:text-5xl font-black tracking-tight max-w-xl">
                {content.pages.services.headline}
              </h2>
            </Animate>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
            {services.map((service, i) => (
              <Animate key={i} animation="fade-up" delay={i * 80}>
                <div
                  className="card-hover group relative p-8 rounded-2xl border overflow-hidden"
                  style={{ backgroundColor: 'var(--color-white)', borderColor: 'var(--color-border)' }}
                >
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                    style={{ backgroundColor: 'var(--color-accent)' }} />

                  <div className="mb-4">
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white text-sm font-black"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 style={{ color: 'var(--color-primary)' }} className="text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--color-muted)' }} className="text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.price && (
                    <p style={{ color: 'var(--color-accent)' }} className="text-sm font-bold">
                      {service.price}
                    </p>
                  )}
                </div>
              </Animate>
            ))}
          </div>

          <Animate animation="fade-up" delay={400}>
            <div className="mt-10 text-center">
              <Link href="/services"
                style={{ color: 'var(--color-accent)' }}
                className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-200">
                All Services →
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── Values / Why Us ──────────────────────────────────────────── */}
      {values.length > 0 && (
        <section style={{ backgroundColor: 'var(--color-primary)' }} className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <Animate animation="fade-up">
              <SectionLabel>Our Foundation</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-xl">
                What We Stand For
              </h2>
            </Animate>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
              {values.map((val, i) => (
                <Animate key={i} animation="fade-up" delay={i * 100}>
                  <div className="border-t border-white/10 pt-6">
                    <div style={{ color: 'var(--color-accent)' }} className="text-4xl font-black mb-4 opacity-40">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{val.title}</h3>
                    <p style={{ color: 'var(--color-muted)' }} className="text-sm leading-relaxed">{val.body}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--color-background)' }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Animate animation="fade-up">
            <div
              className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center noise"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                style={{ backgroundColor: 'var(--color-white)' }} />

              <SectionLabel>Ready?</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 max-w-2xl mx-auto">
                Let&apos;s Build Something That Matters
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                Tell us about your project. We respond within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white font-bold text-base rounded-xl hover:opacity-90 transition-opacity"
                style={{ color: 'var(--color-accent)' }}
              >
                Start a Conversation →
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
