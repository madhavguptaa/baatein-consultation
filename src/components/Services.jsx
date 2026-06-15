import { GraduationCap, Heart, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

export default function Services() {
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

  const servicesData = [
    {
      icon: <GraduationCap size={28} />,
      title: 'Education & Academic Pathway',
      description: 'Guiding students and parents through academic choices, stream selections, college admissions, and global education prospects.',
      tags: ['Stream Selection', 'College Admissions', 'Study Abroad', 'Academic Performance']
    },
    {
      icon: <Heart size={28} style={{ color: '#C85C5C' }} />,
      title: 'Marriage & Relationship Harmony',
      description: 'Bridging communication gaps, resolving recurring domestic conflicts, alignment of family expectations, and rebuilding trust.',
      tags: ['Pre-Marital Alignments', 'Conflict Resolution', 'Family Dynamics', 'Trust Rebuilding']
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Career & Professional Transition',
      description: 'Helping professionals navigate career plateaus, prepare for major job transitions, refine resumes, and manage workplace stress.',
      tags: ['Career Planning', 'Resume Refinement', 'Interview Preparation', 'Workplace Politics']
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Personal Development & Wellness',
      description: 'One-on-one life coaching targeting self-confidence, stress management, daily habit development, and life stage transitions.',
      tags: ['Confidence Building', 'Anxiety & Stress Management', 'Life Transitions', 'Goal Setting']
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="sub">Specialized Domains</span>
          <h2>Professional Consultation Offerings</h2>
          <p>
            We connect you with certified specialists who have deep domain expertise. Explore our focus areas below and take the first step towards resolution.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="medium-icon-box" style={{ width: '48px', height: '48px', borderRadius: '12px' }}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <div className="service-features">
                {service.tags.map((tag, tagIndex) => (
                  <span className="service-tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <a onClick={scrollToBooking} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: 'var(--color-brand-primary)', textDecoration: 'none', cursor: 'pointer' }}>
                  Book this category <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
