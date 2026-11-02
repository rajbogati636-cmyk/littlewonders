import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, MapPin, Search, X } from 'lucide-react';
import { venueRegions } from '../data/venues';
import './venues-directory.css';

/** Dedicated venue directory; the homepage's original Venues layout is unchanged. */
export default function Locations() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const term = search.trim().toLocaleLowerCase();
  const results = useMemo(() => venueRegions.map(region => ({
    ...region,
    venues: region.venues.filter(venue =>
      !term || [venue.name, venue.location, region.name].some(text => text.toLocaleLowerCase().includes(term))
    ),
  })).filter(region => region.venues.length > 0), [term]);
  const totalMatches = results.reduce((sum, region) => sum + region.venues.length, 0);

  useEffect(() => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }, [location.hash]);

  return <main>
    <header className="page-hero venue-page-hero">
      <p className="eyebrow">We travel to</p>
      <h1>Extraordinary Venues.</h1>
      <p>Wedding and event childcare across beautiful Southern Queensland destinations.</p>
    </header>

    <div className="locations-page venue-directory">
      <img className="venue-directory-landscape" src="/assets/maleny-client.jpg" alt="Panoramic hinterland landscape in Southern Queensland" />
      <div className="venue-directory-intro">
        <p className="eyebrow">Explore our regions</p>
        <h2>Thoughtful care wherever you celebrate.</h2>
        <p>From hinterland estates and country homesteads to coastal and city venues, Little Wonders can discuss childcare options at wedding venues or suitable nearby accommodation. Explore the locations below and enquire about your celebration.</p>
      </div>

      <nav className="venue-region-nav" aria-label="Jump to a region">
        {venueRegions.map(region => <Link key={region.id} to={`/locations/${region.id}`}>
          <MapPin aria-hidden="true" size={17} strokeWidth={1.6} />{region.name}
        </Link>)}
      </nav>

      <div className="venue-search-wrap">
        <label htmlFor="venue-search">Find a venue or location</label>
        <div className="venue-search-field">
          <Search aria-hidden="true" size={19} strokeWidth={1.6}/>
          <input id="venue-search" type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search venue, suburb or region" />
          {search && <button type="button" onClick={() => setSearch('')} aria-label="Clear venue search"><X size={18}/></button>}
        </div>
        <p className="venue-count" role="status">{totalMatches} {totalMatches === 1 ? 'venue' : 'venues'} {term ? 'matching your search' : 'across five regions'}</p>
      </div>

      <div className="venue-region-sections">
        {results.map(region => <section className="venue-region-block" id={region.id} key={region.id} aria-labelledby={`${region.id}-heading`}>
          <div className="venue-region-heading">
            <div>
              <p className="eyebrow">Southern Queensland</p>
              <h2 id={`${region.id}-heading`}>{region.name}</h2>
              <p>{region.coverage}</p>
            </div>
            <span className="venue-region-count">{region.venues.length} venues</span>
          </div>
          <div className="venue-table-wrap">
            <table className="venue-table">
              <thead><tr><th scope="col">Venue Name</th><th scope="col">Location</th></tr></thead>
              <tbody>{region.venues.map((venue, index) => <tr key={`${region.id}-${index}`}>
                <td>{venue.name}</td><td>{venue.location}</td>
              </tr>)}</tbody>
            </table>
          </div>
          <div className="venue-region-footer venue-region-footer-actions">
            <Link to={`/locations/${region.id}`}>Open {region.name} venue page <ArrowRight size={16} aria-hidden="true"/></Link>
            <Link to="/contact">Enquire about childcare in {region.name}<ArrowRight size={16} aria-hidden="true"/></Link>
          </div>
        </section>)}
        {results.length === 0 && <div className="venue-no-results"><h2>No matching venues</h2><p>Try a different venue name, suburb or region.</p><button type="button" onClick={() => setSearch('')}>Show all venues</button></div>}
      </div>

      <div className="venue-directory-cta">
        <p className="eyebrow">Let's connect</p>
        <h2>Planning a celebration somewhere special?</h2>
        <p>We can discuss care options for your venue or nearby accommodation. Accommodation and holiday-home listings will be added as further details become available.</p>
        <Link className="button" to="/contact">Make an enquiry <ArrowRight size={16} aria-hidden="true"/></Link>
      </div>
    </div>
  </main>;
}
