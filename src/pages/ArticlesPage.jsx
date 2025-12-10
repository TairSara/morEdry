import { useEffect } from 'react'
import './ArticlesPage.css'

function ArticlesPage() {
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
    },
    {
      id: 4,
      title: "פריפריה בעידן דיגיטלי",
      subtitle: "הפער הדיגיטלי והשפעתו על הדרום",
      date: "01.11.2024",
      readTime: "7 דקות קריאה"
    },
    {
      id: 5,
      title: "חינוך במרחב הדרומי",
      subtitle: "אתגרים והזדמנויות במערכת החינוך",
      date: "28.10.2024",
      readTime: "6 דקות קריאה"
    },
    {
      id: 6,
      title: "כלכלת הדרום בעשור הקרוב",
      subtitle: "תחזיות ואתגרים כלכליים",
      date: "22.10.2024",
      readTime: "9 דקות קריאה"
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

  return (
    <div className="media-page">
      <div className="media-hero">
        <div className="media-hero-content">
          <h1 className="media-hero-title">כתבות ומאמרים</h1>
          <p className="media-hero-subtitle">עיתונות עצמאית ואיכותית מהדרום</p>
        </div>
      </div>

      <div className="media-content-section articles-section">
        <h2 className="section-title">הכתבות האחרונות</h2>
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
    </div>
  )
}

export default ArticlesPage
