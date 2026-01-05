'use client';

import { useLanguage } from '@/context/LanguageContext';

interface LanguageToggleProps {
  variant?: 'light' | 'dark';
}

export default function LanguageToggle({ variant = 'light' }: LanguageToggleProps) {
  const { language, toggleLanguage, dict } = useLanguage();

  const isDark = variant === 'dark';
  
  // Show only the language to switch TO (opposite of current)
  const displayText = language === 'he' ? 'EN' : 'עב';
  
  return (
    <button
      onClick={toggleLanguage}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        padding: '0px 4px',
        fontSize: '16px',
        fontWeight: 700,
        borderRadius: '0',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
        color: isDark ? '#0a1628' : '#F2F1F0',
      }}
      aria-label={dict.a11y.switchLang}
    >
      {displayText}
    </button>
  );
}
