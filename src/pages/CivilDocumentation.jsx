import { useState } from 'react'
import './CivilDocumentation.css'
import { FaShieldAlt, FaFileAlt, FaExclamationTriangle, FaRoad, FaTools, FaCamera, FaVideo, FaCheckCircle, FaClipboardList } from 'react-icons/fa'
import { MdGavel } from 'react-icons/md'

function CivilDocumentation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    settlement: '',
    category: '',
    description: '',
    files: [],
    consent: false
  })

  const [uploadStatus, setUploadStatus] = useState('')

  const categories = [
    { value: 'shooting', label: 'ירי', icon: FaShieldAlt },
    { value: 'crime', label: 'פשיעה', icon: MdGavel },
    { value: 'hazards', label: 'מפגעים', icon: FaExclamationTriangle },
    { value: 'roads', label: 'כבישים', icon: FaRoad },
    { value: 'infrastructure', label: 'תשתיות', icon: FaTools },
    { value: 'other', label: 'אחר', icon: FaClipboardList }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.consent) {
      alert('יש לאשר שימוש בתיעוד לצורך ציבורי/תקשורתי')
      return
    }
    // כאן תוסיפי את הלוגיקה לשליחת הטופס
    console.log('Documentation submitted:', formData)
    setUploadStatus('success')
    setTimeout(() => {
      setUploadStatus('')
      // Reset form
      setFormData({
        name: '',
        phone: '',
        settlement: '',
        category: '',
        description: '',
        files: [],
        consent: false
      })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    const validFiles = files.filter(file => {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'video/mp4']
      const maxSize = 100 * 1024 * 1024 // 100MB
      return validTypes.includes(file.type) && file.size <= maxSize
    })

    if (validFiles.length !== files.length) {
      alert('חלק מהקבצים לא עמדו בתנאים (JPG/PNG/MP4, עד 100MB)')
    }

    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...validFiles]
    }))
  }

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="civil-doc">
      <div className="civil-doc-hero">
        <div className="civil-doc-hero-content">
          <h1 className="civil-doc-title">מוקד תיעוד אזרחי</h1>
          <p className="civil-doc-subtitle">תיעוד מהשטח למען ביטחון הדרום</p>
        </div>
      </div>

      <div className="civil-doc-container">
        <div className="info-banner">
          <FaExclamationTriangle className="banner-icon" />
          <div className="banner-content">
            <h3 className="banner-title">חשוב לדעת</h3>
            <p className="banner-text">
              הטופס מיועד לתיעוד אירועים בזמן אמת. אנא שלחו רק תמונות וסרטונים אותנטיים שצולמו על ידכם.
            </p>
          </div>
        </div>

        <div className="categories-grid">
          <h3 className="section-title">סוגי תיעוד</h3>
          <div className="categories">
            {categories.map(cat => {
              const IconComponent = cat.icon
              return (
                <div
                  key={cat.value}
                  className={`category-card ${formData.category === cat.value ? 'selected' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, category: cat.value }))}
                >
                  <div className="category-circle">
                    <IconComponent className="category-icon" />
                  </div>
                  <span className="category-label">{cat.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <form className="civil-doc-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3 className="section-title">פרטים אישיים</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">שם מלא *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="הכניסו שם מלא"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">טלפון *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="050-000-0000"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">יישוב *</label>
                <input
                  type="text"
                  name="settlement"
                  placeholder="הכניסו שם יישוב"
                  className="form-input"
                  value={formData.settlement}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title">תיאור האירוע</h3>
            <div className="form-group">
              <textarea
                name="description"
                placeholder="תארו את האירוע בפירוט: מה קרה, מתי, איפה..."
                className="form-textarea"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title">העלאת קבצים</h3>
            <div className="upload-area">
              <input
                type="file"
                id="file-upload"
                className="file-input"
                multiple
                accept=".jpg,.jpeg,.png,.mp4"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload" className="upload-label">
                <FaCamera className="upload-icon" />
                <FaVideo className="upload-icon" />
                <p className="upload-text">לחצו להעלאת תמונות/סרטונים</p>
                <p className="upload-subtext">JPG, PNG, MP4 (עד 100MB לקובץ)</p>
              </label>
            </div>

            {formData.files.length > 0 && (
              <div className="files-list">
                <h4 className="files-title">קבצים שהועלו ({formData.files.length})</h4>
                {formData.files.map((file, index) => (
                  <div key={index} className="file-item">
                    <span className="file-name">
                      {file.type.startsWith('image/') ? '📷' : '🎬'} {file.name}
                    </span>
                    <button
                      type="button"
                      className="file-remove"
                      onClick={() => removeFile(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="consent-section">
            <label className="consent-label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="consent-checkbox"
                required
              />
              <span className="consent-text">
                אני מאשר/ת שימוש בתיעוד זה לצורך ציבורי/תקשורתי *
              </span>
            </label>
          </div>

          <button type="submit" className="submit-button" disabled={!formData.consent}>
            <FaCheckCircle className="button-icon" />
            שלח תיעוד
          </button>
        </form>

        {uploadStatus === 'success' && (
          <div className="success-message">
            <FaCheckCircle className="success-icon" />
            <p className="success-text">התיעוד נשלח בהצלחה! תודה על תרומתך.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CivilDocumentation
