'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { config } from '@/data/config';
import ReserveModal from '@/components/ReserveModal';
import Menu from '@/components/Menu';
import GalleryBento from '@/components/GalleryBento';
import Contact from '@/components/Contact';

const heroImages = [
  {
    src: '/imgs/dishes/Ribeye-steak-antricot.webp',
    alt: {
      he: 'אנטריקוט ריביי פרוס עם מח עצם ורטבים',
      en: 'Sliced ribeye steak with bone marrow and sauces',
    },
  },
  {
    src: '/imgs/dishes/meats.webp',
    alt: {
      he: 'נתח סטייק פרוס מונף על מזלג מעל צלחת הגשה',
      en: 'A slice of steak lifted on a fork above a serving plate',
    },
  },
  {
    src: '/imgs/dishes/burgers.webp',
    alt: {
      he: 'המבורגר בשר עם בצל מקורמל ועשבי תיבול',
      en: 'Beef burger with caramelized onion and herbs',
    },
  },
];

export default function HomePage() {
  const { dict, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleReserveClick = () => {
    setIsModalOpen(true);
  };

  const kosherText = language === 'he' ? config.kosher.he : config.kosher.en;

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-end justify-center" style={{ paddingBottom: '35vh' }}>
        {/* Background Images - Rotating */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: currentImageIndex === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            >
              <Image
                src={image.src}
                alt={language === 'he' ? image.alt.he : image.alt.en}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 sm:px-10 lg:px-16 w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Hero Text - both mobile and desktop */}
          <p 
            dir="ltr"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 5rem)', 
              fontWeight: 700, 
              color: 'rgba(244,244,242,0.85)', 
              marginBottom: '40px',
              letterSpacing: '0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              lineHeight: 1.1,
              opacity: 0.75,
            }}
          >
            <span className="md:hidden">GRILL<br />BURGER<br />&<br />MORE</span>
            <span className="hidden md:block">GRILL BURGER & MORE</span>
          </p>

        </div>

        {/* Dots + Arrow at bottom of hero - both mobile and desktop */}
        <div 
          className="flex flex-col items-center"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
          }}
        >
          {/* Dots */}
          <div className="flex items-center gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                style={{
                  width: currentImageIndex === index ? '12px' : '10px',
                  height: currentImageIndex === index ? '12px' : '10px',
                  borderRadius: '50%',
                  backgroundColor: currentImageIndex === index ? '#BF9B7A' : 'rgba(244,244,242,0.4)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Large Scroll Arrow - elegant and prominent */}
          <button
            onClick={scrollToMenu}
            className="flex flex-col items-center"
            style={{
              marginTop: '36px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              animation: 'bounce 1s infinite',
            }}
          >
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.5">
              <path d="M5 9l7 7 7-7"/>
            </svg>
          </button>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-[#1A1A1A]">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          {/* Text Content */}
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#F2F1F0', marginBottom: '24px' }}>
            {dict.about.title}
          </h2>
          
          <div style={{ width: '64px', height: '2px', backgroundColor: '#BF9B7A', margin: '0 auto 32px auto' }} />
          
          <p style={{ fontSize: '1.125rem', color: 'rgba(244,244,242,0.85)', lineHeight: 1.8, marginBottom: '24px' }}>
            {dict.about.text1}
          </p>
          
          <p style={{ fontSize: '1.125rem', color: 'rgba(244,244,242,0.85)', lineHeight: 1.8, marginBottom: '24px' }}>
            {dict.about.text2}
          </p>
          
          <p style={{ fontSize: '1.125rem', color: 'rgba(244,244,242,0.85)', lineHeight: 1.8, marginBottom: '48px' }}>
            {dict.about.text3}
          </p>

          {/* Image */}
          <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src="/imgs/dishes/img3.webp"
              alt={language === 'he' ? 'מלצר מגיש המבורגר עוף פריך' : 'Server presenting a crispy chicken burger'}
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* CTA Cards (like Kisu) - Full width */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ 
            gap: '24px', 
            marginTop: '40px',
            maxWidth: '1200px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0 24px',
          }}
        >
            {/* Reserve & Pickup Card - Tabit */}
            <a
              href={config.tabitUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                aspectRatio: '16/10',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              <Image
                src="/imgs/dishes/new3.webp"
                alt={language === 'he' ? 'הזמנת מקום / איסוף' : 'Reserve / Pickup'}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                padding: '24px',
              }}>
                <span style={{
                  color: '#F2F1F0',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}>
                  {language === 'he' ? 'הזמנת מקום / איסוף' : 'Reserve / Pickup'}
                </span>
              </div>
            </a>

            {/* Delivery Card - Wolt */}
            <a
              href={config.woltUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                aspectRatio: '16/10',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              <Image
                src="/imgs/dishes/new2.webp"
                alt={language === 'he' ? 'משלוחים' : 'Delivery'}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                padding: '24px',
              }}>
                <span style={{
                  color: '#F2F1F0',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}>
                  {language === 'he' ? 'משלוחים' : 'Delivery'}
                </span>
              </div>
            </a>
          </div>
      </section>

      {/* Menu Section */}
      <Menu />

      {/* Celebration Strip */}
      <section 
        style={{
          position: 'relative',
          padding: '48px 16px',
          backgroundImage: 'url(/imgs/dishes/new1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(191, 155, 122, 0.92)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}>
          <span style={{
            color: '#F2F1F0',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            fontSize: '2rem',
            fontWeight: 700,
          }}>
            {language === 'he' 
              ? 'רוצים לחגוג אצלנו ב-MEATUP? לחצו להזמנת שולחן!' 
              : 'Want to celebrate at MEATUP? Click to reserve a table!'}
          </span>
          <a
            href={config.tabitUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#BF9B7A',
              color: '#1A1A1A',
              padding: '12px 28px',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '2px solid #1A1A1A',
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.backgroundColor = '#A8876A'; 
              e.currentTarget.style.transform = 'translateY(-2px)'; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.backgroundColor = '#BF9B7A'; 
              e.currentTarget.style.transform = 'translateY(0)'; 
            }}
          >
            {language === 'he' ? 'לחצו להזמנה' : 'Book Now'}
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <GalleryBento />

      {/* Contact Section */}
      <Contact />

      <ReserveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
