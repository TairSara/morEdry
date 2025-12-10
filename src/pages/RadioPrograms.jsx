import { useState, useEffect } from 'react'
import './RadioPrograms.css'

function RadioPrograms() {
  const [currentRadioIndex, setCurrentRadioIndex] = useState(0)

  const radioPrograms = [
    {
      id: 1,
      title: "המצפן הבוקר",
      description: "תכנית בוקר יומית עם סיקור אקטואלי ואורחים מרתקים",
      image: "/src/images/radio1.jpg",
      duration: "2 שעות"
    },
    {
      id: 2,
      title: "דרום בפוקוס",
      description: "עומק בנושאי הדרום - ביטחון, משילות וחברה",
      image: "/src/images/radio2.jpg",
      duration: "1 שעה"
    },
    {
      id: 3,
      title: "שיחות ערב",
      description: "שיחות לא מסוננות על הנושאים החמים ביותר",
      image: "/src/images/radio3.jpg",
      duration: "1.5 שעות"
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
          <h1 className="media-hero-title">תוכניות רדיו</h1>
          <p className="media-hero-subtitle">האזינו לתוכניות הרדיו המובילות שלנו</p>
        </div>
      </div>

      <div className="media-content-section radio-section">
        <h2 className="section-title">התוכניות שלנו</h2>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevRadio}>❮</button>
          <div className="carousel-content">
            <div className="radio-card">
              <div className="radio-cover-image">
                <img src="/src/images/RADIOCOVER.jpeg" alt="Radio Cover" className="radio-cover" />
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
    </div>
  )
}

export default RadioPrograms
