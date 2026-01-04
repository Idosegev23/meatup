'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AccessibilityWidget() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100,
    contrast: false,
    highlightLinks: false,
    pauseAnimations: false,
  });

  const isHebrew = language === 'he';

  // Apply settings
  useEffect(() => {
    document.documentElement.style.fontSize = `${settings.fontSize}%`;
    
    if (settings.contrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (settings.highlightLinks) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }

    if (settings.pauseAnimations) {
      document.body.classList.add('pause-animations');
    } else {
      document.body.classList.remove('pause-animations');
    }
  }, [settings]);

  const resetSettings = () => {
    setSettings({
      fontSize: 100,
      contrast: false,
      highlightLinks: false,
      pauseAnimations: false,
    });
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: isHebrew ? '24px' : 'auto',
          right: isHebrew ? 'auto' : '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#CD7F32',
          color: '#0D0D0D',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        aria-label={isHebrew ? 'פתח תפריט נגישות' : 'Open accessibility menu'}
      >
        <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
        </svg>
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1001,
            }}
          />

          {/* Panel */}
          <div
            style={{
              position: 'fixed',
              bottom: '100px',
              left: isHebrew ? '24px' : 'auto',
              right: isHebrew ? 'auto' : '24px',
              width: '320px',
              backgroundColor: '#1A1A1A',
              borderRadius: '16px',
              padding: '24px',
              zIndex: 1002,
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 600, 
              color: '#F4F4F2', 
              marginBottom: '20px',
              textAlign: isHebrew ? 'right' : 'left'
            }}>
              {isHebrew ? 'הגדרות נגישות' : 'Accessibility Settings'}
            </h3>

            {/* Font Size */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                color: 'rgba(244,244,242,0.8)', 
                marginBottom: '8px',
                fontSize: '0.875rem'
              }}>
                {isHebrew ? 'גודל טקסט' : 'Text Size'}: {settings.fontSize}%
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setSettings(s => ({ ...s, fontSize: Math.max(80, s.fontSize - 10) }))}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: 'rgba(205,127,50,0.2)',
                    color: '#CD7F32',
                    border: '1px solid rgba(205,127,50,0.3)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  }}
                >
                  A-
                </button>
                <button
                  onClick={() => setSettings(s => ({ ...s, fontSize: 100 }))}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: 'rgba(244,244,242,0.1)',
                    color: '#F4F4F2',
                    border: '1px solid rgba(244,244,242,0.2)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                  }}
                >
                  {isHebrew ? 'איפוס' : 'Reset'}
                </button>
                <button
                  onClick={() => setSettings(s => ({ ...s, fontSize: Math.min(150, s.fontSize + 10) }))}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: 'rgba(205,127,50,0.2)',
                    color: '#CD7F32',
                    border: '1px solid rgba(205,127,50,0.3)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  }}
                >
                  A+
                </button>
              </div>
            </div>

            {/* Toggle Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* High Contrast */}
              <button
                onClick={() => setSettings(s => ({ ...s, contrast: !s.contrast }))}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  backgroundColor: settings.contrast ? 'rgba(205,127,50,0.2)' : 'rgba(244,244,242,0.05)',
                  border: settings.contrast ? '1px solid #CD7F32' : '1px solid rgba(244,244,242,0.1)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: '#F4F4F2',
                  width: '100%',
                  textAlign: isHebrew ? 'right' : 'left',
                }}
              >
                <span>{isHebrew ? 'ניגודיות גבוהה' : 'High Contrast'}</span>
                <span style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '4px', 
                  backgroundColor: settings.contrast ? '#CD7F32' : 'transparent',
                  border: '2px solid #CD7F32',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {settings.contrast && (
                    <svg style={{ width: '14px', height: '14px' }} fill="#0D0D0D" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </span>
              </button>

              {/* Highlight Links */}
              <button
                onClick={() => setSettings(s => ({ ...s, highlightLinks: !s.highlightLinks }))}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  backgroundColor: settings.highlightLinks ? 'rgba(205,127,50,0.2)' : 'rgba(244,244,242,0.05)',
                  border: settings.highlightLinks ? '1px solid #CD7F32' : '1px solid rgba(244,244,242,0.1)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: '#F4F4F2',
                  width: '100%',
                  textAlign: isHebrew ? 'right' : 'left',
                }}
              >
                <span>{isHebrew ? 'הדגשת קישורים' : 'Highlight Links'}</span>
                <span style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '4px', 
                  backgroundColor: settings.highlightLinks ? '#CD7F32' : 'transparent',
                  border: '2px solid #CD7F32',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {settings.highlightLinks && (
                    <svg style={{ width: '14px', height: '14px' }} fill="#0D0D0D" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </span>
              </button>

              {/* Pause Animations */}
              <button
                onClick={() => setSettings(s => ({ ...s, pauseAnimations: !s.pauseAnimations }))}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  backgroundColor: settings.pauseAnimations ? 'rgba(205,127,50,0.2)' : 'rgba(244,244,242,0.05)',
                  border: settings.pauseAnimations ? '1px solid #CD7F32' : '1px solid rgba(244,244,242,0.1)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: '#F4F4F2',
                  width: '100%',
                  textAlign: isHebrew ? 'right' : 'left',
                }}
              >
                <span>{isHebrew ? 'עצירת אנימציות' : 'Pause Animations'}</span>
                <span style={{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '4px', 
                  backgroundColor: settings.pauseAnimations ? '#CD7F32' : 'transparent',
                  border: '2px solid #CD7F32',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {settings.pauseAnimations && (
                    <svg style={{ width: '14px', height: '14px' }} fill="#0D0D0D" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </span>
              </button>
            </div>

            {/* Reset All */}
            <button
              onClick={resetSettings}
              style={{
                width: '100%',
                marginTop: '20px',
                padding: '12px',
                backgroundColor: 'transparent',
                color: 'rgba(244,244,242,0.6)',
                border: '1px solid rgba(244,244,242,0.2)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              {isHebrew ? 'איפוס כל ההגדרות' : 'Reset All Settings'}
            </button>

            {/* Link to full accessibility page */}
            <a
              href="/accessibility"
              style={{
                display: 'block',
                textAlign: 'center',
                marginTop: '16px',
                color: '#CD7F32',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}
            >
              {isHebrew ? 'הצהרת נגישות מלאה' : 'Full Accessibility Statement'}
            </a>
          </div>
        </>
      )}

      {/* Global Styles for Accessibility */}
      <style jsx global>{`
        .high-contrast {
          background-color: #000000 !important;
        }
        .high-contrast * {
          color: #FFFFFF !important;
          border-color: #FFFFFF !important;
        }
        .high-contrast a,
        .high-contrast button {
          color: #FFFF00 !important;
        }
        .high-contrast h1,
        .high-contrast h2,
        .high-contrast h3,
        .high-contrast h4 {
          color: #00FFFF !important;
        }
        .high-contrast img {
          filter: contrast(1.2) brightness(1.1);
        }
        .highlight-links a {
          background-color: #FFFF00 !important;
          color: #000000 !important;
          padding: 2px 4px !important;
          text-decoration: underline !important;
        }
        .pause-animations * {
          animation: none !important;
          transition: none !important;
        }
      `}</style>
    </>
  );
}

