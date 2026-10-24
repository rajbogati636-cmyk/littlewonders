import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarHeart, Users } from 'lucide-react';

const navLinks: { label: string; href: string }[] = [
  { label: 'Wedding Childcare', href: '/wedding-childcare' },
  { label: 'Private & Corporate Care', href: '/functions' },
  { label: 'Group Bookings', href: '/group-bookings' },
  { label: 'Defence Care', href: '/defence-care' },
];

const aboutDropdown: { label: string; href: string }[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Wonder Team', href: '/wonder-team' },
  { label: 'Values, Mission & Sustainability', href: '/values-mission-sustainability' },
  { label: 'Our Ratios', href: '/ratios' },
  { label: 'Team Safety', href: '/team-safety' },
  { label: 'FAQ', href: '/faq' },
];

const eventsDropdown: { label: string; href: string }[] = [
  { label: 'Event Registration', href: '/event-registration' },
  { label: 'Parent Registration', href: '/parent-registration' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const NAV_MOBILE_BREAKPOINT = 900;

  const isActive = (href: string) => location.pathname === href || location.pathname === href.replace(/\/$/, '');

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 52);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  useEffect(() => {
    const closeDesktopMenu = () => { if (window.innerWidth > NAV_MOBILE_BREAKPOINT) setMenuOpen(false); };
    window.addEventListener('resize', closeDesktopMenu);
    return () => window.removeEventListener('resize', closeDesktopMenu);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Registration strip scrolls away; the primary navigation stays sticky. */}
      <div className="registration-strip">
        <div className="registration-strip-inner">
          <span className="registration-strip-label">Ready to register?</span>
          <div className="registration-strip-links">
            <Link to="/event-registration">
              <CalendarHeart size={14} strokeWidth={1.8} />
              Event Registration <span aria-hidden="true">→</span>
            </Link>
            <Link to="/parent-registration">
              <Users size={14} strokeWidth={1.8} />
              Parent Registration <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <Link className="brand" to="/">
          <img className="brand-logo" src="/assets/littlewonders-logo.png" alt="Little Wonders" />
        </Link>
        <button className="menu" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
        <nav aria-label="Main navigation" className={menuOpen ? 'open' : ''}>
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <div className={`nav-dropdown ${aboutOpen ? 'open' : ''}`} onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <Link to="/about" aria-haspopup="true" onClick={(e) => { if (window.innerWidth <= NAV_MOBILE_BREAKPOINT) { e.preventDefault(); setAboutOpen(!aboutOpen); } }}>About Us</Link>
            <div className="dropdown-menu">
              {aboutDropdown.map((link) => (
                <Link key={link.href} to={link.href} aria-current={isActive(link.href) ? 'page' : undefined} onClick={() => { setMenuOpen(false); setAboutOpen(false); }}>{link.label}</Link>
              ))}
            </div>
          </div>
          <div className={`nav-dropdown event-dropdown ${eventsOpen ? 'open' : ''}`} onMouseEnter={() => setEventsOpen(true)} onMouseLeave={() => setEventsOpen(false)}>
            <Link to="/event-registration" aria-haspopup="true" aria-current={isActive('/event-registration') || isActive('/parent-registration') ? 'page' : undefined} onClick={(e) => { if (window.innerWidth <= NAV_MOBILE_BREAKPOINT) { e.preventDefault(); setEventsOpen(!eventsOpen); } }}>Events</Link>
            <div className="dropdown-menu">
              {eventsDropdown.map((link) => (
                <Link key={link.href} to={link.href} aria-current={isActive(link.href) ? 'page' : undefined} onClick={() => { setMenuOpen(false); setEventsOpen(false); }}>{link.label}</Link>
              ))}
            </div>
          </div>
          <Link to="/journal" onClick={() => setMenuOpen(false)}>Journal</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link className="mobile-booking-link" to="/contact" onClick={() => setMenuOpen(false)}>Book Your Connection Call</Link>
        </nav>
        <Link className="button small" to="/contact" onClick={() => setMenuOpen(false)}>Book Your Connection Call</Link>
      </header>
    </>
  );
}
