import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { venueRegions } from '../data/venues';
import './venues-directory.css';

/** Regional venues supplied by the Little Wonders client; not a partner endorsement list. */
export default function VenueRegionPage() {
  const { regionId } = useParams<{ regionId: string }>();
  const region = venueRegions.find(item => item.id === regionId);

  if (!region) {
    return <main>
      <header className="page-hero venue-page-hero"><p className="eyebrow">We travel to</p><h1>Extraordinary Venues.</h1></header>
      <div className="locations-page venue-directory">
        <div className="venue-no-results"><h2>Region not found</h2><p>Please choose one of our Southern Queensland regions.</p>
          <Link className="button" to="/locations">View all venues</Link></div>
      </div>
    </main>;
  }

  return <main>
    <header className="page-hero venue-page-hero">
      <p className="eyebrow">Extraordinary Venues</p>
      <h1>{region.name}</h1>
      <p>{region.coverage}</p>
    </header>
    <div className="locations-page venue-directory venue-region-page">
      <Link className="venue-back-link" to="/locations"><ArrowLeft size={16} aria-hidden="true" /> Explore all regions</Link>
      <div className="venue-directory-intro">
        <p className="eyebrow">Wedding and event childcare</p>
        <h2>Explore venues in {region.name}.</h2>
        <p>Below are the venue names and locations supplied by Little Wonders. Contact us to discuss your celebration and personalised childcare arrangements.</p>
      </div>
      <nav className="venue-region-nav" aria-label="Browse Extraordinary Venues regions">
        {venueRegions.map(item => <Link key={item.id} to={`/locations/${item.id}`} aria-current={item.id === region.id ? 'page' : undefined}>
          <MapPin aria-hidden="true" size={17} strokeWidth={1.6}/>{item.name}
        </Link>)}
      </nav>
      <section className="venue-region-block" aria-labelledby="regional-venues-heading">
        <div className="venue-region-heading">
          <div><p className="eyebrow">Southern Queensland</p>
            <h2 id="regional-venues-heading">{region.name} venues</h2><p>{region.coverage}</p></div>
          <span className="venue-region-count">{region.venues.length} venues</span>
        </div>
        <div className="venue-table-wrap">
          <table className="venue-table">
            <thead><tr><th scope="col">Wedding venue</th><th scope="col">Location</th></tr></thead>
            <tbody>{region.venues.map((venue, index) => <tr key={`${region.id}-${index}`}>
              <td>{venue.name}</td><td>{venue.location}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <div className="venue-region-footer venue-region-footer-actions">
          <Link to="/locations">View the complete venue directory <ArrowRight size={16} aria-hidden="true"/></Link>
          <Link to="/contact">Enquire about childcare <ArrowRight size={16} aria-hidden="true"/></Link>
        </div>
      </section>
      <div className="venue-directory-cta">
        <p className="eyebrow">Let's connect</p>
        <h2>Planning a celebration somewhere special?</h2>
        <p>Our Wonder Team can discuss childcare at a wedding venue or suitable nearby accommodation. Airbnb and holiday-home listings will be added when approved details are supplied.</p>
        <Link className="button" to="/contact">Make an enquiry <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </div>
  </main>;
}
