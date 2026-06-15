import { ShieldCheck, MessageSquare, Volume2 } from 'lucide-react';

export default function Hero() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
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

  const scrollToServices = () => {
    const element = document.getElementById('services');
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
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>
            Find Clarity Through <span>Baatein</span>.
          </h1>
          <p>
            Every path has its questions. We provide confidential guidance via secure audio calls and private chats to help you navigate life's transitions—whether it is education, relationship harmony, career growth, or personal wellness.
          </p>
          <div className="hero-ctas">
            <button onClick={scrollToHowItWorks} className="btn btn-primary">
              How It Works
            </button>
            <button onClick={scrollToServices} className="btn btn-secondary">
              Explore Services
            </button>
          </div>

          <div className="hero-badges">
            <div className="hero-badge-item">
              <ShieldCheck size={20} className="hero-badge-icon" />
              <div>
                <span className="hero-badge-text">100% Confidential</span>
                <span className="hero-badge-sub">Encrypted consultations</span>
              </div>
            </div>
            <div className="hero-badge-item">
              <MessageSquare size={20} className="hero-badge-icon" />
              <div>
                <span className="hero-badge-text">Dual Mediums</span>
                <span className="hero-badge-sub">Private chat & audio calls</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-stack">
            {/* Main Mock UI Card representing Chat Consultation */}
            <div className="hero-card hero-card-main">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-success)' }}></div>
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>Active Session</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--color-brand-secondary)' }}>Education Advice</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '16px 0', overflow: 'hidden' }}>
                <div className="visual-chat-row">
                  <div className="visual-chat-avatar">A</div>
                  <div className="visual-chat-bubble">
                    Hello! How can I help guide your academic path today?
                  </div>
                </div>
                <div className="visual-chat-row" style={{ justifyContent: 'flex-end' }}>
                  <div className="visual-chat-bubble right">
                    I am feeling lost about choosing the right major after my high school exams.
                  </div>
                </div>
                <div className="visual-chat-row">
                  <div className="visual-chat-avatar">A</div>
                  <div className="visual-chat-bubble">
                    We can evaluate your core strengths and align them with options.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
                <div style={{ flex: '1', height: '32px', borderRadius: '16px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', paddingLeft: '12px', fontSize: '11px', color: 'var(--color-text-light)' }}>
                  Type your message here...
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyItems: 'center', color: 'white', justifyContent: 'center' }}>
                  <MessageSquare size={14} />
                </div>
              </div>
            </div>

            {/* Sub Mock UI Card representing Audio Consultation */}
            <div className="hero-card hero-card-sub">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Volume2 size={22} />
              </div>
              <div style={{ flex: '1' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', color: 'var(--color-brand-primary)' }}>Audio Call</span>
                <h4 style={{ fontSize: '16px', margin: '2px 0 0 0', fontWeight: '600' }}>Relationship Coach</h4>
                
                <div className="visual-audio-wave">
                  <div className="audio-bar" style={{ height: '14px', animationDelay: '0.1s' }}></div>
                  <div className="audio-bar" style={{ height: '8px', animationDelay: '0.3s' }}></div>
                  <div className="audio-bar" style={{ height: '18px', animationDelay: '0.2s' }}></div>
                  <div className="audio-bar" style={{ height: '12px', animationDelay: '0.5s' }}></div>
                  <div className="audio-bar" style={{ height: '22px', animationDelay: '0.4s' }}></div>
                  <div className="audio-bar" style={{ height: '10px', animationDelay: '0.6s' }}></div>
                  <div className="audio-bar" style={{ height: '6px', animationDelay: '0.7s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
