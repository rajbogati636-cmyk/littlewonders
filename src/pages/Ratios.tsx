import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ratioTable = [
  { age: '0–2 years (Babies)', ratio: '1:2', desc: 'One educator for every two babies. Maximum individual attention and care.' },
  { age: '2–3 years (Toddlers)', ratio: '1:4', desc: 'One educator for every four toddlers. Balanced supervision and engagement.' },
  { age: '3–5 years (Kindergarten)', ratio: '1:6', desc: 'One educator for every six children. Room for activities, play and learning.' },
  { age: '5+ years (School age)', ratio: '1:8', desc: 'One educator for every eight children. Freedom for games and social play.' },
];

export default function Ratios() {
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
        <h1>Our Ratios</h1>
        <p>More individual attention and peace of mind.</p>
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
          <p>At Little Wonders, we maintain lower educator-to-child ratios than standard childcare requirements. This means more individual attention for every child, better supervision, and greater peace of mind for families.</p>

          <h2>Our ratios by age group</h2>
          <div style={{ display: 'grid', gap: 16, margin: '20px 0' }}>
            {ratioTable.map((row) => (
              <div key={row.age} style={{ background: 'var(--sky-pale)', borderRadius: 'var(--radius)', padding: '20px 24px', display: 'grid', gridTemplateColumns: 'auto auto 1fr', gap: 16, alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--ocean)', fontWeight: 500, whiteSpace: 'nowrap' }}>{row.ratio}</span>
                <span style={{ fontSize: 13, color: 'var(--ink-soft)', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.age}</span>
                <span style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{row.desc}</span>
              </div>
            ))}
          </div>

          <h2>Why our ratios matter</h2>
          <p>Lower ratios mean our educators can truly get to know each child — their personality, their needs, their interests. It means safer supervision, more meaningful interactions, and the ability to notice when a little one needs extra attention or a quiet moment.</p>
          <p>For parents, it means knowing your child isn't just one of many. They're seen, known and cared for as an individual.</p>

          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="button" to="/contact">Book Your Connection Call <ArrowRight size={16} strokeWidth={1.8} /></Link>
            <Link className="button outline" to="/team-safety">Learn About Team Safety</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
