'use client';

import { useLanguage } from '@/context/LanguageContext';

interface LanguageToggleProps {
  variant?: 'light' | 'dark';
}

export default function LanguageToggle({ variant = 'light' }: LanguageToggleProps) {
  const { language, toggleLanguage, dict } = useLanguage();

  const isDark = variant === 'dark';
  
  return (
    <button
      onClick={toggleLanguage}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '9999px',
        backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(92,62,43,0.1)',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(92,62,43,0.3)'}`,
        cursor: 'pointer',
        transition: 'border-color 0.2s',
      }}
      aria-label={dict.a11y.switchLang}
    >
      <svg 
        style={{ 
          width: '16px', 
          height: '16px', 
          color: isDark ? '#FFFFFF' : 'rgba(244,244,242,0.8)' 
        }} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
      <span style={{ 
        color: language === 'en' ? '#CD7F32' : (isDark ? '#FFFFFF' : 'rgba(244,244,242,0.8)'),
        fontWeight: language === 'en' ? 600 : 400,
      }}>EN</span>
      <span style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(92,62,43,0.5)' }}>|</span>
      <span style={{ 
        color: language === 'he' ? '#CD7F32' : (isDark ? '#FFFFFF' : 'rgba(244,244,242,0.8)'),
        fontWeight: language === 'he' ? 600 : 400,
      }}>עב</span>
    </button>
  );
}
