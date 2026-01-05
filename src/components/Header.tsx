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
    { href: '#menu', id: 'menu', label: dict.nav.menu },
    { href: config.tabitUrl, id: 'delivery', label: language === 'he' ? 'משלוח/איסוף' : 'Delivery', isExternal: true },
  ];

  const rightNavItems = [
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
      
      {/* Full Width Header Row */}
      <div
        className="md:px-6"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: 50,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {/* Mobile: NO background - transparent header like Kisu */}
        {/* Language Toggle - Left Outside (Desktop) */}
        <div 
          className="hidden md:flex"
          style={{ 
            position: 'absolute',
            left: '24px',
          }}
        >
          <LanguageToggle variant="dark" />
        </div>

        {/* ========== MOBILE FIXED ELEMENTS ========== */}
        
        {/* Mobile Left Side - Quick Actions (fixed) - Waze first, then Phone */}
        <div 
          className="flex md:hidden items-center gap-2"
          style={{
            position: 'absolute',
            left: '16px',
            top: '10px',
            zIndex: 60,
          }}
        >
          {/* Waze Button - Black circle with custom colors */}
          <a
            href={config.wazeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#0D0D0D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Waze"
          >
            <svg width="22" height="22" viewBox="0 0 122.71 122.88" style={{ overflow: 'visible' }}>
              {/* Face fill - black */}
              <path fill="#0D0D0D" d="M55.14,104.21c4.22,0,8.44,0.19,12.66-0.09c3.84-0.19,7.88-0.56,11.63-1.5c29.82-7.31,45.76-40.23,32.72-68.07 C104.27,17.76,90.77,8.19,72.3,6.22c-14.16-1.5-26.82,2.72-37.51,12.28c-10.5,9.47-15.94,21.28-16.31,35.44 c-0.09,3.28,0,6.66,0,9.94C18.38,71.02,14.35,76.55,7.5,78.7c-0.09,0-0.28,0.19-0.38,0.19c2.63,6.94,13.31,17.16,19.97,19.69 C35.45,87.14,52.32,91.18,55.14,104.21L55.14,104.21z"/>
              {/* Outline - orange */}
              <path fill="#CD7F32" d="M54.95,110.49c-1.03,4.69-3.56,8.16-7.69,10.31c-5.25,2.72-10.6,2.63-15.57-0.56c-5.16-3.28-7.41-8.25-7.03-14.35 c0.09-1.03-0.19-1.41-1.03-1.88c-9.1-4.78-16.31-11.44-21.28-20.44c-0.94-1.78-1.69-3.66-2.16-5.63c-0.66-2.72,0.38-4.03,3.19-4.31 c3.38-0.38,6.38-1.69,7.88-4.88c0.66-1.41,1.03-3.09,1.03-4.69c0.19-4.03,0-8.06,0.19-12.1c1.03-15.57,7.5-28.5,19.32-38.63 C42.67,3.97,55.42-0.43,69.76,0.03c25.04,0.94,46.51,18.57,51.57,43.23c4.59,22.32-2.34,40.98-20.07,55.51 c-1.03,0.84-2.16,1.69-3.38,2.44c-0.66,0.47-0.84,0.84-0.56,1.59c2.34,7.13-0.94,15-7.5,18.38c-8.91,4.41-19.22-0.09-21.94-9.66 c-0.09-0.38-0.56-0.84-0.84-0.84C63.11,110.4,59.07,110.49,54.95,110.49L54.95,110.49z M55.14,104.21c4.22,0,8.44,0.19,12.66-0.09 c3.84-0.19,7.88-0.56,11.63-1.5c29.82-7.31,45.76-40.23,32.72-68.07C104.27,17.76,90.77,8.19,72.3,6.22 c-14.16-1.5-26.82,2.72-37.51,12.28c-10.5,9.47-15.94,21.28-16.31,35.44c-0.09,3.28,0,6.66,0,9.94 C18.38,71.02,14.35,76.55,7.5,78.7c-0.09,0-0.28,0.19-0.38,0.19c2.63,6.94,13.31,17.16,19.97,19.69 C35.45,87.14,52.32,91.18,55.14,104.21L55.14,104.21z"/>
              {/* Smile - orange */}
              <path fill="#CD7F32" d="M74.92,79.74c-11.07-0.56-18.38-4.97-23.07-13.78c-1.13-2.16-0.09-4.31,2.06-4.78c1.31-0.28,2.53,0.66,3.47,2.16 c1.22,1.88,2.44,3.75,4.03,5.25c8.81,8.34,23.25,5.72,28.79-5.06c0.66-1.31,1.5-2.34,3.09-2.34c2.34,0.09,3.66,2.44,2.63,4.59 c-2.91,5.91-7.5,10.22-13.69,12.28C79.51,78.99,76.7,79.36,74.92,79.74L74.92,79.74z"/>
              {/* Left eye - orange */}
              <path fill="#CD7F32" d="M55.32,48.98c-3.38,0-6.09-2.72-6.09-6.09s2.72-6.09,6.09-6.09s6.09,2.72,6.09,6.09C61.42,46.17,58.7,48.98,55.32,48.98 L55.32,48.98z"/>
              {/* Right eye - orange */}
              <path fill="#CD7F32" d="M98.27,42.79c0,3.38-2.72,6.09-6,6.19c-3.38,0-6.09-2.63-6.09-6.09c0-3.38,2.63-6.09,6-6.19 C95.46,36.7,98.17,39.42,98.27,42.79L98.27,42.79z"/>
            </svg>
          </a>

          {/* Phone Button - Black circle with orange icon */}
          <a
            href={config.phoneLink}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#0D0D0D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Call"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CD7F32" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
        </div>

        {/* Language Toggle - Mobile (below icons on left, subtle bookmark style) */}
        <div 
          className="flex md:hidden"
          style={{ 
            position: 'absolute',
            left: '0px',
            top: '68px',
            zIndex: 60,
            backgroundColor: '#f5f5f5',
            padding: '2px 6px 2px 8px',
          }}
        >
          <LanguageToggle variant="dark" />
        </div>

        {/* Mobile Center - Logo (fixed) - starts from top of screen */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex md:hidden items-center justify-center"
          style={{
            position: 'absolute',
            left: '50%',
            top: '19px', // Start from very top
            transform: 'translateX(-50%)',
            zIndex: 60,
          }}
        >
          {/* Black circle background - larger */}
          <div
            style={{
              position: 'absolute',
              width: '90px',  // Bigger circle
              height: '90px',
              backgroundColor: '#0D0D0D',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          />
          <img
            src="/logofull.png"
            alt="MEATUP"
            style={{ 
              height: '70px',  // Bigger logo
              width: 'auto',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </a>

        {/* Mobile Right Side - Hamburger Menu (fixed) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden flex-col items-center justify-center"
          style={{
            position: 'absolute',
            right: '16px',
            top: '13px',
            zIndex: 60,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            gap: '7px',
            width: '50px',
            height: '50px',
          }}
          aria-label={isMobileMenuOpen ? dict.a11y.closeMenu : dict.a11y.openMenu}
        >
          {/* 3 thin lines / X animation */}
          <span style={{ 
            display: 'block',
            width: '32px', 
            height: '2px', 
            backgroundColor: '#1a1a1a', 
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'translateY(9px) rotate(45deg)' : 'none',
          }} />
          <span style={{ 
            display: 'block',
            width: '32px', 
            height: '2px', 
            backgroundColor: '#1a1a1a', 
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? 0 : 1,
          }} />
          <span style={{ 
            display: 'block',
            width: '32px', 
            height: '2px', 
            backgroundColor: '#1a1a1a', 
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'translateY(-9px) rotate(-45deg)' : 'none',
          }} />
        </button>

        {/* ========== END MOBILE FIXED ELEMENTS ========== */}

        {/* Menu Container */}
        <div
          className="w-full md:max-w-[900px]"
          style={{
            position: 'relative',
          }}
        >
          {/* Logo - Desktop: above container, lowered 20px */}
          <div
            className="hidden md:flex"
            style={{
              position: 'absolute',
              left: 'calc(50% + 30px)',
              top: '50%',
              transform: 'translate(-50%, -20%)',
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
                  width: '110px',
                  height: '110px',
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
          </div>

          {/* Main Header Bar - Mobile: soft white-gray like Kisu */}
          <header
            className="md:bg-[#F4F4F2] md:shadow-lg md:mt-5 h-[60px] md:h-[64px]"
            style={{
              borderRadius: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 8px',
              backgroundColor: '#f5f5f5',
            }}
          >
            {/* Flex spacer to push left nav toward logo */}
            <div className="hidden md:flex" style={{ flex: 0.7 }} />

            {/* Left Side - Nav */}
            <nav 
              className="hidden md:flex items-center gap-6"
              aria-label={dict.a11y.menu}
            >
              {leftNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>

            {/* Center Spacer for Logo */}
            <div style={{ width: '140px', flexShrink: 0 }} className="hidden md:block" />

            {/* Right Side - Nav + Reserve + Social Icons (larger gaps) */}
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

              {/* Social Icons next to nav */}
              <div className="flex items-center gap-2" style={{ marginLeft: '8px' }}>
                <a
                  href={config.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '4px',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0D0D0D',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#CD7F32'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#0D0D0D'; }}
                  aria-label="Facebook"
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
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
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0D0D0D',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#CD7F32'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#0D0D0D'; }}
                  aria-label="Instagram"
                >
                  <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

          </header>

              {/* Mobile Menu - same solid color as header bar */}
              <div
                style={{
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, opacity 0.3s ease',
                  maxHeight: isMobileMenuOpen ? '500px' : '0',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  backgroundColor: '#f5f5f5',
                  width: '100%',
                }}
                className="md:hidden"
              >
            <nav style={{ paddingTop: '40px', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
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
                    color: activeSection === item.id ? '#CD7F32' : '#0D0D0D',
                    textAlign: 'center',
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
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
                  marginTop: '12px',
                  padding: '16px 24px',
                  backgroundColor: '#CD7F32',
                  color: '#F4F4F2',
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
