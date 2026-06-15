import { CheckSquare, Calendar, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <CheckSquare size={24} />,
      title: '1. Select Category & Medium',
      description: 'Choose your area of need (e.g., Education, Marriage) and your preferred format (Audio Call or secure Private Chat).'
    },
    {
      icon: <Calendar size={24} />,
      title: '2. Select Date & Time',
      description: 'Select a slot that works best for your schedule. Our calendar automatically shows real-time specialist availability.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: '3. Connect Securely',
      description: 'Use the unique, encrypted session link sent to you to start your secure chat room or direct audio call. No downloads required.'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="sub">Three-Step Process</span>
          <h2>How Baatein Works</h2>
          <p>
            We have designed a streamlined, secure booking experience. Get matched with professional support in less than five minutes.
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
