import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import "./BusinessCard.css";

function BusinessCard() {
  const contactInfo = {
    phone: "972545531616",
    whatsapp: "972545531616",
    facebook: "https://www.facebook.com/mwr.sywn.dry/",
    instagram: "https://www.instagram.com/mor.edery/?hl=he",
    website: window.location.origin,
  };

  return (
    <div className="business-card-page">
      <div className="business-card-container">
        <div className="business-card">
          <div className="card-header">
            <div className="compass-icon-container">
              <img
                src="/images/ICON1.png"
                alt="לוגו המצפן הדרומי"
                className="card-compass-logo"
              />
            </div>
            <div className="profile-image-wrapper">
              <img
                src="/images/MOR.webp"
                alt="מור אדרי"
                className="profile-image"
              />
            </div>
          </div>

          <div className="card-content">
            <h1 className="card-name">מור אדרי המצפן הדרומי</h1>
            <p className="card-tagline">
              עובדות, עומק ושיח ציבורי – מדיה עצמאית עם אחריות.
            </p>

            <div className="card-description">
              <p className="description-title">
                עו״ד, יועצת תקשורת וקשרי ממשל לנבחרי ציבור.
              </p>
              <p className="description-text">
                קול חד וציוני מהדרום, יוצרת תוכן בנושאי ביטחון, משילות וריבונות.
                נלחמת בפשיעה הבדואית.
              </p>
            </div>

            <div className="card-divider"></div>

            <div className="contact-buttons">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn instagram"
                aria-label="Instagram"
              >
                <FaInstagram className="btn-icon" />
                <span>Instagram</span>
              </a>

              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="btn-icon" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:+${contactInfo.phone}`}
                className="contact-btn phone"
                aria-label="טלפון"
              >
                <FaPhone className="btn-icon" />
                <span>טלפון</span>
              </a>

              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn facebook"
                aria-label="Facebook"
              >
                <FaFacebookF className="btn-icon" />
                <span>Facebook</span>
              </a>

              <a
                href={contactInfo.website}
                className="contact-btn website"
                aria-label="אתר רשמי"
              >
                <FaGlobe className="btn-icon" />
                <span>אתר רשמי</span>
              </a>
            </div>
          </div>

          <div className="card-footer">
            <img src="/images/logo.png" alt="לוגו" className="footer-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
