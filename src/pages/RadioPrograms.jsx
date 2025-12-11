import { useState, useEffect } from 'react'
import './RadioPrograms.css'

function RadioPrograms() {
  const [filterCategory, setFilterCategory] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  const radioPrograms = [
    {
      id: 1,
      title: "המצפן הדרומי",
      description: "תכנית רדיו עם מור אדרי, המציגה את הנושאים החמים בדרום ישראל - אקטואליה, פוליטיקה, חברה וביטחון אזרחי",
      coverImage: "/src/images/Radio Cover.jpeg",
      audioFile: "/src/images/radio1.mp3",
      duration: "15:30",
      date: "2025-12-10",
      category: "אקטואליה",
      views: 1250
    }
  ]

  const categories = ['הכל', 'אקטואליה', 'פוליטיקה', 'חברה', 'ביטחון']

  const filteredPrograms = radioPrograms.filter(program =>
    filterCategory === 'all' || program.category === filterCategory
  )

  const sortedPrograms = [...filteredPrograms].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date)
    } else if (sortBy === 'views') {
      return b.views - a.views
    }
    return 0
  })

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

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })
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
        <div className="radio-header">
          <h2 className="section-title">התוכניות שלנו</h2>

          <div className="radio-controls">
            <div className="filter-buttons">
              <span className="control-label">סינון לפי קטגוריה:</span>
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${filterCategory === (category === 'הכל' ? 'all' : category) ? 'active' : ''}`}
                  onClick={() => setFilterCategory(category === 'הכל' ? 'all' : category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="sort-buttons">
              <span className="control-label">מיון לפי:</span>
              <button
                className={`sort-btn ${sortBy === 'date' ? 'active' : ''}`}
                onClick={() => setSortBy('date')}
              >
                תאריך
              </button>
              <button
                className={`sort-btn ${sortBy === 'views' ? 'active' : ''}`}
                onClick={() => setSortBy('views')}
              >
                צפיות
              </button>
            </div>
          </div>
        </div>

        <div className="radio-list">
          {sortedPrograms.map((program, index) => (
            <div key={program.id} className="radio-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="radio-item-cover">
                <img src={program.coverImage} alt={program.title} className="radio-item-image" />
              </div>

              <div className="radio-item-content">
                <div className="radio-item-header">
                  <h3 className="radio-item-title">{program.title}</h3>
                  <span className="radio-item-category">{program.category}</span>
                </div>

                <p className="radio-item-description">{program.description}</p>

                <div className="radio-item-meta">
                  <span className="radio-item-date">📅 {formatDate(program.date)}</span>
                  <span className="radio-item-duration">🎧 {program.duration}</span>
                  <span className="radio-item-views">👁 {program.views.toLocaleString()} צפיות</span>
                </div>

                <audio controls className="radio-item-player">
                  <source src={program.audioFile} type="audio/mpeg" />
                  הדפדפן שלך לא תומך בנגן אודיו.
                </audio>
              </div>
            </div>
          ))}
        </div>

        {sortedPrograms.length === 0 && (
          <div className="no-results">
            <p>לא נמצאו תוכניות בקטגוריה זו</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RadioPrograms
