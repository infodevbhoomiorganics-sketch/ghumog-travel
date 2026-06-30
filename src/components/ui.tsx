import { Link } from '../lib/router';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP } from '../lib/data';

export function PageHero({ title, subtitle, image, breadcrumb }: { title: string; subtitle?: string; image: string; breadcrumb?: { label: string; to?: string }[] }) {
  return (
    <section className="relative h-[52vh] min-h-[360px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-900/50 to-forest-950/80" />
      </div>
      <div className="relative z-10 text-center text-white container-px">
        {breadcrumb && (
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.to ? <Link to={b.to} className="hover:text-gold-300 transition-colors">{b.label}</Link> : <span className="text-gold-300">{b.label}</span>}
                {i < breadcrumb.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-3 animate-fade-up">{title}</h1>
        {subtitle && <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '120ms' }}>{subtitle}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-12`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-forest-900 mb-4">{title}</h2>
      {subtitle && <p className="text-forest-600 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function CtaBanner({ title, text }: { title: string; text: string }) {
  return (
    <section className="container-px py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-800 to-forest-950 px-8 py-16 md:px-16 md:py-20 text-center">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-forest-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-white mb-4">{title}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">{text}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold">
              Plan Your Trip <ArrowRight size={16} />
            </a>
            <a href="tel:+917018939901" className="btn-outline border-white/30 text-white hover:bg-white hover:text-forest-900 hover:border-white">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
