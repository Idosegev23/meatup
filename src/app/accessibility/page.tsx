'use client';

import { useLanguage } from '@/context/LanguageContext';
import { config } from '@/data/config';

export default function AccessibilityPage() {
  const { language } = useLanguage();
  const isHebrew = language === 'he';

  return (
    <div style={{ backgroundColor: '#0a1628', minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', textAlign: 'center' }}>
          {isHebrew ? 'הצהרת נגישות' : 'Accessibility Statement'}
        </h1>
        <div style={{ width: '64px', height: '2px', backgroundColor: '#BF9B7A', margin: '0 auto 48px auto' }} />

        <div style={{ color: 'rgba(244,244,242,0.85)', lineHeight: 1.8, fontSize: '1rem' }}>
          {isHebrew ? (
            <>
              <p style={{ marginBottom: '24px' }}>
                <strong>תאריך עדכון אחרון:</strong> ינואר 2026
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                מחויבות לנגישות
              </h2>
              <p style={{ marginBottom: '24px' }}>
                מסעדת MEATUP מחויבת לספק חוויית גלישה נגישה לכל המשתמשים, כולל אנשים עם מוגבלויות. 
                אנו פועלים בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, ולתקנות שוויון זכויות 
                לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                תקן הנגישות
              </h2>
              <p style={{ marginBottom: '24px' }}>
                האתר שלנו פועל לעמוד בתקן הנגישות הישראלי (ת"י 5568) ובהנחיות WCAG 2.1 ברמה AA. 
                אנו ממשיכים לשפר את נגישות האתר באופן שוטף.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                התאמות הנגישות שבוצעו
              </h2>
              <ul style={{ marginBottom: '24px', paddingRight: '24px' }}>
                <li style={{ marginBottom: '8px' }}>ניווט מלא באמצעות מקלדת</li>
                <li style={{ marginBottom: '8px' }}>טקסט חלופי (Alt) לכל התמונות</li>
                <li style={{ marginBottom: '8px' }}>ניגודיות צבעים נאותה</li>
                <li style={{ marginBottom: '8px' }}>מבנה כותרות היררכי ומסודר</li>
                <li style={{ marginBottom: '8px' }}>תמיכה בהגדלת טקסט</li>
                <li style={{ marginBottom: '8px' }}>תאימות לקוראי מסך</li>
                <li style={{ marginBottom: '8px' }}>שפה מוגדרת בקוד האתר</li>
                <li style={{ marginBottom: '8px' }}>תמיכה בכיוון RTL לעברית</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                נגישות המסעדה
              </h2>
              <ul style={{ marginBottom: '24px', paddingRight: '24px' }}>
                <li style={{ marginBottom: '8px' }}>כניסה נגישה לכיסאות גלגלים</li>
                <li style={{ marginBottom: '8px' }}>שירותים נגישים</li>
                <li style={{ marginBottom: '8px' }}>תפריט זמין בפורמט דיגיטלי</li>
                <li style={{ marginBottom: '8px' }}>צוות מאומן לסיוע לאורחים עם מוגבלויות</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                יצירת קשר בנושאי נגישות
              </h2>
              <p style={{ marginBottom: '16px' }}>
                אם נתקלתם בבעיית נגישות באתר או במסעדה, או שיש לכם הצעות לשיפור, נשמח לשמוע מכם:
              </p>
              <ul style={{ marginBottom: '24px', paddingRight: '24px' }}>
                <li style={{ marginBottom: '8px' }}>טלפון: {config.phone}</li>
                <li style={{ marginBottom: '8px' }}>
                  וואטסאפ: <a href={config.whatsappLink} style={{ color: '#BF9B7A' }}>לחצו כאן</a>
                </li>
                <li style={{ marginBottom: '8px' }}>כתובת: {config.address.he}</li>
              </ul>

              <p style={{ marginTop: '48px', fontSize: '0.875rem', color: 'rgba(244,244,242,0.6)' }}>
                אנו מתחייבים לטפל בכל פנייה בנושא נגישות תוך 14 ימי עסקים.
              </p>
            </>
          ) : (
            <>
              <p style={{ marginBottom: '24px' }}>
                <strong>Last Updated:</strong> January 2026
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                Commitment to Accessibility
              </h2>
              <p style={{ marginBottom: '24px' }}>
                MEATUP restaurant is committed to providing an accessible browsing experience for all users, 
                including people with disabilities. We operate in accordance with the Equal Rights for Persons 
                with Disabilities Law, 5758-1998, and the Equal Rights for Persons with Disabilities Regulations 
                (Service Accessibility Adjustments), 5773-2013.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                Accessibility Standard
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Our website strives to comply with the Israeli Accessibility Standard (SI 5568) and 
                WCAG 2.1 Level AA guidelines. We continue to improve the accessibility of the site on an ongoing basis.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                Accessibility Features
              </h2>
              <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Full keyboard navigation</li>
                <li style={{ marginBottom: '8px' }}>Alt text for all images</li>
                <li style={{ marginBottom: '8px' }}>Adequate color contrast</li>
                <li style={{ marginBottom: '8px' }}>Hierarchical heading structure</li>
                <li style={{ marginBottom: '8px' }}>Text enlargement support</li>
                <li style={{ marginBottom: '8px' }}>Screen reader compatibility</li>
                <li style={{ marginBottom: '8px' }}>Language defined in code</li>
                <li style={{ marginBottom: '8px' }}>RTL support for Hebrew</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                Restaurant Accessibility
              </h2>
              <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Wheelchair accessible entrance</li>
                <li style={{ marginBottom: '8px' }}>Accessible restrooms</li>
                <li style={{ marginBottom: '8px' }}>Menu available in digital format</li>
                <li style={{ marginBottom: '8px' }}>Staff trained to assist guests with disabilities</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '16px', marginTop: '32px' }}>
                Contact Us About Accessibility
              </h2>
              <p style={{ marginBottom: '16px' }}>
                If you encounter an accessibility issue on our website or at the restaurant, 
                or have suggestions for improvement, we'd love to hear from you:
              </p>
              <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
                <li style={{ marginBottom: '8px' }}>Phone: {config.phone}</li>
                <li style={{ marginBottom: '8px' }}>
                  WhatsApp: <a href={config.whatsappLink} style={{ color: '#BF9B7A' }}>Click here</a>
                </li>
                <li style={{ marginBottom: '8px' }}>Address: {config.address.en}</li>
              </ul>

              <p style={{ marginTop: '48px', fontSize: '0.875rem', color: 'rgba(244,244,242,0.6)' }}>
                We commit to addressing all accessibility inquiries within 14 business days.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}




