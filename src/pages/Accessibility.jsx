import { useEffect } from 'react'
import './LegalPages.css'

function Accessibility() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <h1 className="legal-title">הצהרת נגישות</h1>
        <p className="legal-subtitle">המצפן הדרומי - מחויבים לנגישות דיגיטלית</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>מחויבות לנגישות</h2>
          <p>
            המצפן הדרומי מחויב להנגיש את שירותיו לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות.
            אנו פועלים ליישום עקרונות הנגישות בכל תחומי פעילותנו, לרבות האתר הדיגיטלי,
            תוך שאיפה למקסימום נוחות, פשטות וקלות שימוש עבור כל המשתמשים.
          </p>
        </section>

        <section className="legal-section">
          <h2>תקנים ורגולציה</h2>
          <p>
            האתר נבנה תוך עמידה בתקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA,
            בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
          </p>
          <p>האתר תואם את הנחיות WCAG 2.1 ברמת AA.</p>
        </section>

        <section className="legal-section">
          <h2>התאמות נגישות באתר</h2>
          <p>האתר כולל את ההתאמות הבאות:</p>
          <ul className="legal-list">
            <li>ניווט מלא באמצעות מקלדת</li>
            <li>תמיכה בתוכנות הקראת מסך (Screen Readers)</li>
            <li>טקסטים חלופיים לתמונות</li>
            <li>ניגודיות צבעים מתאימה</li>
            <li>כותרות מובנות היררכית</li>
            <li>קישורים ברורים ומובנים</li>
            <li>פונטים קריאים ובהירים</li>
            <li>אפשרות להגדלת טקסט</li>
            <li>תיוגים נגישים לטפסים</li>
            <li>תמיכה בטכנולוגיות מסייעות</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>דפדפנים נתמכים</h2>
          <p>האתר תואם לשימוש בדפדפנים העדכניים הבאים:</p>
          <ul className="legal-list">
            <li>Google Chrome (גרסה אחרונה)</li>
            <li>Mozilla Firefox (גרסה אחרונה)</li>
            <li>Microsoft Edge (גרסה אחרונה)</li>
            <li>Safari (גרסה אחרונה)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>תוכנות מסייעות</h2>
          <p>האתר נבדק ונמצא תואם לעבודה עם תוכנות הקראת מסך הבאות:</p>
          <ul className="legal-list">
            <li>JAWS</li>
            <li>NVDA</li>
            <li>VoiceOver</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>שיפור מתמיד</h2>
          <p>
            אנו ממשיכים לעבוד על שיפור נגישות האתר ומקדמים תהליכים לשיפור הנגישות בכל תחומי פעילותנו.
            בכל עת אנו שואפים להגביר את רמת הנגישות ככל שניתן, לרבות שימוש בטכנולוגיות חדשות
            והתאמה לסטנדרטים המתפתחים.
          </p>
        </section>

        <section className="legal-section">
          <h2>בעיות נגישות? נשמח לשמוע</h2>
          <p>
            אם נתקלתם בבעיית נגישות באתר, או אם יש לכם הצעות לשיפור, נשמח לשמוע מכם.
            אנו מתחייבים לטפל בכל פנייה בנושא נגישות בתוך 7 ימי עסקים.
          </p>
          <div className="contact-info">
            <h3>פרטי רכז הנגישות:</h3>
            <p><strong>שם:</strong> מור אדרי</p>
            <p><strong>אימייל:</strong> accessibility@southern-compass.co.il</p>
            <p><strong>טלפון:</strong> 050-123-4567</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>הסדרי נגישות במשרדינו</h2>
          <p>
            משרדי המצפן הדרומי נגישים לאנשים עם מוגבלות. במידת הצורך, ניתן לתאם פגישה מראש
            כדי להבטיח את מירב הנוחות והנגישות.
          </p>
        </section>

        <div className="legal-footer">
          <p className="update-date">תאריך עדכון אחרון: 10 בדצמבר 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Accessibility
