'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeCopy } from '@/lib/homepageCopy';
import { Reveal } from '@/components/ui/Reveal';

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HomeFAQ() {
  const c = homeCopy.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        background: 'var(--cream)',
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(72px, 10vw, 120px)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 40,
          }}
          className="md:grid-cols-[1fr_1.6fr] md:gap-16"
        >
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              {c.eyebrow}
            </p>
            <h2
              style={{
                fontSize: 'clamp(34px, 5vw, 60px)',
                lineHeight: 1.04,
                marginBottom: 16,
              }}
            >
              {c.headline}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 320 }}>
              Still wondering something not covered here?{' '}
              <a
                href="#contact"
                style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'underline' }}
              >
                Ask on a call
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}
            >
              {c.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={item.q}
                    style={{
                      borderBottom:
                        i < c.items.length - 1 ? '1px solid var(--line)' : 'none',
                    }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        textAlign: 'left',
                        padding: '22px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 16,
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: 17,
                          lineHeight: 1.35,
                          color: 'var(--ink)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.q}
                      </span>
                      <span
                        aria-hidden
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          background: isOpen ? 'var(--accent)' : 'var(--cream-2)',
                          color: isOpen ? '#fff' : 'var(--ink)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'background-color 0.2s ease, color 0.2s ease',
                        }}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: easeOut }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p
                            style={{
                              padding: '0 24px 24px 24px',
                              color: 'var(--muted)',
                              fontSize: 15,
                              lineHeight: 1.7,
                              maxWidth: 640,
                            }}
                          >
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default HomeFAQ;
