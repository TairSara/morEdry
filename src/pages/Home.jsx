import { useEffect, useState } from 'react'
import { HiMicrophone } from 'react-icons/hi2'
import { IoNewspaper } from 'react-icons/io5'
import { BsCameraVideoFill } from 'react-icons/bs'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Home.css'

function Home({ onNavigate }) {
  const [currentArticle, setCurrentArticle] = useState(0)
  const [expandedMedia, setExpandedMedia] = useState(null)

  const articles = [
    {
      id: 1,
      title: '"אם הייתי משלם זה לא היה קורה": פרצו למפעל בדרום וגנבו אנטריקוט בשווי מיליון שקלים',
      description: 'אירוע שוד חמור במפעל בבאר שבע שבו גנבו בשר אנטריקוט בשווי כחצי מיליון שקלים. המקרה מדגיש את משבר הביטחון האזרחי בדרום ואת הקריסה המתמשכת של החוק והסדר',
      date: '02/03/2025',
      link: 'https://news.walla.co.il/item/3731104',
      media: [
        { type: 'image', src: '/src/images/1.jpeg' },
        { type: 'image', src: '/src/images/2.jpeg' },
        { type: 'image', src: '/src/images/3.jpeg' },
        { type: 'image', src: '/src/images/4.jpeg' },
        { type: 'image', src: '/src/images/5.jpeg' }
      ]
    },
    {
      id: 2,
      title: 'הירי לעבר יישובי הנגב נמשך: "מציעים את הבתים למכירה, חוששים לחיי הילדים"',
      description: 'תושבי רתמים, כרמית, רביבים ועומר מתארים לילות של פחד והפקרות. ביקורת חריפה על התנהלות המשטרה והקריסה המתמשכת של החוק והסדר באזור',
      date: '17/11/2025',
      link: 'https://www.mako.co.il/men-men_news/Article-0994ebc0ed09a91027.htm',
      media: [
        { type: 'video', src: '/src/images/6.mp4', poster: '/src/images/8.jpeg' },
        { type: 'video', src: '/src/images/7.mp4', poster: '/src/images/8.jpeg' },
        { type: 'image', src: '/src/images/8.jpeg' }
      ]
    }
  ]

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

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev + 1) % articles.length)
  }

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev - 1 + articles.length) % articles.length)
  }

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

      <div className="articles-section">
        <div className="articles-container">
          <div className="articles-header">
            <h2 className="articles-title">כתבות מהשטח</h2>
            <p className="articles-subtitle">דיווחים, חקירות וסיפורים מהדרום הישראלי</p>
          </div>

          <div className="articles-carousel">
            <button className="carousel-btn prev" onClick={prevArticle} aria-label="כתבה קודמת">
              <FaChevronRight />
            </button>

            <div className="article-card-main">
              <div className="article-content-top">
                <div className="article-date">{articles[currentArticle].date}</div>
                <h3 className="article-title">{articles[currentArticle].title}</h3>
              </div>

              <div className="article-media-showcase">
                {articles[currentArticle].media.map((item, idx) => (
                  <div
                    key={idx}
                    className={`media-thumbnail media-${idx + 1}`}
                    onClick={() => setExpandedMedia({ ...item, idx })}
                  >
                    <div className="thumbnail-wrapper">
                      {item.type === 'video' ? (
                        <>
                          <video
                            className="thumbnail-video"
                            preload="metadata"
                            muted
                            playsInline
                          >
                            <source src={`${item.src}#t=0.1`} type="video/mp4" />
                          </video>
                          <div className="video-badge">
                            <svg className="video-icon" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </>
                      ) : (
                        <img src={item.src} alt={`תמונה ${idx + 1}`} className="thumbnail-image" />
                      )}
                      <div className="thumbnail-overlay">
                        <div className="magnify-icon">
                          <svg className="magnify-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                            <path d="M11 8v6"/>
                            <path d="M8 11h6"/>
                          </svg>
                        </div>
                        <div className="thumbnail-number">{idx + 1}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="article-content-bottom">
                <p className="article-description">{articles[currentArticle].description}</p>
                <a
                  href={articles[currentArticle].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  קרא את הכתבה המלאה ←
                </a>
              </div>
            </div>

            <button className="carousel-btn next" onClick={nextArticle} aria-label="כתבה הבאה">
              <FaChevronLeft />
            </button>
          </div>

          <div className="carousel-dots">
            {articles.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentArticle ? 'active' : ''}`}
                onClick={() => setCurrentArticle(idx)}
                aria-label={`עבור לכתבה ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {expandedMedia && (
        <div className="media-modal" onClick={() => setExpandedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setExpandedMedia(null)}>✕</button>
            {expandedMedia.type === 'video' ? (
              <video
                className="modal-video"
                controls
                autoPlay
                playsInline
                preload="auto"
                poster={expandedMedia.poster}
              >
                <source src={expandedMedia.src} type="video/mp4" />
                הדפדפן שלך לא תומך בהצגת וידאו
              </video>
            ) : (
              <img src={expandedMedia.src} alt="תמונה מוגדלת" className="modal-image" />
            )}
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">המצפן הדרומי</h3>
              <p className="footer-description">
                ערוץ התקשורת העצמאי הגדול במדינה - קול ציוני, אמיץ ומחבר
              </p>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">קישורים</h4>
              <ul className="footer-links">
                <li><a href="#about">אודות</a></li>
                <li><a href="#media">המדיה שלנו</a></li>
                <li><a href="#articles">כתבות</a></li>
                <li><a href="#contact">צור קשר</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">משפטי</h4>
              <ul className="footer-links">
                <li><a href="#accessibility">הצהרת נגישות</a></li>
                <li><a href="#privacy">מדיניות פרטיות</a></li>
                <li><a href="#terms">תנאי שימוש</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">עקבו אחרינו</h4>
              <div className="footer-social">
                <a href="#facebook" aria-label="פייסבוק">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#instagram" aria-label="אינסטגרם">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#youtube" aria-label="יוטיוב">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} המצפן הדרומי - כל הזכויות שמורות
            </p>
            <p className="footer-credit">
              עיצוב ופיתוח: <a href="#developer">מור אדרי</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
