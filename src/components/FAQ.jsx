import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between audio and chat consultations?",
      answer: "Audio calls allow for real-time, vocal dialogue where you can express feelings through tone and get immediate responses. Chats are text-based, allowing you to participate quietly from any setting, take your time drafting responses, and keep a clean written transcript of the guidance."
    },
    {
      question: "Are my consultation sessions confidential?",
      answer: "Yes, confidentiality is our primary principle. All communication is encrypted, transcripts are stored securely, and we never share your files, details, or consultation topics. You can even choose a screen pseudonym to remain fully anonymous."
    },
    {
      question: "How are the consultation specialists vetted?",
      answer: "We verify academic backgrounds, licenses, and clinical experience. Each consultant goes through detailed video-based simulations and case reviews before joining our booking platform."
    },
    {
      question: "Can I reschedule my session?",
      answer: "Yes. You can reschedule your session by notifying your consultant or clicking the management link in your confirmation email at least 12 hours prior to the scheduled start time."
    },
    {
      question: "Do you offer emergency crisis counseling?",
      answer: "No. Baatein Consultation is an advisory and counseling service for educational, relationship, career, and personal development topics. We are not equipped for immediate mental health emergencies or psychiatric crises. Please contact national emergency hotlines in such situations."
    }
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="sub">Common Questions</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find quick answers regarding our privacy safeguards, booking operations, and the credentials of our consultants.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div className={`faq-item ${isActive ? 'active' : ''}`} key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isActive}
                >
                  <span>{faq.question}</span>
                  {isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
