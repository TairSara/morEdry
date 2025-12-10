import { useEffect, useState } from 'react'
import './ArticlesPage.css'

function ArticlesPage() {
  const [expandedMedia, setExpandedMedia] = useState(null)

  const articles = [
    {
      id: 1,
      title: '"אם הייתי משלם זה לא היה קורה": פרצו למפעל בדרום וגנבו אנטריקוט בשווי מיליון שקלים',
      subtitle: "אירוע שוד חמור במפעל בבאר שבע",
      date: "02.03.2025",
      readTime: "5 דקות קריאה",
      url: "https://news.walla.co.il/item/3731104",
      image: "/src/images/1.jpeg",
      summary: "אירוע שוד חמור במפעל בבאר שבע שבו גנבו בשר אנטריקוט בשווי כחצי מיליון שקלים. המקרה מדגיש את משבר הביטחון האזרחי בדרום ואת הקריסה המתמשכת של החוק והסדר",
      media: [
        { type: 'image', src: '/src/images/1.jpeg' },
        { type: 'image', src: '/src/images/2.jpeg' },
        { type: 'image', src: '/src/images/3.jpeg' },
        { type: 'image', src: '/src/images/4.jpeg' },
        { type: 'image', src: '/src/images/5.jpeg' }
      ]
    },
    {
      id: 2,
      title: 'הירי לעבר יישובי הנגב נמשך: "מציעים את הבתים למכירה, חוששים לחיי הילדים"',
      subtitle: "תושבי רתמים, כרמית, רביבים ועומר מתארים לילות של פחד והפקרות",
      date: "17.11.2025",
      readTime: "6 דקות קריאה",
      url: "https://www.mako.co.il/men-men_news/Article-0994ebc0ed09a91027.htm",
      image: "/src/images/8.jpeg",
      summary: "תושבי רתמים, כרמית, רביבים ועומר מתארים לילות של פחד והפקרות. ביקורת חריפה על התנהלות המשטרה והקריסה המתמשכת של החוק והסדר באזור",
      media: [
        { type: 'video', src: '/src/images/6.mp4', poster: '/src/images/8.jpeg' },
        { type: 'video', src: '/src/images/7.mp4', poster: '/src/images/8.jpeg' },
        { type: 'image', src: '/src/images/8.jpeg' }
      ]
    },
    {
      id: 3,
      title: "הזעקה של מור סיון אדרי לקראת החג",
      subtitle: "אני לא יכולה להתעלם מתופעת הפשיעה הבדואית המשתוללת בדרום",
      date: "22.09.2025",
      readTime: "6 דקות קריאה",
      url: "https://www.b7net.co.il/%d7%97%d7%93%d7%a9%d7%95%d7%aa/%d7%94%d7%96%d7%a2%d7%a7%d7%94-%d7%a9%d7%9c-%d7%9e%d7%95%d7%a8-%d7%a1%d7%99%d7%95%d7%9f-%d7%90%d7%93%d7%a8%d7%99-%d7%9c%d7%a7%d7%a8%d7%90%d7%aa-%d7%94%d7%97%d7%92-%d7%90%d7%a0%d7%99-%d7%9c%d7%90-%d7%99%d7%9b%d7%95%d7%9c%d7%94-%d7%9c%d7%94%d7%aa%d7%a2%d7%9c%d7%9d-%d7%9e%d7%aa%d7%95%d7%a4%d7%a2%d7%aa-%d7%94%d7%a4%d7%a9%d7%99%d7%a2%d7%94-%d7%94%d7%91%d7%93%d7%95%d7%90%d7%99%d7%aa-%d7%94%d7%9e%d7%a9%d7%aa%d7%95%d7%9c%d7%9c%d7%aa-%d7%91%d7%93%d7%a8%d7%95%d7%9d-677805",
      image: "https://b7net.co.il/dyncontent/2025/9/21/99b28c8b-6112-487c-87de-4484362dc401.jpeg",
      summary: "עורכת דין ויועצת תקשורת החיה באזור הנגב מתייחסת להידרדרות ביחסים היהודים-בדואים, ומתארת את מה שהיה פעם 'סדק קטן' כעת הופך ל'שבר עמוק המאיים לבלוע את כולנו'."
    },
    {
      id: 4,
      title: "סערה בעומר: האם בית נמכר לבני משפחתו של איסמאעיל הנייה?",
      subtitle: "סערה ביישוב היוקרתי: האם בית נמכר לקרובי משפחתו של איסמאעיל הנייה?",
      date: "31.08.2025",
      readTime: "5 דקות קריאה",
      url: "https://sheva7.walla.co.il/item/3777008",
      summary: "הכתבה חוקרת עסקת נדל\"ן ביישוב עומר היוקרתי, ושואלת האם בית נמכר לבני משפחתו של איסמאעיל הנייה. הדיווח מעלה חששות לגבי קשרים פוטנציאליים בין דמות פוליטית בכירה לעסקאות נדל\"ן בקהילה היוקרתית."
    },
    {
      id: 5,
      title: "עדיף לך לשתוק אחרת לא יהיה לך טוב",
      subtitle: "איומים על תושבת עומר שיצאה נגד האלימות הבדואית",
      date: "23.12.2024",
      readTime: "4 דקות קריאה",
      url: "https://sheva7.walla.co.il/item/3713743",
      summary: "כתבת חדשות מדווחת על איומים שהופנו כלפי תושבת עומר שהתבטאה נגד אלימות בדואית. הכתבה מתעדת הפחדות ואזהרות שנעשו כביכול כנגד הפרט בעקבות עמדתם הציבורית בנושא."
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
          <h1 className="media-hero-title">כתבות ומאמרים</h1>
          <p className="media-hero-subtitle">עיתונות עצמאית ואיכותית מהדרום</p>
        </div>
      </div>

      <div className="media-content-section articles-section">
        <h2 className="section-title">הכתבות האחרונות</h2>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={article.id} className="article-card" style={{ animationDelay: `${index * 0.1}s` }}>
              {article.media && article.media.length > 0 ? (
                <div className="article-media-preview">
                  {article.media.map((item, idx) => (
                    <div
                      key={idx}
                      className={`media-preview-item ${article.media.length === 1 ? 'full-width' : ''}`}
                      onClick={() => setExpandedMedia({ ...item, idx })}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.type === 'video' ? (
                        <div className="video-preview">
                          <video
                            className="preview-video"
                            preload="metadata"
                            muted
                            playsInline
                          >
                            <source src={`${item.src}#t=0.1`} type="video/mp4" />
                          </video>
                          <div className="video-play-overlay">
                            <svg className="play-icon" viewBox="0 0 24 24" fill="white">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <img src={item.src} alt={`תמונה ${idx + 1}`} className="preview-image" />
                      )}
                    </div>
                  ))}
                </div>
              ) : article.image ? (
                <div className="article-image-container">
                  <img src={article.image} alt={article.title} className="article-image" />
                </div>
              ) : null}
              <div className="article-content">
                <div className="article-header">
                  <span className="article-date">{article.date}</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-subtitle">{article.subtitle}</p>
                {article.summary && (
                  <p className="article-summary">{article.summary}</p>
                )}
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-btn">קרא עוד</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {expandedMedia && (
        <div className="media-modal" onClick={() => setExpandedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setExpandedMedia(null)}>✕</button>
            {expandedMedia.type === 'video' ? (
              <video
                className="modal-video"
                controls
                autoPlay
                playsInline
                preload="auto"
                poster={expandedMedia.poster}
              >
                <source src={expandedMedia.src} type="video/mp4" />
                הדפדפן שלך לא תומך בהצגת וידאו
              </video>
            ) : (
              <img src={expandedMedia.src} alt="תמונה מוגדלת" className="modal-image" />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ArticlesPage
