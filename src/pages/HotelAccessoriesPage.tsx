import { PageHero, CtaBanner, SectionHeading } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { WHATSAPP } from '../lib/data';
import { ArrowRight } from 'lucide-react';

const ACCESSORIES = [
  { name: 'Trekking Poles', price: '₹100/day', img: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Lightweight adjustable poles for mountain treks.' },
  { name: 'Sleeping Bags (-10°C)', price: '₹200/day', img: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Warm, compact sleeping bags for high-altitude camping.' },
  { name: 'Camping Tents (4P)', price: '₹400/day', img: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Waterproof 4-person tents with rain fly.' },
  { name: 'Portable Heater', price: '₹250/day', img: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Electric room heaters for cold Himalayan nights.' },
  { name: 'Thermal Wear Set', price: '₹150/day', img: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Premium thermal innerwear for men & women.' },
  { name: 'Trekking Boots', price: '₹200/day', img: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Grippy, waterproof boots for rugged trails.' },
  { name: 'Rain Poncho', price: '₹80/day', img: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Lightweight ponchos for unpredictable mountain weather.' },
  { name: 'Power Bank (20000mAh)', price: '₹100/day', img: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'High-capacity power banks for off-grid travel.' },
];

export function HotelAccessoriesPage() {
  return (
    <div>
      <PageHero
        title="Hotel Accessories"
        subtitle="Rent everything you need for a comfortable Himalayan stay."
        image="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Hotel Accessories' }]}
      />

      <section className="container-px py-16">
        <Reveal><SectionHeading eyebrow="Rent & Relax" title="Gear & Comfort Rentals" subtitle="Trekking gear, camping equipment, heaters and more — delivered to your stay." /></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACCESSORIES.map((a, i) => (
            <Reveal key={a.name} delay={(i % 4) * 100}>
              <div className="group glass rounded-3xl overflow-hidden card-hover h-full flex flex-col">
                <div className="h-44 overflow-hidden">
                  <img src={a.img} alt={a.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-serif font-semibold text-forest-900 mb-1">{a.name}</h3>
                  <p className="text-sm text-forest-600 mb-4 flex-1">{a.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold-600 font-semibold">{a.price}</span>
                    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold text-xs py-2 px-3">Rent <ArrowRight size={12} /></a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Need Something Specific?" text="From extra blankets to camping stoves — message us and we'll arrange it for your stay." />
    </div>
  );
}
