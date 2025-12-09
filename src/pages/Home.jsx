import { useEffect } from 'react'
import './Home.css'

function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.about-section, .alert-section, .stats-section')
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
            <div className="rays-effect">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="ray" style={{ '--i': i }}></div>
              ))}
            </div>
            <div className="image-wrapper">
              <img src="/src/images/MOR.webp" alt="מור אדרי" className="about-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="alert-section">
        <div className="alert-container">
          <div className="alert-icon">⚠️</div>
          <h2 className="alert-title">הדרום בסכנה!</h2>
          <p className="alert-text">
            אתגרי הביטחון, המשילות וחוסן האזרחים בדרום
          </p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">4M+</div>
            <div className="stat-label">צפיות</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">עצמאי</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">#1</div>
            <div className="stat-label">בדרום</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
