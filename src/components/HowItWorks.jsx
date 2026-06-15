import { CheckSquare, Zap, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <CheckSquare size={24} />,
      title: '1. Select Domain & Medium',
      description: 'Choose your area of need (e.g., Education, Relationship) and your preferred format (Private Chat or Audio Call).'
    },
    {
      icon: <Zap size={24} />,
      title: '2. Connect Instantly',
      description: 'Get matched immediately with an active, online specialist. No calendars, no appointments, and no waiting required.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: '3. Consult Anonymously',
      description: 'Engage in a 100% encrypted, secure session. Your personal phone number and identity are never shared.'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="sub">Three-Step Process</span>
          <h2>How Baatein Works</h2>
          <p>
            We have designed a streamlined, secure system to connect you with professional support instantly when you need it.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-icon-box">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
