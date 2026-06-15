import { Mail, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img className="logo-img" src="/baatein-logo.jpg" alt="Baatein Logo" />
              <div className="logo-text">
                Baatein
                <span>Consultation</span>
              </div>
            </Link>
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginTop: '12px' }}>
              Providing confidential, professional advisory and counseling services. Find support and guidance for education, relationship stability, career growth, and personal wellness through secure chats and audio channels.
            </p>
          </div>

          <div className="footer-column">
            <h4>Consultations</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('services')} className="footer-link">Education Advisory</a></li>
              <li><a onClick={() => scrollToSection('services')} className="footer-link">Marriage & Relationships</a></li>
              <li><a onClick={() => scrollToSection('services')} className="footer-link">Career Progression</a></li>
              <li><a onClick={() => scrollToSection('services')} className="footer-link">Personal Development</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('how-it-works')} className="footer-link">Our Process</a></li>
              <li><a onClick={() => scrollToSection('mediums')} className="footer-link">Audio vs Chat</a></li>
              <li><a onClick={() => scrollToSection('faq')} className="footer-link">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link to="/terms-and-conditions" className="footer-link" onClick={() => window.scrollTo(0,0)}>Terms and Conditions</Link></li>
              <li><Link to="/privacy-policy" className="footer-link" onClick={() => window.scrollTo(0,0)}>Privacy Policy</Link></li>
              <li><Link to="/return-and-refund-policy" className="footer-link" onClick={() => window.scrollTo(0,0)}>Return and Refund Policy</Link></li>
              <li><Link to="/delete-account-policy" className="footer-link" onClick={() => window.scrollTo(0,0)}>Delete Account Policy</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li>
                <Link to="/contact-us" className="footer-link" onClick={() => window.scrollTo(0,0)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} style={{ color: 'var(--color-brand-accent)' }} />
                  <span>info@baatein.in</span>
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="footer-link" onClick={() => window.scrollTo(0,0)} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <MapPin size={16} style={{ color: 'var(--color-brand-accent)', marginTop: '3px', flexShrink: 0 }} />
                  <span>Noida, Uttar Pradesh, India</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <p>© {new Date().getFullYear()} Baatein Consultation. All rights reserved. | Owned by: <a href="https://elysionsoftwares.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-brand-accent)', textDecoration: 'none', fontWeight: '600', pointerEvents: 'auto' }}>Elysion Softwares Pvt. Ltd.</a></p>
        </div>

        <div style={{ marginTop: '24px', borderTop: '1px solid #36342C', paddingTop: '24px', fontSize: '11px', color: '#88857C', lineHeight: '1.5' }}>
          <strong>Medical / Psychiatric Emergency Disclaimer:</strong> Baatein Consultation is an advisory counseling provider. We do not diagnose mental health conditions, prescribe medical treatments, or offer immediate support for acute suicidal or domestic abuse crises. If you are experiencing a life-threatening crisis, please reach out immediately to your nearest emergency hospital services or contact national mental health support hotlines.
        </div>
      </div>
    </footer>
  );
}
