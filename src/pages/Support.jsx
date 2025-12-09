import './Support.css'
import { HiMicrophone } from 'react-icons/hi2'
import { IoNewspaper } from 'react-icons/io5'
import { BsCameraVideoFill } from 'react-icons/bs'
import { MdCampaign } from 'react-icons/md'

function Support() {
  return (
    <div className="support">
      <div className="support-hero">
        <div className="support-hero-content">
          <h1 className="support-hero-title"> הדרום צריך אותנו עכשיו!</h1>
          <p className="support-hero-subtitle">
            הצטרפו למשפחת המצפן הדרומי והיו שותפים לשינוי
          </p>
        </div>
      </div>

      <div className="support-mission-section">
        <div className="support-mission-container">
          <h2 className="support-mission-title">מדוע צריך את המצפן הדרומי?</h2>

          <div className="support-mission-content">
            <p className="support-mission-text">
החשיבות שהמצפן הדרומי מביא נובעת מהיכרות עמוקה עם השטח ועם המציאות המדינית. אנו חיים את הדרום – מכירים את האנשים, את האתגרים, את הקשיים ואת נקודות האור – ויודעים לתרגם מציאות מורכבת לשפה של פתרונות.
            </p>

            <p className="support-mission-text">
              מול מערכת הביטחון אנו מציגים פרספקטיבה אזרחית-חברתית, שקולה ועניינית, שמבינה את הצורך המבצעי אך גם את האחריות האנושית שמאחוריו.
            </p>

            <p className="support-mission-text highlight">"
אני מור אדרי מאמינה בשיתופי פעולה, בחיזוק אמון הציבור במערכות, וביצירת שיח מאחד ולא מפריד. זוהי הדרך שבה אני פועלת, וזו השליחות שמניעה אותי בכל צעד שאני עושה.
              זו הדרך שבה אני פועלת, זו השליחות שלי . "
            </p>
          </div>
        </div>
      </div>

      <div className="support-donation-section">
        <div className="support-donation-container">
          <h2 className="support-donation-title">הצטרפו למשפחת המצפן הדרומי</h2>
          <p className="support-donation-subtitle">
            תרומתכם מאפשרת לנו להמשיך להביא את קול הדרום למרכז השיח הציבורי
          </p>

          <div className="support-donation-options">
            <div className="support-donation-card">
              <h3 className="support-card-title">תרומה חודשית</h3>
              <p className="support-card-description">
                הצטרפו כחברי מועדון והבטיחו את המשך פעילותנו לטווח ארוך
              </p>
              <div className="support-amounts">
                <button className="support-amount-btn">₪50</button>
                <button className="support-amount-btn">₪100</button>
                <button className="support-amount-btn">₪200</button>
                <button className="support-amount-btn">סכום אחר</button>
              </div>
              <button className="support-donate-btn primary">תרמו חודשית</button>
            </div>

            <div className="support-donation-card featured">
              <div className="featured-badge">מומלץ</div>
              <h3 className="support-card-title">תרומה חד-פעמית</h3>
              <p className="support-card-description">
                תמכו בפרויקטים ספציפיים ועזרו לנו להמשיך לייצר תוכן איכותי
              </p>
              <div className="support-amounts">
                <button className="support-amount-btn">₪100</button>
                <button className="support-amount-btn">₪250</button>
                <button className="support-amount-btn">₪500</button>
                <button className="support-amount-btn">סכום אחר</button>
              </div>
              <button className="support-donate-btn secondary">תרמו עכשיו</button>
            </div>
          </div>

          <div className="support-info">
            <p className="support-info-text">
              כל התרומות מועברות דרך עמותת רשומה ומוכרת לצורכי מס.
              <br />
              לשאלות נוספות: <a href="mailto:info@southern-compass.co.il">info@southern-compass.co.il</a>
            </p>
          </div>
        </div>
      </div>

      <div className="support-impact-section">
        <div className="support-impact-container">
          <h2 className="support-impact-title">איך התרומות שלכם עוזרות?</h2>

          <div className="support-impact-grid">
            <div className="support-impact-card">
              <div className="support-impact-icon-wrapper">
                <BsCameraVideoFill className="support-impact-icon" />
              </div>
              <h3 className="support-impact-card-title">ייצור תוכן</h3>
              <p className="support-impact-card-text">
                מימון ציוד, הפקה ועריכה של תכנים איכותיים המביאים את סיפורי הדרום
              </p>
            </div>

            <div className="support-impact-card">
              <div className="support-impact-icon-wrapper">
                <HiMicrophone className="support-impact-icon" />
              </div>
              <h3 className="support-impact-card-title">שידורים חיים</h3>
              <p className="support-impact-card-text">
                תחזוקת פלטפורמת השידור והנגשת התכנים לקהל רחב
              </p>
            </div>

            <div className="support-impact-card">
              <div className="support-impact-icon-wrapper">
                <IoNewspaper className="support-impact-icon" />
              </div>
              <h3 className="support-impact-card-title">עבודת שטח</h3>
              <p className="support-impact-card-text">
                כיסוי אירועים ודיווחים מהשטח, ראיונות עם תושבים ואנשי מפתח
              </p>
            </div>

            <div className="support-impact-card">
              <div className="support-impact-icon-wrapper">
                <MdCampaign className="support-impact-icon" />
              </div>
              <h3 className="support-impact-card-title">הגעה רחבה</h3>
              <p className="support-impact-card-text">
                קידום התכנים והגעה למיליוני אנשים ברחבי הארץ והעולם
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
