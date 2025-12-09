import { useEffect } from 'react'
import { HiMicrophone } from 'react-icons/hi2'
import { IoNewspaper } from 'react-icons/io5'
import { BsCameraVideoFill } from 'react-icons/bs'
import './Home.css'

function Home({ onNavigate }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.alert-section')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text-center">
            <h1 className="hero-title">המצפן הדרומי</h1>
            <p className="hero-subtitle">
              ערוץ התקשורת העצמאי הגדול במדינה
            </p>
            <p className="hero-description">
              קול ציוני, אמיץ ומחבר בין עם, מדינה ותקשורת, שזכה למעל 4 מיליון צפיות ולשיח ציבורי ער ברשתות החברתיות.
            </p>
            <div className="hero-buttons">
              <button className="hero-cta primary">צפו בתכנים</button>
              <button className="hero-cta secondary">הצטרפו אלינו</button>
            </div>
          </div>
          <div className="hero-icon-container">
            <img src="/src/images/ICON1.gif" alt="לוגו המצפן הדרומי" className="hero-icon" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">מור אדרי</h2>
            <p className="about-subtitle">עורכת דין, יועצת תקשורת ואסטרטגיה, מרצה ומובילת דעת קהל בדרום ישראל</p>
            <div className="about-text">
              <p>
                במהלך כמעט שני עשורים אני פועלת במרחב שבין משפט, תקשורת, ציבור וביטחון אזרחי -
                ומשלבת הבנה מעשית של כל המערכות: רשויות מקומיות, משרדי ממשלה, גופים ביטחוניים,
                תקשורת, חברה אזרחית וקהילות בשטח.
              </p>
              <p className="highlight-text">
                קול נשי עצמאי, חד וציוני מהדרום - מחוברת לשטח ולמדינה, לא שייכת לשום מחנה,
                אך מדברת אמת מתוך אחריות ואהבה גדולה למולדת.
              </p>
              <p>
                כמייסדת ערוץ התקשורת "המצפן הדרומי", יצרתי במה עצמאית שמביאה את סיפורו של הדרום
                הישראלי - את אתגרי המשילות, הביטחון והחיים עצמם – אל מרכז השיח הציבורי.
              </p>
            </div>
          </div>
          <div className="about-image-container">
            <div className="image-wrapper">
              <img src="/src/images/MOR.webp" alt="מור אדרי" className="about-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="media-showcase-section">
        <div className="media-showcase-container">
          <div className="media-showcase-header">
            <h2 className="media-showcase-title">המדיה שלנו</h2>
            <p className="media-showcase-subtitle">
              תוכן איכותי ומקצועי במגוון פלטפורמות - רדיו, כתבות וראיונות
            </p>
          </div>

          <div className="media-showcase-grid">
            <div className="media-showcase-card" onClick={() => onNavigate?.('media')}>
              <div className="media-showcase-icon-wrapper">
                <HiMicrophone className="media-showcase-icon" />
              </div>
              <h3 className="media-showcase-card-title">תוכניות רדיו</h3>
              <p className="media-showcase-card-description">
                שידורים חיים ותוכניות מוקלטות עם אורחים מרתקים ונושאים חמים
              </p>
              <div className="media-showcase-card-footer">
                <span className="media-showcase-link">צפה בכל התוכניות ←</span>
              </div>
            </div>

            <div className="media-showcase-card" onClick={() => onNavigate?.('media')}>
              <div className="media-showcase-icon-wrapper">
                <IoNewspaper className="media-showcase-icon" />
              </div>
              <h3 className="media-showcase-card-title">כתבות</h3>
              <p className="media-showcase-card-description">
                כתבות חקירה ודעה מעמיקות על נושאים חברתיים וביטחוניים
              </p>
              <div className="media-showcase-card-footer">
                <span className="media-showcase-link">קרא את הכתבות ←</span>
              </div>
            </div>

            <div className="media-showcase-card" onClick={() => onNavigate?.('media')}>
              <div className="media-showcase-icon-wrapper">
                <BsCameraVideoFill className="media-showcase-icon" />
              </div>
              <h3 className="media-showcase-card-title">ראיונות</h3>
              <p className="media-showcase-card-description">
                שיחות עומק עם אנשי מפתח, מובילי דעה ודמויות מרכזיות
              </p>
              <div className="media-showcase-card-footer">
                <span className="media-showcase-link">צפה בראיונות ←</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
