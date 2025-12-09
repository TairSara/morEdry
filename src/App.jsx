import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Media from './pages/Media'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      case 'about':
        return <About />
      case 'media':
        return <Media />
      case 'contact':
        return <Contact />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#" onClick={() => handleNavigate('home')}>בית</a>
          <a href="#" onClick={() => handleNavigate('about')}>אודות</a>
          <a href="#" onClick={() => handleNavigate('media')}>מדיה</a>
          <a href="#" onClick={() => handleNavigate('contact')}>צור קשר</a>
        </nav>
      </header>
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
      <main className="main">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
