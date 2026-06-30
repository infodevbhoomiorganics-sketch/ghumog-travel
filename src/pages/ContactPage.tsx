import { useState } from 'react';
import { PageHero } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { WHATSAPP, PHONE, PHONE_TEL, EMAIL, MAP_EMBED, MAP_LINK, SOCIALS } from '../lib/data';
import { Phone, Mail, MapPin, MessageCircle, Send, Youtube, Facebook, Instagram, Check } from 'lucide-react';

const socialIcon: Record<string, typeof Youtube> = { youtube: Youtube, facebook: Facebook, instagram: Instagram };

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello GhumoG Team,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
    window.open(`https://wa.me/917018939901?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help you plan the perfect Himalayan escape."
        image="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      />

      <section className="container-px py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-2">Send Us a Message</h2>
              <p className="text-sm text-forest-600 mb-6">Fill the form and we'll respond on WhatsApp within minutes.</p>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-forest-700" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-forest-900 mb-2">Message Ready!</h3>
                  <p className="text-sm text-forest-600 mb-5">We've opened WhatsApp with your message. Just hit send!</p>
                  <button onClick={() => setSent(false)} className="btn-outline text-sm">Send Another</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Full Name</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full mt-1 px-4 py-3 rounded-xl bg-forest-50 border border-forest-100 focus:border-forest-400 focus:outline-none text-sm" placeholder="Your name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mt-1 px-4 py-3 rounded-xl bg-forest-50 border border-forest-100 focus:border-forest-400 focus:outline-none text-sm" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Phone</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full mt-1 px-4 py-3 rounded-xl bg-forest-50 border border-forest-100 focus:border-forest-400 focus:outline-none text-sm" placeholder="+91..." />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Message</label>
                    <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full mt-1 px-4 py-3 rounded-xl bg-forest-50 border border-forest-100 focus:border-forest-400 focus:outline-none text-sm resize-none" placeholder="Tell us about your trip plans..." />
                  </div>
                  <button type="submit" className="btn-gold w-full">
                    Send via WhatsApp <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info + map */}
          <Reveal delay={100}>
            <div className="space-y-6">
              <div className="glass rounded-3xl p-8">
                <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <a href={PHONE_TEL} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-forest-800 flex items-center justify-center group-hover:scale-110 transition-transform"><Phone size={20} className="text-gold-300" /></div>
                    <div><div className="text-xs text-forest-500 uppercase tracking-wide">Phone</div><div className="text-forest-900 font-semibold">{PHONE}</div></div>
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-forest-800 flex items-center justify-center group-hover:scale-110 transition-transform"><MessageCircle size={20} className="text-gold-300" /></div>
                    <div><div className="text-xs text-forest-500 uppercase tracking-wide">WhatsApp</div><div className="text-forest-900 font-semibold">+91 70189 39901</div></div>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-forest-800 flex items-center justify-center group-hover:scale-110 transition-transform"><Mail size={20} className="text-gold-300" /></div>
                    <div><div className="text-xs text-forest-500 uppercase tracking-wide">Email</div><div className="text-forest-900 font-semibold break-all">{EMAIL}</div></div>
                  </a>
                  <a href={MAP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-forest-800 flex items-center justify-center group-hover:scale-110 transition-transform"><MapPin size={20} className="text-gold-300" /></div>
                    <div><div className="text-xs text-forest-500 uppercase tracking-wide">Location</div><div className="text-forest-900 font-semibold">Shoghi, Shimla, Himachal Pradesh</div></div>
                  </a>
                </div>
                <div className="flex gap-3 mt-6 pt-6 border-t border-forest-100">
                  {SOCIALS.map((s) => {
                    const Icon = socialIcon[s.icon];
                    return (
                      <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-forest-100 hover:bg-gold-500 hover:text-forest-950 text-forest-700 flex items-center justify-center transition-all" aria-label={s.name}>
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="glass rounded-3xl overflow-hidden h-64">
                <iframe
                  src={MAP_EMBED}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GhumoG Location"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
