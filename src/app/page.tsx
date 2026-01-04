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
  '/imgs/meatupimgs/hero.webp',
  '/imgs/meatupimgs/meats.webp',
  '/imgs/meatupimgs/img17_processed.webp',
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
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.location.href = config.tabitUrl;
    } else {
      setIsModalOpen(true);
    }
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
          {heroImages.map((src, index) => (
            <div
              key={src}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: currentImageIndex === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            >
              <Image
                src={src}
                alt="Premium steak"
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/50 to-[#0D0D0D]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 sm:px-10 lg:px-16 w-full max-w-4xl mx-auto flex flex-col items-center">
          <p style={{ 
            fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', 
            fontWeight: 600, 
            color: '#F4F4F2', 
            marginBottom: '56px',
            letterSpacing: '0.02em',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)'
          }}>
            {dict.hero.subtitle}
          </p>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={handleReserveClick}
              style={{
                padding: '18px 48px',
                backgroundColor: '#CD7F32',
                color: '#0D0D0D',
                fontWeight: 600,
                fontSize: '1rem',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 20px rgba(205, 127, 50, 0.4)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b8722d'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 25px rgba(205, 127, 50, 0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#CD7F32'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(205, 127, 50, 0.4)'; }}
            >
              {dict.hero.cta.reserve}
            </button>
            <a
              href="#menu"
              onClick={scrollToMenu}
              style={{
                padding: '18px 48px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                color: '#F4F4F2',
                fontWeight: 600,
                fontSize: '1rem',
                border: '2px solid rgba(244,244,242,0.5)',
                borderRadius: '50px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#CD7F32'; e.currentTarget.style.color = '#CD7F32'; e.currentTarget.style.backgroundColor = 'rgba(205, 127, 50, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(244,244,242,0.5)'; e.currentTarget.style.color = '#F4F4F2'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
            >
              {dict.hero.cta.menu}
            </a>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-[#0D0D0D]">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          {/* Text Content */}
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#F4F4F2', marginBottom: '24px' }}>
            {dict.about.title}
          </h2>
          
          <div style={{ width: '64px', height: '2px', backgroundColor: '#CD7F32', margin: '0 auto 32px auto' }} />
          
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
              src="/imgs/meatupimgs/img3.webp"
              alt="Restaurant ambiance"
              fill
              className="object-cover"
            />
          </div>

          {/* CTA Cards (like Kisu) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '24px', 
            marginTop: '60px',
            maxWidth: '700px',
            margin: '60px auto 0 auto'
          }}>
            {/* Reserve Table Card */}
            <a
              href={config.tabitUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              <Image
                src="/imgs/meatupimgs/img22_processed.webp"
                alt={language === 'he' ? 'הזמנת שולחן' : 'Reserve Table'}
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
                padding: '20px',
              }}>
                <span style={{
                  color: '#F4F4F2',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}>
                  {language === 'he' ? 'הזמנת שולחן' : 'Reserve Table'}
                </span>
              </div>
            </a>

            {/* Delivery Card */}
            <a
              href={config.tabitUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              <Image
                src="/imgs/meatupimgs/img21_processed.webp"
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
                padding: '20px',
              }}>
                <span style={{
                  color: '#F4F4F2',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}>
                  {language === 'he' ? 'משלוחים / איסוף עצמי' : 'Delivery / Pickup'}
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <Menu />

      {/* Gallery Section */}
      <GalleryBento />

      {/* Contact Section */}
      <Contact />

      <ReserveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
