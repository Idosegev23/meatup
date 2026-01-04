'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ReserveModal from './ReserveModal';
import { config } from '@/data/config';

export default function Header() {
  const { dict, language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Padding settings per language
  const headerPadding = language === 'he' 
    ? { paddingLeft: '24px', paddingRight: '96px' }  // Hebrew (RTL)
    : { paddingLeft: '96px', paddingRight: '24px' }; // English (LTR)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'menu', 'gallery', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavItems = [
    { href: '#hero', id: 'hero', label: dict.nav.home },
    { href: '#about', id: 'about', label: dict.nav.about },
    { href: config.tabitUrl, id: 'delivery', label: language === 'he' ? 'משלוח/איסוף' : 'Delivery', isExternal: true },
  ];

  const rightNavItems = [
    { href: '#menu', id: 'menu', label: dict.nav.menu },
    { href: '#gallery', id: 'gallery', label: dict.nav.gallery },
    { href: '#contact', id: 'contact', label: dict.nav.contact },
  ];

  const allNavItems: { href: string; id: string; label: string; isExternal?: boolean }[] = [...leftNavItems, ...rightNavItems];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Element exists on current page - scroll to it
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Element doesn't exist - navigate to home page with hash
      window.location.href = '/' + href;
    }
    setIsMobileMenuOpen(false);
  };

  const handleReserveClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.location.href = config.tabitUrl;
    } else {
      setIsReserveModalOpen(true);
    }
  };

  const NavLink = ({ item }: { item: { href: string; id: string; label: string; isExternal?: boolean } }) => (
    <a
      href={item.href}
      onClick={item.isExternal ? undefined : (e) => handleNavClick(e, item.href)}
      target={item.isExternal ? '_blank' : undefined}
      rel={item.isExternal ? 'noopener noreferrer' : undefined}
      style={{
        fontSize: '16px',
        fontWeight: 500,
        color: activeSection === item.id ? '#CD7F32' : '#0D0D0D',
        transition: 'color 0.2s',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        if (activeSection !== item.id) {
          e.currentTarget.style.color = '#CD7F32';
        }
      }}
      onMouseLeave={(e) => {
        if (activeSection !== item.id) {
          e.currentTarget.style.color = '#0D0D0D';
        }
      }}
    >
      {item.label}
    </a>
  );

  return (
    <>
      {/* Spacer to push content below header */}
      <div style={{ height: '120px' }} />
      
      {/* Full Width Header Row */}
      <div
        style={{
          position: 'fixed',
          top: '20px',
          left: '0',
          right: '0',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
        }}
      >
        {/* Language Toggle - Left Outside */}
        <div 
          className="hidden md:flex"
          style={{ 
            position: 'absolute',
            left: '24px',
          }}
        >
          <LanguageToggle variant="dark" />
        </div>


        {/* Menu Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
          }}
        >
          {/* Logo with social icons - Desktop: above container, Mobile: inside header */}
          <div
            className="hidden md:flex"
            style={{
              position: 'absolute',
              left: 'calc(50% + 30px)',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Black circle background */}
              <div
                style={{
                  position: 'absolute',
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#0D0D0D',
                  borderRadius: '50%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              />
              <img
                src="/logofull.png"
                alt="MEATUP"
                style={{ 
                  height: '80px', 
                  width: 'auto',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </a>
            {/* Social Icons under logo (like Kisu) */}
            <div 
              className="hidden md:flex items-center gap-2"
              style={{ marginTop: '8px' }}
            >
              <a
                href={config.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '4px',
                  backgroundColor: '#F4F4F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0D0D0D',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#CD7F32'; e.currentTarget.style.color = '#F4F4F2'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F4F4F2'; e.currentTarget.style.color = '#0D0D0D'; }}
                aria-label="Facebook"
              >
                <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={config.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '4px',
                  backgroundColor: '#F4F4F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0D0D0D',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#CD7F32'; e.currentTarget.style.color = '#F4F4F2'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F4F4F2'; e.currentTarget.style.color = '#0D0D0D'; }}
                aria-label="Instagram"
              >
                <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Main Header Bar */}
          <header
            style={{
              height: '64px',
              backgroundColor: '#F4F4F2',
              borderRadius: '0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              ...headerPadding,
            }}
          >
            {/* Left Side - Nav */}
            <nav 
              className="hidden md:flex items-center gap-10"
              aria-label={dict.a11y.menu}
            >
              {leftNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>

            {/* Center Spacer for Logo */}
            <div style={{ width: '65px', flexShrink: 0 }} className="hidden md:block" />

            {/* Right Side - Nav + Reserve */}
            <div className="hidden md:flex items-center gap-10">
              {rightNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
                  <button
                    onClick={handleReserveClick}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#CD7F32',
                      color: '#F4F4F2',
                      fontWeight: 600,
                      fontSize: '13px',
                      border: 'none',
                      borderRadius: '0',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                      whiteSpace: 'nowrap',
                      marginLeft: '8px',
                    }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b8722d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#CD7F32';
                }}
              >
                {dict.nav.reserve}
              </button>
            </div>

            {/* Mobile Logo - Inside header */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="md:hidden"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <img
                src="/logofull.png"
                alt="MEATUP"
                style={{ 
                  height: '50px', 
                  width: 'auto',
                }}
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              style={{
                padding: '8px',
                color: '#0D0D0D',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginRight: 'auto',
              }}
              aria-label={isMobileMenuOpen ? dict.a11y.closeMenu : dict.a11y.openMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </header>

              {/* Mobile Menu */}
              <div
                style={{
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, opacity 0.3s ease',
                  maxHeight: isMobileMenuOpen ? '500px' : '0',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  backgroundColor: '#0D0D0D',
                  marginTop: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
                className="md:hidden"
              >
            <nav style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {allNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={item.isExternal ? undefined : (e) => handleNavClick(e, item.href)}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'block',
                    padding: '14px 16px',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: activeSection === item.id ? '#CD7F32' : '#F4F4F2',
                    textAlign: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Reserve Button in Mobile Menu */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleReserveClick();
                }}
                style={{
                  marginTop: '16px',
                  padding: '16px 24px',
                  backgroundColor: '#CD7F32',
                  color: '#0D0D0D',
                  fontWeight: 600,
                  fontSize: '18px',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                {dict.nav.reserve}
              </button>
            </nav>
          </div>
        </div>
      </div>

      <ReserveModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />
    </>
  );
}
