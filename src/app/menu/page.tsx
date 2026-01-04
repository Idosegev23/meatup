'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { menuData } from '@/data/menu';
import { config } from '@/data/config';

export default function MenuPage() {
  const { dict, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  const kosherText = language === 'he' ? config.kosher.he : config.kosher.en;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
            alt="Menu background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-off-white mb-4">
            {dict.menu.title}
          </h1>
          <div className="w-16 h-0.5 bg-bronze mx-auto mb-4" />
          <p className="text-bronze text-sm tracking-wide">
            {kosherText}
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs - Sticky on mobile */}
          <div className="sticky top-16 md:top-20 z-20 bg-off-white py-4 -mx-4 px-4 md:mx-0 md:px-0 mb-8">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 md:justify-center min-w-max pb-2">
                {menuData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? 'bg-charcoal text-off-white shadow-lg'
                        : 'bg-charcoal/10 text-charcoal hover:bg-charcoal/20'
                    }`}
                  >
                    {language === 'he' ? category.name.he : category.name.en}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            {menuData.map((category) => (
              <div
                key={category.id}
                className={activeCategory === category.id ? 'block animate-fade-in' : 'hidden'}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-charcoal">
                    {language === 'he' ? category.name.he : category.name.en}
                  </h2>
                </div>

                <div className="space-y-0">
                  {category.items.map((item, index) => (
                    <div
                      key={item.id}
                      className={`py-6 ${
                        index !== category.items.length - 1 ? 'border-b border-charcoal/10' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-charcoal mb-1">
                            {language === 'he' ? item.name.he : item.name.en}
                          </h3>
                          <p className="text-charcoal/60 text-sm leading-relaxed">
                            {language === 'he' ? item.description.he : item.description.en}
                          </p>
                        </div>
                        <div className="text-lg font-semibold text-bronze whitespace-nowrap">
                          {dict.menu.currency}{item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative element */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-charcoal/20" />
              <svg className="w-6 h-6 text-bronze" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <div className="w-12 h-px bg-charcoal/20" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

