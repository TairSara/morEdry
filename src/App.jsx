import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import CivilDocumentation from './pages/CivilDocumentation'
import Contact from './pages/Contact'
import Media from './pages/Media'
import RadioPrograms from './pages/RadioPrograms'
import ArticlesPage from './pages/ArticlesPage'
import InterviewsTV from './pages/InterviewsTV'
import Support from './pages/Support'
import WeeklyStory from './components/WeeklyStory'
import ChatBot from './components/ChatBot'
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showStory, setShowStory] = useState(false)
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState(null)

  const handleNavigate = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
    setShowStory(false)
    setMediaDropdownOpen(false)
    if (closeTimeout) clearTimeout(closeTimeout)
  }

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout)
    setMediaDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setMediaDropdownOpen(false)
    }, 300)
    setCloseTimeout(timeout)
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      case 'about':
        return <About />
      case 'media':
        return <Media />
      case 'radio-programs':
        return <RadioPrograms />
      case 'articles':
        return <ArticlesPage />
      case 'interviews-tv':
        return <InterviewsTV />
      case 'support':
        return <Support />
      case 'civil-documentation':
        return <CivilDocumentation />
      case 'contact':
        return <Contact />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="nav-logo-container">
          <div className="logo">
            <img src="/src/images/logo.png" alt="לוגו" className="logo-image" />
          </div>
          {!showStory && (
            <div className="story-avatar-container" onClick={() => { setShowStory(true); setMenuOpen(false); }}>
              <div className="story-ring">
                <img src="/src/images/MOR.webp" alt="הסטורי השבועי" className="story-avatar-nav" />
              </div>
            </div>
          )}
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="#" onClick={() => handleNavigate('home')}>בית</a>
            <a href="#" onClick={() => handleNavigate('about')}>אודות</a>
            <div
              className="nav-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMediaDropdownOpen(!mediaDropdownOpen);
                }}
                className="media-dropdown-link"
              >
                מדיה
              </a>
              {mediaDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#" onClick={() => handleNavigate('radio-programs')}>תוכניות רדיו</a>
                  <a href="#" onClick={() => handleNavigate('articles')}>כתבות ומאמרים</a>
                  <a href="#" onClick={() => handleNavigate('interviews-tv')}>ראיונות ותוכניות טלוויזיה</a>
                </div>
              )}
            </div>
            <a href="#" onClick={() => handleNavigate('civil-documentation')}>תיעוד אזרחי</a>
            <a href="#" onClick={() => handleNavigate('contact')}>צור קשר</a>
            <a href="#" onClick={() => handleNavigate('support')} className="support-link">מצטרפים למאבק</a>
            <div className="social-icons-mobile">
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-icon" aria-label="TikTok"><FaTiktok /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </nav>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
        <div className="social-icons">
          <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" className="social-icon" aria-label="TikTok"><FaTiktok /></a>
          <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="social-icon" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </header>
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
      {showStory && <WeeklyStory onClose={() => setShowStory(false)} />}
      <main className="main">
        {renderPage()}
      </main>
      <ChatBot onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
