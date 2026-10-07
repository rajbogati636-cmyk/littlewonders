import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, Sparkles, UsersRound, Gift, ArrowRight, Phone, CheckCircle2, CalendarHeart, Briefcase, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

const weddingFeatures = [
  'Personalised care tailored to your celebration',
  'Play spaces styled to match your wedding colours',
  'We connect with your little guests before the big day',
  'Low ratios, qualified educators & elevated safety',
];

const corporateFeatures = [
  'Onsite, offsite or in-home care options',
  'Re-occurring or once-off bookings',
  'Free event portal for your guests',
  'Flexible care for any business size',
];

const defenceFeatures = [
  'Trusted childcare for Defence families',
  'Flexible solutions across Queensland',
  'On-base, off-base & community events',
  'Security clearance coordination',
];

export default function Home() {
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
    <main id="top" ref={rootRef}>
      {/* Full-bleed hero */}
      <section className="hero-full">
        <div className="hero-full-image">
          <div className="hero-stamp">SAFE<br /><b>·</b><br />JOYFUL<br /><b>·</b><br />THOUGHTFUL</div>
        </div>
        <div className="hero-full-content">
          <span className="hero-kicker">For beautiful celebrations &amp; the little people you love</span>
          <p className="eyebrow">Premium childcare for families, weddings &amp; events<br />across Southern Queensland</p>
          <h1>Care that makes<br /><em>every moment.</em></h1>
          <div className="hero-script">More present for what matters most.</div>
          <p>Thoughtfully tailored childcare experiences for families, weddings and events across Southern Queensland, so you can be fully present — knowing the little people are safe, happy and creating memories of their own.</p>
          <div className="actions">
            <Link className="button" to="/contact">
              Book Your Connection Call <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
            <Link className="button outline" to="/#services">Explore Our Services</Link>
          </div>
          <div className="hero-note"><span>✦</span> Beautifully considered care, wherever life takes you</div>
        </div>
      </section>

      {/* Features strip */}
      <section className="features reveal">
        <div><ShieldCheck size={30} strokeWidth={1.5} /><b>Safe Hands</b><p>Low ratios, qualified educators &amp; elevated safety standards.</p></div>
        <div><Heart size={30} strokeWidth={1.5} /><b>Warm Hearts</b><p>We genuinely get to know every family and every child.</p></div>
        <div><Award size={30} strokeWidth={1.5} /><b>Professional Care</b><p>Experienced, reliable &amp; dedicated to exceptional service.</p></div>
        <div><Sparkles size={30} strokeWidth={1.5} /><b>Beautifully Styled</b><p>We style our play spaces to match your wedding colours at no extra cost.</p></div>
        <div><UsersRound size={30} strokeWidth={1.5} /><b>Guest Connect</b><p>We connect with your little guests before the big day.</p></div>
        <div><Gift size={30} strokeWidth={1.5} /><b>Memories to Keep</b><p>Every child takes home their own special memories.</p></div>
      </section>

      {/* Wedding Childcare — alternating row */}
      <section className="alt-section reveal" id="services">
        <div className="alt-image">
          <div className="alt-image-bg" style={{ backgroundImage: "url('/assets/wedding-children.jpg')" }} />
          <div className="alt-image-badge"><Heart size={18} strokeWidth={1.5} /> Wedding Childcare</div>
        </div>
        <div className="alt-copy cream">
          <p className="eyebrow">Our services</p>
          <h2>Wedding Childcare</h2>
          <p>From intimate gatherings to grand celebrations, we create personalised wedding childcare experiences across Southern Queensland so you can relax, celebrate and enjoy every moment.</p>
          <ul className="alt-features">
            {weddingFeatures.map((f) => (
              <li key={f}><CheckCircle2 size={17} strokeWidth={1.8} /> {f}</li>
            ))}
          </ul>
          <div className="actions">
            <Link className="button" to="/contact">Learn more <ArrowRight size={15} strokeWidth={1.8} /></Link>
          </div>
        </div>
      </section>

      {/* Corporate Care — alternating row (flipped) */}
      <section className="alt-section flip reveal">
        <div className="alt-image">
          <div className="alt-image-bg" style={{ backgroundImage: "url('/assets/event-children.jpg')" }} />
          <div className="alt-image-badge"><Briefcase size={18} strokeWidth={1.5} /> Private &amp; Corporate</div>
        </div>
        <div className="alt-copy sky">
          <p className="eyebrow">Our services</p>
          <h2>Private &amp; Corporate Care</h2>
          <p>Conferences, corporate events, private functions and group bookings. Flexible childcare solutions designed for families, business and special occasions.</p>
          <ul className="alt-features">
            {corporateFeatures.map((f) => (
              <li key={f}><CheckCircle2 size={17} strokeWidth={1.8} /> {f}</li>
            ))}
          </ul>
          <div className="actions">
            <Link className="button" to="/functions">Learn more <ArrowRight size={15} strokeWidth={1.8} /></Link>
          </div>
        </div>
      </section>

      {/* Defence Care — alternating row (dark) */}
      <section className="alt-section reveal">
        <div className="alt-image">
          <div className="alt-image-bg" style={{ backgroundImage: "url('/assets/childcare-tent.jpg')" }} />
          <div className="alt-image-badge"><ShieldCheck size={18} strokeWidth={1.5} /> Defence Care</div>
        </div>
        <div className="alt-copy dark">
          <p className="eyebrow">Our services</p>
          <h2>Defence Care &amp; Support</h2>
          <p>Proudly supporting Australian Defence families with trusted, flexible childcare solutions — wherever you need us across Queensland.</p>
          <ul className="alt-features">
            {defenceFeatures.map((f) => (
              <li key={f}><CheckCircle2 size={17} strokeWidth={1.8} /> {f}</li>
            ))}
          </ul>
          <div className="actions">
            <Link className="button light" to="/contact">Learn more <ArrowRight size={15} strokeWidth={1.8} /></Link>
          </div>
        </div>
      </section>

      {/* Venues band */}
      <section className="venues-band reveal" id="about">
        <div className="venues-band-content">
          <p className="eyebrow">We travel to</p>
          <h2>Extraordinary Venues.</h2>
          <p>From the rolling hills of Maleny and the Sunshine Coast Hinterland to Toowoomba, Brisbane, Tamborine Mountain and beyond, we bring exceptional childcare to Queensland's most beautiful wedding and event locations.</p>
          <div className="regions">
            <a href="#">Maleny &amp; Hinterland</a>
            <a href="#">Sunshine Coast &amp; Noosa</a>
            <a href="#">Brisbane</a>
            <a href="#">Toowoomba &amp; Darling Downs</a>
            <a href="#">Tamborine Mountain</a>
            <a href="#">More Regions</a>
          </div>
        </div>
        <div className="venues-band-image">
          <img src="/assets/maleny.jpg" alt="Rolling hills of Maleny and the Sunshine Coast Hinterland" />
        </div>
      </section>

      {/* Bento gallery */}
      <section className="bento-gallery reveal" id="journal">
        <div className="bento-tile large" style={{ backgroundImage: "url('/assets/gallery-1.jpg')" }}></div>
        <div className="bento-tile" style={{ backgroundImage: "url('/assets/gallery-2.jpg')" }}></div>
        <div className="bento-tile" style={{ backgroundImage: "url('/assets/gallery-3.jpg')" }}></div>
        <div className="bento-tile wide" style={{ backgroundImage: "url('/assets/gallery-4.jpg')" }}></div>
        <a className="bento-tile instagram" href="https://www.instagram.com/little_wonders_babysitting" target="_blank" rel="noopener noreferrer">
          <Sparkles size={28} strokeWidth={1.5} />
          Follow us<br /><strong>on Instagram ↗</strong>
        </a>
      </section>

      {/* Connect CTA */}
      <section className="connect reveal" id="contact">
        <p className="eyebrow centered">Let's connect</p>
        <h2>Book Your Complimentary Connection Call</h2>
        <p>A relaxed 15–30 minute chat to talk about your celebration,<br className="desktop" /> answer your questions and see how we can help.</p>
        <a className="button" href="mailto:hello@littlewonders.com.au">
          Book now <ArrowRight size={16} strokeWidth={1.8} />
        </a>
        <p style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-soft)' }}>
          Or call us directly&nbsp;
          <a href="tel:0488233252" style={{ color: 'var(--ocean)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Phone size={13} strokeWidth={1.8} /> 0488 233 252
          </a>
        </p>
      </section>
    </main>
  );
}
