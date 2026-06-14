'use client';

interface MarqueeProps {
  items: string[];
  speed?: 'slow' | 'normal' | 'fast';
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * Infinite CSS marquee. The track contains TWO identical copies of the items;
 * we animate translateX from 0 to -50% so the seam is invisible. No gap on
 * the parent — spacing is on the items themselves so the math stays clean.
 */
export function Marquee({ items, speed = 'normal', tone = 'dark', className }: MarqueeProps) {
  const duration = speed === 'slow' ? 60 : speed === 'fast' ? 22 : 38;
  const fg = tone === 'dark' ? 'rgba(255,255,255,0.62)' : 'var(--muted)';
  const dot = tone === 'dark' ? 'rgba(255,255,255,0.30)' : 'var(--line-strong)';

  const Row = ({ ariaHidden }: { ariaHidden?: boolean }) => (
    <ul
      aria-hidden={ariaHidden}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      {items.map((it, i) => (
        <li
          key={i}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: fg,
            fontFamily: 'var(--font-display)',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            paddingLeft: 28,
            paddingRight: 28,
          }}
        >
          {it}
          <span
            aria-hidden
            style={{
              marginLeft: 28,
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: dot,
              display: 'inline-block',
            }}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
        maskImage:
          'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          animationDuration: `${duration}s`,
        }}
      >
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}

export default Marquee;
