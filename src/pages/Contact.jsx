import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-hero">
        <h1 className="contact-main-title">בואו ניצור</h1>
        <h2 className="contact-main-subtitle">יחד</h2>
      </div>

      <div className="contact-container">
        <div className="contact-intro">
          <p className="intro-text">
            מעוניינים לשתף פעולה? יש לכם רעיון לפרויקט? אשמח לשמוע מכם.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <div className="card-header">
              <div className="icon-circle">✉️</div>
              <h3 className="card-title">אימייל</h3>
            </div>
            <a href="mailto:info@moradri.com" className="contact-link">
              info@moradri.com
            </a>
          </div>

          <div className="contact-card">
            <div className="card-header">
              <div className="icon-circle">📱</div>
              <h3 className="card-title">טלפון</h3>
            </div>
            <a href="tel:+972501234567" className="contact-link">
              050-123-4567
            </a>
          </div>

          <div className="contact-card">
            <div className="card-header">
              <div className="icon-circle">📍</div>
              <h3 className="card-title">מיקום</h3>
            </div>
            <p className="contact-info">
              הדרום, ישראל
            </p>
          </div>
        </div>

        <div className="contact-form-section">
          <h3 className="form-title">שלחו הודעה</h3>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="שם מלא" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="אימייל" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="טלפון" className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="הודעה" className="form-textarea" rows="6" required></textarea>
            </div>
            <button type="submit" className="form-submit">שלח הודעה</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
