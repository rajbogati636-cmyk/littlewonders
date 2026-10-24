import policy from '@/content/privacy-policy.txt?raw';
import { Link } from 'react-router-dom';
export default function PrivacyPolicy(){
const chunks=policy.trim().split(/\n\n/);
return <main><header className="page-hero"><p className="eyebrow">Little Wonders</p><h1>Privacy Policy</h1><p>How we handle and protect personal information.</p></header><div className="legal-copy"><p><Link to="/privacy-notice">Read the separate Privacy Notice →</Link></p>{chunks.map((chunk,i)=>chunk.startsWith('## ')?<h2 key={i}>{chunk.slice(3)}</h2>:<p key={i}>{chunk}</p>)}</div></main>;
}
