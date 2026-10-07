import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, Mail, Send } from 'lucide-react';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [state, setState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    rootRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => { data[key] = String(value); });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Request failed');
      const result = await response.json();
      if (result.error) throw new Error(result.error);

      setState('success');
      form.reset();
    } catch {
      setState('error');
      setErrorMsg('Something went wrong sending your message. Please try again or call us on 0488 233 252.');
    }
  };

  if (state === 'success') {
    return (
      <main>
        <div className="registration-shell" style={{ textAlign: 'center', padding: '120px 20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: '50%', background: 'var(--pale)', marginBottom: 28, boxShadow: 'var(--shadow-md)' }}>
            <CheckCircle2 size={40} strokeWidth={1.5} style={{ color: 'var(--sage)' }} />
          </div>
          <h1 style={{ fontSize: '48px', color: 'var(--blue-deep)', fontFamily: "'Cormorant Garamond',serif", fontWeight: 500 }}>Thank you!</h1>
          <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: '500px', margin: '20px auto' }}>
            Your message has been sent. Our team will be in touch with you shortly.
          </p>
          <Link className="button" to="/">
            Return Home <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main ref={rootRef}>
      <div className="page-hero">
        <p className="eyebrow">Little Wonders</p>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
      </div>
      <div className="registration-shell reveal" style={{ paddingBottom: 82 }}>
        <div className="registration-layout">
          <aside className="registration-aside">
            <h3>Get in touch</h3>
            <p className="registration-aside-note">
              Send us a quick message and we'll get back to you as soon as we can. For detailed enquiries, please use the event or parent registration forms.
            </p>
            <p className="registration-aside-note" style={{ borderTop: 0, paddingTop: 0, marginTop: 12 }}>
              Or call us directly on <strong style={{ color: 'var(--blue)' }}>0488 233 252</strong>.
            </p>
            <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--pale-deep)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:0488233252" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--blue)', fontWeight: 500, transition: 'gap 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '14px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '10px')}>
                <Phone size={16} strokeWidth={1.5} /> 0488 233 252
              </a>
              <a href="mailto:hello@littlewonders.com.au" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--blue)', fontWeight: 500, transition: 'gap 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '14px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '10px')}>
                <Mail size={16} strokeWidth={1.5} /> hello@littlewonders.com.au
              </a>
            </div>
          </aside>
          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="registration-form-card">
              <p className="required-note"><span>*</span> Required fields.</p>

              <fieldset className="form-section" data-section="Contact" style={{ paddingBottom: 0 }}>
                <legend>Send us a message<small>We'll reply to your email as soon as we can.</small></legend>
                <div className="form-grid">
                  <div className="field full">
                    <label htmlFor="name">Your name <span>*</span></label>
                    <input id="name" name="name" type="text" required placeholder="Jane Doe" />
                  </div>
                  <div className="field full">
                    <label htmlFor="email">Email address <span>*</span></label>
                    <input id="email" name="email" type="email" required placeholder="jane@email.com" />
                  </div>
                  <div className="field full">
                    <label htmlFor="message">Message <span>*</span></label>
                    <textarea id="message" name="message" required placeholder="How can we help?" />
                  </div>
                </div>
              </fieldset>

              {state === 'error' && (
                <div className="form-status is-visible is-error" style={{ marginTop: 18 }}>{errorMsg}</div>
              )}

              <div className="form-actions">
                <button className="button" type="submit" disabled={state === 'submitting'}>
                  {state === 'submitting' ? 'Sending...' : 'Send Message'}
                  {state !== 'submitting' && <Send size={15} strokeWidth={1.8} />}
                </button>
                <button className="button secondary" type="reset">Clear</button>
              </div>
            </div>
          </form>
        </div>
        <p className="registration-footer-link">
          Prefer to speak with us first? <Link to="/#contact">Return to the connection form</Link> or call 0488 233 252.
        </p>
      </div>
    </main>
  );
}
