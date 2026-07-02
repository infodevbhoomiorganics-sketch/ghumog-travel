import { PageHero, CtaBanner } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { VIDEOS } from '../lib/data';
import { Youtube } from 'lucide-react';

export function VideoTourPage() {
  return (
    <div>
      <PageHero
        title="Video Tours"
        subtitle="Watch the Himalayas come alive — explore our stays and destinations before you visit."
        image="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Video Tour' }]}
      />

      <section className="container-px pt-10 pb-4">
        <div className="max-w-5xl mx-auto flex justify-center">
          <a
            href="https://www.youtube.com/@ghumog"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
          >
            <Youtube size={18} />
            Visit YouTube Channel
          </a>
        </div>
      </section>

      <section className="container-px py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={(i % 2) * 100}>
              <div className="glass rounded-3xl p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4 px-2">
                  <span className="w-8 h-8 rounded-full bg-forest-800 text-gold-300 flex items-center justify-center text-sm font-semibold font-serif">{i + 1}</span>
                  <h2 className="text-xl md:text-2xl font-serif font-semibold text-forest-900">{v.title}</h2>
                </div>
                <div className="relative w-full overflow-hidden rounded-2xl bg-forest-950" style={{ aspectRatio: '16 / 9' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}?si=${v.si}`}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Loved What You Saw?" text="Book your own Himalayan experience today — stays, transport, and curated packages, all in one place." />
    </div>
  );
}
