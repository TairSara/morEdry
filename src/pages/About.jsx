import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1 className="about-title">אודות מור אדרי</h1>
        <div className="title-underline"></div>
      </div>

      <div className="about-container">
        <div className="about-section">
          <h2 className="section-title">המצפן הדרומי</h2>
          <p className="about-text">
            מור אדרי היא אמנית ביצועים רב-תחומית המתמחה ביצירת חוויות אמנותיות ייחודיות
            המשלבות תיאטרון, מחול ואמנות חזותית. עם רקע עשיר בתחום האמנויות הביצועיות,
            מור מביאה לכל פרויקט שילוב ייחודי של יצירתיות, מקצועיות ותשוקה אמיתית.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🎭</div>
            <h3 className="card-title">תיאטרון</h3>
            <p className="card-text">
              ניסיון עשיר בהצגות תיאטרון, מחזות מקוריים והפקות ייחודיות
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">🎬</div>
            <h3 className="card-title">קולנוע וטלוויזיה</h3>
            <p className="card-text">
              השתתפות בסרטים, סדרות ופרויקטים קולנועיים מגוונים
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">💃</div>
            <h3 className="card-title">מחול ותנועה</h3>
            <p className="card-text">
              שילוב של מחול עכשווי, תנועה ביטויית וכוריאוגרפיה מקורית
            </p>
          </div>
        </div>

        <div className="about-section mission">
          <h2 className="section-title">החזון</h2>
          <p className="about-text">
            המצפן הדרומי מייצג כיוון חדש באמנות הביצועים הישראלית - חיבור בין מסורת
            לחדשנות, בין מקומיות לאוניברסליות. האמנות שלנו שואפת לגעת בלב הקהל,
            לעורר רגשות ולהשאיר חותם בל יימחה.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
