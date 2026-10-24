import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Heart, Sparkles, Home, Calendar, Baby, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

const careTypes = [
  { icon: Home, title: 'In-Home Care', desc: 'Care in the comfort of your own home, tailored to your family\'s routine and needs.' },
  { icon: Calendar, title: 'Event Care', desc: 'Onsite childcare at weddings, parties, corporate events and celebrations.' },
  { icon: Baby, title: 'Babysitting', desc: 'Flexible, one-on-one babysitting for evenings, weekends or special occasions.' },
  { icon: Users, title: 'Group Bookings', desc: 'Care for multiple children at gatherings, functions and group events.' },
];

const inclusions = [
  'Flexible care based on your preferences',
  'Activities planned around your children\'s interests',
  'Comfort styling — rugs, cushions, teepees and more',
  'Slumber spaces with bedding and linen included',
  'Care of children with special needs accommodated',
  'Face painters, jumping castles and character visits available',
];

export default function CareOptions() {
  const rootRef = useRef<HTMLElement>(null);

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
        <h1>Care Options</h1>
        <p>Flexible childcare, tailored to your family.</p>
      </div>

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '70px 28px 110px' }}>
        <section className="reveal" style={{ marginBottom: 60 }}>
          <p className="eyebrow">Care, made personal</p>
          <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', marginTop: 10, marginBottom: 16 }}>A range of care options for every family and occasion.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ocean)', maxWidth: 720, marginBottom: 14 }}>From in-home babysitting to full event childcare, Little Wonders offers flexible solutions designed around your family's needs.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 720 }}>Whatever the occasion, we make sure the children are safe, happy and creating memories of their own — so you can relax and enjoy.</p>
        </section>

        <section className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginBottom: 60 }}>
          {careTypes.map((ct) => (
            <div key={ct.title} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '28px 24px', transition: 'all 0.3s var(--ease)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-7px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, background: 'var(--sky-pale)', borderRadius: 'var(--radius)', color: 'var(--ocean)', marginBottom: 16 }}>
                <ct.icon size={26} strokeWidth={1.5} />
              </span>
              <h3 style={{ fontSize: 19, marginBottom: 8 }}>{ct.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{ct.desc}</p>
            </div>
          ))}
        </section>

        <section className="reveal" style={{ background: 'var(--cream-warm)', borderRadius: 'var(--radius-xl)', padding: '48px 40px', marginBottom: 50 }}>
          <p className="eyebrow centered">Inclusions</p>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', textAlign: 'center', marginTop: 8 }}>What's included in our care</h2>
          <p style={{ textAlign: 'center', color: 'var(--ocean)', fontSize: 15, lineHeight: 1.6, maxWidth: 500, margin: '14px auto 28px' }}>Our care packages can include multiple options, all tailored to your preferences.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 26px', maxWidth: 820, margin: '0 auto' }}>
            {inclusions.map((inc) => (
              <div key={inc} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14, lineHeight: 1.55, color: 'var(--ocean)' }}>
                <CheckCircle2 size={18} strokeWidth={1.8} style={{ color: 'var(--sage)', flexShrink: 0, marginTop: 1 }} />
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal" style={{ textAlign: 'center', padding: '50px 20px', background: 'var(--sky-pale)', borderRadius: 'var(--radius-xl)' }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', marginBottom: 14 }}>Ready to explore your options?</h2>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', marginBottom: 24 }}>Book a complimentary connection call and we'll help you find the right care for your family.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="button" to="/contact">Book Your Connection Call <ArrowRight size={16} strokeWidth={1.8} /></Link>
            <Link className="button outline" to="/parent-registration">Parent Registration</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
