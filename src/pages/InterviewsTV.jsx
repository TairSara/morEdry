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
          <p className="media-hero-subtitle">ראיונות מעמיקים עם דמויות מפתח</p>
        </div>
      </div>

      <div className="media-content-section interviews-section">
        <h2 className="section-title">ראיונות וטלוויזיה</h2>
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
    </div>
  )
}

export default InterviewsTV
