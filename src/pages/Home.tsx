import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, Sparkles, UsersRound, Gift, ArrowRight, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Home() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const els = rootRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" ref={rootRef}>
      {/* Hero */}
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-kicker">For beautiful celebrations &amp; the little people you love</span>
          <p className="eyebrow">Premium childcare for families, weddings &amp; events<br />across Southern Queensland</p>
          <h1>Care that makes<br /><em>every moment.</em></h1>
          <div className="script">More present for<br />What matters most.</div>
          <p>Thoughtfully tailored childcare experiences for families, weddings and events across Southern Queensland, so you can be fully present — knowing the little people are safe, happy and creating memories of their own.</p>
          <div className="actions">
            <Link className="button" to="/contact">
              Book Your Connection Call
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
            <Link className="button outline" to="/#services">Explore Our Services</Link>
          </div>
          <div className="hero-note"><span>✦</span> Beautifully considered care, wherever life takes you</div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <div className="image-label">little moments<br /><span>big memories</span></div>
          </div>
          <div className="hero-stamp">SAFE<br /><b>·</b><br />JOYFUL<br /><b>·</b><br />THOUGHTFUL</div>
          <div className="hero-shape"></div>
        </div>
      </section>

      {/* Features */}
      <section className="features reveal">
        <div><ShieldCheck size={32} strokeWidth={1.5} /><b>Safe Hands</b><p>Low ratios, qualified educators &amp; elevated safety standards.</p></div>
        <div><Heart size={32} strokeWidth={1.5} /><b>Warm Hearts</b><p>We genuinely get to know every family and every child.</p></div>
        <div><Award size={32} strokeWidth={1.5} /><b>Professional Care</b><p>Experienced, reliable &amp; dedicated to exceptional service.</p></div>
        <div><Sparkles size={32} strokeWidth={1.5} /><b>Beautifully Styled</b><p>We style our play spaces to match your wedding colours at no extra cost.</p></div>
        <div><UsersRound size={32} strokeWidth={1.5} /><b>Guest Connect</b><p>We connect with your little guests before the big day.</p></div>
        <div><Gift size={32} strokeWidth={1.5} /><b>Memories to Keep</b><p>Every child takes home their own special memories.</p></div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <p className="eyebrow centered reveal">Our services</p>
        <h2 className="reveal reveal-delay-1">Exceptional Childcare for Extraordinary Occasions.</h2>
        <p className="intro reveal reveal-delay-2">Weddings, events and family moments — with care at the heart.</p>
        <div className="cards">
          <article className="card wedding reveal reveal-delay-1">
            <div className="card-image"></div>
            <div className="card-body">
              <span className="round"><Heart size={24} strokeWidth={1.5} /></span>
              <h3>Wedding Childcare</h3>
              <p>From intimate gatherings to grand celebrations, we create personalised wedding childcare experiences across Southern Queensland so you can relax, celebrate and enjoy every moment.</p>
              <Link to="/contact">Learn more&nbsp; <ArrowRight size={14} strokeWidth={1.8} /></Link>
            </div>
          </article>
          <article className="card reveal reveal-delay-2">
            <div className="card-image party"></div>
            <div className="card-body">
              <span className="round"><Sparkles size={24} strokeWidth={1.5} /></span>
              <h3>Private &amp; Corporate Care</h3>
              <p>Conferences, corporate events, private functions and group bookings. Flexible childcare solutions designed for families, business and special occasions.</p>
              <Link to="/functions">Learn more&nbsp; <ArrowRight size={14} strokeWidth={1.8} /></Link>
            </div>
          </article>
          <article className="card reveal reveal-delay-3">
            <div className="card-image defence"></div>
            <div className="card-body">
              <span className="round"><ShieldCheck size={24} strokeWidth={1.5} /></span>
              <h3>Defence Care &amp; Support</h3>
              <p>Proudly supporting Australian Defence families with trusted, flexible childcare solutions — wherever you need us across Queensland.</p>
              <Link to="/contact">Learn more&nbsp; <ArrowRight size={14} strokeWidth={1.8} /></Link>
            </div>
          </article>
        </div>
      </section>

      {/* Venues */}
      <section className="venues reveal" id="about">
        <div className="venue-copy">
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
        <div className="venue-art"></div>
      </section>

      {/* Gallery */}
      <section className="gallery reveal" id="journal">
        <div className="gallery-tile tile-one"></div>
        <div className="gallery-tile tile-two"></div>
        <div className="gallery-tile tile-three"></div>
        <div className="gallery-tile tile-four"></div>
        <a className="gallery-tile tile-five" href="https://www.instagram.com/little_wonders_babysitting" target="_blank" rel="noopener noreferrer">Follow us<br /><strong>on Instagram ↗</strong></a>
      </section>

      {/* Connect */}
      <section className="connect reveal" id="contact">
        <p className="eyebrow centered">Let's connect</p>
        <h2>Book Your Complimentary Connection Call</h2>
        <p>A relaxed 15–30 minute chat to talk about your celebration,<br className="desktop" /> answer your questions and see how we can help.</p>
        <a className="button" href="mailto:hello@littlewonders.com.au">
          Book now&nbsp;
          <ArrowRight size={16} strokeWidth={1.8} />
        </a>
        <p style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-soft)' }}>
          Or call us directly&nbsp;
          <a href="tel:0488233252" style={{ color: 'var(--blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Phone size={13} strokeWidth={1.8} /> 0488 233 252
          </a>
        </p>
      </section>
    </main>
  );
}
