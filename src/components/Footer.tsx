import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks: { label: string; href: string }[] = [
  { label: 'Wedding Childcare', href: '/#services' },
  { label: 'Care Options', href: '/care-options' },
  { label: 'Private & Corporate Care', href: '/functions' },
  { label: 'Group Bookings', href: '/#services' },
  { label: 'Defence Care', href: '/#services' },
  { label: 'About Us', href: '/about' },
  { label: 'Event Registration', href: '/event-registration' },
  { label: 'Parent Registration', href: '/parent-registration' },
  { label: 'Journal', href: '/#journal' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link className="brand" to="/">
          <img className="brand-logo" src="/assets/littlewonders-logo.png" alt="Little Wonders" />
        </Link>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.href}>{link.label}</Link>
          ))}
        </div>
        <div className="social">
          <a href="https://www.instagram.com/little_wonders_babysitting" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a href="https://www.facebook.com/LittleWondersAustralia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Little Wonders Babysitting &amp; Events Service</span>
        <a href="/privacy">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <span>Est. September 2013</span>
        <span className="motto">Safe. Warm. Professional.</span>
      </div>
    </footer>
  );
}
