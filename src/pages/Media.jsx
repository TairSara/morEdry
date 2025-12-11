import { useState, useEffect } from 'react'
import './Media.css'

function Media() {
  const [currentRadioIndex, setCurrentRadioIndex] = useState(0)

  const radioPrograms = [
    {
      id: 1,
      title: "המצפן הבוקר",
      description: "תכנית בוקר יומית עם סיקור אקטואלי ואורחים מרתקים",
      image: "/images/radio1.jpg",
      duration: "2 שעות"
    },
    {
      id: 2,
      title: "דרום בפוקוס",
      description: "עומק בנושאי הדרום - ביטחון, משילות וחברה",
      image: "/images/radio2.jpg",
      duration: "1 שעה"
    },
    {
      id: 3,
      title: "שיחות ערב",
      description: "שיחות לא מסוננות על הנושאים החמים ביותר",
      image: "/images/radio3.jpg",
      duration: "1.5 שעות"
    }
  ]

  const articles = [
    {
      id: 1,
      title: "משבר המשילות בדרום",
      subtitle: "חקירה מעמיקה על אתגרי השלטון המקומי",
      date: "15.11.2024",
      readTime: "8 דקות קריאה"
    },
    {
      id: 2,
      title: "הביטחון האזרחי - אחריות של מי?",
      subtitle: "ניתוח מקיף של מערך החירום בפריפריה",
      date: "10.11.2024",
      readTime: "6 דקות קריאה"
    },
    {
      id: 3,
      title: "קול נשי עצמאי בתקשורת",
      subtitle: "המסע לשינוי השיח הציבורי",
      date: "05.11.2024",
      readTime: "5 דקות קריאה"
    }
  ]

  const interviews = [
    {
      id: 1,
      name: "ראש העיר באר שבע",
      topic: "עתיד העיר ואתגרי הפיתוח",
      duration: "45 דקות",
      thumbnail: "/images/interview1.jpg"
    },
    {
      id: 2,
      name: "מפקד עוטף עזה",
      topic: "מצב הביטחון והמוכנות",
      duration: "35 דקות",
      thumbnail: "/images/interview2.jpg"
    },
    {
      id: 3,
      name: "מנהלת ארגון נפגעי טרור",
      topic: "החוסן האזרחי בדרום",
      duration: "40 דקות",
      thumbnail: "/images/interview3.jpg"
    }
  ]

  const tvPrograms = [
    {
      id: 1,
      title: "המצפן השבועי",
      description: "סיכום שבועי עם הנושאים החמים ביותר",
      views: "120K"
    },
    {
      id: 2,
      title: "דוקו דרומי",
      description: "סדרת דוקו על חיי היומיום בדרום ישראל",
      views: "95K"
    },
    {
      id: 3,
      title: "בלתי מסונן",
      description: "שיחות חדות ובלתי אמצעיות עם דמויות מפתח",
      views: "150K"
    }
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.media-content-section')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  const nextRadio = () => {
    setCurrentRadioIndex((prev) => (prev + 1) % radioPrograms.length)
  }

  const prevRadio = () => {
    setCurrentRadioIndex((prev) => (prev - 1 + radioPrograms.length) % radioPrograms.length)
  }

  return (
    <div className="media-page">
      <div className="media-hero">
        <div className="media-hero-content">
          <h1 className="media-hero-title">המדיה שלנו</h1>
          <p className="media-hero-subtitle">תוכן איכותי ועצמאי במגוון פורמטים</p>
        </div>
      </div>

      <div className="media-content-section radio-section">
        <h2 className="section-title">תוכניות רדיו</h2>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevRadio}>❮</button>
          <div className="carousel-content">
            <div className="radio-card">
              <div className="radio-cover-image">
                <img src="/images/RADIOCOVER.jpeg" alt="Radio Cover" className="radio-cover" />
                <audio controls className="radio-audio">
                  <source src="/images/radio1.mp3" type="audio/mpeg" />
                  הדפדפן שלך לא תומך בנגן אודיו.
                </audio>
              </div>
              <h3 className="radio-title">{radioPrograms[currentRadioIndex].title}</h3>
              <p className="radio-description">{radioPrograms[currentRadioIndex].description}</p>
              <div className="radio-duration">{radioPrograms[currentRadioIndex].duration}</div>
              <button className="listen-btn">האזן עכשיו</button>
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextRadio}>❯</button>
        </div>
        <div className="carousel-indicators">
          {radioPrograms.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentRadioIndex ? 'active' : ''}`}
              onClick={() => setCurrentRadioIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="media-content-section articles-section">
        <h2 className="section-title">כתבות</h2>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={article.id} className="article-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="article-header">
                <span className="article-date">{article.date}</span>
                <span className="article-read-time">{article.readTime}</span>
              </div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-subtitle">{article.subtitle}</p>
              <button className="read-btn">קרא עוד</button>
            </div>
          ))}
        </div>
      </div>

      <div className="media-content-section interviews-section">
        <h2 className="section-title">ראיונות</h2>
        <div className="interviews-grid">
          {interviews.map((interview, index) => (
            <div key={interview.id} className="interview-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="interview-thumbnail">
                <div className="play-icon">▶</div>
              </div>
              <div className="interview-info">
                <h3 className="interview-name">{interview.name}</h3>
                <p className="interview-topic">{interview.topic}</p>
                <span className="interview-duration">🎤 {interview.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="media-content-section tv-section">
        <h2 className="section-title">תוכניות טלוויזיה</h2>
        <div className="tv-grid">
          {tvPrograms.map((program) => (
            <div key={program.id} className="tv-card">
              <div className="tv-icon">📺</div>
              <h3 className="tv-title">{program.title}</h3>
              <p className="tv-description">{program.description}</p>
              <div className="tv-views">👁 {program.views} צפיות</div>
              <button className="watch-btn">צפה עכשיו</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Media
