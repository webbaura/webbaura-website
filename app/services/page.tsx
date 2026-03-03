import type { Metadata } from 'next';
import Link from 'next/link';
import Animate from '@/components/ui/Animate';
import SectionLabel from '@/components/ui/SectionLabel';
import { content } from '@/lib/content';

export const metadata: Metadata = { title: 'Services' };

export default function Services() {
  const { headline, subheadline, items } = content.pages.services;
  return (
    <>
      <section style={{ backgroundColor: 'var(--color-primary)' }} className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Animate animation="fade-up"><SectionLabel>What We Offer</SectionLabel></Animate>
          <Animate animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight max-w-3xl">{headline}</h1>
          </Animate>
          <Animate animation="fade-up" delay={200}>
            <p className="text-slate-300 text-xl mt-6 max-w-2xl">{subheadline}</p>
          </Animate>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-background)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((s, i) => (
              <Animate key={i} animation="fade-up" delay={i * 60}>
                <div className="card-hover group relative p-8 rounded-2xl border overflow-hidden h-full"
                  style={{ backgroundColor: 'var(--color-white)', borderColor: 'var(--color-border)' }}>
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white text-xs font-black mb-5"
                    style={{ backgroundColor: 'var(--color-accent)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 style={{ color: 'var(--color-primary)' }} className="text-2xl font-bold mb-3">{s.title}</h2>
                  <p style={{ color: 'var(--color-muted)' }} className="leading-relaxed mb-5">{s.description}</p>
                  {s.price && <p style={{ color: 'var(--color-accent)' }} className="font-bold">{s.price}</p>}
                </div>
              </Animate>
            ))}
          </div>

          <Animate animation="fade-up" delay={300}>
            <div className="mt-16 text-center">
              <p style={{ color: 'var(--color-muted)' }} className="text-lg mb-6">Ready to get started?</p>
              <Link href="/contact" style={{ backgroundColor: 'var(--color-accent)' }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
                Start a Project →
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
