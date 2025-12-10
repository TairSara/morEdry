import { useState } from 'react'
import './Contact.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaCheckCircle } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // כאן תוסיפי את הלוגיקה לשליחת הטופס
    console.log('Contact form submitted:', formData)
    setSubmitStatus('success')
    setTimeout(() => {
      setSubmitStatus('')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">צור קשר</h1>
          <p className="contact-subtitle">נשמח לשמוע ממך ולענות על כל שאלה</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info-section">
          <h3 className="section-title">דרכי התקשרות</h3>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FaPhone className="contact-icon" />
              </div>
              <h4 className="contact-card-title">טלפון</h4>
              <a href="tel:+972501234567" className="contact-card-link">050-123-4567</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <h4 className="contact-card-title">אימייל</h4>
              <a href="mailto:info@hamatzpen-darom.co.il" className="contact-card-link">info@hamatzpen-darom.co.il</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <h4 className="contact-card-title">כתובת</h4>
              <p className="contact-card-text">הדרום, ישראל</p>
            </div>
          </div>

          <div className="social-section">
            <h4 className="social-title">עקבו אחרינו</h4>
            <div className="social-links">
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h3 className="section-title">שלח לנו הודעה</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">שם מלא *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="הכניסו שם מלא"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">אימייל *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">טלפון *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="050-000-0000"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">נושא *</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="נושא הפניה"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">הודעה *</label>
              <textarea
                name="message"
                placeholder="כתוב את הודעתך כאן..."
                className="form-textarea"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <FaCheckCircle className="button-icon" />
              שלח הודעה
            </button>
          </form>

          {submitStatus === 'success' && (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <p className="success-text">ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
