import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Calendar, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function OurStory() {
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
        <h1>Our Story</h1>
        <p>Where it all began.</p>
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
          <p>Little Wonders was founded in September 2013 with a simple belief — that families deserve childcare they can trust completely, and that children deserve care that feels warm, personal and genuinely joyful.</p>

          <h2>How it began</h2>
          <p>Our founder saw a gap in the market for premium, personalised childcare at weddings and events. Too often, parents were torn between celebrating and worrying about their little ones. Little Wonders was created to solve that — to give families the freedom to be fully present, knowing their children are safe, happy and creating memories of their own.</p>

          <h2>Growing across Queensland</h2>
          <p>What started as a small, passionate service has grown to cover Southern Queensland's most beautiful wedding and event locations — from the rolling hills of Maleny to Brisbane, Toowoomba, Tamborine Mountain and beyond.</p>

          <h2>Our commitment today</h2>
          <p>Today, Little Wonders continues to be built around the same values that started it all: safe, warm and professional care. Every team member is personally selected, every family is genuinely known, and every event is approached with the same dedication that has earned us the trust of families across the region.</p>

          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="button" to="/wonder-team">Meet Our Wonder Team <ArrowRight size={16} strokeWidth={1.8} /></Link>
            <Link className="button outline" to="/contact">Book Your Connection Call</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
