import { Link } from 'react-router-dom';
import { Download, Sparkles, Calendar, Users, Briefcase, PartyPopper, Heart, Clock, CheckCircle2 } from 'lucide-react';

const privateEventTypes = [
  'Christmas Parties',
  'Annual Celebrations',
  'Anniversaries / Engagements',
  'Children\'s Parties',
  'Birthday Parties (over 18)',
  'and much more!',
];

const corporateEventTypes = [
  'Workshops & Classes',
  'Training Sessions',
  'Business Functions',
  'Christmas Parties',
  'Monthly Meetings',
  'Social Meets',
];

const careOptions = [
  {
    icon: Users,
    title: 'Supervised Care & Entertainment',
    desc: 'Crafts, games, activities and more — keeping children happily engaged throughout your event.',
  },
  {
    icon: Clock,
    title: 'Extra Hands at Meal Times',
    desc: 'An extra set of hands to help with feeding, settling and supporting little ones during meals.',
  },
  {
    icon: Heart,
    title: 'Slumber Spaces',
    desc: 'Comfortable slumber spaces to accommodate your tired little guests while you celebrate.',
  },
  {
    icon: Sparkles,
    title: 'Added Magic',
    desc: 'Face painters, character visits, jumping castles and more — fun additions to make the day special.',
  },
];

const inclusions = [
  '1–30+ children catered for',
  'In-home, at your venue or accommodation',
  'Care based on your preferences — child-free moments, entire child-free events, relaxed care and more',
  'Unlimited activities planned around the interests of the children attending',
  'Comfort styling — rugs, blankets, cushions, teepees, bean bags and everything to make it feel like home',
  'Slumber spaces with bedding options and linen included, so little ones can snooze in comfort',
  'Face painters, jumping castles, clowns, Disney character visits and cupcake / cookie decorating',
  'Care of children with special needs can be accommodated depending on individual requirements',
];

const corporateBenefits = [
  'Onsite, offsite or in-home care options for your guests',
  'Re-occurring or once-off bookings to suit your schedule',
  'Free-to-register event portal for your guests via our Event Register',
  'Peace of mind for parents attending your function or workshop',
  'Ideal for end-of-year celebrations — parents enjoy themselves and so do the kids',
  'Flexible care tailored to any business size, from small family-owned to large corporate',
];

const phases = [
  {
    icon: PartyPopper,
    label: 'Private Celebrations',
    title: 'Making Memorable Events',
    text: 'Our process works similar to the way we cater for weddings — except more flexible, to accommodate the comfort of your own home, choice of venue or accommodation.',
    image: '/assets/event-children.jpg',
    types: privateEventTypes,
  },
  {
    icon: Briefcase,
    label: 'Business & Corporate',
    title: 'Care for Meetings & Events',
    text: 'Monthly business meetings, training events or social meets? Our Events Register and care services are perfect for you. Give your guests peace of mind with onsite, offsite or in-home care options. Bookings can be re-occurring or once-off.',
    image: '/assets/childcare-tent.jpg',
    types: corporateEventTypes,
  },
];

