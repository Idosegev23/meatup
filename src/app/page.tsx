'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { config } from '@/data/config';
import ReserveModal from '@/components/ReserveModal';
import Menu from '@/components/Menu';
import GalleryBento from '@/components/GalleryBento';
import Contact from '@/components/Contact';

export default function HomePage() {
  const { dict, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/meatupimgs/hero.webp"
            alt="Premium steak"
            fill
            priority
            className="object-cover"
          />
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
