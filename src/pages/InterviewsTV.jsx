import { useEffect } from 'react'
import './InterviewsTV.css'

function InterviewsTV() {
  const interviews = [
    {
      id: 1,
      name: "ראש העיר באר שבע",
      topic: "עתיד העיר ואתגרי הפיתוח",
      duration: "45 דקות",
      thumbnail: "/src/images/interview1.jpg"
    },
    {
      id: 2,
      name: "מפקד עוטף עזה",
      topic: "מצב הביטחון והמוכנות",
      duration: "35 דקות",
      thumbnail: "/src/images/interview2.jpg"
    },
    {
      id: 3,
      name: "מנהלת ארגון נפגעי טרור",
      topic: "החוסן האזרחי בדרום",
      duration: "40 דקות",
      thumbnail: "/src/images/interview3.jpg"
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

  return (
    <div className="media-page">
      <div className="media-hero">
        <div className="media-hero-content">
          <h1 className="media-hero-title">ראיונות וטלוויזיה</h1>
          <p className="media-hero-subtitle">תוכניות טלוויזיה וראיונות מעמיקים</p>
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

export default InterviewsTV
