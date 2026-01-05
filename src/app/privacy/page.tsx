'use client';

import { useLanguage } from '@/context/LanguageContext';
import { config } from '@/data/config';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const isHebrew = language === 'he';

  return (
    <div style={{ backgroundColor: '#0a1628', minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', textAlign: 'center' }}>
          {isHebrew ? 'מדיניות פרטיות' : 'Privacy Policy'}
        </h1>
        <div style={{ width: '64px', height: '2px', backgroundColor: '#BF9B7A', margin: '0 auto 48px auto' }} />

        <div style={{ color: 'rgba(244,244,242,0.85)', lineHeight: 1.8, fontSize: '1rem' }}>
          {isHebrew ? (
            <>
              <p style={{ marginBottom: '24px' }}>
                <strong>תאריך עדכון אחרון:</strong> ינואר 2026
              </p>

              <p style={{ marginBottom: '24px' }}>
                מסעדת MEATUP ("אנחנו", "שלנו") מכבדת את פרטיות המשתמשים באתר שלנו. 
                מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם, 
                בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, ותיקון 13 שנכנס לתוקף באוגוסט 2025.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                1. המידע שאנו אוספים
              </h2>
              <p style={{ marginBottom: '16px' }}>אנו עשויים לאסוף את סוגי המידע הבאים:</p>
              <ul style={{ marginBottom: '24px', paddingRight: '24px' }}>
                <li style={{ marginBottom: '8px' }}><strong>מידע שאתם מספקים:</strong> שם, מספר טלפון, כתובת דוא"ל בעת הזמנת שולחן או יצירת קשר</li>
                <li style={{ marginBottom: '8px' }}><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, דפים שנצפו ומשך הביקור</li>
                <li style={{ marginBottom: '8px' }}><strong>עוגיות (Cookies):</strong> קבצים קטנים המאוחסנים במכשירכם לשיפור חוויית הגלישה</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                2. מטרות השימוש במידע
              </h2>
              <p style={{ marginBottom: '16px' }}>אנו משתמשים במידע למטרות הבאות:</p>
              <ul style={{ marginBottom: '24px', paddingRight: '24px' }}>
                <li style={{ marginBottom: '8px' }}>עיבוד ואישור הזמנות שולחן</li>
                <li style={{ marginBottom: '8px' }}>מענה לפניות ובקשות</li>
                <li style={{ marginBottom: '8px' }}>שיפור השירות והאתר</li>
                <li style={{ marginBottom: '8px' }}>שליחת עדכונים ומבצעים (בהסכמתכם בלבד)</li>
                <li style={{ marginBottom: '8px' }}>עמידה בדרישות חוקיות</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                3. שיתוף מידע עם צדדים שלישיים
              </h2>
              <p style={{ marginBottom: '24px' }}>
                אנו לא מוכרים או משכירים את המידע האישי שלכם. אנו עשויים לשתף מידע עם:
              </p>
              <ul style={{ marginBottom: '24px', paddingRight: '24px' }}>
                <li style={{ marginBottom: '8px' }}>ספקי שירות (כגון Tabit למערכת ההזמנות) הפועלים בשמנו</li>
                <li style={{ marginBottom: '8px' }}>רשויות חוק כאשר נדרש על פי דין</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                4. אבטחת מידע
              </h2>
              <p style={{ marginBottom: '24px' }}>
                אנו נוקטים באמצעי אבטחה מקובלים להגנה על המידע שלכם, כולל הצפנת SSL, 
                גישה מוגבלת למידע, וניטור שוטף. עם זאת, אין שיטת העברה באינטרנט מאובטחת ב-100%.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                5. שמירת מידע
              </h2>
              <p style={{ marginBottom: '24px' }}>
                אנו שומרים את המידע האישי שלכם רק לפרק הזמן הדרוש למטרות שלשמן נאסף, 
                או כנדרש על פי חוק. לאחר מכן, המידע יימחק או יאנונם.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                6. זכויותיכם
              </h2>
              <p style={{ marginBottom: '16px' }}>בהתאם לחוק, עומדות לכם הזכויות הבאות:</p>
              <ul style={{ marginBottom: '24px', paddingRight: '24px' }}>
                <li style={{ marginBottom: '8px' }}>זכות עיון במידע השמור אודותיכם</li>
                <li style={{ marginBottom: '8px' }}>זכות לתיקון מידע שגוי</li>
                <li style={{ marginBottom: '8px' }}>זכות למחיקת מידע</li>
                <li style={{ marginBottom: '8px' }}>זכות להתנגד לעיבוד מידע לשיווק ישיר</li>
                <li style={{ marginBottom: '8px' }}>זכות להגביל את עיבוד המידע</li>
              </ul>
              <p style={{ marginBottom: '24px' }}>
                למימוש זכויותיכם, פנו אלינו בפרטי הקשר המופיעים להלן.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                7. עוגיות (Cookies)
              </h2>
              <p style={{ marginBottom: '24px' }}>
                האתר משתמש בעוגיות לשיפור חוויית הגלישה. אתם יכולים לנהל את העדפות העוגיות 
                דרך הגדרות הדפדפן שלכם. חסימת עוגיות מסוימות עשויה להשפיע על פונקציונליות האתר.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                8. שינויים במדיניות
              </h2>
              <p style={{ marginBottom: '24px' }}>
                אנו עשויים לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר עם תאריך העדכון החדש.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                9. יצירת קשר
              </h2>
              <p style={{ marginBottom: '16px' }}>לשאלות בנוגע למדיניות הפרטיות, ניתן לפנות אלינו:</p>
              <ul style={{ marginBottom: '24px', paddingRight: '24px' }}>
                <li style={{ marginBottom: '8px' }}>טלפון: {config.phone}</li>
                <li style={{ marginBottom: '8px' }}>
                  וואטסאפ: <a href={config.whatsappLink} style={{ color: '#BF9B7A' }}>לחצו כאן</a>
                </li>
                <li style={{ marginBottom: '8px' }}>כתובת: {config.address.he}</li>
              </ul>
            </>
          ) : (
            <>
              <p style={{ marginBottom: '24px' }}>
                <strong>Last Updated:</strong> January 2026
              </p>

              <p style={{ marginBottom: '24px' }}>
                MEATUP restaurant ("we", "our") respects the privacy of users of our website. 
                This Privacy Policy explains how we collect, use, and protect your information, 
                in accordance with the Privacy Protection Law, 5741-1981, and Amendment 13 which came into effect in August 2025.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                1. Information We Collect
              </h2>
              <p style={{ marginBottom: '16px' }}>We may collect the following types of information:</p>
              <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Information you provide:</strong> Name, phone number, email address when making a reservation or contacting us</li>
                <li style={{ marginBottom: '8px' }}><strong>Technical information:</strong> IP address, browser type, operating system, pages viewed, and visit duration</li>
                <li style={{ marginBottom: '8px' }}><strong>Cookies:</strong> Small files stored on your device to improve browsing experience</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                2. How We Use Your Information
              </h2>
              <p style={{ marginBottom: '16px' }}>We use the information for the following purposes:</p>
              <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Processing and confirming table reservations</li>
                <li style={{ marginBottom: '8px' }}>Responding to inquiries and requests</li>
                <li style={{ marginBottom: '8px' }}>Improving our service and website</li>
                <li style={{ marginBottom: '8px' }}>Sending updates and promotions (with your consent only)</li>
                <li style={{ marginBottom: '8px' }}>Complying with legal requirements</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                3. Sharing Information with Third Parties
              </h2>
              <p style={{ marginBottom: '24px' }}>
                We do not sell or rent your personal information. We may share information with:
              </p>
              <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Service providers (such as Tabit for reservations) operating on our behalf</li>
                <li style={{ marginBottom: '8px' }}>Legal authorities when required by law</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                4. Data Security
              </h2>
              <p style={{ marginBottom: '24px' }}>
                We employ standard security measures to protect your information, including SSL encryption, 
                restricted access, and ongoing monitoring. However, no method of internet transmission is 100% secure.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                5. Data Retention
              </h2>
              <p style={{ marginBottom: '24px' }}>
                We retain your personal information only for as long as necessary for the purposes for which it was collected, 
                or as required by law. After that, the information will be deleted or anonymized.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                6. Your Rights
              </h2>
              <p style={{ marginBottom: '16px' }}>Under the law, you have the following rights:</p>
              <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Right to access your stored information</li>
                <li style={{ marginBottom: '8px' }}>Right to correct inaccurate information</li>
                <li style={{ marginBottom: '8px' }}>Right to delete information</li>
                <li style={{ marginBottom: '8px' }}>Right to object to processing for direct marketing</li>
                <li style={{ marginBottom: '8px' }}>Right to restrict data processing</li>
              </ul>
              <p style={{ marginBottom: '24px' }}>
                To exercise your rights, contact us using the details below.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                7. Cookies
              </h2>
              <p style={{ marginBottom: '24px' }}>
                The website uses cookies to improve browsing experience. You can manage cookie preferences 
                through your browser settings. Blocking certain cookies may affect website functionality.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                8. Policy Changes
              </h2>
              <p style={{ marginBottom: '24px' }}>
                We may update this policy from time to time. Material changes will be published on the website with the new update date.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                9. Contact Us
              </h2>
              <p style={{ marginBottom: '16px' }}>For questions regarding the privacy policy, you can contact us:</p>
              <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Phone: {config.phone}</li>
                <li style={{ marginBottom: '8px' }}>
                  WhatsApp: <a href={config.whatsappLink} style={{ color: '#BF9B7A' }}>Click here</a>
                </li>
                <li style={{ marginBottom: '8px' }}>Address: {config.address.en}</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

