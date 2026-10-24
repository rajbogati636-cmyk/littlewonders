import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const additional = [
 { title:'Private & Corporate Care', image:'/assets/event-children.jpg', text:'Childcare for private functions, corporate events, conferences, professional events and other organised occasions.', href:'/functions' },
 { title:'Group Bookings', image:'/assets/childcare-tent.jpg', text:'For families travelling together who would like coordinated childcare at their accommodation — including destination wedding guests. Not function or event care.', href:'/group-bookings' },
 { title:'Babysitting & Family Care', image:'/assets/care-babysitting.jpg', text:'Occasional private family babysitting and regular care, subject to location and Wonder Team availability.', href:'/contact' },
 { title:'Defence Care & Support', image:'/assets/babysitting-family.jpg', text:'Dedicated, thoughtfully arranged childcare for Australian Defence families and their events.', href:'/defence-care' },
];
export default function CareOptions(){return <main>
 <header className="page-hero"><p className="eyebrow">Little Wonders</p><h1>Care Options</h1><p>Premium wedding childcare, with carefully selected additional care services.</p></header>
 <div className="service-list-wrap"><p className="eyebrow centered">Our speciality</p>
 <section className="service-feature"><img src="/assets/care-wedding-connect-four.webp" alt="Children enjoying a giant Connect Four game at a celebration"/><div><p className="eyebrow">Our flagship service</p><h2>Wedding Childcare</h2><p>Custom wedding childcare provided onsite at wedding venues or offsite at suitable accommodation. Every care experience is planned around your wedding, the children attending and the families you love.</p><Link className="button" to="/wedding-childcare">Explore Wedding Childcare <ArrowRight size={17}/></Link></div></section>
 <div className="service-secondary-intro"><p className="eyebrow centered">Additional care options</p><h2>Thoughtful care beyond your wedding day</h2></div>
 <div className="service-card-grid">{additional.map(s=><article key={s.title} className="service-option-card"><img src={s.image} alt="Little Wonders care services" loading="lazy"/><div><h3>{s.title}</h3><p>{s.text}</p><Link to={s.href}>Learn more <ArrowRight size={15}/></Link></div></article>)}</div>
 <div className="service-enquiry"><h2>Let's find the right care for your family.</h2><p>Tell us a little about your occasion and we'll explore what may be suitable.</p><Link className="button" to="/contact">Make an enquiry <ArrowRight size={16}/></Link></div>
 </div></main>}