export default function Functions() {
  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero">
        <p className="eyebrow">Little Wonders</p>
        <h1>Private &amp; Corporate Functions</h1>
        <p>Exceptional childcare for every kind of celebration and business event.</p>
      </div>

      <div className="functions-content">
        {/* Intro Section */}
        <section className="functions-intro">
          <div className="functions-intro-copy">
            <p className="eyebrow">Care, made personal</p>
            <h2>Flexible, beautifully considered childcare for your private and corporate events.</h2>
            <p>
              Whether you're hosting a birthday, anniversary, Christmas party or a corporate workshop,
              Little Wonders brings the same warm, professional care to your event that families trust us
              for at weddings — just more flexible, to suit the comfort of your own home, venue or accommodation.
            </p>
            <p>
              Our range of services is designed to cater for any size business, from small family-owned
              companies to large corporate organisations. Whatever the occasion, we make sure the children
              are safe, happy and creating memories of their own — so you and your guests can relax and enjoy.
            </p>
            <div className="functions-intro-actions">
              <Link className="button" to="/event-registration">Register Your Event</Link>
              <Link className="button outline" to="/contact">Make an Enquiry</Link>
            </div>
          </div>
          <div className="functions-intro-image">
            <img src="/assets/wedding-children.jpg" alt="Children enjoying a beautifully styled event play space" />
          </div>
        </section>

        {/* Two Pathways */}
        {phases.map((phase, i) => (
          <section key={phase.label} className={`functions-pathway ${i % 2 === 1 ? 'reverse' : ''}`}>
            <div className="functions-pathway-image">
              <img src={phase.image} alt={phase.title} />
              <div className="functions-pathway-badge">
                <phase.icon size={22} strokeWidth={1.5} />
                <span>{phase.label}</span>
              </div>
            </div>
            <div className="functions-pathway-copy">
              <span className="eyebrow">{phase.label}</span>
              <h2>{phase.title}</h2>
              <p>{phase.text}</p>
              <div className="functions-pathway-types">
                <h3>Event types we cater for</h3>
                <ul>
                  {phase.types.map((t) => (
                    <li key={t}>
                      <CheckCircle2 size={16} strokeWidth={1.8} className="functions-check" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link className="button small" to="/event-registration">Register Your Event &nbsp;→</Link>
            </div>
          </section>
        ))}

        {/* Care Options */}
        <section className="functions-care">
          <p className="eyebrow centered">Care options</p>
          <h2>Thoughtful care, tailored to your event.</h2>
          <p className="functions-care-intro">From supervised entertainment to slumber spaces, we adapt our care to suit the rhythm of your celebration or business event.</p>
          <div className="functions-care-grid">
            {careOptions.map((opt) => (
              <div key={opt.title} className="functions-care-card">
                <span className="functions-care-icon">
                  <opt.icon size={28} strokeWidth={1.5} />
                </span>
                <h3>{opt.title}</h3>
                <p>{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inclusions */}
        <section className="functions-inclusions">
          <div className="functions-inclusions-inner">
            <p className="eyebrow centered">Inclusions</p>
            <h2>What's included in our customised care packages</h2>
            <p className="functions-inclusions-intro">Our packages can include multiple options, all catered to your preferences.</p>
            <div className="functions-inclusions-list">
              {inclusions.map((inc) => (
                <div key={inc} className="functions-inclusion-item">
                  <CheckCircle2 size={18} strokeWidth={1.8} />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Benefits */}
        <section className="functions-benefits">
          <div className="functions-benefits-image">
            <img src="/assets/babysitting-family.jpg" alt="Family enjoying carefree time at a corporate event" />
          </div>
          <div className="functions-benefits-copy">
            <p className="eyebrow">Business &amp; corporate benefits</p>
            <h2>Why hire an onsite nanny for your meeting, workshop or function?</h2>
            <ul>
              {corporateBenefits.map((b) => (
                <li key={b}>
                  <CheckCircle2 size={18} strokeWidth={1.8} className="functions-check" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="functions-benefits-cta">
              <Link className="button" to="/event-registration">Register Your Event</Link>
              <Link className="button outline" to="/contact">Ask a Question</Link>
            </div>
          </div>
        </section>

        {/* Functions Guide Download */}
        <section className="functions-guide">
          <div className="functions-guide-card">
            <div className="functions-guide-icon">
              <Download size={32} strokeWidth={1.5} />
            </div>
            <div className="functions-guide-copy">
              <h2>Functions Guide</h2>
              <p>Download our Functions Guide for a full overview of our private and corporate care packages, inclusions and options. This document is updated periodically — the current version is available now and will be refreshed later in the year.</p>
              <a className="button" href="/assets/little-wonders-functions-guide.pdf" download>
                <Download size={16} strokeWidth={1.8} />
                Download Functions Guide
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="functions-cta">
          <h2>Relax &amp; Enjoy Your Event</h2>
          <p>Let us take care of the little people, so you can be fully present for what matters most.</p>
          <div className="functions-cta-actions">
            <Link className="button" to="/event-registration">Register Your Event &nbsp;→</Link>
            <Link className="button outline" to="/contact">Book Your Connection Call</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
