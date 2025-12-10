import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Media from './pages/Media'
import Support from './pages/Support'
import WeeklyStory from './components/WeeklyStory'
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showStory, setShowStory] = useState(false)

  const handleNavigate = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
    setShowStory(false)
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      case 'about':
        return <About />
      case 'media':
        return <Media />
      case 'support':
        return <Support />
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
            <a href="#" onClick={() => handleNavigate('media')}>מדיה</a>
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
    </div>
  )
}

export default App
