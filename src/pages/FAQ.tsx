import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const faqs = [
  { q: 'What areas do you cover?', a: 'We provide childcare across Southern Queensland, including Maleny and the Sunshine Coast Hinterland, Brisbane, Toowoomba and the Darling Downs, Tamborine Mountain, and Noosa. If you\'re unsure whether we cover your area, please get in touch.' },
  { q: 'How many children can you care for?', a: 'We cater for 1 to 30+ children, depending on the event and the care required. Our ratios are adjusted based on the ages and needs of the children attending.' },
  { q: 'What qualifications do your team members hold?', a: 'Every team member holds a minimum of a Blue Card (QLD) or Ochre Card (NT), First Aid & CPR certification, and a current public liability insurance policy. Many also hold or are studying towards a Certificate III in Childcare or a related field.' },
  { q: 'Do you style the play space to match our event?', a: 'Yes — we style our play spaces to match your wedding or event colours at no extra cost. This includes rugs, blankets, cushions, teepees, bean bags and more to make it feel like home.' },
  { q: 'Can you accommodate children with special needs or allergies?', a: 'Yes. Care of children with special needs can be accommodated depending on individual requirements. We also have allergy management protocols in place. Please discuss your child\'s needs with us during your connection call.' },
  { q: 'What activities do you provide?', a: 'We plan unlimited activities around the interests of the children attending. This can include crafts, games, outdoor play, relaxation zones, slumber spaces, movies, and more. We can also arrange face painters, jumping castles, character visits and cupcake decorating.' },
  { q: 'How do I book your services?', a: 'Start by booking a complimentary connection call through our contact page. This is a relaxed 15–30 minute chat where we learn about your event and answer your questions. From there, we can guide you through the registration process.' },
  { q: 'Do you provide care for Defence families?', a: 'Yes. We proudly support Australian Defence families with trusted, flexible childcare solutions across Queensland, including on-base events, community events and private functions.' },
];

export default function FAQ() {
  const rootRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    rootRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={rootRef}>
      <div className="page-hero">
        <p className="eyebrow">Little Wonders</p>
        <h1>FAQ</h1>
        <p>A few things you might be wondering.</p>
      </div>
      <div className="content-grid">
        <aside className="side-nav">
          <a href="/about">About Us</a>
          <a href="/our-story">Our Story</a>
          <a href="/wonder-team">Our Wonder Team</a>
          <a href="/values-mission-sustainability">Values, Mission &amp; Sustainability</a>
          <a href="/ratios">Our Ratios</a>
          <a href="/team-safety">Team Safety</a>
          <a href="/faq">FAQ</a>
        </aside>
        <div className="prose reveal" style={{ padding: '40px 44px' }}>
          <p>Here are some of the most common questions we hear from families. If you have a question that isn't answered here, please don't hesitate to get in touch.</p>

          <div style={{ marginTop: 28, display: 'grid', gap: 10 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '18px 20px', background: openIndex === i ? 'var(--sky-pale)' : '#fff', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--ocean)', fontWeight: 500 }}
                >
                  {faq.q}
                  <ChevronDown size={20} strokeWidth={1.5} style={{ flexShrink: 0, transform: openIndex === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s var(--ease)' }} />
                </button>
                {openIndex === i && (
                  <div style={{ padding: '0 20px 18px', fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="button" to="/contact">Book Your Connection Call <ArrowRight size={16} strokeWidth={1.8} /></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
