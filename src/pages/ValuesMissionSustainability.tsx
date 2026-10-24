import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Leaf, Target, ShieldCheck } from 'lucide-react';
import { useEffect, useRef } from 'react';

const values = [
  { icon: ShieldCheck, title: 'Safe', text: 'Safety is at the heart of everything we do. Low ratios, qualified educators and elevated safety standards give families peace of mind.' },
  { icon: Heart, title: 'Warm', text: 'We genuinely get to know every family and every child. Care should feel personal, not transactional.' },
  { icon: Target, title: 'Professional', text: 'Experienced, reliable and dedicated to exceptional service. We hold ourselves to the highest standards.' },
];

const sustainabilityPoints = [
  'Reusable and eco-friendly play materials wherever possible',
  'Minimal waste approach to event styling and setup',
  'Respect for the natural environments and venues we work in',
  'Supporting local businesses and communities across Queensland',
];

export default function ValuesMissionSustainability() {
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
        <h1>Values, Mission &amp; Sustainability</h1>
        <p>What guides the way we work.</p>
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
        <div className="prose reveal">
          <p>Everything we do at Little Wonders is guided by a commitment to safe, warm and professional care — for children, for families, and for the world around us.</p>

          <h2>Our values</h2>
          {values.map((v) => (
            <div key={v.title} style={{ marginBottom: 20 }}>
              <h3><v.icon size={18} strokeWidth={1.5} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}

          <h2>Our mission</h2>
          <p>To provide beautifully considered childcare that allows families to be fully present at the moments that matter most — weddings, events and celebrations — knowing their children are safe, happy and cared for by people who genuinely love what they do.</p>

          <h2><Leaf size={18} strokeWidth={1.5} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />Sustainability</h2>
          <p>We are mindful of our impact on the environments and communities we work in. Our approach to sustainability includes:</p>
          <ul>
            {sustainabilityPoints.map((s) => <li key={s}>{s}</li>)}
          </ul>

          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="button" to="/contact">Book Your Connection Call <ArrowRight size={16} strokeWidth={1.8} /></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
