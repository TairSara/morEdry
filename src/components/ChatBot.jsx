import { useState } from 'react'
import './ChatBot.css'
import { FaTimes, FaPaperPlane, FaCompass, FaUndo, FaFileAlt, FaEnvelope } from 'react-icons/fa'

function ChatBot({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'שלום וברוכים הבאים!',
      timestamp: new Date()
    },
    {
      type: 'bot',
      text: 'אני המצפן הדרומי הדיגיטלי - כאן כדי לעזור לך ולספר על מור אדרי והמאבק למען הדרום.',
      timestamp: new Date()
    },
    {
      type: 'bot',
      text: 'בחר באחת האופציות למטה או שלח לי הודעה',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [showContactForm, setShowContactForm] = useState(false)
  const [showOptions, setShowOptions] = useState(true)
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const quickOptions = [
    { label: 'מי אנחנו?', value: 'about' },
    { label: 'איך אפשר לעזור?', value: 'help' },
    { label: 'המאבק שלנו', value: 'struggle' }
  ]

  const pageButtons = [
    { label: 'תיעוד אזרחי', value: 'civil-documentation', icon: FaFileAlt },
    { label: 'צור קשר', value: 'contact', icon: FaEnvelope }
  ]

  const botResponses = {
    about: [
      'מור אדרי - עו"ד, יועצת תקשורת ואסטרטגיה',
      '',
      'במהלך כמעט שני עשורים אני פועלת במרחב שבין משפט, תקשורת, ציבור וביטחון אזרחי.',
      '',
      'המצפן הדרומי - ערוץ התקשורת העצמאי הגדול במדינה',
      '• מעל 4 מיליון צפיות',
      '• שיח ציבורי ער ברשתות החברתיות',
      '',
      'קול נשי עצמאי, חד וציוני מהדרום'
    ],
    help: [
      'דרכים להצטרף למאבק:',
      '',
      '• עקבו אחרינו ברשתות החברתיות',
      '• שתפו את התכנים והמסרים שלנו',
      '• תרמו לתיעוד אזרחי - תמונות וסרטונים מהשטח',
      '• השתתפו באירועים ופעילויות',
      '• הצטרפו למאבק למען הדרום',
      '',
      'ביחד - נחזיר את הביטחון והתקווה לדרום!'
    ],
    struggle: [
      'המאבק שלנו - למען דרום חזק ומשגשג',
      '',
      '• ביטחון אזרחי - דרישה לסדר וחוק',
      '• תשתיות ופיתוח - השקעה בדרום',
      '• חיזוק הקהילה - זהות דרומית גאה',
      '• זכויות התושבים - שוויון והגינות',
      '',
      'המצפן הדרומי מוביל את המאבק למען עתיד טוב יותר!',
      '',
      'רוצה להצטרף? בחר באחת האופציות למטה'
    ]
  }

  const handleQuickOption = (value) => {
    const userMessage = quickOptions.find(opt => opt.value === value)?.label

    if (userMessage) {
      setMessages(prev => [...prev, {
        type: 'user',
        text: userMessage,
        timestamp: new Date()
      }])
    }

    setShowOptions(false)

    setTimeout(() => {
      const responses = botResponses[value] || []
      responses.forEach((response, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            text: response,
            timestamp: new Date()
          }])
        }, index * 400)
      })
    }, 500)
  }

  const handlePageNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page)
      setIsOpen(false)
    }
  }

  const handleBackToOptions = () => {
    setShowContactForm(false)
    setShowOptions(true)
    setMessages(prev => [...prev, {
      type: 'bot',
      text: 'חזרנו לתפריט הראשי!',
      timestamp: new Date()
    }])

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'בחר את הנושא שמעניין אותך מהאופציות למטה',
        timestamp: new Date()
      }])
    }, 500)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    setMessages(prev => [...prev, {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    }])

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'תודה רבה על פנייתך!',
        timestamp: new Date()
      }])

      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: 'קיבלנו את הודעתך ואחד מנציגינו יחזור אליך בהקדם האפשרי.',
          timestamp: new Date()
        }])

        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            text: 'האם יש משהו נוסף שאוכל לעזור בו? בחר מהאופציות למטה',
            timestamp: new Date()
          }])
          setShowOptions(true)
        }, 800)
      }, 600)
    }, 800)

    setInputValue('')
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()

    setMessages(prev => [...prev, {
      type: 'bot',
      text: `תודה רבה ${contactData.name}!`,
      timestamp: new Date()
    }])

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'קיבלנו את פרטיך בהצלחה ונחזור אליך בהקדם האפשרי.',
        timestamp: new Date()
      }])

      setTimeout(() => {
        setShowContactForm(false)
        setShowOptions(true)
        setContactData({ name: '', phone: '', email: '', message: '' })
      }, 1000)
    }, 600)
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      {!isOpen && (
        <div className="chatbot-trigger" onClick={() => setIsOpen(true)}>
          <div className="compass-icon">
            <FaCompass className="compass-svg" />
          </div>
          <div className="trigger-pulse"></div>
        </div>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="header-content">
              <div className="compass-icon-small">
                <FaCompass />
              </div>
              <div className="header-text">
                <h3 className="chatbot-title">המצפן הדרומי</h3>
                <p className="chatbot-status">🟢 מחובר</p>
              </div>
            </div>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-bubble">
                  {message.text}
                </div>
              </div>
            ))}

            {!showContactForm && showOptions && (
              <>
                <div className="quick-options">
                  {quickOptions.map((option, index) => (
                    <button
                      key={index}
                      className="quick-option-btn"
                      onClick={() => handleQuickOption(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div className="page-buttons">
                  {pageButtons.map((button, index) => {
                    const IconComponent = button.icon
                    return (
                      <button
                        key={index}
                        className="page-nav-btn"
                        onClick={() => handlePageNavigation(button.value)}
                      >
                        <IconComponent className="page-btn-icon" />
                        {button.label}
                      </button>
                    )
                  })}
                </div>
              </>
            )}

            {!showOptions && !showContactForm && (
              <div className="back-to-options">
                <button className="back-btn" onClick={handleBackToOptions}>
                  <FaUndo className="back-icon" />
                  חזרה לתפריט ראשי
                </button>
              </div>
            )}

            {showContactForm && (
              <div className="contact-form-inline">
                <form onSubmit={handleContactSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="שם מלא *"
                    className="contact-input"
                    value={contactData.name}
                    onChange={handleContactChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="טלפון *"
                    className="contact-input"
                    value={contactData.phone}
                    onChange={handleContactChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="אימייל *"
                    className="contact-input"
                    value={contactData.email}
                    onChange={handleContactChange}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="הודעה"
                    className="contact-textarea"
                    rows="3"
                    value={contactData.message}
                    onChange={handleContactChange}
                  ></textarea>
                  <button type="submit" className="contact-submit">
                    שלח פרטים
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="chatbot-input">
            <form onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="הקלד הודעה..."
                className="message-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className="send-button">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot
