import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, FileCheck, HeartPulse, Car } from 'lucide-react';
import { useEffect, useRef } from 'react';

const safetyPoints = [
  { icon: FileCheck, title: 'Verified Qualifications & Checks', text: 'Every team member holds a current Blue Card (QLD) or Ochre Card (NT), First Aid & CPR certification, and undergoes extensive reference checks before joining us.' },
  { icon: ShieldCheck, title: 'Comprehensive Insurance', text: 'All team members hold current public liability insurance, and Little Wonders maintains comprehensive coverage for every event.' },
  { icon: HeartPulse, title: 'Health & Wellbeing', text: 'We follow strict health and hygiene protocols, including allergy management plans and medical condition awareness for every child in our care.' },
  { icon: Car, title: 'Safe Transport', text: 'Team members hold a valid driver\'s licence and drive safe, reliable vehicles with road safety certificates.' },
];

export default function TeamSafety() {
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
        <h1>Team Safety</h1>
        <p>Safety and wellbeing for everyone.</p>
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
          <p>Safety is the foundation of everything we do at Little Wonders. From recruitment through to every event, we maintain rigorous standards to protect the children in our care, our team members, and the families we work with.</p>

          <h2>Our safety standards</h2>
          {safetyPoints.map((s) => (
            <div key={s.title} style={{ marginBottom: 20 }}>
              <h3><s.icon size={18} strokeWidth={1.5} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}

          <h2>Our commitment</h2>
          <p>Every team member is personally recruited and selected in-house by our Director. We don't just check qualifications — we look for people who have the intuition and awareness to spot risks before they become issues, and the warmth to make every child feel safe and secure.</p>
          <p>Our low educator-to-child ratios further enhance safety, ensuring every child is well supervised and every educator can focus on providing attentive, quality care.</p>

          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="button" to="/contact">Book Your Connection Call <ArrowRight size={16} strokeWidth={1.8} /></Link>
            <Link className="button outline" to="/ratios">View Our Ratios</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
