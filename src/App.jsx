import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#" onClick={() => setCurrentPage('home')}>בית</a>
          <a href="#" onClick={() => setCurrentPage('about')}>אודות</a>
          <a href="#" onClick={() => setCurrentPage('contact')}>צור קשר</a>
        </nav>
        <a href="#" className="logo" onClick={() => setCurrentPage('home')}>
          <img src="/src/images/logoMor.webp" alt="מור אדרי" className="logo-image" />
        </a>
      </header>
      <main className="main">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
