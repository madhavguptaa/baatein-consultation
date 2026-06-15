export default function Contact() {
  return (
    <div className="container policy-page-container">
      <h1 className="policy-title">Contact & Support</h1>
      <p className="policy-effective">We are here to assist you with any questions or concerns regarding our services.</p>
      
      <div className="policy-content">
        <h2>Customer Support</h2>
        <p>
          At Baatein Consultation, we prioritize your experience. If you have any inquiries regarding wallet balances, consultant sessions, technical glitches, or feedback, please reach out to our team.
        </p>

        <h2>Support Channels</h2>
        <ul>
          <li>
            <strong>Email Support:</strong> <a href="mailto:elysionsoftwares@gmail.com">elysionsoftwares@gmail.com</a>
            <br />
            <span style={{ fontSize: '13px', color: 'var(--color-text-light)' }}>
              (Average response time: 24 to 48 hours)
            </span>
          </li>
        </ul>

        <h2>Corporate Office Details</h2>
        <p>
          Baatein Consultation is owned and operated by:
        </p>
        <p style={{ paddingLeft: '16px', borderLeft: '3px solid var(--color-brand-primary)' }}>
          <strong>Elysion Softwares Pvt. Ltd.</strong><br />
          Noida, Uttar Pradesh, India
        </p>

        <h2>Consultant Opportunities</h2>
        <p>
          If you are a coach, advisor, listener, astrologer, or professional consultant interested in joining our platform, please write to us at <a href="mailto:elysionsoftwares@gmail.com">elysionsoftwares@gmail.com</a> with your detailed resume and credentials.
        </p>

        <h2>Working Hours</h2>
        <p>
          Our support team operates from <strong>10:00 AM to 7:00 PM (IST)</strong>, Monday to Saturday. Inquiries received outside these hours will be handled on the next business day.
        </p>

        <hr />

        <p style={{ fontSize: '12px', color: 'var(--color-text-light)' }}>
          Please include your registered mobile number and any relevant transaction IDs when contacting support to help us resolve your issue promptly.
        </p>
      </div>
    </div>
  );
}
