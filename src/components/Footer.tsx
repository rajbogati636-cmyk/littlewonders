import { Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowUp, Heart } from 'lucide-react';

const footerSections: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Wedding Childcare', href: '/#services' },
      { label: 'Care Options', href: '/care-options' },
      { label: 'Private & Corporate Care', href: '/functions' },
      { label: 'Group Bookings', href: '/#services' },
      { label: 'Defence Care', href: '/#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Wonder Team', href: '/wonder-team' },
      { label: 'Journal', href: '/#journal' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Register',
    links: [
      { label: 'Event Registration', href: '/event-registration' },
      { label: 'Parent Registration', href: '/parent-registration' },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <img className="brand-logo" src="/assets/littlewonders-logo.png" alt="Little Wonders" />
          <p>Premium wedding and event childcare across Southern Queensland. Safe. Warm. Professional.</p>
          <div className="footer-social-links">
            <a href="https://www.instagram.com/little_wonders_babysitting" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/LittleWondersAustralia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          {footerSections.map((section) => (
            <div key={section.heading} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h4 style={{ color: '#fff', fontFamily: 'var(--sans)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, marginBottom: 6 }}>{section.heading}</h4>
              {section.links.map((link) => (
                <Link key={link.label} to={link.href}>{link.label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-social">
          <h4>Get in touch</h4>
          <p style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
            <a href="tel:0488233252" style={{ color: 'var(--gold-soft)' }}>0488 233 252</a><br />
            <a href="mailto:hello@littlewonders.com.au" style={{ color: 'var(--gold-soft)' }}>hello@littlewonders.com.au</a>
          </p>
          <div className="footer-social-links">
            <a href="https://www.instagram.com/little_wonders_babysitting" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/LittleWondersAustralia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2024 Little Wonders Babysitting &amp; Events Service</span>
        <a href="/privacy">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <span>Est. September 2013</span>
        <span className="motto"><Heart size={11} strokeWidth={1.8} style={{ display: 'inline', marginRight: 4 }} />Safe. Warm. Professional.</span>
        <a href="#top" aria-label="Back to top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <ArrowUp size={14} strokeWidth={1.8} />
        </a>
      </div>
    </footer>
  );
}
