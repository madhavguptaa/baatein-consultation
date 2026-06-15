import { ShieldAlert, Award, RefreshCw, Zap } from 'lucide-react';

export default function WhyUs() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
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

  const benefits = [
    {
      icon: <ShieldAlert size={28} className="benefit-icon" />,
      title: 'Absolute Privacy',
      description: 'End-to-end encrypted chats and call lines. Book under a pseudonym if you prefer absolute anonymity.'
    },
    {
      icon: <Award size={28} className="benefit-icon" />,
      title: 'Vetted Specialists',
      description: 'All consultants undergo background checks, degree verifications, and clinical/academic screening.'
    },
    {
      icon: <RefreshCw size={28} className="benefit-icon" />,
      title: 'Seamless Swapping',
      description: 'Start with a chat and transition to an audio call mid-session if you feel the need for vocal depth.'
    },
    {
      icon: <Zap size={28} className="benefit-icon" />,
      title: 'No Long Waitlists',
      description: 'Avoid months of wait times. Schedule your sessions when you need them, including same-week slots.'
    }
  ];

  return (
    <section className="why-us-section" id="why-us">
      <div className="container why-us-grid">
        <div>
          <span className="sub" style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: '700', color: 'var(--color-brand-primary)', marginBottom: '12px', display: 'inline-block' }}>
            Trusted Relationships
          </span>
          <h2 style={{ fontSize: '38px', marginBottom: '20px', lineHeight: '1.2' }}>
            A Safe Space Built Around Your Privacy
          </h2>
          <p style={{ fontSize: '15px', marginBottom: '32px', maxWidth: '500px' }}>
            Opening up about education bottlenecks, marriage adjustments, or emotional stress requires safety. We structure our platform, data access, and consultants around the single promise of absolute confidentiality.
          </p>
          <button onClick={scrollToBooking} className="btn btn-outline-gold">
            Schedule a Private Session
          </button>
        </div>

        <div className="why-us-benefits">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="medium-icon-box" style={{ width: '48px', height: '48px', borderRadius: '12px', marginBottom: '8px' }}>
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
