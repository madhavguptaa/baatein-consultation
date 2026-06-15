import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img className="logo-img" src="/baatein-logo.jpg" alt="Baatein Logo" />
          <div className="logo-text">
            Baatein
            <span>Consultation</span>
          </div>
        </a>

        {/* Desktop & Mobile nav list */}
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('services')}>
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('mediums')}>
                How We Consult
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('how-it-works')}>
                Process
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('why-us')}>
                Why Us
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('testimonials')}>
                Testimonials
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('faq')}>
                FAQ
              </a>
            </li>
            <li className="nav-cta-btn">
              <button onClick={() => scrollToSection('how-it-works')} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>
                <PhoneCall size={14} /> How to Book
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
