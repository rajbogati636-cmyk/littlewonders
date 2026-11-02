import { Link } from 'react-router-dom';
import { ArrowRight, Home, Users, Building2, CalendarDays } from 'lucide-react';
import './defence-care-original.css';

/**
 * The visible opening follows the client's screenshot of the original Defence Care page.
 * Only this page and its scoped stylesheet are updated. Shared navigation, registration
 * forms, Resend integration and backend remain unchanged.
 * The original page's lower image placements still require visual verification.
 */
const careOptions = [
  { label: 'Care at Home', anchor: 'care-at-home', icon: Home },
  { label: 'Community Care', anchor: 'community-care', icon: Users },
  { label: 'Barracks Care', anchor: 'barracks-care', icon: Building2 },
  { label: 'Public Events / Exhibitions', anchor: 'public-events', icon: CalendarDays },
];

export default function DefenceCare() {
  return <main className="defence-original-page">
    <header className="defence-legacy-title-band">
      <h1>Defence Care</h1>
    </header>

    <section className="defence-original-opening" aria-label="About Little Wonders Defence Care">
      <h2>Little Wonders is committed to providing reliable care for Australia's most dedicated families.</h2>
      <p>As we expand throughout Australia our mission is to ensure defence families experience as little interruption to their in-home care requirements as possible.</p>
      <p>By providing consistent care options throughout the country we hope to ease the stress often accumulated with frequent relocations by working closely with families to allow smooth transitions between changes.</p>
      <p>Our care for Defence families can be separated into four main categories:</p>
    </section>

    <nav className="defence-original-types" aria-label="Defence care options">
      {careOptions.map(({ label, anchor, icon: Icon }) =>
        <a key={anchor} href={`#${anchor}`}>
          <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
          <span>{label}</span>
        </a>
      )}
    </nav>

    <figure className="defence-original-photo-block">
      <img src="/assets/defence-care-client-photo-2026.png" alt="Australian Defence servicewoman with a young child" />
    </figure>

    <div className="defence-original-content">
      <section id="care-at-home" className="defence-original-section">
        <p className="eyebrow">Family care</p>
        <h2>At Home Care</h2>
        <p>Individualised in-home support may include babysitting, nanny arrangements, help for parents, short-term overnight stays and assistance before or after school. Care arrangements are discussed personally with families. The original website describes an in-home ratio of 1:3.</p>
        <div className="defence-original-inset">
          <h3>Defence Benefits for 2023</h3>
          <p>The original website listed an ADF discount of $2–$8 per hour on eligible care and wedding packages. <strong>Please enquire about current rates and eligibility.</strong></p>
        </div>
      </section>
      <section id="community-care" className="defence-original-section">
        <p className="eyebrow">Defence community</p>
        <h2>Community Care</h2>
        <p>Childcare at Defence community houses and centres can support crèche sessions, open days, holiday celebrations and community activities. The earlier page describes a typical ratio of 1:4, adjusted to children's ages and needs.</p>
      </section>
      <section id="barracks-care" className="defence-original-section">
        <p className="eyebrow">Bases and units</p>
        <h2>Barracks Care</h2>
        <p>Support for Defence bases and unit gatherings can be planned for one-off or recurring events. Care can accommodate larger groups, including over 30 children. The original page specifies at least two carers, with staffing planned around the event and children’s ages.</p>
      </section>
      <section id="public-events" className="defence-original-section">
        <p className="eyebrow">Open days and exhibitions</p>
        <h2>Public Events &amp; Exhibitions</h2>
        <p>For public and community events, supervised activities may be offered as open spaces with parents present or as registered, sign-in/sign-out care for a defined period.</p>
      </section>
    </div>

    <section className="defence-original-register" aria-labelledby="defence-register-heading">
      <p className="eyebrow">We're here to help</p>
      <h2 id="defence-register-heading">Defence Events Registration</h2>
      <div className="defence-original-actions">
        <Link className="button" to="/event-registration">Register an Event <ArrowRight size={16} aria-hidden="true"/></Link>
        <Link className="button button-outline" to="/parent-registration">Register Attendance <ArrowRight size={16} aria-hidden="true"/></Link>
      </div>
    </section>

    <section className="defence-original-contact">
      <p className="eyebrow">Let's connect</p>
      <h2>Let us help you find balance.</h2>
      <Link className="button" to="/contact">Contact Us Now <ArrowRight size={16} aria-hidden="true" /></Link>
    </section>
  </main>;
}
