import { content } from '@/lib/content';

export default function Portfolio() {
  const { headline, subheadline, items } = content.pages.portfolio;
  return (
    <div>
      <section style={{ backgroundColor: 'var(--color-primary)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ color: 'var(--color-accent)' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Portfolio</p>
          <h1 className="text-5xl font-black text-white mb-4">{headline}</h1>
          <p className="text-slate-300 text-xl">{subheadline}</p>
        </div>
      </section>
      <section style={{ backgroundColor: 'var(--color-background)' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <div key={i} style={{ borderColor: 'var(--color-border)' }}
                className="rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow">
                <div style={{ backgroundColor: 'var(--color-secondary)' }} className="h-48 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Preview coming soon</span>
                </div>
                <div className="p-6">
                  <h3 style={{ color: 'var(--color-primary)' }} className="font-bold text-xl mb-2">{item.title}</h3>
                  <p style={{ color: 'var(--color-muted)' }} className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
