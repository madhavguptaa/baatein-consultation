import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "The academic guidance session helped my daughter select her high school streams without stress. The consultant laid out concrete job profiles and college requirements. Having it on an audio call kept it highly personal.",
      author: "Sneha R.",
      location: "Kolkata",
      type: "Education Consultation",
      image: "/sneha.png"
    },
    {
      stars: 5,
      quote: "We were stuck in a repeating loop of communication blocks before our marriage. The counselor gave us structural dialogue tasks in our chat session that helped clear assumptions. The chat format felt very safe.",
      author: "Alok & Meera",
      location: "Noida",
      type: "Relationship Consultation",
      image: "/alok-meera.png"
    },
    {
      stars: 5,
      quote: "I started a consultation during a difficult career redundancy. The advisor helped me list transferable skills and address my interview anxiety with actionable tips. It restored my confidence.",
      author: "Vikram K.",
      location: "Pune",
      type: "Career Transition",
      image: "/vikram.png"
    },
    {
      stars: 5,
      quote: "Transitioning to a new city and job was causing me severe adjustment stress. The personal wellness advisor gave me concrete habit frameworks that helped me rebuild my daily routine and boundary settings.",
      author: "Priya M.",
      location: "Chennai",
      type: "Personal Growth Advice",
      image: "/priya.png"
    },
    {
      stars: 5,
      quote: "Got complete clarity on my university application timeline and essay structure. The counselor had extensive knowledge of European admission procedures. Highly professional guidance.",
      author: "Rajat B.",
      location: "Hyderabad",
      type: "Higher Education Advisory",
      image: "/rajat.png"
    },
    {
      stars: 5,
      quote: "Highly discreet chat counseling that helped me handle high-stress management responsibilities. Being able to text quietly from my workspace during lunch breaks was incredibly convenient.",
      author: "Tanvi D.",
      location: "Ahmedabad",
      type: "Wellness & Stress Advice",
      image: "/tanvi.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="sub">Client Reviews</span>
          <h2>Feedback from Our Sessions</h2>
          <p>
            Read how we have helped students, couples, and professionals find actionable clarity and direction in their lives.
          </p>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden', maxWidth: '800px', margin: '0 auto', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', transition: 'transform 0.6s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviews.map((review, index) => (
              <div key={index} style={{ minWidth: '100%', padding: '0 16px', boxSizing: 'border-box' }}>
                <div className="testimonial-card" style={{ height: '100%', margin: '0 auto' }}>
                  <div className="testimonial-stars">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{review.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar" style={{ overflow: 'hidden', padding: 0 }}>
                      <img 
                        src={review.image} 
                        alt={review.author} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <div className="author-info">
                      <h4>{review.author}</h4>
                      <span>{review.location} — {review.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === i ? 'var(--color-brand-primary)' : 'var(--color-border)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background-color 0.3s ease'
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
