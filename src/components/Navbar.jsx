import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
        <Link to="/" className="logo" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img className="logo-img" src="/baatein-logo.jpg" alt="Baatein Logo" />
          <div className="logo-text">
            Baatein
            <span>Consultation</span>
          </div>
        </Link>

        {/* Desktop & Mobile nav list */}
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('services')} style={{ cursor: 'pointer' }}>
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('mediums')} style={{ cursor: 'pointer' }}>
                How We Consult
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('how-it-works')} style={{ cursor: 'pointer' }}>
                Process
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('why-us')} style={{ cursor: 'pointer' }}>
                Why Us
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('testimonials')} style={{ cursor: 'pointer' }}>
                Testimonials
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection('faq')} style={{ cursor: 'pointer' }}>
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
