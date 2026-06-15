import { ShieldAlert, Award, RefreshCw, Zap } from 'lucide-react';

export default function WhyUs() {
  const benefits = [
    {
      icon: <ShieldAlert size={28} className="benefit-icon" />,
      title: 'Absolute Privacy',
      description: 'End-to-end encrypted chats and call lines. Connect under a pseudonym if you prefer absolute anonymity.'
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
      title: 'Instant Connection',
      description: 'Avoid weeks of waiting or appointments. Connect immediately with an active specialist the moment you need support.'
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
