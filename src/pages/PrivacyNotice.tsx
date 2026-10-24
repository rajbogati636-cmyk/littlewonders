import notice from '@/content/privacy-notice.txt?raw';
import { Link } from 'react-router-dom';
export default function PrivacyNotice(){return <main><header className="page-hero"><p className="eyebrow">Little Wonders</p><h1>Privacy Notice</h1><p>Important information about the collection of personal information.</p></header><div className="legal-copy"><h2>Privacy Notice</h2>{notice.trim().split(/\n\n/).map((p,i)=><p key={i}>{p}</p>)}<p><Link to="/privacy-policy">Read our full Privacy Policy →</Link></p></div></main>}
