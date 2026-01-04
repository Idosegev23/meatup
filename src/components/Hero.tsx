'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { config } from '@/data/config';
import ReserveModal from './ReserveModal';

export default function Hero() {
  const { dict, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserveClick = () => {
    // On mobile, redirect directly
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.location.href = config.tabitUrl;
    } else {
      setIsModalOpen(true);
    }
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const kosherText = language === 'he' ? config.kosher.he : config.kosher.en;

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80"
            alt="Premium steak"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-widest text-off-white mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {dict.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-off-white/90 mb-4 font-light">
            {dict.hero.subtitle}
          </p>

          {/* Kosher Line */}
          <p className="text-sm text-bronze/80 mb-10 tracking-wide">
            {kosherText}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleReserveClick}
              className="px-8 py-4 bg-bronze text-charcoal font-semibold text-lg rounded-lg hover:bg-bronze/90 transition-all hover:scale-105"
            >
              {dict.hero.cta.reserve}
            </button>
            <a
              href="#menu"
              onClick={handleMenuClick}
              className="px-8 py-4 border-2 border-off-white/30 text-off-white font-medium text-lg rounded-lg hover:border-bronze hover:text-bronze transition-colors"
            >
              {dict.hero.cta.menu}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-off-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <ReserveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

