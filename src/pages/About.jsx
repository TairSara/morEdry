import { useState } from 'react'
import './About.css'

function About() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageIndex, setImageIndex] = useState(0)

  const galleryImages = [
    '/images/can11.jpeg',
    '/images/about1.webp',
    '/images/about2.webp',
    '/images/about3.webp',
    '/images/about4.webp',
    '/images/about5.webp',
    '/images/about6.webp',
    '/images/about7.webp',
    '/images/about8.webp',
    '/images/about9.webp',
    '/images/about10.webp',
    '/images/about11.webp',
    '/images/about13.webp',
    '/images/about14.webp',
    '/images/about15.webp',
    '/images/about16.webp'
  ]

  const openLightbox = (index) => {
    setImageIndex(index)
    setSelectedImage(galleryImages[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (imageIndex + 1) % galleryImages.length
    setImageIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (imageIndex - 1 + galleryImages.length) % galleryImages.length
    setImageIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  return (
    <div className="about">
      <div className="about-hero">
        <div className="hero-content">
          <img src="/images/morede.jpg" alt="מור אדרי" className="hero-profile-image" />
          <div className="hero-text">
            <h1 className="about-hero-title">מור אדרי</h1>
            <p className="about-hero-subtitle">עורכת דין | יועצת תקשורת ואסטרטגיה | מרצה ומובילת דעת קהל בדרום</p>
          </div>
        </div>
      </div>

      <div className="about-story-section">
        <div className="story-content">
          <div className="story-text">
            <p className="story-paragraph">
              במהלך כמעט שני עשורים אני פועלת במרחב שבין משפט, תקשורת, ציבור וביטחון אזרחי - ומשלבת הבנה מעשית של כל המערכות: רשויות מקומיות, משרדי ממשלה, גופים ביטחוניים, תקשורת, חברה אזרחית וקהילות בשטח.
            </p>
            <div className="story-highlight">
              <div className="highlight-line"></div>
              <p className="highlight-text">
                קול נשי עצמאי, חד וציוני מהדרום - מחוברת לשטח ולמדינה, לא שייכת לשום מחנה, אך מדברת אמת מתוך אחריות ואהבה גדולה למולדת.
              </p>
            </div>
            <p className="story-paragraph">
              כמייסדת ערוץ התקשורת "המצפן הדרומי", יצרתי במה עצמאית שמביאה את סיפורו של הדרום הישראלי - את אתגרי המשילות, הביטחון והחיים עצמם – אל מרכז השיח הציבורי.
            </p>
          </div>
        </div>
      </div>

      <div className="about-impact-section">
        <div className="impact-content">
          <div className="impact-number">
            <span className="number-big">4M+</span>
            <span className="number-label">צפיות בשנה האחרונה</span>
          </div>
          <p className="impact-text">
            הערוץ הפך לכלי משמעותי שמחבר בין אזרחים, מנהיגים וגורמי ביטחון סביב מציאות אחת: מדינת ישראל הדרומית.
          </p>
        </div>
      </div>

      <div className="about-service-section">
        <div className="service-content">
          <h2 className="service-title">שירות מילואים</h2>
          <p className="service-paragraph">
            במקביל לשירותי הציבורי אני משרתת במילואים כמודיעת נפגעים בדרום – תפקיד שמחבר אותי אל הלב של עם ישראל, אל המשפחות, ואל האחריות העמוקה כלפי החיים עצמם.
          </p>
        </div>
      </div>

      <div className="about-strengths-section">
        <div className="strengths-header">
          <h2 className="strengths-title">תחומי מומחיות</h2>
        </div>
        <div className="strengths-flow">
          <div className="strength-item">
            <div className="strength-number">01</div>
            <p className="strength-text">ניסיון עשיר בעבודה מול הדרג הבכיר – שרים, חברי כנסת, ראשי רשויות וגורמי ביטחון</p>
          </div>
          <div className="strength-item">
            <div className="strength-number">02</div>
            <p className="strength-text">יכולת לנתח, לתכלל ולהוביל תהליכים מורכבים בממשק שבין משפט, ציבור ותקשורת</p>
          </div>
          <div className="strength-item">
            <div className="strength-number">03</div>
            <p className="strength-text">הבנה מעמיקה של דעת הקהל, המרחב הדיגיטלי והתקשורת הישראלית</p>
          </div>
          <div className="strength-item">
            <div className="strength-number">04</div>
            <p className="strength-text">מומחיות בניהול משברים, תקשורת ציבורית ובניית חיבורים בין־מגזריים</p>
          </div>
          <div className="strength-item">
            <div className="strength-number">05</div>
            <p className="strength-text">שילוב של ראייה אסטרטגית עם יכולת ביצועית גבוהה – מהרעיון ועד לשטח</p>
          </div>
        </div>
      </div>

      <div className="about-gallery-section">
        <h2 className="gallery-title">גלריית תמונות</h2>
        <div className="gallery-flow">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item-flow"
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img src={image} alt={`מור אדרי ${index + 1}`} className="gallery-image-flow" />
              <div className="gallery-overlay-flow">
                <div className="zoom-circle">
                  <svg className="zoom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="7"/>
                    <path d="m21 21-5.5-5.5"/>
                    <path d="M11 8v6"/>
                    <path d="M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="תמונה מוגדלת" className="lightbox-image" />
            <div className="lightbox-counter">{imageIndex + 1} / {galleryImages.length}</div>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>❯</button>
        </div>
      )}

      <div className="about-certificates-section">
        <h2 className="certificates-title">תעודות והכשרות</h2>
        <div className="certificates-flow">
          <div className="certificate-item">
            <img src="/images/t1.webp" alt="תעודה 1" className="certificate-img" />
          </div>
          <div className="certificate-item">
            <img src="/images/t2.webp" alt="תעודה 2" className="certificate-img" />
          </div>
          <div className="certificate-item">
            <img src="/images/t3.webp" alt="תעודה 3" className="certificate-img" />
          </div>
        </div>
      </div>

      <div className="about-mission-section">
        <div className="mission-wrapper">
          <h2 className="mission-title">מה אני מביאה לשולחן</h2>
          <div className="mission-flow">
            <p className="mission-paragraph">
              מביאה איתי ראייה של שטח ושל מדינה. אני חיה את הדרום, מכירה את האנשים, את הקשיים ואת נקודות האור, ויודעת לתרגם מציאות לשפה של פתרונות.
            </p>
            <p className="mission-paragraph">
              מול מערכת הביטחון אני מביאה פרספקטיבה אזרחית־חברתית, שקולה ועניינית – שמבינה את הצורך המבצעי אך גם את האחריות האנושית שמאחוריו.
            </p>
            <div className="mission-statement">
              אני מאמינה בשיתופי פעולה, בחיזוק אמון הציבור במערכות, וביצירת שיח מאחד ולא מפריד.
            </div>
            <p className="mission-closing">
              זו הדרך שבה אני פועלת, זו השליחות שלי.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
