import { MessageSquare, Phone, CheckCircle, ShieldAlert, Zap } from 'lucide-react';

export default function ConsultationMediums() {
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

  return (
    <section className="mediums-section" id="mediums">
      <div className="container">
        <div className="section-header">
          <span className="sub">Communication Channels</span>
          <h2>Tailored Formats for Your Comfort</h2>
          <p>
            Choose the consultation medium that best fits your immediate needs, environment, and personal comfort. We offer completely separate pathways for typing or talking.
          </p>
        </div>

        <div className="mediums-grid">
          {/* Chat Consultation */}
          <div className="medium-card">
            <div className="medium-icon-box">
              <MessageSquare size={32} />
            </div>
            <h3>Chat Consultations</h3>
            <p>
              Ideal for clients who prefer reflecting before they write, need to maintain absolute silence in their environment, or find comfort in written expression.
            </p>
            <ul>
              <li>
                <CheckCircle size={16} />
                <span><strong>Thoughtful pacing:</strong> Review your thoughts and responses without time pressure.</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span><strong>Discreet conversations:</strong> Chat safely from your office desk, home, or public transits.</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span><strong>Session transcripts:</strong> Re-read expert insights and guidance anytime you need reference.</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span><strong>File sharing:</strong> Send transcripts, reports, or educational report cards instantly.</span>
              </li>
            </ul>
            <button onClick={scrollToBooking} className="btn btn-secondary" style={{ marginTop: 'auto' }}>
              Choose Chat Consultation
            </button>
          </div>

          {/* Audio Consultation */}
          <div className="medium-card" style={{ background: 'linear-gradient(180deg, var(--color-white) 0%, var(--color-brand-light) 100%)', borderColor: 'var(--color-brand-accent)' }}>
            <div className="medium-icon-box" style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--color-white)' }}>
              <Phone size={32} />
            </div>
            <h3>Audio Call Consultations</h3>
            <p>
              Perfect for dynamic, real-time feedback, deep emotional release, and direct interactive dialogue with your consultant.
            </p>
            <ul>
              <li>
                <CheckCircle size={16} />
                <span><strong>Emotional connection:</strong> Convey tone, nuance, and feelings that are often lost in text messages.</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span><strong>Dynamic dialogue:</strong> Ask follow-up questions immediately and resolve complex queries faster.</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span><strong>Voice privacy:</strong> Conducted over secure, encrypted lines without saving local audio files.</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span><strong>Hands-free:</strong> Sit back, relax, and speak freely while focusing on the conversation.</span>
              </li>
            </ul>
            <button onClick={scrollToBooking} className="btn btn-primary" style={{ marginTop: 'auto' }}>
              Choose Audio Consultation
            </button>
          </div>
        </div>

        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '16px 24px', borderRadius: '12px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)', maxWidth: '750px', margin: '48px auto 0 auto' }}>
          <ShieldAlert size={20} style={{ color: 'var(--color-brand-primary)', flexShrink: '0' }} />
          <p style={{ fontSize: '13px', textAlign: 'left', margin: '0' }}>
            <strong>Privacy Note:</strong> All sessions, transcripts, and voice calls are fully encrypted. We never share your details or consultation records with third parties. Your identity can remain completely anonymous if you choose.
          </p>
        </div>
      </div>
    </section>
  );
}
